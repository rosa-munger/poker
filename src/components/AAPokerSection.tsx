"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Modal content data structure - content will be populated with translations
const getModalContent = (t: (key: string) => string) => ({
  gameplay: {
    title: t("aaPoker.gameplay.title"),
    image: "/image/home/section-aa-poker/1en-DsyJUMia.png",
    description: t("modal.gameplay.description"),
    features: [
      { title: t("modal.gameplay.classicTexas"), desc: t("modal.gameplay.classicTexasDesc") },
      { title: t("modal.gameplay.shortCard"), desc: t("modal.gameplay.shortCardDesc") },
      { title: t("modal.gameplay.texas31"), desc: t("modal.gameplay.texas31Desc") },
      { title: t("modal.gameplay.videoTable"), desc: t("modal.gameplay.videoTableDesc") },
      { title: t("modal.gameplay.mushroom"), desc: t("modal.gameplay.mushroomDesc") },
      { title: t("modal.gameplay.squidGame"), desc: t("modal.gameplay.squidGameDesc") },
      { title: t("modal.gameplay.omaha"), desc: t("modal.gameplay.omahaDesc") },
    ],
  },
  visualImpact: {
    title: t("aaPoker.visualImpact.title"),
    image: "/image/home/section-visual-impact/2-CB-uKVn3.png",
    description: t("modal.visualImpact.description"),
    features: [
      { title: t("modal.visualImpact.classicTable"), desc: t("modal.visualImpact.classicTableDesc") },
      { title: t("modal.visualImpact.darkGrey"), desc: t("modal.visualImpact.darkGreyDesc") },
      { title: t("modal.visualImpact.theater"), desc: t("modal.visualImpact.theaterDesc") },
      { title: t("modal.visualImpact.treasure"), desc: t("modal.visualImpact.treasureDesc") },
      { title: t("modal.visualImpact.space"), desc: t("modal.visualImpact.spaceDesc") },
      { title: t("modal.visualImpact.underwater"), desc: t("modal.visualImpact.underwaterDesc") },
    ],
  },
  experience: {
    title: t("aaPoker.experience.title"),
    image: "/image/home/section-experience/5-CXEJETLl.png",
    description: t("modal.experience.description"),
    features: [
      { title: t("modal.experience.globalEvents"), desc: t("modal.experience.globalEventsDesc") },
      { title: t("modal.experience.worldChampions"), desc: t("modal.experience.worldChampionsDesc") },
      { title: t("modal.experience.professionalism"), desc: t("modal.experience.professionalismDesc") },
      { title: t("modal.experience.fairness"), desc: t("modal.experience.fairnessDesc") },
      { title: t("modal.experience.transparency"), desc: t("modal.experience.transparencyDesc") },
    ],
  },
  protection: {
    title: t("aaPoker.protection.title"),
    image: "/image/home/section-multi-demensional/4-Qsc4xHEz.png",
    description: t("modal.protection.description"),
    features: [
      { title: t("modal.protection.gliCert"), desc: t("modal.protection.gliCertDesc") },
      { title: t("modal.protection.gpsIp"), desc: t("modal.protection.gpsIpDesc") },
      { title: t("modal.protection.antiCheat"), desc: t("modal.protection.antiCheatDesc") },
      { title: t("modal.protection.dataCollection"), desc: t("modal.protection.dataCollectionDesc") },
      { title: t("modal.protection.simulators"), desc: t("modal.protection.simulatorsDesc") },
      { title: t("modal.protection.ai"), desc: t("modal.protection.aiDesc") },
    ],
  },
});

