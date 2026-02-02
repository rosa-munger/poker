"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-aa-darker-green border-t border-aa-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column - Links */}
          <div className="space-y-4">
            <Link
              href="/terms"
              className="block text-white hover:text-aa-gold transition-colors font-semibold tracking-wider text-sm"
            >
              {t("footer.termsOfUse")}
            </Link>
            <Link
              href="/download"
              className="block text-white hover:text-aa-gold transition-colors font-semibold tracking-wider text-sm"
            >
              {t("footer.download")}
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-aa-gold transition-colors font-semibold tracking-wider text-sm"
            >
              {t("footer.aboutUs")}
            </Link>
          </div>

          {/* Center Column - Empty or additional content */}
          <div className="hidden lg:block"></div>

          {/* Right Column - Logo and Copyright */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/image/home/logo/logotext-XjxNBhSC.png?v=2"
                alt="AA Poker"
                     className="w-auto"
                style={{ 
                  imageRendering: 'crisp-edges', 
                  height: '23px',
                  width: '121px'
                }}
              />
            </Link>

            {/* Copyright */}
            <p className="text-aa-gray text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
