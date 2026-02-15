"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Hero slides data - language-specific images
const getHeroSlides = (language: string) => {
  const langFolder = language === 'cn' ? 'sliders-CN' : language === 'tw' ? 'sliders-TW' : '';
  const basePath = langFolder ? `/image/home/sliders/${langFolder}` : '/image/home/sliders';
  const clickBannerFolder = language === 'cn' ? 'click-banner-cn' : language === 'tw' ? 'click-banner-tw' : 'click-banner';
  
  return [
    {
      id: 1,
      type: "image",
      src: `${basePath}/15en-D6ZayPco.jpg`,
      clickAction: "detailpage5",
      clickBannerSrc: `/image/home/sliders/${clickBannerFolder}/15en-detail-BNban7OD.jpg`,
      clickBannerType: "image",
    },
    {
      id: 2,
      type: "image",
      src: `${basePath}/16en-BmZrEnMB.jpg`,
      clickAction: "detailpage4",
      clickBannerSrc: `/image/home/sliders/${clickBannerFolder}/16en-detail-BAXvfGL_.jpg`,
      clickBannerType: "image",
    },
    {
      id: 3,
      type: "image",
      src: `${basePath}/8en-ubWAozgr.png`,
      clickAction: "detailpage1",
      clickBannerSrc: `/image/home/sliders/${clickBannerFolder}/detail1-CStQojDVj.jpg`,
      clickBannerType: "image",
    },
    {
      id: 4,
      type: "image",
      src: `${basePath}/9en-BQNC1io5.jpg`,
      clickAction: "detailpage3",
    },
    {
      id: 5,
      type: "video",
      src: `${basePath}/10en-D54NV-2V.mp4`,
      clickAction: "detailpage3",
    },
    {
      id: 6,
      type: "image",
      src: `${basePath}/12en-QURR5ufU.jpg`,
      clickAction: "detailpage2",
    },
    {
      id: 7,
      type: "image",
      src: `${basePath}/5-D7UNhhia.png`,
      clickAction: null,
    },
  ];
};

// Slide animation variants - smooth left to right transition
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    zIndex: 0,
  }),
};

export default function Hero() {
  const { language } = useLanguage();
  const [[currentSlide, direction], setSlideState] = useState([0, 1]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Get language-specific slides
  const heroSlides = getHeroSlides(language);

  // Reset to first slide when language changes
  useEffect(() => {
    setSlideState([0, 1]);
  }, [language]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setSlideState(([prev]) => [(prev + 1) % heroSlides.length, 1]);
  }, [heroSlides.length]);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    const dir = index > currentSlide ? 1 : -1;
    setSlideState([index, dir]);
  };

  // Auto-slide effect - 5s for images, 10s for video
  useEffect(() => {
    const currentSlideData = heroSlides[currentSlide];
    const duration = currentSlideData.type === "video" ? 10000 : 5000;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  // Play video when it becomes active
  useEffect(() => {
    if (heroSlides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [currentSlide]);

  const currentSlideData = heroSlides[currentSlide];

  // Handle slide click
  const handleSlideClick = () => {
    const action = currentSlideData.clickAction;
    if (action === "detailpage1") {
      router.push("/detailpage1");
    } else if (action === "detailpage2") {
      router.push("/detailpage2");
    }
    else if (action === "detailpage4") {
      router.push("/detailpage4");
    }
    else if (action === "detailpage5") {
      router.push("/detailpage5");
    }
    else if (action === "detailpage3") {
      setIsVideoModalOpen(true);
    }
  };

  // Get video path based on language
  const getModalVideoPath = () => {
    if (language === "tw") {
      return "/image/home/sliders/click-banner-tw/9ft-CrRxf2ym.mp4";
    } else if (language === "cn") {
      return "/image/home/sliders/click-banner-cn/9-Tf4912mH.mp4";
    }
    return "/image/home/sliders/video-clickview/9en-JP1GSTuZ.mp4";
  };

  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden pt-16">
      {/* Top Golden Border */}
      <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aa-gold to-transparent z-20" />
      
      {/* Slider Container */}
      <div className="relative w-full h-full bg-aa-dark-green">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
            onClick={handleSlideClick}
            style={{ cursor: currentSlideData.clickAction ? 'pointer' : 'default' }}
          >
            {currentSlideData.type === "image" ? (
              <Image
                src={currentSlideData.src}
                alt={`Slide ${currentSlide + 1}`}
                fill
                sizes="100vw"
                priority={currentSlide === 0}
                className="object-contain object-center"
              />
            ) : (
              <video
                ref={videoRef}
                src={currentSlideData.src}
                className="w-full h-full object-contain object-center"
                muted
                playsInline
                autoPlay
                loop
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-aa-dark-green/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? "w-8 bg-aa-light-green"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Golden Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aa-gold to-transparent z-20" />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Container with Border */}
              <div className="border-8 border-white rounded-lg overflow-hidden bg-black">
                <video
                  src={getModalVideoPath()}
                  className="w-full h-auto"
                  controls
                  autoPlay
                  poster="/image/home/sliders/9en-BQNC1io5.jpg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
