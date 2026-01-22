"use client";

import { motion } from "framer-motion";

export default function VisualImpactPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 uppercase"
        >
          A VARIETY OF DESKTOPS, VISUAL IMPACT.
        </motion.h1>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="relative w-full aspect-[16/9]">
            <img
              src="/image/home/section-visual-impact/2-CB-uKVn3.png"
              alt="Visual Impact"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-sm md:text-base mb-10 leading-relaxed"
        >
          At AA POKER, we focus on the player experience, so we have a wide variety of table styles to freely switch between. We offer classic AA POKER tabletops, minimalist dark grey tabletops, stage theater tabletops, treasure hunting tabletops, mysterious space tabletops, cinema scene tabletops, ice and snow tabletops, sunny beach tabletops, and underwater world tabletops. With a variety of table styles, players can immerse themselves in the visual experience brought by diverse styles of tabletops.
        </motion.p>

        {/* Table Styles List */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              CLASSIC AA POKER TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              The signature green felt table that defines the AA POKER experience. Clean, professional, and timeless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              MINIMALIST DARK GREY TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              A sleek, modern design for players who prefer a sophisticated and understated aesthetic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              STAGE THEATER TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Feel like a star under the spotlight with this dramatic theater-inspired design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              TREASURE HUNTING TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Embark on an adventure with this treasure-themed table design featuring maps and gold accents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              MYSTERIOUS SPACE TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Play among the stars with this cosmic-themed table featuring galaxies and nebulas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              CINEMA SCENE TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Experience the glamour of Hollywood with this movie-inspired table design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              ICE AND SNOW TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              A cool, refreshing winter wonderland theme for a chill gaming experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              SUNNY BEACH TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Bring the vacation vibes with this tropical beach-themed table design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              UNDERWATER WORLD TABLETOPS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Dive deep into the ocean with this aquatic-themed table featuring marine life and coral reefs.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
