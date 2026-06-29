import QuizCard from '@/components/QuizCard';

interface QuizPageProps {
  params: Promise<{ module: string }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { module } = await params;
  return (
    <main className="quiz-page">
      <QuizCard moduleSlug={module} />
    </main>
  );
}

export async function generateMetadata({ params }: QuizPageProps) {
  const { module } = await params;
  return {
    title: `Quiz - ${module} | Academia Winmotor`,
    description: `Pon a prueba tus conocimientos sobre el modulo ${module}`,
  };
}
