"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { termsContent } from "@/data/terms";

type TabType = "terms" | "privacy";

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("terms");
  const { language } = useLanguage();

  const langKey = language === "tw" ? "tw" : language === "cn" ? "cn" : "en";
  const content = termsContent[langKey];

  return (
    <div
      className="min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #001d10, #011008)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f2e29e] text-center mb-10 tracking-wide"
        >
          {content.pageTitle}
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-0 rounded-full overflow-hidden border-2 border-[#39CB61]">
            <button
              onClick={() => setActiveTab("terms")}
              aria-label="View Terms of Service"
              aria-pressed={activeTab === "terms"}
              className={`px-16 sm:px-24 py-4 font-bold tracking-wider transition-all ${
                activeTab === "terms"
                  ? "bg-[#39CB61] text-black"
                  : "bg-transparent text-[#39CB61] hover:bg-[#39CB61]/10"
              }`}
              style={{ fontSize: '25px' }}
            >
              {content.tabTerms}
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              aria-label="View Privacy Policy"
              aria-pressed={activeTab === "privacy"}
              className={`px-16 sm:px-24 py-4 font-bold tracking-wider transition-all border-l-2 border-[#39CB61] ${
                activeTab === "privacy"
                  ? "bg-[#39CB61] text-black"
                  : "bg-transparent text-[#39CB61] hover:bg-[#39CB61]/10"
              }`}
              style={{ fontSize: '25px' }}
            >
              {content.tabPrivacy}
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#052e16]/50 border border-[#4ade80]/20 rounded-lg p-6 sm:p-10"
        >
          <div className="max-w-none">
            {(activeTab === "terms" ? content.terms : content.privacy)
              .split("\n\n")
              .map((paragraph: string, index: number) => {
                const trimmed = paragraph.trim();
                // Check for numbered headings (works for both English "1. DEFINITIONS" and Chinese "1. 定義")
                const isHeading = /^\d+\.\s/.test(trimmed) && trimmed.length < 150;
                // Check for sub-headings (all caps or Chinese characters)
                const isSubHeading = (
                  (/^[A-Z\s]{3,}$/.test(trimmed) || /^[\u4e00-\u9fa5]{2,}$/.test(trimmed)) 
                  && trimmed.length < 100
                );
                
                // Check if it's the opening paragraphs (before first numbered section)
                const isOpeningParagraph = index < 5 && !isHeading && !isSubHeading;
                
                if (isHeading) {
                  return (
                    <span
                      key={index}
                      className="block text-[#4ade80] font-bold mt-8 mb-4 first:mt-0"
                      style={{ fontSize: '16px', fontFamily: 'SansSCRegular' }}
                    >
                      {paragraph}
                    </span>
                  );
                }
                
                if (isSubHeading) {
                  return (
                    <span
                      key={index}
                      className="block text-[#4ade80] font-bold mt-6 mb-3"
                      style={{ fontSize: '16px', fontFamily: 'SansSCRegular' }}
                    >
                      {paragraph}
                    </span>
                  );
                }
                
                if (isOpeningParagraph) {
                  return (
                    <h5
                      key={index}
                      className="text-white/90 leading-relaxed mb-4 whitespace-pre-wrap font-normal"
                      style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: 'SansSCRegular', fontWeight: 'inherit' }}
                    >
                      {paragraph}
                    </h5>
                  );
                }
                
                return (
                  <span
                    key={index}
                    className="block text-white/90 leading-relaxed mb-4 whitespace-pre-wrap"
                    style={{ fontSize: '16px', lineHeight: '1.8', fontFamily: 'SansSCRegular', fontWeight:300 }}
                  >
                    {paragraph}
                  </span>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
