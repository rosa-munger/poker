"use client";

import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 uppercase"
        >
          A DIVERSE POKER EXPERIENCE.
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
              src="/image/home/section-experience/5-CXEJETLl.png"
              alt="Poker Experience"
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
          TLPT originated in Sydney, Australia and is a global elite event aimed at promoting the globalization of international competitive poker and advancing the development of international competitive poker sports events. TLPT has a large player base worldwide, with nearly 15 world champions including Joe Hacham, Dan Cates, Zhou Quan, Chen Dong, etc; All competitions follow the principles of professionalism, fairness, and transparency, aiming to provide a friendly and professional competitive environment for international competitive poker enthusiasts and bring them an unparalleled poker competitive experience.
        </motion.p>

        {/* Features */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              GLOBAL ELITE EVENTS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              TLPT hosts world-class poker tournaments that attract the best players from around the globe. Experience the thrill of competing at the highest level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              WORLD CHAMPIONS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Play alongside nearly 15 world champions including Joe Hacham, Dan Cates, Zhou Quan, Chen Dong, and many more legendary players who have chosen AA POKER as their platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROFESSIONALISM
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              All competitions follow strict professional standards, ensuring every game is conducted with the highest level of integrity and sportsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              FAIRNESS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Our platform is built on the foundation of fairness. Every player has an equal opportunity to succeed based on their skills and strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              TRANSPARENCY
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We maintain complete transparency in all our operations, from game mechanics to tournament rules, ensuring players always know what to expect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              FRIENDLY ENVIRONMENT
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We strive to create a welcoming and friendly competitive environment where both newcomers and veterans can enjoy the game together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              UNPARALLELED EXPERIENCE
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              From the moment you join, experience poker like never before with cutting-edge technology, stunning visuals, and seamless gameplay that sets AA POKER apart from the rest.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
