"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type NextStepButtonProps = {
  module: string;
  currentId: string;
  nextId?: string;
};

function getProgressKey(module: string) {
  return `winmotor-academy:${module}:currentStep`;
}

export function NextStepButton({ module, currentId, nextId }: NextStepButtonProps) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(getProgressKey(module), currentId);
  }, [currentId, module]);

  return (
    <button
      type="button"
      disabled={!nextId}
      onClick={() => {
        if (nextId) {
          localStorage.setItem(getProgressKey(module), nextId);
          router.push(`/academy/lesson/${nextId}`);
        }
      }}
      className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-ink/25"
    >
      Siguiente paso
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
