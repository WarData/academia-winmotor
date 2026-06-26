"use client";

import { useEffect } from "react";
import { BookOpen } from "lucide-react";

type HelpArticleProps = {
  title: string;
  body: string;
  href: string;
};

export function HelpArticle({ title, body, href }: HelpArticleProps) {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.assign(href);
    }, 900);

    return () => window.clearTimeout(redirectTimer);
  }, [href]);

  return (
    <div className="rounded-lg border border-line bg-panel p-6 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-accent">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Artículo de ayuda</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink/70">{body}</p>
          <p className="mt-4 text-sm font-semibold text-ink/58">
            Abriendo el artículo de ayuda en GitBook.
          </p>
        </div>
      </div>
    </div>
  );
}
