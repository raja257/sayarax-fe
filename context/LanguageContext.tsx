"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: <T extends { en: string; ar: string }>(obj: T) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "app_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // default to "en" on first render (server + client match) — we swap
  // to the persisted value right after mount to avoid hydration mismatch
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
    } else {
      // optional: fall back to browser language
      const browserLang = navigator.language?.startsWith("ar") ? "ar" : "en";
      setLangState(browserLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "en" ? "ar" : "en")),
    [],
  );

  const t = useCallback(
    <T extends { en: string; ar: string }>(obj: T) =>
      lang === "ar" ? obj.ar : obj.en,
    [lang],
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}