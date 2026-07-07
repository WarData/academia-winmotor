import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { moduleQuizzes } from "@/data/content";

type RouteContext = {
  params: Promise<{ moduleSlug: string }>;
};

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const { moduleSlug } = await params;

  try {
    const quiz = await prisma.quiz.findFirst({
      where: { module: { slug: moduleSlug }, isActive: true },
      include: {
        questions: {
          where: { isActive: true },
          orderBy: { order: "asc" },
          select: {
            id: true,
            question: true,
            options: true,
            explanation: true,
            order: true,
          },
        },
        module: { select: { name: true, slug: true } },
      },
    });

    if (!quiz) {
      const fallbackQuiz = moduleQuizzes[moduleSlug as keyof typeof moduleQuizzes];
      if (!fallbackQuiz) {
        return NextResponse.json({ error: "Quiz no encontrado" }, { status: 404 });
      }

      return NextResponse.json({
        quiz: {
          id: `fallback-${moduleSlug}`,
          module: { name: fallbackQuiz.title, slug: moduleSlug },
          questions: fallbackQuiz.questions.map((q, index) => ({
            id: q.id,
            question: q.question,
            options: q.options,
            explanation: q.explanation,
            order: index + 1,
          })),
        },
      });
    }

    return NextResponse.json({ quiz });
  } catch {
    const fallbackQuiz = moduleQuizzes[moduleSlug as keyof typeof moduleQuizzes];
    if (!fallbackQuiz) {
      return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }

    return NextResponse.json({
      quiz: {
        id: `fallback-${moduleSlug}`,
        module: { name: fallbackQuiz.title, slug: moduleSlug },
        questions: fallbackQuiz.questions.map((q, index) => ({
          id: q.id,
          question: q.question,
          options: q.options,
          explanation: q.explanation,
          order: index + 1,
        })),
      },
    });
  }
}

export async function POST(req: NextRequest, { params }: RouteContext) {
  const { moduleSlug } = await params;

  try {
    const { userId, answers } = await req.json();

    if (!userId || !Array.isArray(answers)) {
      return NextResponse.json({ error: "Parametros invalidos" }, { status: 400 });
    }

    const quiz = await prisma.quiz.findFirst({
      where: { module: { slug: moduleSlug }, isActive: true },
      include: {
        questions: {
          where: { isActive: true },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!quiz) {
      return NextResponse.json({ error: "Quiz no encontrado" }, { status: 404 });
    }

    let score = 0;

    const results = answers.map((a: { questionId: string; answer: string }) => {
      const q = quiz.questions.find((x) => x.id === a.questionId);
      const ok = q?.correctAnswer === a.answer;
      if (ok) score++;
      return {
        questionId: a.questionId,
        isCorrect: ok,
        correctAnswer: q?.correctAnswer,
        explanation: q?.explanation,
      };
    });

    const pct = Math.round((score / quiz.questions.length) * 100);
    const passed = pct >= (quiz.passingScore ?? 70);

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId: quiz.id,
        score: pct,
        passed,
        answers: JSON.stringify(answers),
      },
    });

    return NextResponse.json({
      attemptId: attempt.id,
      score,
      total: quiz.questions.length,
      percentage: pct,
      passed,
      passingScore: quiz.passingScore ?? 70,
      results,
    });
  } catch {
    return NextResponse.json(
      { error: "No se ha podido registrar el resultado del quiz" },
      { status: 500 }
    );
  }
}
