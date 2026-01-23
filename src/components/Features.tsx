"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Feature data for "Your First Choice" section
const gameFeatures = [
  {
    id: 1,
    icon: "texas",
    title: "Texas Hold'em",
    description: "Classic poker gameplay",
  },
  {
    id: 2,
    icon: "shortdeck",
    title: "Short Deck",
    description: "Fast-paced action",
  },
  {
    id: 3,
    icon: "video",
    title: "Video Table",
    description: "Live poker experience",
  },
];

// Icon component for game features
const GameIcon = ({ type }: { type: string }) => {
  const iconClass = "w-12 h-12 text-aa-gold";
  
  switch (type) {
    case "texas":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" fill="none">
          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16L28 28H20L24 16Z" fill="currentColor"/>
          <circle cx="24" cy="22" r="3" fill="currentColor"/>
        </svg>
      );
    case "shortdeck":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" fill="none">
          <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
          <text x="24" y="30" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">6+</text>
        </svg>
      );
    case "video":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" fill="none">
          <rect x="4" y="10" width="30" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M34 20L44 14V34L34 28V20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Features() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Your First Choice Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
              {t("aaPoker.title")}
            </h2>
            <p className="text-aa-gray text-sm tracking-wider">
              {t("aaPoker.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {t("aaPoker.gameplay.title")}
              </h3>
              <p className="text-aa-gray mb-8">
                {t("aaPoker.gameplay.desc")}
              </p>
              <Link
                href="/download"
                className="text-aa-gold hover:text-aa-gold-light transition-colors font-semibold tracking-wider inline-flex items-center gap-2"
              >
                {t("aaPoker.learnMore")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

            {/* Right Content - Game Table Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Poker Table Illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-aa-emerald/20 to-aa-dark-green rounded-3xl green-glow">
                  <div className="absolute inset-4 bg-gradient-to-br from-aa-emerald/30 to-aa-dark-green rounded-2xl border border-aa-light-green/30 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 40 40"
                        className="text-aa-light-green mx-auto mb-4"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="18"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M20 8 L28 28 L20 24 L12 28 Z"
                          fill="currentColor"
                          className="opacity-80"
                        />
                        <circle cx="20" cy="18" r="3" fill="currentColor" />
                      </svg>
                      <p className="text-white font-semibold">AA POKER</p>
                    </div>
                  </div>
                </div>

                {/* Floating Game Mode Cards */}
                <motion.div
                  className="absolute -top-4 right-0 bg-aa-card-bg border border-aa-card-border rounded-lg p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-white text-xs font-bold">TEXAS</p>
                  <p className="text-aa-gold text-xs">HOLD'EM POKER</p>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-4 bg-aa-card-bg border border-aa-card-border rounded-lg p-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-white text-xs font-bold">TEXAS</p>
                  <p className="text-aa-gold text-xs">3-1</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -right-2 bg-aa-card-bg border border-aa-card-border rounded-lg p-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-white text-xs font-bold">TEXAS</p>
                  <p className="text-aa-gold text-xs">SHORT DECK</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Game Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {gameFeatures.map((feature) => (
              <div key={feature.id} className="text-center group">
                <div className="mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                  <GameIcon type={feature.icon} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-aa-gray text-xs">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 flex items-center justify-center">
                {/* Phone 1 */}
                <motion.div
                  className="absolute left-1/4 w-40 h-72 bg-gradient-to-b from-aa-dark-green to-black rounded-3xl border-2 border-aa-emerald/30 shadow-2xl green-glow"
                  animate={{ rotate: [-5, -5, -5] }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <div className="absolute inset-2 bg-gradient-to-b from-blue-900/50 to-aa-dark-green rounded-2xl overflow-hidden">
                    <div className="h-full flex items-center justify-center">
                      <span className="text-aa-gray text-xs">Table 1</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 */}
                <motion.div
                  className="absolute right-1/4 w-40 h-72 bg-gradient-to-b from-aa-dark-green to-black rounded-3xl border-2 border-aa-emerald/30 shadow-2xl green-glow z-10"
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                >
                  <div className="absolute inset-2 bg-gradient-to-b from-indigo-900/50 to-aa-dark-green rounded-2xl overflow-hidden">
                    <div className="h-full flex items-center justify-center">
                      <span className="text-aa-gray text-xs">Table 2</span>
                    </div>
                  </div>
                </motion.div>

                {/* Poker Chips */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex gap-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-2 border-white/30" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 border-2 border-white/30 -ml-3" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {t("aaPoker.visualImpact.title")}
              </h3>
              <p className="text-aa-gray mb-8">
                {t("aaPoker.visualImpact.desc")}
              </p>
              <Link
                href="/download"
                className="text-aa-gold hover:text-aa-gold-light transition-colors font-semibold tracking-wider inline-flex items-center gap-2"
              >
                {t("aaPoker.learnMore")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diverse Poker Experience Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {t("aaPoker.experience.title")}
              </h3>
              <p className="text-aa-gray mb-8">
                {t("aaPoker.experience.desc")}
              </p>
              <Link
                href="/download"
                className="text-aa-gold hover:text-aa-gold-light transition-colors font-semibold tracking-wider inline-flex items-center gap-2"
              >
                {t("aaPoker.learnMore")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

            {/* Right - Tournament Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Phone with Tournament */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-48 h-80 bg-gradient-to-b from-aa-dark-green to-black rounded-3xl border-2 border-aa-emerald/30 shadow-2xl green-glow">
                    <div className="absolute inset-2 bg-gradient-to-b from-aa-emerald/20 to-aa-dark-green rounded-2xl overflow-hidden flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-aa-gold to-aa-gold-dark flex items-center justify-center">
                          <span className="text-aa-dark-green font-bold text-xs">LORD</span>
                        </div>
                        <p className="text-white text-xs">POKER TOURNAMENT</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-10 right-10 w-8 h-8 bg-aa-gold/20 rounded-lg"
                  animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-6 h-6 bg-aa-emerald/20 rounded-full"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
