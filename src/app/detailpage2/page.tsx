"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DetailPage2() {
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

      {/* Detail Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <div className="relative w-full">
          <img
            src="/image/home/sliders/click-banner/12en-detail-BRbnQXcV.jpg"
            alt="Detail Page 2"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
