"use client";

import { useEffect, useState } from "react";
import { translations, defaultLocale, type Locale, type TranslationKey } from "./i18n";

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("hiros-locale") as Locale | null;
    if (saved === "en" || saved === "sq") {
      setLocale(saved);
    }
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations.en[key] || key;
  };

  return { t, locale };
}
