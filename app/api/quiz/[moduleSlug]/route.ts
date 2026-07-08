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

function normalizeQuizForClient(quiz: {
  id: string;
  title?: string | null;
  passingScore?: number | null;
  module?: { name?: string | null; slug?: string | null } | null;
  questions: QuestionShape[];
}) {
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
      
