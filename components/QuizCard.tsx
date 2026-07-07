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
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: index }));
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
      <div className="quiz-card">
        <h2>Quiz del módulo</h2>
        <p>Pon a prueba tus conocimientos.</p>
        <button onClick={loadQuiz} disabled={loading} className="quiz-btn-start">
          {loading ? "Cargando..." : "Iniciar Quiz"}
        </button>
        {error && <p className="quiz-error">{error}</p>}
      </div>
    );
  }

  if (!quiz) return null;

  if (showResults && result) {
    return (
      <div className="quiz-card">
        <h2>Resultados</h2>
        <p>
          Has acertado <strong>{result.score}</strong> de <strong>{result.total}</strong> preguntas.
        </p>
        <p>Puntuación: {result.percentage}%</p>
        <p>{result.passed ? "Aprobado" : "No aprobado"}</p>

        <h3>Revisión:</h3>
        {quiz.questions.map((q, idx) => {
          const review = result.results.find((r) => r.questionId === q.id);
          const userAnswer = selectedAnswers[q.id];
          const correctIndex =
            typeof review?.correctAnswer === "number"
              ? review.correctAnswer
              : Number(review?.correctAnswer);

          return (
            <div key={q.id} className="mb-4">
              <p>
                <strong>
                  {idx + 1}. {q.question}
                </strong>
              </p>
              <p>Tu respuesta: {typeof userAnswer === "number" ? q.options[userAnswer] : "Sin responder"}</p>
              <p>Respuesta correcta: {Number.isFinite(correctIndex) ? q.options[correctIndex] : "No disponible"}</p>
              <p>{review?.isCorrect ? "Correcta" : "Incorrecta"}</p>
              <p>Explicación: {review?.explanation || q.explanation || "Sin explicación."}</p>
            </div>
          );
        })}

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
          className="quiz-btn-start"
        >
          Reintentar
        </button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="quiz-card">
      <div>
        Pregunta {currentQuestion + 1} de {quiz.questions.length}
      </div>

      <h3>{question.question}</h3>

      <ul>
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={`quiz-option ${selectedAnswers[question.id] === idx ? "selected" : ""}`}
              onClick={() => handleAnswer(question.id, idx)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      <div>
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion((c) => c - 1)}>Anterior</button>
        )}

        {currentQuestion < quiz.questions.length - 1 ? (
          <button
            onClick={() => setCurrentQuestion((c) => c + 1)}
            disabled={selectedAnswers[question.id] === undefined}
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
          >
            Enviar Quiz
          </button>
        )}
      </div>

      {error && <p className="quiz-error">{error}</p>}
    </div>
  );
}
