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
    username: "mxbc1",
    copyText: "三条(原名丝瓜)号"
  },
  {
    id: "telegram",
    name: "Telegram",
    logo: "/image/logo-cskh/tglogo.png",
    qrCode: "/image/logo-cskh/QR-telegram.jpg",
    username: "@aapklaochen",
    copyText: "Telegram ID"
  },

  {
    id: "whatsapp",
    name: "WhatsApp",
    logo: "/image/logo-cskh/logo-whatsapp.png",
    qrCode: "/image/logo-cskh/QR-WhatsApp.jpg",
    username: "",
    copyText: "WhatsApp"
  }
];

export default function ContactButtons() {
  const { t } = useLanguage();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  // Initialize Tawk.to
  useEffect(() => {
    // Check if Tawk.to script already exists
    if (typeof window !== "undefined" && !(window as any).Tawk_API) {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();
      
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/696ce1eee9768b197f0312ff/1jfj225dn";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }

      // Hide the Tawk.to widget by default after it loads
      script.onload = () => {
        if ((window as any).Tawk_API) {
          (window as any).Tawk_API.onLoad = function() {
            (window as any).Tawk_API.hideWidget();
          };
        }
      };

      // Add CSS to hide Tawk.to widget completely
      const style = document.createElement('style');
      style.innerHTML = `
        /* Hide all Tawk.to default widgets */
        #tawk-bubble-container,
        .tawk-button,
        .tawk-min-container,
        .tawk-chat-panel,
        iframe[title="chat widget"],
        div[class*="tawk"],
        .widget-visible {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        /* Only show when chat window is maximized */
        .tawk-chat-panel.tawk-chat-panel-visible {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleButtonClick = (id: string) => {
    if (id === "kf") {
      // Open Tawk.to chat
      if (typeof window !== "undefined" && (window as any).Tawk_API) {
        // Use toggle instead of maximize to avoid errors
        if (typeof (window as any).Tawk_API.toggle === 'function') {
          (window as any).Tawk_API.toggle();
        } else if (typeof (window as any).Tawk_API.showWidget === 'function') {
          (window as any).Tawk_API.showWidget();
        }
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
                className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 bg-black flex items-center justify-center p-1"
              >
                <img
                  src="/image/logo-cskh/kf.png"
                  alt="Customer Service"
                  className="w-full h-full object-contain scale-140"
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip - Chat Bubble Style */}
        <AnimatePresence mode="wait">
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="absolute right-[70px] bottom-[72px] z-[60]"
            >
              {/* Close button */}
              <button
                onClick={handleCloseTooltip}
                className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white font-bold"
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

              {/* Chat bubble */}
              <div className="relative bg-yellow-400 text-gray-900 px-4 py-3 rounded-xl shadow-2xl font-bold text-sm pointer-events-auto" style={{ minWidth: '180px', maxWidth: '220px' }}>
                <div className="text-center leading-snug">
                  {t("contact.tooltip")}
                </div>
                
                {/* Chat bubble tail - positioned to point at green button */}
                <div className="absolute bottom-[20px] -right-[6px]">
                  <div className="w-3 h-3 bg-yellow-400 transform rotate-45"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
          className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${
            isContactMenuOpen 
              ? "bg-gray-500" 
              : "bg-gradient-to-r from-[#39cb61] to-[#2ea350]"
          }`}
          animate={{ rotate: isContactMenuOpen ? 45 : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isContactMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
                fill="white"
              />
            </svg>
          )}
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
