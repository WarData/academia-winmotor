"use client";

import { useState } from "react";

interface Question {
  id: string;
  question: string;
  options: string[];
  explanation?: string;
  order?: number;
  correctAnswer?: number;
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
          quiz,
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

  if (!quiz) return null;

  if (showResults && result) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Resultados</h2>
        <p className="mt-3 text-slate-700">
          Has acertado <strong>{result.score}</strong> de <strong>{result.total}</strong> preguntas.
        </p>
        <p className="mt-1 text-slate-700">Puntuación: {result.percentage}%</p>
        <p className={`mt-2 font-semibold ${result.passed ? "text-green-600" : "text-red-600"}`}>
          {result.passed ? "Aprobado" : "No aprobado"}
        </p>

        <div className="mt-8 space-y-5">
          {quiz.questions.map((q, idx) => {
            const review = result.results.find((r) => r.questionId === q.id);
            const userAnswer = selectedAnswers[q.id];
            const correctIndex =
              typeof review?.correctAnswer === "number"
                ? review.correctAnswer
                : Number(review?.correctAnswer);

            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">
                  {idx + 1}. {q.question}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Tu respuesta: {typeof userAnswer === "number" ? q.options[userAnswer] : "Sin responder"}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Respuesta correcta: {Number.isFinite(correctIndex) ? q.options[correctIndex] : "No disponible"}
                </p>
                <p className={`mt-2 text-sm font-semibold ${review?.isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {review?.isCorrect ? "Correcta" : "Incorrecta"}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Explicación: {review?.explanation || q.explanation || "Sin explicación."}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            setStarted(false);
            setQuiz(null);
            setResult(null);
            setSelectedAnswers({});
            setCurrentQuestion(0);
            setShowResults(false);
            setError(null);
          }}
          className="mt-8 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
        >
          Reintentar
        </button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const selectedIndex = selectedAnswers[question.id];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;
  const canGoNext = selectedIndex !== undefined;

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            {quiz.title || "Quiz"}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Pregunta {currentQuestion + 1} de {quiz.questions.length}
          </h2>
        </div>
        <div className="text-sm text-slate-500">
          {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
        </div>
      </div>

      <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-50 p-6">
        <h3 className="text-xl font-semibold leading-relaxed text-slate-900">
          {question.question}
        </h3>

        <div className="mt-6 grid gap-3">
          {question.options.map((opt, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={`${question.id}-${idx}`}
                type="button"
                onClick={() => handleAnswer(question.id, idx)}
                className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-200"
                    : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50"
                }`}
              >
                <span className="block text-sm font-medium">
                  {String.fromCharCode(65 + idx)}. {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentQuestion === 0}
          className="inline-flex rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
            className="inline-flex rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Enviar Quiz
          </button>
        )}
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}
