"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Hero slides data - 4 images + 1 video (each slide displays independently)
const heroSlides = [
  {
    id: 1,
    type: "image",
    src: "/image/home/sliders/8en-ubWAozgr.png",
    clickAction: "detailpage1",
  },
  {
    id: 2,
    type: "image",
    src: "/image/home/sliders/9en-BQNC1io5.jpg",
    clickAction: "videoModal",
  },
  {
    id: 3,
    type: "video",
    src: "/image/home/sliders/10en-D54NV-2V.mp4",
    clickAction: null,
  },
  {
    id: 4,
    type: "image",
    src: "/image/home/sliders/12en-QURR5ufU.jpg",
    clickAction: "detailpage2",
  },
  {
    id: 5,
    type: "image",
    src: "/image/home/sliders/5-D7UNhhia.png",
    clickAction: null,
  },
];

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
  const [[currentSlide, direction], setSlideState] = useState([0, 1]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const router = useRouter();

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setSlideState(([prev]) => [(prev + 1) % heroSlides.length, 1]);
  }, []);

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
    if (action === "videoModal") {
      setShowVideoModal(true);
    } else if (action === "detailpage1") {
      router.push("/detailpage1");
    } else if (action === "detailpage2") {
      router.push("/detailpage2");
    }
  };

  return (
    <section className="relative w-full h-[70vh] overflow-hidden pt-16">
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
                className="object-cover object-center"
                priority
                quality={100}
              />
            ) : (
              <video
                ref={videoRef}
                src={currentSlideData.src}
                className="w-full h-full object-cover object-center"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
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
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-8 border-white rounded-lg overflow-hidden">
                <video
                  src="/image/home/sliders/video-clickview/9en-JP1GSTuZ.mp4"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-aa-gold transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
