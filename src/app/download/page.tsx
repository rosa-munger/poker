"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// QR Code data
const qrCodes = [
  {
    id: "app-store",
    label: "APP STORE",
    icon: "apple",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "ios-backup",
    label: "IOS BACKUP",
    icon: "apple",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "android",
    label: "ANDROID",
    icon: "android",
    image: "/image/download/Qr-download.jpg",
  },
  {
    id: "android-backup",
    label: "ANANDROID BACKUP",
    icon: "android",
    image: "/image/download/Qr-download.jpg",
  },
];

// FAQ data
const faqs = [
  {
    id: 1,
    question: "1.WHAT SHOULD I DO IF THE SOFTWARE CANNOT BE TURNED ON OR FLASH BACK AFTER INSTALLING AND INSTALLING?",
    answer: "You just need to uninstall the installed apps first,Re -install on the download page. After the application download and install,Trust the APP software in Settings-General-VPN & Devices Management, you can use it normally",
  },
  {
    id: 2,
    question: "2.WHAT IS A LONG-TERM SIGNATURE PACKAGE?",
    answer: "What is a long-term signature package? The iOS long-term signature package is a way to sign with an enterprise certificate, which will not be unusable due to the expiration of the certificate, and can effectively reduce the number of frequently authorized software signatures. The service is provided by a third party, and repeated installations within the validity period are free of charge.",
  },
];

// iOS Tutorial steps
const iosTutorialSteps = [
  {
    step: 1,
    image: "/image/download/ios-install-tutorial/iosen1-DfC2THlb.png",
    title: "existing user",
    description: "First uninstall the installed AA POKER software, then proceed to the second step",
    highlight: "",
  },
  {
    step: 2,
    image: "/image/download/ios-install-tutorial/iosen2-C_spqGxI.png",
    title: "New/Existing Users",
    description: "Download the application and choose to install it",
    highlight: "",
  },
  {
    step: 3,
    image: "/image/download/ios-install-tutorial/iosen3-DygJeOYH.png",
    title: "",
    description: "Click to install for free",
    highlight: "Jump to iTunes link page",
  },
  {
    step: 4,
    image: "/image/download/ios-install-tutorial/iosen4-B3OCLxKC.png",
    title: "click",
    description: "",
    highlight: '"Installation"',
  },
  {
    step: 5,
    image: "/image/download/ios-install-tutorial/iosen5-Dsd1NYMr.png",
    title: "wait",
    description: "Download completed",
    highlight: "",
  },
  {
    step: 6,
    image: "/image/download/ios-install-tutorial/iosen6-CjJPjFmc.png",
    title: "After installation,",
    description: "",
    highlight: "Return to desktop view",
  },
  {
    step: 7,
    image: "/image/download/ios-install-tutorial/iosen7-B-zkeflE.png",
    title: "add",
    description: "",
    highlight: "'Trust'",
  },
  {
    step: 8,
    image: "/image/download/ios-install-tutorial/iosen8-B_qbhAQj.png",
    title: "After verification is completed",
    description: "",
    highlight: "return",
  },
];

// Android Tutorial steps
const androidTutorialSteps = [
  {
    step: 1,
    image: "/image/download/android-install-tutorial/anen1-CanoUY02.png",
    title: "",
    description: "Click to download the application and select install",
    highlight: "",
  },
  {
    step: 2,
    image: "/image/download/android-install-tutorial/anen2-hthmxYhU.png",
    title: "click",
    description: "",
    highlight: "Continue downloading",
  },
  {
    step: 3,
    image: "/image/download/android-install-tutorial/anen3-Bfj6M6iX.png",
    title: "wait",
    description: "Download completed",
    highlight: "",
  },
  {
    step: 4,
    image: "/image/download/android-install-tutorial/anen4-BA1VPD2M.png",
    title: "click",
    description: "",
    highlight: "open",
  },
  {
    step: 5,
    image: "/image/download/android-install-tutorial/anen5-pSp6JhxD.png",
    title: "click",
    description: "",
    highlight: "Continue",
  },
  {
    step: 6,
    image: "/image/download/android-install-tutorial/anen6-JYWuHtbi.png",
    title: "click",
    description: "",
    highlight: "Continue installation",
  },
  {
    step: 7,
    image: "/image/download/android-install-tutorial/anen7-rfxFtbNe.png",
    title: 'Check "Understood" and click',
    description: "",
    highlight: "Continue installation",
  },
  {
    step: 8,
    image: "/image/download/android-install-tutorial/anen8-JTHCFrjw.png",
    title: "",
    description: "Once the installation is complete, you can return to the page to view it",
    highlight: "",
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
                    alt={qr.label}
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
                  <span className="text-sm md:text-lg font-semibold tracking-wider">{qr.label}</span>
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
                  {faq.question}
                </h3>
                <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                  {faq.answer}
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
                      <span className="text-aa-gold">{step.title}</span>{" "}
                      <span className="text-white">{step.description}</span>
                    </p>
                    {step.highlight && (
                      <p className="text-aa-emerald text-base md:text-lg">{step.highlight}</p>
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
                      <span className="text-white">{step.title}</span>{" "}
                      <span className="text-aa-emerald">{step.highlight}</span>
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
                      <span className="text-white">{step.title}</span>{" "}
                      <span className="text-aa-emerald">{step.highlight}</span>
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
                      <span className="text-white">{step.description}</span>
                    </p>
                    {step.highlight && (
                      <p className="text-base md:text-lg">
                        <span className="text-white">{step.title}</span>{" "}
                        <span className="text-aa-emerald">{step.highlight}</span>
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
                      <span className="text-white">{step.title}</span>{" "}
                      <span className="text-aa-emerald">{step.highlight}</span>
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
                      <span className="text-white">{step.title}</span>{" "}
                      <span className="text-aa-emerald">{step.highlight}</span>
                    </p>
                    {step.description && (
                      <p className="text-white text-base md:text-lg">{step.description}</p>
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
