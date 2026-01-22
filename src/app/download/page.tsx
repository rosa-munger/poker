"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// QR Code data
const qrCodes = [
  {
    id: "app-store",
    labelKey: "download.appStore",
    icon: "apple",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "ios-backup",
    labelKey: "download.iosBackup",
    icon: "apple",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "android",
    labelKey: "download.android",
    icon: "android",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "android-backup",
    labelKey: "download.androidBackup",
    icon: "android",
    image: "/image/download/Qr-download.jpg",
  },
];

// FAQ data
const faqs = [
  {
    id: 1,
    questionKey: "download.faq1.question",
    answerKey: "download.faq1.answer",
  },
  {
    id: 2,
    questionKey: "download.faq2.question",
    answerKey: "download.faq2.answer",
  },
];

// iOS Tutorial steps
const iosTutorialSteps = [
  {
    step: 1,
    image: "/image/download/ios-install-tutorial/iosen1-DfC2THlb.png",
    titleKey: "download.ios.step1.title",
    descKey: "download.ios.step1.desc",
    highlightKey: "",
  },
  {
    step: 2,
    image: "/image/download/ios-install-tutorial/iosen2-C_spqGxI.png",
    titleKey: "download.ios.step2.title",
    descKey: "download.ios.step2.desc",
    highlightKey: "",
  },
  {
    step: 3,
    image: "/image/download/ios-install-tutorial/iosen3-DygJeOYH.png",
    titleKey: "",
    descKey: "download.ios.step3.desc",
    highlightKey: "download.ios.step3.highlight",
  },
  {
    step: 4,
    image: "/image/download/ios-install-tutorial/iosen4-B3OCLxKC.png",
    titleKey: "download.ios.step4.title",
    descKey: "",
    highlightKey: "download.ios.step4.highlight",
  },
  {
    step: 5,
    image: "/image/download/ios-install-tutorial/iosen5-Dsd1NYMr.png",
    titleKey: "download.ios.step5.title",
    descKey: "download.ios.step5.desc",
    highlightKey: "",
  },
  {
    step: 6,
    image: "/image/download/ios-install-tutorial/iosen6-CjJPjFmc.png",
    titleKey: "download.ios.step6.title",
    descKey: "",
    highlightKey: "download.ios.step6.highlight",
  },
  {
    step: 7,
    image: "/image/download/ios-install-tutorial/iosen7-B-zkeflE.png",
    titleKey: "download.ios.step7.title",
    descKey: "",
    highlightKey: "download.ios.step7.highlight",
  },
  {
    step: 8,
    image: "/image/download/ios-install-tutorial/iosen8-B_qbhAQj.png",
    titleKey: "download.ios.step8.title",
    descKey: "",
    highlightKey: "download.ios.step8.highlight",
  },
];

// Android Tutorial steps
const androidTutorialSteps = [
  {
    step: 1,
    image: "/image/download/android-install-tutorial/anen1-CanoUY02.png",
    titleKey: "",
    descKey: "download.android.step1.desc",
    highlightKey: "",
  },
  {
    step: 2,
    image: "/image/download/android-install-tutorial/anen2-hthmxYhU.png",
    titleKey: "download.android.step2.title",
    descKey: "",
    highlightKey: "download.android.step2.highlight",
  },
  {
    step: 3,
    image: "/image/download/android-install-tutorial/anen3-Bfj6M6iX.png",
    titleKey: "download.android.step3.title",
    descKey: "download.android.step3.desc",
    highlightKey: "",
  },
  {
    step: 4,
    image: "/image/download/android-install-tutorial/anen4-BA1VPD2M.png",
    titleKey: "download.android.step4.title",
    descKey: "",
    highlightKey: "download.android.step4.highlight",
  },
  {
    step: 5,
    image: "/image/download/android-install-tutorial/anen5-pSp6JhxD.png",
    titleKey: "download.android.step5.title",
    descKey: "",
    highlightKey: "download.android.step5.highlight",
  },
  {
    step: 6,
    image: "/image/download/android-install-tutorial/anen6-JYWuHtbi.png",
    titleKey: "download.android.step6.title",
    descKey: "",
    highlightKey: "download.android.step6.highlight",
  },
  {
    step: 7,
    image: "/image/download/android-install-tutorial/anen7-rfxFtbNe.png",
    titleKey: "download.android.step7.title",
    descKey: "",
    highlightKey: "download.android.step7.highlight",
  },
  {
    step: 8,
    image: "/image/download/android-install-tutorial/anen8-JTHCFrjw.png",
    titleKey: "",
    descKey: "download.android.step8.desc",
    highlightKey: "",
  },
];

