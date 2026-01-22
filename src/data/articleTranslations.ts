// Article content translations for news detail pages
// Structure: { [slug]: { [language]: { sections: ArticleSection[] } } }

export interface TranslatedSection {
  type: "paragraph" | "heading" | "image" | "qa" | "table" | "video";
  content?: string;
  content_cn?: string;
  content_tw?: string;
  src?: string;
  alt?: string;
  question?: string;
  question_cn?: string;
  question_tw?: string;
  answer?: string;
  answer_cn?: string;
  answer_tw?: string;
  title?: string;
  title_cn?: string;
  title_tw?: string;
  headers?: string[];
  rows?: string[][];
  totalPrize?: string;
  entries?: string;
  itm?: string;
}

export interface TranslatedArticleContent {
  heroImage: string;
  sections: TranslatedSection[];
}

// Helper function to get translated content based on language
export function getTranslatedContent(
  section: TranslatedSection,
  language: string
): {
  content?: string;
  question?: string;
  answer?: string;
  title?: string;
} {
  const getSuffix = () => {
    if (language === "cn") return "_cn";
    if (language === "tw") return "_tw";
    return "";
  };

  const suffix = getSuffix();

  return {
    content: (section as any)[`content${suffix}`] || section.content,
    question: (section as any)[`question${suffix}`] || section.question,
    answer: (section as any)[`answer${suffix}`] || section.answer,
    title: (section as any)[`title${suffix}`] || section.title,
  };
}
