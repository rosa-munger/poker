"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-aa-gold mb-6 tracking-wider">
            ANYONE COULD BE A STAR!
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            DOWNLOAD THE APP, ENTER THE CARD WITHIN 5 SECONDS
          </p>
        </motion.div>

        {/* About AA POKER Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-b from-[#1a3d2e] to-[#0d2818] rounded-xl p-8 md:p-12 mb-12 border border-[#3d5a4d]/40"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-aa-emerald mb-6">
            ABOUT AA POKER
          </h2>
          <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
            <p>
              In AA POKER, we strive to provide a safe and fair game platform for all poker enthusiasts.
            </p>
            <p>
              Using AA POKER, you can play poker with friends anytime, anywhere, to create your own club or create a fast card, select your favorite poker game from our popular options.
            </p>
            <p>
              We hope you can enjoy your favorite poker in AA POKER!!
            </p>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-b from-[#1a3d2e] to-[#0d2818] rounded-xl p-8 md:p-12 border border-[#3d5a4d]/40"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-aa-emerald mb-8">
            CONTACT US
          </h2>
          
          <div className="space-y-6">
            {/* Customer Service */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Customer Service
              </h3>
              <p className="text-white/80">
                Please contact: <a href="mailto:info@aapoker.app" className="text-aa-gold hover:text-aa-gold/80 transition-colors">info@aapoker.app</a>
              </p>
            </div>

            {/* Brand Cooperation */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Brand Cooperation
              </h3>
              <p className="text-white/80">
                Please contact: <a href="mailto:branding@aapoker.app" className="text-aa-gold hover:text-aa-gold/80 transition-colors">branding@aapoker.app</a>
              </p>
            </div>

            {/* Public Relations Inquiry */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Public Relations Inquiry
              </h3>
              <p className="text-white/80">
                Please contact: <a href="mailto:pr@aapoker.app" className="text-aa-gold hover:text-aa-gold/80 transition-colors">pr@aapoker.app</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
