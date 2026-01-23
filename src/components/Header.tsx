"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/context/LanguageContext";

// Language options with flags
const languages = [
  { code: "cn" as Language, name: "简体中文"},
  { code: "tw" as Language, name: "繁體中文"},
  { code: "en" as Language, name: "ENGLISH"},
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  // Get current language object
  const currentLang = languages.find((l) => l.code === language) || languages[2];

  // Navigation links with translations
  const navLinks = [
    { href: "/", labelKey: "nav.home" },
    { href: "/champions", labelKey: "nav.champions" },
    { href: "/news", labelKey: "nav.news" },
    { href: "/download", labelKey: "nav.download" },
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false);
    if (isLangOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isLangOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-aa-dark-green/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/image/home/logo/logotext-XjxNBhSC.png"
              alt="AA Poker"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-base font-bold tracking-wider uppercase ${
                  pathname === link.href ? "active text-aa-gold" : ""
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                className="flex items-center gap-2 text-white hover:text-aa-gold transition-colors text-base font-bold tracking-wider"
              >

                <span>LANGUAGE</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-aa-dark-green/95 backdrop-blur-md border border-aa-card-border rounded-lg shadow-xl overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-aa-emerald/20 transition-colors ${
                          language === lang.code
                            ? "bg-aa-emerald/10 text-aa-gold"
                            : "text-white"
                        }`}
                      >
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-aa-dark-green/95 backdrop-blur-md border-t border-aa-card-border"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm font-semibold tracking-wider ${
                    pathname === link.href
                      ? "bg-aa-emerald/20 text-aa-gold"
                      : "text-white hover:bg-aa-emerald/10"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-aa-card-border">
                <p className="text-aa-gray text-xs uppercase tracking-wider mb-2 px-4">
                  {t("nav.language")}
                </p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full py-3 px-4 text-left flex items-center gap-3 rounded-lg ${
                      language === lang.code
                        ? "bg-aa-emerald/20 text-aa-gold"
                        : "text-white hover:bg-aa-emerald/10"
                    }`}
                  >
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
