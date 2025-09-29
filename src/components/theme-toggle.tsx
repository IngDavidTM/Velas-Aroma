"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

const STORAGE_KEY = "vela-theme";

export default function ThemeToggle({ className = "", compact = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = ((): Theme | null => {
      try {
        const value = localStorage.getItem(STORAGE_KEY);
        if (value === "light" || value === "dark") {
          return value;
        }
      } catch (error) {
        console.error("No fue posible leer el tema guardado", error);
      }
      return null;
    })();

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = stored ?? (prefersDark ? "dark" : "light");
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const applyTheme = (value: Theme) => {
    const root = document.documentElement;
    if (value === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      console.error("No fue posible guardar la preferencia de tema", error);
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const baseClasses =
    "inline-flex items-center gap-3 border border-brand-brown bg-transparent text-brand-charcoal transition hover:bg-brand-brown hover:text-brand-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-brown";
  const sizing = compact ? "px-3 py-2 text-[0.6rem]" : "px-4 py-2 text-xs";
  const combinedClass = [baseClasses, sizing, className].filter(Boolean).join(" ");

  const label = theme === "dark" ? "Modo claro" : "Modo oscuro";
  const shortLabel = theme === "dark" ? "Claro" : "Oscuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={combinedClass}
      aria-pressed={theme === "dark"}
      title={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      <span
        className={`h-3 w-3 border border-current transition ${
          theme === "dark" ? "bg-current" : "bg-transparent"
        }`}
        aria-hidden="true"
      />
      <span className="font-semibold uppercase tracking-[0.2em]">
        {compact ? shortLabel : label}
      </span>
    </button>
  );
}