// Modal Component
function LearnMoreModal({ 
  isOpen, 
  onClose, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  content: { title: string; image: string; description: string; features: { title: string; desc: string }[] } | null;
}) {
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#0a2e1a] to-[#051a0f] rounded-2xl border border-aa-light-green/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-aa-light-green/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-aa-light-green mb-6 pr-12"
              >
                {content.title}
              </motion.h2>

              {/* Decorative Line */}
              <div className="w-full h-[2px] bg-gradient-to-r from-aa-light-green via-aa-gold to-transparent mb-8" />

              {/* Main Image with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden"
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-contain"
                  loading="lazy"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1a] via-transparent to-transparent" />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-base md:text-lg mb-8 leading-relaxed"
              >
                {content.description}
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.features.map((feature: { title: string; desc: string }, index: number) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-lg bg-black/30 border border-aa-light-green/20 hover:border-aa-light-green/50 transition-colors"
                  >
                    <h3 className="text-aa-light-green font-bold text-sm mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Image animation component with floating effect
function AnimatedImage({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative w-full h-full"
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain scale-140 drop-shadow-[0_0_40px_rgba(57,203,97,0.4)]"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

export default function AAPokerSection() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'gameplay' | 'visualImpact' | 'experience' | 'protection' | null>(null);
  const modalContent = getModalContent(t);

  const openModal = (key: 'gameplay' | 'visualImpact' | 'experience' | 'protection') => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Unified dark green background for all sections */}
      <div className="bg-[#0a1f14]">
        {/* Section 1: AA POKER - Your First Choice */}
        <section className="py-20 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-aa-light-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-aa-light-green mb-6 leading-tight">
                  {t("aaPoker.gameplay.title")}
                </h3>
                <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                  {t("aaPoker.gameplay.desc")}
                </p>
                <motion.button
                  onClick={() => openModal('gameplay')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 border-2 border-[#39cb61] text-[#39cb61] font-bold tracking-wider text-sm hover:bg-[#39cb61] hover:text-white transition-colors"
                >
                  {t("aaPoker.learnMore")}
                </motion.button>
              </motion.div>

              {/* Right Content - Large Animated Image */}
              <div className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]">
                <AnimatedImage
                  src="/image/home/section-aa-poker/1en-DsyJUMia.png"
                  alt="AA Poker Gameplay"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Visual Impact */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-aa-light-green leading-tight">
                {t("aaPoker.visualImpact.title")}
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-aa-light-green to-transparent mt-4 mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Large Animated Image */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px]">
                <AnimatedImage
                  src="/image/home/section-visual-impact/2-CB-uKVn3.png"
                  alt="Visual Impact"
                  delay={0.2}
                />
              </div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                  {t("aaPoker.visualImpact.desc")}
                </p>
                <motion.button
                  onClick={() => openModal('visualImpact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 border-2 border-[#39cb61] text-[#39cb61] font-bold tracking-wider text-sm hover:bg-[#39cb61] hover:text-white transition-colors"
                >
                  {t("aaPoker.learnMore")}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Diverse Poker Experience */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-aa-light-green leading-tight">
                {t("aaPoker.experience.title")}
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-aa-light-green to-transparent mt-4 mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                  {t("aaPoker.experience.desc")}
                </p>
                <motion.button
                  onClick={() => openModal('experience')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 border-2 border-[#39cb61] text-[#39cb61] font-bold tracking-wider text-sm hover:bg-[#39cb61] hover:text-white transition-colors"
                >
                  {t("aaPoker.learnMore")}
                </motion.button>
              </motion.div>

              {/* Right Content - Large Animated Image */}
              <div className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]">
                <AnimatedImage
                  src="/image/home/section-experience/5-CXEJETLl.png"
                  alt="Poker Experience"
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Multi-Dimensional Protection */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-aa-light-green/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-aa-light-green leading-tight">
                {t("aaPoker.protection.title")}
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-aa-light-green to-transparent mt-4 mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Large Animated Image */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px]">
                <AnimatedImage
                  src="/image/home/section-multi-demensional/4-Qsc4xHEz.png"
                  alt="Multi-Dimensional Protection"
                  delay={0.2}
                />
              </div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
                  {t("aaPoker.protection.desc")}
                </p>
                
                {/* Protection Features Summary */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">{t("modal.protection.gliCert")}</strong> - {t("modal.protection.gliCertDesc")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">{t("modal.protection.gpsIp")}</strong> - {t("modal.protection.gpsIpDesc")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">{t("modal.protection.antiCheat")}</strong> - {t("modal.protection.antiCheatDesc")}</p>
                  </div>
                </div>

                <motion.button
                  onClick={() => openModal('protection')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 border-2 border-[#39cb61] text-[#39cb61] font-bold tracking-wider text-sm hover:bg-[#39cb61] hover:text-white transition-colors"
                >
                  {t("aaPoker.learnMore")}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <LearnMoreModal
        isOpen={activeModal !== null}
        onClose={closeModal}
        content={activeModal ? modalContent[activeModal] : null}
      />
    </>
  );
}
