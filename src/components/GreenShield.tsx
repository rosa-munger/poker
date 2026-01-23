"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Security features
const securityFeatures = [
  { id: 1, label: "PROHIBITING DATA COLLECTION TOOL" },
  { id: 2, label: "7×24 MANUAL REVIEW" },
  { id: 3, label: "PROHIBITING SIMULATORS" },
  { id: 4, label: "PROHIBITING REMOTELY CONTROLLED WORMHOLES" },
  { id: 5, label: "PROHIBITING COLLUSIVE CHEATING" },
  { id: 6, label: "PROHIBITING AI" },
];

export default function GreenShield() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-aa-dark-green via-emerald-950/30 to-aa-darker-green">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aa-emerald/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Shield Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Phone with Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Phone Frame */}
                  <div className="w-56 h-96 bg-gradient-to-b from-gray-800 to-black rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
                    <div className="absolute inset-2 bg-gradient-to-b from-aa-dark-green to-aa-darker-green rounded-2xl">
                      {/* Shield Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.svg
                          width="120"
                          height="140"
                          viewBox="0 0 100 120"
                          className="text-aa-emerald"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {/* Outer Shield Glow */}
                          <defs>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          
                          {/* Shield Shape */}
                          <path
                            d="M50 10 L85 25 L85 55 Q85 85 50 100 Q15 85 15 55 L15 25 Z"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            filter="url(#glow)"
                          />
                          
                          {/* Inner Shield */}
                          <path
                            d="M50 20 L75 32 L75 52 Q75 75 50 88 Q25 75 25 52 L25 32 Z"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="currentColor"
                            fillOpacity="0.2"
                          />
                          
                          {/* AA Logo inside */}
                          <path
                            d="M50 40 L60 65 L50 60 L40 65 Z"
                            fill="currentColor"
                          />
                          <circle cx="50" cy="50" r="5" fill="currentColor" />
                        </motion.svg>
                      </div>
                    </div>
                  </div>

                  {/* GLI Certificate Badge */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-lg p-2 shadow-xl"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">Gaming</p>
                        <p className="text-xs text-gray-600">Labs Certified</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Security Labels */}
              {securityFeatures.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="absolute text-xs text-aa-gray whitespace-nowrap"
                  style={{
                    top: `${20 + index * 25}%`,
                    right: index % 2 === 0 ? '0' : 'auto',
                    left: index % 2 === 1 ? '0' : 'auto',
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <span className="bg-aa-dark-green/80 px-2 py-1 rounded border border-aa-card-border">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white">
              {t("aaPoker.protection.title")}
            </h3>
            <p className="text-aa-gray mb-8">
              {t("aaPoker.protection.desc")}
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

            {/* Security Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-aa-emerald rounded-full" />
                  <span className="text-xs text-aa-gray">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
