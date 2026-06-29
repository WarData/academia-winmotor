import QuizCard from '@/components/QuizCard';

interface QuizPageProps {
  params: { module: string };
}

export default function QuizPage({ params }: QuizPageProps) {
  return (
    <main className="quiz-page">
      <QuizCard moduleSlug={params.module} />
    </main>
  );
}

export function generateMetadata({ params }: QuizPageProps) {
  return {
    title: `Quiz - ${params.module} | Academia Winmotor`,
    description: `Pon a prueba tus conocimientos sobre el modulo ${params.module}`,
  };
}
