import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { moduleQuizzes } from "@/data/content";

type RouteContext = {
  params: Promise<{ moduleSlug: string }>;
};

function buildFallbackQuiz(moduleSlug: string) {
  const fallbackQuiz = moduleQuizzes[moduleSlug as keyof typeof moduleQuizzes];

  if (!fallbackQuiz) return null;

  return {
    id: `fallback-${moduleSlug}`,
    title: fallbackQuiz.title,
    module: {
      name: fallbackQuiz.title,
      slug: moduleSlug,
    },
    passingScore: 70,
    questions: fallbackQuiz.questions.map((q, index) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      explanation: q.explanation,
      order: index + 1,
      correctAnswer: q.correctAnswer,
    })),
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
    console.error("Error loading quiz:", error);

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

    const dbQuiz = await prisma.quiz.findFirst({
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
      await prisma.quizAttempt.create({
        data: {
          userId,
          quizId: dbQuiz.id,
          score: percentage,
          passed,
          answers: JSON.stringify(answers),
        },
      });
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
