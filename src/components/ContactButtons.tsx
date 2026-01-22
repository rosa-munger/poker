"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface ContactInfo {
  id: string;
  name: string;
  logo: string;
  qrCode: string;
  username: string;
  copyText: string;
}

const contactList: ContactInfo[] = [
  {
    id: "sigua",
    name: "三条(原名丝瓜)",
    logo: "/image/logo-cskh/sigua-logo.png",
    qrCode: "/image/logo-cskh/QR-sigua.jpg",
    username: "dpk777",
    copyText: "三条(原名丝瓜)号"
  },
  {
    id: "telegram",
    name: "Telegram",
    logo: "/image/logo-cskh/tglogo.png",
    qrCode: "/image/logo-cskh/QR-telegram.jpg",
    username: "@AAPoker",
    copyText: "Telegram ID"
  },

  {
    id: "whatsapp",
    name: "WhatsApp",
    logo: "/image/logo-cskh/logo-whatsapp.png",
    qrCode: "/image/logo-cskh/QR-WhatsApp.jpg",
    username: "+1234567890",
    copyText: "WhatsApp"
  }
];

export default function ContactButtons() {
  const { t } = useLanguage();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  // Initialize Tawk.to
  useEffect(() => {
    // Check if Tawk.to script already exists
    if (typeof window !== "undefined" && !(window as any).Tawk_API) {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();
      
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/696ce1eee9768b197f0312ff/1jf8l53if";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
  }, []);

  const handleButtonClick = (id: string) => {
    if (id === "kf") {
      // Open Tawk.to chat
      if (typeof window !== "undefined" && (window as any).Tawk_API) {
        (window as any).Tawk_API.maximize();
      }
      return;
    }
    setActivePopup(activePopup === id ? null : id);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeContact = contactList.find((c) => c.id === activePopup);

  return (
    <>
      {/* Floating Contact Toggle Button */}
      <div className="fixed right-4 bottom-32 z-50 flex flex-col items-end gap-3">
        {/* Contact Options - shown when menu is open */}
        <AnimatePresence>
          {isContactMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {/* Sigua Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.05 }}
                onClick={() => handleButtonClick("sigua")}
                className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/sigua-logo.png"
                  alt="Sigua"
                  className="w-full h-full object-contain"
                />
              </motion.button>

              {/* Telegram Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1 }}
                onClick={() => handleButtonClick("telegram")}
                className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/tglogo.png"
                  alt="Telegram"
                  className="w-full h-full object-contain"
                />
              </motion.button>

              {/* MChat Button */}
              {/* <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.15 }}
                onClick={() => handleButtonClick("mchat")}
                className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/mclogo.png"
                  alt="MChat"
                  className="w-full h-full object-contain"
                />
              </motion.button> */}

              {/* WhatsApp Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleButtonClick("whatsapp")}
                className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/logo-whatsapp.png"
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </motion.button>

              {/* Customer Service Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.25 }}
                onClick={() => handleButtonClick("kf")}
                className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 bg-white flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/kf.png"
                  alt="Customer Service"
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
          className="w-16 h-16 rounded-full shadow-xl bg-gradient-to-r from-[#c9a962] to-[#d4b87a] flex items-center justify-center hover:scale-110 transition-all duration-300"
          animate={{ rotate: isContactMenuOpen ? 45 : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isContactMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* QR Code Popup */}
      {activePopup && activeContact && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setActivePopup(null)}
          />

          {/* Popup */}
          <div className="fixed right-20 top-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-2xl overflow-hidden w-[280px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#c9a962] to-[#d4b87a] py-3 px-4 text-center">
              <p className="text-white font-medium text-sm">
                添加 {activeContact.name}
              </p>
            </div>

            {/* QR Code */}
            <div className="p-6 flex flex-col items-center bg-white">
              <div className="w-48 h-48 relative mb-4">
                <img
                  src={activeContact.qrCode}
                  alt={`${activeContact.name} QR Code`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Username */}
              <p className="text-gray-800 font-medium mb-4">
                {activeContact.username}
              </p>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(activeContact.username)}
                className="w-full bg-gradient-to-r from-[#c9a962] to-[#d4b87a] text-white py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                {copied ? t("common.copied") : `${t("common.copy")} ${activeContact.copyText}`}
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
}
