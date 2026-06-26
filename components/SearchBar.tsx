"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar en Winmotor Academy"
}: SearchBarProps) {
  return (
    <label className="flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm text-ink/70 focus-within:border-accent focus-within:bg-white">
      <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">Buscar</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/45"
      />
    </label>
  );
}
