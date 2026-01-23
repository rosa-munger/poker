// Server-side dictionary loader for SEO
// This file should only be imported in Server Components

export type Locale = "en" | "cn" | "tw";

const dictionaries = {
  en: () => import("@/translations/en.json").then((module) => module.default),
  cn: () => import("@/translations/cn.json").then((module) => module.default),
  tw: () => import("@/translations/tw.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};

export const locales: Locale[] = ["en", "cn", "tw"];
export const defaultLocale: Locale = "en";
