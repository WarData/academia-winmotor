"use client";

import { useState } from "react";

interface Question {
  id: string;
  question: string;
  options: string[];
  explanation?: string;
  order?: number;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  module?: { name?: string; slug?: string };
  passingScore?: number;
}

interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  passingScore: number;
  results: Array<{
    questionId: string;
    isCorrect: boolean;
    correctAnswer: number | string | null;
    explanation?: string;
  }>;
}

interface QuizCardProps {
  moduleSlug: string;
}

export default function QuizCard({ moduleSlug }: QuizCardProps) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [started, setStarted] = useState(false);

  const loadQuiz = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/quiz/${moduleSlug}`, { cache: "no-store" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Quiz no encontrado");
      }

      const loadedQuiz = data?.quiz;

      if (!loadedQuiz || !Array.isArray(loadedQuiz.questions) || loadedQuiz.questions.length === 0) {
        throw new Error("El quiz no contiene preguntas.");
      }

      setQuiz(loadedQuiz);
      setStarted(true);
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setShowResults(false);
      setResult(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo cargar el quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (questionId: string, index: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: index,
    }));
  };

  const goNext = () => {
    if (!quiz) return;
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!quiz) return;

    const answers = quiz.questions.map((q) => ({
      questionId: q.id,
      answer: selectedAnswers[q.id] ?? -1,
    }));

    try {
      const res = await fetch(`/api/quiz/${moduleSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "anonymous",
          answers,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Error al enviar respuestas.");
      }

      setResult(data);
      setShowResults(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar respuestas.");
    }
  };

  if (!started) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Quiz del módulo</h2>
        <p className="mt-2 text-slate-600">Pon a prueba tus conocimientos.</p>

        <button
          onClick={loadQuiz}
          disabled={loading}
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Cargando..." : "Iniciar Quiz"}
        </button>

        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
      </div>
    );
  }

