"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DetailPage1() {
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
            src="/image/home/sliders/click-banner/detail1en-B6Rh6eCE.jpg"
            alt="Detail Page 1"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Video Section with Border */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="border-8 border-white rounded-lg overflow-hidden">
            <video
              src="/image/home/sliders/video-clickview/9en-JP1GSTuZ.mp4"
              className="w-full h-auto object-contain"
              controls
              poster="/image/home/sliders/9en-BQNC1io5.jpg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
