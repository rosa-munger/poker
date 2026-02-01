"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function DetailPage5() {
  const { language } = useLanguage();

  const getImagePath = () => {
    if (language === "tw") {
      return "/image/home/sliders/click-banner-tw/15en-detail-BNban7OD.jpg";
    } else if (language === "cn") {
      return "/image/home/sliders/click-banner-cn/15en-detail-BNban7OD.jpg";
    }
    return "/image/home/sliders/click-banner/15en-detail-BNban7OD.jpg";
  };

  const getVideoPath = () => {
    if (language === "tw") {
      return "/image/home/sliders/click-banner-tw/9ft-CrRxf2ym.mp4";
    } else if (language === "cn") {
      return "/image/home/sliders/click-banner-cn/9-Tf4912mH.mp4";
    }
    return "/image/home/sliders/video-clickview/9en-JP1GSTuZ.mp4";
  };

  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-aa-gold hover:text-aa-gold/80 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Detail Content with Video in Middle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl mx-auto px-4 space-y-8"
      >
        {/* Top Half of Image */}
        <div className="relative w-full">
          <img
            src={getImagePath()}
            alt="Detail Page 1"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Video Section with Border */}
        {/* <div className="w-full max-w-3xl mx-auto">
          <div className="border-8 border-white rounded-lg overflow-hidden">
            <video
              src="/image/home/sliders/video-clickview/9en-JP1GSTuZ.mp4"
              className="w-full h-auto object-contain"
              controls
              poster="/image/home/sliders/9en-BQNC1io5.jpg"
            />
          </div>
        </div> */}
      </motion.div>
    </div>
  );
}
