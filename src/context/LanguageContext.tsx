"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "cn" | "tw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("cn");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check language version to force reset when needed
    const LANGUAGE_VERSION = "2.0"; // Increment this to force reset all users to default
    const savedVersion = localStorage.getItem("languageVersion");
    
    // If version mismatch or no version, reset to default language
    if (savedVersion !== LANGUAGE_VERSION) {
      const detectSystemLanguage = (): Language => {
        const browserLang = navigator.language || (navigator as any).userLanguage || "";
        const langCode = browserLang.toLowerCase();
        
        // Check for Traditional Chinese (Taiwan, Hong Kong, Macau)
        if (langCode.includes("zh-tw") || langCode.includes("zh-hk") || langCode.includes("zh-mo") || langCode.includes("zh-hant")) {
          return "tw";
        }
        // Check for Simplified Chinese
        if (langCode.includes("zh-cn") || langCode.includes("zh-sg") || langCode.includes("zh-hans") || langCode.startsWith("zh")) {
          return "cn";
        }
        // All other languages default to Simplified Chinese (cn)
        return "cn";
      };
      
      const detectedLang = detectSystemLanguage();
      setLanguageState(detectedLang);
      localStorage.setItem("language", detectedLang);
      localStorage.setItem("languageVersion", LANGUAGE_VERSION);
      return;
    }
    
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && ["en", "cn", "tw"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Load translations for current language
    import(`@/translations/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch((err) => {
        console.error("Failed to load translations:", err);
      });
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
