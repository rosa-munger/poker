"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";

// Full article content data
const articleContent: { [key: string]: ArticleContent } = {
  "tlpt-jeju-2025-main-event-circuit-winner": {
    heroImage: "/image/news/details-news/new1/1-BJRjznbR.png",
    sections: [
      {
        type: "paragraph",
        content: "The inaugural The Lord Poker Tournament in Jeju Island, South Korea has reached the halfway point. The action has been in full swing since May 13 with games continuing through May 22 at the Landing Casino within the Jeju Shinhwa World Resort. With a jaw-dropping USD 8,000,000 guarantee announced, expectedly players flocked in to earn their share. Below are the early highlights."
      },
      {
        type: "heading",
        content: "TLPT JEJU – HALFWAY HIGHLIGHTS"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/2-Bismu3rc.png",
        alt: "TLPT Jeju Trophy"
      },
      {
        type: "paragraph",
        content: "The main attraction is currently underway, the USD 3,000,000 guaranteed TLPT Main Event 15K Super High Roller, and expectedly, the field is populated with some of the world's most decorated players. Out of the 115 that signed up at Day 1, only 58 players advanced to Day 2 led by Haohui Ma."
      },
      {
        type: "paragraph",
        content: "Others in the mix were TLPT Ambassadors Quan Zhou and Dan Cates, Nguyen Quang Minh, Amichai Barer, Sean Ooi, Renji Mao, James Mendoza, Dominik Nitsche, and Lei Yu. Registration is still open on May 17 with buy-in at USD 15,000. Read up on the action via the Live Updates."
      },
      {
        type: "heading",
        content: "#2 MAIN EVENT (CS) - 8 HANDED"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/3-BxpfpXC6.png",
        alt: "Main Event Champion Weizheng Zhong"
      },
      {
        type: "heading",
        content: "INTERVIEW WITH WEIZHENG ZHONG - INAUGURAL TLPT MAIN EVENT CHAMPION"
      },
      {
        type: "paragraph",
        content: "The $700,000 guaranteed inaugural The Lord Poker Tournament Circuit Main Event crowned Weizheng Zhong capturing his first poker trophy and $120,000, to more than double his all-time live earnings."
      },
      {
        type: "qa",
        question: "Congratulations on winning the biggest event of the series so far! How do you feel?",
        answer: "I feel very happy and very lucky to win this."
      },
      {
        type: "qa",
        question: "This was quite the marathon heads up, how did you adjust to your opponent?",
        answer: "So basically I tried to play as much as possible against him, but still I folded when I had KQ off suit against him. If I didn't get that cooler hand I'd probably lose the heads up."
      },
      {
        type: "qa",
        question: "Starting day 2 with only 15BB how has the journey been to become champion?",
        answer: "It was pretty sweet honestly, on Day 1, I almost bubbled, before late reg I only had 3 or 4 bb left. Then I rounded up to 112K in one level, then eventually I bagged around 70K. You know the first two level of Day 2, I actually didn't get any spots so I was down to like 3 bb, then when I moved and got pretty good spots and cooler get paid."
      },
      {
        type: "qa",
        question: "Who was your toughest opponent in the final table and why?",
        answer: "It was Stephen Song because he is the most experienced player, but I didn't play many pots against him, but at last five players left I think it was William Jia because he was the better opponent after Stephen busted."
      },
      {
        type: "qa",
        question: "How did you get into poker?",
        answer: "I started playing poker when I was in college during the pandemic. My first time playing poker was in like 2019 and I started to play a lot during the first year of pandemic so 2020."
      },
      {
        type: "qa",
        question: "Is it just a hobby or you play poker for a living?",
        answer: "Right now I play cards and crypto stuff."
      },
      {
        type: "qa",
        question: "How will your poker career change now that you have this massive win?",
        answer: "I mean it's not really like life changing money for me, but definitely I can travel more now."
      },
      {
        type: "qa",
        question: "Will you try your luck in one of the high rollers in the coming days?",
        answer: "My initial plan was not playing, but honestly I don't know now (laughs)"
      },
      {
        type: "qa",
        question: "How did you find out about The Lord Poker Tournament and what made you play?",
        answer: "My friend invited me to come here (Zhou Yinan) so he said there was a freeroll in Jeju and I was traveling to China so said sure yeah."
      },
      {
        type: "paragraph",
        content: "Read up on the action via the Live Updates."
      },
      {
        type: "table",
        title: "Main Event Results",
        headers: ["#", "Payout", "Player"],
        rows: [
          ["1", "$124,000", "Weizheng Zhong 🇨🇳"],
          ["2", "$67,000", "Xuecong Wu 🇨🇳"],
          ["3", "$48,500", "William Jia 🇦🇺"],
          ["4", "$40,300", "Fangzhou Zhu 🇨🇳"],
          ["5", "$29,500", "Yiyu Zhou 🇨🇳"],
          ["6", "$22,500", "Jiaming Zhao 🇨🇳"],
          ["7", "$17,500", "Stephen Song 🇺🇸"],
          ["8", "$16,500", "Jin Zeng 🇨🇳"],
          ["9", "$13,700", "Huan Wen 🇨🇳"]
        ],
        totalPrize: "$700,000",
        entries: "505",
        itm: "60"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/5-Cekw5IQr.png",
        alt: "Champion celebration"
      },
      {
        type: "paragraph",
        content: "The first event of the inaugural TLPT Jeju blasted in as players poured for the $600,000 guaranteed Freezeout Freeroll. To enter players had to obtain entry via the AAPoker app. A total of 446 players showed up with the top 75 claiming a portion of the prize pool. In the end, it was Xiaqing Ji who turned his freeroll ticket to a whopping $120,000!"
      },
      {
        type: "heading",
        content: "Interview With the Champion"
      },
      {
        type: "qa",
        question: "What does it feel like winning 100k from nothing",
        answer: "I feel great and very happy right now"
      },
      {
        type: "qa",
        question: "How did you hear about the event?",
        answer: "From a good friend of mine Evan Zhang"
      },
      {
        type: "qa",
        question: "How did you approach the final table coming in as cl and having position on the 2nd biggest stack?",
        answer: "I just played my style, be aggressive and used my stack properly to build more and more stack."
      },
      {
        type: "qa",
        question: "How do you approach this tournament strategically? (e.g., do you play a wide range of hands, focus on post-flop play, or try to get a good chip stack early?)",
        answer: "First of all I read all the body movement of the player in my table so I know how will I adjust my play style."
      },
      {
        type: "qa",
        question: "How do you handle the pressure of a big field?(Explore their ability to stay calm and make rational decisions despite the large number of players)",
        answer: "There is still some pressure on the big field, because some time ago compare the low period the grades are not very good."
      },
      {
        type: "qa",
        question: "What is your poker history? You took a long break from playing poker after 2020",
        answer: "My Buglix probably started in 2017, I have also been all over the world, Including EPT the Australian Millions will participate there will be participation in domestic Asian competitions. Then give me more after winning the championship this time. It has greatly increased my confidence I hope that on the way to the next game you can also get better results."
      },
      {
        type: "qa",
        question: "Any advice for young players?",
        answer: "First of all, we should do a good job of fund management. Then through continuous learning I think everyone through hard work Naturally, there will be good grades."
      },
      {
        type: "table",
        title: "Freeroll Results",
        headers: ["#", "Payout", "Player"],
        rows: [
          ["1", "$100,000", "Xiaqing Ji 🇨🇳"],
          ["2", "$78,000", "Jinsui Fan 🇨🇳"],
          ["3", "$54,000", "Jiawei Yuan 🇨🇳"],
          ["4", "$37,000", "Yang Chan 🇨🇳"],
          ["5", "$27,000", "Xinyuan Yang 🇨🇳"],
          ["6", "$19,000", "Jiaman Sun 🇨🇳"],
          ["7", "$14,000", "Jia Wang 🇨🇳"],
          ["8", "$11,100", "Yawen Ren 🇨🇳"],
          ["9", "$8,000", "Xiaoyan Xu 🇨🇳"]
        ],
        totalPrize: "$600,000",
        entries: "446",
        itm: "75"
      },
      {
        type: "heading",
        content: "#3 AAPOKER DEEP STACK (CS) - 8 HANDED - UNLIMITED RE-BUY ($1,000)"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/6-AyEJOqf2.png",
        alt: "Deep Stack Winner"
      },
      {
        type: "paragraph",
        content: "The $1,000 buy-in AAPoker Deep stack event pulled in a healthy 202 entries to boost the prize pool to just over the guarantee for $202,000, shared among the top 26 places. Leading up to that moment, the bubble burst on Kanghao Yang with A♦ K♦ outdrawn by Lei Yu's Q♦ J♣."
      },
      {
        type: "paragraph",
        content: "With the money certain, it was a race to the final table. Notables Patrik Demus (20th) and Dong Chen (15th) were among the fallen while Yu missed the final 9 by one spot. With nearly every player decorated in achievements, it was anyone's game. TLPT's Ivan Zhang fell in 8th place, TLPT Ambassador Quan Zhou was out next in 7th falling to Nevan Chang with A♦ A♠ dominating A♥ K♥."
      },
      {
        type: "paragraph",
        content: "At six remaining, poker couple Chang and Hua Wei Lin dominated the action. Lin built a wide lead after eliminating Zhengfang Huang in 6th place with pocket Jacks over pocket Fives however it didn't last as Chang overtook by railing Yongwei Mo in 4th place."
      },
      {
        type: "paragraph",
        content: "Down to three-handed Yanghao Fu went on a heater to see him surge to the top then took down Lin who was behind with Q♥ 6♥ at the flop K♥ Q♦ 3♣ against Fu's K♣ 3♠ and didn't improve on the turn J♥ and river A♠. It was a tight race for the trophy. Chang scored a decisive double up with A♦ 7♠ over A♠ 6♥ leaving Fu with crumbs. It quickly wrapped up with Chang sealing the victory sending Fu to settle for a runner-up finish."
      },
      {
        type: "table",
        title: "Deep Stack Results",
        headers: ["#", "Payout", "Player"],
        rows: [
          ["1", "$46,500", "Nevan Chang 🇹🇼"],
          ["2", "$30,900", "Yanghao Fu 🇨🇳"],
          ["3", "$22,500", "Hua Wei Lin 🇹🇼"],
          ["4", "$16,500", "Yongwei Mo 🇨🇳"],
          ["5", "$12,300", "Liang Chen 🇦🇺"],
          ["6", "$9,300", "Zhenfang Huang 🇨🇳"],
          ["7", "$7,200", "Quan Zhou 🇨🇳"],
          ["8", "$5,600", "Ivan Zhang 🇨🇳"],
          ["9", "$4,400", "Zhiying Zhou 🇨🇳"]
        ],
        totalPrize: "$202,000",
        entries: "202",
        itm: "26"
      },
      {
        type: "heading",
        content: "#7 SINGLE DAY HR (SHR) - 8 HANDED ($7,500)"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/8-Bnniu1d6.png",
        alt: "Single Day HR Champion"
      },
      {
        type: "table",
        title: "Single Day HR Results",
        headers: ["#", "Payout", "Player"],
        rows: [
          ["1", "$31,500", "Yuzhu Wang 🇨🇳"],
          ["2", "$21,000", "Martin Michael Sedlak 🇩🇪"]
        ],
        totalPrize: "$52,500",
        entries: "7",
        itm: "2"
      }
    ]
  },
  "impromptu-trip-pays-off-wezheng-zhong": {
    heroImage: "/image/news/details-news/new2/1en-ClDQ3vSP.jpg",
    sections: [
      {
        type: "paragraph",
        content: "Sometimes, the cards just fall your way in both poker and in life."
      },
      {
        type: "paragraph",
        content: "Weizheng Zhong can typically be found grinding poker tournaments in America, but a spur-of-the-moment invitation changed everything. While travelling through China, a friend reached out and suggested he swing by Jeju. Zhong took the offer, hopped into the TLPT Circuit Main Event, and three days later, that impromptu decision paid off in spades as he was crowned the inaugural champion."
      },
      {
        type: "paragraph",
        content: "For the victory, Zhou takes home the Circuit Main Event trophy and the US$120,000 first-place prize, which was the biggest slice of the $700,000 prize pool."
      },
      {
        type: "paragraph",
        content: "\"It's pretty sweet,\" Zhou said shortly after winning the event. \"It's my first time playing in Asia. I'm feeling very lucky.\""
      },
      {
        type: "paragraph",
        content: "Zhong's impressive victory came after navigating a final table that included poker phenom Stephen Song and a seemingly unstoppable Xuecong Wu, who cruised through the final table after winning nearly every meaningful pot he played. At one point, Wu held an over 2:1 chip lead over Zhong during their heads-up battle, but Zhong stuck to his game plan and was able to edge out the win."
      },
      {
        type: "paragraph",
        content: "\"My strategy [against Wu] was to play as much post-flop as I could, so I almost never raised [preflop],\" Zhong explained. \"I felt I had a little bit of a post-flop edge, and I was able to pull it off in the end.\""
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/2en-C_6oGvgc.jpg",
        alt: "Final Table Results"
      },
      {
        type: "heading",
        content: "FINAL TABLE ACTION"
      },
      {
        type: "paragraph",
        content: "Once players were seated at the final table, an explosive start at the Landing Casino inside the extravagant Shinhwa World Hotel Jeju saw four players eliminated within the first two levels of play."
      },
      {
        type: "paragraph",
        content: "On the very first hand, Huan Wen took his chances with ace-jack sitting on just seven big blinds and was sent out in ninth after running into Zhong's pocket jacks. Shortly after, Jin Zeng followed Wen out the door after shoving with a dominated ace against Jiaming Zhao's ace-king."
      },
      {
        type: "paragraph",
        content: "In a shocking turn of events, Song, who entered the final table second in chips, had his aces cracked by Wu in a massive pot to get sent out in an unexpected seventh."
      },
      {
        type: "paragraph",
        content: "The run-good for Wu kept coming as he scored another knockout against Zhao just a few hands later to soar into the five-handed chip lead."
      },
      {
        type: "paragraph",
        content: "Play became notably more reserved at that point as the short-stacked players began making snug folds, seemingly trying to out-ladder each other for pay jumps. Meanwhile, Wu continued making hands and chipping up, accumulating nearly half the chips in play with five remaining."
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/3en-qmDTC21h.jpg",
        alt: "Final Table Action"
      },
      {
        type: "paragraph",
        content: "All eyes shifted to William Jia, who had slipped into short stack by a large margin. However, a pair of fortunate double-ups gave Jia new life and left the last lady standing — Yiyu Zhou — as the short stack. With no room left to manoeuvre, Zhou took a stand with jack-ten suited after being shoved into by Zhong, but Zhong held up with king-high to send Zhou out in fifth."
      },
      {
        type: "paragraph",
        content: "A relatively quiet Fangzhou Zhu managed to pick up kings and score a big double through Wu, only to have Jia double through Zhu twice in quick succession to leave him on the short stack. Wu then paid Zhu back by eliminating him with Big Slick in an all-in preflop confrontation."
      },
      {
        type: "paragraph",
        content: "Jia's string of double-ups finally came to an end after he shoved with jack-seven into Wu's ace-seven and failed to get lucky, setting up a finale between Wu and Zhong."
      },
      {
        type: "heading",
        content: "HEADS-UP ACTION"
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/4en-Bo8DQrzP.jpg",
        alt: "Heads-up Battle"
      },
      {
        type: "paragraph",
        content: "The heads-up match quickly became a back-and-forth battle, with the chip lead exchanging hands on several occasions. Neither player was interested in raising preflop, which led to an abundance of post-flop action that initially favored Wu. However, Zhong clawed into the lead in a pivotal hand wherein Zhong flopped two pair against the open-ended straight draw of Wu. Zhong called a couple of semi-bluffs from Wu, and then Wu paid off a hefty bet from Zhong after making top pair on the river."
      },
      {
        type: "paragraph",
        content: "A few hands later, Zhong found himself on the brink of victory after getting Wu all in holding king-queen against Wu's pocket fours. Zhong flopped a king to leave Wu drawing to two outs, but Wu ended up turning a set to get back into the match."
      },
      {
        type: "paragraph",
        content: "Zhong persevered right back, however, after a brutal cooler left both players with two-card straights. Zhong held the higher straight and doubled through Wu."
      },
      {
        type: "paragraph",
        content: "Just a few hands later, Wu moved all in with a king-high hand, and Zhong snap-called with an ace and the chip lead. The board ran out clean, and with that, Zhong emerged victorious as the inaugural TLPT Circuit Main Event champion following a roller-coaster heads-up duel."
      }
    ]
  },
  "poker-player-turned-50-into-100000": {
    heroImage: "/image/news/details-news/new3/1en-BsYNECZQ.jpg",
    sections: [
      {
        type: "paragraph",
        content: "To run up a bankroll from a small investment is the dream of every poker player, and few can claim to have turned $0 into six figures in two days — but that's exactly what Xiaqing Ji did after overcoming a 446-player field in the TLPT Opening Event. Ji booked his place in the tournament by qualifying online, and for the victory, he claimed US$100,000, which represented the lion's share of the US$600,000 freeroll."
      },
      {
        type: "paragraph",
        content: "The inaugural event played out at breakneck speed inside the luxurious Landing Casino at Shinhwa World Hotel Jeju, and the turbo structure seemed to suit Ji perfectly. He was aggressive when it mattered most, unafraid to put chips in the middle — and even triple-barreling with just five-high."
      },
      {
        type: "paragraph",
        content: "Ji came into the final table as chip leader, and although he faced a few setbacks along the way, he consistently found ways to regain control. Ji's persistence paid off as he claimed the trophy and etched his name in the history books as the first-ever TLPT champion."
      },
      {
        type: "image",
        src: "/image/news/details-news/new3/2en-CQH2EGVS.jpg",
        alt: "TLPT Opening Event Final Table Results"
      },
      {
        type: "heading",
        content: "WINNER'S REACTION"
      },
      {
        type: "paragraph",
        content: "Following the win, Ji explained how important the win was to him following a slump in results."
      },
      {
        type: "paragraph",
        content: "\"I feel more confident about No-Limit tournaments after this win,\" Jin said through the use of a translator. \"I played the Red Dragon series for about ten days, but the results weren't ideal. However, winning this title has greatly boosted my confidence.\""
      },
      {
        type: "paragraph",
        content: "With renewed determination and hunger, Ji said he will continue to play tournaments when has time."
      },
      {
        type: "paragraph",
        content: "\"I hope to achieve even better results in upcoming tournaments. I still really enjoy tournament poker and will participate when I can.\""
      },
      {
        type: "image",
        src: "/image/news/details-news/new3/2-nDx6lLYK.jpg",
        alt: "Winner Xiaqing Ji"
      },
      {
        type: "heading",
        content: "FINAL TABLE ACTION"
      },
      {
        type: "paragraph",
        content: "With an average stack of under 20 big blinds, it came as no surprise that players found themselves all in right out of the gate. Within the first 10 minutes of play, Xiaoyan Xu and Yawen Ren both committed their stacks preflop and ended up second-best after being called to fall in ninth and eight place respectively after shoving preflop, getting called, and ending up second-best."
      },
      {
        type: "paragraph",
        content: "Ji climbed nearly back to even with Jiawei Yuan after eliminating Yang Chen in fourth place with pocket aces, which set up arguably the tournament-defining hand. Ji raised on the button with pocket sevens and Yuan shoved from the big blind holding ace-ten suited. Ji didn't back down and called all in for his tournament life only to be rewarded with a massive double up on a clean runout."
      },
      {
        type: "paragraph",
        content: "Yuan was left short following the clash and the rest of his chips were soon scooped up by Jinsui Fan after Yuan shoved with ace-five into Fan's ace-ten."
      },
      {
        type: "paragraph",
        content: "Ji entered the heads-up battle between him and Fan with a solid lead and wasted no time putting his chips to work. In one of the first hands of their duel, Ji made an epic triple-barrel bluff holding five-high to take an over 3-to-1 chip lead."
      },
      {
        type: "paragraph",
        content: "A few hands later, Ji shoved with a king on the button and Fan took his chances and called all in with eight-seven suited. The board ran out clean and just like that — Ji was crowned as the first-ever TLPT champion."
      },
      {
        type: "paragraph",
        content: "Be sure to check out our live-reporting hub for continuing coverage of select upcoming events from the 2025 TLPT series."
      },
      {
        type: "image",
        src: "/image/news/details-news/new3/5-BEjt5bsM.jpg",
        alt: "Champion Celebration"
      }
    ]
  },
  "long-lines-mark-opening-day-lord-poker-tlpt-jeju": {
    heroImage: "/image/news/details-news/new4/1-DeScd78j.jpg",
    sections: [
      {
        type: "paragraph",
        content: "The inaugural The Lord Poker Tournament – TLPT Jeju 2025 opened with the traditional Dragon Dance performance and a powerful welcome speech delivered by the President of the World Lottery Research Association. Addressing players, industry professionals, media, and the TLPT Tournament Committee, the WLA President, Xuehong Wang said,"
      },
      {
        type: "paragraph",
        content: "It is a great honor for me to represent the World Lottery Research Association as we gather here to witness a milestone moment in the TLPT Jeju Island event. This is not only a grand celebration of international competitive poker but also a landmark occasion signifying a new height for Asia's mind sports industry."
      },
      {
        type: "paragraph",
        content: "First, an USD 8 million guaranteed prize pool—the largest ever in Asian history! This record-breaking guarantee is not only a major milestone for Asia, but also a testament to the immense potential and vitality of the Asian market on the global stage."
      },
      {
        type: "image",
        src: "/image/news/details-news/new4/2-ByOlVS9r.jpg",
        alt: "TLPT Jeju 2025 Underway"
      },
      {
        type: "heading",
        content: "TLPT JEJU 2025 UNDERWAY"
      },
      {
        type: "paragraph",
        content: "Long lines greeted the launch of The Lord Poker Tournament – TLPT Jeju as players packed into the Landing Casino within the luxurious Jeju Shinhwa World Resorts. And it was certainly no surprise with the announcement of a $600,000 guaranteed Freeroll, it was a chance for players to pad up their bankroll at no cost. Wang continued,"
      },
      {
        type: "paragraph",
        content: "Second, the USD $600,000 guaranteed opening event is completely free to enter. This marks the world's first high-stakes poker event with zero entry barrier! We believe that poker is not just a game, but a platform for the cornerstones of a thriving industry. This bold move invites more players and industry peers to experience the excitement of competitive poker and gives every enthusiast the chance to rise to stardom. ANYONE COULD BE A STAR!"
      },
      {
        type: "paragraph",
        content: "Opening day also signaled the start of the TLPT Main Event 8-Handed backed by the US$ 700,000 guarantee. Two flights are planned for the day with buy-in of $500 and $1,000, giving players an early opportunity at qualifying for a share of the pot. Tomorrow, two more nights are scheduled with buy-in of $750 and $2,000. With such a wide range of buy-ins, TLPT is making it clear that players of all types are welcome to take part in this exciting debut."
      },
      {
        type: "paragraph",
        content: "Players already at the scene are Patrik Demus, Christian Harder, Nevan Chang, Lei Yu, Julian Warhurst, Gary Thompson, Chenxu Zhang aka Vanessa Zhang, and Jieming Xu to name a few."
      },
      {
        type: "image",
        src: "/image/news/details-news/new4/3-BPrho1Ky.jpg",
        alt: "TLPT Jeju Super High Roller Events"
      },
      {
        type: "heading",
        content: "TLPT JEJU SUPER HIGH ROLLER EVENTS"
      },
      {
        type: "paragraph",
        content: "n several days, the games climb several notches up with the TLPT Main Event Super High Roller costing $15,000 for a shot at the massive $3,000,000 guarantee. This ambitious prize pool is certain to attract the biggest names in the industry, including brand ambassadors Quan Zhou, Dan Cates aka Jungleman, and Dong Chen."
      },
      {
        type: "paragraph",
        content: "Including the Main Event SHR are other Super High Roller events US$ 20,000 and US$ 25,000 SHR 8-Handed buy-in events both guarantee US$ 1,000,000 each and the costliest of them all is the US$ 50,000 buy-in Short Deck SHR 8-Handed guaranteeing US$ 1,500,000. Check out the list below."
      }
    ]
  },
  "king-quan-zhou-tough-guy-dong-chen-perfectly-close-2024": {
    heroImage: "/image/news/details-news/new5/1-Bvlz4SZq.png",
    sections: [
      {
        type: "paragraph",
        content: "As 2024 quietly draws to a close, 2025 ushers in a fresh start. At this time of year, the circle of poker's annual rankings are being released with great fanfare. Over the past year, Chinese players have made their presence felt across poker tournaments worldwide, achieving numerous impressive results. As a result, they have performed exceptionally well in the annual rankings. In the recently released 2024 GPI (Global Poker Index) Annual Rankings, five Chinese players have made it into the top 100 in the world! Notably, two members of the AA poker teams, Quan Zhou and Dong Chen, have both secured spots in the GPI Top 100, ranking 26th and 66th, respectively, showcasing their incredible talent and competitive strength."
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/2-CB_1Gyxe.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "heading",
        content: "Global Poker Index (GPI)"
      },
      {
        type: "paragraph",
        content: "The GPI is a ranking system used to track and measure the performance of poker players in major global tournaments. It evaluates players' results across various prestigious poker events to provide a global ranking that reflects their overall skill and performance in the competitive poker scene."
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/6-DTtOSAuy.png",
        alt: "GPI Rankings"
      },
      {
        type: "paragraph",
        content: "Achieving a spot in the GPI Top 100 is a prestigious honor, reflecting a player's consistent and high-level performance over the past six months."
      },
      {
        type: "paragraph",
        content: "Quan Zhou's 2024: A Year of Glorious Achievements Let's first take a look at the 2024 journey of 'King' Zhou Quan, which is a 'breakout year' for him, marked by five championships, two runner-up finishes, two third-place finishes, and seven final table (FT) appearances. Among his five titles, three stand out as major victories in high-stakes tournaments: the Jeju Triton High Roller in March, the Cyprus Super High Roller in August, and the Brisbane TLPT High Roller in October."
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/7-CsqpnwAQ.png",
        alt: "Quan Zhou Championships"
      },
      {
        type: "paragraph",
        content: "Zhou has been on an unstoppable rise throughout the entire year, and by November 2024, his career earnings surpassed the $10 million dollar. Currently, Zhou is undoubtedly at the peak of his career, and if he maintains this sizzling form, 2025 will surely bring even more championships! Dong Chen's 2024: Consistent and Rising Dong Chen, known as the 'Tough Guy' of Chinese poker players, combines good looks with exceptional poker skills. Despite his always considered himself a 'semi-professional' player, Chen stunned the poker world by winning the $10K High Roller at the WSOP Paradise Island event in December 2023, claiming a coveted WSOP bracelet—a dream come true for many pro players."
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/8-C3xl1EcP.png",
        alt: "Dong Chen WPT Victory"
      },
      {
        type: "paragraph",
        content: "In 2024, Dong Chen continued his steady progress, earning one championship, two fourth-place finishes, and three final table (FT) appearances. The highlight of his year came in November 2024, when he clinched the WPT Super High Roller event."
      },
      {
        type: "paragraph",
        content: "With a career earnings total of $3 million, Chen is in the ascendant phase of his journey compared to Quan Zhou, who is already at the peak of his career. Chen steadily increasing his participation in high roller events, and joining the AA POKER team is a significant opportunity for him. With the full support of the team, Chen's potential is immense, and he is poised for an explosive rise in 2025!"
      },
      {
        type: "paragraph",
        content: "The AA POKER Teams: A Stellar Roster"
      },
      {
        type: "paragraph",
        content: "Dan Cates: One of the most elusive and prestigious players in the world, the owner of two gold bracelets(most difficult-to-obtain world gold bracelets). Joe Hachem: WSOP Main Event champion and holder of the prestigious WSOP bracelet. Quan Zhou: Multiple world champion titles holder and the highest-performing Chinese player in poker. Dong Chen: WSOP bracelet winner. YARA: The most influential Chinese poker player globally, known for her charm and sweetness. Yisha Chen: A top Chinese female player and one of the top five ranked Chinese players on the GPI. Yi Ye: The fastest-rising Chinese player in 2024, with improved poker skills, and standout looks. Looking Ahead to 2025: A New Chapter Begins! The brilliance of 2024 is now a thing of the past, and 2025 is ready for a fresh start! We eagerly look forward to the AA POKER team, a powerhouse full of vitality and potential, creating even more exciting moments and winning more championships in 2025. We also wish all domestic players continued success and progress, making the 2025 rankings even more dazzling!"
      }
    ]
  },
  "wsop-paradise-island-dong-chen-finishes-10th": {
    heroImage: "/image/news/details-news/new6/1-D7HqxTgu.png",
    sections: [
      {
        type: "paragraph",
        content: "After 7 days of intense battles, the WSOP Paradise Island $2,500 Mini Main Event has finally crowned its champion. The event attracted a total of 2,031 entries, with a prize pool of an impressive $5.077 million, surpassing the $5 million guarantee. The payout was structured so that 304 of whom would receive at least a minimum prize of $5,350. By Day 3, only 17 players remained, all vying for the coveted top prize of $575,050. In the end, Jeffrey Hakim triumphed in a heads-up battle against the talented Alina Pailahoshka, securing his first WSOP gold bracelet. Hakim has earned over $2 million in live tournament earnings, and this victory marks a new peak in his career. However, for him, the prize money was not the most important thing. 'The gold bracelet is what matters most. Winning my first gold bracelet is the most important and happiest thing.'"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/2-C21j3kHU.png",
        alt: "Dong Chen at WSOP Paradise Island"
      },
      {
        type: "paragraph",
        content: "Ryan Gebow raised from under the gun to 800,000, and when it folded to Dong Chen in the hijack, he three-bet to 1,800,000. It folded back to Gebow who four-bet all in for Chen's stack of 6,200,000. After using one time extension, Chen made the call"
      },
      {
        type: "paragraph",
        content: "Dong Chen: A♠ Q♦ ♠"
      },
      {
        type: "paragraph",
        content: "Ryan Gebow: J♥ J♣"
      },
      {
        type: "paragraph",
        content: "It was a race for Chen's tournament life, but after the board ran out 5♥ 5♠ J♠ 4♠ 7♠ Gebow flopped a full house, making Chen the first elimination at the final table."
      },
      {
        type: "paragraph",
        content: "Last year, Dong Chen won a gold bracelet in the WSOP Paradise Island Event #15 High Roller, and this time he achieved an impressive 10th place finish in the event, earning $51,080. Tournament Results:"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/3-D3WHiV9X.png",
        alt: "Tournament Results"
      },
      {
        type: "paragraph",
        content: "Zhen Chen, Jianwei Lin, and other Chinese players made it to the payout positions with the following results:"
      },
      {
        type: "paragraph",
        content: "Event #5: The $25,000 Dealer's Choice Tournament attracted 49 entries, with a total prize pool of $1,225,000. Among the participants were many players considered to be the best mixed-game players in the world."
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/4-DHZ69_eY.png",
        alt: "Eric Wasserson Winner"
      },
      {
        type: "paragraph",
        content: "Only 4 players returned to the Bahamas Atlantis Paradise Island to compete in the Day 3 overtime session of Event #5. After 4 hours of intense play, Eric Wasserson emerged victorious, winning his first career gold bracelet and a reward of $353,340. Wasserson's career has been filled with many notable achievements. He had previously finished as a runner-up twice and third three times in bracelet events. Now, he can finally breathe a sigh of relief. 'I've always wanted to win a gold bracelet,' Wasserson admitted. 'It feels amazing to finally take it down. I can't even explain how it feels.' Event #5 Results:"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/5-kTDc1bva.png",
        alt: "Event 5 Results"
      },
      {
        type: "paragraph",
        content: "Ongoing Tournament: Event #6: $5,000 Deep Stack Tournament attracted 363 entries, with a total prize pool of $1,815,000."
      },
      {
        type: "paragraph",
        content: "On Day 1, 253 players participated, with 94 players advancing to the next round. Lei Yu from Red Dragon Team and Yinan Zhou, also from China, both advanced smoothly to the next stage, thanks to their impressive chip stacks."
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/6-B8FJSEyO.png",
        alt: "Lei Yu Chip Leader"
      },
      {
        type: "paragraph",
        content: "On the following day, 110 players joined the battle, bringing the total number of competitors to 204, who started the new day of play. After Day 2, only the final 9 players remained, all of whom will compete in the next round, fiercely chasing the coveted gold bracelet. Among them, Lei Yu is currently in 9th place with a chip stack of 540,000."
      },
      {
        type: "paragraph",
        content: "Event #7: $100,000 Triton Main Event Day 2: This tournament attracted 182 entries, featuring not only high-stakes regulars but also celebrity players and numerous world champions. The total prize pool reached an astonishing $18.2 million. As Day 2 began, David Yan (1,166,000), Dimitar Danchev (1,107,000), and Biao Ding (990,000) topped the leaderboard. These three experienced players are no strangers to high-stakes events at both WSOP and Triton, with impressive results in the highest-level tournaments."
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/7-DSkdebE3.png",
        alt: "Triton Main Event"
      },
      {
        type: "paragraph",
        content: "However, as the competition intensified, many big-name players were eliminated. As of the latest update, only the final 15 players remain, all battling hard for the title. Finnish player Ossi Ketola currently leads with a chip stack of 6.6 million, followed closely by well-known players Fedor Holz and Alex Foxen. Other notable competitors still in the race include Mikita Badziakouski, Joao Vieira, and Stephen Chidwick."
      }
    ]
  },
  "aapoker-team-luxury-lineup-brand-new": {
    heroImage: "/image/news/details-news/new7/1-CgB682he.png",
    sections: [
      {
        type: "paragraph",
        content: "Time flies, and the year 2024 is about to pass. Looking back on the past year, AApoker team has achieved fruitful results. AApoker's luxury tournament brand 'TLPT King's Road' and Triton Legendary Poker have reached an official cooperation, the two luxury giants have joined forces, and 2025 is full of infinite imagination. From September 27th to October 6th, TLPT joined hands with APT Australian Championship to successfully hold the 2024 Brisbane Hawker Series, which was highly praised by the circle. In addition, the AApoker team lineup continues to grow with an influx of strong reinforcements. The AApoker team has also been performing well in international tournaments, and in the recently concluded KPC Super Hustler, two AA players met in the final and took the first and second place."
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/2-D3NOefQF.png",
        alt: "KPC Super Hustler Champions"
      },
      {
        type: "paragraph",
        content: "The current AApoker team includes both WSOP Main Event champion Joe Hachem, the former GPI Global No. 1 Quan Zhou, and WSOP gold bracelet winner Dong Chen... The lineup is so impressive, let's take a look at it now!"
      },
      {
        type: "heading",
        content: "Dan \"Jungleman\" Cates"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/3-BP7Mrwmz.png",
        alt: "Dan Jungleman Cates"
      },
      {
        type: "paragraph",
        content: "Dan \"Jungleman\" Cates, who is also the global brand ambassador of AApoker, is an old friend of Chinese players, with a delicate and interesting mind hidden under his rough exterior. \"Dan is a strong, well-rounded player with a dominant presence in live and online tournaments and at regular tables. He has two WSOP gold bracelets, the $50,000 Poker Players Championship, which he won back-to-back in 2021 and 2022, a miracle in WSOP history. And his live tournament winnings totaled a whopping $14.4 million. In the online, \"Jungleman\" is also legendary, with a profit of $11 million. What's even more terrifying is that \"Jungleman\" is still at the peak of his career and is bound to create more miracles."
      },
      {
        type: "heading",
        content: "Quan Zhou"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/4-Cw0TtNJL.png",
        alt: "Quan Zhou"
      },
      {
        type: "paragraph",
        content: "Quan Zhou, who also serves as AApoker's global brand ambassador, has been a leading figure in Chinese competitive poker for a long time, but he still has a long track record. Zhou won first place in GPI China back in 2017, and then in 2020, he won first place in GPI Global, as well as Poker Player of the Year that year, but those were just one of Zhou's many highlights. The year 2024 is still Zhou's \"highlight year\", and he has already won 5 championships, 2 runner-ups and 2 third-place finishes in the world's top tournaments, and his total career winnings have surpassed the 1,000-watt mark. Quan Zhou is not only skilled in poker, but also caring, as early as 2016 he initiated the establishment of the Deyi All-Stars charity organization to donate school supplies and living supplies to children in impoverished mountainous areas, which has persisted for nine years now. Whether it's in competitive play or character and morality, Zhou has set a noble example for the younger generation of poker players."
      },
      {
        type: "heading",
        content: "Wesley Fei"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/5-DCHR5Ge6.png",
        alt: "Wesley Fei"
      },
      {
        type: "paragraph",
        content: "Wesley Fei, a wealth man, entered the coinage industry at the age of 15 and amassed a huge fortune early on, becoming renowned in the coinage industry. Then a chance encounter with Texas Hold'em poker, then quickly began the road to the poker circle of the skyrocketing popularity. Because of his strong strength, he was nicknamed \"Unlimited Backhand\" by netizens. Unlike traditional domestic poker players, Wesly has an outgoing and high-profile personality, and soon became the star of the famous live poker program HCL, and is one of the few national poker players who can consistently compete at the high stakes tables against foreign players. During the June 2023 HCL Million live broadcast, Wesley made a huge splash on the poker scene when he first played Tom Dwan for the largest pot in live poker history at $3.1 million, and then for the second largest pot in live poker history at $2.2 million. Wesley's strong performance at the high stakes table demonstrated that national poker players also have a place at the high stakes table. As he matures in the poker world, Wesley is bound to play even better."
      },
      {
        type: "heading",
        content: "Yisha Chen"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/6-BAwvbM6F.png",
        alt: "Yisha Chen"
      },
      {
        type: "paragraph",
        content: "The beautiful poker player Yisha Chen can be said to be the most eye-catching domestic female poker player in 2024. Originally a dance teacher, her tough and unyielding character has allowed her to survive in this male-dominated game and fight for her own piece of sky. The year 2024 was a year of great success for Chen. According to The Hendon Mob's database, her total career winnings amounted to $85W, but her winnings in 2024 accounted for $74W, with winnings coming from top international tournaments such as the APT, Triton, TLPT, and EPT. It can be seen that Chen already has a strong competitive edge. With both beauty and wisdom, face value and strength, she is very promising to grow into the leading female poker player in China."
      },
      {
        type: "heading",
        content: "Dong Chen"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/7-ChFdJNy3.png",
        alt: "Dong Chen"
      },
      {
        type: "paragraph",
        content: "Dong Chen, a well-known \"tough guy\" in China's poker circle, got this name from an unforgettable experience in 2019. At that time, Dong Chen participated in the WSOP main event suffered an earthquake, just as he was the big blind, someone Open, many poker players are running out, and he sat motionless, friends asked him how not to run, he domineeringly threw out a sentence: life can not want to, the big blind can not be lost. But the name is true, Chen is indeed very \"hard\", whether it is poker skills, or face value, are very resistant to fight. He came into contact with Texas Hold'em in 2016, and usually learns to play online. Although he claims not to be a professional player, his number of games, competitive strength, and prizes and honors have far exceeded those of a good professional player. At the 2023 WSOP Bahamas, he won the 10,000-dollar Mansion tournament, reaping the first WSOP gold bracelet of his competitive career and a whopping $411,659 in prize money, a dream that many pros have struggled to reach. According to The Hendon Mob database, his live tournament winnings have reached 2.63 million knives. Joining the AApoker team will be a great addition for him, and he is bound to achieve even more amazing results in the future."
      },
      {
        type: "heading",
        content: "Yara"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/8-CldaU6O8.png",
        alt: "Yara"
      },
      {
        type: "paragraph",
        content: "Yara, a 23-year-old beauty, is a rising star in the poker world. While most of her peers are just leaving school, Yara has already had multiple identities and rich experiences as a trainee, girl group member, model and beauty pageant champion. With her sweet appearance and perfect body, Yara won the Miss Oriental Chinese beauty contest in 2021. Yara's interest in poker has been evident since she was a child, and she has worked hard to learn and develop her skills, gradually making a name for herself in major tournaments. Her soft appearance and fierce poker style made her popular on the live poker show HCL, where she was nicknamed \"Yara the Destroyer,\" and her outspoken personality has won her a large number of fans around the world. Despite her young age, Yara is a multi-talented player and we look forward to seeing her continue to shine on the poker scene!"
      },
      {
        type: "heading",
        content: "Joe Hachem"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/9-B-8iCOgF.png",
        alt: "Joe Hachem"
      },
      {
        type: "paragraph",
        content: "Joe Hachem, 58 years old, is a Lebanese-Australian professional poker player whose poker resume is both illustrious and long, with a total of $12.98 million in career winnings. Back in 2005, Hachem shocked the world of poker by winning the WSOP Main Event on his first trip to Las Vegas, taking home $7.5 million in prize money, which at the time was the highest tournament prize money ever, and was the first Australian poker player to win the WSOP Main Event. In 2006, he won his first WPT title, taking home $2.2 million, making him one of only six poker players to win both the WSOP Main Event and the WPT. Hachem is known as Australia's \"Godfather of Poker\" and was inducted into the Australian Poker Hall of Fame in 2009 for his role in solidifying the poker boom in Australia. Hachem is still active in top tournaments around the world, with his most recent win coming at the Australian Poker Championship on October 5th of this year. Hachem's poker resume will be even more impressive when he joins the AApoker team."
      },
      {
        type: "heading",
        content: "Yi Ye"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/10-B0PAz14B.png",
        alt: "Yi Ye"
      },
      {
        type: "paragraph",
        content: "Yi Ye is a newcomer to the poker scene in 2024. With a wide range of interests and a passion for competitive poker tournaments, Ye has made her professional debut in 2024 with a series of dazzling results. By joining the AApoker team and playing alongside her predecessors in the poker world, Ye's competitive strength is sure to soar, and her future will be immeasurable! The AApoker team is strong and star-studded. With experienced veterans, stalwarts in their prime, and energetic up-and-comers full of potential, let's look forward to their exciting performance in the global arena!"
      }
    ]
  },
  "wsop-paradise-island-quan-zhou-dong-chen": {
    heroImage: "/image/news/details-news/new8/1-BZMRHpdt.png",
    sections: [
      {
        type: "paragraph",
        content: "The next two weeks will be a thrilling celebration of the WSOP Paradise Island Series. Poker players from around the world have gathered at the Bahamas' Atlantis Paradise Island to continue adding to their illustrious poker careers. Event #1: $2,500 Mini Main Event Day 1b The $2,500 Mini Main Event Day 1b attracted a total of 937 entries, with only 73 players making it through to the next round. American player Jerry Wong leads the field with a chip stack of 97.4k."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/2-B1dZcqzn.png",
        alt: "Jerry Wong Chip Leader"
      },
      {
        type: "paragraph",
        content: "Wong earned his first gold bracelet at the 2023 WSOP, winning Event #33: $10,000 Razz Championship. His biggest live cash came in the 2016 WSOP Main Event, where he finished 8th for $1,100,076."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/3-BrYCOZDV.png",
        alt: "Day 1b Chip Counts"
      },
      {
        type: "paragraph",
        content: "Other notable players advancing include Timothy Adams, Anthony Zinno, David Peters, Georgios Sotiropoulos, Justin Saliba, and more."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/4-CQ5Wl3QU.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "paragraph",
        content: "Quan Zhou and Dong Chen also advanced to the next stage, showcasing excellent play."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/5-k3-eIpmL.png",
        alt: "Quan Zhou and Dong Chen Chip Counts"
      },
      {
        type: "heading",
        content: "Event #2: $100,000 Triton Million Invitational"
      },
      {
        type: "paragraph",
        content: "The prestigious $100,000 Triton Million Invitational has officially concluded its entry phase, with 96 entries, including 22 re-entries, creating a prize pool of $48 million."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/6-CvWtzvB9.png",
        alt: "Triton Million Trophy"
      },
      {
        type: "paragraph",
        content: "The first-place winner will take home an impressive $12,070,000, along with a WSOP gold bracelet and the Triton trophy. The top 17 players are guaranteed at least $755,000 in prize money."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/7-1DZEGjLX.png",
        alt: "Michael Moncek"
      },
      {
        type: "paragraph",
        content: "At the conclusion of Day 2, only 14 players remain in contention. Michael Moncek, who led the Day 1 chip counts, continued his strong performance on Day 2, retaining the lead with 125k in chips. Moncek has become a fan favorite for his aggressive playstyle and nearly 100% VPIP (voluntarily put money in pot). However, after suffering a loss of nearly $2 million in the high-stakes cash games, Moncek had a tough summer. Now, he hopes to recover his losses and add to his winnings. Following Moncek are Daniel Dvoress with 123.5k and Alejandro Lococo with 107.75k."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/8-3wiflhiK.png",
        alt: "Day 2 Chip Counts"
      },
      {
        type: "paragraph",
        content: "Notable players who fell short of the money include Phil Ivey, Jason Koon, Patrik Antonius, Isaac Haxton, Nick Schulman, and Justin Bonomo."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/9-BL6an0gC.png",
        alt: "Phil Ivey and Justin Bonomo"
      },
      {
        type: "paragraph",
        content: "This marked Daniel Negreanu's first appearance in a Triton event, and despite being a newcomer, he made it to Day 2. However, in Level 12 (Blinds 15,000/30,000/30,000), his AK failed to overcome Kayhan Mokri's KK, and he was eliminated in 58th place. Although Ivey and Daniel Negreanu did not make it to the end, they still have multiple opportunities to win their second gold bracelet of the year, as there are several events left on the schedule."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/10-BLiP2UB-.png",
        alt: "ST Wang"
      },
      {
        type: "heading",
        content: "ST Wang Takes Over the Torch"
      },
      {
        type: "paragraph",
        content: "Despite the early exits of players like Biao Ding and Elton Tsang, ST Wang has taken up the mantle for the Chinese players and advanced with the hopes of many. At the end of Day 2, ST Wang qualified for the next round with a chip stack of 1,000,000. While he holds the smallest stack among the remaining players, poker is unpredictable, and anything can happen. We wish him the best of luck in making an incredible comeback."
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/11-BdEfteIY.png",
        alt: "ST Wang Chip Count"
      },
      {
        type: "paragraph",
        content: "The remaining 14 players will return for the final showdown at 12:00 PM local time on December 9 to compete for the title in this historic event."
      }
    ]
  },
  "congratulations-xu-xin-yin-china-chip-count-leader": {
    heroImage: "/image/news/details-news/new9/1-BxcuLED7.png",
    sections: [
      {
        type: "paragraph",
        content: "Congratulations to the #9 KPC Single Day Super High Roller Champion! XU XIN YIN from China!! Total Entries: 72 Total Prize Pool: 2,236,750,000 KRW"
      }
    ]
  },
  "aa-poker-jeju-won-two-prestigious-championships": {
    heroImage: "/image/news/details-news/new10/1-psNKaG0r.png",
    sections: [
      {
        type: "paragraph",
        content: "WPT Korea Championship is comes to the end, the spotlight shone brightly on Dong Chen from Ningbo, China, as he won the prestigious Super High Roller title. This event, which attracted 14 entries, featured some of the biggest names in poker world, including Japanese high roller regular Koichi Chiba and WSOP regular Joseph Cheong, both of them made into the non-official final table of 9 players. In an electrifying heads-up duel, Dong Chen battled against Mongolia's Bayar Saran. The two eventually struck an ICM deal, with Chen holding the chip lead and seizing the victory. This milestone triumph earned Chen his first WPT Korea championship trophy and the coveted WPT High Roller ring of the series. The Super High Roller event, marked by a high-stakes lineup and exceptional gameplay, has solidified its place as a highlight of this year's WPT Korea festival, building anticipation for a thrilling conclusion to the series."
      }
    ]
  },
  "pure-quality-gold-quan-zhou-tlpt-25k": {
    heroImage: "/image/news/details-news/new11/1-CTf9bq3s.png",
    sections: [
      {
        type: "paragraph",
        content: "China's Quan Zhou has come out on top of a 34-entry field in The Lord Poker Tour $25K International to take home add $332,250 to his lifetime earnings. Zhou will remain fourth on China's All Time Money List, although the six-figure score – amazingly, not even qualifying inside his top ten results – will take him within striking distance of reaching US$10M, according to his HendonMob."
      },
      {
        type: "image",
        src: "/image/news/details-news/new11/2-DXnXhca6.png",
        alt: "Quan Zhou with Trophy"
      },
      {
        type: "paragraph",
        content: "The 40yr old professional has a resume most would be envious of, including a seven-figure score for a 5th place finish in the Triton Poker SHR Monte Carlo just last year. Other notable results include two WPT titles (in the WPT World Championship $10K PLO and WPT Korea NL 2-7 SD), a 2023 EPT Cyprus Mystery Bounty title, a Triton Poker SHR Jeju $25K PLO win, and a 2017 PokerStars Championship Macau title. Just a couple of months ago, Zhou added a PGT Super High Roller Bowl title to his accolades. Other non-win accomplishments include 4th in the WSOP Paradise $100K SHR, a runner-up finish in WPT Alpha8 One Drop Korea, and a runner-up finish in the Triton Poker SHR Monte Carlo $20K PLO just a week after his Main Event final table in the same series."
      },
      {
        type: "image",
        src: "/image/news/details-news/new11/3-BdmG5toI.png",
        alt: "Quan Zhou Playing"
      },
      {
        type: "paragraph",
        content: "Fan favourite Yoon Kang took the chip lead through the bubble in the event, utilising some world class bluffs along with ICM pressure plays. When Zhou rivered a straight flush to take control in the latter stages, Kang fell behind and was unable to recover from the five-to-one chip deficit upon reaching heads up. Kang— who has made headlines throughout the week for both good and bad reasons – pulled through for the crowd, turning his $25K entry earned from bubbling last year into $183,000."
      },
      {
        type: "heading",
        content: "TLPT $25K International – Results"
      },
      {
        type: "image",
        src: "/image/news/details-news/new11/4-en-DfFx8z7H.png",
        alt: "Tournament Results Table"
      }
    ]
  },
  "andy-lee-takes-down-tlpt-main-event-apt-brisbane": {
    heroImage: "/image/news/details-news/new12/1-b3g8E56X.png",
    sections: [
      {
        type: "paragraph",
        content: "The Lord Poker Tour Main Event reached an epic conclusion yesterday as Andy Lee manoeuvred from short stack to Champion on a final table stacked with talent to record his tenth six-figure result, collecting $205,305 for the win. Lee, originally from Malaysia and a long time Sydney resident, is certainly no stranger to the Australian poker community. Relocating to Sydney in 2004 to study finance, it did not take long for Lee to discover poker, and has since become one of the countries most accomplished high stakes PLO cash game players."
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/2-DV3drWPs.png",
        alt: "Andy Lee Playing"
      },
      {
        type: "paragraph",
        content: "Lee managed his stack effectively throughout the day."
      },
      {
        type: "paragraph",
        content: "Lee is also a very accomplished tournament player, with his first major tournament breakthrough came in 2011 when he won the Star Poker Summer Series main event for $270,000. Since then, his resume includes a WSOPC Sydney $20K High Roller ring for $273,600, a WSOP Online bracelet in PLO, an Aussie Millions ring in an $1,100 Mix-Max, in addition to runner-up finishes in the Aussie Millions $25K PLO, APL Million $5K Challenge, and WSOP APAC $5K 6-Max. Nine players started the final table but only seven would make the money. Lee actually entered the final day of play as the short stack, at one point getting down to just three big blinds – those going into the centre with 8♣6♣ against the A♠8♦ of Andres Vasquez as Lee hit a flush to start his steady rise up the chip counts as others fell around him."
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/3-DdG4qkTu.png",
        alt: "WSOP Bracelet Ceremony"
      },
      {
        type: "paragraph",
        content: "Andy Lee wins 2017 WSOPC Sydney $20K High Roller. Yoon Kang would then become the first to go – shoving possibly after failing to notice an open from Alex Lynskey, the hand and clip in yesterday's PMA Blog – followed by Queensland's own Josh Hutchins as the stone bubble. USA's Andres Vasquez and Colombia's Andres Gonzalez both scored their second TLPT cashes of the week, before Alex Lynskey ran into a series of unfortunate events to lock up a fifth place finish. Angel Guillen ran headlong into Yisha Chen's sun run, getting it in with J♣10♣ against her A♦J♦, both players missing completely as Chen added Guillen to her list of impressive scalps in the event; that list including Lynskey just prior, as well as Didier Guerin and Dan \"Jungleman Cates\" on Day 2."
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/4-BEafJIyO.png",
        alt: "Final Table Action"
      },
      {
        type: "paragraph",
        content: "Chen's run came to an end in third place, before Lee and Western Australia's Travis Endersby agreed on an ICM deal before playing it out to decide a winner. Lee eventually rivering a straight to down Endersby."
      },
      {
        type: "heading",
        content: "TLPT Main Event – Results"
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/6-en-CNilv-nJ.png",
        alt: "Final Results Table"
      }
    ]
  },
  "pgt-super-high-roller-quan-zhou-victory": {
    heroImage: "/image/news/details-news/new13/1-v6iw6zI6.png",
    sections: [
      {
        type: "paragraph",
        content: "China's Quan Zhou (cover image) made a statement at the 2024 Super High Roller Series in North Cyprus. Fresh off a win in the Red Dragon High Roller in Jeju just two weeks before, Zhou, looking sharp in an unusually bright white suit, conquered a field of 39 top-tier players in Event #2: $25,750 No-Limit Hold'em (7-Max). He walked away with his first PGT title, the coveted PGT Gold Cup, and a grand $316,000 prize – the eighth-biggest win of his career. The final table was intense, full of quick hands and big moves. It all came down to a fast-paced heads-up match between Zhou and the UK's Lewis Spencer. Spencer put up a good fight but, in the end, fell short, taking home a sizeable $220,000 in second place. Zhou's impressive run in this 10-day event affirmed his 10,000 buy-in win at the Monte Carlo $125K Event and a jaw-dropping $1,165,000. The $25,750 buy-in event, held at the luxurious Merit Royal Diamond Hotel & Spa, generated a prize pool of $965,500, shared among the top six players. Some other big names who made it to the final table were Ren Lin (3rd for $158,000), Benjamin Heath (4th for $116,500), Felipe Ketzer (5th for $83,000), and Jeremy Ausmus (6th for $62,000). Zhou's win moved him up to 198th on the PGT leaderboard with a total of 222 PGT points. Event #1 winner Roman Hrabec is close behind at Lewis Spencer's second place finish at 426 PGT Points. Ben Lin, Lewis Spencer, and Ren Lin also made a big leap to 42nd place with 773 PGT points."
      },
      {
        type: "image",
        src: "/image/news/details-news/new13/2-CVImvW7J.png",
        alt: "Quan Zhou with PGT Gold Cup"
      },
      {
        type: "paragraph",
        content: "Final Table Chip Counts 1. Benjamin Heath – 2,220,000 2. Quan Zhou – 1,250,000 3. Lewis Spencer – 1,080,000 4. Ren Lin – 1,045,000 5. Jeremy Ausmus – 910,000 6. Felipe Ketzer – 890,000 7. Aram Zobian – 405,000 Final Table Recap Seven seasoned players returned on the final day, each with their eyes on the coveted PGT Gold Cup and the lion's share of the massive prize pool. The tension was palpable, with only six players destined to leave with a payday. The bubble burst early on and left the field. It was one of the longest bubbles in PGT history at these stakes. Finally, Aram Zobian's tournament life came to an end in seventh place when his queen-ten failed to hold up against Felipe Ketzer's jack-eight. With the bubble burst, the action didn't slow down. Ren Lin, fueled by aggression and a bit of luck, surged to the chip lead. Soon, Jeremy Ausmus, a seasoned pro with numerous titles to his name, moved all in with ace-queen. Unfortunately for him, Lin woke up with pocket tens. The board ran out clean for Lin, and Ausmus was eliminated in sixth place, leaving just five players remaining. The three-handed battle saw several dramatic hands. In a pivotal hand, Zhou flopped two pair, and Heath couldn't find any help on the turn or river. He was eliminated in fifth place. With four players remaining, the sole Brazilian on the table shoved from the big blind with three-deuce. Zhou, in the small blind, looked him up with king-eight. Unfortunately for Ketzer, his bottom pair fell short against Zhou's third pair, and he was eliminated in fifth place. With three players remaining, the action was fast and furious. Spencer scored a crucial double-up, his pocket kings holding up against Lin's pocket sixes when a queen spiked on the flop. But then, the overnight chip leader, Benjamin Heath, met his demise. He shoved with queen-jack, only to run into Zhou's ace-three. Zhou flopped two pair, and Heath couldn't find any help, and he was eliminated in fourth place. Heads-up play began with Lewis Spencer holding a slight chip lead with 3.92 Million chips to Quan Zhou's 3.87 Million. But in a dramatic turn of events, on just the second hand of heads-up, Spencer shoved with pocket sixes, and Zhou called with ace-deuce suited. The flop delivered an ace for Zhou. Spencer was in dire straits, needing to hit a six to stay alive. The turn and river brought no help, and just like that, it was over. Quan Zhou had done it again, adding another impressive victory to his rapidly growing resume. Complete Payouts (USD) 1. Quan Zhou – $316,000 2. Lewis Spencer – $220,000 3. Ren Lin – $158,000 4. Benjamin Heath – $116,500 5. Felipe Ketzer – $83,000 6. Jeremy Ausmus – $62,000"
      }
    ]
  },
  "quan-zhou-won-red-dragon-high-roller": {
    heroImage: "/image/news/details-news/new14/1-BAgbreX0.png",
    sections: [
      {
        type: "paragraph",
        content: "Exciting Recap: Congratulations to QUAN ZHOU (China) winning the Event #30 Red Dragon High Roller (₩149,850,000)!"
      },
      {
        type: "video",
        src: "/image/news/details-news/new14/AA25.mp4",
        alt: "Quan Zhou Red Dragon High Roller Victory Video"
      },
      {
        type: "table",
        title: "Event Details",
        headers: ["Date", "3-Aug-24"],
        rows: [
          ["Event Number", "30"],
          ["Event Name", "RED DRAGON HIGH ROLLER"],
          ["No. of Entries", "25"],
          ["No. of Re-entries", "6"],
          ["Total Prize pool", "368,600,000.00"]
        ]
      },
      {
        type: "paragraph",
        content: "Results:"
      },
      {
        type: "table",
        title: "Final Results",
        headers: ["Place", "Last name", "First name", "Country region"],
        rows: [
          ["1", "Zhou", "Quan", "China"],
          ["2", "Zhou", "Lin", "China"],
          ["3", "Luo", "Xi Xiang", "China"],
          ["4", "Nagami", "Kyosuke", "Japan"]
        ]
      },
      {
        type: "paragraph",
        content: "Don't miss out on our upcoming events! Follow us on social media for the latest updates on the Jeju Poker Festival in November!"
      }
    ]
  },
  "jin-bei-cup-xiao-yao-bulldozes-single-day-nlh": {
    heroImage: "/image/news/details-news/new15/1-CECW0A4i.png",
    sections: [
      {
        type: "paragraph",
        content: "The Jin Bei Cup – Single Day NLH drew 77 entries for a prize pool of US$ 385,000. The top 10 earned a cut. Among those that ran strong but missed the mark were Chinese pro Quan Zhou, Malaysia's Woon Yoke Wei, Singapore's Jacson Feng, and Indonesia's Jhon Hendri. Buy in: US$ 5,300 Entries: 77 Prize pool: US$ 385,000 ITM: 10 places"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/2-frdNfJVB.png",
        alt: "Jin Bei Cup Tournament Setup"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/3-Dzq03WrS.png",
        alt: "Player at Jin Bei Cup"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/4-BQVxwyk2.png",
        alt: "Tournament Action"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/5-CC7KpXL9.png",
        alt: "Xiao Yao Playing"
      },
      {
        type: "paragraph",
        content: "China's Xiao Yao fully dominated the first event of the inaugural Jin Bei Cup, eliminating a staggering seven players at the final table to clinch the Single Day NLH title and lock up the US$ 131,000 top prize. In a brief interview with the newly crowned champion, Xiao Yao shared, \"I am very happy and I was very lucky!\" Just before the final table was formed, Xiao Yao began his knockout spree at two spots before the money. He finished off Chinese online pro Xuming Qi with a dominated Ace then shattered the bubble to Wei in the same fashion. Entering the final table as chip leader, Xiao Yao's hot-hand continued with Tom Dwan (8th) and Ge Zhong (9th) meeting his mighty axe simultaneously."
      },
      {
        type: "paragraph",
        content: "The all ins were seen at a flop that completed. Xiao Yao 'scrushed Dwan' sand Zhong's top pair. Reminiscing the big takedown, Xiao Yao was all smiles, \"I felt I could beat Tom Dwan. I knew I could when I went all in.\""
      },
      {
        type: "heading",
        content: "Tom Dwan"
      },
      {
        type: "paragraph",
        content: "It was indeed a game-changer as Xiao Yao soared way above the rest and never looked back. Leading up to his victory, Xiao Yao eliminated Lu Jiang (7th), Travis (6th), Ken Lin (5th), and Xia Feng (3rd), to face Mic at heads up. It didn't take long for Xiao Yao to nail it shut with the final handover"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/6-DiTy5MVi.png",
        alt: "Heads Up Play"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/7-BChvlctz.png",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "This event was just practice for Xiao Yao who shrugged off the win saying, \"I will definitely play the Main Event tomorrow. This is just small, just practice. Tomorrow is what matters.\""
      },
      {
        type: "paragraph",
        content: "Congratulations Xiao Yao. He takes home $131,001 in our $5,000 No Limit Holdem event."
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/8-DktFMPqd.png",
        alt: "Xiao Yao Champion"
      }
    ]
  },
  "china-boxin-jin-claims-maiden-apt-title-freezeout": {
    heroImage: "/image/news/details-news/new16/1-CYdDSjTl.png",
    sections: [
      {
        type: "paragraph",
        content: "JEJU, SOUTH KOREA, April 26, 2024 – Welcome to the APT Jeju 2024, with the action-packed 10-day festival featuring 91 events (including satellites) with the series proper comprising a substantial 86 Trophy Events and boasting over KRW 5 billion (~USD 3.7M) in prize pool guarantees. Running April 26 to May 5 in partnership with Landing Entertainment Korea (LEK) the series is playing out at the luxurious Jeju Shinhwa Resort. While this will be the fourth time the APT has visited Jeju, this marks the first visit of the new era following a seven-year hiatus, with Japan's Katsuhiro Muto the last APT Jeju Main Event champion crowned back in March 2017. The new era prize pools are over twenty times larger, with the APT Main Event running from April 26 to May 4 and coming with a sizable KRW 2 billion (~USD 1.5 million) guarantee. In addition to the guaranteed marquee events, the series boasts daily High Roller tournaments and an assorted poker variants, as well as cash games. Getting underway at 6:30pm local time on April 26th, the KRW 2M Event #11: NL Hold'em – Freezeout saw 25 players enter the action, battling at the baize for eighteen 25-minute levels to win a slice of the KRW 43,650,000 (~USD 31,700) prize pool. Once again, it was a Chinese player taking the tournament top spot with Boxin Jin beating compatriot and Korea National Cup Flight A frontrunner Fei Wang head-up to claim the KRW 18,333,000 (~USD 13,310) top prize, in addition to his maiden APT title."
      },
      {
        type: "heading",
        content: "NLHE FREEZEOUT FINAL TABLE RESULTS"
      },
      {
        type: "table",
        title: "Final Results",
        headers: ["Place", "Name", "Country", "Prize"],
        rows: [
          ["1", "Boxin Jin", "China", "KRW 18,333,000"],
          ["2", "Fei Wang", "China", "KRW 12,222,000"],
          ["3", "Hao-Ting Chao", "Taiwan", "KRW 7,857,000"],
          ["4", "Edward Chun Ho Yam", "Hong Kong", "KRW 5,238,000"]
        ]
      }
    ]
  },
  "china-jin-boxin-bests-jeju-dragon-quest-field": {
    heroImage: "/image/news/details-news/new17/1-1-en-BQkgythn.png",
    sections: [
      {
        type: "paragraph",
        content: "Exciting Recap: WPT Korea Jeju Dragon Quest Day 1A and Day 1B Highlights!"
      },
      {
        type: "video",
        src: "/image/news/details-news/new17/AA22.mp4",
        alt: "WPT Korea Jeju Dragon Quest Highlights Video"
      },
      {
        type: "paragraph",
        content: "Jin Boxin has emerged as the latest JEJU Dragon Quest Champion at WPT Korea! In addition to winning a WPT Trophy and a side event Champion Ring, Jin Boxin bested a field of 276 players to take home KRW 47,770,000 in prize money. He agreed to split the winnings with Li Zhongxian, ensuring each received KRW 47,770,000."
      },
      {
        type: "image",
        src: "/image/news/details-news/new17/2-2zHN3ItS.png",
        alt: "Jin Boxin Champion"
      },
      {
        type: "paragraph",
        content: "Date/s: March 27-28, 2024 Buy-in: KRW 1,100,000 (~USD 810) Prize pool: KRW 265,043,000 (~USD 197,130) Entries: 276 (188 unique) ITM: 36 players Event #5: Jeju Dragon Quest – Final Table Results"
      },
      {
        type: "table",
        title: "Final Results",
        headers: ["Rank", "Last Name", "First Name", "Flag", "Prize(KRW)"],
        rows: [
          ["1", "JIN", "BOXIN", "China", "47,770,000"],
          ["2", "LI", "ZHONGXIAN", "China", "47,770,000"],
          ["3", "NIELSEN", "MARTIN", "Denmark", "27,950,000"],
          ["4", "WU", "SHENGHAO", "China", "20,700,000"],
          ["5", "ZHANG", "XIN", "China", "15,500,000"],
          ["6", "GAO", "QINRONG", "China", "11,750,000"],
          ["7", "LI", "LEI", "China", "8,950,000"],
          ["8", "LOEFFLER", "KILIAN MARKUS HYUN", "Germany", "6,950,000"],
          ["9", "XU", "YIGUANG", "China", "5,400,000"]
        ]
      },
      {
        type: "image",
        src: "/image/news/details-news/new17/4-ChWeKVXi.png",
        alt: "Final Table Group Photo"
      },
      {
        type: "paragraph",
        content: "Congratulation to AA POKER team Jin Boxin!"
      }
    ]
  },
  "whirlwind-quan-zhou-races-first-triton-title-25k-plo": {
    heroImage: "/image/news/details-news/new18/21-1-C4YZUrOJ.png",
    sections: [
      {
        type: "paragraph",
        content: "The final Saturday of the Triton Super High Roller Series festival in Jeju, South Korea, started with the search for Quan Zhou. It ended with the Chinese player in the most prominent place of all: holding aloft his first Triton winner's trophy."
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-2-jxUPAYCP.png",
        alt: "Quan Zhou at Poker Table"
      },
      {
        type: "paragraph",
        content: "Zhou was the overnight chip leader of the $25K Pot Limit Omaha event here at the Jeju Shinhwa World Landing Resort, but was late to arrive for the tournament room for the 1pm restart of the event. It meant Zhou was missing from the customary pre-final table line-up photo. But no matter. Zhou set about his task today with customary focus and ensured that he was present for the most important photos of the day. Those were the ones featuring Zhou alone, alongside his winner's cap, winning hand, winning chips and that trophy. The $530,000 first prize is also now into his Triton account."
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-3-CJ43Cp5_.png",
        alt: "Quan Zhou Victory Celebration"
      },
      {
        type: "paragraph",
        content: "This 39-year-old has come close to a Triton victory before, most notably when he was beaten heads-up in a PLO event in Monte Carlo last year. But this time he was not to be denied and blazed through the final day in a little more than four hours. He despatched his final challenger, Canada's Matthew Wood, on the first hand of head-up play. It ensured his first cash in Jeju came with a \"1st place\" notice beside it. He has staked a real claim as the man to beat in these PLO events, and confirmed that he's here to stay. 'I'm very happy with the win,' Zhou said, through an interpreter, as he began his celebrations. 'I have been looking forward to this title because there are a lot of strong competitors on the Triton Series.' He added: 'I played a lot of the no limit events and didn't cash, so there was a bit of pressure on me. But fortunately I have a lot of support from friends that keeps me going. Some of my friends came here to support me. Winning this title has helped me to relieve the pressure. It's a confidence boost.'"
      }
    ]
  },
  "quan-zhou-runner-up-ept-paris-mystery-bounty": {
    heroImage: "/image/news/details-news/new19/20-1-BN6KnOwy.png",
    sections: [
      {
        type: "paragraph",
        content: "Paris is the City of Light, and today at the 2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty, the light shined brightest on Duco ten Haven."
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-2-BM3eNJXa.png",
        alt: "Duco ten Haven Champion"
      },
      {
        type: "paragraph",
        content: "The Dutch pro, who considers Paris a second home, is usually an online crusher but captured his first EPT title today at Le Palais des Congrès by defeating Quan Zhou heads-up to win the trophy and €126,500. In addition to the top prize, he also earned €117,500 in bounties including one of the €50,000 top mystery bounty envelopes as he began his festival here in Paris with a total score of €244,000, the best of his career. That's great. I didn't even want to play this tournament,\" ten Haven said following his victory. \"It's amazing. My first EPT. My best live score. Can't get any better. I come also from Paris, kind of, so it's the best feeling to win the EPT in the city that I come from.\" Mystery bounty tournaments have become a fixture on the poker calendar within a few short years. Players can collect a bounty by eliminating a player, but the amount is left up to chance. An envelope is pulled out of a wooden box and the figure that is in there is the player's to keep. For ten Haven, it's a way to keep poker more interesting, especially with how it affects the overall strategy of the tournament. It's fun. A mixture of the different types of tournaments is the best thing to have. I enjoy all the formats as much as one another, but the best is having diversification so you're not bored at any point in time,\" he said. When the mystery bounty is first getting into play there were a lot, so you should gamble way more at that point, especially if there are short stacks that you cover. But as the tournament goes towards the end they are worth less and less so it plays out more or less like a normal format.\" Final Table Results"
      },
      {
        type: "table",
        title: "Final Results",
        headers: ["Rank", "Player", "Country", "Prize", "Bounties", "Total Earnings"],
        rows: [
          ["1", "Duco ten Haven", "Netherlands", "€126,500", "€117,500", "€244,000"],
          ["2", "Quan Zhou", "China", "€81,500", "€72,500", "€154,000"],
          ["3", "Thomas Boivin", "Belgium", "€58,200", "€25,000", "€83,200"],
          ["4", "Sirzat Hissou", "Germany", "€44,800", "€47,500", "€92,300"],
          ["5", "Sergi Reixach", "Spain", "€35,800", "€62,500", "€98,300"],
          ["6", "Adrian Mateos", "Spain", "€28,700", "€7,500", "€36,200"],
          ["7", "Elias Gutierrez", "Spain", "€22,900", "€15,000", "€37,900"],
          ["8", "Aurelien Russo", "France", "€18,300", "€7,500", "€25,800"],
          ["9", "Mike Watson", "Canada", "€14,700", "€35,000", "€49,700"]
        ]
      },
      {
        type: "paragraph",
        content: "Day 2 Action Day 2 began with 46 surviving players from Day 1 beginning play at 12:30 p.m. local time. With late registration open for the first two levels of the day, they were joined by 32 new arrivals to bring the total field up to 103. Mystery bounties kicked in beginning on Level 13. Team PokerStars Pros Alejandro Lococo and Sam Grafton, as well as EPT champion Steve O'Dwyer, Chris Brewer, and Day1 chip leader Joris Ruijs were among those who busted early. Stephen Chidwick fell two spots shy of the money, while Manig Loeser fell victim to Quan Zhou's flush in 14th place as the unfortunate bubble boy. Once the bubble burst and the remaining 13 players guaranteed themselves a payday, Joakim Anderson had his aces cracked by Mike Watson to fall in 13th. Atanas Malinov lost to Elias Gutierrez's rivered pair of aces as he busted in 12th. Thomas Boivin earned a massive double up when he spiked a set of kings on the river to beat Sergi Reixach's two aces. Gutierrez then won a race against EPT champion Adrian Mateos to double up and leave Mateos nursing an extreme short stack. Reixach, though, managed to climb back into contention after a crucial double through Lin, eliminating Jean-Noel Thorel in 11th place. Jakob Miegel suffered a massive cooler when his tens over queens lost to Boivin's queens full of tens as he finished on the final table bubble in 10th place. Boivin took the chip lead into the nine-handed final table with 1,940,000, ten Haven following close behind in second on a stack of 1,815,000."
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-3-sgakXpUR.png",
        alt: "Mike Watson"
      },
      {
        type: "paragraph",
        content: "Two-time EPT champion Watson was the first to fall, losing a three-way all in to Sirzat Hissou's turned flush. Mateos picked off a bluff from Gutierrez to double up yet again before Aurelien Russo was eliminated in eighth place when his eights lost to Reixach's flopped pair of kings. A hand later, Reixach made a straight on the river to beat Gutierrez's pocket deuces to send the online phenom and streamer known as \"SimKarma\" to the rail in seventh. Mateos finally fell when he moved all in for 850,000 with king-six. Zhou called with ace-six and both players made two pair on the flop, but Zhou's ace earned him the pot as Mateos was sent to the exit in sixth. Zhou took the chip lead, but his turn atop the leaderboard was short-lived as Boivin won a massive flip with nines against Reixach's ace-king to double up. Reixach was eliminated the next hand by Zhou's turned straight."
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-10-BgRDwH7B.png",
        alt: "Tournament Action"
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-11-BZ6Rrg9M.png",
        alt: "Quan Zhou Playing"
      },
      {
        type: "paragraph",
        content: "The biggest hand of the tournament, though, was yet to come as ten Haven catapulted into a massive lead. Zhou four-bet jammed and ten Haven snap-called for 2,530,000 with two aces. Zhou had ace-king and was forced to hand over most of his chips as ten Haven took firm control of the tournament. Zhou nearly tripled up a few hands later to get back into contention. Hissou doubled up his short stack several times before calling off his last 650,000 against ten Haven, who made a pair of aces to bust Hissou in fourth place. Boivin then moved all in for 3,100,000 with a pair of eights and ten Haven called with a dominating pair of nines. Ten Haven ended up with quads to eliminate Boivin in third and take a 6,600,000 to 1,330,000 lead over Zhou into heads-up play."
      },
      {
        type: "paragraph",
        content: "Zhou managed two double ups until he jammed again for 1,825,000 with jack-four. Ten Haven called with king-three and ended up with a full house to win the pot and tournament. Ten Haven's night only got better from there, as he claimed the last remaining €50,000 mystery bounty after clinching the title. Fittingly, Zhou won the other top bounty prize. His career-defining windfall today is going to change ten Haven's plans for the rest of the EPT Paris festival. The high roller events weren't on his original schedule, but that might change now with his win today. \"I wasn't planning to, but now this makes me reconsider it. So I think so,\" ten Haven said. That concludes PokerNews' coverage of the €10,200 Mystery Bounty at the 2024 EPT Paris. Stay tuned for more coverage throughout the festival."
      }
    ]
  },
  "aapoker-poker-community-without-thieves": {
    heroImage: "/image/news/details-news/new20/19-1-QUAkBGe1.png",
    sections: [
      {
        type: "paragraph",
        content: "The most heinous cheater in history is actually the WSOP Main Event Champion! Everyone despises cheaters, especially poker players. Nowadays, with the more popularity of poker all over the world, more questions have emerged, such as various cheating behaviors. There are some just as little thieves, but some are robbers with insatiable desires. Today, let's meet the most despicable, greedy, and famous cheater in history. You can hardly imagine how nasty he is! He has stolen over $20 million from players through cheating, without returning anything to the players or spending a day in jail. He is the former American professional player, Russ Hamilton."
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-1-QUAkBGe1.png",
        alt: "Russ Hamilton"
      },
      {
        type: "paragraph",
        content: "He was the 1994 World Series of Poker main event champion, defeating Hugh Vincent in heads-up play to win $1 million in first prize money as well as his body weight in silver. He was a bona fide poker pro. Instead of leaving a legacy, he chose infamy. During the online poker craze of the early 2000s, he launched his Ultimate Bet, the world's first online poker site named 'POTRIPPER,' which could directly see players' hole cards. This 'simple and easy' method enabled him to effortlessly steal over $20 million from other players between January 2005 and December 2007. After his misdeeds were exposed, Hamilton vehemently denied his crimes. Although being blacklisted by the poker community, he still faced no any punishment. Now, with the rapid development of AI technology, cheating methods have also evolved. Safeguarding the legitimate rights and interests of our poker players and creating a fair and fun gaming environment have become the top priorities for every poker platform operator."
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-2-en-Do2Dc4Us.png",
        alt: "AA Poker Honest Game"
      },
      {
        type: "paragraph",
        content: "So recently, AApoker has had all better hope that the profession can get its act together, creating a fair gaming environment for our players. We aim to eradicate all cheating behaviors and safeguard regular players! In order to create a fair tournament environment, improve gaming quality, establish industry standards, and combat any forms of collusion and cheating, AApoker has made the following technological enhancements for players:"
      },
      {
        type: "paragraph",
        content: "For Players"
      },
      {
        type: "paragraph",
        content: "1.Online table function 2. Face liveness detection"
      },
      {
        type: "paragraph",
        content: "AApoker System Protection:"
      },
      {
        type: "paragraph",
        content: "1. Automatic scanning and detection of IP address. 2. Big data detection of real location. 3. Automatic detection of AI bot cheaters. Prohibition of wormhole attacks. 5. Data protection: Use of blockchain technology AES256 encryption, making data interception and decryption impossible midway. AApoker attaches great importance to anti-cheating work this time. AA POKER always adheres to the spirit of fair and just game competition, has zero tolerance for cheating, protects the game rights of every player, and allows players to enjoy healthy, fair and fun poker games. Although combating cheating may seem like an arduous task, with the joint efforts of the professions, victory this time is inevitable!"
      }
    ]
  },
  "king-quan-zhou-becoming-aa-poker-global-ambassador": {
    heroImage: "/image/news/details-news/new21/18-1-en-p-9TvWXH.png",
    sections: [
      {
        type: "heading",
        content: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador"
      },
      {
        type: "paragraph",
        content: "Quan Zhou is a well-known professional poker player, renowned for his exceptional poker skills and compassionate nature. He is an idol among many young players. Recently, Quan Zhou signed a contract to become the global tournament ambassador for a new poker brand AA POKER, symbolizing the beginning of a new chapter in his professional career."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-1-en-p-9TvWXH.png",
        alt: "Quan Zhou AA Poker Ambassador"
      },
      {
        type: "paragraph",
        content: "As one of the first competitive poker players in China, his tournament history dates back to as early as 2011. Until now, Quan Zhou has maintained excellent physical health. With a slender figure and a serious face, he appears modest and reserved. Therefore, it is hard to associate him with his nickname-The King."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-2-DcOVGUo3.png",
        alt: "Quan Zhou Playing"
      },
      {
        type: "heading",
        content: "Origin of his nickname-King"
      },
      {
        type: "paragraph",
        content: "His nickname seems to have a somewhat dramatic origin. It stemmed from a tournament where Quan Zhou mistakenly wrote his name under the nationality section. At first, it was joked around by his friends as 'The King,' which gradually spread later."
      },
      {
        type: "paragraph",
        content: "However, it seems he was predestined to win this name, because of his excellent performances in this field. Quan Zhou not only earns such a good title but also gets impressive poker records."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-3-CdCN-5ts.png",
        alt: "GPI 2017 Player of the Year"
      },
      {
        type: "paragraph",
        content: "One of his highlights was winning the GPI China region's top spot in 2017. Although 2017 seems like a few years ago, it also proves that Quan Zhou has had great fame for a long time with his consistent performance. In 2020, Quan Zhou clinched the top spot in the GPI global rankings, also securing the Player of the Year title."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-4-DJz4qy0L.png",
        alt: "GPI POY 2020 Rankings"
      },
      {
        type: "paragraph",
        content: "As of 2023, he still maintains the second position in the GPI China region, standing as a timeless poker figure in China."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-5-C3cyYwRq.png",
        alt: "GPI 2023 Rankings"
      },
      {
        type: "paragraph",
        content: "The achievements depicted above are just a glimpse of Quan Zhou's remarkable accomplishments in 2023, setting him apart from countless players. Nowadays, with the popularity of poker tournaments, many Chinese players have also achieved excellent records all over the world. But it is still difficult to find a player who can compete with Quan Zhou. Quan Zhou is a real king of poker in China."
      },
      {
        type: "heading",
        content: "Compassionate and Involvement in Charity"
      },
      {
        type: "paragraph",
        content: "This is a heartwarming action in the poker community. While many of us have compassion, often due to limitations, we don't always act on it. However, Quan Zhou did just that."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-6-DiUN3lNK.png",
        alt: "THC Charity Logo"
      },
      {
        type: "paragraph",
        content: "Learning about the difficult living conditions and harsh learning environments of children in impoverished mountainous areas, he founded 'De Yi Quan Ming Xing' in 2016, a nonprofit organization. Quan Zhou led his team members in donating educational and living supplies to children in these areas. He did it! Acts of kindness!"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-7-CzyeZPMs.png",
        alt: "Charity Donation Records"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-8-hkd7skxI.png",
        alt: "Charity Event 1"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-9-R-Mvuzg7.png",
        alt: "Charity Event 2"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-10-DNG0ptea.png",
        alt: "Charity Event 3"
      },
      {
        type: "paragraph",
        content: "The above examples are just a little part of Quan Zhou and his team's efforts. Unfortunately, due to space constraints, we can't list them all."
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-11-BbrllmXK.png",
        alt: "Receipt Document"
      },
      {
        type: "paragraph",
        content: "We not only respect his poker skills, but his charitable actions off it undoubtedly command respect. It was reminiscent of a term coined online: 'A true gentleman!' Perhaps, it's necessary for our pokers to formally express gratitude to Quan Zhou and his team. They've imbued poker sports with human warmth. As Quan Zhou becomes the global tournament ambassador for AA POKER, we wish him to continue his poker road in 2024, capturing more championship titles. Finally, if the Chinese were to establish a 'Poker Hall of Fame,' Quan Zhou would undoubtedly be a must-have inclusion!"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-12-BkD057q4.png",
        alt: "Quan Zhou Portrait"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-13-CMyBEPZr.png",
        alt: "AA Poker Logo"
      }
    ]
  },
  "wesley-new-brand-ambassador-aa-poker": {
    heroImage: "/image/news/details-news/new22/new17-1-im51ScEu.png",
    sections: [
      {
        type: "heading",
        content: "WESLEY-NEW BRAND AMBASSADOR OF AA POKER"
      },
      {
        type: "paragraph",
        content: "Congratulations! Wesley become one of the global brand ambassadors for a well-known poker brand, AAPoker! For Wesley, who entered the poker field just two years ago, this good news is undoubtedly industry recognition and an acknowledgment of his growing influence. 2023 was a thrilling year for Wesley. But this cooperation with AAPoker marks a satisfying conclusion to the 'turbulent' 2023 and also sets the stage for a promising start in 2024."
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-1-im51ScEu.png",
        alt: "Wesley AA Poker Ambassador"
      },
      {
        type: "paragraph",
        content: "As we all know, most Chinese poker players tend to be modest, because of their personalities and the environments where they are. However, Wesley, who grew up on the other side of the globe, is different. He isn't bound by rules and regulations. Since entering the 'poker world' after making a name for himself in the cryptocurrency sphere, he has embraced a 'high-profile' approach—appearing on popular shows, engaging in high-stakes poker games, and indulging in various forms of 'flaunting wealth.' This unconventional style has naturally polarized public opinion. Some people said he was too ostentatious. However, as 2023 comes to a close, we seem to witness a true Wesley. He seems to be a warrior with an inherent sense of never giving up. On the American poker stage, he bravely showcases a different image of a Chinese poker player, contributing to a unique form of cultural export through his actions and words."
      },
      {
        type: "heading",
        content: "Wesley VS Tom Dwan"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-2-DS7LKn2D.png",
        alt: "Wesley vs Tom Dwan"
      },
      {
        type: "paragraph",
        content: "Wesley etched his name into history with the Hustler's Million Dollar Cash Game. During the showdown against Tom Dwan, he lost $3.1 million at first, the biggest pot TV poker history. But subsequently, he won another massive pot of $2.2 million, the second biggest pot on the history of televised poker. Throughout the huge fluctuation of this field, we also can glimpse the real nervousness on Wesley's face. However, what seems to be overlooked is his courage to sit at that table and take on top-notch professionals in the field. At that time, he had been in the profession for just over a year, and he did not sell his shares but rather used his own money to challenge the cream of the crop in American professional poker."
      },
      {
        type: "heading",
        content: "Bravely reporting international cheating syndicate illegal behavior"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-3-CGcibsTz.png",
        alt: "Wesley Reporting Cheating"
      },
      {
        type: "paragraph",
        content: "The details of this incident are well-known. Wesley and his friends were deceived out of $4.1 million by Mars and an international cheating syndicate. After discovering the fraud, Wesley chose to expose it, although he was faced with personal threats. It's worth mentioning that this international cheating syndicate has existed for a long time, but no one has ever stepped forward online to expose them. Wesley was the first to bravely confront them, his act of justice exposing the fraudsters and purging the industry of its evil. Hope we live in a world without thieves!"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-4-Bv--PnV9.png",
        alt: "Wesley Portrait"
      },
      {
        type: "paragraph",
        content: "Wesley is a genuine and courageous warrior. Despite losses in both the investment and poker realms in 2023, he still feel full of confidence and open to possibilities. He said: \"as long as we keep professional and have ambitious, everything will come back\" At last, we hope that Wesley has a new beginning in 2024. We anticipate that his path in the world of poker will broaden even further, solidifying his position as a fearless pioneer on the American poker stage."
      }
    ]
  },
  "jungleman-plays-high-stakes-andy-mariano-pepe": {
    heroImage: "/image/news/details-news/new23/jungleman-high-stakes.png",
    sections: [
      {
        type: "heading",
        content: "JUNGLEMAN PLAYS HIGH STAKES $50/100/200W/ ANDY, MARIANO, PEPE, DJ WASHBURN & MARS"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT"
      },
      {
        type: "paragraph",
        content: "ANDY : $371,975"
      },
      {
        type: "paragraph",
        content: "PEPE : $291,750"
      },
      {
        type: "paragraph",
        content: "MARS : $261,850"
      },
      {
        type: "paragraph",
        content: "RAYMOND : $143,825"
      },
      {
        type: "paragraph",
        content: "MARIANO : $131,750"
      },
      {
        type: "paragraph",
        content: "JUNGLEMAN : $87,075"
      },
      {
        type: "paragraph",
        content: "DJ WASHBURN : $29,200"
      },
      {
        type: "paragraph",
        content: "WILL : $15,225"
      },
      {
        type: "heading",
        content: "Chapter"
      },
      {
        type: "paragraph",
        content: "0:00 : Countdown"
      },
      {
        type: "paragraph",
        content: "26:40 : Player Introductions"
      },
      {
        type: "paragraph",
        content: "48:30 : Raymond T8 v Andy 88"
      },
      {
        type: "paragraph",
        content: "54:40 : Pepe A4 v Jungleman KT"
      },
      {
        type: "paragraph",
        content: "1:05:45 : Jungleman 44 v Mars Q8"
      },
      {
        type: "paragraph",
        content: "2:29:19 : Mariano Q5 v Raymond K2"
      },
      {
        type: "paragraph",
        content: "2:41:30 : Mariano K3 v Jungleman QJ"
      },
      {
        type: "paragraph",
        content: "3:51:39 : Andy J9 v Raymond A6"
      },
      {
        type: "paragraph",
        content: "4:09:10 : Will A6 v Jungleman T8"
      },
      {
        type: "paragraph",
        content: "5:05:30 : DJ Washburn KQ v Raymond A5 v Andy K3"
      },
      {
        type: "paragraph",
        content: "6:16:18 : Final Statistics"
      },
      {
        type: "paragraph",
        content: "6:18:08 : Ending Credits"
      },
      {
        type: "paragraph",
        content: "https://www.youtube.com/watch?v=wnglcz0h4to"
      }
    ]
  },
  "lord-poker-tournament-top-money-earners": {
    heroImage: "/image/news/details-news/new24/TLPT悉尼站赢家排行榜-英文-CtPPmlcw.jpg",
    sections: [
      {
        type: "heading",
        content: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS"
      },
      {
        type: "paragraph",
        content: "The first stop of the 2023 TLPT in Sydney was successfully concluded on October 29th The next stop will be more excited. Looking forward to it."
      },
      {
        type: "image",
        src: "/image/news/details-news/new24/TLPT悉尼站赢家排行榜-英文-CtPPmlcw.jpg",
        alt: "TLPT Top Money Earners 2023"
      }
    ]
  },
  "tlpt-international-high-rollers": {
    heroImage: "/image/news/details-news/new25/图层1-BQrlUn2y.jpg",
    sections: [
      {
        type: "heading",
        content: "TLPT INTERNATIONAL HIGH-ROLLERS"
      },
      {
        type: "paragraph",
        content: "The first stop of the 2023 TLPT in Sydney was successfully concluded on October 29th The next stop will be more excited. Looking forward to it."
      },
      {
        type: "image",
        src: "/image/news/details-news/new25/图层1-BQrlUn2y.jpg",
        alt: "TLPT International High-Rollers"
      },
      {
        type: "paragraph",
        content: "Najeem Ajez : 2,420,000"
      },
      {
        type: "paragraph",
        content: "Chao Duan : 1,520,000"
      },
      {
        type: "paragraph",
        content: "Haozhe Gan : 1,450,000"
      },
      {
        type: "paragraph",
        content: "Robert Spano : 1,330,000"
      },
      {
        type: "paragraph",
        content: "Michael Egan : 925,000"
      },
      {
        type: "paragraph",
        content: "Andres Vasquez : 470,000"
      },
      {
        type: "paragraph",
        content: "Thomas Amir : 375,000"
      },
      {
        type: "paragraph",
        content: "Luke Edwards : 330,000"
      },
      {
        type: "paragraph",
        content: "Martin Ward : 180,000"
      }
    ]
  },
  "tlpt-international-10k-challenge-final-table": {
    heroImage: "/image/news/details-news/new26/10k-challenge.png",
    sections: [
      {
        type: "heading",
        content: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT"
      },
      {
        type: "paragraph",
        content: "Najeem Ajez : 2,420,000"
      },
      {
        type: "paragraph",
        content: "Chao Duan : 1,520,000"
      },
      {
        type: "paragraph",
        content: "Haozhe Gan : 1,450,000"
      },
      {
        type: "paragraph",
        content: "Robert Spano : 1,330,000"
      },
      {
        type: "paragraph",
        content: "Michael Egan : 925,000"
      },
      {
        type: "paragraph",
        content: "Andres Vasquez : 470,000"
      },
      {
        type: "paragraph",
        content: "Thomas Amir : 375,000"
      },
      {
        type: "paragraph",
        content: "Luke Edwards : 330,000"
      },
      {
        type: "paragraph",
        content: "Martin Ward : 180,000"
      },
      {
        type: "paragraph",
        content: "https://www.facebook.com/APTLiveReporting/videos/151124998049799"
      }
    ]
  },
  "tlpt-international-25k-challenge-final-table": {
    heroImage: "/image/news/details-news/new27/25k-challenge.png",
    sections: [
      {
        type: "heading",
        content: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT"
      },
      {
        type: "paragraph",
        content: "Yita Choong : 3,876,000"
      },
      {
        type: "paragraph",
        content: "Yoon Kong : 560,000"
      },
      {
        type: "paragraph",
        content: "Josh Mccully : 970,000"
      },
      {
        type: "paragraph",
        content: "Shan Huang : 1,250,000"
      },
      {
        type: "paragraph",
        content: "Alex Trevallion : 1,600,000"
      },
      {
        type: "paragraph",
        content: "Didier Gurien : 4,264,000"
      },
      {
        type: "paragraph",
        content: "Yan Yan : 1,920,000"
      },
      {
        type: "paragraph",
        content: "Hun Wei Lee : 2,950,000"
      },
      {
        type: "paragraph",
        content: "Martin Finger : 775,000"
      },
      {
        type: "paragraph",
        content: "https://www.facebook.com/APTLiveReporting/videos/887180276369618"
      }
    ]
  },
  "super-high-stakes-jungleman-andy-nik-pepe-mars": {
    heroImage: "/image/news/details-news/new28/super-high-stakes.png",
    sections: [
      {
        type: "heading",
        content: "SUPER HIGH STAKES $100/200/400!! JUNGLEMAN, ANDY, NIK AIRBALL, PEPE, MARS - COMMENTARY BY MARC GOONE"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT"
      },
      {
        type: "paragraph",
        content: "PEPE : $242000"
      },
      {
        type: "paragraph",
        content: "JUNGLEMAN : $150,000"
      },
      {
        type: "paragraph",
        content: "ANDY : $150,000"
      },
      {
        type: "paragraph",
        content: "JIMMY : $100,000"
      },
      {
        type: "paragraph",
        content: "NIK AIRBALL : $100,000"
      },
      {
        type: "paragraph",
        content: "MADS : $50,000"
      },
      {
        type: "paragraph",
        content: "DAN : $50,000"
      },
      {
        type: "paragraph",
        content: "HARSHEEL : $40,000"
      },
      {
        type: "heading",
        content: "Chapter"
      },
      {
        type: "paragraph",
        content: "0:00 : Countdown"
      },
      {
        type: "paragraph",
        content: "3:22:05 : Jungleman v Nik Airball"
      },
      {
        type: "paragraph",
        content: "3:36:23 : Cumulative Winnings IV"
      },
      {
        type: "paragraph",
        content: "4:32:38 : Jimmy v Jungleman"
      },
      {
        type: "paragraph",
        content: "5:16:55 : Cumulative Winnings V"
      },
      {
        type: "paragraph",
        content: "5:31:03 : Andy v Jungleman"
      },
      {
        type: "paragraph",
        content: "5:39:39 : Cumulative Winnings VII"
      },
      {
        type: "paragraph",
        content: "5:40:50 : $100,000 Add-On"
      },
      {
        type: "paragraph",
        content: "6:20:14 : Jungleman AQ v Dan AK"
      },
      {
        type: "paragraph",
        content: "6:32:03 : Any Biggest HCL Win - $233,000"
      },
      {
        type: "paragraph",
        content: "6:32:24 : Final Statistics"
      },
      {
        type: "paragraph",
        content: "6:33:23 : Ending Credits"
      },
      {
        type: "paragraph",
        content: "https://www.youtube.com/watch?v=wx2d3EudeM"
      }
    ]
  },
  "aa-poker-largest-sponsor-tlpt-event": {
    heroImage: "/image/news/details-news/new29/aa-poker-sponsor.png",
    sections: [
      {
        type: "heading",
        content: "AA POKER, THE LARGEST SPONSOR OF THE TLPT EVENT"
      },
      {
        type: "heading",
        content: "TLPT Background"
      },
      {
        type: "paragraph",
        content: "The TLPT event is a new global high-roller brand series with a grand background and powerful strength. It will become an important part of the global high-roller series map.AA poker is an important part of TLPT with many famous poker stars who would like to join in. Player Bryn Kenney who represented AA POKER in the Triton Series 250K Invitation Event won again the champion title and returned to the top of the world rank of bonus. At the same time, Dan Cates, as the brand ambassador of TLPT, is also well-known among pokers. He is also one of the world's all-round poker players.Therefore, TLPT will have a strong influence in the poker community worldwide."
      },
      {
        type: "heading",
        content: "TLPT event schedule"
      },
      {
        type: "paragraph",
        content: "2023 first stop"
      },
      {
        type: "paragraph",
        content: "TLPT Sydney High-roller Series & APT Australia Championships"
      },
      {
        type: "paragraph",
        content: "Date: October 22nd, 2023-October 29th, 2023"
      },
      {
        type: "paragraph",
        content: "Prize pool: $3.5M"
      },
      {
        type: "paragraph",
        content: "We will have 29 events cross 8 days, which include: Opening events, Monster stack, Mini Main, National champs, Bankroll builder, 10k challenge,Players champ, Celebrity game-bounty, Hachem deepstack, Goliath, Poker hall of fame invitational, The valut, Lockout, 25K challenge, PKO bounty, Pineapple, XHR and etc."
      },
      {
        type: "paragraph",
        content: "We are expecting to have more than 4,000 players come to play our first stop in Sydney Australia."
      },
      {
        type: "heading",
        content: "TLPT free satellite tournament"
      },
      {
        type: "paragraph",
        content: "To allow more players to join the TLPT high-roller series, AA POKER has launched a free satellite tournament on September 22nd, which is currently open.We are delighted to report that three lucky guys got our high-roller packages. Congratulations!Want to become a champion like Moneymaker? detailed information is provided below, come and join it:"
      }
    ]
  },
  "that-man-zheming-zhu-wins-10k-world-champs": {
    heroImage: "/image/news/details-news/new30/zheming-zhu.png",
    sections: [
      {
        type: "heading",
        content: "THAT MAN ZHEMING ZHU WINS $10K WORLD CHAMPS WARM-UP WITH AA POKER"
      },
      {
        type: "paragraph",
        content: "Zheming Zhu has completed a wholly dominant final table performance at the WPT Australia $10K World Champs Heads-Up, defeating Malcolm Trayner heads up to claim his first Tier One title.The two players made a deal prior to the start of play, leaving $10,000 and the WPT Passport to play for. Trayner wasted no time, shoving his button on the first hand to a fold from Zhu. The pair then danced around each other for a couple of hands before Zhu shoved his own button. Trayner looked him up, and it was off to the races."
      },
      {
        type: "paragraph",
        content: "Trayner: K♣J♦"
      },
      {
        type: "paragraph",
        content: "Zhu: 5♠4♣"
      },
      {
        type: "paragraph",
        content: "Zhu would immediately connect in the window and hold through on the board of 9♦Q♣4♦7♠3♣ to claim the title, the crystal boomerang trophy, and the $273 AUD comes with it. From all of us here at PMA, congratulations Zheming Zhu, WPT Australia $10K World Champs Warm-Up Champion!"
      }
    ]
  },
  "free-satellite-tournament": {
    heroImage: "/image/news/details-news/new31/zzazhks-en-DBwW2GrR.jpg",
    sections: [
      {
        type: "heading",
        content: "FREE SATELLITE TOURNAMENT"
      },
      {
        type: "image",
        src: "/image/news/details-news/new31/zzazhks-en-DBwW2GrR.jpg",
        alt: "Free Satellite Tournament"
      }
    ]
  },
  "aa-poker-global-pre-launch": {
    heroImage: "/image/news/details-news/new32/aa-poker-pre-launch.png",
    sections: [
      {
        type: "heading",
        content: "AA POKER GLOBAL PRE-LAUNCH"
      },
      {
        type: "paragraph",
        content: "AA POKER's First Release Conference Takes Place in London, Making a Grand Appearance on the Global Stage of Texas Hold'em Poker."
      },
      {
        type: "paragraph",
        content: "On August 5, 2023, AA POKER's first release conference, 'A life of poker games, the choice of champions,' had a grand opening in the world-class city of London and the industry in London, which took place concurrently with Triton Poker Highroller Series and World Series of Poker, the two most important poker event in the world, pumping new vigor into the entire circle of Texas hold'em poker."
      },
      {
        type: "paragraph",
        content: "The release conference was attended by a great number of industrial celebrities, top players and media representatives, who shared the trend of the industrial development and their views on Texas hold'em business, tried AA POKER app online games, and witnessed the grand appearance of AA POKER as a highly competitive new power in the field of Texas hold'em games. Meanwhile, players were competing vigorously in two top events in the world, and the whole venue was of an atmosphere of heated competitions."
      },
      {
        type: "paragraph",
        content: "Most remarkably, player Bryn Kenney who represented AA POKER in the Triton Series 250K Invitation Event won again the champion title and returned to the top of the world rank of bonus. During the competition, he was powerful and confident, kept alert to opportunities and won the game in the end, and the entire global community of Texas hold'em poker cheered for him. This not only proved again AA POKER's capacity to provide top players with high-quality gaming experience and its enormous influence in the society of Texas hold'em poker."
      },
      {
        type: "paragraph",
        content: "Several media expressed their unreserved approval and expectation of AA POKER's potentials. They believe AA POKER on the strength of its innovative technologies and excellent services enjoys a gigantic potential of development in Texas hold'em industry. During the release, AA POKER exhibited its outstanding brand and operation technologies which successfully attracted the attention of the media."
      },
      {
        type: "paragraph",
        content: "The ceremonious opening of AA POKER's first release conference in London started a new storm in the community of Texas hold'em poker. The AA POKER CEO said the success of the release conference is a major step in AA POKER's brand strategy. Aiming at a global top platform for Texas hold'em poker, they hold high the slogan of 'anyone could be a star' and will continue to provide first-class games and innovative technology, promote and lead the global market of Texas hold'em poker and afford players with more exciting, wonderful gaming experience."
      }
    ]
  },
  "jungleman-aapoker-brand-ambassador": {
    heroImage: "/image/news/details-news/new33/12-1-en-BuRW2_oH.png",
    sections: [
      {
        type: "heading",
        content: "JUNGLEMAN--AAPOKER BRAND AMBASSADOR!"
      },
      {
        type: "paragraph",
        content: "AAPoker is delighted to announce that one of America's well-known poker stars, Dan Cates (Jungleman), has joined us as our newest brand ambassador!"
      },
      {
        type: "paragraph",
        content: "You may be surprised to learn that Dan Cates was born on November 14, 1989, which means he is only 33 years old this year. He is reportedly known as 'Jungleman' due to his thick hair and wild behavior. Others gave him the nickname 'Jungleman,' and he found it amusing. Therefore, he used it as his online ID."
      },
      {
        type: "paragraph",
        content: "Jungleman holds a prominent position in today's poker world and is considered to be one of the best heads-up No Limit Texas Hold 'em players in the world. Jungleman also has made a splash at poker tournaments with his powerful strength. His online cash game earnings at Full Tilt Poker and PokerStars are over US$11 million. His total live tournament winnings exceed US$14 million."
      },
      {
        type: "paragraph",
        content: "Jungleman's recent appearance was at the Triton Poker Series (London) in August 2023. As the ambassador for AApoker, he made it to the final table of the $125K Main Event and ultimately secured the third-place position, earning $1.94 million. Jungleman also attended the Release Conference held by AApoker in London. Surprisingly, after shaving off his beard, he appeared much fresher."
      },
      {
        type: "paragraph",
        content: "Jungleman is described as a legend of online poker. He expressed his great talent in poker skills. But it is much more than that. He wasn't nicknamed Jungleman for nothing, but was also described as a genius in the poker world."
      },
      {
        type: "paragraph",
        content: "Jungleman has won two World Series of Poker bracelets that hold exceptional value. As he achieved victories in the $50,000 buy-in Poker Players Championship in 2021 and 2022 respectively, creating a miraculous feat in WSOP history."
      },
      {
        type: "image",
        src: "/image/news/details-news/new33/12-1-en-BuRW2_oH.png",
        alt: "Jungleman WSOP Championships"
      },
      {
        type: "paragraph",
        content: "You should be aware that the Poker Player Championships feature an elite group of players competing in nine different poker games, showcasing Jungleman's overall genius and strength."
      },
      {
        type: "paragraph",
        content: "Stay tuned to witness Jungleman information at AApoker! Download AApoker!"
      }
    ]
  },
  "triton-poker-series-london-2023-event-11": {
    heroImage: "/image/news/details-news/new34/新闻13-英-DPSOvWsW.png",
    sections: [
      {
        type: "heading",
        content: "TRITON POKER SERIES LONDON 2023 - EVENT #11 $125K NLH MAIN EVENT - FINAL TABLE"
      },
      {
        type: "paragraph",
        content: "Total prize pool: $18,875,000"
      },
      {
        type: "paragraph",
        content: "Entries: 151"
      },
      {
        type: "paragraph",
        content: "Triton Poker Series 2023 London Main Event Final Table Result"
      },
      {
        type: "image",
        src: "/image/news/details-news/new34/新闻13-英-DPSOvWsW.png",
        alt: "Triton Poker Series Event 11 Final Table Results"
      },
      {
        type: "paragraph",
        content: "Video link"
      },
      {
        type: "paragraph",
        content: "https://www.youtube.com/watch?v=XCZcoM4kE9w"
      }
    ]
  },
  "triton-poker-series-london-2023-event-9": {
    heroImage: "/image/news/details-news/new35/新闻14-英-BKF2JWxx.png",
    sections: [
      {
        type: "heading",
        content: "TRITON POKER SERIES LONDON 2023 - EVENT #9 $250K NLH LUXON INVITATIONAL - FINAL TABLE"
      },
      {
        type: "paragraph",
        content: "Date : August 3-5, 2023"
      },
      {
        type: "paragraph",
        content: "Entries: 118"
      },
      {
        type: "paragraph",
        content: "Prize pool: $29,500,000"
      },
      {
        type: "paragraph",
        content: "Results"
      },
      {
        type: "image",
        src: "/image/news/details-news/new35/新闻14-英-BKF2JWxx.png",
        alt: "Triton Poker Series Event 9 Final Table Results"
      },
      {
        type: "paragraph",
        content: "Video link"
      },
      {
        type: "paragraph",
        content: "https://www.youtube.com/watch?v=P0_RjTC04qg"
      }
    ]
  },
  "why-bryn-kenney-most-valuable-man-poker": {
    heroImage: "/image/news/details-news/new36/bryn-kenney.png",
    sections: [
      {
        type: "heading",
        content: "WHY IS BRYN KENNEY THE MOST VALUABLE MAN IN POKER?"
      },
      {
        type: "paragraph",
        content: "Bryn Kenney, 36, is truly experiencing a stroke of good luck and double happiness this year. After becoming a sponsored player of AA POKER, he won the $250k Triton Poker London Luxon Invitational for $6.8 million.Until now, his career earnings reached over $65 million, overtaking Justin Bonomo on the All-Time Money List. After ascending to the top of the all-time money list at the age of 32, Bryn Kenney has predominantly maintained his position but sometimes stayed in second place for a short time.It is nearly impossible to articulate in any language the awe-inspiring performances on the tournament and money-making prowess of Bryn Kenney, who stands as the 'godlike figure' in this realm, 'a genius', and undoubtedly a future inductee into the 'Poker Hall of Fame'. How does he achieve such remarkable feats? Bryn Kenney (born November 1, 1986) is an American professional poker player from Long Island, New York. He is 36 years old, but some 80s or 90s players were surprised as he is such a young age.Kenney expressed remarkable memory skills from a very young age, possessing the gift of eidetic memory. As an infant, his mother Carol would show him baseball cards, and even before he could speak, he had memorized the names of at least 60 players.It is almost certain that this innate talent has helped Kenney become a professional poker. And his unique qualities have garnered unwavering support from his mother Carol, who always stands by him, allowing him the freedom to make his own choices and also becoming one of his fan. Kenney played SNS games with friends at first in high school, and his poker career also began. At the age of 17, unable to create his account due to being underage, his mother created an online account in her name for him. At 18, he officially opened his account, which he continues to use.From that on, poker completely consumed his life. A few weeks later, he dropped out of college to pursue a professional poker career, even though he had yet to prove himself as a valuable player. Fortunately, with unconditional support from his mother, his career quickly succeeded."
      },
      {
        type: "paragraph",
        content: "Securing his first gold bracelet is a turning point in Bryn Kenney's career, signaling the gears of destiny to set in motion. In 2014, at the age of 27, Bryn Kenney was already very famous both online and offline. This year was also very important for Kenney, as he not only participated in the WSOP but also gained his first gold bracelet, leaving an indelible mark on the world's largest poker tournament. The 2014 WSOP Event #63 was a $1,500 six-handed game, including 10 different poker games: Razz, 7-Triple-Draw Lowball, Omaha Hi-Lo, Pot-Limit Omaha, 7-Card Stud, 7-Card Stud High-Low Split, Pot-Limit Omaha, Omaha High-Low Split, Badugi, Limit Hold'ern, and No-Limit Hold'em. It's difficult for most players to understand the rules of these games, but for Kenney is very easy, which will also be thanks to his good memory. Kenney dominated Event #63 from the very beginning, bagging up the chip lead on Day 1. From there, Kenney continued to keep his seat at the top of the chip counts, remaining in the top ten chip counts throughout Day 2 and ultimately bagging second-place chips to end the day. With just four players left, Kenney led to a substantial chip lead early and rode that all of the way to his first championship bracelet.This victory earned Kenney his first career gold bracelet and a prize of $153,220. At that time, his total career earnings were $3.6 million, a far cry from his current staggering total of $65 million.However, in the remaining months of 2014, Kenney continued to participate in live poker tournaments, but his focus increasingly shifted toward high-roller and super high-roller events."
      },
      {
        type: "paragraph",
        content: "2019: The first time to claim the top spot."
      },
      {
        type: "paragraph",
        content: "In a 2018 interview, Bryn Kenney explicitly stated that becoming the highest-earning poker player was his long-term goal, one he wouldn't give up until achieved, predicting it within the next two years. The Triton Million event held in London in August 2019 featured the highest buy-in ever, at £1.05 million. Bryn Kenney reached the final heads-up against Chinese player Zang, and they made a deal. Zang won the title of Triton Million winner. However, due to Kenney's chip lead, he received the lion's share of the prize, £16,890,509 ($20,563,324), an unprecedented and possibly unparalleled sum.After this tournament, Bryn Kenney's career earnings reached $55,505,634, which is the first person to overtake Justin Bonomo to claim the top spot on the Hendon Mob all-time money list."
      },
      {
        type: "paragraph",
        content: "2023: Kenney reached the mountaintop once again."
      },
      {
        type: "paragraph",
        content: "London seems to be a lucky place for Bryn Kenney. After participating in the 2023 WSOP this summer, Kenney appeared at the Triton London event as an AA POKER ambassador. In several games, he won in Event #9, a £250k buy-in Luxon Invitational. This win marked his third Triton championship. The heads-up battle began between Kenney and Talal Shakerchi, the winner of Triton Poker Vietnam, all of the chips got in the middle with Shakerchi holding ace-king and Kenney holding eight-nine. An eight-high flop gave Kenney a big lead and Shakerchi couldn't improve as he went out in second place.With this victory, Kenney had earned a prize of 6.86 million, bringing his total career earnings to $65.03 million, and once again has shot back up to the number one spot on the all-time money list, ahead of Justin Bonomo."
      }
    ]
  },
  "aa-poker-player-story-chris-moneymaker": {
    heroImage: "/image/news/details-news/new37/chris-moneymaker.png",
    sections: [
      {
        type: "heading",
        content: "AA POKER PLAYER STORY—CHRIS MONEYMAKER"
      },
      {
        type: "paragraph",
        content: "In the 2023 Triton London event, Chris Moneymaker, the AA POKER ambassador, faced a crucial moment in the £250,000 buy-in Luxon Invitational. Moneymaker opened from under the gun with pocket jacks and his opponent Punsri moved in from the big blind after action folded all the way round. Moneymaker saw his opponent table KQ. Unfortunately, it was a fair fight until the dealer put a king on the flop and Moneymaker could not catch a two-outer to survive. At last, he got the fifth prize and $2.03 million.This fifth-place finish held extraordinary significance for Moneymaker. Firstly, it marked the second-highest prize of his professional career, second only to the $2.5 million he earned as the 2003 WSOP Main Event title. Secondly, it represented Moneymaker's debut in a high-stakes event with such a substantial buy-in, and his impressive performance was undoubtedly aided by the support of AA POKER, congratulating him on becoming their ambassador. He is the true architect of history, having changed and led it! He has genuinely embodied AA POKER's slogan: 'Anyone could be a star!'"
      },
      {
        type: "heading",
        content: "Won the WSOP Main Event"
      },
      {
        type: "paragraph",
        content: "Born on November 21, 1975, Chris Moneymaker was 27 years old in 2003. At that time, he was an unknown accountant with an annual income of $40,000. His poker journey began with winning an $86 satellite tournament at the PokerStars online poker card room that awarded him a seat in the Main Event of the 2003 World Series of Poker. Advancing to the final four, Moneymaker contemplated intentionally losing the tournament. Because the top three could receive WSOP Main Event seats, while the fourth-place earned $8,000 in cash. At that time, he was fortunate to receive a call from a friend who encouraged him to seize the rare opportunity to play in the WSOP Main Event. His friend offered to contribute $5,000, covering half of Moneymaker's buy-in. But unfortunately, the promise wasn't fulfilled. Moneymaker felt regretful and annoyed, but at last Moneymaker's father and his other friend each contributed $2,000, covering 20% of his buy-ins and persuading him to proceed. So Moneymaker went to Las Vegas to participate in his first live tournament and won the championship. On Day 1, he ranked 11th. On Day 2, he ranked 26th (with 111 players remaining). On Day 3, he ranked 6th place (with 45 players remaining). It was on this day that he began to be captured attention in public after defeating Johnny Chan, a momentous achievement considering Chan's seven gold bracelets, two of which were WSOP Main Event titles. Moneymaker's mindset shifted as he progressed, firstly he just hoped for a modest prize, but later he realized he had a chance to earn much more. On Day4, Moneymaker dispatched the great Phil Ivey in a rollercoaster of a hand, where at one point Moneymaker looked certain to win, then lose, before yet another ace got him out of trouble, and sent Ivey packing. On Day 5, the FT between Moneymaker and Sam Farha who had already claimed a gold bracelet in $2,500 PLO lasted over 11 hours. When it was Moneymaker against Farha to decide the title, a monumentally brave bluff saw Moneymaker go all in, meaning he was essentially willing to bet his tournament life on nothing more than the high card of a king. Farha didn't just have the upper hand in every sense – a pair of nines – but knew it. The issue was that if his read of the situation was incorrect, Farha would have been eliminated and thus decided to fold. And so to that final hand. Moneymaker's five of diamonds and four of clubs were inferior compared to Farha's jack of hearts and 10 of diamonds, but another miracle took place when the flop of three community cards was revealed by the dealer. Not only did Moneymaker match his own cards with a five of spades and four of clubs to give him two pair, but Farha actually had top pair with the jack on the board, which made it appear he was in a better position. This time, Farha would go all in, which was an easy call for Moneymaker. The turn card produced an eight of diamonds, and the fifth and final river card was a five of hearts, to secure victory and give Moneymaker a full house in the process. That night, Moneymaker invited friends, poker players, and anyone willing to join him to celebrate his victory. The next day, he flew back home and hosted a party at the restaurant where he worked. In 2005, Moneymaker published his autobiography, continuing to participate in WSOP and EPT annually. He also enjoyed playing low-stakes poker games and supporting novice players."
      },
      {
        type: "heading",
        content: "First 'Poker Boom' in History"
      },
      {
        type: "paragraph",
        content: "Winning the WSOP Main Event dramatically altered Moneymaker's trajectory and had a profound impact on the entire poker industry. The story of an amateur defeating professionals to claim the world championship was incredibly inspiring, fostering belief among thousands of players that such success could happen to themselves. Moneymaker not only inspired American players but ignited interest across Europe, Asia, and South America. This led to the 'Poker Boom' from 2003 to 2006, a period of unprecedented growth in the poker industry. Texas Hold'em reached unprecedented levels of popularity worldwide. For example, the WSOP Main Event grew from 839 participants in 2003 to 8,773 in 2006, a tenfold increase. Moneymaker not only enjoys a stellar reputation in the online poker realm but also exerts a significant influence on poker associated industries. At the age of 47, Moneymaker remains active in the poker world. After becoming the ambassador for AA POKER, his career has reached new heights. Stay tuned for more AA POKER players stories. Download AA POKER! Anyone could be a star!"
      }
    ]
  },
  "wsop-cyprus-king-championship-super-mystery-bounty": {
    heroImage: "/image/news/details-news/new40/2-Bn2M0-DS.png",
    sections: [
      {
        type: "heading",
        content: "WSOP CYPRUS \"KING\" FULLY WINS THE CHAMPIONSHIP OF THE SUPER MYSTERY BOUNTY TOURNAMENT AND RANKS FIFTH IN THE SUPER FAST BOUNTY BOTTOM POOL LIMITED BET OMAHA TOURNAMENT"
      },
      {
        type: "paragraph",
        content: "As the WSOP Cyprus race draws to a close on October 20th local time, the event has entered a white hot phase. The 18 WSOP Tour championship rings that symbolize the highest honor in poker are few and far between, and every championship battle has become a battleground for players, creating a tense atmosphere!"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/1-B6Z0KPkr.png",
        alt: "WSOP Cyprus Tournament"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/3-Dk4NHMHd.png",
        alt: "King Championship Winner"
      },
      {
        type: "paragraph",
        content: "In the just concluded $5,300 Super Mystery Bounty Tournament, the 'King' staged a comprehensive strength breakthrough. Facing 421 competitors, we steadily fought our way and ultimately won the championship, receiving generous championship rewards and mysterious bounties!"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/4-DP4al4Cz.png",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "The FT final table can be regarded as a highlight moment for Chinese players, with Tian Hao, Liu Xiaohu, and Yuan Yilu joining hands to break in."
      },
      {
        type: "paragraph",
        content: "Liu Xiaohu won sixth place and earned $39,000;"
      },
      {
        type: "paragraph",
        content: "Tian Hao ranked eighth and received $23,000 in revenue;"
      },
      {
        type: "paragraph",
        content: "Yuan Yilu ranked ninth and won $18,500."
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/5-C4q0H8GF.png",
        alt: "King Celebration"
      },
      {
        type: "paragraph",
        content: "In the mysterious bounty lottery, Chinese players have also been lucky. Zheng Xiaosheng and Yang Haiyang each received a generous bounty of $100,000, while Wei Guoliang received $37,000."
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/7-D_FB4HpT.png",
        alt: "Tournament Completed"
      },
      {
        type: "paragraph",
        content: "The ultra fast bounty pool limited bet Omaha tournament, which followed with a $1,000 purchase, attracted 43 participants."
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/8-dy7hNn9n.png",
        alt: "King Playing"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/6-D2KZDl5C.png",
        alt: "Young Player"
      },
      {
        type: "paragraph",
        content: "The $5,300 WSOP Super Tour main event attracted a total of 1,372 participants, and the main event on Day 4 has ended. Only 8 contestants continue to fight for the championship ring and the highest prize of $1,000,000!"
      },
      {
        type: "paragraph",
        content: "Chinese athlete Xinchen Huang ultimately won 21st place and a prize of $40,800."
      }
    ]
  },
  "congratulations-michael-mizrachi-aa-poker": {
    heroImage: "/image/news/details-news/new41/1-DJ_7N-Q2.png",
    sections: [
      {
        type: "heading",
        content: "CONGRATULATIONS! MICHAEL MIZRACHI, IN COLLABORATION WITH AA POKER CLAIMED THE CHAMPIONSHIP OF WSOP MAIN EVENT INDUCTED INTO THE WORLD POKER HALL OF FAME WON A PRIZE OF 10,000,000USD"
      },
      {
        type: "paragraph",
        content: "The Crowning of a Poker God: Mizrachi's WSOP Triumph Lights Up Vegas On Day 9 of the 2025 WSOP Main Event, at the 79th hand of the final table, history erupted when Michael 'The Grinder' Mizrachi – AA POKER's star player – made an instant call against his opponent's all-in. This wasn't just Mizrachi's championship moment; it was his ascension to poker immortality. Under the spotlight, the AA POKER logo on his left arm gleamed with symbolic intensity. Mizrachi first conquered online poker through his signature steadfast, pragmatic style, rapidly achieving monumental success that earned him the revered nickname 'The Grinder' – a title whose prestige every poker connoisseur recognizes. After discovering professional fulfillment at the tables, he made a pivotal decision: abandoning his medical career aspirations to pursue professional poker. This defining choice set him on the path to legendhood – a journey supercharged after joining AA POKER. This summer, Mizrachi demonstrated what undeniable dominance and destiny fulfilled truly look like."
      },
      {
        type: "heading",
        content: "Ascension Moment I: Fourth Poker Players Championship Crown"
      },
      {
        type: "paragraph",
        content: "Event #66: 2025 WSOP Poker Players Championship (PPC) – widely recognized as one of the most challenging and prestigious tournaments in poker. While not as marked by 'Jungleman' Cates' seemingly unbeatable record of back-to-back titles in 2021 and 2022, Michael Mizrachi has elevated another record to near-impossible difficulty. On June 28 this year, Mizrachi claimed his fourth Poker Players Championship title – along with his seventh WSOP gold bracelet – becoming the undisputed winningest champion in the event's history. This achievement sounds almost surreal, yet it has unequivocally happened."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/2-vl3zW5jn.png",
        alt: "Mizrachi Championship"
      },
      {
        type: "heading",
        content: "Legendary Moment II: Winning the 3BB Main Event with Divine Intervention"
      },
      {
        type: "paragraph",
        content: "The 2025 WSOP Main Event attracted 9,735 entrants. Emerging victorious from such a massive field requires both skill and luck in equal measure. Whether by fate or the fortune gained from joining Team AA POKER, Mizrachi delivered an epic comeback story for the ages.On Day 8 of the Main Event, Mizrachi found himself all-in with A♥J♠ against John Wasnock's A♠K♠. As the stack dwindled to just 3 BB—teetering on the brink of elimination. Yet, in a matter of hours, he staged a miraculous comeback, rebounding from 1.9 million chips to a staggering 38.4 million, ultimately securing his spot at the final table!"
      },
      {
        type: "paragraph",
        content: "Let's briefly revisit two miraculous double-ups — both survival stories written on the river:"
      },
      {
        type: "paragraph",
        content: "①A♠5♠ VS. A♥7♥, Board: K♥6♠5♣J♦K♥ VS. 55, Board: 4♥7♦9♣3♦10♠"
      },
      {
        type: "paragraph",
        content: "Upon reaching the final table, Mizrachi again faced his longtime rival John Wasnock. This time, however, fortune favored Mizrachi — with yet another river delivering salvation. A♠K♥ VS. K♠K♠ Board: J♠9♥7♦Q♠A♥ This pivotal hand propelled Mizrachi to undisputed chip leadership. By the time the battle reached four-handed play, he commanded a staggering 76% of all chips in play — mathematically cementing his victory and rendering the tournament virtually unchallenged."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/3-gfPI-kS_.png",
        alt: "Final Table Action"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/4-CHwE5itL.png",
        alt: "Heads Up Battle"
      },
      {
        type: "paragraph",
        content: "But fortune's relentless favor persisted. Mizrachi's K♦J♦ went all-in against Kenny Hallaert's A♥Q♣. Board: 10♠5♠4♦J♣9♣ The river 9♣ secured Mizrachi's victory with a pair of jacks, eliminating Hallaert in fourth place as his ace-high failed to improve."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/5-BFm5uycc.png",
        alt: "Mizrachi Victory"
      },
      {
        type: "paragraph",
        content: "Mizrachi's A♠T♦ then clashed with Braxton Dunaway's T♥6♥ in an all-in confrontation. Board: Q♦4♦K♣4♣3♦ The river 3♦ completed Mizrachi's diamond flush, eliminating Dunaway in third place as his paired tens were crushed."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/6-BJu8FHb-.png",
        alt: "Final Hand"
      },
      {
        type: "paragraph",
        content: "The final hand of this historic duel: Mizrachi: T♣3♣ John Wasnock: A♠9♦ Board: A♦9♠7♠4♣5♠ The river 5♠ completed Mizrachi's backdoor flush, cracking Wasnock's two pair (aces and nines) to crown Mizrachi champion and relegate Wasnock to runner-up."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/7-C943eTp1.png",
        alt: "Championship Celebration"
      },
      {
        type: "paragraph",
        content: "Thus, in a whirlwind 60-minute domination, Michael Mizrachi blitzed through three opponents in a record-shattering 79 hands — demolishing the two-decade mark for fewest hands at a Main Event final table — to seize poker's most coveted prize: the WSOP Main Event bracelet. This historic victory delivered his eighth career WSOP gold while claiming the $10,000,000 top prize."
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/11-Bn_EQLZv.png",
        alt: "Team AA POKER Celebration"
      },
      {
        type: "heading",
        content: "Legendary Moment III: Defying Conventions with Immediate Induction into the Poker Hall of Fame"
      },
      {
        type: "paragraph",
        content: "The poker world had already been buzzing with anticipation the night before Mizrachi claimed the Main Event bracelet. As the realization dawned that he stood on the brink of a historic achievement, overwhelming demands for his 'immediate, convention-defying induction into the Hall of Fame' flooded the community. Even poker legends Phil Hellmuth and 'DNegs' Daniel Negreanu joined forces, releasing a collaborative social media video with a public plea: 'We stand united! If 'The Grinder' wins the Main Event tomorrow, he deserves instant Hall of Fame induction. Danny and I are pushing HARD for this—right, Daniel?' Negreanu left no doubt about his endorsement: 'The Grinder should've been in years ago! He's a legend—a LIVING legend of poker. He embodies everything this game should be: dominating the felt while enjoying the competition, never taking it too seriously. And he's done it consistently for DECADES.' True to the crescendo, moments after Mizrachi raised his championship bracelet, WSOP Vice President Jack Effel made an unprecedented announcement: 'Mizrachi is elected to the Poker Hall of Fame—effective immediately!' No vote. No nomination process. No one-year wait. In that defining moment, poker rewrote its rulebook for him."
      },
      {
        type: "paragraph",
        content: "Today, Michael Mizrachi has achieved the two ultimate dreams of every poker player: scaling the summit of the WSOP Main Event and ascending into the game's pantheon of immortals. As the undisputed flagship player of Team AA POKER, we stand ready to witness more divine chapters in his legendary saga!"
      }
    ]
  },
  "poker-tour-co-founder-bags-25k-high-roller-title-jeju": {
    heroImage: "/image/news/details-news/new42/1-DMxCeEBv.jpg",
    sections: [
      {
        type: "heading",
        content: "POKER TOUR CO-FOUNDER BAGS A $25K HIGH ROLLER TITLE IN JEJU"
      },
      {
        type: "paragraph",
        content: "Following an exhilarating week of both low and high-stakes action at the Landing Casino inside Shinhwa World Hotel Jeju, The Lord Poker Tournament series has come to an end."
      },
      {
        type: "paragraph",
        content: "Standing tall at the finish was TLPT co-founder Ivan Zhang, who bested a 15-entry field in Event #12: US$25,000 8 Handed for a cool $162,000 in addition to the trophy."
      },
      {
        type: "paragraph",
        content: "The win marks Zhang's largest live tournament score to date and serves as a fitting redemption after firing — and missing — multiple bullets in the $20K 8-Handed event just days prior."
      },
      {
        type: "paragraph",
        content: "The atmosphere throughout the event carried a laid-back, 'home game' feel, with smiles all around and few players taking the result too seriously. Zhang, in particular, thrived in this setting, regularly dishing out playful table talk and never hesitating to splash his mind."
      },
      {
        type: "paragraph",
        content: "Zhang entered the final day with a commanding chip lead and never looked back. He put on a masterclass in well-timed aggression, mixing in light three-bets, floating with air, and pulling off overbets to apply maximum pressure. While he didn't always hold the best hand, Zhang dominated the table en route to a well-earned victory."
      },
      {
        type: "image",
        src: "/image/news/details-news/new42/1-DMxCeEBv.jpg",
        alt: "Ivan Zhang Champion"
      },
      {
        type: "heading",
        content: "FINAL DAY ACTION"
      },
      {
        type: "paragraph",
        content: "Renji Mao joined the fray at the last moment, which meant seven players would compete for the title in what turned to be a fairly long finale."
      },
      {
        type: "paragraph",
        content: "Two of the shorter stacks at the table, Gary Thompson and Lei Yu, were forced to make stands early that resulted in Yu winning a race to double up, while Thompson was eliminated after shoving with a flush draw against Mao's top pair and bricking out."
      },
      {
        type: "paragraph",
        content: "A relatively tame period saw Zhang extend his chip lead, including a hand where he got Dominik Nitsche off of a chop. Following the first break, Ami Barer and Nitsche were eliminated back-to-back after shoving preflop, getting called, and ending up second best."
      },
      {
        type: "paragraph",
        content: "The remaining four players immediatley agreed to a deal that guaranteed $30,000 to fourth place, opting to skip the money bubble altogether."
      },
      {
        type: "paragraph",
        content: "A lengthy period of modest action saw little chip movement. Zhang slowly chipped down to under a million at one point before a preflop cooler saw Mao jam ace-queen into Zhang's ace-king to be eliminated in fourth place and vault Zhang back into a solid chip lead."
      },
      {
        type: "paragraph",
        content: "Perhaps sensing a bit of passive play from his opponents, Zhang notably shifted gears and increased his aggression to great success, including three-betting with rags, floating with air, and overbetting the river."
      },
      {
        type: "paragraph",
        content: "Unable to gain any momentum against Zhang, Zhou finally made a stand by shoving preflop with ace-ten against an open from Zhang, but Zhang held a dominating ace-jack and held to set up heads-up play."
      },
      {
        type: "image",
        src: "/image/news/details-news/new42/1-DMxCeEBv.jpg",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "Armed with an overwhelming chip lead, Zhang continued to apply pressure to Yu and was aided by making the best hand in the first few hands of play, leaving Yu short.Yu was gifted a small glimmer of hope after backdooring a flush for a substantial pot, but just a couple of hands later Yu was dealt pocket sixes against Zhang's pocket kings. Yu shoved with his pair preflop, and Zhang snap-called with a big smile to see a clean runout, sealing Zhang's victory and wrapping up the TLPT in style."
      }
    ]
  },
  "tlpt-jeju-2025-top-money-earners": {
    heroImage: "/image/news/details-news/new43/1en-CVOojHFm.jpg",
    sections: [
      {
        type: "heading",
        content: "TLPT JEJU 2025"
      },
      {
        type: "image",
        src: "/image/news/details-news/new43/1en-CVOojHFm.jpg",
        alt: "TLPT Jeju 2025 Event Ranking"
      },
      {
        type: "image",
        src: "/image/news/details-news/new43/2en-CW8MYftL.jpg",
        alt: "TLPT $25,000 8-Handed Results"
      },
      {
        type: "image",
        src: "/image/news/details-news/new43/3en-DflYaNw0.jpg",
        alt: "Final Day Action"
      },
      {
        type: "image",
        src: "/image/news/details-news/new43/4en-Bpaeb-2T.jpg",
        alt: "Final Table"
      }
    ]
  },
  "red-hot-stephen-song-leads-final-11-tlpt-20k": {
    heroImage: "/image/news/details-news/new44/1-Dp0ONUPG.png",
    sections: [
      {
        type: "heading",
        content: "RED HOT STEPHEN SONG LEADS FINAL 11 IN TLPT $20K"
      },
      {
        type: "paragraph",
        content: "A lengthy Day 1 in Event #11 TLPT $20,000 8-Handed saw 32 entrants make their way to the Landing Casino inside the fabulous Shinhwa World Hotel Jeju. A change in structure extended Day 1 by an additional two levels and, by the time the last card was dealt, Stephen Song found himself once again chip leading a tournament after bagging up 1,315,000. Not too far behind, however, are James Mendoza (1,180,000) and Yisha Chen (1,100,000), who made an impressive surge late in the evening after a double knockout holding aces."
      },
      {
        type: "paragraph",
        content: "Song has had an exceptional showing at The Lord Poker Tournament series so far — first by making the final table of the $500 Circuit Main Event and then flat out winning the $15,000 Main Event. Another cash for Song will push him over $10 million in live-tournament earnings — cementing an already epic poker resume."
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/1-Dp0ONUPG.png",
        alt: "Stephen Song"
      },
      {
        type: "heading",
        content: "DAY 2 SEAT DRAW AND CHIP COUNTS"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/2-CDyy49Ne.png",
        alt: "Day 2 Seat Draw"
      },
      {
        type: "paragraph",
        content: "The 32 entrants generated a prize pool of US$640,000, of which five players will take a share. A min-cash will be worth US$60,000 and the eventual winner will take home US$242,000 for their efforts."
      },
      {
        type: "heading",
        content: "TLPT $20,000 8 HANDED PAYOUTS"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/3-CC_WWOpt.png",
        alt: "Payouts Table"
      },
      {
        type: "heading",
        content: "DAY 1 ACTION"
      },
      {
        type: "paragraph",
        content: "Eleven players sat down at the start, and it took less than a level for action-junkie Ivan Zhang to get all in. Unfortunately for Zhag, it was against Song, who had Zhang crushed with aces. Song nearly doubled as a result of the clash and took an early chip lead."
      },
      {
        type: "paragraph",
        content: "Song extended his chip lead after catching a flush to eliminate Dong Chen, but Mendoza began his own ascent after cracking Martin Nielsen's aces with a pair eights."
      },
      {
        type: "paragraph",
        content: "Meanwhile, more notables filed in as the day went on, including Renji Mao, Dominik Nitsche, Bin Leng, Patrik Dernus, and Dan Cates. Of those players, only Nitsche and Cates made it to Day 2."
      },
      {
        type: "paragraph",
        content: "Cates was in usual form, making light-hearted jokes and unafraid to put chips into the middle. He also got off to a hot start by doubling through Nevan Chang after they both rivered trip aces. Cates held the best kicker with Big Slick to leave Chang short and Chang busted shortly after the hand."
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/4-CxmM6pq5.png",
        alt: "Dan Cates Playing"
      },
      {
        type: "paragraph",
        content: "Not long after dinner break, Chen ended up best in a massive pot between her, Song, and Leng wherein they all ended up all-in preflop. Chen held ace-queen against Song's jacks and Leng's ace-nine and ended up flopping an ace to bust Leng and put a sizable dent in Song's stack. However, Song quickly rebounded by knocking out Quan Zhou after spiking a set against him with eights against Zhou's jacks."
      },
      {
        type: "paragraph",
        content: "More hands became preflop shoves as the blinds escalated, and Chen benefitted from this fact after slowplaying aces against Marius Gierse and Christopher Park to vault into a temporary chip lead."
      },
      {
        type: "paragraph",
        content: "Toward the end of the night, Mendoza again cracked aces after making a flush against Ami Barer to surge up the ranks. However, Song wouldn't be denied and took down a few smaller pots to reclaim a slight chip lead before play ended for the night."
      },
      {
        type: "paragraph",
        content: "Day 2 is scheduled to get underway at 1 p.m. on Tuesday and play down to a winner. Play will resume on Level 13, which features blinds of 10,000/15,000 with a 15,000 big blind ante. Levels will continue to last 45 minutes each."
      },
      {
        type: "paragraph",
        content: "With an impending massive money bubble and nearly a quarter million on the line for first, the final 11 players are sure to bring their A-game headed into the finale. Be sure to stick with PokerNews as we bring you all the action leading up to the next TLPT champion!"
      }
    ]
  },
  "is-there-better-poker-tournament-player-stephen-song": {
    heroImage: "/image/news/details-news/new45/1en-C5LWbwPw.jpg",
    sections: [
      {
        type: "heading",
        content: "IS THERE A BETTER POKER TOURNAMENT PLAYER THAN STEPHEN SONG RIGHT NOW?"
      },
      {
        type: "paragraph",
        content: "It was a runaway train that nobody was about to stand in front of on Day 3 of the $15,000 Main Event being hosted by The Lord Poker Tour (TLPT) at the Landing Casino in Jeju Shinhwa World Resort. From a field of 191 total entries, Stephen Song breezed to the $750,000 first-place prize to add another title to his poker resume, which already includes an EPT Main Event, WPT Prime Championship and WSOP bracelet triumph."
      },
      {
        type: "paragraph",
        content: "The payout was the second largest in Song's career and marked his 15th recorded tournament win. His live tournament earnings are now just a hair under $10 million, according to the The Hendon Mob."
      },
      {
        type: "paragraph",
        content: "Making the trip to Jeju, South Korea, was always a priority for Song, and building some momentum going into the WSOP that begins in just over a week will be a welcome sight. A seventh-place finish in the Circuit Main Event for $16,000 was just the tip of the iceberg for Song."
      },
      {
        type: "paragraph",
        content: "Entering the final day of this Super High Roller Series Main Event that boasted a $3,000,000 guaranteed prize pool, Song was looking to better his final table appearance from earlier in the week. Those hopes unfolded in spades as Song bulldozed over his competition en route to a runaway victory, pocketing three-quarters of a million dollars in the process. Throughout the final table, Song made things look very easy while making every correct decision and getting slapped with the deck at the right time."
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/1en-C5LWbwPw.jpg",
        alt: "Stephen Song Champion"
      },
      {
        type: "heading",
        content: "TLPT $15K MAIN EVENT FINAL TABLE RESULTS"
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/2en-D0zzlf8L.jpg",
        alt: "Final Table Results"
      },
      {
        type: "heading",
        content: "DAY 3 ACTION"
      },
      {
        type: "paragraph",
        content: "There were 15 players who returned to their seats at the start of Day 3, all with the hopes of lifting the trophy at the day's end. Marius Gierse entered the day with a commanding lead over the rest of the competition and that lead continued to grow in the early going. There were no real short stacks when play got underway which led to a slow pace of chips being passed around the two tables. The seat finally broke when Jumbo Qu was eliminated with his pocket sevens against Song's pocket kings."
      },
      {
        type: "paragraph",
        content: "Not long after followed the eliminations of Gary Thompson, Martin Sedlak, Mauricio Salazar Sanchez, and Quan Zhou before the first break of the day. Upon returning from that break, Bin Leng managed to double his short stack but then was sent home in 10th place on the very next hand. The final nine players then took a production break and were introduced with smoke and mirrors before the final table got started."
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/3en-CbVcofQ3.jpg",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "The final nine players battled it out for well over an hour before anyone even got a sniff of the payout desk. Despite a massive three-way cooler, no eliminations took place, although, James Mendoza was left with just a single big blind. That didn't deter the eventual runner-up as he managed to double up three consecutive times, which brought him back to the middle of the pack. The first elimination belonged to Haitao Lei, which started a flurry of payouts."
      },
      {
        type: "paragraph",
        content: "Jiaming Zhao held the chip lead at one point on the final day, but it only lasted a matter of hands. Zhao eventually bowed out in eighth place at the hands of Mendoza, who was now in contention for the top stack. After the second break of the day, Song caught the end of the deck and was nearly unbeatable."
      },
      {
        type: "paragraph",
        content: "The last female standing in the competition was Huawei Lin, but her time was limited upon returning to the shortest stack of the seven players remaining. Lin was poised for a double-up to stay alive, but Song managed to spike a pair on the river, which vaulted him into the chip lead. Ivan Zhang, co-founder of the TLPT, was next on the chopping block. A fairly quiet day at the felt by his standards, as Zhang was unable to gain any traction and eventually fell to Song as well."
      },
      {
        type: "paragraph",
        content: "Patrik Demus made the final table at the last minute, but the Czech pro was not as kind to him. Demus managed to stave off elimination multiple times despite the cold deck. An epic fold after flopping two pair against the set of Song allowed Demus to survive a little longer, but eventually his demise came in fifth place. Martin Nielsen was one of the last players to enter the field on Day 2 and proved that a spin-up is always possible by reaching the final table. Laddering all the way up to fourth place for a payout of over $200,000 on just one bullet will go down as a success no matter what."
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/4en-Bu5wljpE.jpg",
        alt: "Champion Celebration"
      },
      {
        type: "paragraph",
        content: "As for the start-of-day chip leader, Gierse struggled for the latter half of the day and was unable to turn things around. There was a brief glimpse of hope for the German man when he nearly doubled up off Song, but the very next hand would see it all come to an end. At first sight, it appeared that Song would end the tournament with a double knockout when he picked up pocket jacks against the ace-king from both Gierse and Mendoza. However, Mendoza managed to find a four-bet and fold after two all-ins in front of him. Gierse wasn't as lucky with his chips in the middle, and some of his outs were already dead."
      },
      {
        type: "paragraph",
        content: "That left Song and Mendoza to battle it out heads-up, with Song holding a massive chip lead. It turned out to be a lot of small-pot poker between the two players to kick things off until Song spiked a full house against the two pair of Mendoza. With just a few big blinds left, all of the chips went in the middle on the next hand. The hot streak continued for Song as he made two pair with some rags and brought an end to the inaugural Main Event of the TLPT."
      }
    ]
  }
};

