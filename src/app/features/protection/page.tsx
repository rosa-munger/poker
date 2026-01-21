"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProtectionPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 uppercase"
        >
          MULTI-DIMENSIONAL PROTECTION，A WORLD WITHOUT THIEVES
        </motion.h1>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/image/home/section-multi-demensional/4-Qsc4xHEz.png"
              alt="Multi-Dimensional Protection"
              fill
              className="object-contain"
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
          By detecting GPS and IP information to restrict cheating, and through a professional anti cheating team, monitoring game dynamics around the clock, we continuously combat cheating behavior and safeguard a fair gaming environment!
        </motion.p>

        {/* Protection Features */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              GLI GLOBAL FAIR CERTIFICATION
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              The game has been renewed through GLI certification testing, proving that our AA POKER has undergone completely fair testing, with a sufficiently random card issuance sequence that meets industry standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              GPS/IP PROTECTION
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We provide customized GPS and IP restrictions, which will restrict players at the same table with the same GPS information or IP address when enabled, minimizing cheating and ensuring fair competition in our game.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              ANTI CHEATING TEAM
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We attach great importance to anti cheating work, and for this reason, we have established a dedicated anti cheating team. They will monitor game cheating behavior 24/7 and take serious action immediately once confirmed. AA POKER always adheres to the spirit of fair and just gaming competition, has zero tolerance for cheating behavior, safeguards the gaming rights of every player, and allows players to enjoy a healthy, fair, and competitive poker game.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROHIBITING DATA COLLECTION TOOL
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We actively detect and block any third-party data collection tools that could give players an unfair advantage by gathering information about opponents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROHIBITING SIMULATORS
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Our system detects and prevents the use of simulators and emulators that could be used to run multiple accounts or automate gameplay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROHIBITING COLLUSIVE CHEATING
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Our advanced algorithms detect patterns of collusion between players, ensuring that coordinated cheating attempts are identified and stopped.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROHIBITING AI
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We strictly prohibit the use of AI-powered tools or bots that could automate decision-making and give players an unfair advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              PROHIBITING REMOTELY CONTROLLED WORMHOLES
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We detect and block any remote access tools that could allow third parties to control a player&apos;s account or provide real-time coaching.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              24/7 MANUAL REVIEW
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Our dedicated team conducts around-the-clock manual reviews of suspicious activities, ensuring that automated systems are supplemented by human judgment.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
