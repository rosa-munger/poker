"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Modal content data for each section
const modalContent = {
  gameplay: {
    title: 'THE MOST COMPREHENSIVE GAMEPLAY, "I HAVE THE MOST AND THE BEST."',
    image: "/image/home/section-aa-poker/1en-DsyJUMia.png",
    description: "So far, it has the richest and best customized configuration among all online game platforms, meeting the different needs of various groups: Texas Hold'em, Texas Short Cards, Texas 3-1, Omaha, Squid Game Mode, Video Table, Mushroom Mode, Critical Strike Bottom Pool Jackpot, Insurance mode.",
    features: [
      { title: "CLASSIC TEXAS HOLD'EM", desc: "Use your two trump cards and five common cards to make the best five cards." },
      { title: "TEXAS SHORT CARD", desc: "Remove 2-5 and use 6-A with a total of 36 cards in the Texas gameplay." },
      { title: "TEXAS 3-1", desc: "Play three cards, choose one to discard, and use the remaining two cards." },
      { title: "VIDEO POKER TABLE", desc: "Play cards face-to-face with your friends in real-time!" },
      { title: "MUSHROOM MODE", desc: "Each hand's banker places a bet on the mushroom pool for big wins!" },
      { title: "SQUID GAME", desc: "Survival competition mode based on the evolution of Texas Hold'em rules." },
      { title: "OMAHA POKER", desc: "An intellectual battlefield where absolute card strength speaks for itself." },
    ],
  },
  visualImpact: {
    title: "A VARIETY OF DESKTOPS, VISUAL IMPACT.",
    image: "/image/home/section-visual-impact/2-CB-uKVn3.png",
    description: "At AA POKER, we focus on the player experience, so we have a wide variety of table styles to freely switch between.",
    features: [
      { title: "CLASSIC AA POKER TABLETOPS", desc: "The signature green felt table that defines the AA POKER experience." },
      { title: "MINIMALIST DARK GREY", desc: "A sleek, modern design for a sophisticated aesthetic." },
      { title: "STAGE THEATER TABLETOPS", desc: "Feel like a star under the spotlight with this dramatic design." },
      { title: "TREASURE HUNTING", desc: "Adventure-themed table with maps and gold accents." },
      { title: "MYSTERIOUS SPACE", desc: "Play among the stars with galaxies and nebulas." },
      { title: "UNDERWATER WORLD", desc: "Dive deep into the ocean with marine life and coral reefs." },
    ],
  },
  experience: {
    title: "A DIVERSE POKER EXPERIENCE.",
    image: "/image/home/section-experience/5-CXEJETLl.png",
    description: "TLPT originated in Sydney, Australia and is a global elite event aimed at promoting the globalization of international competitive poker.",
    features: [
      { title: "GLOBAL ELITE EVENTS", desc: "World-class poker tournaments that attract the best players." },
      { title: "WORLD CHAMPIONS", desc: "Play alongside nearly 15 world champions including Joe Hacham, Dan Cates." },
      { title: "PROFESSIONALISM", desc: "All competitions follow strict professional standards." },
      { title: "FAIRNESS", desc: "Every player has an equal opportunity to succeed." },
      { title: "TRANSPARENCY", desc: "Complete transparency in all our operations." },
    ],
  },
  protection: {
    title: "MULTI-DIMENSIONAL PROTECTION，A WORLD WITHOUT THIEVES",
    image: "/image/home/section-multi-demensional/4-Qsc4xHEz.png",
    description: "By detecting GPS and IP information to restrict cheating, and through a professional anti cheating team, monitoring game dynamics around the clock.",
    features: [
      { title: "GLI GLOBAL FAIR CERTIFICATION", desc: "Renewed through GLI certification testing with fair random card issuance." },
      { title: "GPS/IP PROTECTION", desc: "Customized GPS and IP restrictions to minimize cheating." },
      { title: "ANTI CHEATING TEAM", desc: "Dedicated team monitoring game cheating behavior 24/7." },
      { title: "PROHIBITING DATA COLLECTION", desc: "Block third-party data collection tools." },
      { title: "PROHIBITING SIMULATORS", desc: "Prevent the use of simulators and emulators." },
      { title: "PROHIBITING AI", desc: "Strictly prohibit AI-powered tools or bots." },
    ],
  },
};

// Modal Component
function LearnMoreModal({ 
  isOpen, 
  onClose, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  content: typeof modalContent.gameplay | null;
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
                  className="object-contain"
                  quality={100}
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
                {content.features.map((feature, index) => (
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
  className="object-contain scale-140 drop-shadow-[0_0_40px_rgba(57,203,97,0.4)]"
  quality={100}
/>
      </motion.div>
    </motion.div>
  );
}

export default function AAPokerSection() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<keyof typeof modalContent | null>(null);

  const openModal = (key: keyof typeof modalContent) => {
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
                  THE MOST COMPREHENSIVE GAMEPLAY, &quot;I HAVE THE MOST AND THE BEST.&quot;
                </h3>
                <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                  Our online gaming platform has the richest customizable
                  configuration and the best experience, meeting diverse player needs with Texas Hold&apos;em, Omaha, Squid Game Mode, and more.
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
                A VARIETY OF DESKTOPS, VISUAL IMPACT.
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
                  At AA POKER, we focus on the player experience, so we have a wide variety of table styles to freely switch between. We offer classic AA POKER tabletops, minimalist dark grey tabletops, stage theater tabletops, treasure hunting tabletops, mysterious space tabletops, cinema scene tabletops, ice and snow tabletops, sunny beach tabletops, and underwater world tabletops.
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
                A DIVERSE POKER EXPERIENCE.
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
                  TLPT originated in Sydney, Australia and is a global elite event aimed at promoting the globalization of international competitive poker. TLPT has a large player base worldwide, with nearly 15 world champions including Joe Hacham, Dan Cates, Zhou Quan, Chen Dong. All competitions follow the principles of professionalism, fairness, and transparency.
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
                MULTI-DIMENSIONAL PROTECTION，A WORLD WITHOUT THIEVES
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
                  By detecting GPS and IP information to restrict cheating, and through a professional anti cheating team, monitoring game dynamics around the clock, we continuously combat cheating behavior and safeguard a fair gaming environment!
                </p>
                
                {/* Protection Features Summary */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">GLI GLOBAL FAIR CERTIFICATION</strong> - Completely fair testing with random card issuance.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">GPS/IP PROTECTION</strong> - Customized restrictions to minimize cheating.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-aa-light-green rounded-full" />
                    <p className="text-white/90 text-sm"><strong className="text-aa-light-green">ANTI CHEATING TEAM</strong> - 24/7 monitoring of game cheating behavior.</p>
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
