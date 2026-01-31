"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-aa-gold mb-6 tracking-wider">
            {t("about.title")}
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* About AA POKER Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-b from-[#1a3d2e] to-[#0d2818] rounded-xl p-8 md:p-12 mb-12 border border-[#3d5a4d]/40"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-aa-emerald mb-6">
            {t("about.aboutTitle")}
          </h2>
          <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
            <p>{t("about.aboutP1")}</p>
            <p>{t("about.aboutP2")}</p>
            <p>{t("about.aboutP3")}</p>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-b from-[#1a3d2e] to-[#0d2818] rounded-xl p-8 md:p-12 border border-[#3d5a4d]/40"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-aa-emerald mb-8">
            {t("about.contactTitle")}
          </h2>
          
          <div className="space-y-6">
            {/* Customer Service */}

            {/* Brand Cooperation */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {t("about.brandCooperation")}
              </h3>
              <p className="text-white/80">
                {t("about.pleaseContact")}: <a href="mailto:mixue66@outlook.com" className="text-aa-gold hover:text-aa-gold/80 transition-colors">mixue66@outlook.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