interface ArticleSection {
  type: "paragraph" | "heading" | "image" | "qa" | "table" | "video";
  content?: string;
  src?: string;
  alt?: string;
  question?: string;
  answer?: string;
  title?: string;
  headers?: string[];
  rows?: string[][];
  totalPrize?: string;
  entries?: string;
  itm?: string;
}

interface ArticleContent {
  heroImage: string;
  sections: ArticleSection[];
}

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getNewsArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const content = articleContent[slug];

  return (
    <div 
      className="min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #001d10, #011008)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f2e29e] mb-6 leading-tight uppercase tracking-wide">
            {article.title}
          </h1>
          <p className="text-[#4ade80]/60 text-sm italic">
            {article.date}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video w-full overflow-hidden mb-10"
        >
          <Image
            src={content?.heroImage || article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Article Content */}
        {content && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            {content.sections.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6 text-base">
                      {section.content}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index} className="text-xl md:text-2xl font-bold text-[#f2e29e] mt-12 mb-6 text-center uppercase tracking-wide">
                      {section.content}
                    </h2>
                  );
                case "image":
                  return (
                    <div key={index} className="relative aspect-video w-full overflow-hidden my-8">
                      <Image
                        src={section.src!}
                        alt={section.alt!}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                case "qa":
                  return (
                    <div key={index} className="mb-6">
                      <p className="text-white font-semibold mb-2">{section.question}</p>
                      <p className="text-gray-300 italic">{section.answer}</p>
                    </div>
                  );
                case "table":
                  return (
                    <div key={index} className="my-8 overflow-x-auto">
                      {/* Table Header Info */}
                      <div className="flex justify-between items-center bg-[#0d2818] p-4 border-b border-[#14532d]">
                        <div className="flex gap-8">
                          <div>
                            <p className="text-gray-400 text-xs">Total Prize</p>
                            <p className="text-white font-bold">{section.totalPrize}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs">Guaranteed</p>
                            <p className="text-white font-bold">{section.totalPrize}</p>
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div>
                            <p className="text-gray-400 text-xs">Entries</p>
                            <p className="text-white font-bold">{section.entries}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs">ITM</p>
                            <p className="text-white font-bold">{section.itm}</p>
                          </div>
                        </div>
                      </div>
                      {/* Table */}
                      <table className="w-full bg-[#0a1f14]">
                        <thead>
                          <tr className="border-b border-[#14532d]">
                            {section.headers?.map((header, i) => (
                              <th key={i} className="text-left p-4 text-gray-400 text-sm font-medium">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.rows?.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-[#14532d]/50 hover:bg-[#0d2818]">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-4 text-white text-sm">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>
        )}

        {/* Back to News Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/news" 
            className="inline-block px-8 py-3 border border-[#f2e29e] text-[#f2e29e] font-bold tracking-widest text-xs hover:bg-[#f2e29e] hover:text-black transition-all uppercase"
          >
            ← Back to News
          </Link>
        </motion.div>

        {/* Related News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#14532d] pt-12"
        >
          <h3 className="text-xl font-bold text-[#f2e29e] mb-8 tracking-wider">RELATED NEWS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.slice(1, 4).map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.slug}`}
                className="group block bg-[#052e16] overflow-hidden hover:border-[#f2e29e]/50 border border-transparent transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-[#4ade80]/60 text-xs mt-2 italic">{news.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
