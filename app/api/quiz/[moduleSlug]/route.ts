import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { moduleQuizzes } from "@/data/content";

type RouteContext = {
  params: Promise<{ moduleSlug: string }>;
};

type QuestionShape = {
  id: string;
  question: string;
  options: string[];
  explanation?: string | null;
  correctAnswer: number;
  order?: number | null;
};

type QuizShape = {
  id: string;
  title?: string | null;
  passingScore?: number | null;
  module?: {
    name?: string | null;
    slug?: string | null;
  } | null;
  questions: QuestionShape[];
};

function shuffleArray<T>(items: T[]) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function shuffleQuestion(question: QuestionShape): QuestionShape {
  const optionEntries = question.options.map((option, optionIndex) => ({
    option,
    isCorrect: optionIndex === Number(question.correctAnswer),
  }));

  const shuffledOptions = shuffleArray(optionEntries);
  const correctAnswer = shuffledOptions.findIndex((entry) => entry.isCorrect);

  return {
    ...question,
    options: shuffledOptions.map((entry) => entry.option),
    correctAnswer,
  };
}

function normalizeQuizForClient(quiz: QuizShape) {
  return {
    id: quiz.id,
    title: quiz.title ?? quiz.module?.name ?? "Quiz",
    passingScore: quiz.passingScore ?? 70,
    module: {
      name: quiz.module?.name ?? quiz.title ?? "Quiz",
      slug: quiz.module?.slug ?? "",
    },
    questions: quiz.questions
      .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))
      .map((question, index) => ({
        ...shuffleQuestion(question),
        order: index + 1,
      })),
  };
}

function buildFallbackQuiz(moduleSlug: string) {
  const fallbackQuiz = moduleQuizzes[moduleSlug as keyof typeof moduleQuizzes];

  if (!fallbackQuiz) return null;

  return normalizeQuizForClient({
    id: `fallback-${moduleSlug}`,
    title: fallbackQuiz.title,
    passingScore: 70,
    module: {
      name: fallbackQuiz.title,
      slug: moduleSlug,
    },
    questions: fallbackQuiz.questions.map((q, index) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      explanation: q.explanation,
      correctAnswer: Number(q.correctAnswer),
      order: index + 1,
    })),
  });
}

async function getDbQuiz(moduleSlug: string) {
  const quiz = await prisma.quiz.findFirst({
    where: {
      module: { slug: moduleSlug },
    },
    include: {
      module: {
        select: {
          name: true,
          slug: true,
        },
      },
      questions: {
        orderBy: {
          order: "asc",
        },
        select: {
          id: true,
          question: true,
          options: true,
          explanation: true,
          order: true,
          correctAnswer: true,
        },
      },
    },
  });

  if (!quiz) return null;

  return normalizeQuizForClient({
    id: quiz.id,
    title: (quiz as any).title ?? quiz.module?.name ?? "Quiz",
    passingScore: (quiz as any).passingScore ?? 70,
    module: quiz.module,
    questions: quiz.questions.map((q) => ({
      id: q.id,
      question: q.question,
      options: Array.isArray(q.options) ? (q.options as string[]) : [],
      explanation: q.explanation,
      order: q.order,
      correctAnswer: Number(q.correctAnswer),
    })),
  });
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const { moduleSlug } = await params;

  try {
    const quiz = await getDbQuiz(moduleSlug);

    if (quiz) {
      return NextResponse.json({ quiz });
    }

    const fallbackQuiz = buildFallbackQuiz(moduleSlug);

    if (!fallbackQuiz) {
      return NextResponse.json(
        { error: "No se ha encontrado el quiz para este módulo." },
        { status: 404 }
      );
    }

    return NextResponse.json({ quiz: fallbackQuiz });
  } catch (error) {
    console.error("Database unavailable in quiz load, using fallback:", error);

    const fallbackQuiz = buildFallbackQuiz(moduleSlug);

    if (!fallbackQuiz) {
      return NextResponse.json(
        { error: "No se ha podido cargar el quiz." },
        { status: 500 }
      );
    }

    return NextResponse.json({ quiz: fallbackQuiz });
  }
}

export async function POST(req: NextRequest, { params }: RouteContext) {
  const { moduleSlug } = await params;

  try {
    const body = await req.json();
    const answers = Array.isArray(body?.answers) ? body.answers : [];
    const userId = body?.userId ?? null;
    const quizPayload = body?.quiz ?? null;

    let dbQuiz = null;

    try {
      dbQuiz = await getDbQuiz(moduleSlug);
    } catch (error) {
      console.error("Database unavailable in quiz submit, using payload/fallback:", error);
    }

    const quiz =
      quizPayload && Array.isArray(quizPayload.questions)
        ? quizPayload
        : dbQuiz ?? buildFallbackQuiz(moduleSlug);

    if (!quiz) {
      return NextResponse.json(
        { error: "No se ha encontrado el quiz para corregirlo." },
        { status: 404 }
      );
    }

    const questions = Array.isArray(quiz.questions) ? quiz.questions : [];

    const results = answers.map(
      (answer: { questionId: string; answer: number | string }) => {
        const matchedQuestion = questions.find((q: QuestionShape) => q.id === answer.questionId);
        const isCorrect =
          matchedQuestion != null &&
          String(matchedQuestion.correctAnswer) === String(answer.answer);

        return {
          questionId: answer.questionId,
          isCorrect,
          correctAnswer: matchedQuestion?.correctAnswer ?? null,
          explanation: matchedQuestion?.explanation ?? "",
        };
      }
    );

    const correctCount = results.filter((r) => r.isCorrect).length;
    const total = questions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passingScore = quiz.passingScore ?? 70;
    const passed = percentage >= passingScore;

    if (dbQuiz && userId) {
      try {
        await prisma.quizAttempt.create({
          data: {
            userId,
            quizId: quiz.id,
            score: percentage,
            passed,
            answers: JSON.stringify(answers),
          },
        });
      } catch (error) {
        console.error("Quiz attempt could not be saved:", error);
      }
    }

    return NextResponse.json({
      score: correctCount,
      total,
      percentage,
      passed,
      passingScore,
      results,
    });
  } catch (error) {
    console.error("Error submitting quiz:", error);

    return NextResponse.json(
      { error: "No se ha podido procesar el cuestionario." },
      { status: 500 }
    );
  }
}
