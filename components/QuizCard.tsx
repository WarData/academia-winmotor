'use client';
import { useState } from 'react';

interface Question { id: string; question: string; options: string[]; explanation: string; order: number; }
interface Quiz { id: string; title: string; questions: Question[]; module: { name: string; slug: string }; }
interface QuizCardProps { moduleSlug: string; }

export default function QuizCard({ moduleSlug }: QuizCardProps) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [started, setStarted] = useState(false);

  const loadQuiz = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(`/api/quiz/${moduleSlug}`);
      if (!res.ok) throw new Error('Quiz no encontrado');
      const data = await res.json();
      setQuiz(data); setStarted(true); setCurrentQuestion(0); setSelectedAnswers({}); setShowResults(false); setScore(null);
    } catch { setError('No se pudo cargar el quiz.'); }
    finally { setLoading(false); }
  };

  const handleAnswer = (questionId: string, index: number) =>
    setSelectedAnswers(prev => ({ ...prev, [questionId]: index }));

  const handleSubmit = async () => {
    if (!quiz) return;
    const answers = quiz.questions.map(q => ({ questionId: q.id, selectedIndex: selectedAnswers[q.id] ?? -1 }));
    try {
      const res = await fetch(`/api/quiz/${moduleSlug}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: 'anonymous', answers }) });
      const data = await res.json();
      setScore({ correct: data.score, total: data.total }); setShowResults(true);
    } catch { setError('Error al enviar respuestas.'); }
  };

  if (!started) return (
    <div className="quiz-card">
      <h2>Quiz del Modulo</h2>
      <p>Pon a prueba tus conocimientos.</p>
      <button onClick={loadQuiz} disabled={loading} className="quiz-btn-start">{loading ? 'Cargando...' : 'Iniciar Quiz'}</button>
      {error && <p className="quiz-error">{error}</p>}
    </div>
  );

  if (!quiz) return null;

  if (showResults && score) return (
    <div className="quiz-card">
      <h2>Resultados</h2>
      <p>Has acertado <strong>{score.correct}</strong> de <strong>{score.total}</strong> preguntas.</p>
      <p>Puntuacion: {Math.round((score.correct / score.total) * 100)}%</p>
      <h3>Revision:</h3>
      {quiz.questions.map((q, idx) => (
        <div key={q.id}>
          <p><strong>{idx + 1}. {q.question}</strong></p>
          <p>Explicacion: {q.explanation}</p>
        </div>
      ))}
      <button onClick={() => { setStarted(false); setQuiz(null); }} className="quiz-btn-start">Reintentar</button>
    </div>
  );

  const question = quiz.questions[currentQuestion];
  return (
    <div className="quiz-card">
      <div>Pregunta {currentQuestion + 1} de {quiz.questions.length}</div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <button className={`quiz-option ${selectedAnswers[question.id] === idx ? 'selected' : ''}`} onClick={() => handleAnswer(question.id, idx)}>{opt}</button>
          </li>
        ))}
      </ul>
      <div>
        {currentQuestion > 0 && <button onClick={() => setCurrentQuestion(c => c - 1)}>Anterior</button>}
        {currentQuestion < quiz.questions.length - 1
          ? <button onClick={() => setCurrentQuestion(c => c + 1)} disabled={selectedAnswers[question.id] === undefined}>Siguiente</button>
          : <button onClick={handleSubmit} disabled={Object.keys(selectedAnswers).length < quiz.questions.length}>Enviar Quiz</button>
        }
      </div>
    </div>
  );
}
