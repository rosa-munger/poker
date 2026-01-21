"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Friends/Players data with actual images
const friends = [
  {
    id: 1,
    name: "Didier Guerin",
    image: "/image/home/section-with-aa/DidierGuerin-DKQuSzcL.png",
    hasYoutube: true,
    hasWeibo: true,
  },
  {
    id: 2,
    name: "Jin Bo xin",
    image: "/image/home/section-with-aa/JinBoxin-BEMGVbID.png",
    hasYoutube: false,
    hasWeibo: false,
  },
  {
    id: 3,
    name: "Joe Hachem",
    image: "/image/home/section-with-aa/JoeHachem-B23TRt9Q.png",
    hasYoutube: false,
    hasWeibo: false,
  },
  {
    id: 4,
    name: "Mao Ren Ji",
    image: "/image/home/section-with-aa/MaoRenJi-BVznVTlX.png",
    hasYoutube: false,
    hasWeibo: false,
  },
  {
    id: 5,
    name: "Bryn Kenney",
    image: "/image/home/section-with-aa/BrynKenney-LnkACh9M.png",
    hasYoutube: false,
    hasWeibo: false,
  },
  {
    id: 6,
    name: "XIAO YAO",
    image: "/image/home/section-with-aa/XIAOYAO-Ceaegvn3.png",
    hasYoutube: false,
    hasWeibo: false,
  },
  {
    id: 7,
    name: "Zhu Zheming",
    image: "/image/home/section-with-aa/ZhuZheming-BvFkT_EP.png",
    hasYoutube: false,
    hasWeibo: false,
  },
];

export default function FriendsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= friends.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, friends.length - visibleCount) : prev - 1
    );
  };

  const visibleFriends = friends.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a1f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            {t("friends.title")}
          </h2>
          <p className="text-aa-gray text-sm tracking-wider">
            {t("friends.subtitle")}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-aa-card-bg border border-aa-card-border rounded-full flex items-center justify-center text-white hover:bg-aa-emerald/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Cards Grid - Images already have names, bigger and taller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-8">
            <AnimatePresence mode="popLayout">
              {visibleFriends.map((friend, index) => (
                <motion.div
                  key={friend.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Card - Taller aspect ratio, no name overlay since images have names */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={friend.image}
                      alt={friend.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      quality={100}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-aa-card-bg border border-aa-card-border rounded-full flex items-center justify-center text-white hover:bg-aa-emerald/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(friends.length / visibleCount) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * visibleCount)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / visibleCount) === i
                  ? "w-6 bg-aa-gold"
                  : "bg-aa-gray/30 hover:bg-aa-gray/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
