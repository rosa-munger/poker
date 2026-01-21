"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GameplayPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 uppercase"
        >
          THE MOST COMPREHENSIVE GAMEPLAY, &quot;I HAVE THE MOST AND THE BEST.&quot;
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
              src="/image/home/section-aa-poker/1en-DsyJUMia.png"
              alt="AA Poker Gameplay"
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
          So far, it has the richest and best customized configuration among all online game platforms, meeting the different needs of various groups: Texas Hold&apos;em, Texas Short Cards, Texas 3-1, Omaha, Squid Game Mode, Video Table, Mushroom Mode, Critical Strike Bottom Pool Jackpot, Insurance mode.
        </motion.p>

        {/* Game Modes */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              CLASSIC TEXAS HOLD&apos;EM
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Use your two trump cards and five common cards to make the best five cards. By analyzing the card face and opponent&apos;s psychology, place bets or deceive to win the bottom pool.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              TEXAS SHORT CARD
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Remove 2-5 and use 6-A with a total of 36 cards in the Texas gameplay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              TEXAS 3-1
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Play three cards, choose one to discard, and use the remaining two cards in the Texas gameplay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              VIDEO POKER TABLE
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              You can play cards face-to-face with your friends in real-time!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              MUSHROOM MODE
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Each hand&apos;s banker places a bet on the mushroom pool, as long as you sit in the designated position and win, you can receive all the cards in the mushroom pool!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              CRITICAL STRIKE BOTTOM POOL
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              When a critical strike is triggered, everyone pours large amounts of chips into the bottom pool and directly issues cards to enter the flipping stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              JACKPOT
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              By using two cards in a game and combining them into four cards, one can win JAckpot rewards from clubs and leagues, as well as those from the Royal and Four Chess!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              INSURANCE MODE
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              In the case of multiple ALLINs, when the other party still has unsent OUTS that can surpass you, you can purchase insurance to hedge the risk of being &quot;shocked&quot; by the opponent&apos;s reversal!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              SQUID GAME
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed mb-4">
              Squid game is a survival competition mode based on the evolution of Texas Hold&apos;em rules. Compared to traditional Texas Hold&apos;em, Squid game adds more competitive fun and makes the game more exciting. AA POKER has set up two gameplay modes to enrich the player experience: Classic Squid and Blood Battle Squid.
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed mb-2">
              <strong>1) Gameplay Mode - Classic Mode</strong>
            </p>
            <ul className="text-white text-sm md:text-base leading-relaxed list-disc list-inside space-y-1 mb-4">
              <li>The game starts automatically after reaching 4 players.</li>
              <li>After each round, the winner of the main pool will receive one squid, and each round of squid game is limited to one squid.</li>
              <li>At the end of each round, when all squid have been distributed, the game enters the settlement stage, and all winners will receive a payout from the last player.</li>
              <li>Players who have obtained squid can leave early and still receive compensation normally. Those who have not obtained squid and leave early will be judged as losers and punished.</li>
              <li>After the start of the Squid game, new players can join midway and the number of squid will increase accordingly.</li>
            </ul>
            <p className="text-white text-sm md:text-base leading-relaxed mb-2">
              <strong>2) There are multiple reward modes in the Blood Battle Squid gameplay: Normal mode, Unlimited Squid mode, and Double Squid mode.</strong>
            </p>
            <ul className="text-white text-sm md:text-base leading-relaxed list-disc list-inside space-y-1">
              <li>Normal mode: It is the classic Blood Battle Squid, with a limited number of squid available until it is sold out. Each player can repeatedly obtain squid, and the reward will be calculated based on the number of squid obtained in this round.</li>
              <li>Infinite Squid Mode: The number of squid is unlimited, and it is necessary to constantly determine the last loser who did not obtain squid in order to end this round of squid game!</li>
              <li>Doubling Squid Mode: The number of squid is limited, and the more squid players grab, the greater the multiplier when calculating rewards!</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#39cb61] mb-3 uppercase">
              OMAHA POKER
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Omaha Poker - an intellectual battlefield where absolute card strength speaks for itself. Each player has the exclusive right to combine 4 trump cards and 5 common cards, and must accurately select 2 trump cards and 3 common cards to form the strongest five card group. Twice as many decision-making dimensions as Texas Hold&apos;em, making every hand a math problem that tests computational power. Come and join this deep game of four cards and five cards!
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
