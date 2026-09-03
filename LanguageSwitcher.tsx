"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("hiros-locale") as Locale | null;
    if (saved === "en" || saved === "sq") {
      setLocale(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggle = () => {
    const next: Locale = locale === "en" ? "sq" : "en";
    setLocale(next);
    localStorage.setItem("hiros-locale", next);
    document.documentElement.lang = next;
    // Simple page refresh to apply translations (lightweight approach)
    window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:border-accent/50 hover:text-accent"
      aria-label="Switch language"
    >
      <span className={locale === "en" ? "text-accent" : ""}>EN</span>
      <span className="text-border">|</span>
      <span className={locale === "sq" ? "text-accent" : ""}>SQ</span>
    </button>
  );
}
