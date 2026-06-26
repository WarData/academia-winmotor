"use client";

import { useRouter } from "next/navigation";
import { PlayCircle } from "lucide-react";

type StartLearningButtonProps = {
  module: string;
  firstId?: string;
};

function getProgressKey(module: string) {
  return `winmotor-academy:${module}:currentStep`;
}

export function StartLearningButton({ module, firstId }: StartLearningButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={!firstId}
      onClick={() => {
        if (!firstId) {
          return;
        }

        localStorage.setItem(getProgressKey(module), firstId);
        router.push(`/academy/lesson/${firstId}`);
      }}
      className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-ink/25"
    >
      <PlayCircle className="h-4 w-4" aria-hidden="true" />
      Empezar aprendizaje
    </button>
  );
}
