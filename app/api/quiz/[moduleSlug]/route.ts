import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { moduleQuizzes } from "@/data/content";

type RouteContext = {
  params: Promise<{ moduleSlug: string }>;
};

type FallbackQuestion = {
  id: string;
  question: string;
  options: string[];
  explanation?: string;
  correctAnswer: number;
  order: number;
};

function shuffleArray<T>(items: T[]) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function buildFallbackQuiz(moduleSlug: string) {
  const fallbackQuiz = moduleQuizzes[moduleSlug as keyof typeof moduleQuizzes];

  if (!fallbackQuiz) return null;

  const questions: FallbackQuestion[] = fallbackQuiz.questions.map((q, index) => {
    const optionEntries = q.options.map((option, optionIndex) => ({
      option,
      isCorrect: optionIndex === q.correctAnswer,
    }));

    const shuffledOptions = shuffleArray(optionEntries);
    const correctAnswer = shuffledOptions.findIndex((entry) => entry.isCorrect);

    return {
      id: q.id,
      question: q.question,
      options: shuffledOptions.map((entry) => entry.option),
      explanation: q.explanation,
      order: index + 1,
      correctAnswer,
    };
  });

  return {
    id: `fallback-${moduleSlug}`,
    title: fallbackQuiz.title,
    module: {
      name: fallbackQuiz.title,
      slug: moduleSlug,
    },
    passingScore: 70,
    questions,
  };
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const { moduleSlug } = await params;

  try {
    const quiz = await prisma.quiz.findFirst({
      where: {
        module: { slug: moduleSlug },
        isActive: true,
      },
      include: {
        module: {
          select: {
            name: true,
            slug: true,
          },
        },
        questions: {
          where: { isActive: true },
          orderBy: { order: "asc" },
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

    let dbQuiz = null;

    try {
      dbQuiz = await prisma.quiz.findFirst({
        where: {
          module: { slug: moduleSlug },
          isActive: true,
        },
        include: {
          questions: {
            where: { isActive: true },
            orderBy: { order: "asc" },
            select: {
              id: true,
              correctAnswer: true,
              explanation: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Database unavailable in quiz submit, using fallback:", error);
    }

    const quiz = dbQuiz ?? buildFallbackQuiz(moduleSlug);

    if (!quiz) {
      return NextResponse.json(
        { error: "No se ha encontrado el quiz para corregirlo." },
        { status: 404 }
      );
    }

    const questions = quiz.questions ?? [];

    const results = answers.map(
      (answer: { questionId: string; answer: number | string }) => {
        const matchedQuestion = questions.find((q) => q.id === answer.questionId);
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
    const passingScore = "passingScore" in quiz ? (quiz.passingScore ?? 70) : 70;
    const passed = percentage >= passingScore;

    if (dbQuiz && userId) {
      try {
        await prisma.quizAttempt.create({
          data: {
            userId,
            quizId: dbQuiz.id,
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
      { error: "No se ha podido procesar el 
