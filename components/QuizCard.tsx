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
      <div className="wm-card mx-auto max-w-3xl p-8">
        <div className="wm-logo-badge mb-4">Evaluación del módulo</div>
        <h2 className="wm-page-title text-3xl">Quiz del módulo</h2>
        <p className="wm-subtitle mt-2">Pon a prueba tus conocimientos con la identidad Winmotor Academy.</p>

        <button
          onClick={loadQuiz}
          disabled={loading}
          className="wm-button-primary mt-6 inline-flex px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Cargando..." : "Iniciar Quiz"}
        </button>

        {error && <p className="mt-4 text-sm font-medium text-red-400">{error}</p>}
      </div>
    );
  }

  if (!quiz) return null;

  if (showResults && result) {
    return (
      <div className="wm-card mx-auto max-w-3xl p-8">
        <div className="wm-logo-badge mb-4">Resultado final</div>
        <h2 className="wm-page-title text-3xl">Resultados</h2>
        <p className="wm-subtitle mt-3">
          Has acertado <strong className="text-white">{result.score}</strong> de{" "}
          <strong className="text-white">{result.total}</strong> preguntas.
        </p>
        <p className="wm-subtitle mt-1">Puntuación: {result.percentage}%</p>
        <p className={`mt-2 font-semibold ${result.passed ? "text-green-400" : "text-red-400"}`}>
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
              <div key={q.id} className="wm-section">
                <p className="text-base font-semibold text-white">
                  {idx + 1}. {q.question}
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Tu respuesta: {typeof userAnswer === "number" ? q.options[userAnswer] : "Sin responder"}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  Respuesta correcta: {Number.isFinite(correctIndex) ? q.options[correctIndex] : "No disponible"}
                </p>
                <p className={`mt-2 text-sm font-semibold ${review?.isCorrect ? "text-green-400" : "text-red-400"}`}>
                  {review?.isCorrect ? "Correcta" : "Incorrecta"}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
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
          className="wm-button-primary mt-8 inline-flex px-5 py-3 font-semibold"
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
    <div className="wm-card mx-auto max-w-3xl p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="wm-accent text-sm font-semibold uppercase tracking-[0.18em]">
            {quiz.title || "Quiz"}
          </p>
          <h2 className="wm-page-title mt-1 text-3xl">
            Pregunta {currentQuestion + 1} de {quiz.questions.length}
          </h2>
        </div>
        <div className="text-sm font-medium text-zinc-400">
          {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
        </div>
      </div>

      <div className="wm-progress mb-8">
        <div
          className="wm-progress-bar transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        />
      </div>

      <div className="wm-section">
        <h3 className="text-xl font-semibold leading-relaxed text-white">
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
                className={`wm-option ${isSelected ? "is-selected" : ""}`}
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
          className="wm-button-secondary inline-flex px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="wm-button-primary inline-flex px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
            className="wm-button-primary inline-flex px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
          >
            Enviar Quiz
          </button>
        )}
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-400">{error}</p>}
    </div>
  );
}
