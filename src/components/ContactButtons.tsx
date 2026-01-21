"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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
    id: "mchat",
    name: "MChat",
    logo: "/image/logo-cskh/mclogo.png",
    qrCode: "/image/logo-cskh/QR-mchat.png",
    username: "AAPoker",
    copyText: "MChat ID"
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
      {/* Floating Contact Buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {/* Sigua Button */}
        <button
          onClick={() => handleButtonClick("sigua")}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200 bg-white flex items-center justify-center"
        >
          <Image
            src="/image/logo-cskh/sigua-logo.png"
            alt="Sigua"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>

        {/* Telegram Button */}
        <button
          onClick={() => handleButtonClick("telegram")}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200 bg-[#0088cc] flex items-center justify-center"
        >
          <Image
            src="/image/logo-cskh/tglogo.png"
            alt="Telegram"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>

        {/* MChat Button */}
        <button
          onClick={() => handleButtonClick("mchat")}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200 bg-[#4CAF50] flex items-center justify-center"
        >
          <Image
            src="/image/logo-cskh/mclogo.png"
            alt="MChat"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => handleButtonClick("whatsapp")}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200 bg-[#25D366] flex items-center justify-center"
        >
          <Image
            src="/image/logo-cskh/logo-whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>

        {/* Customer Service (Tawk.to) Button */}
        <button
          onClick={() => handleButtonClick("kf")}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200 bg-[#4CAF50] flex items-center justify-center"
        >
          <Image
            src="/image/logo-cskh/kf.png"
            alt="Customer Service"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>
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
                <Image
                  src={activeContact.qrCode}
                  alt={`${activeContact.name} QR Code`}
                  fill
                  className="object-contain"
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