export default function DownloadPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"ios" | "android">("ios");

  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header - QR Codes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-aa-gold mb-16 tracking-wider">
            {t("download.title")}
          </h1>

          {/* QR Codes Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {qrCodes.map((qr, index) => (
              <motion.div
                key={qr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-[#1a3d2e] to-[#0d2818] rounded-xl p-6 md:p-8"
              >
                <div className="bg-white rounded-lg p-3 mb-6">
                  <img
                    src={qr.image}
                    alt={t(qr.labelKey)}
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  {qr.icon === "apple" ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.8 11.16 3.5 13.84 3.5 16.5h17c0-2.66-1.3-5.34-2.9-7.02zM7 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                  )}
                  <span className="text-sm md:text-lg font-semibold tracking-wider">{t(qr.labelKey)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20 space-y-6"
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gradient-to-r from-[#1a3d2e] to-[#0d2818] rounded-xl p-8 flex gap-6"
            >
              <div className="flex-shrink-0">
                <img
                  src={index === 0 ? "/image/download/xioaa1-BRaHlQxH.png" : "/image/download/xioaa2-RXw0Ds4_.png"}
                  alt="FAQ Icon"
                  className="w-20 h-20 md:w-24 md:h-24"
                />
              </div>
              <div>
                <h3 className="text-aa-gold font-bold text-base md:text-xl mb-3">
                  {t(faq.questionKey)}
                </h3>
                <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                  {t(faq.answerKey)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Installation Tutorial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full overflow-hidden">
              <button
                onClick={() => setActiveTab("ios")}
                className={`px-10 py-4 font-bold text-base md:text-lg tracking-wider transition-all ${
                  activeTab === "ios"
                    ? "bg-aa-emerald text-white"
                    : "bg-transparent text-white/60 hover:text-white"
                }`}
              >
                {t("download.iosTutorial")}
              </button>
              <button
                onClick={() => setActiveTab("android")}
                className={`px-10 py-4 font-bold text-base md:text-lg tracking-wider transition-all ${
                  activeTab === "android"
                    ? "bg-aa-emerald text-white"
                    : "bg-transparent text-white/60 hover:text-white"
                }`}
              >
                {t("download.androidTutorial")}
              </button>
            </div>
          </div>

          {/* Tutorial Steps */}
          {activeTab === "ios" ? (
            <>
              {/* iOS Steps 1-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {iosTutorialSteps.slice(0, 3).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.titleKey && <span className="text-aa-gold">{t(step.titleKey)}</span>}{" "}
                      {step.descKey && <span className="text-white">{t(step.descKey)}</span>}
                    </p>
                    {step.highlightKey && (
                      <p className="text-aa-emerald text-base md:text-lg">{t(step.highlightKey)}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* iOS Steps 4-6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {iosTutorialSteps.slice(3, 6).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.titleKey && <span className="text-white">{t(step.titleKey)}</span>}{" "}
                      {step.highlightKey && <span className="text-aa-emerald">{t(step.highlightKey)}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* iOS Steps 7-8 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {iosTutorialSteps.slice(6, 8).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.titleKey && <span className="text-white">{t(step.titleKey)}</span>}{" "}
                      {step.highlightKey && <span className="text-aa-emerald">{t(step.highlightKey)}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Android Steps 1-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {androidTutorialSteps.slice(0, 3).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.descKey && <span className="text-white">{t(step.descKey)}</span>}
                    </p>
                    {step.highlightKey && (
                      <p className="text-base md:text-lg">
                        {step.titleKey && <span className="text-white">{t(step.titleKey)}</span>}{" "}
                        <span className="text-aa-emerald">{t(step.highlightKey)}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Android Steps 4-6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {androidTutorialSteps.slice(3, 6).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.titleKey && <span className="text-white">{t(step.titleKey)}</span>}{" "}
                      {step.highlightKey && <span className="text-aa-emerald">{t(step.highlightKey)}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* Android Steps 7-8 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {androidTutorialSteps.slice(6, 8).map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="relative mx-auto max-w-[280px] mb-6">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                    <p className="text-base md:text-lg">
                      {step.titleKey && <span className="text-white">{t(step.titleKey)}</span>}{" "}
                      {step.highlightKey && <span className="text-aa-emerald">{t(step.highlightKey)}</span>}
                    </p>
                    {step.descKey && (
                      <p className="text-white text-base md:text-lg">{t(step.descKey)}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
