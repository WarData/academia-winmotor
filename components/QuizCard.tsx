"use client";

import { useEffect, useMemo, useState } from "react";

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  explanation?: string;
  correctAnswer?: number | string;
  order?: number;
};

type QuizData = {
  id: string;
  title?: string;
  module?: {
    name?: string;
    slug?: string;
  };
  questions: QuizQuestion[];
  passingScore?: number;
};

interface QuizCardProps {
  moduleSlug: string;
}

export default function QuizCard({ moduleSlug }: QuizCardProps) {
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadQuiz() {
      try {
        setLoading(true);
        setError("");
        setQuiz(null);

        const res = await fetch(`/api/quiz/${moduleSlug}`, {
          method: "GET",
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "No se ha podido cargar el quiz.");
        }

        const loadedQuiz = data?.quiz ?? null;

        if (
          !loadedQuiz ||
          !Array.isArray(loadedQuiz.questions) ||
          loadedQuiz.questions.length === 0
        ) {
          throw new Error("El quiz no contiene preguntas.");
        }

        if (!cancelled) {
          setQuiz(loadedQuiz);
          setCurrentQuestion(0);
          setAnswers({});
          setSubmitted(false);
          setResult(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "No se ha podido cargar el quiz.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadQuiz();

    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  const questions = useMemo(() => {
    return Array.isArray(quiz?.questions) ? quiz!.questions : [];
  }, [quiz]);

  const question = questions[currentQuestion];

  function handleAnswerSelect(optionIndex: number) {
    if (!question || submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionIndex,
    }));
  }

  function goNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function goPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  async function handleSubmit() {
    if (!quiz) return;

    const payloadAnswers = questions.map((q) => ({
      questionId: q.id,
      answer: answers[q.id],
    }));

    try {
      const res = await fetch(`/api/quiz/${moduleSlug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "local-user",
          answers: payloadAnswers,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "No se ha podido corregir el quiz.");
      }

      setResult(data);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se ha podido corregir el quiz.");
    }
  }

  if (loading) {
    return <div className="quiz-card">Cargando quiz…</div>;
  }

  if (error) {
    return <div className="quiz-card text-red-600">{error}</div>;
  }

  if (!quiz || questions.length === 0 || !question) {
    return <div className="quiz-card">No hay preguntas disponibles para este quiz.</div>;
  }

  const selectedAnswer = answers[question.id];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="quiz-card">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          {quiz.title || quiz.module?.name || "Quiz"}
        </h2>
        <p>
          Pregunta {currentQuestion + 1} de {questions.length}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="mb-4 text-lg font-medium">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={`${question.id}-${index}`}
              type="button"
              onClick={() => handleAnswerSelect(index)}
              className={`block w-full rounded border px-4 py-3 text-left ${
                selectedAnswer === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-white"
              }`}
              disabled={submitted}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentQuestion === 0}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Enviar quiz
          </button>
        )}
      </div>

      {submitted && result ? (
        <div className="mt-6 rounded border p-4">
          <p>
            Resultado: {result.score}/{result.total} ({result.percentage}%)
          </p>
          <p>{result.passed ? "Aprobado" : "No aprobado"}</p>
        </div>
      ) : null}
    </div>
  );
}
