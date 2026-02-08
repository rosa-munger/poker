"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

// Full article content data
const articleContent: { [key: string]: ArticleContent } = {
  "why-poker-aa-enthusiasts-switching-to-aapoker-2026": {
    heroImage: "/image/news/section-more-information/new23-zF0Rc3Ik.png",
    sections: [
      {
        type: "paragraph",
        content: "In 2026, the online poker landscape is shifting. A significant number of players who identify as 'Poker AA' enthusiasts—those seeking the highest standards of action and authenticity—are migrating to AAPoker. But what is driving this mass exodus? It comes down to trust, technology, and a superior gaming experience. AAPoker has established itself as the new gold standard for fair play and excitement.",
        content_cn: "2026年，在线扑克格局正在发生变化。大量自称为'Poker AA'爱好者的玩家——那些寻求最高标准行动和真实性的玩家——正在向AAPoker迁移。但是是什么推动了这种大规模迁移？归根结底是信任、技术和卓越的游戏体验。AAPoker已确立自己为公平竞争和激情的黄金新标准。",
        content_tw: "2026年，在線撲克格局正在發生變化。大量自稱為'Poker AA'愛好者的玩家——那些尋求最高標準行動和真實性的玩家——正在向AAPoker遷移。但是是什麼推動了這種大規模遷移？歸根結底是信任、技術和卓越的遊戲體驗。AAPoker已確立自己為公平競爭和激情的黃金新標準。"
      },
      {
        type: "heading",
        content: "The 'Poker AA' Standard: Unmatched Security",
        content_cn: "'Poker AA'标准：无与伦比的安全性",
        content_tw: "'Poker AA'標準：無與倫比的安全性"
      },
      {
        type: "image",
        src: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
        alt: "AAPoker Security"
      },
      {
        type: "paragraph",
        content: "For years, 'Poker AA' has been synonymous with premium hands. Now, AAPoker is synonymous with premium security. Utilizing advanced RNG (Random Number Generator) technology certified by international labs, AAPoker ensures that every card dealt is truly random. The platform's 'Poker AA' level anti-cheat systems aggressively detect and ban bots/AI, creating a safe haven for real players.",
        content_cn: "多年来，'Poker AA'一直是优质手牌的代名词。现在，AAPoker是优质安全性的代名词。利用经国际实验室认证的先进RNG（随机数生成器）技术，AAPoker确保发出的每一张牌都是真正随机的。该平台的'Poker AA'级反作弊系统积极检测并封禁机器人/AI，为真实玩家创造了一个避风港。",
        content_tw: "多年來，'Poker AA'一直是優質手牌的代名詞。現在，AAPoker是優質安全性的代名詞。利用經國際實驗室認證的先進RNG（隨機數生成器）技術，AAPoker確保發出的每一張牌都是真正隨機的。該平台的'Poker AA'級反作弊系統積極檢測並封禁機器人/AI，為真實玩家創造了一個避風港。"
      },
      {
        type: "heading",
        content: "A Home for True Poker Lovers",
        content_cn: "真正扑克爱好者的家园",
        content_tw: "真正撲克愛好者的家園"
      },
      {
        type: "paragraph",
        content: "The community on AAPoker is vibrant and diverse. From high-stakes cash games to massive multi-table tournaments (MTTs), there is something for everyone. 'Poker AA' players appreciate the smooth UI/UX designed for both mobile and desktop, allowing for seamless multi-tabling and action-packed sessions without the lag found on older platforms.",
        content_cn: "AAPoker上的社区充满活力且多元化。从高额现金桌到大型多桌锦标赛（MTT），每个人都能找到适合自己的游戏。'Poker AA'玩家通过为移动端和桌面端设计的流畅UI/UX，享受无缝的多桌游戏和充满动作的牌局，没有旧平台上常见的延迟。",
        content_tw: "AAPoker上的社區充滿活力且多元化。從高額現金桌到大型多桌錦標賽（MTT），每個人都能找到適合自己的遊戲。'Poker AA'玩家通過為移動端和桌面端設計的流暢UI/UX，享受無縫的多桌遊戲和充滿動作的牌局，沒有舊平台上常見的延遲。"
      },
      {
        type: "image",
        src: "/image/news/section-more-information/new32-CwPTWq6M.png",
        alt: "AAPoker Community"
      },
      {
        type: "heading",
        content: "Why AAPoker is the Future",
        content_cn: "为什么AAPoker是未来",
        content_tw: "為什麼AAPoker是未來"
      },
      {
        type: "paragraph",
        content: "With exclusive bonuses, a transparent rakeback system, and 24/7 customer support, AAPoker treats every player like a VIP. If you are looking for the true 'Poker AA' experience—where skill is rewarded and the game is pure—it's time to make the switch. Join the revolution today.",
        content_cn: "凭借独家红利、透明的返水系统和24/7客户支持，AAPoker将每一位玩家视为VIP。如果您正在寻找真正的'Poker AA'体验——在这里技术得到回报，游戏纯粹——现在是时候做出改变了。今天就加入这场革命。",
        content_tw: "憑藉獨家紅利、透明的返水系統和24/7客戶支持，AAPoker將每一位玩家視為VIP。如果您正在尋找真正的'Poker AA'體驗——在這裡技術得到回報，遊戲純粹——現在是時候做出改變了。今天就加入這場革命。"
      }
    ]
  },
  "5-pro-tips-dominate-aapoker-cash-games": {
    heroImage: "/image/news/section-more-information/new26-CT8-D1vg.png",
    sections: [
      {
        type: "paragraph",
        content: "Cash games are the bread and butter of many professional poker players. Unlike tournaments, the chips on the table represent real money, and the strategy requires a different approach. Whether you are playing Texas Hold'em or Omaha on AAPoker, mastering these 5 tips will significantly increase your win rate and help you dominate the tables.",
        content_cn: "现金桌是许多职业扑克玩家的主要收入来源。与锦标赛不同，桌上的筹码代表真金白银，因此策略需要不同的方法。无论您是在AAPoker上玩德州扑克还是奥马哈，掌握这5个技巧将显著提高您的胜率，帮助您统治牌桌。",
        content_tw: "現金桌是許多職業撲克玩家的主要收入來源。與錦標賽不同，桌上的籌碼代表真金白銀，因此策略需要不同的方法。無論您是在AAPoker上玩德州撲克還是奧馬哈，掌握這5個技巧將顯著提高您的勝率，幫助您統治牌桌。"
      },
      {
        type: "heading",
        content: "1. Position is Power",
        content_cn: "1. 位置就是力量",
        content_tw: "1. 位置就是力量"
      },
      {
        type: "image",
        src: "/image/news/section-more-information/new21-BzbXwbXk.png",
        alt: "Poker Position Strategy"
      },
      {
        type: "paragraph",
        content: "Position is arguably the most important concept in poker. Being 'in position' (acting last) gives you a massive information advantage. You get to see what your opponents do before you have to make a decision. On AAPoker, try to play more hands from late position (Button, Cutoff) and tighten up your range in early positions. This simple adjustment can immediately boost your profitability.",
        content_cn: "位置可以说是扑克中最重要的概念。处于'有利位置'（最后行动）能给您带来巨大的信息优势。在您必须做出决定之前，您可以看到对手的行动。在AAPoker上，尽量多在后位（按钮位、关煞位）打牌，而在前位收紧您的起手牌范围。这个简单的调整可以立即提升您的盈利能力。",
        content_tw: "位置可以說是撲克中最重要的概念。處於'有利位置'（最後行動）能給您帶來巨大的信息優勢。在您必須做出決定之前，您可以看到對手的行動。在AAPoker上，盡量多在後位（按鈕位、關煞位）打牌，而在前位收緊您的起手牌範圍。這個簡單的調整可以立即提升您的盈利能力。"
      },
      {
        type: "heading",
        content: "2. Aggression Pays Off",
        content_cn: "2. 激进会有回报",
        content_tw: "2. 激進會有回報"
      },
      {
        type: "paragraph",
        content: "Passive play (calling too much) is a recipe for disaster in cash games. Aggressive play (betting and raising) gives you two ways to win: having the best hand at showdown OR forcing your opponent to fold. Don't be afraid to semi-bluff with your draws or raise for value when you have a strong hand. AAPoker rewards calculated aggression.",
        content_cn: "被动打法（跟注太多）在现金桌中是灾难的配方。激进打法（下注和加注）给您两种获胜方式：摊牌时拥有最好的牌，或者迫使对手弃牌。不要害怕用听牌半诈唬，或者在手持强牌时加注以此获取价值。AAPoker奖励经过计算的激进。",
        content_tw: "被動打法（跟注太多）在現金桌中是災難的配方。激進打法（下注和加注）給您兩種獲勝方式：攤牌時擁有最好的牌，或者迫使對手棄牌。不要害怕用聽牌半詐唬，或者在手持強牌時加注以此獲取價值。AAPoker獎勵經過計算的激進。"
      },
      {
        type: "heading",
        content: "3. Master Bankroll Management",
        content_cn: "3. 掌握资金管理",
        content_tw: "3. 掌握資金管理"
      },
      {
        type: "image",
        src: "/image/news/section-more-information/new24-DZWWb0yZ.png",
        alt: "Poker Bankroll Management"
      },
      {
        type: "paragraph",
        content: "Even the best players in the world go through downswings. To survive the variance, you need solid bankroll management. A general rule of thumb is to have at least 20-30 buy-ins for the stake you are playing. If you are playing $1/$2 NLH on AAPoker with a $200 buy-in, you should have at least $4,000-$6,000 dedicated to poker. This ensures you play your best game without fear of going broke.",
        content_cn: "即使是世界上最好的玩家也会经历下风期。为了在波动中生存，您需要稳健的资金管理。一个通用的法则是为您所玩的级别准备至少20-30个买入。如果您在AAPoker上玩$200买入的$1/$2无限注德州扑克，您应该至少有$4,000-$6,000的扑克专用资金。这能确保您发挥最佳水平而不必担心破产。",
        content_tw: "即使是世界上最好的玩家也會經歷下風期。為了在波動中生存，您需要穩健的資金管理。一個通用的法則是為您所玩的級別準備至少20-30個買入。如果您在AAPoker上玩$200買入的$1/$2無限注德州撲克，您應該至少有$4,000-$6,000的撲克專用資金。這能確保您發揮最佳水平而不必擔心破產。"
      },
      {
        type: "heading",
        content: "4. Observe Your Opponents",
        content_cn: "4. 观察您的对手",
        content_tw: "4. 觀察您的對手"
      },
      {
        type: "paragraph",
        content: "Pay attention even when you are not in the hand. Who plays too many hands? Who only raises with the nuts? Who bluffs too much? Categorizing your opponents on AAPoker allows you to exploit their tendencies. If a 'rock' (tight player) raises, you can easily fold your marginal hands. If a 'maniac' (loose-aggressive player) bets, you can call down lighter.",
        content_cn: "即使您没有参与牌局也要注意观察。谁玩的手牌太多？谁只用坚果牌加注？谁诈唬太多？在AAPoker上给对手分类可以让您利用他们的倾向。如果一个'岩石'（紧手玩家）加注，您可以轻松弃掉边缘牌。如果一个'疯子'（松凶玩家）下注，您可以放宽跟注范围。",
        content_tw: "即使您沒有參與牌局也要注意觀察。誰玩的手牌太多？誰只用堅果牌加注？誰詐唬太多？在AAPoker上給對手分類可以讓您利用他們的傾向。如果一個'岩石'（緊手玩家）加注，您可以輕鬆棄掉邊緣牌。如果一個'瘋子'（松兇玩家）下注，您可以放寬跟注範圍。"
      },
      {
        type: "heading",
        content: "5. Emotional Control (Avoid Tilt)",
        content_cn: "5. 情绪控制（避免上头）",
        content_tw: "5. 情緒控制（避免上頭）"
      },
      {
        type: "image",
        src: "/image/news/section-more-information/new38-DmsS5Dqe.png",
        alt: "Poker Mindset"
      },
      {
        type: "paragraph",
        content: "Tilt is the enemy of profit. When you lose a big pot to a bad beat, it's natural to feel angry. However, letting that anger affect your decision-making will only lead to more losses. If you feel yourself tilting on AAPoker, take a break. Step away from the computer or phone, go for a walk, and come back when you are calm and ready to play your A-game again.",
        content_cn: "情绪失控（上头）是盈利的敌人。当您因为运气不好输掉一个大底池时，感到生气是很自然的。然而，让愤怒影响您的决策只会导致更多的损失。如果您在AAPoker上感觉自己上头了，休息一下。离开电脑或手机，去散步，等冷静下来准备好再次发挥最佳水平时再回来。",
        content_tw: "情緒失控（上頭）是盈利的敵人。當您因為運氣不好輸掉一個大底池時，感到生氣是很自然的。然而，讓憤怒影響您的決策只會導致更多的損失。如果您在AAPoker上感覺自己上頭了，休息一下。離開電腦或手機，去散步，等冷靜下來準備好再次發揮最佳水平時再回來。"
      },
      {
        type: "heading",
        content: "Ready to Win on AAPoker?",
        content_cn: "准备好在AAPoker上赢钱了吗？",
        content_tw: "準備好在AAPoker上贏錢了嗎？"
      },
      {
        type: "paragraph",
        content: "By applying these 5 tips—using position, being aggressive, managing your bankroll, observing opponents, and controlling your emotions—you will be well on your way to becoming a crushing player on AAPoker. Download the app today and start your journey!",
        content_cn: "通过应用这5个技巧——利用位置、保持激进、管理资金、观察对手和控制情绪——您将走上成为AAPoker盈利玩家的道路。立即下载APP，开始您的旅程！",
        content_tw: "通過應用這5個技巧——利用位置、保持激進、管理資金、觀察對手和控制情緒——您將走上成為AAPoker盈利玩家的道路。立即下載APP，開始您的旅程！"
      }
    ]
  },
  "tlpt-jeju-2025-main-event-circuit-winner": {
    heroImage: "/image/news/details-news/new1/1-BJRjznbR.png",
    sections: [
      {
        type: "paragraph",
        content: "The inaugural The Lord Poker Tournament in Jeju Island, South Korea has reached the halfway point. The action has been in full swing since May 13 with games continuing through May 22 at the Landing Casino within the Jeju Shinhwa World Resort. With a jaw-dropping USD 8,000,000 guarantee announced, expectedly players flocked in to earn their share. Below are the early highlights.",
        content_cn: "首届Lord扑克锦标赛在韩国济州岛已进行到一半。自5月13日以来，比赛在济州神话世界度假村的Landing Casino火热进行，将持续到5月22日。随着令人惊叹的800万美元保底奖金的公布，选手们蜂拥而至争夺他们的份额。以下是早期亮点。",
        content_tw: "首屆Lord撲克錦標賽在韓國濟州島已進行到一半。自5月13日以來，比賽在濟州神話世界度假村的Landing Casino火熱進行，將持續到5月22日。隨著令人驚嘆的800萬美元保底獎金的公佈，選手們蜂擁而至爭奪他們的份額。以下是早期亮點。"
      },
      {
        type: "heading",
        content: "TLPT JEJU – HALFWAY HIGHLIGHTS",
        content_cn: "TLPT济州 – 半程亮点",
        content_tw: "TLPT濟州 – 半程亮點"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/2-Bismu3rc.png",
        alt: "TLPT Jeju Trophy"
      },
      {
        type: "paragraph",
        content: "The main attraction is currently underway, the USD 3,000,000 guaranteed TLPT Main Event 15K Super High Roller, and expectedly, the field is populated with some of the world's most decorated players. Out of the 115 that signed up at Day 1, only 58 players advanced to Day 2 led by Haohui Ma.",
        content_cn: "主要赛事目前正在进行中，300万美元保底的TLPT主赛事15K超级豪客赛，如预期的那样，场上聚集了一些世界上最优秀的选手。在第一天报名的115人中，只有58名选手晋级第二天，由马浩辉领先。",
        content_tw: "主要賽事目前正在進行中，300萬美元保底的TLPT主賽事15K超級豪客賽，如預期的那樣，場上聚集了一些世界上最優秀的選手。在第一天報名的115人中，只有58名選手晉級第二天，由馬浩輝領先。"
      },
      {
        type: "paragraph",
        content: "Others in the mix were TLPT Ambassadors Quan Zhou and Dan Cates, Nguyen Quang Minh, Amichai Barer, Sean Ooi, Renji Mao, James Mendoza, Dominik Nitsche, and Lei Yu. Registration is still open on May 17 with buy-in at USD 15,000. Read up on the action via the Live Updates.",
        content_cn: "其他参赛者包括TLPT大使周全和Dan Cates、Nguyen Quang Minh、Amichai Barer、Sean Ooi、毛仁基、James Mendoza、Dominik Nitsche和于磊。5月17日报名仍然开放，买入费用为15,000美元。通过实时更新了解比赛动态。",
        content_tw: "其他參賽者包括TLPT大使周全和Dan Cates、Nguyen Quang Minh、Amichai Barer、Sean Ooi、毛仁基、James Mendoza、Dominik Nitsche和於磊。5月17日報名仍然開放，買入費用為15,000美元。通過實時更新了解比賽動態。"
      },
      {
        type: "heading",
        content: "#2 MAIN EVENT (CS) - 8 HANDED",
        content_cn: "#2 主赛事 (CS) - 8人桌",
        content_tw: "#2 主賽事 (CS) - 8人桌"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/3-BxpfpXC6.png",
        alt: "Main Event Champion Weizheng Zhong"
      },
      {
        type: "heading",
        content: "INTERVIEW WITH WEIZHENG ZHONG - INAUGURAL TLPT MAIN EVENT CHAMPION",
        content_cn: "专访钟伟正 - 首届TLPT主赛事冠军",
        content_tw: "專訪鍾偉正 - 首屆TLPT主賽事冠軍"
      },
      {
        type: "paragraph",
        content: "The $700,000 guaranteed inaugural The Lord Poker Tournament Circuit Main Event crowned Weizheng Zhong capturing his first poker trophy and $120,000, to more than double his all-time live earnings.",
        content_cn: "70万美元保底的首届Lord扑克锦标赛巡回赛主赛事冠军由钟伟正获得，这是他的第一个扑克奖杯，奖金12万美元，使他的职业生涯现场收入翻了一番多。",
        content_tw: "70萬美元保底的首屆Lord撲克錦標賽巡迴賽主賽事冠軍由鍾偉正獲得，這是他的第一個撲克獎杯，獎金12萬美元，使他的職業生涯現場收入翻了一番多。"
      },
      {
        type: "qa",
        question: "Congratulations on winning the biggest event of the series so far! How do you feel?",
        question_cn: "恭喜你赢得了迄今为止系列赛中最大的赛事！你感觉如何？",
        question_tw: "恭喜你贏得了迄今為止系列賽中最大的賽事！你感覺如何？",
        answer: "I feel very happy and very lucky to win this.",
        answer_cn: "我感到非常高兴，能赢得这个比赛非常幸运。",
        answer_tw: "我感到非常高興，能贏得這個比賽非常幸運。"
      },
      {
        type: "qa",
        question: "This was quite the marathon heads up, how did you adjust to your opponent?",
        question_cn: "这是一场马拉松式的单挑，你是如何调整应对对手的？",
        question_tw: "這是一場馬拉松式的單挑，你是如何調整應對對手的？",
        answer: "So basically I tried to play as much as possible against him, but still I folded when I had KQ off suit against him. If I didn't get that cooler hand I'd probably lose the heads up.",
        answer_cn: "基本上我尽可能多地与他对抗，但当我有KQ杂色时还是弃牌了。如果没有那手冷牌我可能会输掉单挑。",
        answer_tw: "基本上我盡可能多地與他對抗，但當我有KQ雜色時還是棄牌了。如果沒有那手冷牌我可能會輸掉單挑。"
      },
      {
        type: "qa",
        question: "Starting day 2 with only 15BB how has the journey been to become champion?",
        question_cn: "第二天开始时只有15BB，成为冠军的旅程是怎样的？",
        question_tw: "第二天開始時只有15BB，成為冠軍的旅程是怎樣的？",
        answer: "It was pretty sweet honestly, on Day 1, I almost bubbled, before late reg I only had 3 or 4 bb left. Then I rounded up to 112K in one level, then eventually I bagged around 70K. You know the first two level of Day 2, I actually didn't get any spots so I was down to like 3 bb, then when I moved and got pretty good spots and cooler get paid.",
        answer_cn: "说实话真的很甜蜜，第一天我差点泡沫出局，晚报名前我只剩3或4bb。然后在一个级别内我涨到了112K，最终打包了大约70K。你知道第二天的前两个级别，我实际上没有任何机会，所以我降到了大约3bb，然后当我换位后得到了很好的位置，冷牌也得到了回报。",
        answer_tw: "說實話真的很甜蜜，第一天我差點泡沫出局，晚報名前我只剩3或4bb。然後在一個級別內我漲到了112K，最終打包了大約70K。你知道第二天的前兩個級別，我實際上沒有任何機會，所以我降到了大約3bb，然後當我換位後得到了很好的位置，冷牌也得到了回報。"
      },
      {
        type: "qa",
        question: "Who was your toughest opponent in the final table and why?",
        question_cn: "决赛桌上谁是你最难对付的对手，为什么？",
        question_tw: "決賽桌上誰是你最難對付的對手，為什麼？",
        answer: "It was Stephen Song because he is the most experienced player, but I didn't play many pots against him, but at last five players left I think it was William Jia because he was the better opponent after Stephen busted.",
        answer_cn: "是Stephen Song，因为他是最有经验的选手，但我没有和他打太多底池。但在最后五人时我认为是William Jia，因为在Stephen出局后他是更好的对手。",
        answer_tw: "是Stephen Song，因為他是最有經驗的選手，但我沒有和他打太多底池。但在最後五人時我認為是William Jia，因為在Stephen出局後他是更好的對手。"
      },
      {
        type: "qa",
        question: "How did you get into poker?",
        question_cn: "你是怎么开始玩扑克的？",
        question_tw: "你是怎麼開始玩撲克的？",
        answer: "I started playing poker when I was in college during the pandemic. My first time playing poker was in like 2019 and I started to play a lot during the first year of pandemic so 2020.",
        answer_cn: "我在大学期间疫情时开始玩扑克。我第一次玩扑克大约是2019年，然后在疫情第一年也就是2020年开始大量玩。",
        answer_tw: "我在大學期間疫情時開始玩撲克。我第一次玩撲克大約是2019年，然後在疫情第一年也就是2020年開始大量玩。"
      },
      {
        type: "qa",
        question: "Is it just a hobby or you play poker for a living?",
        question_cn: "这只是爱好还是你靠扑克谋生？",
        question_tw: "這只是愛好還是你靠撲克謀生？",
        answer: "Right now I play cards and crypto stuff.",
        answer_cn: "目前我玩牌和做加密货币相关的事情。",
        answer_tw: "目前我玩牌和做加密貨幣相關的事情。"
      },
      {
        type: "qa",
        question: "How will your poker career change now that you have this massive win?",
        question_cn: "赢得这场大胜后，你的扑克生涯会有什么变化？",
        question_tw: "贏得這場大勝後，你的撲克生涯會有什麼變化？",
        answer: "I mean it's not really like life changing money for me, but definitely I can travel more now.",
        answer_cn: "对我来说这并不是改变人生的钱，但我现在肯定可以更多地旅行了。",
        answer_tw: "對我來說這並不是改變人生的錢，但我現在肯定可以更多地旅行了。"
      },
      {
        type: "qa",
        question: "Will you try your luck in one of the high rollers in the coming days?",
        question_cn: "你会在接下来的几天里参加高额赛吗？",
        question_tw: "你會在接下來的幾天裡參加高額賽嗎？",
        answer: "My initial plan was not playing, but honestly I don't know now (laughs)",
        answer_cn: "我最初的计划是不参加，但老实说我现在不确定了（笑）",
        answer_tw: "我最初的計劃是不參加，但老實說我現在不確定了（笑）"
      },
      {
        type: "qa",
        question: "How did you find out about The Lord Poker Tournament and what made you play?",
        question_cn: "你是怎么知道Lord扑克锦标赛的，是什么让你决定参加？",
        question_tw: "你是怎麼知道Lord撲克錦標賽的，是什麼讓你決定參加？",
        answer: "My friend invited me to come here (Zhou Yinan) so he said there was a freeroll in Jeju and I was traveling to China so said sure yeah.",
        answer_cn: "我的朋友邀请我来这里（周一男），他说济州有免费赛，我正好在去中国旅行，所以就说好啊。",
        answer_tw: "我的朋友邀請我來這裡（周一男），他說濟州有免費賽，我正好在去中國旅行，所以就說好啊。"
      },
      {
        type: "paragraph",
        content: "Read up on the action via the Live Updates.",
        content_cn: "通过实时更新了解比赛动态。",
        content_tw: "通過實時更新了解比賽動態。"
      },
      // {
      //   type: "table",
      //   title: "Main Event Results",
      //   headers: ["#", "Payout", "Player"],
      //   rows: [
      //     ["1", "$124,000", "Weizheng Zhong 🇨🇳"],
      //     ["2", "$67,000", "Xuecong Wu 🇨🇳"],
      //     ["3", "$48,500", "William Jia 🇦🇺"],
      //     ["4", "$40,300", "Fangzhou Zhu 🇨🇳"],
      //     ["5", "$29,500", "Yiyu Zhou 🇨🇳"],
      //     ["6", "$22,500", "Jiaming Zhao 🇨🇳"],
      //     ["7", "$17,500", "Stephen Song 🇺🇸"],
      //     ["8", "$16,500", "Jin Zeng 🇨🇳"],
      //     ["9", "$13,700", "Huan Wen 🇨🇳"]
      //   ],
      //   totalPrize: "$700,000",
      //   entries: "505",
      //   itm: "60"
      // },
      {
        type: "image",
        src: "/image/news/details-news/new1/5-Cekw5IQr.png",
        alt: "Champion celebration"
      },
      {
        type: "paragraph",
        content: "The first event of the inaugural TLPT Jeju blasted in as players poured for the $600,000 guaranteed Freezeout Freeroll. To enter players had to obtain entry via the AAPoker app. A total of 446 players showed up with the top 75 claiming a portion of the prize pool. In the end, it was Xiaqing Ji who turned his freeroll ticket to a whopping $120,000!",
        content_cn: "首届TLPT济州的第一场赛事火爆开场，选手们涌入60万美元保底的冻结免费赛。参赛者必须通过AAPoker应用程序获得参赛资格。共有446名选手参赛，前75名瓜分奖池。最终，Ji Xiaqing将他的免费赛门票变成了惊人的12万美元！",
        content_tw: "首屆TLPT濟州的第一場賽事火爆開場，選手們湧入60萬美元保底的凍結免費賽。參賽者必須通過AAPoker應用程式獲得參賽資格。共有446名選手參賽，前75名瓜分獎池。最終，Ji Xiaqing將他的免費賽門票變成了驚人的12萬美元！"
      },
      {
        type: "heading",
        content: "Interview With the Champion",
        content_cn: "冠军专访",
        content_tw: "冠軍專訪"
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
        question_cn: "你在战略上如何处理这场锦标赛？（例如，你是打广泛的牌型范围，专注于翻牌后的打法，还是试图尽早获得良好的筹码量？）",
        question_tw: "你在戰略上如何處理這場錦標賽？（例如，你是打廣泛的牌型範圍，專注於翻牌後的打法，還是試圖儘早獲得良好的籌碼量？）",
        answer: "First of all I read all the body movement of the player in my table so I know how will I adjust my play style.",
        answer_cn: "首先，我会观察牌桌上所有选手的肢体动作，这样我就知道如何调整我的打法风格。",
        answer_tw: "首先，我會觀察牌桌上所有選手的肢體動作，這樣我就知道如何調整我的打法風格。"
      },
      {
        type: "qa",
        question: "How do you handle the pressure of a big field?(Explore their ability to stay calm and make rational decisions despite the large number of players)",
        answer: "There is still some pressure on the big field, because some time ago compare the low period the grades are not very good."
      },
      {
        type: "qa",
        question: "What is your poker history? You took a long break from playing poker after 2020",
        question_cn: "你的扑克历史是什么？你在2020年后休息了很长时间",
        question_tw: "你的撲克歷史是什麼？你在2020年後休息了很長時間",
        answer: "My Buglix probably started in 2017, I have also been all over the world, Including EPT the Australian Millions will participate there will be participation in domestic Asian competitions. Then give me more after winning the championship this time. It has greatly increased my confidence I hope that on the way to the next game you can also get better results.",
        answer_cn: "我的扑克生涯大概从2017年开始，我也去过世界各地，包括EPT、澳洲百万赛，也参加过国内的亚洲赛事。这次夺冠后给了我更多信心，我希望在接下来的比赛中也能取得更好的成绩。",
        answer_tw: "我的撲克生涯大概從2017年開始，我也去過世界各地，包括EPT、澳洲百萬賽，也參加過國內的亞洲賽事。這次奪冠後給了我更多信心，我希望在接下來的比賽中也能取得更好的成績。"
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
        content: "#3 AAPOKER DEEP STACK (CS) - 8 HANDED - UNLIMITED RE-BUY ($1,000)",
        content_cn: "#3 AAPOKER深筹赛 (CS) - 8人桌 - 无限重买 ($1,000)",
        content_tw: "#3 AAPOKER深籌賽 (CS) - 8人桌 - 無限重買 ($1,000)"
      },
      {
        type: "image",
        src: "/image/news/details-news/new1/6-AyEJOqf2.png",
        alt: "Deep Stack Winner"
      },
      {
        type: "paragraph",
        content: "The $1,000 buy-in AAPoker Deep stack event pulled in a healthy 202 entries to boost the prize pool to just over the guarantee for $202,000, shared among the top 26 places. Leading up to that moment, the bubble burst on Kanghao Yang with A♦ K♦ outdrawn by Lei Yu's Q♦ J♣.",
        content_cn: "1,000美元买入的AAPoker深筹赛吸引了202人次参赛，将奖池提升至略高于保底的202,000美元，由前26名分享。在此之前，泡沫在Kanghao Yang身上破裂，他的A♦ K♦被Lei Yu的Q♦ J♣击败。",
        content_tw: "1,000美元買入的AAPoker深籌賽吸引了202人次參賽，將獎池提升至略高於保底的202,000美元，由前26名分享。在此之前，泡沫在Kanghao Yang身上破裂，他的A♦ K♦被Lei Yu的Q♦ J♣擊敗。"
      },
      {
        type: "paragraph",
        content: "With the money certain, it was a race to the final table. Notables Patrik Demus (20th) and Dong Chen (15th) were among the fallen while Yu missed the final 9 by one spot. With nearly every player decorated in achievements, it was anyone's game. TLPT's Ivan Zhang fell in 8th place, TLPT Ambassador Quan Zhou was out next in 7th falling to Nevan Chang with A♦ A♠ dominating A♥ K♥.",
        content_cn: "确定进钱圈后，就是冲向决赛桌的竞赛。知名选手Patrik Demus（第20名）和陈东（第15名）都出局了，而Yu差一名未能进入最后9人。几乎每位选手都有辉煌成就，这是任何人的比赛。TLPT的Ivan Zhang在第8名出局，TLPT大使周全接下来在第7名出局，被Nevan Chang的A♦ A♠击败，对手持有A♥ K♥。",
        content_tw: "確定進錢圈後，就是衝向決賽桌的競賽。知名選手Patrik Demus（第20名）和陳東（第15名）都出局了，而Yu差一名未能進入最後9人。幾乎每位選手都有輝煌成就，這是任何人的比賽。TLPT的Ivan Zhang在第8名出局，TLPT大使周全接下來在第7名出局，被Nevan Chang的A♦ A♠擊敗，對手持有A♥ K♥。"
      },
      {
        type: "paragraph",
        content: "At six remaining, poker couple Chang and Hua Wei Lin dominated the action. Lin built a wide lead after eliminating Zhengfang Huang in 6th place with pocket Jacks over pocket Fives however it didn't last as Chang overtook by railing Yongwei Mo in 4th place.",
        content_cn: "剩下六人时，扑克情侣档Chang和林华伟主导了比赛。林华伟在第6名用口袋JJ击败黄正方的口袋55后建立了巨大领先优势，但这并没有持续太久，Chang在第4名淘汰了莫永伟后反超。",
        content_tw: "剩下六人時，撲克情侶檔Chang和林華偉主導了比賽。林華偉在第6名用口袋JJ擊敗黃正方的口袋55後建立了巨大領先優勢，但這並沒有持續太久，Chang在第4名淘汰了莫永偉後反超。"
      },
      {
        type: "paragraph",
        content: "Down to three-handed Yanghao Fu went on a heater to see him surge to the top then took down Lin who was behind with Q♥ 6♥ at the flop K♥ Q♦ 3♣ against Fu's K♣ 3♠ and didn't improve on the turn J♥ and river A♠. It was a tight race for the trophy. Chang scored a decisive double up with A♦ 7♠ over A♠ 6♥ leaving Fu with crumbs. It quickly wrapped up with Chang sealing the victory sending Fu to settle for a runner-up finish.",
        content_cn: "剩下三人时，傅杨浩开始发威冲到榜首，然后击败了林华伟，林在翻牌K♥ Q♦ 3♣时持有Q♥ 6♥落后于傅的K♣ 3♠，转牌J♥和河牌A♠都没有改善。这是一场激烈的冠军争夺战。Chang用A♦ 7♠对A♠ 6♥完成了决定性的翻倍，让傅只剩下少量筹码。比赛很快结束，Chang封印胜利，傅获得亚军。",
        content_tw: "剩下三人時，傅楊浩開始發威衝到榜首，然後擊敗了林華偉，林在翻牌K♥ Q♦ 3♣時持有Q♥ 6♥落後於傅的K♣ 3♠，轉牌J♥和河牌A♠都沒有改善。這是一場激烈的冠軍爭奪戰。Chang用A♦ 7♠對A♠ 6♥完成了決定性的翻倍，讓傅只剩下少量籌碼。比賽很快結束，Chang封印勝利，傅獲得亞軍。"
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
        content: "Sometimes, the cards just fall your way in both poker and in life.",
        content_cn: "有时候，无论是在扑克中还是生活中，牌运就是站在你这边。",
        content_tw: "有時候，無論是在撲克中還是生活中，牌運就是站在你這邊。"
      },
      {
        type: "paragraph",
        content: "Weizheng Zhong can typically be found grinding poker tournaments in America, but a spur-of-the-moment invitation changed everything. While travelling through China, a friend reached out and suggested he swing by Jeju. Zhong took the offer, hopped into the TLPT Circuit Main Event, and three days later, that impromptu decision paid off in spades as he was crowned the inaugural champion.",
        content_cn: "钟伟正通常在美国打扑克锦标赛，但一个临时邀请改变了一切。在中国旅行期间，一位朋友联系他建议他去济州。钟接受了邀请，参加了TLPT巡回赛主赛事，三天后，这个临时决定得到了丰厚回报，他被加冕为首届冠军。",
        content_tw: "鍾偉正通常在美國打撲克錦標賽，但一個臨時邀請改變了一切。在中國旅行期間，一位朋友聯繫他建議他去濟州。鍾接受了邀請，參加了TLPT巡迴賽主賽事，三天後，這個臨時決定得到了豐厚回報，他被加冕為首屆冠軍。"
      },
      {
        type: "paragraph",
        content: "For the victory, Zhou takes home the Circuit Main Event trophy and the US$120,000 first-place prize, which was the biggest slice of the $700,000 prize pool.",
        content_cn: "凭借这场胜利，周带走了巡回赛主赛事奖杯和12万美元的冠军奖金，这是70万美元奖池中最大的一份。",
        content_tw: "憑藉這場勝利，周帶走了巡迴賽主賽事獎杯和12萬美元的冠軍獎金，這是70萬美元獎池中最大的一份。"
      },
      {
        type: "paragraph",
        content: "\"It's pretty sweet,\" Zhou said shortly after winning the event. \"It's my first time playing in Asia. I'm feeling very lucky.\"",
        content_cn: "\"感觉真的很棒，\"周在赢得比赛后不久说道。\"这是我第一次在亚洲比赛。我感到非常幸运。\"",
        content_tw: "\"感覺真的很棒，\"周在贏得比賽後不久說道。\"這是我第一次在亞洲比賽。我感到非常幸運。\""
      },
      {
        type: "paragraph",
        content: "Zhong's impressive victory came after navigating a final table that included poker phenom Stephen Song and a seemingly unstoppable Xuecong Wu, who cruised through the final table after winning nearly every meaningful pot he played. At one point, Wu held an over 2:1 chip lead over Zhong during their heads-up battle, but Zhong stuck to his game plan and was able to edge out the win.",
        content_cn: "钟的精彩胜利是在克服了包括扑克天才Stephen Song和看似不可阻挡的吴学聪在内的决赛桌后取得的，吴学聪在赢得几乎每一个重要底池后轻松晋级决赛桌。在单挑战中的某一时刻，吴对钟保持着超过2:1的筹码领先优势，但钟坚持自己的比赛计划，最终险胜。",
        content_tw: "鍾的精彩勝利是在克服了包括撲克天才Stephen Song和看似不可阻擋的吳學聰在內的決賽桌後取得的，吳學聰在贏得幾乎每一個重要底池後輕鬆晉級決賽桌。在單挑戰中的某一時刻，吳對鍾保持著超過2:1的籌碼領先優勢，但鍾堅持自己的比賽計劃，最終險勝。"
      },
      {
        type: "paragraph",
        content: "\"My strategy [against Wu] was to play as much post-flop as I could, so I almost never raised [preflop],\" Zhong explained. \"I felt I had a little bit of a post-flop edge, and I was able to pull it off in the end.\"",
        content_cn: "\"我对付吴的策略是尽可能多地打翻牌后，所以我几乎从不加注（翻牌前），\"钟解释道。\"我觉得我在翻牌后有一点优势，最终我成功做到了。\"",
        content_tw: "\"我對付吳的策略是盡可能多地打翻牌後，所以我幾乎從不加注（翻牌前），\"鍾解釋道。\"我覺得我在翻牌後有一點優勢，最終我成功做到了。\""
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/2en-C_6oGvgc.jpg",
        alt: "Final Table Results"
      },
      {
        type: "heading",
        content: "FINAL TABLE ACTION",
        content_cn: "决赛桌战况",
        content_tw: "決賽桌戰況"
      },
      {
        type: "paragraph",
        content: "Once players were seated at the final table, an explosive start at the Landing Casino inside the extravagant Shinhwa World Hotel Jeju saw four players eliminated within the first two levels of play.",
        content_cn: "一旦选手们入座决赛桌，在奢华的济州神话世界酒店Landing Casino内的爆炸性开局中，四名选手在前两个级别内被淘汰。",
        content_tw: "一旦選手們入座決賽桌，在奢華的濟州神話世界酒店Landing Casino內的爆炸性開局中，四名選手在前兩個級別內被淘汰。"
      },
      {
        type: "paragraph",
        content: "On the very first hand, Huan Wen took his chances with ace-jack sitting on just seven big blinds and was sent out in ninth after running into Zhong's pocket jacks. Shortly after, Jin Zeng followed Wen out the door after shoving with a dominated ace against Jiaming Zhao's ace-king.",
        content_cn: "在第一手牌中，文欢只有7个大盲注时用AJ冒险，但撞上了钟的口袋J对，最终第九名出局。不久后，曾进用被压制的A全推，对上赵家明的AK后紧随文出局。",
        content_tw: "在第一手牌中，文歡只有7個大盲注時用AJ冒險，但撞上了鍾的口袋J對，最終第九名出局。不久後，曾進用被壓制的A全推，對上趙家明的AK後緊隨文出局。"
      },
      {
        type: "paragraph",
        content: "In a shocking turn of events, Song, who entered the final table second in chips, had his aces cracked by Wu in a massive pot to get sent out in an unexpected seventh.",
        content_cn: "令人震惊的是，以筹码第二名进入决赛桌的Song，他的AA被吴在一个大底池中击败，意外地在第七名出局。",
        content_tw: "令人震驚的是，以籌碼第二名進入決賽桌的Song，他的AA被吳在一個大底池中擊敗，意外地在第七名出局。"
      },
      {
        type: "paragraph",
        content: "The run-good for Wu kept coming as he scored another knockout against Zhao just a few hands later to soar into the five-handed chip lead.",
        content_cn: "吴的好运持续不断，几手牌后他又淘汰了赵，飙升至五人时的筹码领先位置。",
        content_tw: "吳的好運持續不斷，幾手牌後他又淘汰了趙，飆升至五人時的籌碼領先位置。"
      },
      {
        type: "paragraph",
        content: "Play became notably more reserved at that point as the short-stacked players began making snug folds, seemingly trying to out-ladder each other for pay jumps. Meanwhile, Wu continued making hands and chipping up, accumulating nearly half the chips in play with five remaining.",
        content_cn: "此时比赛变得明显更加保守，短筹码选手开始紧缩弃牌，似乎在试图互相比谁晋级更高以获得更多奖金。与此同时，吴继续成牌并积累筹码，在剩余五人时已积累了场上近一半的筹码。",
        content_tw: "此時比賽變得明顯更加保守，短籌碼選手開始緊縮棄牌，似乎在試圖互相比誰晉級更高以獲得更多獎金。與此同時，吳繼續成牌並積累籌碼，在剩餘五人時已積累了場上近一半的籌碼。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/3en-qmDTC21h.jpg",
        alt: "Final Table Action"
      },
      {
        type: "paragraph",
        content: "All eyes shifted to William Jia, who had slipped into short stack by a large margin. However, a pair of fortunate double-ups gave Jia new life and left the last lady standing — Yiyu Zhou — as the short stack. With no room left to manoeuvre, Zhou took a stand with jack-ten suited after being shoved into by Zhong, but Zhong held up with king-high to send Zhou out in fifth.",
        content_cn: "所有目光转向了筹码大幅落后的William Jia。然而，两次幸运的翻倍让Jia重获新生，而最后一位女选手周一雨成为了短筹码。没有回旋余地的周，在被钟全推后用JT同花站出来，但钟用K高牌撑住，将周淘汰在第五名。",
        content_tw: "所有目光轉向了籌碼大幅落後的William Jia。然而，兩次幸運的翻倍讓Jia重獲新生，而最後一位女選手周一雨成為了短籌碼。沒有迴旋餘地的周，在被鍾全推後用JT同花站出來，但鍾用K高牌撐住，將周淘汰在第五名。"
      },
      {
        type: "paragraph",
        content: "A relatively quiet Fangzhou Zhu managed to pick up kings and score a big double through Wu, only to have Jia double through Zhu twice in quick succession to leave him on the short stack. Wu then paid Zhu back by eliminating him with Big Slick in an all-in preflop confrontation.",
        content_cn: "相对安静的朱方舟拿到KK通过吴大幅翻倍，但Jia连续两次通过朱翻倍，使朱成为短筹码。随后吴用AK在翻牌前全压对决中淘汰了朱作为回报。",
        content_tw: "相對安靜的朱方舟拿到KK通過吳大幅翻倍，但Jia連續兩次通過朱翻倍，使朱成為短籌碼。隨後吳用AK在翻牌前全壓對決中淘汰了朱作為回報。"
      },
      {
        type: "paragraph",
        content: "Jia's string of double-ups finally came to an end after he shoved with jack-seven into Wu's ace-seven and failed to get lucky, setting up a finale between Wu and Zhong.",
        content_cn: "Jia的连续翻倍终于结束了，他用J7全推撞上了吴的A7，未能逆转，为吴和钟之间的决赛做好了铺垫。",
        content_tw: "Jia的連續翻倍終於結束了，他用J7全推撞上了吳的A7，未能逆轉，為吳和鍾之間的決賽做好了鋪墊。"
      },
      {
        type: "heading",
        content: "HEADS-UP ACTION",
        content_cn: "单挑战况",
        content_tw: "單挑戰況"
      },
      {
        type: "image",
        src: "/image/news/details-news/new2/4en-Bo8DQrzP.jpg",
        alt: "Heads-up Battle"
      },
      {
        type: "paragraph",
        content: "The heads-up match quickly became a back-and-forth battle, with the chip lead exchanging hands on several occasions. Neither player was interested in raising preflop, which led to an abundance of post-flop action that initially favored Wu. However, Zhong clawed into the lead in a pivotal hand wherein Zhong flopped two pair against the open-ended straight draw of Wu. Zhong called a couple of semi-bluffs from Wu, and then Wu paid off a hefty bet from Zhong after making top pair on the river.",
        content_cn: "单挑战很快变成了一场来回拉锯战，筹码领先多次易手。两位选手都不热衷于翻牌前加注，这导致了大量的翻牌后行动，最初有利于吴。然而，钟在一手关键牌中重新领先，他翻牌中了两对，对抗吴的两头顺子听牌。钟跟注了吴的几次半诈唬，然后吴在河牌成了顶对后支付了钟的大注。",
        content_tw: "單挑戰很快變成了一場來回拉鋸戰，籌碼領先多次易手。兩位選手都不熱衷於翻牌前加注，這導致了大量的翻牌後行動，最初有利於吳。然而，鍾在一手關鍵牌中重新領先，他翻牌中了兩對，對抗吳的兩頭順子聽牌。鍾跟注了吳的幾次半詐唬，然後吳在河牌成了頂對後支付了鍾的大注。"
      },
      {
        type: "paragraph",
        content: "A few hands later, Zhong found himself on the brink of victory after getting Wu all in holding king-queen against Wu's pocket fours. Zhong flopped a king to leave Wu drawing to two outs, but Wu ended up turning a set to get back into the match.",
        content_cn: "几手牌后，钟在用KQ让吴全压对抗吴的口袋4后接近胜利。钟在翻牌中了K，使吴只有两张出路，但吴最终在转牌成了三条重新回到比赛中。",
        content_tw: "幾手牌後，鍾在用KQ讓吳全壓對抗吳的口袋4後接近勝利。鍾在翻牌中了K，使吳只有兩張出路，但吳最終在轉牌成了三條重新回到比賽中。"
      },
      {
        type: "paragraph",
        content: "Zhong persevered right back, however, after a brutal cooler left both players with two-card straights. Zhong held the higher straight and doubled through Wu.",
        content_cn: "然而，钟很快反击回来，在一个残酷的冷牌后，两位选手都有两张牌的顺子。钟持有更高的顺子，通过吴翻倍。",
        content_tw: "然而，鍾很快反擊回來，在一個殘酷的冷牌後，兩位選手都有兩張牌的順子。鍾持有更高的順子，通過吳翻倍。"
      },
      {
        type: "paragraph",
        content: "Just a few hands later, Wu moved all in with a king-high hand, and Zhong snap-called with an ace and the chip lead. The board ran out clean, and with that, Zhong emerged victorious as the inaugural TLPT Circuit Main Event champion following a roller-coaster heads-up duel.",
        content_cn: "几手牌后，吴用K高牌全压，钟用A秒跟并取得筹码领先。公共牌没有帮助吴，就这样，钟在过山车般的单挑决斗后成为首届TLPT巡回赛主赛事冠军。",
        content_tw: "幾手牌後，吳用K高牌全壓，鍾用A秒跟並取得籌碼領先。公共牌沒有幫助吳，就這樣，鍾在過山車般的單挑決鬥後成為首屆TLPT巡迴賽主賽事冠軍。"
      }
    ]
  },
  "poker-player-turned-50-into-100000": {
    heroImage: "/image/news/details-news/new3/1en-BsYNECZQ.jpg",
    sections: [
      {
        type: "paragraph",
        content: "To run up a bankroll from a small investment is the dream of every poker player, and few can claim to have turned $0 into six figures in two days — but that's exactly what Xiaqing Ji did after overcoming a 446-player field in the TLPT Opening Event. Ji booked his place in the tournament by qualifying online, and for the victory, he claimed US$100,000, which represented the lion's share of the US$600,000 freeroll.",
        content_cn: "从小额投资积累资金是每个扑克玩家的梦想，很少有人能声称在两天内将0美元变成六位数——但这正是季夏青在TLPT开幕赛中击败446名选手后所做到的。季通过在线资格赛获得了锦标赛席位，凭借这场胜利，他获得了10万美元，这是60万美元免费赛奖池中的最大份额。",
        content_tw: "從小額投資積累資金是每個撲克玩家的夢想，很少有人能聲稱在兩天內將0美元變成六位數——但這正是季夏青在TLPT開幕賽中擊敗446名選手後所做到的。季通過在線資格賽獲得了錦標賽席位，憑藉這場勝利，他獲得了10萬美元，這是60萬美元免費賽獎池中的最大份額。"
      },
      {
        type: "paragraph",
        content: "The inaugural event played out at breakneck speed inside the luxurious Landing Casino at Shinhwa World Hotel Jeju, and the turbo structure seemed to suit Ji perfectly. He was aggressive when it mattered most, unafraid to put chips in the middle — and even triple-barreling with just five-high.",
        content_cn: "首届赛事在济州神话世界酒店奢华的Landing Casino内以极快的速度进行，快速赛制似乎非常适合季。他在最关键的时刻非常激进，毫不畏惧地将筹码推入中间——甚至用仅有5高牌就三连注。",
        content_tw: "首屆賽事在濟州神話世界酒店奢華的Landing Casino內以極快的速度進行，快速賽制似乎非常適合季。他在最關鍵的時刻非常激進，毫不畏懼地將籌碼推入中間——甚至用僅有5高牌就三連注。"
      },
      {
        type: "paragraph",
        content: "Ji came into the final table as chip leader, and although he faced a few setbacks along the way, he consistently found ways to regain control. Ji's persistence paid off as he claimed the trophy and etched his name in the history books as the first-ever TLPT champion.",
        content_cn: "季以筹码领先者的身份进入决赛桌，尽管途中遇到了一些挫折，他始终能找到重新掌控的方法。季的坚持得到了回报，他获得了奖杯，并将自己的名字载入史册，成为首位TLPT冠军。",
        content_tw: "季以籌碼領先者的身份進入決賽桌，儘管途中遇到了一些挫折，他始終能找到重新掌控的方法。季的堅持得到了回報，他獲得了獎杯，並將自己的名字載入史冊，成為首位TLPT冠軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new3/2en-CQH2EGVS.jpg",
        alt: "TLPT Opening Event Final Table Results"
      },
      {
        type: "heading",
        content: "WINNER'S REACTION",
        content_cn: "冠军感言",
        content_tw: "冠軍感言"
      },
      {
        type: "paragraph",
        content: "Following the win, Ji explained how important the win was to him following a slump in results.",
        content_cn: "获胜后，季解释了这场胜利对他有多重要，特别是在成绩低迷之后。",
        content_tw: "獲勝後，季解釋了這場勝利對他有多重要，特別是在成績低迷之後。"
      },
      {
        type: "paragraph",
        content: "\"I feel more confident about No-Limit tournaments after this win,\" Jin said through the use of a translator. \"I played the Red Dragon series for about ten days, but the results weren't ideal. However, winning this title has greatly boosted my confidence.\"",
        content_cn: "\"这场胜利后，我对无限注锦标赛更有信心了，\"季通过翻译说道。\"我参加了大约十天的红龙系列赛，但成绩不太理想。然而，赢得这个冠军大大增强了我的信心。\"",
        content_tw: "\"這場勝利後，我對無限注錦標賽更有信心了，\"季通過翻譯說道。\"我參加了大約十天的紅龍系列賽，但成績不太理想。然而，贏得這個冠軍大大增強了我的信心。\""
      },
      {
        type: "paragraph",
        content: "With renewed determination and hunger, Ji said he will continue to play tournaments when has time.",
        content_cn: "带着新的决心和渴望，季表示他将在有时间的时候继续参加锦标赛。",
        content_tw: "帶著新的決心和渴望，季表示他將在有時間的時候繼續參加錦標賽。"
      },
      {
        type: "paragraph",
        content: "\"I hope to achieve even better results in upcoming tournaments. I still really enjoy tournament poker and will participate when I can.\"",
        content_cn: "\"我希望在即将到来的锦标赛中取得更好的成绩。我仍然非常喜欢锦标赛扑克，会尽可能参加。\"",
        content_tw: "\"我希望在即將到來的錦標賽中取得更好的成績。我仍然非常喜歡錦標賽撲克，會盡可能參加。\""
      },
      {
        type: "image",
        src: "/image/news/details-news/new3/2-nDx6lLYK.jpg",
        alt: "Winner Xiaqing Ji"
      },
      {
        type: "heading",
        content: "FINAL TABLE ACTION",
        content_cn: "决赛桌战况",
        content_tw: "決賽桌戰況"
      },
      {
        type: "paragraph",
        content: "With an average stack of under 20 big blinds, it came as no surprise that players found themselves all in right out of the gate. Within the first 10 minutes of play, Xiaoyan Xu and Yawen Ren both committed their stacks preflop and ended up second-best after being called to fall in ninth and eight place respectively after shoving preflop, getting called, and ending up second-best.",
        content_cn: "平均筹码不到20个大盲注，选手们一开始就全压也就不足为奇了。在比赛的前10分钟内，徐晓燕和任雅雯都在翻牌前全压，被跟注后落败，分别以第九和第八名出局。",
        content_tw: "平均籌碼不到20個大盲注，選手們一開始就全壓也就不足為奇了。在比賽的前10分鐘內，徐曉燕和任雅雯都在翻牌前全壓，被跟注後落敗，分別以第九和第八名出局。"
      },
      {
        type: "paragraph",
        content: "Ji climbed nearly back to even with Jiawei Yuan after eliminating Yang Chen in fourth place with pocket aces, which set up arguably the tournament-defining hand. Ji raised on the button with pocket sevens and Yuan shoved from the big blind holding ace-ten suited. Ji didn't back down and called all in for his tournament life only to be rewarded with a massive double up on a clean runout.",
        content_cn: "季在用口袋A淘汰第四名的杨晨后，几乎追平了袁嘉伟，这为可能决定比赛的关键手牌做好了铺垫。季在按钮位用口袋7加注，袁从大盲位用同花A10全推。季没有退缩，用全部筹码跟注，最终在干净的公共牌上大幅翻倍。",
        content_tw: "季在用口袋A淘汰第四名的楊晨後，幾乎追平了袁嘉偉，這為可能決定比賽的關鍵手牌做好了鋪墊。季在按鈕位用口袋7加注，袁從大盲位用同花A10全推。季沒有退縮，用全部籌碼跟注，最終在乾淨的公共牌上大幅翻倍。"
      },
      {
        type: "paragraph",
        content: "Yuan was left short following the clash and the rest of his chips were soon scooped up by Jinsui Fan after Yuan shoved with ace-five into Fan's ace-ten.",
        content_cn: "对决后袁的筹码所剩无几，不久后范金穗用A10跟注了袁的A5全推，收走了他剩余的全部筹码。",
        content_tw: "對決後袁的籌碼所剩無幾，不久後范金穗用A10跟注了袁的A5全推，收走了他剩餘的全部籌碼。"
      },
      {
        type: "paragraph",
        content: "Ji entered the heads-up battle between him and Fan with a solid lead and wasted no time putting his chips to work. In one of the first hands of their duel, Ji made an epic triple-barrel bluff holding five-high to take an over 3-to-1 chip lead.",
        content_cn: "季以稳固的领先优势进入与范的单挑战，并立即开始运用筹码优势。在他们对决的第一批手牌中，季用仅有5高牌完成了一次史诗级的三连诈唬，取得了超过3:1的筹码领先。",
        content_tw: "季以穩固的領先優勢進入與范的單挑戰，並立即開始運用籌碼優勢。在他們對決的第一批手牌中，季用僅有5高牌完成了一次史詩級的三連詐唬，取得了超過3:1的籌碼領先。"
      },
      {
        type: "paragraph",
        content: "A few hands later, Ji shoved with a king on the button and Fan took his chances and called all in with eight-seven suited. The board ran out clean and just like that — Ji was crowned as the first-ever TLPT champion.",
        content_cn: "几手牌后，季在按钮位用K全推，范冒险用同花87跟注全押。公共牌没有帮助范，就这样——季被加冕为首位TLPT冠军。",
        content_tw: "幾手牌後，季在按鈕位用K全推，范冒險用同花87跟注全押。公共牌沒有幫助范，就這樣——季被加冕為首位TLPT冠軍。"
      },
      {
        type: "paragraph",
        content: "Be sure to check out our live-reporting hub for continuing coverage of select upcoming events from the 2025 TLPT series.",
        content_cn: "请务必查看我们的实时报道中心，了解2025 TLPT系列赛精选即将到来的赛事的持续报道。",
        content_tw: "請務必查看我們的實時報導中心，了解2025 TLPT系列賽精選即將到來的賽事的持續報導。"
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
        content: "The inaugural The Lord Poker Tournament – TLPT Jeju 2025 opened with the traditional Dragon Dance performance and a powerful welcome speech delivered by the President of the World Lottery Research Association. Addressing players, industry professionals, media, and the TLPT Tournament Committee, the WLA President, Xuehong Wang said,",
        content_cn: "首届Lord扑克锦标赛——TLPT济州2025以传统的舞龙表演开幕，世界彩票研究协会主席发表了有力的欢迎致辞。在向选手、行业专业人士、媒体和TLPT锦标赛委员会发言时，WLA主席王雪红说，",
        content_tw: "首屆Lord撲克錦標賽——TLPT濟州2025以傳統的舞龍表演開幕，世界彩票研究協會主席發表了有力的歡迎致辭。在向選手、行業專業人士、媒體和TLPT錦標賽委員會發言時，WLA主席王雪紅說，"
      },
      {
        type: "paragraph",
        content: "It is a great honor for me to represent the World Lottery Research Association as we gather here to witness a milestone moment in the TLPT Jeju Island event. This is not only a grand celebration of international competitive poker but also a landmark occasion signifying a new height for Asia's mind sports industry.",
        content_cn: "我非常荣幸能够代表世界彩票研究协会，与大家齐聚于此，见证TLPT济州岛赛事的里程碑时刻。这不仅是国际竞技扑克的盛大庆典，更是标志着亚洲智力运动产业迈向新高度的里程碑事件。",
        content_tw: "我非常榮幸能夠代表世界彩票研究協會，與大家齊聚於此，見證TLPT濟州島賽事的里程碑時刻。這不僅是國際競技撲克的盛大慶典，更是標誌著亞洲智力運動產業邁向新高度的里程碑事件。"
      },
      {
        type: "paragraph",
        content: "First, an USD 8 million guaranteed prize pool—the largest ever in Asian history! This record-breaking guarantee is not only a major milestone for Asia, but also a testament to the immense potential and vitality of the Asian market on the global stage.",
        content_cn: "首先，800万美元的保底奖池——亚洲历史上最高！这一破纪录的保底不仅是亚洲的重大里程碑，也证明了亚洲市场在全球舞台上的巨大潜力和活力。",
        content_tw: "首先，800萬美元的保底獎池——亞洲歷史上最高！這一破紀錄的保底不僅是亞洲的重大里程碑，也證明了亞洲市場在全球舞台上的巨大潛力和活力。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new4/2-ByOlVS9r.jpg",
        alt: "TLPT Jeju 2025 Underway"
      },
      {
        type: "heading",
        content: "TLPT JEJU 2025 UNDERWAY",
        content_cn: "TLPT济州2025正式启动",
        content_tw: "TLPT濟州2025正式啟動"
      },
      {
        type: "paragraph",
        content: "Long lines greeted the launch of The Lord Poker Tournament – TLPT Jeju as players packed into the Landing Casino within the luxurious Jeju Shinhwa World Resorts. And it was certainly no surprise with the announcement of a $600,000 guaranteed Freeroll, it was a chance for players to pad up their bankroll at no cost. Wang continued,",
        content_cn: "长长的队伍迎来了Lord扑克锦标赛——TLPT济州的启动，选手们涌入奢华的济州神话世界度假村内的Landing Casino。随着60万美元保底免费赛的公布，这是选手们零成本增加资金的机会，这并不令人意外。王继续说，",
        content_tw: "長長的隊伍迎來了Lord撲克錦標賽——TLPT濟州的啟動，選手們湧入奢華的濟州神話世界度假村內的Landing Casino。隨著60萬美元保底免費賽的公佈，這是選手們零成本增加資金的機會，這並不令人意外。王繼續說，"
      },
      {
        type: "paragraph",
        content: "Second, the USD $600,000 guaranteed opening event is completely free to enter. This marks the world's first high-stakes poker event with zero entry barrier! We believe that poker is not just a game, but a platform for the cornerstones of a thriving industry. This bold move invites more players and industry peers to experience the excitement of competitive poker and gives every enthusiast the chance to rise to stardom. ANYONE COULD BE A STAR!",
        content_cn: "第二，60万美元保底的开幕赛完全免费参加。这标志着世界上第一个零门槛的高额扑克赛事！我们相信扑克不仅仅是一场游戏，更是繁荣产业基石的平台。这一大胆举措邀请更多选手和业内同仁体验竞技扑克的刺激，让每位爱好者都有机会成为明星。任何人都可以成为明星！",
        content_tw: "第二，60萬美元保底的開幕賽完全免費參加。這標誌著世界上第一個零門檻的高額撲克賽事！我們相信撲克不僅僅是一場遊戲，更是繁榮產業基石的平台。這一大膽舉措邀請更多選手和業內同仁體驗競技撲克的刺激，讓每位愛好者都有機會成為明星。任何人都可以成為明星！"
      },
      {
        type: "paragraph",
        content: "Opening day also signaled the start of the TLPT Main Event 8-Handed backed by the US$ 700,000 guarantee. Two flights are planned for the day with buy-in of $500 and $1,000, giving players an early opportunity at qualifying for a share of the pot. Tomorrow, two more nights are scheduled with buy-in of $750 and $2,000. With such a wide range of buy-ins, TLPT is making it clear that players of all types are welcome to take part in this exciting debut.",
        content_cn: "开幕日还标志着70万美元保底的TLPT主赛事8人桌开始。当天计划了两个航班，买入分别为500美元和1000美元，让选手们有早期机会争取奖池份额。明天还有两个航班，买入分别为750美元和2000美元。如此广泛的买入范围，TLPT明确表示欢迎各类选手参与这一激动人心的首秀。",
        content_tw: "開幕日還標誌著70萬美元保底的TLPT主賽事8人桌開始。當天計劃了兩個航班，買入分別為500美元和1000美元，讓選手們有早期機會爭取獎池份額。明天還有兩個航班，買入分別為750美元和2000美元。如此廣泛的買入範圍，TLPT明確表示歡迎各類選手參與這一激動人心的首秀。"
      },
      {
        type: "paragraph",
        content: "Players already at the scene are Patrik Demus, Christian Harder, Nevan Chang, Lei Yu, Julian Warhurst, Gary Thompson, Chenxu Zhang aka Vanessa Zhang, and Jieming Xu to name a few.",
        content_cn: "已经到达现场的选手包括Patrik Demus、Christian Harder、张念宸、于磊、Julian Warhurst、Gary Thompson、张晨旭（又名Vanessa Zhang）和徐杰明等。",
        content_tw: "已經到達現場的選手包括Patrik Demus、Christian Harder、張念宸、於磊、Julian Warhurst、Gary Thompson、張晨旭（又名Vanessa Zhang）和徐杰明等。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new4/3-BPrho1Ky.jpg",
        alt: "TLPT Jeju Super High Roller Events"
      },
      {
        type: "heading",
        content: "TLPT JEJU SUPER HIGH ROLLER EVENTS",
        content_cn: "TLPT济州超级豪客赛",
        content_tw: "TLPT濟州超級豪客賽"
      },
      {
        type: "paragraph",
        content: "n several days, the games climb several notches up with the TLPT Main Event Super High Roller costing $15,000 for a shot at the massive $3,000,000 guarantee. This ambitious prize pool is certain to attract the biggest names in the industry, including brand ambassadors Quan Zhou, Dan Cates aka Jungleman, and Dong Chen.",
        content_cn: "几天后，比赛将提升几个档次，TLPT主赛事超级豪客赛买入15,000美元，争夺300万美元的巨额保底奖池。这一雄心勃勃的奖池必将吸引业内最大牌的选手，包括品牌大使周全、Dan Cates（又名Jungleman）和陈东。",
        content_tw: "幾天後，比賽將提升幾個檔次，TLPT主賽事超級豪客賽買入15,000美元，爭奪300萬美元的巨額保底獎池。這一雄心勃勃的獎池必將吸引業內最大牌的選手，包括品牌大使周全、Dan Cates（又名Jungleman）和陳東。"
      },
      {
        type: "paragraph",
        content: "Including the Main Event SHR are other Super High Roller events US$ 20,000 and US$ 25,000 SHR 8-Handed buy-in events both guarantee US$ 1,000,000 each and the costliest of them all is the US$ 50,000 buy-in Short Deck SHR 8-Handed guaranteeing US$ 1,500,000. Check out the list below.",
        content_cn: "除了主赛事SHR外，还有其他超级豪客赛事，包括20,000美元和25,000美元买入的8人桌SHR赛事，均保底100万美元，其中最昂贵的是50,000美元买入的短牌SHR 8人桌，保底150万美元。请查看以下列表。",
        content_tw: "除了主賽事SHR外，還有其他超級豪客賽事，包括20,000美元和25,000美元買入的8人桌SHR賽事，均保底100萬美元，其中最昂貴的是50,000美元買入的短牌SHR 8人桌，保底150萬美元。請查看以下列表。"
      }
    ]
  },
  "king-quan-zhou-tough-guy-dong-chen-perfectly-close-2024": {
    heroImage: "/image/news/details-news/new5/1-Bvlz4SZq.png",
    sections: [
      {
        type: "paragraph",
        content: "As 2024 quietly draws to a close, 2025 ushers in a fresh start. At this time of year, the circle of poker's annual rankings are being released with great fanfare. Over the past year, Chinese players have made their presence felt across poker tournaments worldwide, achieving numerous impressive results. As a result, they have performed exceptionally well in the annual rankings. In the recently released 2024 GPI (Global Poker Index) Annual Rankings, five Chinese players have made it into the top 100 in the world! Notably, two members of the AA poker teams, Quan Zhou and Dong Chen, have both secured spots in the GPI Top 100, ranking 26th and 66th, respectively, showcasing their incredible talent and competitive strength.",
        content_cn: "2024悄然已过，2025崭新来临，在这岁末年初时刻，扑克圈的年度榜单纷纷重磅出炉。 在过去的一年，国人选手的足迹踏遍世界各地的赛场，也取得了各种耀眼的成绩， 因此在年度榜单的表现非常出色。在新近出炉的2024GPI全球年度排行榜上，中国有5名选手跻身世界百强！ 尤其是AA POKER战队成员周全和陈东，他们分别闯入GPI百强榜的第26名和第66名！",
        content_tw: "2024年悄悄已過，2025嶄新來臨，在這歲末年初時刻，撲克圈的年度榜單紛紛重磅出爐。 在過去的一年，國人選手的足跡踏遍世界各地的賽場，也取得了各種耀眼的成績， 因此在年度榜單的表現非常出色。在新近出爐的2024GPI全球年度排行榜上，中國有5名選手躋身世界百強！ 尤其是AA POKER戰隊成員周全和陳東，他們分別闖入GPI百強榜的第26名和第66名！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/2-CB_1Gyxe.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "heading",
        content: "Global Poker Index (GPI)",
        content_cn: "Global Poker Index 全球扑克指数",
        content_tw: "Global Poker Index 全球撲克指數"
      },
      {
        type: "paragraph",
        content: "The GPI is a ranking system used to track and measure the performance of poker players in major global tournaments. It evaluates players' results across various prestigious poker events to provide a global ranking that reflects their overall skill and performance in the competitive poker scene.",
        content_cn: "是一个用于记录和衡量世界各国选手在各大扑克锦标赛现场成绩的排行榜",
        content_tw: "是用來記錄和衡量世界各國選手在各大撲克錦標賽現場成績的排行榜"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/6-DTtOSAuy.png",
        alt: "GPI Rankings"
      },
      {
        type: "paragraph",
        content: "Achieving a spot in the GPI Top 100 is a prestigious honor, reflecting a player's consistent and high-level performance over the past six months.",
        content_cn: "能够进入GPI百强榜的含金量不言而喻，表明了该选手在过去的36个月里持续稳定地输出好成绩。",
        content_tw: "能夠進入GPI百強榜的含金量不言而喻，顯示了該選手在過去的36個月裡持續穩定地輸出好成績。"
      },
      {
        type: "paragraph",
        content: "Quan Zhou's 2024: A Year of Glorious Achievements Let's first take a look at the 2024 journey of 'King' Zhou Quan, which is a 'breakout year' for him, marked by five championships, two runner-up finishes, two third-place finishes, and seven final table (FT) appearances. Among his five titles, three stand out as major victories in high-stakes tournaments: the Jeju Triton High Roller in March, the Cyprus Super High Roller in August, and the Brisbane TLPT High Roller in October.",
        content_cn: "先来看下\"国王\"周全的2024，过去的一年堪称周全的\"高光元年\"，5个冠军、2个亚军、2个季军以及7个FT成绩。 而在5个冠军中，还包含3个分量十足、超级厚重的豪客赛冠军，分别是3月份的济州岛传奇豪客赛、8月份的塞浦路斯超级豪客赛、10月份的布里斯班TLPT豪客赛。",
        content_tw: "先來看下\"國王\"周全的2024，過去的一年堪稱周全的\"高光元年\"，5個冠軍、2個亞軍、2個季軍以及7個FT成績。 而在5個冠軍中，還包含3個分量十足、超級厚重的豪客賽冠軍，分別是3月份的濟州島傳奇豪客賽、8月份的塞浦路斯超級豪客賽、10月份的布里斯班TLPT豪客賽。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/7-CsqpnwAQ.png",
        alt: "Quan Zhou Championships"
      },
      {
        type: "paragraph",
        content: "Zhou has been on an unstoppable rise throughout the entire year, and by November 2024, his career earnings surpassed the $10 million dollar. Currently, Zhou is undoubtedly at the peak of his career, and if he maintains this sizzling form, 2025 will surely bring even more championships! Dong Chen's 2024: Consistent and Rising Dong Chen, known as the 'Tough Guy' of Chinese poker players, combines good looks with exceptional poker skills. Despite his always considered himself a 'semi-professional' player, Chen stunned the poker world by winning the $10K High Roller at the WSOP Paradise Island event in December 2023, claiming a coveted WSOP bracelet—a dream come true for many pro players.",
        content_cn: "周全在一整年里几乎都在高歌猛进，到了2024年11月份，他的职业生涯总奖金一举迈过1000万刀大关。 目前的周全无疑正值事业的巅峰期，这样火热的状态保持下去，2025势必会收获更多冠军！ 现在让我们看下\"硬汉\"陈东，作为国内男牌手的颜值担当，牌技同样过硬。一直以\"半职业选手\"自居的他，却在2023年12月的WSOP天堂岛站一举拿下$10K豪客赛冠军，收获了让众多职业选手梦寐以求的金手链。",
        content_tw: "周全在一整年幾乎都在高歌猛進，到了2024年11月份，他的職業生涯總獎金一舉邁過1000萬刀大關。 目前的周全無疑正值事業的巔峰期，這樣火熱的狀態保持下去，2025勢必會收穫更多冠軍！ 現在讓我們看下「硬漢」陳東，身為國內男牌手的顏值擔當，牌技同樣過硬。一直以「半職業選手」自居的他，卻在2023年12月的WSOP天堂島站一舉拿下$10K豪客賽冠軍，收穫了讓眾多職業選手夢寐以求的金手鍊。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/8-C3xl1EcP.png",
        alt: "Dong Chen WPT Victory"
      },
      {
        type: "paragraph",
        content: "In 2024, Dong Chen continued his steady progress, earning one championship, two fourth-place finishes, and three final table (FT) appearances. The highlight of his year came in November 2024, when he clinched the WPT Super High Roller event.",
        content_cn: "2024年的陈东依旧稳扎稳打，保持着稳健的发挥，收获1个冠军、2个殿军、3个FT成绩。 全年的高光时刻，就是在2024年11月夺得了WPT超级豪客赛的冠军。",
        content_tw: "2024年的陳東依舊穩紮穩打，保持穩健的發揮，收穫1個冠軍、2個殿軍、3個FT成績。 全年的高光時刻，就是在2024年11月奪得了WPT超級豪客賽的冠軍。"
      },
      {
        type: "paragraph",
        content: "With a career earnings total of $3 million, Chen is in the ascendant phase of his journey compared to Quan Zhou, who is already at the peak of his career. Chen steadily increasing his participation in high roller events, and joining the AA POKER team is a significant opportunity for him. With the full support of the team, Chen's potential is immense, and he is poised for an explosive rise in 2025!",
        content_cn: "目前陈东的职业生涯总奖金为300万刀，与已经处于巅峰期的周全不同，陈东正值事业的上升期，正在逐步增加豪客赛的参赛密度。 而加入AA poker战队，对他来说是一个巨大的契机，在整个团队的加持之下，陈东这支蓄势待发的火箭，有望在2025年迎来\"爆发式蹿升\"！",
        content_tw: "目前陳東的職業生涯總獎金為300萬刀，與已經處於巔峰期的周全不同，陳東正值事業的上升期，正在逐步增加豪客賽的參賽密度。 而加入AA poker戰隊，對他來說是一個巨大的契機，在整個團隊的加持之下，陳東這支蓄勢待發的火箭，預計在2025年迎來\"爆發式躥升\"！"
      },
      {
        type: "paragraph",
        content: "The AA POKER Teams: A Stellar Roster\n\nDan Cates: One of the most elusive and prestigious players in the world, the owner of two gold bracelets(most difficult-to-obtain world gold bracelets). Joe Hachem: WSOP Main Event champion and holder of the prestigious WSOP bracelet. Quan Zhou: Multiple world champion titles holder and the highest-performing Chinese player in poker. Dong Chen: WSOP bracelet winner. YARA: The most influential Chinese poker player globally, known for her charm and sweetness. Yisha Chen: A top Chinese female player and one of the top five ranked Chinese players on the GPI. Yi Ye: The fastest-rising Chinese player in 2024, with improved poker skills, and standout looks. Looking Ahead to 2025: A New Chapter Begins! The brilliance of 2024 is now a thing of the past, and 2025 is ready for a fresh start! We eagerly look forward to the AA POKER team, a powerhouse full of vitality and potential, creating even more exciting moments and winning more championships in 2025. We also wish all domestic players continued success and progress, making the 2025 rankings even more dazzling!",
        content_cn: "附：AA poker战队全体成员\n\n世界号称最难拿到的世界金手链，背靠背拥有者，两条混合游戏世界冠军，Dan Cates 世界WSOP主赛金手链拥有者，Joe Hachem 多个世界冠军头衔得主，华人竞技天花板，周全 WSOP金手链得主，陈东 世界华人最具影响力，可爱与甜美化身，YARA 中国本土女选手，GPI排名中国前五的美女牌手，陈易莎 中国2024年德州竞技技术提高最多，水平增长最快，颜值最高，叶依 2024的辉煌已成过去，2025要再度扬帆起航！ 期待这支实力雄厚、活力十足又充满看点的AA poker战队在2025年创造更多的精彩，收获更多的冠军！ 也祝所有的国人选手百尺竿头更进一步，让2025年的年度榜单更加耀眼！",
        content_tw: "附：AA POKER戰隊全體成員\n\n世界號稱最難拿到的世界金手鍊，背靠背擁有者，兩條混合遊戲世界冠軍，Dan Cates 世界WSOP主賽金手鍊擁有者，Joe Hachem 多個世界冠軍頭銜得主，華人競技天花板，周全 WSOP金手鍊得主，陳東 世界華人最具影響力，可愛與甜美化身，YARA 中國本土女選手，GPI排名中國前五的美女牌手，陳易莎 中國2024年德州競技技術提升最多，水準成長最快，顏值最高，葉依 2024的輝煌已成過去，2025要再度揚帆起航！ 期待這支實力雄厚、活力十足又充滿看點的AA poker戰隊在2025年創造更多的精彩，收穫更多的冠軍！ 也祝福所有的國人選手百尺竿頭更進一步，讓2025年的年度榜單更加耀眼！"
      }
    ]
  },
  "wsop-paradise-island-dong-chen-finishes-10th": {
    heroImage: "/image/news/details-news/new6/1-D7HqxTgu.png",
    sections: [
      {
        type: "paragraph",
        content: "After 7 days of intense battles, the WSOP Paradise Island $2,500 Mini Main Event has finally crowned its champion. The event attracted a total of 2,031 entries, with a prize pool of an impressive $5.077 million, surpassing the $5 million guarantee. The payout was structured so that 304 of whom would receive at least a minimum prize of $5,350. By Day 3, only 17 players remained, all vying for the coveted top prize of $575,050. In the end, Jeffrey Hakim triumphed in a heads-up battle against the talented Alina Pailahoshka, securing his first WSOP gold bracelet. Hakim has earned over $2 million in live tournament earnings, and this victory marks a new peak in his career. However, for him, the prize money was not the most important thing. 'The gold bracelet is what matters most. Winning my first gold bracelet is the most important and happiest thing.'",
        content_cn: "历时7天的鏖战，WSOP天堂岛$2,500迷你主赛事终于决出了最后的胜利者。 该赛事共吸引了2,031人次参赛，总奖池达到惊人的507.7w美元，超过了赛事500w美元的保证奖池，奖励圈设为306人，他们将获得至少$5,360最低奖金。 第3天比赛只有17名选手继续较量，争夺令人垂涎的$575,050最高奖金。最终，Jeffrey Hakim在单挑中击败美女牌手Alina Paliahoshka ，夺得他的第一条WSOP金手链。 Hakim在现场锦标赛中赢得的奖金超过200w美元，这次胜利让他达到了新的巅峰。但对他来说，奖金并不是最重要的。\"金手链才是最重要的，赢得第一条金手链是最重要、最幸福的事情。\"",
        content_tw: "歷時7天的鏖戰，WSOP天堂島$2,500迷你主賽事終於決出了最後的勝利者。 該賽事共吸引了2,031人次參賽，總獎金池達到驚人的507.7w美元，超過了賽事500w美元的保證獎池，獎勵圈設為306人，他們將獲得至少$5,360最低獎金。 第3天比賽只有17名選手繼續較量，爭奪令人垂涎的$575,050最高獎金。最終，Jeffrey Hakim在單挑中擊敗美女牌手Alina Paliahoshka ，奪得他的第一條WSOP金手鍊。 Hakim在現場錦標賽中贏得的獎金超過200w美元，這場勝利讓他達到了新的巔峰。但對他來說，獎金並不是最重要的。 \"金手鍊才是最重要的，贏得第一條金手鍊是最重要、最幸福的事情。\""
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/2-C21j3kHU.png",
        alt: "Dong Chen at WSOP Paradise Island"
      },
      {
        type: "paragraph",
        content: "Ryan Gebow raised from under the gun to 800,000, and when it folded to Dong Chen in the hijack, he three-bet to 1,800,000. It folded back to Gebow who four-bet all in for Chen's stack of 6,200,000. After using one time extension, Chen made the call",
        content_cn: "Ryan Gebow在枪口位加注到800,000，当行动转到陈东的劫位时，他三倍下注到1,800,000。行动回到Gebow，他四倍下注全押陈的筹码620万。在使用了一次时间延长后，陈选择跟注。",
        content_tw: "Ryan Gebow在槍口位加注到800,000，當行動轉到陳東的劫位時，他三倍下注到1,800,000。行動回到Gebow，他四倍下注全押陳的籌碼620萬。在使用了一次時間延長後，陳選擇跟注。"
      },
      {
        type: "paragraph",
        content: "Dong Chen: A♠ Q♦ ♠",
        content_cn: "陈东: A♠ Q♦",
        content_tw: "陳東: A♠ Q♦"
      },
      {
        type: "paragraph",
        content: "Ryan Gebow: J♥ J♣",
        content_cn: "Ryan Gebow: J♥ J♣",
        content_tw: "Ryan Gebow: J♥ J♣"
      },
      {
        type: "paragraph",
        content: "It was a race for Chen's tournament life, but after the board ran out 5♥ 5♠ J♠ 4♠ 7♠ Gebow flopped a full house, making Chen the first elimination at the final table.",
        content_cn: "这是陈的锦标赛生命之战，但公共牌发出5♥ 5♠ J♠ 4♠ 7♠后，Gebow在翻牌中了葫芦，使陈成为决赛桌第一个出局的选手。",
        content_tw: "這是陳的錦標賽生命之戰，但公共牌發出5♥ 5♠ J♠ 4♠ 7♠後，Gebow在翻牌中了葫蘆，使陳成為決賽桌第一個出局的選手。"
      },
      {
        type: "paragraph",
        content: "Last year, Dong Chen won a gold bracelet in the WSOP Paradise Island Event #15 High Roller, and this time he achieved an impressive 10th place finish in the event, earning $51,080. Tournament Results:",
        content_cn: "去年在WSOP天堂岛赛事#15豪客赛中获得金手链的陈东在这场比赛中获得第10名的好成绩，奖金$51,080。 比赛结果：",
        content_tw: "去年在WSOP天堂島賽事#15豪客賽中獲得金手鍊的陳東在這場比賽中獲得第10名的好成績，獎金$51,080。 比賽結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/3-D3WHiV9X.png",
        alt: "Tournament Results"
      },
      {
        type: "paragraph",
        content: "Zhen Chen, Jianwei Lin, and other Chinese players made it to the payout positions with the following results:",
        content_cn: "陈真、林健伟等国人选手获得奖励圈成绩：",
        content_tw: "陳真、林健偉等國人選手獲得獎勵圈成績："
      },
      {
        type: "paragraph",
        content: "Event #5: The $25,000 Dealer's Choice Tournament attracted 49 entries, with a total prize pool of $1,225,000. Among the participants were many players considered to be the best mixed-game players in the world.",
        content_cn: "赛事#5：$25,000庄家选择赛共吸引49人次参赛，总奖池$1,225,000，他们中有很多人被认为是世界上最优秀的混合游戏玩家。",
        content_tw: "賽事#5：$25,000莊家選擇賽共吸引49人次參賽，總獎金池$1,225,000，他們中有很多人被認為是世界上最優秀的混合遊戲玩家。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/4-DHZ69_eY.png",
        alt: "Eric Wasserson Winner"
      },
      {
        type: "paragraph",
        content: "Only 4 players returned to the Bahamas Atlantis Paradise Island to compete in the Day 3 overtime session of Event #5. After 4 hours of intense play, Eric Wasserson emerged victorious, winning his first career gold bracelet and a reward of $353,340. Wasserson's career has been filled with many notable achievements. He had previously finished as a runner-up twice and third three times in bracelet events. Now, he can finally breathe a sigh of relief. 'I've always wanted to win a gold bracelet,' Wasserson admitted. 'It feels amazing to finally take it down. I can't even explain how it feels.' Event #5 Results:",
        content_cn: "只有4人返回巴哈马亚特兰蒂斯天堂岛参加第3天的加时赛。经过4个小时的比拼后，Eric Wasserson从众多参赛选手中脱颖而出，夺得生涯首条金手链以及$353,340奖励。 Wasserson的职业生涯充满了很多的高光时刻。他在金手链赛事中曾获得过两次亚军和3次季军，现在他终于可以松一口气了。 \"我一直想赢得金手链，\" Wasserson承认。\"最终夺冠的感觉真的很好。我甚至无法解释这种感觉。\" 赛事#5比赛结果：",
        content_tw: "只有4人返回巴哈馬亞特蘭提斯天堂島參加第3天的加時賽。 經過4小時的比拼後，Eric Wasserson從眾多參賽者中脫穎而出，奪得生涯首條金手鍊以及$353,340獎勵。 Wasserson的職業生涯充滿了許多的高光時刻。 他在金手鍊賽事中曾經獲得過兩次亞軍和3次季軍，現在他終於可以鬆一口氣了。 「我一直想贏得金手鍊，」 Wasserson承認。 \"最終奪冠的感覺真的很好。我什至無法解釋這種感覺。\" 賽事#5比賽結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/5-kTDc1bva.png",
        alt: "Event 5 Results"
      },
      {
        type: "paragraph",
        content: "Ongoing Tournament: Event #6: $5,000 Deep Stack Tournament attracted 363 entries, with a total prize pool of $1,815,000.",
        content_cn: "正在进行的比赛： 赛事#6：$5,000深筹赛共吸引了363人次参与角逐，总奖池为$1,815,000。",
        content_tw: "正在進行的比賽： 賽事#6：$5,000深籌賽共吸引了363人次參與角逐，總獎金池為$1,815,000。"
      },
      {
        type: "paragraph",
        content: "On Day 1, 253 players participated, with 94 players advancing to the next round. Lei Yu from Red Dragon Team and Yinan Zhou, also from China, both advanced smoothly to the next stage, thanks to their impressive chip stacks.",
        content_cn: "首日比赛，有 253 人次参赛，最终 94 人成功晋级。红龙战队的余磊以及同样来自中国的周懿楠凭借可观的记分牌量顺利闯入下一轮。",
        content_tw: "首日比賽，有 253 人次參賽，最後 94 人成功晉級。紅龍戰隊的餘磊以及同樣來自中國的周懿楠憑藉可觀的記分牌量順利闘入下一輪。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/6-B8FJSEyO.png",
        alt: "Lei Yu Chip Leader"
      },
      {
        type: "paragraph",
        content: "On the following day, 110 players joined the battle, bringing the total number of competitors to 204, who started the new day of play. After Day 2, only the final 9 players remained, all of whom will compete in the next round, fiercely chasing the coveted gold bracelet. Among them, Lei Yu is currently in 9th place with a chip stack of 540,000.",
        content_cn: "次日，110 人加入战斗，他们与上一轮晋级的 94 位选手共同开启了新一天的较量。 Day2比赛结束后，比赛只剩下最后9人，他们将在下一轮比赛中全力追逐珍贵的金手链。其中余磊凭借54w记分暂居第9位：",
        content_tw: "隔天，110 人加入戰鬥，他們與上一輪晉級的 94 位選手共同開啟了新一天的較量。 Day2比賽結束後，比賽只剩下最後9人，他們將在下一輪比賽中全力追逐珍貴的金手鍊。其中余磊以54w記分暫居第9名："
      },
      {
        type: "paragraph",
        content: "Event #7: $100,000 Triton Main Event Day 2: This tournament attracted 182 entries, featuring not only high-stakes regulars but also celebrity players and numerous world champions. The total prize pool reached an astonishing $18.2 million. As Day 2 began, David Yan (1,166,000), Dimitar Danchev (1,107,000), and Biao Ding (990,000) topped the leaderboard. These three experienced players are no strangers to high-stakes events at both WSOP and Triton, with impressive results in the highest-level tournaments.",
        content_cn: "赛事#7：$100,000 Triton主赛事Day2： 该比赛吸引了 182 人次参赛，其中不乏超高额常客、明星牌手以及众多世界冠军。比赛总奖池达到令人惊叹的 1820w美元。 随着 Day2 的开启，David Yan (116.6w)、 Dimitar Danchev (110.7w) 和丁彪 (99w) 位居排行榜榜首。这3位经验丰富的选手对 WSOP 和 Triton 的高额赛事并不陌生，他们在最高级别的比赛中均取得了令人瞩目的成绩。",
        content_tw: "賽事#7：$100,000 Triton主賽事Day2： 該比賽吸引了 182 人次參賽，其中不乏超高額常客、明星牌手以及眾多世界冠軍。比賽總獎池達到令人驚嘆的 1820w美元。 隨著 Day2 的開啟，David Yan (116.6w)、 Dimitar Danchev (110.7w) 和丁彪 (99w) 位居排行榜榜首。這3位經驗豐富的選手對 WSOP 和 Triton 的高額賽事並不陌生，他們在最高級別的比賽中均取得了令人矚目的成績。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/7-DSkdebE3.png",
        alt: "Triton Main Event"
      },
      {
        type: "paragraph",
        content: "However, as the competition intensified, many big-name players were eliminated. As of the latest update, only the final 15 players remain, all battling hard for the title. Finnish player Ossi Ketola currently leads with a chip stack of 6.6 million, followed closely by well-known players Fedor Holz and Alex Foxen. Other notable competitors still in the race include Mikita Badziakouski, Joao Vieira, and Stephen Chidwick.",
        content_cn: "然而，随着比赛的激烈进行，众多大牌选手纷纷被淘汰。截至发稿时，场上仅剩下最后 15 名选手仍在奋力拼搏。 芬兰选手 Ossi Ketola 暂时以660w记分牌领先，广为人知的 Fedor Holz、Alex Foxen 紧随其后。 同样参与竞争的还有知名选手 Mikita Badziakouski、Joao Vieira、Stephen Chidwick 等。",
        content_tw: "然而，隨著比賽的激烈進行，許多大牌選手紛紛被淘汰。截至發稿時，場上僅剩下最後 15 名選手仍在奮力奮鬥。 芬蘭選手 Ossi Ketola 暫時以660w記分板領先，廣為人知的 Fedor Holz、Alex Foxen 緊隨其後。 同樣參與競爭的還有知名選手 Mikita Badziakouski、Joao Vieira、Stephen Chidwick 等。"
      }
    ]
  },
  "aapoker-team-luxury-lineup-brand-new": {
    heroImage: "/image/news/details-news/new7/1-CgB682he.png",
    sections: [
      {
        type: "paragraph",
        content: "Time flies, and the year 2024 is about to pass. Looking back on the past year, AApoker team has achieved fruitful results. AApoker's luxury tournament brand 'TLPT King's Road' and Triton Legendary Poker have reached an official cooperation, the two luxury giants have joined forces, and 2025 is full of infinite imagination. From September 27th to October 6th, TLPT joined hands with APT Australian Championship to successfully hold the 2024 Brisbane Hawker Series, which was highly praised by the circle. In addition, the AApoker team lineup continues to grow with an influx of strong reinforcements. The AApoker team has also been performing well in international tournaments, and in the recently concluded KPC Super Hustler, two AA players met in the final and took the first and second place.",
        content_cn: "时光飞逝，日月如梭，转眼2024年即将过去。回顾过去的一年，AApoker可谓是硕果累累。 旗下豪客赛品牌『TLPT王者之路』与Triton传奇扑克达成正式合作，两大豪客巨头强强联手，2025年充满无限想象。 9月27日-10月6日，TLPT携手APT 澳大利亚锦标赛，成功举办2024布里斯班豪客系列赛，备受圈内好评。 此外，AApoker战队阵容继续壮大，强援涌入。而且近期在国际赛事上表现不俗，在刚刚结束的KPC超级豪客赛上，两位AA选手会师决赛，包揽冠亚军。",
        content_tw: "時光飛逝，日月如梭，轉眼2024年即將過去。回顧過去的一年，AApoker可謂是碩果累累。 旗下豪客賽品牌『TLPT王者之路』與Triton傳奇撲克達成正式合作，兩大豪客巨頭強強聯手，2025年充滿無限想像。 9月27日-10月6日，TLPT攜手APT 澳洲錦標賽，成功舉辦2024布里斯本豪客系列賽，備受圈內好評。 此外，AApoker戰隊陣容持續壯大，強援湧入。而且近期在國際賽事上表現不俗，在剛結束的KPC超級豪客賽上，兩位AA選手會師決賽，包辦冠亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/2-D3NOefQF.png",
        alt: "KPC Super Hustler Champions"
      },
      {
        type: "paragraph",
        content: "The current AApoker team includes both WSOP Main Event champion Joe Hachem, the former GPI Global No. 1 Quan Zhou, and WSOP gold bracelet winner Dong Chen... The lineup is so impressive, let's take a look at it now!",
        content_cn: "目前这支AApoker战队既有WSOP主赛事冠军Joe Hachem，又有曾经的GPI全球第一周全，还有WSOP金手链获得者陈东...阵容太过豪华，现在让我们一睹为快！",
        content_tw: "目前這支AApoker戰隊既有WSOP主賽事冠軍Joe Hachem，又有曾經的GPI全球第一周全，還有WSOP金手鍊獲得者陳東...陣容太過豪華，現在讓我們一睹為快！"
      },
      {
        type: "heading",
        content: "Dan \"Jungleman\" Cates",
        content_cn: "Dan「Jungleman」Cates",
        content_tw: "Dan「Jungleman」Cates"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/3-BP7Mrwmz.png",
        alt: "Dan Jungleman Cates"
      },
      {
        type: "paragraph",
        content: "Dan \"Jungleman\" Cates, who is also the global brand ambassador of AApoker, is an old friend of Chinese players, with a delicate and interesting mind hidden under his rough exterior. \"Dan is a strong, well-rounded player with a dominant presence in live and online tournaments and at regular tables. He has two WSOP gold bracelets, the $50,000 Poker Players Championship, which he won back-to-back in 2021 and 2022, a miracle in WSOP history. And his live tournament winnings totaled a whopping $14.4 million. In the online, \"Jungleman\" is also legendary, with a profit of $11 million. What's even more terrifying is that \"Jungleman\" is still at the peak of his career and is bound to create more miracles.",
        content_cn: "\"野人\"Dan Cates，同时也是AApoker的全球品牌大使，可以说是国人玩家的老朋友了，粗犷的外表下隐藏着一颗细腻、有趣的心灵。 \"野人\"实力强悍，技术全面，无论是现场还是线上，比赛还是常规桌，都具有很强的统治力。 他的名下有两条含金量超高的WSOP金手链，分别是在2021年和2022年背靠背赢得的$50,000 扑克玩家冠军赛，堪称WSOP史上的一个神迹。而他的现场赛事总奖金也高达1440万刀。在线上世界中，\"野人\"同样是堪称传奇般的存在，他的盈利高达1100万刀。更为恐怖的是，\"野人\"依旧处于事业的巅峰期，势必会创造更多的奇迹。",
        content_tw: "\"野人\"Dan Cates，同時也是AApoker的全球品牌大使，可以說是國人玩家的老朋友了，粗獷的外表下隱藏著一顆細膩、有趣的心靈。 \"野人\"實力強悍，技術全面，無論是現場或線上，比賽或常規桌，都具有很強的統治力。 他的名下有兩條含金量超高的WSOP金手鍊，分別是在2021年和2022年背靠背贏得的$50,000 撲克玩家冠軍賽，堪稱WSOP史上的一個神蹟。而他的現場賽事總獎金也高達1440萬刀。在線上世界中，\"野人\"同樣是堪稱傳奇般的存在，他的利潤高達1100萬刀。更恐怖的是，\"野人\"仍處於事業的巔峰期，勢必會創造更多的奇蹟。"
      },
      {
        type: "heading",
        content: "Quan Zhou",
        content_cn: "周全",
        content_tw: "周全"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/4-Cw0TtNJL.png",
        alt: "Quan Zhou"
      },
      {
        type: "paragraph",
        content: "Quan Zhou, who also serves as AApoker's global brand ambassador, has been a leading figure in Chinese competitive poker for a long time, but he still has a long track record. Zhou won first place in GPI China back in 2017, and then in 2020, he won first place in GPI Global, as well as Poker Player of the Year that year, but those were just one of Zhou's many highlights. The year 2024 is still Zhou's \"highlight year\", and he has already won 5 championships, 2 runner-ups and 2 third-place finishes in the world's top tournaments, and his total career winnings have surpassed the 1,000-watt mark. Quan Zhou is not only skilled in poker, but also caring, as early as 2016 he initiated the establishment of the Deyi All-Stars charity organization to donate school supplies and living supplies to children in impoverished mountainous areas, which has persisted for nine years now. Whether it's in competitive play or character and morality, Zhou has set a noble example for the younger generation of poker players.",
        content_cn: "周全，同样担任AApoker的全球品牌大使，作为中国竞技扑克领军人物的他，可谓是成名已久，但依然业绩长青。 周全早在2017年就获得了GPI中国区第一名，然后在2020年，他获得了GPI全球第一名，同时也是当年的年度最佳牌手，但这些只是周全众多的高光时刻之一。 而2024年，依旧是周全的\"高光之年\"，征战全球顶级赛事的他已经夺得了5个冠军、2个亚军、2个季军，职业生涯总奖金也是迈过了1000W刀大关。 周全不仅牌技高超，而且富有爱心，早在2016年他就发起成立了德益全明星公益组织，为贫困山区儿童捐助学习用品和生活用品，至今已经坚持了9年之久。 无论是在竞技比赛上，还是人品道德上，周全都为年轻一代的牌手们树立了一个高尚的榜样。",
        content_tw: "周全，同樣擔任AApoker的全球品牌大使，身為中國競技撲克領導人物的他，可謂是成名已久，但依然業績長青。 周全早在2017年就獲得了GPI中國區第一名，然後在2020年，他獲得了GPI全球第一名，同時也是當年的年度最佳牌手，但這些只是周全眾多的高光時刻之一。 而2024年，依舊是周全的\"高光之年\"，徵戰全球頂級賽事的他已經奪得了5個冠軍、2個亞軍、2個季軍，職業生涯總獎金也是邁過了1000W刀大關。 周全不僅牌技高超，而且富有愛心，早在2016年他就發起成立了德益全明星公益組織，為貧困山區兒童捐助學習用品和生活用品，至今已經堅持了9年之久。 無論是在競技比賽上，或是人品道德上，周全都為年輕一代的牌手們樹立了一個高尚的榜樣。"
      },
      {
        type: "heading",
        content: "Wesley Fei",
        content_cn: "Wesley Fei",
        content_tw: "Wesley Fei"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/5-DCHR5Ge6.png",
        alt: "Wesley Fei"
      },
      {
        type: "paragraph",
        content: "Wesley Fei, a wealth man, entered the coinage industry at the age of 15 and amassed a huge fortune early on, becoming renowned in the coinage industry. Then a chance encounter with Texas Hold'em poker, then quickly began the road to the poker circle of the skyrocketing popularity. Because of his strong strength, he was nicknamed \"Unlimited Backhand\" by netizens. Unlike traditional domestic poker players, Wesly has an outgoing and high-profile personality, and soon became the star of the famous live poker program HCL, and is one of the few national poker players who can consistently compete at the high stakes tables against foreign players. During the June 2023 HCL Million live broadcast, Wesley made a huge splash on the poker scene when he first played Tom Dwan for the largest pot in live poker history at $3.1 million, and then for the second largest pot in live poker history at $2.2 million. Wesley's strong performance at the high stakes table demonstrated that national poker players also have a place at the high stakes table. As he matures in the poker world, Wesley is bound to play even better.",
        content_cn: "Wesley Fei，一个自带流量、英年早富的男人，15岁时就进入币圈，并且早早地积累起巨额财富，在币圈享誉盛名。 后来一个偶然的机会接触到德州扑克，便迅速开启了在扑克圈的蹿红之路。因其雄厚的实力，被广大网友戏称为\"无限后手\"。 与传统的国内牌手不同，Wesly性格外放、行事高调，很快就成为著名的扑克直播节目HCL的焦点明星，也是少有的能够持续征战高额桌与国外强手对抗的国人牌手。 在2023年6月的HCL百万赛直播中，Wesley先是与Tom Dwan打出了一个310万刀的扑克直播史上的最大底池，接着又打出一个220万刀的直播史上的第二大底池，在整个扑克圈引起巨大轰动。 Wesley在高额桌的强硬表现，彰示着国人牌手在高额桌同样拥有一席之地。随着在扑克圈的日渐成熟，Wesley势必有着更加精彩的发挥。",
        content_tw: "Wesley Fei，一個自備流量、英年早富的男人，15歲時就進入幣圈，並且早早地積累起巨額財富，在幣圈享譽盛名。 後來一個偶然的機會接觸到德州撲克，便迅速開啟了在撲克圈的躥紅之路。因其雄厚的實力，被廣大網友戲稱為「無限後手」。 與傳統的國內牌手不同，Wesly性格外放、行事高調，很快就成為著名的撲克直播節目HCL的焦點明星，也是少有的能夠持續徵戰高額桌與國外強手對抗的國人牌手。 在2023年6月的HCL百萬賽直播中，Wesley先是與Tom Dwan打出了一個310萬刀的撲克直播史上的最大底池，接著又打出一個220萬刀的直播史上的第二大底池，在整個撲克圈引起巨大轟動。 Wesley在高額桌的強硬表現，彰示國人牌手在高額桌同樣擁有一席之地。隨著在撲克圈的日漸成熟，Wesley勢必有著更精彩的發揮。"
      },
      {
        type: "heading",
        content: "Yisha Chen",
        content_cn: "陈易莎",
        content_tw: "陳易莎"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/6-BAwvbM6F.png",
        alt: "Yisha Chen"
      },
      {
        type: "paragraph",
        content: "The beautiful poker player Yisha Chen can be said to be the most eye-catching domestic female poker player in 2024. Originally a dance teacher, her tough and unyielding character has allowed her to survive in this male-dominated game and fight for her own piece of sky. The year 2024 was a year of great success for Chen. According to The Hendon Mob's database, her total career winnings amounted to $85W, but her winnings in 2024 accounted for $74W, with winnings coming from top international tournaments such as the APT, Triton, TLPT, and EPT. It can be seen that Chen already has a strong competitive edge. With both beauty and wisdom, face value and strength, she is very promising to grow into the leading female poker player in China.",
        content_cn: "美女牌手陈易莎，可以说是2024年表现最为亮眼的国内女牌手了。 气质不凡的她原本是一名舞蹈老师，坚韧不服输的性格让她在这个男性为主导的游戏中生存下来，并且打拼出了自己的一片天空。 2024年是陈易莎高歌猛进的一年，根据The Hendon Mob数据库的记录，她的职业生涯总奖金为85W刀，但2024年的奖金就占据了74W刀，而奖金则来自APT、Triton、TLPT、EPT这些国际顶级赛事上。可见陈易莎已经具备了很强的竞争力。 美貌与智慧并重，颜值与实力齐飞，陈易莎非常有希望成长为国内女牌手的领军人物。",
        content_tw: "美女牌手陳易莎，可以說是2024年表現最亮眼的國內女牌手了。 氣質不凡的她原本是一名舞蹈老師，堅韌不服輸的性格讓她在這個男性為主導的遊戲中生存下來，並且打拼出了自己的一片天空。 2024年是陳易莎高歌猛進的一年，根據The Hendon Mob數據庫的記錄，她的職業生涯總獎金為85W刀，但2024年的獎金就佔據了74W刀，而獎金則來自APT、Triton、TLPT、EPT這些國際頂級賽事上。可見陳易莎已經具備了很強的競爭力。 美貌與智慧並重，顏值與實力齊飛，陳易莎非常有希望成長為國內女牌手的領導者。"
      },
      {
        type: "heading",
        content: "Dong Chen",
        content_cn: "陈东",
        content_tw: "陳東"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/7-ChFdJNy3.png",
        alt: "Dong Chen"
      },
      {
        type: "paragraph",
        content: "Dong Chen, a well-known \"tough guy\" in China's poker circle, got this name from an unforgettable experience in 2019. At that time, Dong Chen participated in the WSOP main event suffered an earthquake, just as he was the big blind, someone Open, many poker players are running out, and he sat motionless, friends asked him how not to run, he domineeringly threw out a sentence: life can not want to, the big blind can not be lost. But the name is true, Chen is indeed very \"hard\", whether it is poker skills, or face value, are very resistant to fight. He came into contact with Texas Hold'em in 2016, and usually learns to play online. Although he claims not to be a professional player, his number of games, competitive strength, and prizes and honors have far exceeded those of a good professional player. At the 2023 WSOP Bahamas, he won the 10,000-dollar Mansion tournament, reaping the first WSOP gold bracelet of his competitive career and a whopping $411,659 in prize money, a dream that many pros have struggled to reach. According to The Hendon Mob database, his live tournament winnings have reached 2.63 million knives. Joining the AApoker team will be a great addition for him, and he is bound to achieve even more amazing results in the future.",
        content_cn: "陈东，中国扑克圈的知名\"硬汉\"，之所以有这个称呼，源于2019年的一段难忘经历。 当时陈东参加WSOP主赛事遭遇地震，刚好他是大盲位，有人起了Open，很多牌手都往外跑，而他坐着一动不动，朋友问他怎么不跑，他霸气地丢出一句：命可以不要，大盲不能丢。 不过名不虚传，陈东确实很\"硬\"，无论是牌技，还是颜值，都很抗打。他是2016年接触德州扑克，平时学习以线上比赛为主，虽然自称不是职业选手，但他的参赛场次、竞技实力、奖金荣誉已经远超一个优秀的职业选手。在2023年的WSOP巴哈马站，陈东夺得了1万刀豪客赛的冠军，收获了竞技生涯中的第一条WSOP金手链和高达411,659刀的奖金，这是很多职业选手都难以企及的梦想。 根据The Hendon Mob数据库的记录，陈东的现场赛事奖金已经达到263万刀。而加入AApoker战队，对于陈东来说无疑是如虎添翼，未来势必会创造更加惊艳的成绩。",
        content_tw: "陳東，中國撲克圈的知名\"硬漢\"，之所以有這個稱呼，源自於2019年的一段難忘經歷。 當時陳東參加WSOP主賽事遭遇地震，剛好他是大盲位，有人起了Open，很多牌手都往外跑，而他坐著一動不動，朋友問他怎麼不跑，他霸氣地丟出一句：命可以不要，大盲不能丟。 不過名不虛傳，陳東確實很\"硬\"，無論是牌技，還是顏值，都很抗打。他是2016年接觸德州撲克，平時學習以線上比賽為主，雖然自稱不是職業選手，但他的參賽場次、競技實力、獎金榮譽已經遠超一個優秀的職業選手。在2023年的WSOP巴哈馬站，陳東贏得了1萬刀豪客賽的冠軍，收穫了競技生涯中的第一條WSOP金手鍊和高達411,659刀的獎金，這是很多職業選手都難以企及的夢想。 根據The Hendon Mob資料庫的記錄，陳東的現場賽事獎金已經達到263萬刀。而加入AApoker戰隊，對陳東來說無疑是如虎添翼，未來勢必會創造出更驚豔的成績。"
      },
      {
        type: "heading",
        content: "Yara",
        content_cn: "Yara",
        content_tw: "Yara"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/8-CldaU6O8.png",
        alt: "Yara"
      },
      {
        type: "paragraph",
        content: "Yara, a 23-year-old beauty, is a rising star in the poker world. While most of her peers are just leaving school, Yara has already had multiple identities and rich experiences as a trainee, girl group member, model and beauty pageant champion. With her sweet appearance and perfect body, Yara won the Miss Oriental Chinese beauty contest in 2021. Yara's interest in poker has been evident since she was a child, and she has worked hard to learn and develop her skills, gradually making a name for herself in major tournaments. Her soft appearance and fierce poker style made her popular on the live poker show HCL, where she was nicknamed \"Yara the Destroyer,\" and her outspoken personality has won her a large number of fans around the world. Despite her young age, Yara is a multi-talented player and we look forward to seeing her continue to shine on the poker scene!",
        content_cn: "23岁的小美女Yara，是扑克圈冉冉升起的一颗新星。 当绝大多数的同龄人刚刚迈出校园时，Yara已经拥有了练习生、女团成员、模特、选美冠军等多重身份和丰富的阅历。凭借甜美的外型、完美的身材，Yara还在2021年获得了东方华美小姐比赛的冠军。 Yara从小就展现出了对扑克的浓厚兴趣，她勤奋好学，不断钻研技巧，逐渐在各大赛事中崭露头角。外表柔美的她实则牌风凶猛，这也让她在扑克直播节目HCL中大受欢迎，并被授予绰号\"Yara the Destroyer\"，加上率直可爱的个性，Yara赢得了世界各地的大批粉丝。虽然年纪轻轻，却是多才多艺，让我们期待这位小美女在扑克圈继续大放异彩！",
        content_tw: "23歲的小美人Yara，是撲克圈冉冉升起的一顆新星。 當絕大多數的同儕剛踏出校園時，Yara已經擁有了練習生、女團成員、模特兒、選美冠軍等多重身分和豐富的閱歷。憑藉著甜美的外型、完美的身材，Yara還在2021年贏得了東方華美小姐比賽的冠軍。 Yara從小就展現了對撲克牌的濃厚興趣，她勤奮好學，不斷鑽研技巧，逐漸在各大賽事中嶄露頭角。外表柔美的她實則牌風兇猛，這也讓她在撲克直播節目HCL中大受歡迎，並被授予綽號\"Yara the Destroyer\"，加上率直可愛的個性，Yara贏得了世界各地的大批粉絲。雖然年紀輕輕，卻是多才多藝，讓我們期待這位小美女在撲克圈繼續大放異彩！"
      },
      {
        type: "heading",
        content: "Joe Hachem",
        content_cn: "Joe Hachem",
        content_tw: "Joe Hachem"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/9-B-8iCOgF.png",
        alt: "Joe Hachem"
      },
      {
        type: "paragraph",
        content: "Joe Hachem, 58 years old, is a Lebanese-Australian professional poker player whose poker resume is both illustrious and long, with a total of $12.98 million in career winnings. Back in 2005, Hachem shocked the world of poker by winning the WSOP Main Event on his first trip to Las Vegas, taking home $7.5 million in prize money, which at the time was the highest tournament prize money ever, and was the first Australian poker player to win the WSOP Main Event. In 2006, he won his first WPT title, taking home $2.2 million, making him one of only six poker players to win both the WSOP Main Event and the WPT. Hachem is known as Australia's \"Godfather of Poker\" and was inducted into the Australian Poker Hall of Fame in 2009 for his role in solidifying the poker boom in Australia. Hachem is still active in top tournaments around the world, with his most recent win coming at the Australian Poker Championship on October 5th of this year. Hachem's poker resume will be even more impressive when he joins the AApoker team.",
        content_cn: "Joe Hachem，今年58岁，是一位黎巴嫩裔澳大利亚职业玩家，他的扑克履历可以说既辉煌又悠远，目前他的职业生涯总奖金高达1298万刀。 早在2005年，Hachem就震惊了世界扑克圈，他首次前往拉斯维加斯参加 WSOP，就夺得了当年WSOP主赛事的冠军，豪揽750万刀奖金，这在当时创下了有史以来的最高锦标赛奖金记录，同时也是第一位赢得WSOP主赛事的澳大利亚牌手。 而到了2006年，他又赢得了自己的第一个WPT冠军头衔，收获220万刀奖金，成为仅有的六名同时赢得WSOP主赛事和WPT冠军的扑克玩家之一。 Hachem被称为澳大利亚的\"扑克教父\"，以一己之力巩固了扑克在澳大利亚的繁荣发展，并于2009年入选澳大利亚扑克名人堂。 如今的Hachem依旧活跃在世界各地的顶级赛场，他最近的一次奖金记录就来自今年10月5日的澳大利亚扑克锦标赛。相信加入AApoker战队以后，Hachem的扑克履历会更加辉煌。",
        content_tw: "Joe Hachem，今年58歲，是黎巴嫩裔澳洲職業玩家，他的撲克履歷可以說既輝煌又悠遠，目前他的職業生涯總獎金高達1298萬刀。 早在2005年，Hachem就震驚了世界撲克圈，他首次前往拉斯維加斯參加WSOP，就奪得了當年WSOP主賽事的冠軍，豪攬750萬刀獎金，這在當時創下了有史以來的最高錦標賽獎金紀錄，同時也是第一位贏得WSOP主賽事的澳洲牌手。 而到了2006年，他又贏得了自己的第一個WPT冠軍頭銜，收穫220萬刀獎金，成為僅有的六名同時贏得WSOP主賽事和WPT冠軍的撲克玩家之一。 Hachem被稱為澳洲的\"撲克教父\"，以一己之力鞏固了撲克在澳洲的繁榮發展，並於2009年入選澳洲撲克名人堂。 如今的Hachem依舊活躍在世界各地的頂級賽場，他最近的一次獎金記錄就來自今年10月5日的澳洲撲克錦標賽。相信加入AApoker戰隊以後，Hachem的撲克履歷會更輝煌。"
      },
      {
        type: "heading",
        content: "Yi Ye",
        content_cn: "叶依",
        content_tw: "葉依"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/10-B0PAz14B.png",
        alt: "Yi Ye"
      },
      {
        type: "paragraph",
        content: "Yi Ye is a newcomer to the poker scene in 2024. With a wide range of interests and a passion for competitive poker tournaments, Ye has made her professional debut in 2024 with a series of dazzling results. By joining the AApoker team and playing alongside her predecessors in the poker world, Ye's competitive strength is sure to soar, and her future will be immeasurable! The AApoker team is strong and star-studded. With experienced veterans, stalwarts in their prime, and energetic up-and-comers full of potential, let's look forward to their exciting performance in the global arena!",
        content_cn: "叶依，2024年的扑克圈新人，兴趣爱好广泛的她，对竞技扑克赛事有着浓厚的兴趣，2024年正式出道后就交出了一系列亮眼的成绩单。 通过加入AApoker战队，与扑克圈前辈们并肩同行，叶依的竞技实力势必飙升，她的未来不可限量！ 这支AApoker战队实力强劲、星光璀璨，既有经验丰富的老将，又有当打之年的中流砥柱，还有充满潜力的朝气新秀，让我们期待他们在全球赛场上的精彩发挥！",
        content_tw: "葉依，2024年的撲克圈新人，興趣愛好廣泛的她，對競技撲克賽事有濃厚的興趣，2024年正式出道後就交出了一系列亮眼的成績單。 透過加入AApoker戰隊，與撲克圈前輩們並肩同行，葉依的競技實力勢必飆升，她的未來不可限量！ 這支AApoker戰隊實力強勁、星光璀璨，既有經驗豐富的老將，又有當打之年的中流砥柱，還有充滿潛力的朝氣新秀，讓我們期待他們在全球賽場上的精彩發揮！"
      }
    ]
  },
  "wsop-paradise-island-quan-zhou-dong-chen": {
    heroImage: "/image/news/details-news/new8/1-BZMRHpdt.png",
    sections: [
      {
        type: "paragraph",
        content: "The next two weeks will be a thrilling celebration of the WSOP Paradise Island Series. Poker players from around the world have gathered at the Bahamas' Atlantis Paradise Island to continue adding to their illustrious poker careers. Event #1: $2,500 Mini Main Event Day 1b The $2,500 Mini Main Event Day 1b attracted a total of 937 entries, with only 73 players making it through to the next round. American player Jerry Wong leads the field with a chip stack of 97.4k.",
        content_cn: "接下来的两周将是WSOP天堂岛系列赛精彩纷呈的盛宴，来自全球的扑克牌手们汇聚一堂，来到巴哈马亚特兰蒂斯天堂岛继续书写他们辉煌的扑克履历。 赛事#1：$2,500迷你主赛Day1b $2,500迷你主赛Day1b共有937人次参赛，其中只有73人成功晋级。美国牌手Jerry Wong以97.4k记分牌领跑全场。",
        content_tw: "接下來的兩週將是WSOP天堂島系列賽精彩紛呈的盛宴，來自全球的撲克牌手們匯聚一堂，來到巴哈馬亞特蘭蒂斯天堂島繼續書寫他們輝煌的撲克履歷。 賽事#1：$2,500迷你主賽Day1b $2,500迷你主賽Day1b共有937人次參賽，其中只有73人成功晉級。美國牌手Jerry Wong以97.4k記分牌領跑全場。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/2-B1dZcqzn.png",
        alt: "Jerry Wong Chip Leader"
      },
      {
        type: "paragraph",
        content: "Wong earned his first gold bracelet at the 2023 WSOP, winning Event #33: $10,000 Razz Championship. His biggest live cash came in the 2016 WSOP Main Event, where he finished 8th for $1,100,076.",
        content_cn: "Wong在2023年WSOP第33场赛事：$10,000 Razz锦标赛中夺冠，获得了他的首条金手链。Wong最大的现场赛奖金来自2016年WSOP主赛事，他在那场比赛中获得第8名，奖金为$1,100,076。",
        content_tw: "Wong在2023年WSOP第33場賽事：$10,000 Razz錦標賽中奪冠，獲得了他的首條金手鍊。Wong最大的現場賽獎金來自2016年WSOP主賽事，他在那場比賽中獲得第8名，獎金為$1,100,076。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/3-BrYCOZDV.png",
        alt: "Day 1b Chip Counts"
      },
      {
        type: "paragraph",
        content: "Other notable players advancing include Timothy Adams, Anthony Zinno, David Peters, Georgios Sotiropoulos, Justin Saliba, and more.",
        content_cn: "其他成功晋级的知名牌手还包括Timothy Adams、Anthony Zinno、David Peters、Georgios Sotiropoulos、Justin Saliba等。",
        content_tw: "其他成功晉級的知名牌手還包括Timothy Adams、Anthony Zinno、David Peters、Georgios Sotiropoulos、Justin Saliba等。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/4-CQ5Wl3QU.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "paragraph",
        content: "Quan Zhou and Dong Chen also advanced to the next stage, showcasing excellent play.",
        content_cn: "周全和陈东也成功晋级，发挥出色。",
        content_tw: "周全和陳東也成功晉級，發揮出色。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/5-k3-eIpmL.png",
        alt: "Quan Zhou and Dong Chen Chip Counts"
      },
      {
        type: "heading",
        content: "Event #2: $100,000 Triton Million Invitational",
        content_cn: "赛事#2：$100,000 Triton百万邀请赛",
        content_tw: "賽事#2：$100,000 Triton百萬邀請賽"
      },
      {
        type: "paragraph",
        content: "The prestigious $100,000 Triton Million Invitational has officially concluded its entry phase, with 96 entries, including 22 re-entries, creating a prize pool of $48 million.",
        content_cn: "享有盛誉的$100,000 Triton百万邀请赛已正式结束报名阶段，共有96人次参赛，包括22次重新买入，创造了$4800w的奖池。",
        content_tw: "享有盛譽的$100,000 Triton百萬邀請賽已正式結束報名階段，共有96人次參賽，包括22次重新買入，創造了$4800w的獎池。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/6-CvWtzvB9.png",
        alt: "Triton Million Trophy"
      },
      {
        type: "paragraph",
        content: "The first-place winner will take home an impressive $12,070,000, along with a WSOP gold bracelet and the Triton trophy. The top 17 players are guaranteed at least $755,000 in prize money.",
        content_cn: "冠军将获得令人印象深刻的$12,070,000，以及一枚WSOP金手链和Triton奖杯。前17名选手保证至少获得$755,000的奖金。",
        content_tw: "冠軍將獲得令人印象深刻的$12,070,000，以及一枚WSOP金手鍊和Triton獎盃。前17名選手保證至少獲得$755,000的獎金。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/7-1DZEGjLX.png",
        alt: "Michael Moncek"
      },
      {
        type: "paragraph",
        content: "At the conclusion of Day 2, only 14 players remain in contention. Michael Moncek, who led the Day 1 chip counts, continued his strong performance on Day 2, retaining the lead with 125k in chips. Moncek has become a fan favorite for his aggressive playstyle and nearly 100% VPIP (voluntarily put money in pot). However, after suffering a loss of nearly $2 million in the high-stakes cash games, Moncek had a tough summer. Now, he hopes to recover his losses and add to his winnings. Following Moncek are Daniel Dvoress with 123.5k and Alejandro Lococo with 107.75k.",
        content_cn: "Day2结束时，场上只剩下14名选手。Day1记分牌领先的Michael Moncek在Day2继续保持强劲势头，以125k记分牌继续领跑。Moncek以其激进的打法和接近100%的VPIP（自愿入池率）而成为粉丝的最爱。然而，在高额现金局中损失近200w刀后，Moncek度过了一个艰难的夏天。现在，他希望能挽回损失并增加奖金。紧随Moncek之后的是拥有123.5k的Daniel Dvoress和拥有107.75k的Alejandro Lococo。",
        content_tw: "Day2結束時，場上只剩下14名選手。Day1記分牌領先的Michael Moncek在Day2繼續保持強勁勢頭，以125k記分牌繼續領跑。Moncek以其激進的打法和接近100%的VPIP（自願入池率）而成為粉絲的最愛。然而，在高額現金局中損失近200w刀後，Moncek度過了一個艱難的夏天。現在，他希望能挽回損失並增加獎金。緊隨Moncek之後的是擁有123.5k的Daniel Dvoress和擁有107.75k的Alejandro Lococo。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/8-3wiflhiK.png",
        alt: "Day 2 Chip Counts"
      },
      {
        type: "paragraph",
        content: "Notable players who fell short of the money include Phil Ivey, Jason Koon, Patrik Antonius, Isaac Haxton, Nick Schulman, and Justin Bonomo.",
        content_cn: "未能进入奖励圈的知名选手包括Phil Ivey、Jason Koon、Patrik Antonius、Isaac Haxton、Nick Schulman和Justin Bonomo。",
        content_tw: "未能進入獎勵圈的知名選手包括Phil Ivey、Jason Koon、Patrik Antonius、Isaac Haxton、Nick Schulman和Justin Bonomo。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/9-BL6an0gC.png",
        alt: "Phil Ivey and Justin Bonomo"
      },
      {
        type: "paragraph",
        content: "This marked Daniel Negreanu's first appearance in a Triton event, and despite being a newcomer, he made it to Day 2. However, in Level 12 (Blinds 15,000/30,000/30,000), his AK failed to overcome Kayhan Mokri's KK, and he was eliminated in 58th place. Although Ivey and Daniel Negreanu did not make it to the end, they still have multiple opportunities to win their second gold bracelet of the year, as there are several events left on the schedule.",
        content_cn: "这是Daniel Negreanu首次参加Triton赛事，尽管是新手，他还是进入了Day2。然而，在Level 12（盲注15,000/30,000/30,000）中，他的AK未能战胜Kayhan Mokri的KK，以第58名被淘汰。虽然Ivey和Daniel Negreanu没有坚持到最后，但他们仍有多次机会赢得今年的第二枚金手链，因为赛程中还有几场赛事。",
        content_tw: "這是Daniel Negreanu首次參加Triton賽事，儘管是新手，他還是進入了Day2。然而，在Level 12（盲注15,000/30,000/30,000）中，他的AK未能戰勝Kayhan Mokri的KK，以第58名被淘汰。雖然Ivey和Daniel Negreanu沒有堅持到最後，但他們仍有多次機會贏得今年的第二枚金手鍊，因為賽程中還有幾場賽事。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/10-BLiP2UB-.png",
        alt: "ST Wang"
      },
      {
        type: "heading",
        content: "ST Wang Takes Over the Torch",
        content_cn: "ST Wang接过接力棒",
        content_tw: "ST Wang接過接力棒"
      },
      {
        type: "paragraph",
        content: "Despite the early exits of players like Biao Ding and Elton Tsang, ST Wang has taken up the mantle for the Chinese players and advanced with the hopes of many. At the end of Day 2, ST Wang qualified for the next round with a chip stack of 1,000,000. While he holds the smallest stack among the remaining players, poker is unpredictable, and anything can happen. We wish him the best of luck in making an incredible comeback.",
        content_cn: "尽管丁彪、Elton Tsang等选手早早出局，但ST Wang为国人选手扛起了大旗，带着众人的期望晋级。Day2结束时，ST Wang以1,000,000的记分牌晋级下一轮。虽然他在剩余选手中记分牌最少，但扑克是不可预测的，任何事情都可能发生。我们祝他好运，实现令人难以置信的逆转。",
        content_tw: "儘管丁彪、Elton Tsang等選手早早出局，但ST Wang為國人選手扛起了大旗，帶著眾人的期望晉級。Day2結束時，ST Wang以1,000,000的記分牌晉級下一輪。雖然他在剩餘選手中記分牌最少，但撲克是不可預測的，任何事情都可能發生。我們祝他好運，實現令人難以置信的逆轉。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/11-BdEfteIY.png",
        alt: "ST Wang Chip Count"
      },
      {
        type: "paragraph",
        content: "The remaining 14 players will return for the final showdown at 12:00 PM local time on December 9 to compete for the title in this historic event.",
        content_cn: "剩余的14名选手将在12月9日当地时间中午12:00返回进行最后对决，争夺这一历史性赛事的冠军。",
        content_tw: "剩餘的14名選手將在12月9日當地時間中午12:00返回進行最後對決，爭奪這一歷史性賽事的冠軍。"
      }
    ]
  },
  "congratulations-xu-xin-yin-china-chip-count-leader": {
    heroImage: "/image/news/details-news/new9/1-BxcuLED7.png",
    sections: [
      {
        type: "paragraph",
        content: "Congratulations to the #9 KPC Single Day Super High Roller Champion! XU XIN YIN from China!! Total Entries: 72 Total Prize Pool: 2,236,750,000 KRW",
        content_cn: "祝贺第9场KPC单日超级豪客赛冠军！来自中国的XU XIN YIN！！ 总参赛人数：72 总奖池：2,236,750,000韩元",
        content_tw: "祝賀第9場KPC單日超級豪客賽冠軍！來自中國的XU XIN YIN！！ 總參賽人數：72 總獎池：2,236,750,000韓元"
      }
    ]
  },
  "aa-poker-jeju-won-two-prestigious-championships": {
    heroImage: "/image/news/details-news/new10/1-psNKaG0r.png",
    sections: [
      {
        type: "paragraph",
        content: "WPT Korea Championship is comes to the end, the spotlight shone brightly on Dong Chen from Ningbo, China, as he won the prestigious Super High Roller title. This event, which attracted 14 entries, featured some of the biggest names in poker world, including Japanese high roller regular Koichi Chiba and WSOP regular Joseph Cheong, both of them made into the non-official final table of 9 players. In an electrifying heads-up duel, Dong Chen battled against Mongolia's Bayar Saran. The two eventually struck an ICM deal, with Chen holding the chip lead and seizing the victory. This milestone triumph earned Chen his first WPT Korea championship trophy and the coveted WPT High Roller ring of the series. The Super High Roller event, marked by a high-stakes lineup and exceptional gameplay, has solidified its place as a highlight of this year's WPT Korea festival, building anticipation for a thrilling conclusion to the series.",
        content_cn: "WPT韩国锦标赛接近尾声，来自中国宁波的陈东成为焦点，他赢得了享有盛誉的超级豪客赛冠军。这场赛事吸引了14人参赛，汇集了扑克界的一些最大牌选手，包括日本豪客赛常客Koichi Chiba和WSOP常客Joseph Cheong，他们都进入了非正式的9人决赛桌。在一场电光石火的单挑对决中，陈东与蒙古的Bayar Saran展开激战。两人最终达成了ICM协议，陈东以筹码领先优势夺得胜利。这一里程碑式的胜利为陈东赢得了他的第一个WPT韩国锦标赛奖杯和令人垂涎的WPT豪客赛戒指。超级豪客赛以高额阵容和出色的游戏为特色，已成为今年WPT韩国节的亮点，为系列赛的精彩结局增添了期待。",
        content_tw: "WPT韓國錦標賽接近尾聲，來自中國寧波的陳東成為焦點，他贏得了享有盛譽的超級豪客賽冠軍。這場賽事吸引了14人參賽，匯集了撲克界的一些最大牌選手，包括日本豪客賽常客Koichi Chiba和WSOP常客Joseph Cheong，他們都進入了非正式的9人決賽桌。在一場電光石火的單挑對決中，陳東與蒙古的Bayar Saran展開激戰。兩人最終達成了ICM協議，陳東以籌碼領先優勢奪得勝利。這一里程碑式的勝利為陳東贏得了他的第一個WPT韓國錦標賽獎杯和令人垂涎的WPT豪客賽戒指。超級豪客賽以高額陣容和出色的遊戲為特色，已成為今年WPT韓國節的亮點，為系列賽的精彩結局增添了期待。"
      }
    ]
  },
  "pure-quality-gold-quan-zhou-tlpt-25k": {
    heroImage: "/image/news/details-news/new11/1-CTf9bq3s.png",
    sections: [
      {
        type: "paragraph",
        content: "China's Quan Zhou has come out on top of a 34-entry field in The Lord Poker Tour $25K International to take home add $332,250 to his lifetime earnings. Zhou will remain fourth on China's All Time Money List, although the six-figure score – amazingly, not even qualifying inside his top ten results – will take him within striking distance of reaching US$10M, according to his HendonMob.",
        content_cn: "中国的周全在The Lord Poker Tour 25,000美元国际赛中从34人参赛阵容中脱颖而出，将332,250美元的奖金加入他的职生浯总奖金中。根据HendonMob的数据，周全将继续保持中国历史奖金榜第四名，尽管这个六位数的奖金——令人惊讶的是，甚至没有进入他的前十名成绩——将使他接近达到1000万美元的里程碑。",
        content_tw: "中國的周全在The Lord Poker Tour 25,000美元國際賽中從34人參賽陣容中脱穎而出，將332,250美元的獎金加入他的職生涯總獎金中。根據HendonMob的數據，周全將繼續保持中國歷史獎金榜第四名，儘管這個六位數的獎金——令人驚訝的是，甚至沒有進入他的前十名成績——將使他接近達到1000萬美元的里程碑。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new11/2-DXnXhca6.png",
        alt: "Quan Zhou with Trophy"
      },
      {
        type: "paragraph",
        content: "The 40yr old professional has a resume most would be envious of, including a seven-figure score for a 5th place finish in the Triton Poker SHR Monte Carlo just last year. Other notable results include two WPT titles (in the WPT World Championship $10K PLO and WPT Korea NL 2-7 SD), a 2023 EPT Cyprus Mystery Bounty title, a Triton Poker SHR Jeju $25K PLO win, and a 2017 PokerStars Championship Macau title. Just a couple of months ago, Zhou added a PGT Super High Roller Bowl title to his accolades. Other non-win accomplishments include 4th in the WSOP Paradise $100K SHR, a runner-up finish in WPT Alpha8 One Drop Korea, and a runner-up finish in the Triton Poker SHR Monte Carlo $20K PLO just a week after his Main Event final table in the same series.",
        content_cn: "这位40岁的职业选手拥有令大多数人羡慕的履历，包括去年在Triton Poker SHR蒙特卡洛获得第5名的七位数奖金。其他显著成绩包括两个WPT冠军（WPT世界锦标赛10,000美元PLO和WPT韩国NL 2-7 SD）、2023年EPT塞浦路斯神秘赏金冠军、Triton Poker SHR济州25,000美元PLO冠军以及2017年PokerStars锦标赛澳门冠军。几个月前，周全还赢得了PGT超级豪客碗冠军。其他非冠军成就包括WSOP天堂100,000美元SHR第4名、WPT Alpha8 One Drop韩国亚军，以及在同一系列赛主赛事决赛桌一周后的Triton Poker SHR蒙特卡洛20,000美元PLO亚军。",
        content_tw: "這位40歲的職業選手擁有令大多數人羨慕的履歷，包括去年在Triton Poker SHR蒙特卡洛獲得第5名的七位數獎金。其他顯著成績包括兩個WPT冠軍（WPT世界錦標賽10,000美元PLO和WPT韓國NL 2-7 SD）、2023年EPT塞浦路斯神秘賞金冠軍、Triton Poker SHR濟州25,000美元PLO冠軍以及2017年PokerStars錦標賽澳門冠軍。幾個月前，周全還贏得了PGT超級豪客碗冠軍。其他非冠軍成就包括WSOP天堂100,000美元SHR第4名、WPT Alpha8 One Drop韓國亞軍，以及在同一系列賽主賽事決賽桌一週後的Triton Poker SHR蒙特卡洛20,000美元PLO亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new11/3-BdmG5toI.png",
        alt: "Quan Zhou Playing"
      },
      {
        type: "paragraph",
        content: "Fan favourite Yoon Kang took the chip lead through the bubble in the event, utilising some world class bluffs along with ICM pressure plays. When Zhou rivered a straight flush to take control in the latter stages, Kang fell behind and was unable to recover from the five-to-one chip deficit upon reaching heads up. Kang— who has made headlines throughout the week for both good and bad reasons – pulled through for the crowd, turning his $25K entry earned from bubbling last year into $183,000.",
        content_cn: "粉丝最爱的Yoon Kang在赛事中通过泡沫阶段取得筹码领先，运用了一些世界级的诈啀和ICM压力打法。当周全在后期阶段在河牌上击中同花顺取得控制权时，Kang落后了，并且在进入单挑时无法从五比一的筹码劣势中恢复。Kang——他因好坏原因在本周成为头条新闻——为观众坚持了下来，将他去年因泡沫赚得的25,000美元参赛资格变成了183,000美元。",
        content_tw: "粉絲最愛的Yoon Kang在賽事中通過泡沫階段取得籌碼領先，運用了一些世界級的詐啀和ICM壓力打法。當周全在後期階段在河牌上擊中同花順取得控制權時，Kang落後了，並且在進入單挑時無法從五比一的籌碼劣勢中恢復。Kang——他因好壞原因在本週成為頭條新聞——為觀眾堅持了下來，將他去年因泡沫賺得的25,000美元參賽資格變成了183,000美元。"
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
        content: "The Lord Poker Tour Main Event reached an epic conclusion yesterday as Andy Lee manoeuvred from short stack to Champion on a final table stacked with talent to record his tenth six-figure result, collecting $205,305 for the win. Lee, originally from Malaysia and a long time Sydney resident, is certainly no stranger to the Australian poker community. Relocating to Sydney in 2004 to study finance, it did not take long for Lee to discover poker, and has since become one of the countries most accomplished high stakes PLO cash game players.",
        content_cn: "The Lord Poker Tour主赛事昨天迎来了史诗般的结局，Andy Lee在人才济济的决赛桌上从短筹码逆袭成为冠军，创下了他的第十个六位数成绩，赢得了205,305美元的奖金。Lee原籍马来西亚，长期居住在悉尼，对澳大利亚扑克界来说绝不陌生。2004年搬到悉尼学习金融，Lee很快就发现了扑克，并成为该国最杰出的高额PLO现金游戏选手之一。",
        content_tw: "The Lord Poker Tour主賽事昨天迎來了史詩般的結局，Andy Lee在人才濟濟的決賽桌上從短籌碼逆襲成為冠軍，創下了他的第十個六位數成績，贏得了205,305美元的獎金。Lee原籍馬來西亞，長期居住在悉尼，對澳大利亞撲克界來說絕不陌生。2004年搬到悉尼學習金融，Lee很快就發現了撲克，並成為該國最傑出的高額PLO現金遊戲選手之一。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/2-DV3drWPs.png",
        alt: "Andy Lee Playing"
      },
      {
        type: "paragraph",
        content: "Lee managed his stack effectively throughout the day.",
        content_cn: "Lee在整个比赛日有效地管理了他的筹码。",
        content_tw: "Lee在整個比賽日有效地管理了他的籌碼。"
      },
      {
        type: "paragraph",
        content: "Lee is also a very accomplished tournament player, with his first major tournament breakthrough came in 2011 when he won the Star Poker Summer Series main event for $270,000. Since then, his resume includes a WSOPC Sydney $20K High Roller ring for $273,600, a WSOP Online bracelet in PLO, an Aussie Millions ring in an $1,100 Mix-Max, in addition to runner-up finishes in the Aussie Millions $25K PLO, APL Million $5K Challenge, and WSOP APAC $5K 6-Max. Nine players started the final table but only seven would make the money. Lee actually entered the final day of play as the short stack, at one point getting down to just three big blinds – those going into the centre with 8♣6♣ against the A♠8♦ of Andres Vasquez as Lee hit a flush to start his steady rise up the chip counts as others fell around him.",
        content_cn: "Lee也是一位非常出色的锦标赛选手，他的第一次重大锦标赛突破是在2011年，当时他赢得了Star Poker夏季系列赛主赛事，获得270,000美元。从那以后，他的履历包括WSOPC悉尼20,000美元豪客赛戒指（273,600美元）、WSOP在线PLO金手链、Aussie Millions 1,100美元Mix-Max戒指，以及Aussie Millions 25,000美元PLO、APL百万5,000美元挑战赛和WSOP APAC 5,000美元六人桌的亚军。九名选手开始决赛桌，但只有七名能够获得奖金。Lee实际上以短筹码进入最后一天的比赛，一度降至只有三个大盲注——他用8♣6♣对抗Andres Vasquez的A♠8♦全下，Lee击中同花开始稳步上升筹码量，而其他人则纷纷倒下。",
        content_tw: "Lee也是一位非常出色的錦標賽選手，他的第一次重大錦標賽突破是在2011年，當時他贏得了Star Poker夏季系列賽主賽事，獲得270,000美元。從那以後，他的履歷包括WSOPC悉尼20,000美元豪客賽戒指（273,600美元）、WSOP在線PLO金手鍊、Aussie Millions 1,100美元Mix-Max戒指，以及Aussie Millions 25,000美元PLO、APL百萬5,000美元挑戰賽和WSOP APAC 5,000美元六人桌的亞軍。九名選手開始決賽桌，但只有七名能夠獲得獎金。Lee實際上以短籌碼進入最後一天的比賽，一度降至只有三個大盲注——他用8♣6♣對抗Andres Vasquez的A♠8♦全下，Lee擊中同花開始穩步上升籌碼量，而其他人則紛紛倒下。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/3-DdG4qkTu.png",
        alt: "WSOP Bracelet Ceremony"
      },
      {
        type: "paragraph",
        content: "Andy Lee wins 2017 WSOPC Sydney $20K High Roller. Yoon Kang would then become the first to go – shoving possibly after failing to notice an open from Alex Lynskey, the hand and clip in yesterday's PMA Blog – followed by Queensland's own Josh Hutchins as the stone bubble. USA's Andres Vasquez and Colombia's Andres Gonzalez both scored their second TLPT cashes of the week, before Alex Lynskey ran into a series of unfortunate events to lock up a fifth place finish. Angel Guillen ran headlong into Yisha Chen's sun run, getting it in with J♣10♣ against her A♦J♦, both players missing completely as Chen added Guillen to her list of impressive scalps in the event; that list including Lynskey just prior, as well as Didier Guerin and Dan \"Jungleman Cates\" on Day 2.",
        content_cn: "Andy Lee赢得2017年WSOPC悉尼20,000美元豪客赛。Yoon Kang随后成为第一个出局的——可能在没有注意到Alex Lynskey的加注后全下，这手牌和片段在昨天的PMA博客中——紧接着是昆士兰本地人Josh Hutchins作为泡沫。美国的Andres Vasquez和哥伦比亚的Andres Gonzalez都获得了本周第二次TLPT奖金，之后Alex Lynskey遭遇一系列不幸事件，锁定第五名。Angel Guillen正面撞上了陈一莎的好运，他用J♣10♣对抗她的A♦J♦全下，两名选手都完全没中，陈一莎将Guillen加入她在赛事中令人印象深刻的战绩名单；该名单还包括之前的Lynskey，以及第二天的Didier Guerin和Dan『Jungleman Cates』。",
        content_tw: "Andy Lee贏得2017年WSOPC悉尼20,000美元豪客賽。Yoon Kang隨後成為第一個出局的——可能在沒有注意到Alex Lynskey的加注後全下，這手牌和片段在昨天的PMA博客中——緊接著是昆士蘭本地人Josh Hutchins作為泡沫。美國的Andres Vasquez和哥倫比亞的Andres Gonzalez都獲得了本週第二次TLPT獎金，之後Alex Lynskey遭遇一系列不幸事件，鎖定第五名。Angel Guillen正面撞上了陳一莎的好運，他用J♣10♣對抗她的A♦J♦全下，兩名選手都完全沒中，陳一莎將Guillen加入她在賽事中令人印象深刻的戰績名單；該名單還包括之前的Lynskey，以及第二天的Didier Guerin和Dan『Jungleman Cates』。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/4-BEafJIyO.png",
        alt: "Final Table Action"
      },
      {
        type: "paragraph",
        content: "Chen's run came to an end in third place, before Lee and Western Australia's Travis Endersby agreed on an ICM deal before playing it out to decide a winner. Lee eventually rivering a straight to down Endersby.",
        content_cn: "陈一莎的征程在第三名结束，之后Lee和西澳大利亚的Travis Endersby达成ICM协议，然后继续比赛决定胜者。Lee最终在河牌击中顺子击败Endersby。",
        content_tw: "陳一莎的征程在第三名結束，之後Lee和西澳大利亞的Travis Endersby達成ICM協議，然後繼續比賽決定勝者。Lee最終在河牌擊中順子擊敗Endersby。"
      },
      {
        type: "heading",
        content: "TLPT Main Event – Results",
        content_cn: "TLPT主赛事 – 结果",
        content_tw: "TLPT主賽事 – 結果"
      },
      {
        type: "image",
        src: "/image/news/details-news/new12/6-en-CNilv-nJ.png",
        alt: "Final Results Table"
      }
    ]
  },
  "2024-pgt-super-high-roller-series-chinese-poker-star": {
    heroImage: "/image/news/details-news/new13/1-v6iw6zI6.png",
    sections: [
      {
        type: "paragraph",
        content: "China's Quan Zhou (cover image) made a statement at the 2024 Super High Roller Series in North Cyprus. Fresh off a win in the Red Dragon High Roller in Jeju just two weeks before, Zhou, looking sharp in an unusually bright white suit, conquered a field of 39 top-tier players in Event #2: $25,750 No-Limit Hold'em (7-Max). He walked away with his first PGT title, the coveted PGT Gold Cup, and a grand $316,000 prize – the eighth-biggest win of his career.",
        content_cn: "中国的周全（封面图片）在2024年北塞浦路斯超级豪客系列赛上大放异彩。两周前刚刚在济州红龙豪客赛夺冠，周全穿着一身格外亮眼的白色西装，在第2场赛事：25,750美元无限注德州扑克（7人桌）中击败了39名顶级选手。他带走了他的第一个PGT冠军头衔、令人垂涎的PGT金杯和316,000美元的奖金——这是他职业生涯第八大的胜利。",
        content_tw: "中國的周全（封面圖片）在2024年北塞浦路斯超級豪客系列賽上大放異彩。兩週前剛剛在濟州紅龍豪客賽奪冠，周全穿著一身格外亮眼的白色西裝，在第2場賽事：25,750美元無限注德州撲克（7人桌）中擊敗了39名頂級選手。他帶走了他的第一個PGT冠軍頭銜、令人垂涎的PGT金杯和316,000美元的獎金——這是他職業生涯第八大的勝利。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new13/2-CVImvW7J.png",
        alt: "Quan Zhou with PGT Gold Cup"
      },
      {
        type: "paragraph",
        content: "The final table was intense, full of quick hands and big moves. It all came down to a fast-paced heads-up match between Zhou and the UK's Lewis Spencer. Spencer put up a good fight but, in the end, fell short, taking home a sizeable $220,000 in second place.",
        content_cn: "决赛桌非常激烈，充满了快速的手牌和大动作。最终归结为周全和英国的Lewis Spencer之间快节奏的单挑对决。Spencer奋力拼搏，但最终落败，带走了22万美元的亚军奖金。",
        content_tw: "決賽桌非常激烈，充滿了快速的手牌和大動作。最終歸結為周全和英國的Lewis Spencer之間快節奏的單挑對決。Spencer奮力拼搏，但最終落敗，帶走了22萬美元的亞軍獎金。"
      },
      {
        type: "table",
        title: "Final Results",
        headers: ["Place", "Player", "Country", "Prize"],
        rows: [
          ["1", "Quan Zhou", "China", "$316,000"],
          ["2", "Lewis Spencer", "UK", "$220,000"],
          ["3", "Ren Lin", "China", "$158,000"],
          ["4", "Benjamin Heath", "UK", "$116,500"],
          ["5", "Felipe Ketzer", "Brazil", "$83,000"],
          ["6", "Jeremy Ausmus", "USA", "$62,000"]
        ]
      }
    ]
  },
  "pgt-super-high-roller-quan-zhou-victory": {
    heroImage: "/image/news/details-news/new13/1-v6iw6zI6.png",
    sections: [
      {
        type: "paragraph",
        content: "China's Quan Zhou (cover image) made a statement at the 2024 Super High Roller Series in North Cyprus. Fresh off a win in the Red Dragon High Roller in Jeju just two weeks before, Zhou, looking sharp in an unusually bright white suit, conquered a field of 39 top-tier players in Event #2: $25,750 No-Limit Hold'em (7-Max). He walked away with his first PGT title, the coveted PGT Gold Cup, and a grand $316,000 prize – the eighth-biggest win of his career. The final table was intense, full of quick hands and big moves. It all came down to a fast-paced heads-up match between Zhou and the UK's Lewis Spencer. Spencer put up a good fight but, in the end, fell short, taking home a sizeable $220,000 in second place. Zhou's impressive run in this 10-day event affirmed his 10,000 buy-in win at the Monte Carlo $125K Event and a jaw-dropping $1,165,000. The $25,750 buy-in event, held at the luxurious Merit Royal Diamond Hotel & Spa, generated a prize pool of $965,500, shared among the top six players. Some other big names who made it to the final table were Ren Lin (3rd for $158,000), Benjamin Heath (4th for $116,500), Felipe Ketzer (5th for $83,000), and Jeremy Ausmus (6th for $62,000). Zhou's win moved him up to 198th on the PGT leaderboard with a total of 222 PGT points. Event #1 winner Roman Hrabec is close behind at Lewis Spencer's second place finish at 426 PGT Points. Ben Lin, Lewis Spencer, and Ren Lin also made a big leap to 42nd place with 773 PGT points.",
        content_cn: "中国的周全（封面图片）在2024年北塞浦路斯超级豪客系列赛上大放异彩。两周前刚刚在济州红龙豪客赛夺冠，周全穿着一身格外亮眼的白色西装，在第2场赛事：25,750美元无限注德州扑克（7人桌）中击败了39名顶级选手。他带走了他的第一个PGT冠军头衔、令人垂涎的PGT金杯和316,000美元的奖金——这是他职业生涯第八大的胜利。决赛桌非常激烈，充满了快速的手牌和大动作。最终归结为周全和英国的Lewis Spencer之间快节奏的单挑对决。Spencer奋力拼搏，但最终落败，带走了22万美元的亚军奖金。周全在这个为期10天的赛事中的出色表现证明了他在蒙特卡洛125K赛事中10,000美元买入的胜利和令人惊叹的1,165,000美元奖金。这场25,750美元买入的赛事在豪华的Merit Royal Diamond酒店及水疗中心举行，产生了965,500美元的奖池，由前六名选手分享。其他进入决赛桌的大牌选手包括林仁（第3名，158,000美元）、Benjamin Heath（第4名，116,500美元）、Felipe Ketzer（第5名，83,000美元）和Jeremy Ausmus（第6名，62,000美元）。周全的胜利使他在PGT排行榜上升至第198位，共计222个PGT积分。第1场赛事冠军Roman Hrabec紧随Lewis Spencer的亚军之后，获得426个PGT积分。Ben Lin、Lewis Spencer和林仁也大幅跃升至第42位，获得773个PGT积分。",
        content_tw: "中國的周全（封面圖片）在2024年北塞浦路斯超級豪客系列賽上大放異彩。兩週前剛剛在濟州紅龍豪客賽奪冠，周全穿著一身格外亮眼的白色西裝，在第2場賽事：25,750美元無限注德州撲克（7人桌）中擊敗了39名頂級選手。他帶走了他的第一個PGT冠軍頭銜、令人垂涎的PGT金杯和316,000美元的獎金——這是他職業生涯第八大的勝利。決賽桌非常激烈，充滿了快速的手牌和大動作。最終歸結為周全和英國的Lewis Spencer之間快節奏的單挑對決。Spencer奮力拼搏，但最終落敗，帶走了22萬美元的亞軍獎金。周全在這個為期10天的賽事中的出色表現證明了他在蒙特卡洛125K賽事中10,000美元買入的勝利和令人驚嘆的1,165,000美元獎金。這場25,750美元買入的賽事在豪華的Merit Royal Diamond酒店及水療中心舉行，產生了965,500美元的獎池，由前六名選手分享。其他進入決賽桌的大牌選手包括林仁（第3名，158,000美元）、Benjamin Heath（第4名，116,500美元）、Felipe Ketzer（第5名，83,000美元）和Jeremy Ausmus（第6名，62,000美元）。周全的勝利使他在PGT排行榜上升至第198位，共計222個PGT積分。第1場賽事冠軍Roman Hrabec緊隨Lewis Spencer的亞軍之後，獲得426個PGT積分。Ben Lin、Lewis Spencer和林仁也大幅躍升至第42位，獲得773個PGT積分。"
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
        content: "Exciting Recap: Congratulations to QUAN ZHOU (China) winning the Event #30 Red Dragon High Roller (₩149,850,000)!",
        content_cn: "精彩回顾：祝贺周全（中国）赢得第30场赛事红龙豪客赛（₩149,850,000）！",
        content_tw: "精彩回顧：祝賀周全（中國）贏得第30場賽事紅龍豪客賽（₩149,850,000）！"
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
        content: "Results:",
        content_cn: "结果：",
        content_tw: "結果："
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
        content: "Don't miss out on our upcoming events! Follow us on social media for the latest updates on the Jeju Poker Festival in November!",
        content_cn: "不要错过我们即将举行的赛事！关注我们的社交媒体，获取济州扑克节十一月的最新动态！",
        content_tw: "不要錯過我們即將舉行的賽事！關注我們的社交媒體，獲取濟州撲克節十一月的最新動態！"
      }
    ]
  },
  "jin-bei-cup-xiao-yao-bulldozes-single-day-nlh": {
    heroImage: "/image/news/details-news/new15/1-CECW0A4i.png",
    sections: [
      {
        type: "paragraph",
        content: "The Jin Bei Cup – Single Day NLH drew 77 entries for a prize pool of US$ 385,000. The top 10 earned a cut. Among those that ran strong but missed the mark were Chinese pro Quan Zhou, Malaysia's Woon Yoke Wei, Singapore's Jacson Feng, and Indonesia's Jhon Hendri. Buy in: US$ 5,300 Entries: 77 Prize pool: US$ 385,000 ITM: 10 places",
        content_cn: "金杯赛 – 单日NLH吸引了77人参赛，奖池为385,000美元。前10名获得奖金。那些表现强劲但未能成功的选手包括中国职业选手周全、马来西亚的Woon Yoke Wei、新加坡的Jacson Feng和印度尼西亚的Jhon Hendri。买入：5,300美元 参赛人数：77 奖池：385,000美元 奖金圈：10人",
        content_tw: "金杯賽 – 單日NLH吸引了77人參賽，獎池為385,000美元。前10名獲得獎金。那些表現強勁但未能成功的選手包括中國職業選手周全、馬來西亞的Woon Yoke Wei、新加坡的Jacson Feng和印度尼西亞的Jhon Hendri。買入：5,300美元 參賽人數：77 獎池：385,000美元 獎金圈：10人"
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
        content: "China's Xiao Yao fully dominated the first event of the inaugural Jin Bei Cup, eliminating a staggering seven players at the final table to clinch the Single Day NLH title and lock up the US$ 131,000 top prize. In a brief interview with the newly crowned champion, Xiao Yao shared, \"I am very happy and I was very lucky!\" Just before the final table was formed, Xiao Yao began his knockout spree at two spots before the money. He finished off Chinese online pro Xuming Qi with a dominated Ace then shattered the bubble to Wei in the same fashion. Entering the final table as chip leader, Xiao Yao's hot-hand continued with Tom Dwan (8th) and Ge Zhong (9th) meeting his mighty axe simultaneously.",
        content_cn: "中国的肖遥完全主导了首届金杯赛的第一场赛事，在决赛桌上淘汰了7名选手，夺得单日NLH冠军并锁定131,000美元的头奖。在与新加冒的冠军的简短采访中，肖遥分享道：『我非常高兴，我非常幸运！』就在决赛桌形成之前，肖遥在奖金圈前两个位置开始了他的淘汰物正。他用压制A淘汰了中国线上职业选手齐旭明，然后以同样的方式击碎了Wei的泡沫。以筹码领先进入决赛桌，肖遥的好手气继续，Tom Dwan（第8名）和钟戈（第9名）同时倒在了他强大的斧头下。",
        content_tw: "中國的肖遥完全主導了首屆金杯賽的第一場賽事，在決賽桌上淘汰了7名選手，奪得單日NLH冠軍並鎖定131,000美元的頭獎。在與新加冒的冠軍的簡短採訪中，肖遥分享道：『我非常高興，我非常幸運！』就在決賽桌形成之前，肖遥在獎金圈前兩個位置開始了他的淘汰物正。他用壓制A淘汰了中國線上職業選手齊旭明，然後以同樣的方式擊碎了Wei的泡沫。以籌碼領先進入決賽桌，肖遥的好手氣繼續，Tom Dwan（第8名）和鐘戈（第9名）同時倒在了他強大的斧頭下。"
      },
      {
        type: "paragraph",
        content: "The all ins were seen at a flop that completed. Xiao Yao 'scrushed Dwan' sand Zhong's top pair. Reminiscing the big takedown, Xiao Yao was all smiles, \"I felt I could beat Tom Dwan. I knew I could when I went all in.\"",
        content_cn: "全下是在翻牌完成时看到的。肖遥的牌压过了Dwan和钟戈的顶对。回忆这次重大的击杀，肖遥满脸笑容：『我觉得我可以击败Tom Dwan。当我全下的时候，我知道我可以。』",
        content_tw: "全下是在翻牌完成時看到的。肖遥的牌壓過了Dwan和鐘戈的頂對。回憶這次重大的擊殺，肖遥滿臉笑容：『我覺得我可以擊敗Tom Dwan。當我全下的時候，我知道我可以。』"
      },
      {
        type: "heading",
        content: "Tom Dwan",
        content_cn: "Tom Dwan",
        content_tw: "Tom Dwan"
      },
      {
        type: "paragraph",
        content: "It was indeed a game-changer as Xiao Yao soared way above the rest and never looked back. Leading up to his victory, Xiao Yao eliminated Lu Jiang (7th), Travis (6th), Ken Lin (5th), and Xia Feng (3rd), to face Mic at heads up. It didn't take long for Xiao Yao to nail it shut with the final handover",
        content_cn: "这确实是一个改变局势的时刻，肖遥高高凌驾于其他人之上，再也没有回头。在获胜之前，肖遥淘汰了Lu Jiang（第7名）、Travis（第6名）、Ken Lin（第5名）和Xia Feng（第3名），与Mic进行单挑。肖遥很快就以最后一手的交接将比赛锤死。",
        content_tw: "這確實是一個改變局勢的時刻，肖遥高高凌駕於其他人之上，再也沒有回頭。在獲勝之前，肖遥淘汰了Lu Jiang（第7名）、Travis（第6名）、Ken Lin（第5名）和Xia Feng（第3名），與Mic進行單挑。肖遥很快就以最後一手的交接將比賽錘死。"
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
        content: "This event was just practice for Xiao Yao who shrugged off the win saying, \"I will definitely play the Main Event tomorrow. This is just small, just practice. Tomorrow is what matters.\"",
        content_cn: "这场赛事对肖遥来说只是练习，他轻描淡写地说：『我明天肯定会参加主赛事。这只是小比赛，只是练习。明天才是最重要的。』",
        content_tw: "這場賽事對肖遥來說只是練習，他輕描淡寫地說：『我明天肯定會參加主賽事。這只是小比賽，只是練習。明天才是最重要的。』"
      },
      {
        type: "paragraph",
        content: "Congratulations Xiao Yao. He takes home $131,001 in our $5,000 No Limit Holdem event.",
        content_cn: "祝贺肖遥。他在我们的5,000美元无限注德州扑克赛事中带走131,001美元。",
        content_tw: "祝賀肖遥。他在我們的5,000美元無限注德州撲克賽事中帶走131,001美元。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new15/8-DktFMPqd.png",
        alt: "Xiao Yao Champion"
      }
    ]
  },
  "china-boxin-jin-claims-maiden-apt-title": {
    heroImage:"/image/news/section-more-information/new23-zF0Rc3Ik.png",
    sections: [
      {
        type: "paragraph",
        content: "JEJU, SOUTH KOREA, April 26, 2024 – Welcome to the APT Jeju 2024, with the action-packed 10-day festival featuring 91 events (including satellites) with the series proper comprising a substantial 86 Trophy Events and boasting over KRW 5 billion (~USD 3.7M) in prize pool guarantees. Running April 26 to May 5 in partnership with Landing Entertainment Korea (LEK) the series is playing out at the world-class Landing Hotel & Casino located in the luxurious Jeju Shinhwa Resort. While this will be the fourth time the APT has visited Jeju, this marks the first visit of the new era following a seven-year hiatus, with Japan's Katsuhiro Muto the last APT Jeju Main Event champion crowned back in March 2017. The new era prize pools are over twenty times larger, with the APT Main Event running from April 26 to May 4 and coming with a sizable KRW 2 billion (~USD 1.5 million) guarantee. In addition to the guaranteed marquee events, the series boasts daily High Roller tournaments and an eclectic selection of mixed games and assorted poker variants, as well as cash games.  Getting underway at 2:30pm local time on April 26th, the KRW 2M Event #11: NL Hold'em - Freezeout saw 25 players enter the action, battling at the baize for eighteen 25-minute levels to win a slice of the KRW 43,650,000 (~USD 31,700) prize pool. Once again, it was a Chinese player taking the tournament top spot with Boxin Jin besting compatriot and Korea National Cup Flight A frontrunner Fei Wang head-up to claim the KRW 18,333,000 (~USD 13,310) top prize, in addition to his maiden APT title. NLHE FREEZEOUT FINAL TABLE RESULTS",
        content_cn: "2024年4月26日，韩国济州--欢迎来到APT济州2024，这个为期10天的系列赛将举办91场赛事（包括卫星赛），其中包括86场奖杯赛，奖金池保证金超过50亿韩元（约合370万美元）。 该系列赛于4月26日至5月5日与韩国蓝鼎娱乐公司（LEK）合作，在位于豪华济州神话世界万豪度假村的世界级蓝鼎酒店举行。 虽然这是APT第四次造访济州岛，但这也标志着APT在时隔七年之后首次造访济州岛，日本选手Katsuhiro Muto上一次获得APT济州岛主赛事冠军还要追溯到2017 年3月。新时代的奖金池是原来的二十多倍，此次APT主赛事从4月26日持续到5月4日，并有高达20亿韩元（约合150万美元）的保底奖金。 除了有保证金的大型赛事外，该系列赛事还包括每日豪客锦标赛、混合游戏、各种扑克变体以及常规桌游戏。Boxin Jin夺得第11场赛事这场赛事在当地时间下午2:30开始，200万韩元赛事有25名玩家参赛，他们在18个25分钟的游戏级别中为赢得 43,650,000 韩元（约合 31,700 美元）的奖金池而战。 Boxin Jin击败了同胞、韩国国家杯A组头名Fei Wang，夺得了18,333,000 韩元（约合13,310 美元的最高奖金，这也是他首次获得APT冠军。",
        content_tw: "2024年4月26日，韓國濟州--歡迎來到APT濟州2024，這個為期10天的系列賽將舉辦91場賽事（包括衛星賽），其中包括86場獎杯賽，獎金池保證金超過50億韓元 （約370萬美元）。 該系列賽於4月26日至5月5日與韓國藍鼎娛樂公司（LEK）合作，在位於豪華濟州神話世界萬豪度假村的世界級藍鼎酒店舉行。 雖然這是APT第四次造訪濟州島，但這也標誌著APT在時隔七年之後首次造訪濟州島，日本選手Katsuhiro Muto上一次獲得APT濟州島主賽事冠軍還要追溯到2017 年3月。新時代的獎金池是原來的二十多倍，這場APT主賽事從4月26日持續到5月4日，並有高達20億韓元（約150萬美元）的保底獎金。 除了有保證金的大型賽事外，該系列還包括每日豪客錦標賽、混合遊戲、各種撲克變體以及常規桌遊戲。Boxin Jin奪得第11場賽事這場賽事在當地時間下午2:30開始，200萬韓元賽事有25名玩家參賽，他們在18個25分鐘的遊戲級別中為贏得 43,650,000 韓元（約 31,700 美元）的獎金池而戰。 Boxin Jin擊敗了同胞、韓國國家杯A組頭名Fei Wang，贏得了18,333,000 韓元（約13,310 美元的最高獎金，這也是他首次獲得APT冠軍。"
      }
    ],
  },
  "china-boxin-jin-claims-maiden-apt-title-freezeout": {
    heroImage: "/image/news/details-news/new16/1-CYdDSjTl.png",
    sections: [
      {
        type: "paragraph",
        content: "JEJU, SOUTH KOREA, April 26, 2024 – Welcome to the APT Jeju 2024, with the action-packed 10-day festival featuring 91 events (including satellites) with the series proper comprising a substantial 86 Trophy Events and boasting over KRW 5 billion (~USD 3.7M) in prize pool guarantees. Running April 26 to May 5 in partnership with Landing Entertainment Korea (LEK) the series is playing out at the world-class Landing Hotel at the luxurious Jeju Shinhwa World Marriott Resort. While this will be the fourth time the APT has visited Jeju, this marks the first visit of the new era following a seven-year hiatus, with Japan's Katsuhiro Muto the last APT Jeju Main Event champion crowned back in March 2017. The new era prize pools are over twenty times larger, with the APT Main Event running from April 26 to May 4 and coming with a sizable KRW 2 billion (~USD 1.5 million) guarantee. In addition to the guaranteed marquee events, the series boasts daily High Roller tournaments, mixed games, assorted poker variants, as well as cash games.",
        content_cn: "2024年4月26日，韩国济州--欢迎来到APT济州2024，这个为期10天的系列赛将举办91场赛事（包括卫星赛），其中包括86场奖杯赛，奖金池保证金超过50亿韩元（约合370万美元）。 该系列赛于4月26日至5月5日与韩国蓝鼎娱乐公司（LEK）合作，在位于豪华济州神话世界万豪度假村的世界级蓝鼎酒店举行。 虽然这是APT第四次造访济州岛，但这也标志着APT在时隔七年之后首次造访济州岛，日本选手Katsuhiro Muto上一次获得APT济州岛主赛事冠军还要追溯到2017年3月。新时代的奖金池是原来的二十多倍，此次APT主赛事从4月26日持续到5月4日，并有高达20亿韩元（约合150万美元）的保底奖金。 除了有保证金的大型赛事外，该系列赛事还包括每日豪客锦标赛、混合游戏、各种扑克变体以及常规桌游戏。",
        content_tw: "2024年4月26日，韓國濟州--歡迎來到APT濟州2024，這個為期10天的系列賽將舉辦91場賽事（包括衛星賽），其中包括86場獎杯賽，獎金池保證金超過50億韓元 （約370萬美元）。 該系列賽於4月26日至5月5日與韓國藍鼎娛樂公司（LEK）合作，在位於豪華濟州神話世界萬豪度假村的世界級藍鼎酒店舉行。 雖然這是APT第四次造訪濟州島，但這也標誌著APT在時隔七年之後首次造訪濟州島，日本選手Katsuhiro Muto上一次獲得APT濟州島主賽事冠軍還要追溯到2017年3月。新時代的獎金池是原來的二十多倍，這場APT主賽事從4月26日持續到5月4日，並有高達20億韓元（約150萬美元）的保底獎金。 除了有保證金的大型賽事外，該系列還包括每日豪客錦標賽、混合遊戲、各種撲克變體以及常規桌遊戲。"
      },
      {
        type: "heading",
        content: "Boxin Jin Claims Event #11",
        content_cn: "Boxin Jin夺得第11场赛事",
        content_tw: "Boxin Jin奪得第11場賽事"
      },
      {
        type: "paragraph",
        content: "Getting underway at 2:30pm local time, the KRW 2M event saw 25 players enter the action, battling at the baize for eighteen 25-minute levels to win a slice of the KRW 43,650,000 (~USD 31,700) prize pool. Boxin Jin beat compatriot and Korea National Cup Flight A frontrunner Fei Wang head-up to claim the KRW 18,333,000 (~USD 13,310) top prize, in addition to his maiden APT title.",
        content_cn: "这场赛事在当地时间下午2:30开始，200万韩元赛事有25名玩家参赛，他们在18个25分钟的游戏级别中为赢得 43,650,000 韩元（约合 31,700 美元）的奖金池而战。 Boxin Jin击败了同胞、韩国国家杯A组头名Fei Wang，夺得了18,333,000 韩元（约合13,310 美元的最高奖金，这也是他首次获得APT冠军。",
        content_tw: "這場賽事在當地時間下午2:30開始，200萬韓元賽事有25名玩家參賽，他們在18個25分鐘的遊戲級別中為贏得 43,650,000 韓元（約 31,700 美元）的獎金池而戰。 Boxin Jin擊敗了同胞、韓國國家杯A組頭名Fei Wang，贏得了18,333,000 韓元（約13,310 美元的最高獎金，這也是他首次獲得APT冠軍。"
      },
      {
        type: "heading",
        content: "NLHE FREEZEOUT FINAL TABLE RESULTS",
        content_cn: "NLHE FREEZEOUT决赛桌结果",
        content_tw: "NLHE FREEZEOUT決賽桌結果"
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
  "china-jin-boxin-beats-jeju-dragon-quest-field": {
    heroImage: "/image/news/details-news/new17/1-1-en-BQkgythn.png",
    sections: [
      {
        type: "paragraph",
        content: "Exciting Recap: WPT Korea Jeju Dragon Quest Day 1A and Day 1B Highlights!",
        content_cn: "济州寻龙争霸赛现场赛况视频：",
        content_tw: "濟州尋龍爭霸賽現場賽況影片："
      },
      {
        type: "video",
        src: "/image/news/details-news/new17/AA22.mp4",
        alt: "WPT Korea Jeju Dragon Quest Highlights Video"
      },
      {
        type: "paragraph",
        content: "Jin Boxin has emerged as the latest JEJU Dragon Quest Champion at WPT Korea! In addition to winning a WPT Trophy and a side event Champion Ring, Jin Boxin bested a field of 276 players to take home KRW 47,770,000 in prize money. He agreed to split the winnings with Li Zhongxian, ensuring each received KRW 47,770,000.",
        content_cn: "济州寻龙争霸战决赛日回顾 ： 2024济州寻龙争霸赛就已经决出了冠军，由国人选手Jin Boxin拿下此战冠军！恭喜他！",
        content_tw: "濟州尋龍爭霸戰決賽日回顧 ： 2024濟州尋龍爭霸賽就已經決出了冠軍，由國人選手Jin Boxin拿下此戰冠軍！ 恭喜他！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new17/2-2zHN3ItS.png",
        alt: "Jin Boxin Champion"
      },
      {
        type: "paragraph",
        content: "Date/s: March 27-28, 2024 Buy-in: KRW 1,100,000 (~USD 810) Prize pool: KRW 265,043,000 (~USD 197,130) Entries: 276 (188 unique) ITM: 36 players Event #5: Jeju Dragon Quest – Final Table Results",
        content_cn: "时间：2024年3月27日-28日 买入：1,100,000韩元 奖池：265,043,000韩元 参赛人数：276人 进钱圈：36人 赛事决赛桌赛况：",
        content_tw: "時間：2024年3月27日-28日 買入：1,100,000韓元 獎金池：265,043,000韓元 參賽人數：276人 進錢圈：36人 賽事決賽桌賽況："
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
        content: "Congratulation to AA POKER team Jin Boxin!",
        content_cn: "再次恭喜AA POKER团队Jin Boxin 拿下冠军，更多信息继续关注AA POKER！",
        content_tw: "再次恭喜AA POKER團隊Jin Boxin 拿下冠軍，更多資訊繼續關注AA POKER！"
      }
    ]
  },
  "china-jin-boxin-bests-jeju-dragon-quest-field": {
    heroImage: "/image/news/details-news/new17/1-1-en-BQkgythn.png",
    sections: [
      {
        type: "paragraph",
        content: "Exciting Recap: WPT Korea Jeju Dragon Quest Day 1A and Day 1B Highlights!",
        content_cn: "济州寻龙争霸赛现场赛况视频：",
        content_tw: "濟州尋龍爭霸賽現場賽況影片："
      },
      {
        type: "video",
        src: "/image/news/details-news/new17/AA22.mp4",
        alt: "WPT Korea Jeju Dragon Quest Highlights Video"
      },
      {
        type: "paragraph",
        content: "Jin Boxin has emerged as the latest JEJU Dragon Quest Champion at WPT Korea! In addition to winning a WPT Trophy and a side event Champion Ring, Jin Boxin bested a field of 276 players to take home KRW 47,770,000 in prize money. He agreed to split the winnings with Li Zhongxian, ensuring each received KRW 47,770,000.",
        content_cn: "济州寻龙争霸战决赛日回顾 ： 2024济州寻龙争霸赛就已经决出了冠军，由国人选手Jin Boxin拿下此战冠军！恭喜他！",
        content_tw: "濟州尋龍爭霸戰決賽日回顧 ： 2024濟州尋龍爭霸賽就已經決出了冠軍，由國人選手Jin Boxin拿下此戰冠軍！ 恭喜他！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new17/2-2zHN3ItS.png",
        alt: "Jin Boxin Champion"
      },
      {
        type: "paragraph",
        content: "Date/s: March 27-28, 2024 Buy-in: KRW 1,100,000 (~USD 810) Prize pool: KRW 265,043,000 (~USD 197,130) Entries: 276 (188 unique) ITM: 36 players Event #5: Jeju Dragon Quest – Final Table Results",
        content_cn: "时间：2024年3月27日-28日 买入：1,100,000韩元 奖池：265,043,000韩元 参赛人数：276人 进钱圈：36人 赛事决赛桌赛况：",
        content_tw: "時間：2024年3月27日-28日 買入：1,100,000韓元 獎金池：265,043,000韓元 參賽人數：276人 進錢圈：36人 賽事決賽桌賽況："
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
        content: "Congratulation to AA POKER team Jin Boxin!",
        content_cn: "再次恭喜AA POKER团队Jin Boxin 拿下冠军，更多信息继续关注AA POKER！",
        content_tw: "再次恭喜AA POKER團隊Jin Boxin 拿下冠軍，更多資訊繼續關注AA POKER！"
      }
    ]
  },
  "whirlwind-quan-zhou-races-first-triton-title": {
    heroImage: "/image/news/details-news/new18/21-1-C4YZUrOJ.png",
    sections: [
      {
        type: "paragraph",
        content: "The final Saturday of the Triton Super High Roller Series festival in Jeju, South Korea, started with the search for Quan Zhou. It ended with the Chinese player in the most prominent place of all: holding aloft his first Triton winner's trophy.",
        content_cn: "在韩国济州岛举行的Triton超级豪客系列赛的最后一个星期六，「国王」周全站在了最显眼的位置：高举他的第一座Triton冠军奖杯。",
        content_tw: "在韓國濟州島舉行的Triton超級豪客系列賽的最後一個星期六，「國王」周全站在了最顯眼的位置：高舉他的第一座Triton冠軍獎杯。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-2-jxUPAYCP.png",
        alt: "Quan Zhou at Poker Table"
      },
      {
        type: "paragraph",
        content: "Zhou was the overnight chip leader of the $25K Pot Limit Omaha event here at the Jeju Shinhwa World Landing Resort, but was late to arrive for the tournament room for the 1pm restart of the event. It meant Zhou was missing from the customary pre-final table line-up photo. But no matter. Zhou set about his task today with customary focus and ensured that he was present for the most important photos of the day. Those were the ones featuring Zhou alone, alongside his winner's cap, winning hand, winning chips and that trophy. The $530,000 first prize is also now into his Triton account.",
        content_cn: "周全是25K奥马哈比赛的隔夜记分牌领先者，但在下午1点重新开始比赛时，他却迟迟没有到达比赛室。 这意味着他没有按照惯例在决赛桌前合影留念。 不过没关系。 周全以一贯的专注开始了他今天的工作，并确保在当天最重要的照片中出现他的身影。 这些照片中只有周全一个人，还有他的冠军帽、获胜牌和奖杯。",
        content_tw: "周全是25K奧馬哈比賽的隔夜記分牌領先者，但在下午1點重新開始比賽時，他却遲遲沒有到達比賽室。 這意味著他沒有按照慣例在決賽桌前合影留念。 不過沒關係。 周全以一貫的專注開始了他今天的工作，並確保在當天最重要的照片中出現他的身影。 這些照片中只有周全一個人，還有他的冠軍帽、獲勝牌和獎杯。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-3-CJ43Cp5_.png",
        alt: "Quan Zhou Victory Celebration"
      },
      {
        type: "paragraph",
        content: "This 39-year-old has come close to a Triton victory before, most notably when he was beaten heads-up in a PLO event in Monte Carlo last year. But this time he was not to be denied and blazed through the final day in a little more than four hours. He despatched his final challenger, Canada's Matthew Wood, on the first hand of head-up play. It ensured his first cash in Jeju came with a \"1st place\" notice beside it. He has staked a real claim as the man to beat in these PLO events, and confirmed that he's here to stay. 'I'm very happy with the win,' Zhou said, through an interpreter, as he began his celebrations. 'I have been looking forward to this title because there are a lot of strong competitors on the Triton Series.' He added: 'I played a lot of the no limit events and didn't cash, so there was a bit of pressure on me. But fortunately I have a lot of support from friends that keeps me going. Some of my friends came here to support me. Winning this title has helped me to relieve the pressure. It's a confidence boost.'",
        content_cn: "周全以前曾经差点赢得Triton锦标赛，最著名的一次是去年在蒙地卡罗举行的PLO锦标赛中惜败。 但这一次，他不负众望，在最后一天的比赛中花了四个多小时就大获全胜。 他在单挑的第一手牌中就击败了最后一位挑战者、加拿大选手Matthew Wood。 这确保了他在济州岛的第一笔奖金，旁边还写着 '第一名'。\n\n'我对这次胜利感到非常高兴，我一直期待着这个冠军，因为Triton系列赛有很多强劲的竞争对手。' 他补充说：'我参加了很多赛事，但都没有赢，所以压力有点大。但幸运的是，我得到了很多朋友的支持，让我坚持了下来。赢得这个冠军帮我减轻了压力。这让我信心倍增'。",
        content_tw: "周全以前曾經差點贏得Triton錦標賽，最著名的一次是去年在蒙地卡羅舉行的PLO錦標賽中惜敗。 但這一次，他不負眾望，在最後一天的比賽中花了四個多小時就大獲全勝。 他在單挑的第一手牌中就擊敗了最後一位挑戰者、加拿大選手Matthew Wood。 這確保了他在濟州島的第一筆獎金，旁邊還寫著 '第一名'。\n\n'我對這次勝利感到非常高興，我一直期待著這個冠軍，因為Triton系列賽有很多強勁的競爭對手。' 他補充說：'我參加了很多賽事，但都沒有贏，所以壓力有點大。但幸運的是，我得到了很多朋友的支持，讓我堅持了下來。贏得這個冠軍幫我減輕了壓力。這讓我信心倍增'。"
      }
    ]
  },
  "whirlwind-quan-zhou-races-first-triton-title-25k-plo": {
    heroImage: "/image/news/details-news/new18/21-1-C4YZUrOJ.png",
    sections: [
      {
        type: "paragraph",
        content: "The final Saturday of the Triton Super High Roller Series festival in Jeju, South Korea, started with the search for Quan Zhou. It ended with the Chinese player in the most prominent place of all: holding aloft his first Triton winner's trophy.",
        content_cn: "在韩国济州岛举行的Triton超级豪客系列赛的最后一个星期六，「国王」周全站在了最显眼的位置：高举他的第一座Triton冠军奖杯。",
        content_tw: "在韓國濟州島舉行的Triton超級豪客系列賽的最後一個星期六，「國王」周全站在了最顯眼的位置：高舉他的第一座Triton冠軍獎杯。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-2-jxUPAYCP.png",
        alt: "Quan Zhou at Poker Table"
      },
      {
        type: "paragraph",
        content: "Zhou was the overnight chip leader of the $25K Pot Limit Omaha event here at the Jeju Shinhwa World Landing Resort, but was late to arrive for the tournament room for the 1pm restart of the event. It meant Zhou was missing from the customary pre-final table line-up photo. But no matter. Zhou set about his task today with customary focus and ensured that he was present for the most important photos of the day. Those were the ones featuring Zhou alone, alongside his winner's cap, winning hand, winning chips and that trophy. The $530,000 first prize is also now into his Triton account.",
        content_cn: "周全是25K奥马哈比赛的隔夜记分牌领先者，但在下午1点重新开始比赛时，他却迟迟没有到达比赛室。 这意味着他没有按照惯例在决赛桌前合影留念。 不过没关系。 周全以一贯的专注开始了他今天的工作，并确保在当天最重要的照片中出现他的身影。 这些照片中只有周全一个人，还有他的冠军帽、获胜牌和奖杯。",
        content_tw: "周全是25K奧馬哈比賽的隔夜記分牌領先者，但在下午1點重新開始比賽時，他却遲遲沒有到達比賽室。 這意味著他沒有按照慣例在決賽桌前合影留念。 不過沒關係。 周全以一貫的專注開始了他今天的工作，並確保在當天最重要的照片中出現他的身影。 這些照片中只有周全一個人，還有他的冠軍帽、獲勝牌和獎杯。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-3-CJ43Cp5_.png",
        alt: "Quan Zhou Victory Celebration"
      },
      {
        type: "paragraph",
        content: "This 39-year-old has come close to a Triton victory before, most notably when he was beaten heads-up in a PLO event in Monte Carlo last year. But this time he was not to be denied and blazed through the final day in a little more than four hours. He despatched his final challenger, Canada's Matthew Wood, on the first hand of head-up play. It ensured his first cash in Jeju came with a \"1st place\" notice beside it. He has staked a real claim as the man to beat in these PLO events, and confirmed that he's here to stay. 'I'm very happy with the win,' Zhou said, through an interpreter, as he began his celebrations. 'I have been looking forward to this title because there are a lot of strong competitors on the Triton Series.' He added: 'I played a lot of the no limit events and didn't cash, so there was a bit of pressure on me. But fortunately I have a lot of support from friends that keeps me going. Some of my friends came here to support me. Winning this title has helped me to relieve the pressure. It's a confidence boost.'",
        content_cn: "周全以前曾经差点赢得Triton锦标赛，最著名的一次是去年在蒙地卡罗举行的PLO锦标赛中惜败。 但这一次，他不负众望，在最后一天的比赛中花了四个多小时就大获全胜。 他在单挑的第一手牌中就击败了最后一位挑战者、加拿大选手Matthew Wood。 这确保了他在济州岛的第一笔奖金，旁边还写着 ‘第一名’。\n\n‘我对这次胜利感到非常高兴，我一直期待着这个冠军，因为Triton系列赛有很多强劲的竞争对手。’ 他补充说：‘我参加了很多赛事，但都没有赢，所以压力有点大。但幸运的是，我得到了很多朋友的支持，让我坚持了下来。赢得这个冠军帮我减轻了压力。这让我信心倍增’。",
        content_tw: "周全以前曾經差點贏得Triton錦標賽，最著名的一次是去年在蒙地卡羅舉行的PLO錦標賽中惜敗。 但這一次，他不負眾望，在最後一天的比賽中花了四個多小時就大獲全勝。 他在單挑的第一手牌中就擊敗了最後一位挑戰者、加拿大選手Matthew Wood。 這確保了他在濟州島的第一筆獎金，旁邊還寫著 ‘第一名’。\n\n‘我對這次勝利感到非常高興，我一直期待著這個冠軍，因為Triton系列賽有很多強勁的競爭對手。’ 他補充說：‘我參加了很多賽事，但都沒有贏，所以壓力有點大。但幸運的是，我得到了很多朋友的支持，讓我堅持了下來。贏得這個冠軍幫我減輕了壓力。這讓我信心倍增’。"
      }
    ]
  },
  "quan-zhou-took-runner-up-prize-mystery-bounty": {
    heroImage: "/image/news/details-news/new19/20-1-BN6KnOwy.png",
    sections: [
      {
        type: "paragraph",
        content: "Paris is the City of Light, and today at the 2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty, the light shined brightest on Duco ten Haven.",
        content_cn: "EPT连续第二年重返巴黎，这次是在巴黎会议中心举行，为玩家们提供了一个更大、更宽敞的比赛场地，并致力为大家带来无与伦比的参赛体验。",
        content_tw: "EPT連續第二年重返巴黎，這次是在巴黎會議中心舉行，為玩家們提供了一個更大、更寬敞的比賽場地，並致力於為大家帶來無與倫比的參賽體驗。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-2-BM3eNJXa.png",
        alt: "Duco ten Haven Champion"
      },
      {
        type: "paragraph",
        content: "The Dutch pro, who considers Paris a second home, is usually an online crusher but captured his first EPT title today at Le Palais des Congrès by defeating Quan Zhou heads-up to win the trophy and €126,500. In addition to the top prize, he also earned €117,500 in bounties including one of the €50,000 top mystery bounty envelopes as he began his festival here in Paris with a total score of €244,000, the best of his career.",
        content_cn: "€10,200神秘赏金赛共103人参赛，总奖池达到€473,800。 名叫 Duco ten Haven 的优秀荷兰选手，将巴黎视为自己的第二故乡。作为知名的在线高手，他终于在巴黎会议宫凭借出色实力，成功斩获EPT神秘赏金赛冠军奖杯以及高达€126,500的冠军奖金。",
        content_tw: "€10,200神秘賞金賽共103人參賽，總獎金池達到€473,800。 名叫 Duco ten Haven 的優秀荷蘭選手，將巴黎視為自己的第二個家。身為知名的線上高手，他終於在巴黎會議宮憑借出色實力，成功斬獲EPT神秘賞金賽冠軍獎盃以及高達€126,500的冠軍獎金。"
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
        content: "In this intense final heads-up battle, 'King' Quan Zhou lost to Haven but still achieved an impressive runner-up finish. He also won another €50,000 top mystery bounty envelope.",
        content_cn: "在这场激烈的FT最终一对一单挑决战中输给Haven的「国王」周全，虽然未能得偿所愿夺取冠军，但他收获了一个令人欣慰的战果——赢得第二名的优异成绩。 除此以外，他还赢得同样价值5W欧元的另一个最高额的赏金。",
        content_tw: "在這場激烈的FT最終一對一單挑決戰中輸給Haven的「國王」周全，雖然未能得償所願奪取冠軍，但他收穫了一個令人欣慰的戰果——贏得第二名的優異成績。 除此以外，他還贏得同樣價值5W歐元的另一個最高額的賞金。"
      }
    ]
  },
  "quan-zhou-runner-up-ept-paris-mystery-bounty": {
    heroImage: "/image/news/details-news/new19/20-1-BN6KnOwy.png",
    sections: [
      {
        type: "paragraph",
        content: "Paris is the City of Light, and today at the 2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty, the light shined brightest on Duco ten Haven.",
        content_cn: "EPT连续第二年重返巴黎，这次是在巴黎会议中心举行，为玩家们提供了一个更大、更宽敞的比赛场地，并致力为大家带来无与伦比的参赛体验。",
        content_tw: "EPT連續第二年重返巴黎，這次是在巴黎會議中心舉行，為玩家們提供了一個更大、更寬敢的比賽場地，並致力於為大家帶來無與倫比的參賽體驗。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-2-BM3eNJXa.png",
        alt: "Duco ten Haven Champion"
      },
      {
        type: "paragraph",
        content: "The Dutch pro, who considers Paris a second home, is usually an online crusher but captured his first EPT title today at Le Palais des Congrès by defeating Quan Zhou heads-up to win the trophy and €126,500. In addition to the top prize, he also earned €117,500 in bounties including one of the €50,000 top mystery bounty envelopes as he began his festival here in Paris with a total score of €244,000, the best of his career.",
        content_cn: "€10,200神秘赏金赛共103人参赛，总奖池达到€473,800。 名叫 Duco ten Haven 的优秀荷兰选手，将巴黎视为自己的第二故乡。作为知名的在线高手，他终于在巴黎会议宫凭借出色实力，成功斩获EPT神秘赏金赛冠军奖杯以及高达€126,500的冠军奖金。 这是他职业生涯中最好的一次，除了最高奖金外，他还赢得了€117,500的神秘赏金，其中一笔是5w欧元的顶级神秘悬赏金。",
        content_tw: "€10,200神秘賞金賽共103人參賽，總獎金池達到€473,800。 名叫 Duco ten Haven 的優秀荷蘭選手，將巴黎視為自己的第二個家。身為知名的線上高手，他終於在巴黎會議宮憑借出色實力，成功斬獲EPT神秘賞金賽冠軍獎盃以及高達€126,500的冠軍獎金。 這是他職業生涯中最好的一次，除了最高獎金外，他還贏得了€117,500的神秘賞金，其中一筆是5w歐元的頂級神秘懸賞金。"
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
        content: "Day 2 Action Day 2 began with 46 surviving players from Day 1 beginning play at 12:30 p.m. local time. With late registration open for the first two levels of the day, they were joined by 32 new arrivals to bring the total field up to 103.",
        content_cn: "在这场激烈的FT最终一对一单挑决战中输给Haven的“国王”周全，虽然未能得偿所愿夺取冠军，但他收获了一个令人欣慰的战果——赢得第二名的优异成绩。 除此以外，他还赢得同样价值5W欧元的另一个最高额的赏金。 比赛结果：",
        content_tw: "在這場激烈的FT最終一對一單挑決戰中輸給Haven的“國王”周全，雖然未能得償所願奪取冠軍，但他收穫了一個令人欣慰的戰果——贏得第二名的優異成績。 除此以外，他還贏得同樣價值5W歐元的另一個最高額的賞金。 比賽結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new19/20-3-sgakXpUR.png",
        alt: "Mike Watson"
      },
      {
        type: "paragraph",
        content: "Two-time EPT champion Watson was the first to fall, losing a three-way all in to Sirzat Hissou's turned flush.",
        content_cn: "€1,100 FPS主赛事正在火爆进行，目前前三个比赛日的赛程已经结束，比赛吸引了大量热爱扑克的选手慕名前来。 参赛人次达到创纪录的2,262人次，总奖池已达到$2,360,640，超过了2023年的2,071人次。Day1还剩下三个比赛日，随着赛程的推进，相信今年的参赛人数将达到顶峰。\n\nDay1 b组共167人次参赛，最终人获得晋级资格。保加利亚选手Boris Angelov在获得404,000记分后成为领先者。 其他晋级的名人包括Daniel Rezaei、Marcello Miniucchi、Cecile Ticherfatine、扑克大使Felix Schneiders和Maria Lampropulos。\n\nDay1 c组比赛共有1,208人次参赛，其中181人成功晋级，法国选手Alexandre Correia在获得895,000记分后成为领先者。",
        content_tw: "€1,100 FPS主賽事正在火爆進行，目前前三個比賽日的賽程已經結束，比賽吸引了大量熱愛撲克的選手慕名前來。 參賽人次達到創紀錄的2,262人次，總獎金池已達到$2,360,640，超過了2023年的2,071人次。 Day1還剩下三個比賽日，隨著賽程的推進，相信今年的參賽人數將達到頂峰。\n\nDay1 b組共167人次參賽，最後25人獲得晉級資格。保加利亞選手Boris Angelov在獲得404,000記分後成為領先者。 其他晉升的名人包括Daniel Rezaei、Marcello Miniucchi、Cecile Ticherfatine、撲克大使Felix Schneiders和Maria Lampropulos。\n\nDay1 c組比賽共有1,208人次參賽，其中181人成功晉級，法國選手Alexandre Correia在獲得895,000記分後成為領先者。"
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
        content: "The biggest hand of the tournament, though, was yet to come as ten Haven catapulted into a massive lead.",
        content_cn: "紧随其后的是2023 FPS 蒙特卡洛主赛事冠军日本选手Daisuke Ogita。 同样拥有健康筹记分量的还有Conor Beresford。这位英国扑克职业玩家已经在现场锦标赛中积累了超过200w美元的收入，他正在全力追逐自己的第一个EPT冠军。 其他获得晋级资格的名人包括Tamas Adamszki、Daniel Smiljkovic以及扑克大使Ramon Collillas。\n\n孙云升老师也凭借354,000记分成功晋级下一轮，并在晋级名单中排名第80位。",
        content_tw: "緊隨其後的是2023 FPS 蒙特卡羅主賽事冠軍日本選手Daisuke Ogita。 同樣擁有健康籌記分量的還有Conor Beresford。這位英國撲克職業玩家已經在現場錦標賽中積累了超過200w美元的收入，他正在全力追逐自己的第一個EPT冠軍。 其他獲得晉級資格的名人包括Tamas Adamszki、Daniel Smiljkovic以及撲克大使Ramon Collillas。\n\n孫雲升老師也憑借354,000記分成功晉級下一輪，並在晉級名單中排名第80位。"
      },
      {
        type: "paragraph",
        content: "Zhou managed two double ups until he jammed again for 1,825,000 with jack-four. Ten Haven called with king-three and ended up with a full house to win the pot and tournament.",
        content_cn: "在这场激烈的FT最终一对一单挑决战中输给Haven的“国王”周全，虽然未能得偿所愿夺取冠军，但他收获了一个令人欣慰的战果——赢得第二名的优异成绩。 除此以外，他还赢得同样价值5W欧元的另一个最高额的赏金。 比赛结果：",
        content_tw: "在這場激烈的FT最終一對一單挑決戰中輸給Haven的“國王”周全，雖然未能得償所願奪取冠軍，但他收穫了一個令人欣慰的戰果——贏得第二名的優異成績。 除此以外，他還贏得同樣價值5W歐元的另一個最高額的賞金。 比賽結果："
      }
    ]
  },
  "aapoker-poker-community-without-thieves": {
    heroImage: "/image/news/details-news/new20/19-1-QUAkBGe1.png",
    sections: [
      {
        type: "paragraph",
        content: "The most heinous cheater in history is actually the WSOP Main Event Champion! Everyone despises cheaters, especially poker players. Nowadays, with the more popularity of poker all over the world, more questions have emerged, such as various cheating behaviors. There are some just as little thieves, but some are robbers with insatiable desires. Today, let's meet the most despicable, greedy, and famous cheater in history. You can hardly imagine how nasty he is! He has stolen over $20 million from players through cheating, without returning anything to the players or spending a day in jail. He is the former American professional player, Russ Hamilton.",
        content_cn: "史上最可恶的作弊者竟然是WSOP主赛冠军！相信每个人都是痛恨作弊者的，尤其作为竞技扑克游戏玩家来说。明明大家都在比拼智力，某些『人』却暗戳戳地用上了『高科技』，我拿你当兄弟，你却拿我当『提款机』。 自竞技扑克流行以来，各种作弊行为就层出不穷，既有小打小闹的『小骗子』，也有贪婪无度的『大骗子』，今天我们就来认识这位堪称史上最可恶、最贪婪也是最大的作弊者。 他通过作弊窃取的玩家资金高达2000多万刀，更可恨的是他没有偿还玩家一分钱，甚至没有因此坐过一天牢。 他就是美国前职业玩家Russ Hamilton。",
        content_tw: "史上最可惡的作弊者竟然是WSOP主賽冠軍！相信每個人都是痛恨作弊者的，尤其作為競技撲克遊戲玩家來說。明明大家都在比拼智力，某些『人』卻暗戳戳地用上了『高科技』，我拿你當兄弟，你卻拿我當『提款機』。 自競技撲克流行以來，各種作弊行為就層出不窮，既有小打小鬧的『小騙子』，也有貪婪無度的『大騙子』，今天我們就來認識這位堪稱史上最可惡、最貪婪也是最大的作弊者。 他透過作弊竊取的玩家資金高達2000多萬刀，更可恨的是他沒有償還玩家一分錢，甚至沒有因此坐過一天牢。 他就是美國前職業玩家Russ Hamilton。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-1-QUAkBGe1.png",
        alt: "Russ Hamilton"
      },
      {
        type: "paragraph",
        content: "He was the 1994 World Series of Poker main event champion, defeating Hugh Vincent in heads-up play to win $1 million in first prize money as well as his body weight in silver. He was a bona fide poker pro. Instead of leaving a legacy, he chose infamy. During the online poker craze of the early 2000s, he launched his Ultimate Bet, the world's first online poker site named 'POTRIPPER,' which could directly see players' hole cards. This 'simple and easy' method enabled him to effortlessly steal over $20 million from other players between January 2005 and December 2007. After his misdeeds were exposed, Hamilton vehemently denied his crimes. Although being blacklisted by the poker community, he still faced no any punishment. Now, with the rapid development of AI technology, cheating methods have also evolved. Safeguarding the legitimate rights and interests of our poker players and creating a fair and fun gaming environment have become the top priorities for every poker platform operator.",
        content_cn: "他是1994年WSOP主赛事冠军，单挑击败Hugh Vincent赢得100万刀的奖金，外加上等同于他体重的白银！这是一个真正的扑克职业牌手，但他没有给扑克留下好的遗产，而是被钉上了扑克的耻辱柱！在21世纪初期的在线扑克热潮中，他创立了UltimateBet，这是世界上第一个在线扑克网站，期间他创立了一个叫做『POTRIPPER』的账户，使用的作弊软件是他可以直接看到对手的底牌，通过这种『简单粗暴』的方式，他在2005年1月至2007年12月期间从别的玩家那里轻松窃取了超过2000万刀的资金。 在他的恶行被揭穿后，Russ Hamilton坚决否认，虽然他被扑克界列入了永久黑名单，但从未接受过任何惩罚。现在，随着AI技术的飞速发展，伴随着线上扑克的发展和软件、AI层出不穷，各种作弊手段也在不断推陈出新，不知道还有多少Russ Hamilton在暗处行事。 维护玩家的合法权益，创造公平公正的游戏环境已经成为每一个运营商的首要任务。",
        content_tw: "他是1994年WSOP主賽事冠軍，單挑擊敗Hugh Vincent贏得100萬刀的獎金，外加上等同於他體重的白銀！這是一個真正的撲克職業牌手，但他沒有給撲克留下好的遺產，而是被釘上了撲克的恥辱柱！在21世紀初期的線上撲克熱潮中，他創立了UltimateBet，這是世界上第一個線上撲克網站，期間他創立了一個叫做『POTRIPPER』的帳戶，使用的作弊軟體是他可以直接看到對手的底牌，透過這種『簡單粗暴』的方式，他在2005年1月至2007年12月期間從別的玩家那裡輕鬆竊取了超過2000萬刀的資金。 在他的惡行被揭穿後，Russ Hamilton堅決否認，雖然他被撲克界列入了永久黑名單，但從未接受過任何懲罰。現在，隨著AI技術的飛速發展，伴隨著線上撲克的發展和軟體、AI層出不窮，各種作弊手段也在不斷推陳出新，不知道還有多少Russ Hamilton在暗處行事。 維護玩家的合法權益，創造公平公正的遊戲環境已經成為每一個運營商的首要任務。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-2-en-Do2Dc4Us.png",
        alt: "AA Poker Honest Game"
      },
      {
        type: "paragraph",
        content: "So recently, AApoker has had all better hope that the profession can get its act together, creating a fair gaming environment for our players. We aim to eradicate all cheating behaviors and safeguard regular players! In order to create a fair tournament environment, improve gaming quality, establish industry standards, and combat any forms of collusion and cheating, AApoker has made the following technological enhancements for players:",
        content_cn: "AA POKER祭出『天下无贼』,全方位组合拳打击作弊！为了创造公平的比赛环境、提升游戏质量、建立行业标准、打击任何形式的串通和作弊，AA POKER为玩家进行了以下技术升级：",
        content_tw: "AA POKER祭出『天下無賊』,全方位組合拳打擊作弊！為了創造公平的比賽環境、提升遊戲質量、建立行業標準、打擊任何形式的串通和作弊，AA POKER為玩家進行了以下技術升級："
      },
      {
        type: "paragraph",
        content: "For Players",
        content_cn: "玩家端：",
        content_tw: "玩家端："
      },
      {
        type: "paragraph",
        content: "1.Online table function 2. Face liveness detection",
        content_cn: "1.线上桌功能 2.人脸活体检测",
        content_tw: "1.線上桌功能 2.人臉活體檢測"
      },
      {
        type: "paragraph",
        content: "AApoker System Protection:",
        content_cn: "AA POKER系统端：",
        content_tw: "AA POKER系統端："
      },
      {
        type: "paragraph",
        content: "1. Automatic scanning and detection of IP address. 2. Big data detection of real location. 3. Automatic detection of AI bot cheaters. Prohibition of wormhole attacks. 5. Data protection: Use of blockchain technology AES256 encryption, making data interception and decryption impossible midway. AApoker attaches great importance to anti-cheating work this time. AA POKER always adheres to the spirit of fair and just game competition, has zero tolerance for cheating, protects the game rights of every player, and allows players to enjoy healthy, fair and fun poker games. Although combating cheating may seem like an arduous task, with the joint efforts of the professions, victory this time is inevitable!",
        content_cn: "1.自动扫描并探测IP地址 2.大数据探测真实地点 3.自动检测机器人 4.禁止虫洞攻击 5.数据保护：采用区块链技术AES256加密，数据中途无法截取和解密 AA POKER非常重视本次反作弊工作，AA POKER始终坚守公平公正的游戏竞赛精神，对作弊行为零容忍，保障每位玩家的游戏权益，让玩家玩的健康、公平和有趣！ 虽然打击作弊行为道阻且长，但我相信在大家的共同努力下，胜利终会到来！",
        content_tw: "1.自動掃描並偵測IP地址 2.大數據偵測真實地點 3.自動檢測機器人 4.禁止蟲洞攻擊 5.數據保護：採用區塊鏈技術AES256加密，數據中途無法截取和解密 AA POKER非常重視本次反作弊工作，AA POKER始終堅守公平公正的遊戲競賽精神，對作弊行為零容忍，保障每位玩家的遊戲權益，讓玩家玩的健康、公平和有趣！ 雖然打擊作弊行為道阻且長，但我相信在大家的共同努力下，勝利終會到來！"
      }
    ]
  },
  "king-quan-zhou-becoming-aa-poker-global-ambassador": {
    heroImage: "/image/news/details-news/new21/18-1-en-p-9TvWXH.png",
    sections: [
      {
        type: "heading",
        content: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador",
        content_cn: "『国王』周全-AA POKER全球赛事形像大使",
        content_tw: "『國王』周全-AA POKER全球賽事形像大使"
      },
      {
        type: "paragraph",
        content: "Quan Zhou is a well-known professional poker player, renowned for his exceptional poker skills and compassionate nature. He is an idol among many young players. Recently, Quan Zhou signed a contract to become the global tournament ambassador for a new poker brand AA POKER, symbolizing the beginning of a new chapter in his professional career.",
        content_cn: "周全是一位著名的职业扑克选手，以其出色的扑克技术和富有同情心的本性而闻名。他是许多年轻选手的偶像。最近，周全签约成为新扑克品牌AA POKER的全球赛事大使，这标志着他职业生涯新篇章的开始。",
        content_tw: "周全是一位著名的職業撲克選手，以其出色的撲克技術和富有同情心的本性而聞名。他是許多年輕選手的偶像。最近，周全簽約成為新撲克品牌AA POKER的全球賽事大使，這標誌著他職業生涯新篇章的開始。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-1-en-p-9TvWXH.png",
        alt: "Quan Zhou AA Poker Ambassador"
      },
      {
        type: "paragraph",
        content: "As one of the first competitive poker players in China, his tournament history dates back to as early as 2011. Until now, Quan Zhou has maintained excellent physical health. With a slender figure and a serious face, he appears modest and reserved. Therefore, it is hard to associate him with his nickname-The King.",
        content_cn: "作为中国最早的竞技扑克选手之一，他的赛事历史可以追溯到2011年。直到现在，周全仍保持着良好的身体状态。他身材纴细，表情严肃，看起来谦虚内敛。因此，很难将他与他的绰号“周王”联系起来。",
        content_tw: "作為中國最早的競技撲克選手之一，他的賽事歷史可以追溯到2011年。直到現在，周全仍保持著良好的身體狀況。他身材纖細，表情嚴肅，看起來謙虛內斂。因此，很難將他與他的絽號「周王」聯系起來。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-2-DcOVGUo3.png",
        alt: "Quan Zhou Playing"
      },
      {
        type: "heading",
        content: "Origin of his nickname-King",
        content_cn: "绰号“周王”的由来",
        content_tw: "絽號「周王」的由來"
      },
      {
        type: "paragraph",
        content: "His nickname seems to have a somewhat dramatic origin. It stemmed from a tournament where Quan Zhou mistakenly wrote his name under the nationality section. At first, it was joked around by his friends as 'The King,' which gradually spread later.",
        content_cn: "他的绰号似乎有一个有点戏剧性的由来。它源于一场比赛，周全错误地将他的名字写在了国籍栏。起初，朋友们拿这件事开玩笑，称他为“周王”，后来逐渐传开。",
        content_tw: "他的絽號似乎有一個有點戲劇性的由來。它源於一場比賽，周全錯誤地將他的名字寫在了國籍欄。起初，朋友們拿這件事開玩笑，稱他為「周王」，後來逐漸傳開。"
      },
      {
        type: "paragraph",
        content: "However, it seems he was predestined to win this name, because of his excellent performances in this field. Quan Zhou not only earns such a good title but also gets impressive poker records.",
        content_cn: "然而，他似乎注定要赢得这个名号，因为他在这个领域的出色表现。周全不仅赢得了这样一个好头衔，还取得了令人印象深刻的扑克战绩。",
        content_tw: "然而，他似乎注定要贏得這個名號，因為他在這個領域的出色表現。周全不僅贏得了這樣一個好頭銜，還取得了令人印象深刻的撲克戰績。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-3-CdCN-5ts.png",
        alt: "GPI 2017 Player of the Year"
      },
      {
        type: "paragraph",
        content: "One of his highlights was winning the GPI China region's top spot in 2017. Although 2017 seems like a few years ago, it also proves that Quan Zhou has had great fame for a long time with his consistent performance. In 2020, Quan Zhou clinched the top spot in the GPI global rankings, also securing the Player of the Year title.",
        content_cn: "他的亮点之一是在2017年赢得GPI中国区榜首。虽灶2017年似乎是几年前的事，但这也证明了周全凭借其稳定的表现早已声名远播。在2020年，周全夺得GPI全球排名榜首，同时获得年度最佳选手称号。",
        content_tw: "他的亮點之一是在2017年贏得GPI中國區榜首。雖2017年似乎是幾年前的事，但這也證明了周全憑借其穩定的表現早已聲名遠播。在2020年，周全奪得GPI全球排名榜首，同時獲得年度最佳選手稱號。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-4-DJz4qy0L.png",
        alt: "GPI POY 2020 Rankings"
      },
      {
        type: "paragraph",
        content: "As of 2023, he still maintains the second position in the GPI China region, standing as a timeless poker figure in China.",
        content_cn: "截至2023年，他仍然保持在GPI中国区第二名，是中国扑克界的常青树。",
        content_tw: "截至2023年，他仍然保持在GPI中國區第二名，是中國撲克界的常青樹。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-5-C3cyYwRq.png",
        alt: "GPI 2023 Rankings"
      },
      {
        type: "paragraph",
        content: "The achievements depicted above are just a glimpse of Quan Zhou's remarkable accomplishments in 2023, setting him apart from countless players. Nowadays, with the popularity of poker tournaments, many Chinese players have also achieved excellent records all over the world. But it is still difficult to find a player who can compete with Quan Zhou. Quan Zhou is a real king of poker in China.",
        content_cn: "以上成就只是周全在2023年卓越成就的冰山一角，使他从无数选手中脱颖而出。如今，随着扑克比赛的普及，许多中国选手也在世界各地取得了优异的成绩。但仍然很难找到一个能与周全竞争的选手。周全是中国真正的扑克之王。",
        content_tw: "以上成就只是周全在2023年卓越成就的冰山一角，使他從無數選手中脱穎而出。如今，隨著撲克比賽的普及，許多中國選手也在世界各地取得了優異的成績。但仍然很難找到一個能與周全競爭的選手。周全是中國真正的撲克之王。"
      },
      {
        type: "heading",
        content: "Compassionate and Involvement in Charity",
        content_cn: "富有同情心与慈善参与",
        content_tw: "富有同情心與慈善參與"
      },
      {
        type: "paragraph",
        content: "This is a heartwarming action in the poker community. While many of us have compassion, often due to limitations, we don't always act on it. However, Quan Zhou did just that.",
        content_cn: "这是扑克界令人暖心的行动。虽然我们很多人都有同情心，但由于各种限制，我们并不总是付诸行动。然而，周全做到了。",
        content_tw: "這是撲克界令人暖心的行動。雖然我們很多人都有同情心，但由於各種限制，我們並不總是付諸行動。然而，周全做到了。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-6-DiUN3lNK.png",
        alt: "THC Charity Logo"
      },
      {
        type: "paragraph",
        content: "Learning about the difficult living conditions and harsh learning environments of children in impoverished mountainous areas, he founded 'De Yi Quan Ming Xing' in 2016, a nonprofit organization. Quan Zhou led his team members in donating educational and living supplies to children in these areas. He did it! Acts of kindness!",
        content_cn: "了解到贫困山区孩子们困难的生活条件和艰苦的学习环境后，他于2016年创立了“德艺全明星”这个非营利组织。周全带领他的团队成员向这些地区的孩子们捐赠教育和生活用品。他做到了！善举！",
        content_tw: "了解到貧困山區孩子們困難的生活條件和艱苦的學習環境後，他於2016年創立了「德藝全明星」這個非營利組織。周全帶領他的團隊成員向這些地區的孩子們捐贈教育和生活用品。他做到了！善舉！"
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
        content: "The above examples are just a little part of Quan Zhou and his team's efforts. Unfortunately, due to space constraints, we can't list them all.",
        content_cn: "以上例子只是周全和他的团队努力的一小部分。遗憾的是，由于篇幅限制，我们无法一一列举。",
        content_tw: "以上例子只是周全和他的團隊努力的一小部分。遗憾的是，由於篇幅限制，我們無法一一列舉。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new21/18-11-BbrllmXK.png",
        alt: "Receipt Document"
      },
      {
        type: "paragraph",
        content: "We not only respect his poker skills, but his charitable actions off it undoubtedly command respect. It was reminiscent of a term coined online: 'A true gentleman!' Perhaps, it's necessary for our pokers to formally express gratitude to Quan Zhou and his team. They've imbued poker sports with human warmth. As Quan Zhou becomes the global tournament ambassador for AA POKER, we wish him to continue his poker road in 2024, capturing more championship titles. Finally, if the Chinese were to establish a 'Poker Hall of Fame,' Quan Zhou would undoubtedly be a must-have inclusion!",
        content_cn: "我们不仅尊重他的扑克技术，他在牌桌外的慈善行为无疑也值得尊敬。这让人想起网上创造的一个词“真正的君子！”也许，我们扑克人有必要正式向周全和他的团队表达感谢。他们给扑克运动注入了人文关怀。随着周全成为AA POKER的全球赛事大使，我们祝愿他在2024年继续他的扑克之路，夺取更多冠军头衔。最后，如果中国要建立“扑克名人堂”，周全无疑将是必不可少的一员！",
        content_tw: "我們不僅尊重他的撲克技術，他在牌桌外的慈善行為無疑也值得尊敬。這讓人想起網上創造的一個詞「真正的君子！」也許，我們撲克人有必要正式向周全和他的團隊表達感謝。他們給撲克運動注入了人文關懷。隨著周全成為AA POKER的全球賽事大使，我們祝願他在2024年繼續他的撲克之路，奪取更多冠軍頭銜。最後，如果中國要建立「撲克名人堂」，周全無疑將是必不可少的一員！"
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
        content: "WESLEY-NEW BRAND AMBASSADOR OF AA POKER",
        content_cn: "Wesley-AAPOKER新全球品牌代言人",
        content_tw: "Wesley-AAPOKER新全球品牌代言人"
      },
      {
        type: "paragraph",
        content: "Congratulations! Wesley become one of the global brand ambassadors for a well-known poker brand, AAPoker! For Wesley, who entered the poker field just two years ago, this good news is undoubtedly industry recognition and an acknowledgment of his growing influence. 2023 was a thrilling year for Wesley. But this cooperation with AAPoker marks a satisfying conclusion to the 'turbulent' 2023 and also sets the stage for a promising start in 2024.",
        content_cn: "恭喜！Wesley成为知名扑克品牌AAPoker的全球品牌代言人之一！对于两年前才正式进入扑克领域的Wesley来说，这一好消息无疑是对其日益增长的影响力的肯定，和来自行业的认可。对Wesley来说，2023年是跌宕起伏的一年，而与AAPoker的合作，标志着『动荡』的2023年完美收官，同时也开启了2024年的良好开端。",
        content_tw: "恭喜！Wesley成為知名撲克品牌AAPoker的全球品牌代言人之一！對於兩年前才正式進入撲克領域的Wesley來說，這一好消息無疑是對其日益增長的影響力的肯定，和來自行業的認可。對Wesley來說，2023年是跌宕起伏的一年，而與AAPoker的合作，標誌著『動盪』的2023年完美收官，同時也開啟了2024年的良好開端。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-1-im51ScEu.png",
        alt: "Wesley AA Poker Ambassador"
      },
      {
        type: "paragraph",
        content: "As we all know, most Chinese poker players tend to be modest, because of their personalities and the environments where they are. However, Wesley, who grew up on the other side of the globe, is different. He isn't bound by rules and regulations. Since entering the 'poker world' after making a name for himself in the cryptocurrency sphere, he has embraced a 'high-profile' approach—appearing on popular shows, engaging in high-stakes poker games, and indulging in various forms of 'flaunting wealth.' This unconventional style has naturally polarized public opinion. Some people said he was too ostentatious. However, as 2023 comes to a close, we seem to witness a true Wesley. He seems to be a warrior with an inherent sense of never giving up. On the American poker stage, he bravely showcases a different image of a Chinese poker player, contributing to a unique form of cultural export through his actions and words.",
        content_cn: "众所周知，由于性格和所处的环境等因素，大多数中国牌手都偏内敛。然而，在地球另一端长大的Wesley则截然不同。他不受条条框框的束缚，自从在加密货币领域功成名就，跨界进入『扑克世界』后，他便开启了『高调』模式——上热门节目、打高额扑克、以各种形式『炫富』。这种非常规的风格自然引起了公众的两极化评价。然而，随着2023年接近尾声，我们似乎见识到了一个真正的Wesley。他像是一个『打不死的小强』。在美国扑克圈，他勇敢地展示了一个与众不同的中国牌手形象，以他的行动和言语做出了别样的文化输出。",
        content_tw: "眾所周知，由於性格和所處的環境等因素，大多數中國牌手都偏內斂。然而，在地球另一端長大的Wesley則截然不同。他不受條條框框的束縛，自從在加密貨幣領域功成名就，跨界進入『撲克世界』後，他便開啟了『高調』模式——上熱門節目、打高額撲克、以各種形式『炫富』。這種非常規的風格自然引起了公眾的兩極化評價。然而，隨著2023年接近尾聲，我們似乎見識到了一個真正的Wesley。他像是一個『打不死的小強』。在美國撲克圈，他勇敢地展示了一個與眾不同的中國牌手形象，以他的行動和言語做出了別樣的文化輸出。"
      },
      {
        type: "heading",
        content: "Wesley VS Tom Dwan",
        content_cn: "Wesley VS Tom Dwan",
        content_tw: "Wesley VS Tom Dwan"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-2-DS7LKn2D.png",
        alt: "Wesley vs Tom Dwan"
      },
      {
        type: "paragraph",
        content: "Wesley etched his name into history with the Hustler's Million Dollar Cash Game. During the showdown against Tom Dwan, he lost $3.1 million at first, the biggest pot TV poker history. But subsequently, he won another massive pot of $2.2 million, the second biggest pot on the history of televised poker. Throughout the huge fluctuation of this field, we also can glimpse the real nervousness on Wesley's face. However, what seems to be overlooked is his courage to sit at that table and take on top-notch professionals in the field. At that time, he had been in the profession for just over a year, and he did not sell his shares but rather used his own money to challenge the cream of the crop in American professional poker.",
        content_cn: "Wesley通过Hustler百万美金现金桌将他的名字载入史册。在与Tom Dwan的对决中，他首先输掉了310万刀，这是电视扑克历史上最大的底池。但紧接着，他又赢下了一个220万刀的天文数字底池，这是电视扑克历史上第二大的底池。在整场比赛的巨大波动中，我们也可以从Wesley的脸上看到真实的紧张。然而，似乎被忽略的是他能够坐上那张桌子对抗顶级职业牌手的勇气。那时他进入这个行业才一年出头，他没有出售任何份额，完全是用自己的钱在跟美国职业扑克的精英对决。",
        content_tw: "Wesley透過Hustler百萬美金現金桌將他的名字載入史冊。在與Tom Dwan的對決中，他首先輸掉了310萬刀，這是電視撲克歷史上最大的底池。但緊接著，他又贏下了一個220萬刀的天文數字底池，這是電視撲克歷史上第二大的底池。在整場比賽的巨大波動中，我們也可以從Wesley的臉上看到真實的緊張。然而，似乎被忽略的是他能夠坐上那張桌子對抗頂級職業牌手的勇氣。那時他進入這個行業才一年出頭，他沒有出售任何份額，完全是用自己的錢在跟美國職業撲克的精英對決。"
      },
      {
        type: "heading",
        content: "Bravely reporting international cheating syndicate illegal behavior",
        content_cn: "勇敢揭发国际诈骗集团",
        content_tw: "勇敢揭發國際詐騙集團"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-3-CGcibsTz.png",
        alt: "Wesley Reporting Cheating"
      },
      {
        type: "paragraph",
        content: "The details of this incident are well-known. Wesley and his friends were deceived out of $4.1 million by Mars and an international cheating syndicate. After discovering the fraud, Wesley chose to expose it, although he was faced with personal threats. It's worth mentioning that this international cheating syndicate has existed for a long time, but no one has ever stepped forward online to expose them. Wesley was the first to bravely confront them, his act of justice exposing the fraudsters and purging the industry of its evil. Hope we live in a world without thieves!",
        content_cn: "这个事件的细节大家都知道了，Wesley和他的朋友们被Mars和一个国际诈骗集团骗了410万刀。在发现欺诈后，尽管面临人身威胁，Wesley仍然选择了公开。值得一提的是，这个国际诈骗集团存在已久，却从来没有人在网上站出来揭露过他们。Wesley是第一个。他正义的行为揭露了骗子，为行业除害。希望我们生活在天下无贼的世界！",
        content_tw: "這個事件的細節大家都知道了，Wesley和他的朋友們被Mars和一個國際詐騙集團騙了410萬刀。在發現欺詐後，儘管面臨人身威脅，Wesley仍然選擇了公開。值得一提的是，這個國際詐騙集團存在已久，卻從來沒有人在網上站出來揭露過他們。Wesley是第一個。他正義的行為揭露了騙子，為行業除害。希望我們生活在天下無賊的世界！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-4-Bv--PnV9.png",
        alt: "Wesley Portrait"
      },
      {
        type: "paragraph",
        content: "Wesley is a genuine and courageous warrior. Despite losses in both the investment and poker realms in 2023, he still feel full of confidence and open to possibilities. He said: \"as long as we keep professional and have ambitious, everything will come back\" At last, we hope that Wesley has a new beginning in 2024. We anticipate that his path in the world of poker will broaden even further, solidifying his position as a fearless pioneer on the American poker stage.",
        content_cn: "Wesley是一个真诚勇敢的战士。尽管在2023年在投资和扑克领域都有亏损，他仍然充满信心并对可能性持开放态度。他说：“只要我们保持专业并有雄心，一切都会回来。”最后，我们希望Wesley在2024年有一个新的开始。我们期待他在扑克世界的道路会更加宽广，巩固他作为美国扑克舞台上无畏先驱的地位。",
        content_tw: "Wesley是一個真誠勇敢的戰士。儘管在2023年在投資和撲克領域都有虧損，他仍然充滿信心並對可能性持開放態度。他說：「只要我們保持專業並有雄心，一切都會回來。」最後，我們希望Wesley在2024年有一個新的開始。我們期待他在撲克世界的道路會更加寬廣，鞏固他作為美國撲克舞台上無畏先驅的地位。"
      }
    ]
  },
  "jungleman-plays-high-stakes-andy-mariano-pepe": {
    heroImage: "/image/news/details-news/new23/图层1-BQrlUn2y.jpg",
    sections: [
      {
        type: "heading",
        content: "JUNGLEMAN PLAYS HIGH STAKES $50/100/200W/ ANDY, MARIANO, PEPE, DJ WASHBURN & MARS",
        content_cn: "JUNGLEMAN高额桌直播 $50/100/200 与ANDY、MARIANO、PEPE、DJ WASHBURN和MARS",
        content_tw: "JUNGLEMAN高額桌直播 $50/100/200 與ANDY、MARIANO、PEPE、DJ WASHBURN和MARS"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT",
        content_cn: "筹码统计",
        content_tw: "籌碼統計"
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
      // {
      //   type: "heading",
      //   content: "Chapter",
      //   content_cn: "章节",
      //   content_tw: "章節"
      // },
      {
        type: "paragraph",
        content: "0:00 : Countdown",
        content_cn: "0:00 : 倒计时",
        content_tw: "0:00 : 倒數計時"
      },
      {
        type: "paragraph",
        content: "26:40 : Player Introductions",
        content_cn: "26:40 : 选手介绍",
        content_tw: "26:40 : 選手介紹"
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
        content: "6:16:18 : Final Statistics",
        content_cn: "6:16:18 : 最终统计",
        content_tw: "6:16:18 : 最終統計"
      },
      {
        type: "paragraph",
        content: "6:18:08 : Ending Credits",
        content_cn: "6:18:08 : 结束字幕",
        content_tw: "6:18:08 : 結束字幕"
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
        content: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS",
        content_cn: "TLPT豪客赛赢家排行榜",
        content_tw: "TLPT豪客賽贏家排行榜"
      },
      {
        type: "paragraph",
        content: "The first stop of the 2023 TLPT in Sydney was successfully concluded on October 29th The next stop will be more excited. Looking forward to it.",
        content_cn: "2023年TLPT悉尼站于10月29日圆满结束，下一站将更加精彩，让我们拭目以待。",
        content_tw: "2023年TLPT悉尼站於10月29日圓滿結束，下一站將更加精彩，讓我們拭目以待。"
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
        content: "TLPT INTERNATIONAL HIGH-ROLLERS",
        content_cn: "TLPT国际豪客赛",
        content_tw: "TLPT國際豪客賽"
      },
      {
        type: "paragraph",
        content: "The first stop of the 2023 TLPT in Sydney was successfully concluded on October 29th The next stop will be more excited. Looking forward to it.",
        content_cn: "2023年TLPT悉尼站于10月29日圆满结束，下一站将更加精彩，让我们拭目以待。",
        content_tw: "2023年TLPT悉尼站於10月29日圓滿結束，下一站將更加精彩，讓我們拭目以待。"
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
        content: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE",
        content_cn: "TLPT国隙10K挑战赛决赛桌",
        content_tw: "TLPT國隙10K挑戰賽決賽桌"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT",
        content_cn: "筹码统计",
        content_tw: "籌碼統計"
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
        content: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE",
        content_cn: "TLPT国隙25K挑战赛决赛桌",
        content_tw: "TLPT國隙25K挑戰賽決賽桌"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT",
        content_cn: "筹码统计",
        content_tw: "籌碼統計"
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
        content: "SUPER HIGH STAKES $100/200/400!! JUNGLEMAN, ANDY, NIK AIRBALL, PEPE, MARS - COMMENTARY BY MARC GOONE",
        content_cn: "超高额现金桌 $100/200/400!! JUNGLEMAN、ANDY、NIK AIRBALL、PEPE、MARS - MARC GOONE解说",
        content_tw: "超高額現金桌 $100/200/400!! JUNGLEMAN、ANDY、NIK AIRBALL、PEPE、MARS - MARC GOONE解說"
      },
      {
        type: "paragraph",
        content: "CHIP COUNT",
        content_cn: "筹码统计",
        content_tw: "籌碼統計"
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
        content: "Chapter",
        content_cn: "章节",
        content_tw: "章節"
      },
      {
        type: "paragraph",
        content: "0:00 : Countdown",
        content_cn: "0:00 : 倒计时",
        content_tw: "0:00 : 倒數計時"
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
        content: "6:32:03 : Any Biggest HCL Win - $233,000",
        content_cn: "6:32:03 : Andy最大HCL胜利 - $233,000",
        content_tw: "6:32:03 : Andy最大HCL勝利 - $233,000"
      },
      {
        type: "paragraph",
        content: "6:32:24 : Final Statistics",
        content_cn: "6:32:24 : 最终统计",
        content_tw: "6:32:24 : 最終統計"
      },
      {
        type: "paragraph",
        content: "6:33:23 : Ending Credits",
        content_cn: "6:33:23 : 结束字幕",
        content_tw: "6:33:23 : 結束字幕"
      },
      {
        type: "paragraph",
        content: "https://www.youtube.com/watch?v=wx2d3EudeM"
      }
    ]
  },
  "aa-poker-largest-sponsor-tlpt-event": {
    heroImage: "/image/news/details-news/new23/图层1-BQrlUn2y.jpg",
    sections: [
      {
        type: "heading",
        content: "AA POKER, THE LARGEST SPONSOR OF THE TLPT EVENT",
        content_cn: "AA POKER，TLPT赛事最大赞助商",
        content_tw: "AA POKER，TLPT賽事最大贊助商"
      },
      // {
      //   type: "heading",
      //   content: "TLPT Background",
      //   content_cn: "TLPT背景",
      //   content_tw: "TLPT背景"
      // },
      {
        type: "paragraph",
        content: "The TLPT event is a new global high-roller brand series with a grand background and powerful strength. It will become an important part of the global high-roller series map.AA poker is an important part of TLPT with many famous poker stars who would like to join in. Player Bryn Kenney who represented AA POKER in the Triton Series 250K Invitation Event won again the champion title and returned to the top of the world rank of bonus. At the same time, Dan Cates, as the brand ambassador of TLPT, is also well-known among pokers. He is also one of the world's all-round poker players.Therefore, TLPT will have a strong influence in the poker community worldwide.",
        content_cn: "TLPT赛事是一个全新的全球豪客赛品牌系列，背景雄厚，实力强大。它将成为全球豪客赛系列版图的重要组成部分。AA Poker是TLPT的重要组成部分，许多著名扑克明星都希望加入。代表AA POKER参加传奇系列赛250K邀请赛的选手Bryn Kenney再次获得冠军，重返世界奖金排行榜榜首。同时，作为TLPT品牌大使的Dan Cates在扑克界也家喻户晓，他也是世界顶级全能扑克选手之一。因此，TLPT将在全球扑克界产生强大影响力。",
        content_tw: "TLPT賽事是一個全新的全球豪客賽品牌系列，背景雄厚，實力強大。它將成為全球豪客賽系列版圖的重要組成部分。AA Poker是TLPT的重要組成部分，許多著名撲克明星都希望加入。代表AA POKER參加傳奇系列賽250K邀請賽的選手Bryn Kenney再次獲得冠軍，重返世界獎金排行榜榜首。同時，作為TLPT品牌大使的Dan Cates在撲克界也家喻戶曉，他也是世界頂級全能撲克選手之一。因此，TLPT將在全球撲克界產生強大影響力。"
      },
      // {
      //   type: "heading",
      //   content: "TLPT event schedule",
      //   content_cn: "TLPT赛事日程",
      //   content_tw: "TLPT賽事日程"
      // },
      {
        type: "paragraph",
        content: "2023 first stop",
        content_cn: "2023年第一站",
        content_tw: "2023年第一站"
      },
      {
        type: "paragraph",
        content: "TLPT Sydney High-roller Series & APT Australia Championships",
        content_cn: "TLPT悉尼豪客系列赛 & APT澳大利亚锦标赛",
        content_tw: "TLPT悉尼豪客系列賽 & APT澳大利亞錦標賽"
      },
      {
        type: "paragraph",
        content: "Date: October 22nd, 2023-October 29th, 2023",
        content_cn: "日期：2023年10月22日-2023年10月29日",
        content_tw: "日期：2023年10月22日-2023年10月29日"
      },
      {
        type: "paragraph",
        content: "Prize pool: $3.5M",
        content_cn: "奖池：350万美元",
        content_tw: "獎池：350萬美元"
      },
      {
        type: "paragraph",
        content: "We will have 29 events cross 8 days, which include: Opening events, Monster stack, Mini Main, National champs, Bankroll builder, 10k challenge,Players champ, Celebrity game-bounty, Hachem deepstack, Goliath, Poker hall of fame invitational, The valut, Lockout, 25K challenge, PKO bounty, Pineapple, XHR and etc.",
        content_cn: "我们将在跨越8天的时间内举办29场赛事，包括：揭幕赛、巨典赛、迷你主赛、国家冠军赛、资金构建赛、10K挑战赛、选手冠军赛、名人赏金赛、Hachem深筹赛、巨人赛、扑克名人堂邀请赛、保险箱赛、封锁赛、25K挑战赛、PKO赏金赛、菠萝赛、XHR等。",
        content_tw: "我們將在跨越8天的時間內舉辦29場賽事，包括：揭幕賽、巨典賽、迷你主賽、國家冠軍賽、資金構建賽、10K挑戰賽、選手冠軍賽、名人賞金賽、Hachem深籌賽、巨人賽、撲克名人堂邀請賽、保險箱賽、封鎖賽、25K挑戰賽、PKO賞金賽、菠蘿賽、XHR等。"
      },
      {
        type: "paragraph",
        content: "We are expecting to have more than 4,000 players come to play our first stop in Sydney Australia.",
        content_cn: "我们预计将有4000多名选手来澳大利亚悉尼参加我们的第一站比赛。",
        content_tw: "我們預計將有4000多名選手來澳大利亞悉尼參加我們的第一站比賽。"
      },
      // {
      //   type: "heading",
      //   content: "TLPT free satellite tournament",
      //   content_cn: "TLPT免费卫星赛",
      //   content_tw: "TLPT免費衛星賽"
      // },
      {
        type: "paragraph",
        content: "To allow more players to join the TLPT high-roller series, AA POKER has launched a free satellite tournament on September 22nd, which is currently open.We are delighted to report that three lucky guys got our high-roller packages. Congratulations!Want to become a champion like Moneymaker? detailed information is provided below, come and join it:",
        content_cn: "为了让更多选手加入TLPT豪客系列赛，AA POKER于9月22日推出了免费卫星赛，目前正在进行中。我们很高兴地宣布，三位幸运儿获得了我们的豪客赛套餐。恭喜！想成为像Moneymaker一样的冠军吗？详情如下，快来加入：",
        content_tw: "為了讓更多選手加入TLPT豪客系列賽，AA POKER於9月22日推出了免費衛星賽，目前正在進行中。我們很高興地宣布，三位幸運兒獲得了我們的豪客賽套餐。恭喜！想成為像Moneymaker一樣的冠軍嗎？詳情如下，快來加入："
      }
    ]
  },
  "that-man-zheming-zhu-wins-10k-world-champs": {
    heroImage: "/image/news/details-news/new30/zheming-zhu.png",
    sections: [
      {
        type: "heading",
        content: "THAT MAN ZHEMING ZHU WINS $10K WORLD CHAMPS WARM-UP WITH AA POKER",
        content_cn: "那个中国人zheming zhu代表AA POKER赢得$10K世界冠军赛热身赛",
        content_tw: "那個中國人Zheming Zhu代表AA POKER贏得$10K世界冠軍賽熱身賽"
      },
      {
        type: "paragraph",
        content: "Zheming Zhu has completed a wholly dominant final table performance at the WPT Australia $10K World Champs Heads-Up, defeating Malcolm Trayner heads up to claim his first Tier One title.The two players made a deal prior to the start of play, leaving $10,000 and the WPT Passport to play for. Trayner wasted no time, shoving his button on the first hand to a fold from Zhu. The pair then danced around each other for a couple of hands before Zhu shoved his own button. Trayner looked him up, and it was off to the races.",
        content_cn: "Zheming Zhu在WPT澳大利亚$10K世界冠军赛单挑中完成了全面的决赛桌表现，击败Malcolm Trayner获得了他的第一个顶级头衔。两位选手在比赛开始前达成了协议，留下$10,000和WPT护照作为奖励。Trayner毫不耗时，第一手就在按钮位全下，Zhu弃牌。两人在接下来的几手中互相起舞，然后Zhu在自己的按钮位全下。Trayner跟注，比赛开始。",
        content_tw: "Zheming Zhu在WPT澳大利亞$10K世界冠軍賽單挑中完成了全面的決賽桌表現，擊敗Malcolm Trayner獲得了他的第一個頂級頭銜。兩位選手在比賽開始前達成了協議，留下$10,000和WPT護照作為獎勵。Trayner毫不耗時，第一手就在按鈕位全下，Zhu棄牌。兩人在接下來的幾手中互相起舞，然後Zhu在自己的按鈕位全下。Trayner跟注，比賽開始。"
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
        content: "Zhu would immediately connect in the window and hold through on the board of 9♦Q♣4♦7♠3♣ to claim the title, the crystal boomerang trophy, and the $273 AUD comes with it. From all of us here at PMA, congratulations Zheming Zhu, WPT Australia $10K World Champs Warm-Up Champion!",
        content_cn: "Zhu立即在窗口配上，并在牌面 9♦Q♣4♦7♠3♣ 上保持领先，赢得了头衔、水晶回旋镖奖杯以及$273澳元。我们PMA全体成员向Zheming Zhu表示祝贺，WPT澳大利亚$10K世界冠军赛热身赛冠军！",
        content_tw: "Zhu立即在窗口配上，並在牌面 9♦Q♣4♦7♠3♣ 上保持領先，贏得了頭銜、水晶回旋鏢獎杯以及$273澳元。我們PMA全體成員向Zheming Zhu表示祝賀，WPT澳大利亞$10K世界冠軍賽熱身賽冠軍！"
      }
    ]
  },
  "free-satellite-tournament": {
    heroImage: "/image/news/details-news/new48/zzazhks-en-DBwW2GrR.jpg",
    heroImage_cn: "/image/news/details-news/new48/cn/zzazhks-zh-BuVUXbN2.jpg",
    heroImage_tw: "/image/news/details-news/new48/tw/zzazhks-zh-BuVUXbN2.jpg",
    sections: [
      {
        type: "heading",
        content: "FREE SATELLITE TOURNAMENT",
        content_cn: "免费卫星赛开启",
        content_tw: "免費衛星賽開啟"
      },
      // {
      //   type: "image",
      //   src: "/image/news/details-news/new48/en.jpg",
      //   src_cn: "/image/news/details-news/new48/cn/cn.jpg",
      //   src_tw: "/image/news/details-news/new48/tw/tw.jpg",
      //   alt: "Free Satellite Tournament"
      // }
    ]
  },
  "aa-poker-global-pre-launch": {
    heroImage: "/image/news/details-news/new32/1-D1kOLeUQ.jpg",
    sections: [
      {
        type: "heading",
        content: "AA POKER GLOBAL PRE-LAUNCH",
        content_cn: "AA POKER伦敦发布会",
        content_tw: "AA POKER倫敦發布會"
      },
      {
        type: "paragraph",
        content: "AA POKER's First Release Conference Takes Place in London, Making a Grand Appearance on the Global Stage of Texas Hold'em Poker.",
        content_cn: "AA POKER首场发布会于伦敦盛大开幕，闪耀全球德扑舞台。",
        content_tw: "AA POKER首場發布會于倫敦盛大開幕，閃耀全球德撲舞台。"
      },
      {
        type: "paragraph",
        content: "On August 5, 2023, AA POKER's first release conference, 'A life of poker games, the choice of champions,' had a grand opening in the world-class city of London and the industry in London, which took place concurrently with Triton Poker Highroller Series and World Series of Poker, the two most important poker event in the world, pumping new vigor into the entire circle of Texas hold'em poker.",
        content_cn: "2023年8月5日，AA POKER首场发布会——《牌局人生，冠军之选》在媒体和业界的瞩目下于伦敦盛大开幕，与两个全球顶尖赛事TRITON POKER HIGHROLLER SERIES与WORLD SERIES OF POKER同期进行，为整个德州扑克界注入了无限活力。",
        content_tw: "2023年8月5日，AA POKER首場發布會——《牌局人生，冠軍之選》在媒體與業界的矚目下於倫敦盛大開幕，與兩個全球頂尖賽事TRITON POKER HIGHROLLER SERIES與WORLD SERIES OF POKER同期進行，為整個德州撲克界注入了無限活力。"
      },
      {
        type: "paragraph",
        content: "The release conference was attended by a great number of industrial celebrities, top players and media representatives, who shared the trend of the industrial development and their views on Texas hold'em business, tried AA POKER app online games, and witnessed the grand appearance of AA POKER as a highly competitive new power in the field of Texas hold'em games. Meanwhile, players were competing vigorously in two top events in the world, and the whole venue was of an atmosphere of heated competitions.",
        content_cn: "发布会现场，众多行业知名人士、顶级选手以及媒体代表齐聚一堂，分享德州扑克行业的发展趋势和自己的心得观点，并现场体验AA POKER app线上对战，共同见证了AA POKER作为德州扑克领域充满竞争力的全新势力隆重登场。与此同时，两个全球顶尖赛事中选手们正在展开激烈的角逐，让整个场地充满了热烈的竞技氛围。",
        content_tw: "發布會現場，眾多行業知名人士、頂級選手以及媒體代表齊聚一堂，分享德州撲克行業的發展趨勢和自己的心得觀點，並現場體驗AA POKER app線上對戰，共同見證了AA POKER作為德州撲克領域充滿競爭力的全新勢力隆重登場。同時，兩個全球頂尖賽事中選手們正在展開激烈的角逐，讓整個場地充滿了熱烈的競技氛圍。"
      },
      {
        type: "paragraph",
        content: "Most remarkably, player Bryn Kenney who represented AA POKER in the Triton Series 250K Invitation Event won again the champion title and returned to the top of the world rank of bonus. During the competition, he was powerful and confident, kept alert to opportunities and won the game in the end, and the entire global community of Texas hold'em poker cheered for him. This not only proved again AA POKER's capacity to provide top players with high-quality gaming experience and its enormous influence in the society of Texas hold'em poker.",
        content_cn: "令人瞩目的是，代表AA POKER出战的牌手Bryn Kenney在TRITON SERIES 250K INVITATION EVENT再次摘下了赛事冠军的桂冠，重返世界奖金排行榜第一。在比赛中，他凭借其强势、自信的风格，紧盯机会并最终夺得胜利，并让全球所有德州扑克爱好者为他欢呼。这一壮举再次证明了AA POKER为全球顶尖选手提供的高品质游戏体验，以及其在德州扑克界的巨大影响力。",
        content_tw: "令人矚目的是，代表AA POKER出戰的牌手Bryn Kenney在TRITON SERIES 250K INVITATION EVENT再次摘下了賽事冠軍的桂冠，重返世界獎金排行榜第一。在比賽中，他憑借其強勢、自信的風格，緊盯機會並最終奪得勝利，並讓全球所有德州撲克愛好者為他歡呼。這一壯舉再次證明了AA POKER為全球頂尖選手提供的高品質遊戲體驗，以及其在德州撲克界的巨大影響力。"
      },
      {
        type: "paragraph",
        content: "Several media expressed their unreserved approval and expectation of AA POKER's potentials. They believe AA POKER on the strength of its innovative technologies and excellent services enjoys a gigantic potential of development in Texas hold'em industry. During the release, AA POKER exhibited its outstanding brand and operation technologies which successfully attracted the attention of the media.",
        content_cn: "多家媒体对AA POKER的潜力表达了极大的赞赏和期待。他们认为AA POKER以其创新的技术和卓越的服务，在德州扑克行业中具备巨大的发展潜力。在发布会上，AA POKER展示了其优异的品牌和运营技术，成功引起了媒体的高度关注。",
        content_tw: "多家媒體對AA POKER的潛力表達了極大的讚賞和期待。他們認為AA POKER以其創新的技術和卓越的服務，在德州撲克行業中具備巨大的發展潛力。在發表會上，AA POKER展示了其優異的品牌和營運技術，成功引起了媒體的高度關注。"
      },
      {
        type: "paragraph",
        content: "The ceremonious opening of AA POKER's first release conference in London started a new storm in the community of Texas hold'em poker. The AA POKER CEO said the success of the release conference is a major step in AA POKER's brand strategy. Aiming at a global top platform for Texas hold'em poker, they hold high the slogan of 'anyone could be a star' and will continue to provide first-class games and innovative technology, promote and lead the global market of Texas hold'em poker and afford players with more exciting, wonderful gaming experience.",
        content_cn: "AA POKER在伦敦首场发布会的盛大开幕，掀起了德州扑克界一股新风暴。AA POKER首席执行官表示，此次发布会的成功是AA POKER品牌战略拓展的重要一步。剑指全球顶尖德州扑克平台，他们秉承着「ANYONE COULD BE A STAR」的口号，将继续提供一流的游戏体验和创新技术，不断推进和引领全球德州扑克市场的发展，为玩家提供更加刺激和精彩的游戏体验。",
        content_tw: "AA POKER在倫敦首場發布會的盛大開幕，掀起了德州撲克界一股新風暴。AA POKER首席執行官表示，此次發布會的成功是AA POKER品牌戰略拓展的重要一步。劍指全球頂尖德州撲克平台，他們秉承著「ANYONE COULD BE A STAR」的口號，將繼續提供一流的遊戲體驗和創新技術，不斷推進和引領全球德州撲克市場的發展，為玩家提供更加刺激和精彩的遊戲體驗。"
      }
    ]
  },
  "jungleman-aapoker-brand-ambassador": {
    heroImage: "/image/news/details-news/new33/12-1-en-BuRW2_oH.png",
    sections: [
      {
        type: "heading",
        content: "AA POKER BRAND AMBASSADOR SIGNING",
        content_cn: "AA POKER代言人签约",
        content_tw: "AA POKER發言人簽約"
      },
      {
        type: "paragraph",
        content: "AAPoker is delighted to announce that one of America's well-known poker stars, Dan Cates (Jungleman), has joined us as our newest brand ambassador!",
        content_cn: "AA POKER很高兴宣布来自美国知名扑克明星Dan「Jungleman」Cates正式加入AA POKER，成为其品牌代言人。",
        content_tw: "AA POKER很高興宣布來自美國知名撲克明星Dan「Jungleman」Cates正式加入AA POKER，並成為其品牌代言人。"
      },
      {
        type: "paragraph",
        content: "You may be surprised to learn that Dan Cates was born on November 14, 1989, which means he is only 33 years old this year. He is reportedly known as 'Jungleman' due to his thick hair and wild behavior. Others gave him the nickname 'Jungleman,' and he found it amusing. Therefore, he used it as his online ID.",
        content_cn: "你很难想象，Dan 'Jungleman' Cates生于1989年11月14日，今年才33岁。他之所以被叫做「野人」，是因为他的线上ID叫「Jungleman12」，据说是因为他毛发浓密，行事狂野，所以别人给他取了这个绰号「Jungleman（野人）」，他自己觉得挺有趣，于是就注册成了线上ID。",
        content_tw: "你很難想像，Dan 'Jungleman' Cates生於1989年11月14日，今年才33歲。他之所以被叫做「野人」，是因為他的線上ID叫「Jungleman12」，據說是因為他毛髮濃密，行事狂野，所以別人給他取了這個綽號「Jungleman（野人）」，他自己覺得挺有趣，於是就註冊成了線上ID。"
      },
      {
        type: "paragraph",
        content: "Jungleman holds a prominent position in today's poker world and is considered to be one of the best heads-up No Limit Texas Hold 'em players in the world. Jungleman also has made a splash at poker tournaments with his powerful strength. His online cash game earnings at Full Tilt Poker and PokerStars are over US$11 million. His total live tournament winnings exceed US$14 million.",
        content_cn: "野人在当今扑克圈是拥有着绝对一席之地的男人，是世界上最好的单挑玩家之一。他的线上扑克收入超过1100万刀，现场扑克收入超过1400万刀，综合实力堪称「恐怖如斯」！",
        content_tw: "野人在當今撲克圈是擁有著絕對一席之地的男人，是世界上最好的單挑玩家之一。他的線上撲克收入超過1100萬刀，現場撲克收入超過1400萬刀，綜合實力堪稱「恐怖如斯」！"
      },
      {
        type: "paragraph",
        content: "Jungleman's recent appearance was at the Triton Poker Series (London) in August 2023. As the ambassador for AApoker, he made it to the final table of the $125K Main Event and ultimately secured the third-place position, earning $1.94 million. Jungleman also attended the Release Conference held by AApoker in London. Surprisingly, after shaving off his beard, he appeared much fresher.",
        content_cn: "野人最近的亮相是在2023年8月的Triton伦敦站，身为AA POKER形象大使的他一路杀进$125K主赛事的决赛桌，并最终夺得第三名，收获奖金194万刀。在比赛之余，野人还出席了AA POKER在伦敦举办的现场发布会。还别说，剃掉胡须的他竟然显得清爽了许多。",
        content_tw: "野人最近的亮相是在2023年8月的Triton倫敦站，身為AA POKER形象大使的他一路殺進$125K主賽事的決賽桌，並最終奪得第三名，收穫獎金194萬刀。在比賽之餘，野人也出席了AA POKER在倫敦舉辦的現場發表會。別說，剃掉鬍鬚的他竟然顯得清爽了許多。"
      },
      {
        type: "paragraph",
        content: "If you think Jungleman is just a top professional player, then you may be mistaken. He wasn't nicknamed Jungleman for nothing, but was also described as a genius in the poker world.",
        content_cn: "如果你认为野人只是一位顶尖的职业牌手，那你可就看走眼了，野人的绰号不是白来的。他还是一位顶尖的「异类天才」。但远远不止于此。",
        content_tw: "如果你認為野人只是一位頂尖的職業牌手，那你可就看走眼了，野人的綽號不是白來的。他還是一位頂尖的「異類天才」。但遠遠不止於此。"
      },
      {
        type: "paragraph",
        content: "Jungleman has won two World Series of Poker bracelets that hold exceptional value. As he achieved victories in the $50,000 buy-in Poker Players Championship in 2021 and 2022 respectively, creating a miraculous feat in WSOP history.",
        content_cn: "目前野人夺得的WSOP金手链不算多，只有2条，但却是含金量极高的两条。他背靠背赢得了2021年和2022年5万刀买入的扑克玩家锦标赛的冠军，创造了WSOP历史上的神迹。",
        content_tw: "目前野人奪得的WSOP金手鏈不算多，只有2條，但卻是含金量極高的兩條。他背靠背贏得了2021年和2022年5萬刀買入的撲克玩家錦標賽的冠軍，創造了WSOP歷史上的神蹟。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new33/12-1-en-BuRW2_oH.png",
        alt: "Jungleman WSOP Championships"
      },
      {
        type: "paragraph",
        content: "You should be aware that the Poker Player Championships feature an elite group of players competing in nine different poker games, showcasing Jungleman's overall genius and strength.",
        content_cn: "要知道，参加扑克玩家锦标赛的几乎全部是精英玩家，而且这个比赛涵盖9种不同的扑克游戏，这也充分体现了野人彪悍的综合实力。",
        content_tw: "要知道，參加撲克玩家錦標賽的幾乎全部是精英玩家，而且這個比賽涵蓋9種不同的撲克遊戲，這也充分體現了野人彪悍的綜合實力。"
      },
      {
        type: "paragraph",
        content: "Stay tuned to witness Jungleman information at AApoker! Download AApoker!",
        content_cn: "敬请期待Jungleman的更多赛事精彩信息，快来加入AA POKER。",
        content_tw: "敬請期待更多Jungleman的賽事精彩訊息，快來加入AA POKER。"
      }
    ]
  },
  "triton-poker-series-london-2023-event-11": {
    heroImage: "/image/news/details-news/new34/新闻13-英-DPSOvWsW.png",
    sections: [
      {
        type: "heading",
        content: "TRITON POKER SERIES LONDON 2023 - EVENT #11 $125K NLH MAIN EVENT - FINAL TABLE",
        content_cn: "传奇扑克系列赛伦敨2023 - 赛事#11 $125K无限注主赛事 - 决赛桌",
        content_tw: "傳奇撲克系列賽倒敨2023 - 賽事#11 $125K無限注主賽事 - 決賽桌"
      },
      {
        type: "paragraph",
        content: "Total prize pool: $18,875,000",
        content_cn: "总奖池：$18,875,000",
        content_tw: "總獎池：$18,875,000"
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
        content: "TRITON POKER SERIES LONDON 2023 - EVENT #9 $250K NLH LUXON INVITATIONAL - FINAL TABLE",
        content_cn: "传奇扑克系列赛伦敨2023 - 赛事#9 $250K无限注Luxon邀请赛 - 决赛桌",
        content_tw: "傳奇撲克系列賽倒敨2023 - 賽事#9 $250K無限注Luxon邀請賽 - 決賽桌"
      },
      {
        type: "paragraph",
        content: "Date : August 3-5, 2023",
        content_cn: "日期：2023年8月3-5日",
        content_tw: "日期：2023年8月3-5日"
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
    heroImage: "/image/news/details-news/new36/new15-CV6z6WoF.png",
    sections: [
      {
        type: "heading",
        content: "WHY IS 36-YEAR-OLD BRYN KENNEY ONCE AGAIN THE MOST VALUABLE MAN IN POKER?",
        content_cn: "为什么36岁的BRYN KENNEY再一次成为扑克圈最能赚钱的男人？",
        content_tw: "為什麼36歲的BRYN KENNEY再一次成為撲克圈最能賺錢的男人？"
      },
      {
        type: "paragraph",
        content: "Bryn Kenney, 36, is truly experiencing a stroke of good luck and double happiness this year. After becoming a sponsored player of AA POKER, he won the $250k Triton Poker London Luxon Invitational for $6.8 million.Until now, his career earnings reached over $65 million, overtaking Justin Bonomo on the All-Time Money List. After ascending to the top of the all-time money list at the age of 32, Bryn Kenney has predominantly maintained his position but sometimes stayed in second place for a short time.It is nearly impossible to articulate in any language the awe-inspiring performances on the tournament and money-making prowess of Bryn Kenney, who stands as the 'godlike figure' in this realm, 'a genius', and undoubtedly a future inductee into the 'Poker Hall of Fame'. How does he achieve such remarkable feats? Bryn Kenney (born November 1, 1986) is an American professional poker player from Long Island, New York. He is 36 years old, but some 80s or 90s players were surprised as he is such a young age.Kenney expressed remarkable memory skills from a very young age, possessing the gift of eidetic memory. As an infant, his mother Carol would show him baseball cards, and even before he could speak, he had memorized the names of at least 60 players.It is almost certain that this innate talent has helped Kenney become a professional poker. And his unique qualities have garnered unwavering support from his mother Carol, who always stands by him, allowing him the freedom to make his own choices and also becoming one of his fan. Kenney played SNS games with friends at first in high school, and his poker career also began. At the age of 17, unable to create his account due to being underage, his mother created an online account in her name for him. At 18, he officially opened his account, which he continues to use.From that on, poker completely consumed his life. A few weeks later, he dropped out of college to pursue a professional poker career, even though he hadn't graduated from college. His mother still supported him.",
        content_cn: "今年对于36岁的Bryn Kenney来说可谓双喜临门。在成为AA POKER签约牌手后，他在Triton伦敦站25万美金买入的Luxon邀请赛中斩获冠军，赢得680万美金奖金。至此，他的职业生涯奖金已超过6500万美金，再次超越Justin Bonomo登顶历史奖金榜第一。自从32岁首次登顶以来，Bryn Kenney基本保持着第一的位置，只是偶尔短暂地屈居第二。用任何语言都难以形容Bryn Kenney在锦标赛中令人惊叹的表现和赚钱能力，他被誉为这个领域的「神一般的存在」、「天才」，毫无疑问未来会入选「扑克名人堂」。他是如何取得如此非凡成就的呢？Bryn Kenney（1986年11月1日出生）是一位来自美国纽约长岛的职业扑克玩家。他今年36岁，但一些80后或90后的玩家可能会惊讶于他如此年轻。Kenney从小就展现出非凡的记忆力，拥有过目不忘的天赋。还在婴儿时期，他的母亲Carol就给他看棒球卡，在他会说话之前，他就已经记住了至少60名球员的名字。可以肯定的是，这种与生俱来的天赋帮助Kenney成为了职业扑克玩家。他的独特才能得到了母亲Carol的坚定支持，她始终站在他身边，让他自由选择，同时也成为了他的粉丝之一。Kenney高中时期开始和朋友玩SNG游戏，他的扑克生涯也由此开始。17岁时，由于未成年无法自己创建账号，他的母亲以自己的名义为他创建了一个网络账号。18岁时，他正式开设了自己的账号，并一直沿用至今。从那时起，扑克完全占据了他的生活。几周后，尽管还没有大学毕业，他还是退学了，开始追求职业扑克生涯。他的母亲依然支持他。",
        content_tw: "今年對於36歲的Bryn Kenney來說可謂雙喜臨門。在成為AA POKER簽約牌手後，他在Triton倫敦站25萬美金買入的Luxon邀請賽中斬獲冠軍，贏得680萬美金獎金。至此，他的職業生涯獎金已超過6500萬美金，再次超越Justin Bonomo登頂歷史獎金榜第一。自從32歲首次登頂以來，Bryn Kenney基本保持著第一的位置，只是偶爾短暫地屈居第二。用任何語言都難以形容Bryn Kenney在錦標賽中令人驚嘆的表現和賺錢能力，他被譽為這個領域的「神一般的存在」、「天才」，毫無疑問未來會入選「撲克名人堂」。他是如何取得如此非凡成就的呢？Bryn Kenney（1986年11月1日出生）是一位來自美國紐約長島的職業撲克玩家。他今年36歲，但一些80後或90後的玩家可能會驚訝於他如此年輕。Kenney從小就展現出非凡的記憶力，擁有過目不忘的天賦。還在嬰兒時期，他的母親Carol就給他看棒球卡，在他會說話之前，他就已經記住了至少60名球員的名字。可以肯定的是，這種與生俱來的天賦幫助Kenney成為了職業撲克玩家。他的獨特才能得到了母親Carol的堅定支持，她始終站在他身邊，讓他自由選擇，同時也成為了他的粉絲之一。Kenney高中時期開始和朋友玩SNG遊戲，他的撲克生涯也由此開始。17歲時，由於未成年無法自己創建帳號，他的母親以自己的名義為他創建了一個網路帳號。18歲時，他正式開設了自己的帳號，並一直沿用至今。從那時起，撲克完全佔據了他的生活。幾週後，儘管還沒有大學畢業，他還是退學了，開始追求職業撲克生涯。他的母親依然支持他。"
      },
      {
        type: "paragraph",
        content: "Securing his first gold bracelet is a turning point in Bryn Kenney's career, signaling the gears of destiny to set in motion. In 2014, at the age of 27, Bryn Kenney was already very famous both online and offline. This year was also very important for Kenney, as he not only participated in the WSOP but also gained his first gold bracelet, leaving an indelible mark on the world's largest poker tournament. The 2014 WSOP Event #63 was a $1,500 six-handed game, including 10 different poker games: Razz, 7-Triple-Draw Lowball, Omaha Hi-Lo, Pot-Limit Omaha, 7-Card Stud, 7-Card Stud High-Low Split, Pot-Limit Omaha, Omaha High-Low Split, Badugi, Limit Hold'ern, and No-Limit Hold'em. It's difficult for most players to understand the rules of these games, but for Kenney is very easy, which will also be thanks to his good memory. Kenney dominated Event #63 from the very beginning, bagging up the chip lead on Day 1. From there, Kenney continued to keep his seat at the top of the chip counts, remaining in the top ten chip counts throughout Day 2 and ultimately bagging second-place chips to end the day. With just four players left, Kenney led to a substantial chip lead early and rode that all of the way to his first championship bracelet.This victory earned Kenney his first career gold bracelet and a prize of $153,220. At that time, his total career earnings were $3.6 million, a far cry from his current staggering total of $65 million.However, in the remaining months of 2014, Kenney continued to participate in live poker tournaments, but his focus increasingly shifted toward high-roller and super high-roller events.",
        content_cn: "2014年，27岁的Bryn Kenney已经在在线和离线扑克界小有名气。这一年对于Kenney来说也非常重要，因为他不仅参加了WSOP，还获得了他的第一枚金手链，在世界上最大的扑克锦标赛上留下了不可磨灭的印记。2014年WSOP赛事#63是一场1500美元的六人游戏，包括10种不同的扑克游戏：Razz、7-Triple-Draw Lowball、Omaha Hi-Lo、Pot-Limit Omaha、7-Card Stud、7-Card Stud High-Low Split、Pot-Limit Omaha、Omaha High-Low Split、Badugi、Limit Hold'em和No-Limit Hold'em。大多数玩家很难理解这些游戏的规则，但对于Kenney来说却很容易，这也要归功于他的良好记忆力。Kenney从一开始就主导了赛事#63，在第一天就获得了筹码领先。在那里，Kenney继续保持着他的领先地位，在第二天的比赛中始终保持在前十名的筹码领先，最后获得了第二名的筹码。只剩下四名玩家时，Kenney在早期就获得了大量的筹码领先，并一直保持到他获得第一枚冠军手链。这场胜利为Kenney赢得了他的第一枚职业金手链和15.32万美元的奖金。当时，他的职业生涯奖金总额为360万美元，远远低于他现在令人惊叹的6500万美元的奖金总额。然而，在2014年剩余的几个月里，Kenney继续参加现场扑克锦标赛，但他的重点逐渐转向了高额和超高额锦标赛。",
        content_tw: "2014年，27歲的Bryn Kenney已經在線上和離線撲克界小有名氣。这一年對於Kenney來說也非常重要，因為他不僅參加了WSOP，還獲得了他的第一枚金手鏈，在世界上最大的撲克錦標賽上留下了不可磨滅的印記。2014年WSOP賽事#63是一場1500美元的六人遊戲，包括10種不同的撲克遊戲：Razz、7-Triple-Draw Lowball、Omaha Hi-Lo、Pot-Limit Omaha、7-Card Stud、7-Card Stud High-Low Split、Pot-Limit Omaha、Omaha High-Low Split、Badugi、Limit Hold'em和No-Limit Hold'em。大多數玩家很難理解這些遊戲的規則，但對於Kenney來說卻很容易，這也要歸功於他的良好記憶力。Kenney從一開始就主導了賽事#63，在第一天就獲得了籌碼領先。在那裡，Kenney繼續保持著他的領先地位，在第二天的比賽中始終保持在前十名的籌碼領先，最後獲得了第二名的籌碼。只剩下四名玩家時，Kenney在早期就獲得了大量的籌碼領先，並一直保持到他獲得第一枚冠軍手鏈。这場勝利為Kenney贏得了他的第一枚職業金手鏈和15.32萬美元的獎金。當時，他的職業生涯獎金總額為360萬美元，遠遠低於他現在令人驚嘆的6500萬美元的獎金總額。然而，在2014年剩餘的幾個月里，Kenney繼續參加現場撲克錦標賽，但他的重點逐漸轉向了高額和超高額錦標賽。"
      },
      {
        type: "paragraph",
        content: "2019: The first time to claim the top spot.",
        content_cn: "2019 Kenney年，首次登顶世界第一。",
        content_tw: "2019 Kenney年，首次登頂世界第一。"
      },
      {
        type: "paragraph",
        content: "In a 2018 interview, Bryn Kenney explicitly stated that becoming the highest-earning poker player was his long-term goal, one he wouldn't give up until achieved, predicting it within the next two years. The Triton Million event held in London in August 2019 featured the highest buy-in ever, at £1.05 million. Bryn Kenney reached the final heads-up against Chinese player Zang, and they made a deal. Zang won the title of Triton Million winner. However, due to Kenney's chip lead, he received the lion's share of the prize, £16,890,509 ($20,563,324), an unprecedented and possibly unparalleled sum.After this tournament, Bryn Kenney's career earnings reached $55,505,634, which is the first person to overtake Justin Bonomo to claim the top spot on the Hendon Mob all-time money list.",
        content_cn: "在2018年的一次采访中，Bryn Kenney明确表示成为有史以来最赚钱的扑克玩家是他的长期目标，在达到这个目标之前绝不放弃，并且预测就在未来两年内实现。2019年8月在英国伦敦举办的Triton百万慈善邀请赛是有史以来买入最高的现场赛事，参赛费用高达105万英镑。Bryn Kenney与中国玩家臧书奴打到了最后，两人达成奖金协议，最后臧奴夺得冠军。由于Bryn Kenney的筹码是臧书奴的四倍，他分得了最大的奖金份额£16,890,509 ($20,563,324)，这是一笔前无古人，也非常可能后无来者的巨额奖金。经此一役，Bryn Kenney的职业生涯收入达到了$55,505,634，第一次超越Justin Bonomo成为历史奖金榜第一人。",
        content_tw: "在2018年的一次採訪中，Bryn Kenney明確表示成為有史以來最賺錢的撲克玩家是他的長期目標，在達到這個目標之前絕不放棄，並且預測就在未來兩年內實現。2019年8月在英國倫敦舉辦的Triton百萬慈善邀請賽是有史以來買入最高的現場賽事，參賽費用高達105萬英鎊。Bryn Kenney與中國玩家臧書奴打到了最後，兩人達成獎金協議，最後臧奴奪得冠軍。由於Bryn Kenney的籌碼是臧書奴的四倍，他分得了最大的獎金份額£16,890,509 ($20,563,324)，這是一筆前無古人，也非常可能後無來者的巨額獎金。經此一役，Bryn Kenney的職業生涯收入達到了$55,505,634，第一次超越Justin Bonomo成為歷史獎金榜第一人。"
      },
      {
        type: "paragraph",
        content: "2023: Kenney reached the mountaintop once again.",
        content_cn: "2023年，Kenney再次登顶世界第一。",
        content_tw: "2023年，Kenney再次登頂世界第一。"
      },
      {
        type: "paragraph",
        content: "London seems to be a lucky place for Bryn Kenney. After participating in the 2023 WSOP this summer, Kenney appeared at the Triton London event as an AA POKER ambassador. In several games, he won in Event #9, a £250k buy-in Luxon Invitational. This win marked his third Triton championship. The heads-up battle began between Kenney and Talal Shakerchi, the winner of Triton Poker Vietnam, all of the chips got in the middle with Shakerchi holding ace-king and Kenney holding eight-nine. An eight-high flop gave Kenney a big lead and Shakerchi couldn't improve as he went out in second place.With this victory, Kenney had earned a prize of 6.86 million, bringing his total career earnings to $65.03 million, and once again has shot back up to the number one spot on the all-time money list, ahead of Justin Bonomo.",
        content_cn: "伦敦似乎是Bryn Kenney的福地。今年夏天参加完2023年WSOP之后，Kenney便以AA扑克大使的身份在伦敦亮相Triton伦敦站赛事。在多场比赛中，他在买入高达£250k的Event #9 Luxon邀请赛中夺得冠军。这是他的第三个Triton冠军头衔。最终他与Triton越南站冠军Talal Shakerchi进行了一场激动人心的单挑决战，Shakerchi手持AK与Kenney的89全押入池。翻牌圈发出一张8给了Kenney巨大的领先优势，Shakerchi未能翻盘，遗憾获得亚军。凭借这场胜利，Kenney获得了686万英镑的奖金，使他的职业生涯总奖金达到6503万美金，再次超越Justin Bonomo重返历史奖金榜第一的宝座。",
        content_tw: "倫敦似乎是Bryn Kenney的福地。今年夏天參加完2023年WSOP之後，Kenney便以AA撲克大使的身份在倫敦亮相Triton倫敦站賽事。在多場比賽中，他在買入高達£250k的Event #9 Luxon邀請賽中奪得冠軍。這是他的第三個Triton冠軍頭銜。最終他與Triton越南站冠軍Talal Shakerchi進行了一場激動人心的單挑決戰，Shakerchi手持AK與Kenney的89全押入池。翻牌圈發出一張8給了Kenney巨大的領先優勢，Shakerchi未能翻盤，遺憾獲得亞軍。憑藉這場勝利，Kenney獲得了686萬英鎊的獎金，使他的職業生涯總獎金達到6503萬美金，再次超越Justin Bonomo重返歷史獎金榜第一的寶座。"
      }
    ]
  },
  "aa-poker-player-story-chris-moneymaker": {
    heroImage: "/image/news/details-news/new37/new16-BeFig88k.png",
    sections: [
      {
        type: "heading",
        content: "AA POKER PLAYER STORY—CHRIS MONEYMAKER",
        content_cn: "AA POKER名人故事—Chris Moneymaker",
        content_tw: "AA POKER名人故事—Chris Moneymaker"
      },
      {
        type: "paragraph",
        content: "In the 2023 Triton London event, Chris Moneymaker, the AA POKER ambassador, faced a crucial moment in the £250,000 buy-in Luxon Invitational. Moneymaker opened from under the gun with pocket jacks and his opponent Punsri moved in from the big blind after action folded all the way round. Moneymaker saw his opponent table KQ. Unfortunately, it was a fair fight until the dealer put a king on the flop and Moneymaker could not catch a two-outer to survive. At last, he got the fifth prize and $2.03 million.This fifth-place finish held extraordinary significance for Moneymaker. Firstly, it marked the second-highest prize of his professional career, second only to the $2.5 million he earned as the 2003 WSOP Main Event title. Secondly, it represented Moneymaker's debut in a high-stakes event with such a substantial buy-in, and his impressive performance was undoubtedly aided by the support of AA POKER, congratulating him on becoming their ambassador. He is the true architect of history, having changed and led it! He has genuinely embodied AA POKER's slogan: 'Anyone could be a star!'",
        content_cn: "在2023年Triton伦敦站赛事中，AA POKER代言人Chris Moneymaker在买入£250,000的Luxon邀请赛中面临关键时刻。Moneymaker在枪口位用口袋J开池加注，对手Punsri在大盲位全下，其他人弃牌后Moneymaker跟注。Moneymaker看到对手亮出KQ。不幸的是，翻牌出现一张K，Moneymaker未能击中两张外卡续命。最终，他获得第五名和203万美金奖金。这个第五名对Moneymaker具有非凡意义。首先，这是他职业生涯第二高的奖金，仅次于2003年WSOP主赛事冠军的250万美金。其次，这是Moneymaker首次参加如此高买入的豪客赛，他的出色表现无疑得益于AA POKER的支持，恭喜他成为AA POKER代言人。他是真正的历史缔造者，改变并引领了历史！他真正诠释了AA POKER的口号：「Anyone could be a star！」",
        content_tw: "在2023年Triton倫敦站賽事中，AA POKER代言人Chris Moneymaker在買入£250,000的Luxon邀請賽中面臨關鍵時刻。Moneymaker在槍口位用口袋J開池加注，對手Punsri在大盲位全下，其他人棄牌後Moneymaker跟注。Moneymaker看到對手亮出KQ。不幸的是，翻牌出現一張K，Moneymaker未能擊中兩張外卡續命。最終，他獲得第五名和203萬美金獎金。這個第五名對Moneymaker具有非凡意義。首先，這是他職業生涯第二高的獎金，僅次於2003年WSOP主賽事冠軍的250萬美金。其次，這是Moneymaker首次參加如此高買入的豪客賽，他的出色表現無疑得益於AA POKER的支持，恭喜他成為AA POKER代言人。他是真正的歷史締造者，改變並引領了歷史！他真正詮釋了AA POKER的口號：「Anyone could be a star！」"
      },
      {
        type: "heading",
        content: "Won the WSOP Main Event",
        content_cn: "赢得WSOP主赛事冠军",
        content_tw: "贏得WSOP主賽事冠軍"
      },
      {
        type: "paragraph",
        content: "Born on November 21, 1975, Chris Moneymaker was 27 years old in 2003. At that time, he was an unknown accountant with an annual income of $40,000. His poker journey began with winning an $86 satellite tournament at the PokerStars online poker card room that awarded him a seat in the Main Event of the 2003 World Series of Poker. Advancing to the final four, Moneymaker contemplated intentionally losing the tournament. Because the top three could receive WSOP Main Event seats, while the fourth-place earned $8,000 in cash. At that time, he was fortunate to receive a call from a friend who encouraged him to seize the rare opportunity to play in the WSOP Main Event. His friend offered to contribute $5,000, covering half of Moneymaker's buy-in. But unfortunately, the promise wasn't fulfilled. Moneymaker felt regretful and annoyed, but at last Moneymaker's father and his other friend each contributed $2,000, covering 20% of his buy-ins and persuading him to proceed. So Moneymaker went to Las Vegas to participate in his first live tournament and won the championship. On Day 1, he ranked 11th. On Day 2, he ranked 26th (with 111 players remaining). On Day 3, he ranked 6th place (with 45 players remaining). It was on this day that he began to be captured attention in public after defeating Johnny Chan, a momentous achievement considering Chan's seven gold bracelets, two of which were WSOP Main Event titles. Moneymaker's mindset shifted as he progressed, firstly he just hoped for a modest prize, but later he realized he had a chance to earn much more. On Day4, Moneymaker dispatched the great Phil Ivey in a rollercoaster of a hand, where at one point Moneymaker looked certain to win, then lose, before yet another ace got him out of trouble, and sent Ivey packing. On Day 5, the FT between Moneymaker and Sam Farha who had already claimed a gold bracelet in $2,500 PLO lasted over 11 hours. When it was Moneymaker against Farha to decide the title, a monumentally brave bluff when Farha had him crushed has since become one of the most famous and referenced plays in the history of poker. That bluff set up the final hand beautifully, when Moneymaker, on the button with 5-4 of spades, raised to $100,000 pre-flop. Farha called with Q-9 and flopped top pair. With the Js 5s 4c on the board, Moneymaker and his two pair were a big favourite against top pair. By the turn and the 8h, Farha had no chance to win, and Moneymaker merely had to avoid the queen on the river. When the 5h landed, Moneymaker leapt out of his seat in celebration, a winner in his very first live tournament.",
        content_cn: "Chris Moneymaker于1975年11月21日出生，2003年时27岁。当时他是一名默默无闻的会计师，年收入仅4万美金。他的扑克之旅始于在PokerStars线上扑克室赢得一场86美金的卫星赛，获得了2003年世界扑克系列赛主赛事的参赛席位。晋级到四强后，Moneymaker曾考虑故意输掉比赛。因为前三名可以获得WSOP主赛事席位，而第四名只能获得8000美金现金。那时，他幸运地接到一位朋友的电话，鼓励他抓住这个难得的机会参加WSOP主赛事。他的朋友提出出资5000美金，支付Moneymaker一半的买入费用。但不幸的是，这个承诺没有兑现。Moneymaker感到遗憾和恼火，但最后他的父亲和另一位朋友各出资2000美金，支付了他20%的买入费用，并说服他继续参赛。于是Moneymaker前往拉斯维加斯参加他的第一场现场锦标赛，并赢得了冠军。第一天，他排名第11位。第二天，他排名第26位（还剩111名选手）。第三天，他排名第6位（还剩45名选手）。正是在这一天，他击败了Johnny Chan后开始受到公众关注，这是一项了不起的成就，因为Chan拥有七条金手链，其中两条是WSOP主赛事冠军。随着比赛的进行，Moneymaker的心态发生了变化，起初他只希望获得一笔小奖金，但后来他意识到自己有机会赢得更多。第四天，Moneymaker在一手跌宕起伏的牌局中淘汰了伟大的Phil Ivey，Moneymaker一度看起来必胜无疑，然后又几乎要输，最后又一张A让他转危为安，送走了Ivey。第五天，Moneymaker与已经在2500美金PLO中获得金手链的Sam Farha的决赛桌对决持续了超过11个小时。当Moneymaker和Farha单挑决定冠军时，一次在Farha占据绝对优势时的惊天诈唬，成为了扑克历史上最著名和最常被引用的打法之一。那次诈唬为最后一手牌做了完美铺垫，当Moneymaker在按钮位用黑桃5-4翻牌前加注到10万美金时，Farha用Q-9跟注并在翻牌击中了顶对。牌面是Js 5s 4c，Moneymaker的两对对顶对占据很大优势。到了转牌8h，Farha已经没有机会获胜，Moneymaker只需要在河牌避开Q就行了。当5h落下时，Moneymaker从座位上跳起来庆祝，在他的第一场现场锦标赛中就成为了冠军。",
        content_tw: "Chris Moneymaker於1975年11月21日出生，2003年時27歲。當時他是一名默默無聞的會計師，年收入僅4萬美金。他的撲克之旅始於在PokerStars線上撲克室贏得一場86美金的衛星賽，獲得了2003年世界撲克系列賽主賽事的參賽席位。晉級到四強後，Moneymaker曾考慮故意輸掉比賽。因為前三名可以獲得WSOP主賽事席位，而第四名只能獲得8000美金現金。那時，他幸運地接到一位朋友的電話，鼓勵他抓住這個難得的機會參加WSOP主賽事。他的朋友提出出資5000美金，支付Moneymaker一半的買入費用。但不幸的是，這個承諾沒有兌現。Moneymaker感到遺憾和惱火，但最後他的父親和另一位朋友各出資2000美金，支付了他20%的買入費用，並說服他繼續參賽。於是Moneymaker前往拉斯維加斯參加他的第一場現場錦標賽，並贏得了冠軍。第一天，他排名第11位。第二天，他排名第26位（還剩111名選手）。第三天，他排名第6位（還剩45名選手）。正是在這一天，他擊敗了Johnny Chan後開始受到公眾關注，這是一項了不起的成就，因為Chan擁有七條金手鏈，其中兩條是WSOP主賽事冠軍。隨著比賽的進行，Moneymaker的心態發生了變化，起初他只希望獲得一筆小獎金，但後來他意識到自己有機會贏得更多。第四天，Moneymaker在一手跌宕起伏的牌局中淘汰了偉大的Phil Ivey，Moneymaker一度看起來必勝無疑，然後又幾乎要輸，最後又一張A讓他轉危為安，送走了Ivey。第五天，Moneymaker與已經在2500美金PLO中獲得金手鏈的Sam Farha的決賽桌對決持續了超過11個小時。當Moneymaker和Farha單挑決定冠軍時，一次在Farha佔據絕對優勢時的驚天詐唬，成為了撲克歷史上最著名和最常被引用的打法之一。那次詐唬為最後一手牌做了完美鋪墊，當Moneymaker在按鈕位用黑桃5-4翻牌前加注到10萬美金時，Farha用Q-9跟注並在翻牌擊中了頂對。牌面是Js 5s 4c，Moneymaker的兩對對頂對佔據很大優勢。到了轉牌8h，Farha已經沒有機會獲勝，Moneymaker只需要在河牌避開Q就行了。當5h落下時，Moneymaker從座位上跳起來慶祝，在他的第一場現場錦標賽中就成為了冠軍。"
      },
      {
        type: "heading",
        content: "First 'Poker Boom' in History",
        content_cn: "历史上第一次「扑克热潮」",
        content_tw: "歷史上第一次「撲克熱潮」"
      },
      {
        type: "paragraph",
        content: "Winning the WSOP Main Event dramatically altered Moneymaker's trajectory and had a profound impact on the entire poker industry. The story of an amateur defeating professionals to claim the world championship was incredibly inspiring, fostering belief among thousands of players that such success could happen to themselves. Moneymaker not only inspired American players but ignited interest across Europe, Asia, and South America. This led to the 'Poker Boom' from 2003 to 2006, a period of unprecedented growth in the poker industry. Texas Hold'em reached unprecedented levels of popularity worldwide. For example, the WSOP Main Event grew from 839 participants in 2003 to 8,773 in 2006, a tenfold increase. Moneymaker not only enjoys a stellar reputation in the online poker realm but also exerts a significant influence on poker associated industries. At the age of 47, Moneymaker remains active in the poker world. After becoming the ambassador for AA POKER, his career has reached new heights. Stay tuned for more AA POKER players stories. Download AA POKER! Anyone could be a star!",
        content_cn: "赢得WSOP主赛事冠军彻底改变了Moneymaker的人生轨迹，并对整个扑克行业产生了深远影响。一个业余玩家击败职业选手夺得世界冠军的故事极具鼓舞力，让成千上万的玩家相信这样的成功也可能发生在自己身上。Moneymaker不仅激励了美国玩家，还点燃了欧洲、亚洲和南美洲玩家的热情。这导致了2003年至2006年的「扑克热潮」，这是扑克行业空前增长的时期。德州扑克在全球范围内达到了前所未有的流行程度。例如，WSOP主赛事的参赛人数从2003年的839人增长到2006年的8773人，增长了十倍。Moneymaker不仅在网络扑克领域享有盛誉，还对扑克相关产业产生了重大影响。47岁的Moneymaker仍然活跃在扑克界。在成为AA POKER代言人后，他的职业生涯达到了新的高度。敬请关注更多AA POKER名人故事。下载AA POKER！Anyone could be a star！",
        content_tw: "贏得WSOP主賽事冠軍徹底改變了Moneymaker的人生軌跡，並對整個撲克行業產生了深遠影響。一個業餘玩家擊敗職業選手奪得世界冠軍的故事極具鼓舞力，讓成千上萬的玩家相信這樣的成功也可能發生在自己身上。Moneymaker不僅激勵了美國玩家，還點燃了歐洲、亞洲和南美洲玩家的熱情。這導致了2003年至2006年的「撲克熱潮」，這是撲克行業空前增長的時期。德州撲克在全球範圍內達到了前所未有的流行程度。例如，WSOP主賽事的參賽人數從2003年的839人增長到2006年的8773人，增長了十倍。Moneymaker不僅在網路撲克領域享有盛譽，還對撲克相關產業產生了重大影響。47歲的Moneymaker仍然活躍在撲克界。在成為AA POKER代言人後，他的職業生涯達到了新的高度。敬請關注更多AA POKER名人故事。下載AA POKER！Anyone could be a star！"
      }
    ]
  },
  "wsop-cyprus-king-championship-super-mystery-bounty": {
    heroImage: "/image/news/details-news/new40/2-Bn2M0-DS.png",
    sections: [
      {
        type: "heading",
        content: "WSOP CYPRUS \"KING\" FULLY WINS THE CHAMPIONSHIP OF THE SUPER MYSTERY BOUNTY TOURNAMENT AND RANKS FIFTH IN THE SUPER FAST BOUNTY BOTTOM POOL LIMITED BET OMAHA TOURNAMENT",
        content_cn: "WSOP塞浦路斯 \"国王\"周全勇夺超级神秘赏金赛冠军及超快速赏金底池限注奥马哈赛第五名",
        content_tw: "WSOP賽普勒斯 \"國王\"周全勇奪超級神秘賞金賽冠軍及超快速賞金底池限注奧馬哈賽第五名"
      },
      {
        type: "paragraph",
        content: "As the WSOP Cyprus race draws to a close on October 20th local time, the event has entered a white hot phase. The 18 WSOP Tour championship rings that symbolize the highest honor in poker are few and far between, and every championship battle has become a battleground for players, creating a tense atmosphere!",
        content_cn: "随着当地时间10月20日WSOP塞浦路斯站赛程临近收官，赛事进入白热化阶段。象征扑克至高荣誉的18枚WSOP巡回赛冠军戒指所剩无几，每一场冠军争夺战都成了选手们的必争之地，紧张氛围拉满！",
        content_tw: "隨著當地時間10月20日WSOP賽普勒斯站賽程臨近收官，賽事進入白熱化階段。 象徵撲克至高榮譽的18枚WSOP巡迴賽冠軍戒指所剩無幾，每一場冠軍爭奪戰都成了選手們的必爭之地，緊張氛圍拉滿！"
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
        content: "In the just concluded $5,300 Super Mystery Bounty Tournament, the 'King' staged a comprehensive strength breakthrough. Facing 421 competitors, we steadily fought our way and ultimately won the championship, receiving generous championship rewards and mysterious bounties!",
        content_cn: "在刚结束的$5,300 超级神秘赏金赛中，\"国王\"周全上演实力突围。面对421位竞争对手，一路稳扎稳打，最终斩获冠军宝座，将丰厚的冠军奖励和神秘赏金收入囊中！",
        content_tw: "在剛結束的$5,300超級神秘賞金賽中，\"國王\"周全上演實力突圍。 面對421比特競爭對手，一路穩紮穩打，最終斬獲冠軍寶座，將豐厚的冠軍獎勵和神秘賞金收入囊中！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/4-DP4al4Cz.png",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "The FT final table can be regarded as a highlight moment for Chinese players, with Tian Hao, Liu Xiaohu, and Yuan Yilu joining hands to break in.\nLiu Xiaohu won sixth place and earned $39,000;\nTian Hao ranked eighth and received $23,000 in revenue;\nYuan Yilu ranked ninth and won $18,500.",
        content_cn: "FT决赛桌堪称中国选手的高光时刻，田浩、刘小虎、袁亿璐携手闯入。\n刘小虎拿下第六名，收获$39,000；\n田浩获得第八名，入账$23,000；\n袁亿璐位居第九，赢得$18,500。",
        content_tw: "FT決賽桌堪稱中國選手的高光時刻，田浩、劉小虎、袁億璐攜手闖入。\n劉小虎拿下第六名，收穫$39,000；\n田浩獲得第八名，入帳$23,000；\n袁億璐位居第九，贏得$18,500。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/5-C4q0H8GF.png",
        alt: "King Celebration"
      },
      {
        type: "paragraph",
        content: "In the mysterious bounty lottery, Chinese players have also been lucky. Zheng Xiaosheng and Yang Haiyang each received a generous bounty of $100,000, while Wei Guoliang received $37,000.",
        content_cn: "神秘赏金抽奖环节，中国选手也幸运连连。郑晓生和杨海洋各自捧走$100,000的丰厚赏金，魏国梁则收获$37,000。",
        content_tw: "神秘賞金抽獎環節，中國選手也幸運連連。 鄭曉生和楊海洋各自捧走$100,000的豐厚賞金，魏國梁則收穫$37,000。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new40/7-D_FB4HpT.png",
        alt: "Tournament Completed"
      },
      {
        type: "paragraph",
        content: "The ultra fast bounty pool limited bet Omaha tournament, which followed with a $1,000 purchase, attracted 43 participants.\n\nZhou Quan once again entered the final table and achieved fifth place.",
        content_cn: "紧接着进行的1,000美元买入的超快速赏金底池限注奥马哈赛吸引了43人参赛。\n\n周全再次进入决赛桌并获得第五名。",
        content_tw: "緊接著進行的1,000美元買入的超快速賞金底池限注奧馬哈賽吸引了43人參賽。\n\n周全再次进入决赛桌并获得第五名。"
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
        content: "The $5,300 WSOP Super Tour main event attracted a total of 1,372 participants, and the main event on Day 4 has ended. Only 8 contestants continue to fight for the championship ring and the highest prize of $1,000,000!\nChinese athlete Xinchen Huang ultimately won 21st place and a prize of $40,800.",
        content_cn: "$5,300 的WSOP超级巡回赛主赛事共吸引了1,372人次参赛，主赛事Day4的比赛已结束。仅有8名选手继续为冠军戒指以及1,000,000美元的最高奖金而战！\n中国选手Xinchen Huang最终获得第21名及$40,800的奖金。",
        content_tw: "$5,300的WSOP超級巡迴賽主賽事共吸引了1,372人次參賽，主賽事Day4的比賽已結束。僅有8名選手繼續為冠軍戒指以及1,000,000美元的最高獎金而戰！\n中國選手Xinchen Huang最終獲得第21名及$40,800的獎金。"
      }
    ]
  },
  "congratulations-michael-mizrachi-aa-poker": {
    heroImage: "/image/news/details-news/new41/11-Bn_EQLZv.png",
    sections: [
      {
        type: "paragraph",
        content: "On Day 9 of the 2025 WSOP Main Event, at the 79th hand of the final table, when AA Poker team member Michael 'The Grinder' Mizrachi instantly called his opponent's all-in, the entire Las Vegas erupted. This was not just Mizrachi's championship moment, but his moment of ascension to godhood! At this moment, the AA Poker team logo on his left arm became even more prominent under the spotlight...",
        content_cn: "2025WSOP主赛事Day9，决赛桌第79手牌，当AA Poker战队成员Michael \"The Grinder\" Mizrachi秒跟对手的全下后，整个拉斯维加斯沸腾了，这不仅仅是Mizrachi的夺冠瞬间，更是他的封神时刻！此时他左臂的AA Poker队标在聚光灯下更加醒目了...",
        content_tw: "2025WSOP主賽事Day9，決賽桌第79手牌，當AA Poker戰隊成員Michael\"The Grinder\"Mizrachi秒跟對手的全下後，整個拉斯維加斯沸騰了，這不僅僅是Mizrachi的奪冠瞬間，更是他的封神時刻！ 此時他左臂的AA Poker隊標在聚光燈下更加醒目了. .."
      },
      {
        type: "paragraph",
        content: "Mizrachi initially entered online poker, but with his stable and pragmatic playing style, he quickly achieved great success, earning the nickname 'The Grinder'. Everyone understands the value of this nickname. After realizing the sense of achievement from playing cards, Mizrachi decided to give up his dream of becoming a doctor and devoted himself fully to his professional poker career. It was this key decision that put him on the path to poker legend, especially after joining the AA Poker team, his career took off. It can be said that this summer, Mizrachi truly showed us what it means to be worthy of the name and destined by fate!",
        content_cn: "Mizrachi最初进军的是线上扑克，但他凭借稳定、务实的打法，很快就取得了巨大的成功，因此赢得了\"The Grinder（磨王）\"的绰号。相信大家都清楚这个绰号的含金量。意识到打牌能获得成就感后，Mizrachi决定放弃了成为医生的梦想，全身心投入到职业扑克事业中。也正是这一关键抉择，让他走在了扑克传奇之路上，尤其是在加入AA Poker战队之后，更是迎来了事业的狂飙。可以说今年的这个夏天， Mizrachi 让我们真正见识到了什么叫实至名归、天命所属！",
        content_tw: "Mizrachi最初進軍的是線上撲克，但他憑藉穩定、務實的打法，很快就取得了巨大的成功，囙此贏得了\"The Grinder（磨王）\"的綽號。 相信大家都清楚這個綽號的含金量。意識到打牌能獲得成就感後，Mizrachi决定放弃了成為醫生的夢想，全身心投入到職業撲克事業中。 也正是這一關鍵抉擇，讓他走在了撲克傳奇之路上，尤其是在加入AA Poker戰隊之後，更是迎來了事業的狂飆。 可以說今年的這個夏天，Mizrachi讓我們真正見識到了什麼叫實至名歸、天命所屬！"
      },
      {
        type: "heading",
        content: "Ascension Moment I: Fourth Poker Players Championship Crown",
        content_cn: "封神时刻一：第四个扑克玩家冠军赛冠军",
        content_tw: "封神時刻一：第四個撲克玩家冠軍賽冠軍"
      },
      {
        type: "paragraph",
        content: "Event #66: 2025 WSOP Poker Players Championship (PPC) – widely recognized as one of the most challenging and prestigious tournaments in poker. While we talk about 'Jungleman' Dan Cates' back-to-back championship record in 2021 and 2022 being difficult to break, Mizrachi has elevated another record to hell difficulty. On June 28 this year, he won the Poker Players Championship for the fourth time, which is also his seventh WSOP gold bracelet, becoming the player with the most championships in this event. This record sounds so magical, but it really happened.",
        content_cn: "2025WSOP赛事#66：扑克玩家冠军赛（Poker Players Championship），这是扑克圈公认的难度最大、含金量最高的赛事之一。当我们津津乐道\"野人\"Dan Cates的在2021和2022背靠背夺冠的纪录难以被打破时，Mizrachi却将另一个纪录提升到地狱难度。他在今年6月28日，第四次夺得了扑克玩家冠军赛的桂冠，也是他的第七条WSOP金手链，从而成为获得该项赛事冠军最多的选手。这个纪录听起来都是那么的魔幻，但是却真实的发生了。",
        content_tw: "2025WSOP賽事#66：撲克玩家冠軍賽（Poker Players Championship），這是撲克圈公認的難度最大、含金量最高的賽事之一。 當我們津津樂道「野人」Dan Cates的在2021和2022背靠背奪冠的紀錄難以被打破時，Mizrachi卻將另一個紀錄提升到地獄難度。 他在今年6月28日，第四次奪得了撲克玩家冠軍賽的桂冠，也是他的第七條WSOP金手鏈，從而成為獲得該項賽事冠軍最多的選手。 這個紀錄聽起來都是那麼的魔幻，但是卻真實的發生了。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/2-vl3zW5jn.png",
        alt: "Mizrachi Championship"
      },
      {
        type: "heading",
        content: "Legendary Moment II: Winning the 3BB Main Event with Divine Intervention",
        content_cn: "封神时刻二：如有神助的3BB主赛事夺冠",
        content_tw: "封神時刻二：如有神助的3BB主賽事奪冠"
      },
      {
        type: "paragraph",
        content: "The 2025 WSOP Main Event attracted 9,735 participants. To stand out from such a large group of participants, technology and luck are indispensable. Whether it was fate or the lucky blessing brought by joining the AA Poker team, Mizrachi staged a thrilling divine script for us. On Day 8 of the Main Event, Mizrachi's AJ ran into John Wasnock's AQ, and the scoreboard was only 3BB left, and it seemed that he would be eliminated in the next second. But in just a few hours, he rebounded from 1.9 million scoreboards all the way to 38.4 million, successfully breaking into the Main Event FT!",
        content_cn: "2025WSOP主赛事的参赛人数为9735人，要从这么庞大的参赛群体中脱颖而出，技术和运气缺一不可。不知道是命中注定还是加入AA Poker战队带来的幸运加持，Mizrachi给我们上演了一出惊心动魄的神级剧本。主赛事Day8时，Mizrachi的AJ碰上了John Wasnock的AQ，记分牌只剩下3BB，似乎下一秒就要出局。但就在短短数小时内，他从190万记分牌一路反弹至3,840万，成功闯入主赛事FT！",
        content_tw: "2025WSOP主賽事的參賽人數為9735人，要從這麼龐大的參賽群體中脫穎而出，科技和運氣缺一不可。 不知道是命中註定還是加入AA Poker戰隊帶來的幸運加持，Mizrachi給我們上演了一出驚心動魄的神級劇本。 主賽事Day8時，Mizrachi的AJ碰上了John Wasnock的AQ，記分牌只剩下3BB，似乎下一秒就要出局。 但就在短短數小時內，他從190萬記分牌一路反彈至3840萬，成功闖入主賽事FT！"
      },
      {
        type: "paragraph",
        content: "Let's simply look at two magical doubles, both river cards续命:",
        content_cn: "我们简单的看两手神奇的翻倍，都是河牌续命：",
        content_tw: "我們簡單的看兩手神奇的翻倍，都是河牌續命："
      },
      {
        type: "paragraph",
        content: "①A♦6♠ VS. A♣7♥，Board: K♥8♠5♠J♠A♠\n②K♦J♥ VS. 55，Board: 4♦7♦9♥3♦10♦",
        content_cn: "①A♦6♠ VS. A♣7♥，公共牌发出：K♥8♠5♠J♠A♠\n②K♦J♥ VS. 55 ，公共牌发出：4♦7♦9♥3♦10♦",
        content_tw: "①A♦6♠ VS. A♣7♥，公共牌發出：K♥8♠5♠J♠A♠\n②K♦J♥ VS. 55 ，公共牌發出：4♦7♦9♥3♦10♦"
      },
      {
        type: "paragraph",
        content: "After entering the final table, Mizrachi met his old rival John Wasnock again, but in this key duel, luck was on Mizrachi's side, and it was still a river card救险. A♠K♦ VS. K♠K♣, Board: J♠9♥7♦Q♣A♦ After this hand, Mizrachi became the CL of the whole table. When it came to the four-player table, he already had 76% of the scoreboards in the whole field, almost killing the suspense of the game.",
        content_cn: "进入决赛桌后，Mizrachi又碰上了老对手John Wasnock，但是在这次的关键对决中，幸运站在了Mizrachi这边，还是河牌救险。\nA♠K♦ VS. K♠K♣，公共牌发出：J♠9♥7♦Q♣A♦\n这手牌过后，Mizrachi成为了全桌CL，打至四人桌时，他已经坐拥全场76%的记分牌，几乎杀死了比赛的悬念。",
        content_tw: "進入決賽桌後，Mizrachi又碰上了老對手John Wasnock，但是在這次的關鍵對決中，幸運站在了Mizrachi這邊，還是河牌救險。\nA♠K♦  VS. K♠K♣， 公共牌發出：J♠9♥7♦Q♣A♦\n這手牌過後，Mizrachi成為了全桌CL，打至四人桌時，他已經坐擁全場76%的記分牌，幾乎殺死了比賽的懸念。 "
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
        content: "But luck is still continuing. Mizrachi's K♦J♦ and Kenny Hallaert's A♥Q♣ went all-in, the board came out 10♠5♠4♠J♣9♠, Hallaert got fourth place.",
        content_cn: "但是幸运依旧在继续。\nMizrachi的K♦J♦和Kenny Hallaert的A♥Q♣全下，公共牌发出10♠5♠4♠J♣9♠，Hallaert获得第四名。",
        content_tw: "但是幸運依舊在繼續。\nMizrachi的K♦J♦ 和Kenny Hallaert的A ♥ Q ♣ 全下，公共牌發出10♠5♠4♠J♣9♠， Hallaert獲得第四名。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/5-BFm5uycc.png",
        alt: "Mizrachi Victory"
      },
      {
        type: "paragraph",
        content: "Next, Mizrachi's A♦10♦ and Braxton Dunaway's 10♥6♥ went all-in, the board came out Q♦4♦K♣4♠3♦, Dunaway got third place.",
        content_cn: "接下来Mizrachi的A♦10♦和Braxton Dunaway的10♥6♥打到全下，公共牌发出Q♦4♦K♣4♠3♦，Dunaway获得第三名。",
        content_tw: "接下來Mizrachi的A♦10♦ 和Braxton Dunaway的10♥6♥ 打到全下，公共牌發出Q♦4♦K♣4♠3♦， Dunaway獲得第三名。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/6-BJu8FHb-.png",
        alt: "Final Hand"
      },
      {
        type: "paragraph",
        content: "The final hand of the ultimate showdown, Mizrachi: 10♣3♣, John Wasnock: A♠9♦, the board came out A♦9♣7♣4♣5♣, flush kills two pair, Wasnock got runner-up.",
        content_cn: "最后一手的终极对决，Mizrachi：10♣3♣，John Wasnock：A♠9♦，公共牌发出A♦9♣7♣4♣5♣，同花杀两对，Wasnock获得亚军。",
        content_tw: "最後一手的終極對決， Mizrachi：10♣3♣， John Wasnock：A♠9♦， 公共牌發出A♦9♣7♣4♣5♣， 同花殺兩對，Wasnock獲得亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/7-C943eTp1.png",
        alt: "Championship Celebration"
      },
      {
        type: "paragraph",
        content: "Just like this, Michael Mizrachi swept three opponents in just 79 hands and 1 hour, breaking the record of the fewest hands at the final table in the past 20 years, winning the most coveted Main Event gold bracelet in the world, which is also his personal 8th gold bracelet, and at the same time took the $10 million prize into his pocket!",
        content_cn: "就这样，Michael Mizrachi仅用79手牌、1小时，横扫三位对手，打破了过去20年来决赛桌最少手牌的纪录，夺下这条全世界最梦寐以求的主赛事金手链，也是他个人的第8条金手链，同时并将1,000万刀奖励收入囊中！",
        content_tw: "就這樣，Michael Mizrachi僅用79手牌、1小時，橫掃三比特對手，打破了過去20年來決賽桌最少手牌的紀錄，奪下這條全世界最夢寐以求的主賽事金手鏈，也是他個人的第8條金手鏈，同時並將1000萬刀獎勵收入囊中！"
      },
      {
        type: "image",
        src: "/image/news/details-news/new41/11-Bn_EQLZv.png",
        alt: "Team AA POKER Celebration"
      },
      {
        type: "heading",
        content: "Legendary Moment III: Breaking the Rules and Being Inducted into the World Poker Hall of Fame",
        content_cn: "封神时刻三：破格火速入选世界扑克名人堂",
        content_tw: "封神時刻三：破格火速入選世界撲克名人堂"
      },
      {
        type: "paragraph",
        content: "In fact, the night before Mizrachi won the Main Event gold bracelet, the entire poker circle was already restless. When people realized that he was very likely to complete a historic achievement, the call for 'directly breaking the rules to be inducted into the Hall of Fame' was almost overwhelming! Even Poker Hall of Fame members Phil Hellmuth and Daniel 'DNegs' Negreanu stood up and jointly filmed a video to publicly call on social media: 'We unanimously agree! As long as 'The Grinder' wins the Main Event tomorrow, he should immediately enter the Hall of Fame. Daniel and I are really working hard to promote this, right, Daniel?' DNegs made no secret of his support: 'The Grinder should have been in long ago! He is a legend, a living legend of the poker circle. He represents what poker should really be like! Enjoy the game, love the competition, don't have to be too serious, and still dominate the field. And he has been doing this for decades.' Sure enough, shortly after Mizrachi raised the Main Event championship bracelet, WSOP Vice President Jack Effel announced on the spot: 'Mizrachi is immediately inducted into the Poker Hall of Fame!' No voting, no nomination process, no delay of one year, at this moment, the poker circle broke the rules for him.",
        content_cn: "其实早在Mizrachi拿下主赛事金手链的前一晚，整个扑克圈已经躁动不安。当人们意识到他极有可能完成历史级成就时，\"直接破例入选名人堂\"的呼声几乎铺天盖地！\n连扑克名人堂成员Phil Hellmuth 与 丹牛\"Daniel Negreanu\"也站出来，联名拍摄视频，在社群媒体上上公开喊话：\n\"我们一致同意！只要\"磨王\"明天赢下主赛事，他就应该立刻进名人堂。我和Daniel真的很努力在推动这件事，对吧，Daniel？\"\n丹牛更是毫不掩饰自己的力挺：\n\"磨王\"早就该进了！他是个传奇，是扑克圈的活传奇。他代表了扑克真正该有的样子！享受游戏、热爱比赛、不必太严肃，也照样能统治赛场。而且他这一做，就是几十年。\"\n果不其然，就在Mizrachi举起主赛事冠军手链不久，WSOP副总裁Jack Effel就当场宣布： \"Mizrachi即刻入选扑克名人堂！\"。\n没有投票、没有提名流程、没有延后一年，这一刻，扑克圈为他打破规则。",
        content_tw: "其實早在Mizrachi拿下主賽事金手鏈的前一晚，整個撲克圈已經躁動不安。 當人們意識到他極有可能完成歷史級成就時，「直接破例入選名人堂」的呼聲幾乎鋪天蓋地！\n連撲克名人堂成員Phil Hellmuth與丹牛「Daniel Negreanu」也站出來，聯名拍攝視頻，在社群媒體上上公開喊話：\n「我們一致同意！ 只要「磨王」明天贏下主賽事，他就應該立刻進名人堂。 我和Daniel真的很努力在推動這件事，對吧， Daniel？ 」\n丹牛更是毫不掩飾自己的力挺：\n「磨王」早就該進了！ 他是個傳奇，是撲克圈的活傳奇。 他代表了撲克真正該有的樣子！ 享受遊戲、熱愛比賽、不必太嚴肅，也照樣能統治賽場。 而且他這一做，就是幾十年。 」\n果不其然，就在Mizrachi舉起主賽事冠軍手鏈不久，WSOP副總裁Jack Effel就當場宣佈：「Mizrachi即刻入選撲克名人堂！ 」。\n沒有投票、沒有提名流程、沒有延後一年，這一刻，撲克圈為他打破規則。"
      },
      {
        type: "paragraph",
        content: "Now, Michael Mizrachi has achieved the two ultimate goals that all poker players dream of: reaching the peak of the WSOP Main Event and entering the Hall of Poker Immortals. At the same time, he has also become the absolute leader of the AA Poker team, and we look forward to him creating more miracles!",
        content_cn: "现在，Michael Mizrachi已经达成了所有牌手梦寐以求两个终极目标：登顶WSOP主赛事巅峰，跻身扑克不朽之殿。同时他也成为了AA Poker战队的绝对领军人物，我们期待他创造更多的神迹！",
        content_tw: "現在，Michael Mizrachi已經達成了所有牌手夢寐以求兩個終極目標：登頂WSOP主賽事巔峰，躋身撲克不朽之殿。 同時他也成為了AA Poker戰隊的絕對領軍人物，我們期待他創造更多的神迹！"
      }
    ]
  },
  "poker-tour-co-founder-bags-25k-high-roller-title-jeju": {
    heroImage: "/image/news/details-news/new42/1en-CVOojHFm.jpg",
    heroImage_tw: "/image/news/details-news/new46/1-B38ISDrC.jpg",
    sections_tw: [
      {
        type: "paragraph",
        content: "在碧海藍天的濟州島，峻拿山雲霧繚繞，火山岩海岸蜿蜒如畫，這座被譽為「東方夏威夷」的度假勝地再次見證撲克傳奇。美國選手Stephen Song剛剛在賽事#9：豪客主賽奪冠後，再一次拿下賽事#11：$20K超豪賽的冠軍。同時，5月20日，賽事#12：$25K超豪賽也開啟了Day1，並在次日打出了冠軍。"
      },
      {
        type: "paragraph",
        content: "至此，2025 TLPT濟州島系列賽完美收官。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/1-B38ISDrC.jpg",
        alt: "Final Table"
      },
      {
        type: "heading",
        content: "賽事#11：$20K TLPT超豪賽"
      },
      {
        type: "paragraph",
        content: "這是Stephen Song 7天內第三次闖入決賽桌，並且是以領先者的姿態登場。儘管中途曾被亞軍Calvin Lee短暫反超，但他始終穩居前列並最終Day1，並在次日打出了冠軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/2-B0exlrlP.jpg",
        alt: "TLPT Event"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/3-BL4jGTHd.jpg",
        alt: "Stephen Song Champion"
      },
      {
        type: "paragraph",
        content: "在開始單挑前，雙方達成ICM協議分配獎金，僅保留1萬美元和冠軍獎盃作為爭奪目標。"
      },
      {
        type: "paragraph",
        content: "作為WSOP金手鏈得主和EPT冠軍，Song現在名下有16個線下冠軍頭銜，錦標賽獎金收入超過1000萬美元。"
      },
      {
        type: "heading",
        content: "以下是決賽桌結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/4-C_9wwmm4.jpg",
        alt: "Final Results Event 11"
      },
      {
        type: "heading",
        content: "比賽過程"
      },
      {
        type: "paragraph",
        content: "由於只有5人可以拿到獎金，所以9位選手的首要目標是先進獎勵圈。9人桌第一位出局選手是來自匈牙利的選手Istvan Birizdo。他拿著KQ在一個三人全下底池對抗Calvin Lee的口袋10和James Mendoza的AQ同花，結果失利。"
      },
      {
        type: "paragraph",
        content: "接著Daniel Cates變成短碼，翻倍了幾次，然後Chen Yisha記分牌受到重創。"
      },
      {
        type: "paragraph",
        content: "Calvin Lee在按鈕位開池加註到70K，Chen Yisha在大盲位3bet到250K，Lee全下600K，Chen迅速跟註。"
      },
      {
        type: "paragraph",
        content: "Calvin Lee的牌是AK，Chen則拿著QQ。兩人經典跑馬，但翻牌發出了一張A。Lee記分牌翻倍。"
      },
      {
        type: "paragraph",
        content: "之後，Lee的記分牌一路走高，不斷積蓄實力。"
      },
      {
        type: "paragraph",
        content: "在另一邊，Stephen Song也沒有閒著，在一手牌同時淘汰兩位選手。Daniel Cates在前位全下了最後190K，Song在HJ位跟註。"
      },
      {
        type: "paragraph",
        content: "Gavin在按鈕位決定全下220K，Song再一次跟註，讓兩位對手都處於危險中。"
      },
      {
        type: "paragraph",
        content: "Daniel Cates：A♠2♠"
      },
      {
        type: "paragraph",
        content: "Gavin：K♠Q♥"
      },
      {
        type: "paragraph",
        content: "Stephen Song：5♠5♦"
      },
      {
        type: "paragraph",
        content: "翻牌發出2♠5♥7♥，Song擊中暗三，幾乎成於不敗之地。轉牌3♠給Cates帶來一些希望，但河牌是7♦，Song進一步完成葫蘆，把兩人都淘汰出局。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/5-BKgTOJHD.jpg",
        alt: "Game Action"
      },
      {
        type: "paragraph",
        content: "桌上還剩6位選手，進入獎勵圈泡沫期。"
      },
      {
        type: "paragraph",
        content: "此時，之前受到重創的Chen Yisha一直沒緩過來。這手牌她拿到Q9同花，面對Stephen Song在小盲位的全下，她思考一番，決定在大盲位跟註最後420K。"
      },
      {
        type: "paragraph",
        content: "Song的牌是27同花。Chen很有希望翻倍，可惜翻牌發出一張2。Chen距離獎金只差一步，遺憾出局。把兩人都淘汰出局。"
      },
      {
        type: "paragraph",
        content: "剩下5位選手每人至少可以得到6萬美元獎金。"
      },
      {
        type: "paragraph",
        content: "獎金到手後，中國選手Yu lei就在一手牌經受考驗。他在小盲位全下54同花，大盲位的Taylor Black用99跟註全下。"
      },
      {
        type: "paragraph",
        content: "公共面沒有發出Yu Lei的補牌，對手記分牌翻倍，Yu Lei則變成超短碼。"
      },
      {
        type: "paragraph",
        content: "很快，他在一手牌面對Stephen Song 60K的開池，果斷全下最後130K。Yu Lei的牌是Q♦10♥，Song則拿著9♦9♠。"
      },
      {
        type: "paragraph",
        content: "Yu的兩張高牌很有希望中牌，但幸運女神顯然站Song這邊。他在翻牌擊中暗三9。最終兩人都完成了順子，但Yu Lei的順子更小。他獲得第5名。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/6-DJYmgSKO.jpg",
        alt: "Yu Lei"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/7-C3qw1MEM.jpg",
        alt: "Game Action"
      },
      {
        type: "paragraph",
        content: "Stephen Song用大記分牌各種壓榨短碼。這手牌他在按鈕位用77全下， James Mendoza在大盲位拿著JT選擇棄牌後，記分牌只剩10BB了。"
      },
      {
        type: "paragraph",
        content: "於是接下來，面對Song開池加註到80K，Mendoza在大盲位直接全下了560K。大盲位的Calvin Lee要求數分記分牌後全下，Song選擇棄掉33。"
      },
      {
        type: "paragraph",
        content: "這次Mendoza的牌是KJ，但是Lee拿到AK，直接壓制。兩人在公共面都沒有中牌，Lee用高牌淘汰對手。James Mendoza獲得第4名。"
      },
      {
        type: "paragraph",
        content: "此時，Calvin Lee的記分牌已經和Song非常接近了。"
      },
      {
        type: "paragraph",
        content: "當三人桌形成時，Calvin Lee的記分牌是78BB，Song拿著91BB，Taylor Black則是44BB。"
      },
      {
        type: "paragraph",
        content: "很快Lee從Black手裡贏了一個大池，把他打成短碼。"
      },
      {
        type: "paragraph",
        content: "Black在小盲位用A♦7♠補全盲註，Lee在大盲位用10♠3♠過牌。"
      },
      {
        type: "paragraph",
        content: "翻牌是K♠6♠7♦，Black過牌，Lee下註50K，Black跟註。"
      },
      {
        type: "paragraph",
        content: "轉牌是A♠，Black過牌，Lee再次下註200K，Black跟註。"
      },
      {
        type: "paragraph",
        content: "河牌是10♥，Black拿著兩對再次過牌，Lee用同花開火100萬。Black選擇跟註看牌，可惜看到了壞消息。Lee此時記分牌領先了。"
      },
      {
        type: "paragraph",
        content: "變成短碼的Black選手牌在大盲位，面對Song在小盲位的跟註，他選擇過牌。"
      },
      {
        type: "paragraph",
        content: "翻牌是6♠A♠8♦，Song下註50K，Black跟註。轉牌是2♥，Song下註150K，Black直接全下。Song思考了一會兒，選擇跟註。"
      },
      {
        type: "paragraph",
        content: "Song的牌是8♠7♦，Black則拿著5♦4♦。雖然Black落雲卡順，但Song目前有對子領先。河牌是K♦，Black在第3名出局。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/8-CE-A9Lqw.jpg",
        alt: "Taylor Black"
      },
      {
        type: "paragraph",
        content: "單挑桌開始前，兩人商量分錢協議。按照ICM協議，Lee可分獎金全20萬美元，Song則至少分到19.4萬美元。剩餘1萬美元和冠軍獎盃等候冠軍所有。"
      },
      {
        type: "paragraph",
        content: "單挑桌打了13分鐘，Song先是穩固了領先地位，很快就迎來了最後一手。"
      },
      {
        type: "paragraph",
        content: "Lee用J♠7♠溜入底池，Song坐大盲位用10♥4♠過牌。"
      },
      {
        type: "paragraph",
        content: "翻牌是J♠10♠4♥，Song擊中底對，沒牌一般叫下註。"
      },
      {
        type: "paragraph",
        content: "轉牌是5♠，Song再次過牌後，Lee自了一嘴自己的牌，下註170K，起碼Song看牌，加註到800K，左不多是Lee三分之一的記分牌。"
      },
      {
        type: "paragraph",
        content: "Lee不情願地跟註了。底池達到180萬。河牌發出5♠。Song全下，Lee拿了一會兒，選擇跟注。"
      },
      {
        type: "paragraph",
        content: "Calvin Lee獲得亞軍，以及20萬美元獎金。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/9-CaQ2d2uU.jpg",
        alt: "Calvin Lee"
      },
      {
        type: "paragraph",
        content: "Song拍掉第二座，拿下他在本系列賽第二個冠軍，收獲獎金20.4萬美元，並舉起了冠軍獎盃。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/10-CXdGwJnl.jpg",
        alt: "Stephen Song Champion"
      },
      {
        type: "heading",
        content: "TLPT濟州島的收官之戰，賽事#12：$25K超豪賽決出了冠軍。他是中國選手Ivan Zhang。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/11-KUN7gyFZ.jpg",
        alt: "Ivan Zhang Champion"
      },
      {
        type: "paragraph",
        content: "他整場比賽表現都非常強勢，一直排在記分牌前列，從未有過下滑，非常穩定優秀。"
      },
      {
        type: "paragraph",
        content: "Day1"
      },
      {
        type: "paragraph",
        content: "這場比賽Day1一開始整體中規中矩，但在最後兩個級別激起波瀾。表現最優秀的是Ivan Zhang。他憑借初始記分牌打滿10個級別，最終以1,066,000記分牌的壓倒性優勢領跑剩餘六人。"
      },
      {
        type: "paragraph",
        content: "雖然Ivan Zhang每年只參加少量錦標賽，但在本次系列賽，他多次打進決賽桌，包括在$15K豪客主賽獲得第6名，在賽事#3：$1KAA POKER深籌賽進入決賽桌。這一次在決賽桌上，Ivan Zhang勢必要向個人最佳線下名次發起沖擊。"
      },
      {
        type: "paragraph",
        content: "記分牌排在第二位的是Zhou Quan，第三名是德國選手Dominik Nitsche，第四名是來自愛爾蘭的Gary Thompson。第五位是Yu Lei，記分牌最少的是加拿大選手Ami Barer。"
      },
      {
        type: "paragraph",
        content: "Day2"
      },
      {
        type: "paragraph",
        content: "當5月21日Day2開始時，Mao Renji報名參賽，帶著20萬記分牌上桌。7人坐好位置，開始了最後的對決。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/12-BJTFOwNr.jpg",
        alt: "Final Table Setup"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft1-BT3JpRwS.jpg",
        alt: "Player Card 1"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft2-DriIM658.jpg",
        alt: "Player Card 2"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft3-DJ_LrKKD.jpg",
        alt: "Player Card 3"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft4-BTa7x1sp.jpg",
        alt: "Player Card 4"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft5-CyM8eEb0.jpg",
        alt: "Player Card 5"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft6-q_j7_Put.jpg",
        alt: "Player Card 6"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/ft7-CKn3w1hH.jpg",
        alt: "Player Card 7"
      },
      {
        type: "heading",
        content: "比賽過程"
      },
      {
        type: "paragraph",
        content: "就在第一手牌，Yu Lei就在按鈕位全下了最後134K記分牌。Zhou Quan在小盲位跟註。Yu的牌是AJ，Zhou則拿著77。翻牌發出一張A，Yu早就記分牌翻倍。"
      },
      {
        type: "paragraph",
        content: "很快第一位受害者出現，他是Gary Thompson。Mao Renji先在小盲位用J♠10♥溜入底池，Thompson在大盲位用K♦2♠過牌。"
      },
      {
        type: "paragraph",
        content: "翻牌是J♦6♦5♥，Mao領打10K，Thompson加註26K，Mao選擇全下。Thompson跟註後，有出局風險。"
      },
      {
        type: "paragraph",
        content: "結果轉牌是A♠，河牌是A♠，Thompson沒有等到補牌，第一個出局。"
      },
      {
        type: "paragraph",
        content: "Mao Renji沒有停下來，一路沖到記分牌前三。很快，Mao Renji把Ami Barer淘汰。"
      },
      {
        type: "paragraph",
        content: "Barer記分牌很少了，他先加註到125K，Mao在大盲位直接全下，Barer顫註。"
      },
      {
        type: "paragraph",
        content: "他的牌是K♦6♠，Mao則拿著Q♠J♠。"
      },
      {
        type: "paragraph",
        content: "翻牌是A♦7♦7♠，Barer墊上同花，且到轉牌2♠依然領先。不過河牌是Q♥，Mao擊中對子，把Barer淘汰在第6名。"
      },
      {
        type: "paragraph",
        content: "很快，Mao Renji趁熱打鐵，又淘汰一位選手，這次是Dominik Nitsche。Nitsche在CO位開池加註到30K，Mao在按鈕位3bet到70K，行動回到Nitsche這邊，他全下260K，Mao秒跟。"
      },
      {
        type: "paragraph",
        content: "Nitsche的牌是K♥9♥，Mao則是A♠Q♠。公共牌發出6♠J♦A♥5♥，Mao獲勝，Nitsche在第5名出局，成為獎勵圈泡沫。"
      },
      {
        type: "paragraph",
        content: "桌上還剩4人，他們暫停比賽，商量了分錢協議。按照新的分配方法，第四名的獎金至少有3.5萬美元。冠亞軍獎金分別是16.2萬美元和10.8萬美元。第三名則是7萬美元。"
      },
      {
        type: "paragraph",
        content: "四人桌開打，並且持續了一段時間。一開始勢頭很猛的Mao Renji開始走下坡路，記分牌越來越少，變成墊底。"
      },
      {
        type: "paragraph",
        content: "終於在這手牌，Mao在槍口位加註到40K，大盲位的Ivan Zhang直接全下。Mao後手只剩40多籌，決定跟註。"
      },
      {
        type: "paragraph",
        content: "Mao的牌是A♠Q♥，Ivan Zhang則拿著A♦K♠。翻牌是10♦7♠5♠，Mao情況更危險了，因為Ivan連贏上同花了。轉牌是J♠，兩人都聽順子。河牌發出6♠,Mao在第四名出局。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/13-CJBO3Lpr.jpg",
        alt: "Mao Renji"
      },
      {
        type: "paragraph",
        content: "三人桌混戰了很久，Zhou Quan記分越來越少，終於支撐不住。這手牌Ivan Zhang在按鈕位加註到50K，Zhou Quan在大盲位宣佈全下。Zhang秒跟後，秀出A♠J♠。Zhou Quan的牌是A♠10♠。"
      },
      {
        type: "paragraph",
        content: "翻牌是A♦7♥5♦，轉牌是7♠，Zhou Quan得到了分池的機會，不過河牌是5♠。Zhou Quan在第四名出局。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/14-BN35oK3z.jpg",
        alt: "Zhou Quan"
      },
      {
        type: "paragraph",
        content: "單挑桌形成。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/15-CZn7XgJp.jpg",
        alt: "Heads Up"
      },
      {
        type: "paragraph",
        content: "Ivan Zhang和Yu Lei的記分牌差距很大，很快迎來了最後一手牌。"
      },
      {
        type: "paragraph",
        content: "Ivan Zhang在按鈕位溜入底池，Yu Lei全下最後420K。Zhang秒跟，笑得很開心。他的牌是KK，Yu Lei則拿著66。"
      },
      {
        type: "paragraph",
        content: "公共面沒有反轉，Yu Lei獲得亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/16-BdbFlgjx.jpg",
        alt: "Yu Lei Runner-up"
      },
      {
        type: "paragraph",
        content: "Ivan Zhang在本場系列賽獲得一座下冠軍，完美結束了他本次比賽。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/17-B99R_HW5.jpg",
        alt: "Ivan Zhang Champion"
      },
      {
        type: "heading",
        content: "賽于風采"
      },
      {
        type: "image",
        src: "/image/news/details-news/new46/18-CH36shhq.jpg",
        alt: "Event Gallery"
      }
    ],
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
        src: "/image/news/details-news/new42/2en-CW8MYftL.jpg",
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
        type: "image",
        src: "/image/news/details-news/new42/3en-DflYaNw0.jpg",
        alt: "Final Table"
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
        src: "/image/news/details-news/new42/4en-Bpaeb-2T.jpg",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "Armed with an overwhelming chip lead, Zhang continued to apply pressure to Yu and was aided by making the best hand in the first few hands of play, leaving Yu short.Yu was gifted a small glimmer of hope after backdooring a flush for a substantial pot, but just a couple of hands later Yu was dealt pocket sixes against Zhang's pocket kings. Yu shoved with his pair preflop, and Zhang snap-called with a big smile to see a clean runout, sealing Zhang's victory and wrapping up the TLPT in style."
      }
    ]
  },
  "tlpt-jeju-2025-top-money-earners": {
    // heroImage: "/image/news/details-news/new43/1-DMxCeEBv.jpg",
    sections: [
      {
        type: "heading",
        content: "2025 TLPT JEJU - TOP MONEY EARNERS",
        content_cn: "2025TLPT济州 - 奖金榜",
        content_tw: "2025TLPT濟州 - 獎金榜"
      },
      {
        type: "image",
        src: "/image/news/details-news/new43/1-DMxCeEBv.jpg",
        src_cn: "/image/news/details-news/new43/cn/1zh-Cn24wRdw.jpg",
        src_tw: "/image/news/details-news/new43/tw/1ft-DcmmrdoF.jpg",
        alt: "TLPT Jeju 2025 Top Money Earners"
      }
    ]
  },
  "red-hot-stephen-song-leads-final-11-tlpt-20k": {
    heroImage: "/image/news/details-news/new44/1-Dp0ONUPG.png",
    sections: [
      {
        type: "heading",
        content: "RED HOT STEPHEN SONG LEADS FINAL 11 IN TLPT $20K",
        content_cn: "火热的STEPHEN SONG领跑TLPT $20K最后11人",
        content_tw: "火熱的STEPHEN SONG領跑TLPT $20K最後11人"
      },
      {
        type: "paragraph",
        content: "A lengthy Day 1 in Event #11 TLPT $20,000 8-Handed saw 32 entrants make their way to the Landing Casino inside the fabulous Shinhwa World Hotel Jeju. A change in structure extended Day 1 by an additional two levels and, by the time the last card was dealt, Stephen Song found himself once again chip leading a tournament after bagging up 1,315,000. Not too far behind, however, are James Mendoza (1,180,000) and Yisha Chen (1,100,000), who made an impressive surge late in the evening after a double knockout holding aces.",
        content_cn: "在济州神话世界度假村Landing Casino举行的TLPT $20,000 8人桌赛事#11的漫长Day 1中，共有32名选手参赛。赛制变化使Day 1延长了两个级别，当最后一张牌发出时，Stephen Song再次以1,315,000记分牌领跑。紧随其后的是James Mendoza（1,180,000）和Yisha Chen（1,100,000），后者在晚间凭借AA双杀后强势崛起。",
        content_tw: "在濟州神話世界度假村Landing Casino舉行的TLPT $20,000 8人桌賽事#11的漫長Day 1中，共有32名選手參賽。賽制變化使Day 1延長了兩個級別，當最後一張牌發出時，Stephen Song再次以1,315,000記分牌領跑。緊隨其後的是James Mendoza（1,180,000）和Yisha Chen（1,100,000），後者在晚間憑藉AA雙殺後強勢崛起。"
      },
      {
        type: "paragraph",
        content: "Song has had an exceptional showing at The Lord Poker Tournament series so far — first by making the final table of the $500 Circuit Main Event and then flat out winning the $15,000 Main Event. Another cash for Song will push him over $10 million in live-tournament earnings — cementing an already epic poker resume.",
        content_cn: "Song在本次TLPT系列赛中表现出色——首先闯入$500巡回赛主赛决赛桌，然后直接赢得$15,000主赛事冠军。再次获得奖金将使他的线下锦标赛收入突破1000万美元——进一步巩固他已经传奇的扑克履历。",
        content_tw: "Song在本次TLPT系列賽中表現出色——首先闯入$500巡迴賽主賽決賽桌，然後直接贏得$15,000主賽事冠軍。再次獲得獎金將使他的線下錦標賽收入突破1000萬美元——進一步鞏固他已經傳奇的撲克履歷。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/1-Dp0ONUPG.png",
        alt: "Stephen Song"
      },
      {
        type: "heading",
        content: "DAY 2 SEAT DRAW AND CHIP COUNTS",
        content_cn: "DAY 2 座位抽签和记分牌统计",
        content_tw: "DAY 2 座位抽籤和記分牌統計"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/2-CDyy49Ne.png",
        alt: "Day 2 Seat Draw"
      },
      {
        type: "paragraph",
        content: "The 32 entrants generated a prize pool of US$640,000, of which five players will take a share. A min-cash will be worth US$60,000 and the eventual winner will take home US$242,000 for their efforts.",
        content_cn: "32名参赛者产生了64万美元的奖池，其中5名选手将分享奖金。最低奖金为6万美元，冠军将获得24.2万美元。",
        content_tw: "32名參賽者產生了64萬美元的獎池，其中5名選手將分享獎金。最低獎金為6萬美元，冠軍將獲得24.2萬美元。"
      },
      {
        type: "heading",
        content: "TLPT $20,000 8 HANDED PAYOUTS",
        content_cn: "TLPT $20,000 8人桌奖金分配",
        content_tw: "TLPT $20,000 8人桌獎金分配"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/3-CC_WWOpt.png",
        alt: "Payouts Table"
      },
      {
        type: "heading",
        content: "DAY 1 ACTION",
        content_cn: "DAY 1 精彩回顾",
        content_tw: "DAY 1 精彩回顧"
      },
      {
        type: "paragraph",
        content: "Eleven players sat down at the start, and it took less than a level for action-junkie Ivan Zhang to get all in. Unfortunately for Zhag, it was against Song, who had Zhang crushed with aces. Song nearly doubled as a result of the clash and took an early chip lead.",
        content_cn: "开赛时有11名选手入座，不到一个级别，行动派Ivan Zhang就全下了。不幸的是，他遇到了Song，Song用AA碾压了Zhang。Song几乎翻倍，并取得了早期记分牌领先。",
        content_tw: "開賽時有11名選手入座，不到一個級別，行動派Ivan Zhang就全下了。不幸的是，他遇到了Song，Song用AA碾壓了Zhang。Song幾乎翻倍，並取得了早期記分牌領先。"
      },
      {
        type: "paragraph",
        content: "Song extended his chip lead after catching a flush to eliminate Dong Chen, but Mendoza began his own ascent after cracking Martin Nielsen's aces with a pair eights.",
        content_cn: "Song在击中同花淘汰Dong Chen后扩大了记分牌领先，但Mendoza在用88破掉Martin Nielsen的AA后开始了自己的上升之路。",
        content_tw: "Song在擊中同花淘汰Dong Chen後擴大了記分牌領先，但Mendoza在用88破掉Martin Nielsen的AA後開始了自己的上升之路。"
      },
      {
        type: "paragraph",
        content: "Meanwhile, more notables filed in as the day went on, including Renji Mao, Dominik Nitsche, Bin Leng, Patrik Dernus, and Dan Cates. Of those players, only Nitsche and Cates made it to Day 2.",
        content_cn: "与此同时，随着比赛进行，更多知名选手加入，包括Mao Renji、Dominik Nitsche、Bin Leng、Patrik Dernus和Dan Cates。这些选手中，只有Nitsche和Cates晋级Day 2。",
        content_tw: "與此同時，隨著比賽進行，更多知名選手加入，包括Mao Renji、Dominik Nitsche、Bin Leng、Patrik Dernus和Dan Cates。這些選手中，只有Nitsche和Cates晉級Day 2。"
      },
      {
        type: "paragraph",
        content: "Cates was in usual form, making light-hearted jokes and unafraid to put chips into the middle. He also got off to a hot start by doubling through Nevan Chang after they both rivered trip aces. Cates held the best kicker with Big Slick to leave Chang short and Chang busted shortly after the hand.",
        content_cn: "Cates一如既往地表现出色，开着轻松的玩笑，毫不犹豫地下注。他在与Nevan Chang的对决中河牌都发出三条A后翻倍起步，Cates凭借AK的踢脚占优，Chang变成短码并很快出局。",
        content_tw: "Cates一如既往地表現出色，開著輕鬆的玩笑，毫不猶豫地下注。他在與Nevan Chang的對決中河牌都發出三條A後翻倍起步，Cates憑藉AK的踢腳佔優，Chang變成短碼並很快出局。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new44/4-CxmM6pq5.png",
        alt: "Dan Cates Playing"
      },
      {
        type: "paragraph",
        content: "Not long after dinner break, Chen ended up best in a massive pot between her, Song, and Leng wherein they all ended up all-in preflop. Chen held ace-queen against Song's jacks and Leng's ace-nine and ended up flopping an ace to bust Leng and put a sizable dent in Song's stack. However, Song quickly rebounded by knocking out Quan Zhou after spiking a set against him with eights against Zhou's jacks.",
        content_cn: "晚餐休息后不久，Chen在一个三人全下的大底池中获胜。Chen拿着AQ对抗Song的JJ和Leng的A9，翻牌发出A淘汰Leng并给Song的记分牌造成重创。然而，Song很快反弹，用88击中暗三淘汰了拿着JJ的Quan Zhou。",
        content_tw: "晚餐休息後不久，Chen在一個三人全下的大底池中獲勝。Chen拿著AQ對抗Song的JJ和Leng的A9，翻牌發出A淘汰Leng並給Song的記分牌造成重創。然而，Song很快反彈，用88擊中暗三淘汰了拿著JJ的Quan Zhou。"
      },
      {
        type: "paragraph",
        content: "More hands became preflop shoves as the blinds escalated, and Chen benefitted from this fact after slowplaying aces against Marius Gierse and Christopher Park to vault into a temporary chip lead.",
        content_cn: "随着盲注升高，更多的手牌变成了翻前全下，Chen在用慢打AA对抗Marius Gierse和Christopher Park后跃居临时记分牌领先。",
        content_tw: "隨著盲注升高，更多的手牌變成了翻前全下，Chen在用慢打AA對抗Marius Gierse和Christopher Park後躍居臨時記分牌領先。"
      },
      {
        type: "paragraph",
        content: "Toward the end of the night, Mendoza again cracked aces after making a flush against Ami Barer to surge up the ranks. However, Song wouldn't be denied and took down a few smaller pots to reclaim a slight chip lead before play ended for the night.",
        content_cn: "接近夜晚尾声时，Mendoza再次破掉AA，用同花击败Ami Barer后排名飙升。然而，Song不甘示弱，在当晚比赛结束前赢下几个小底池重新夺回微弱的记分牌领先。",
        content_tw: "接近夜晚尾聲時，Mendoza再次破掉AA，用同花擊敗Ami Barer後排名飆升。然而，Song不甘示弱，在當晚比賽結束前贏下幾個小底池重新奪回微弱的記分牌領先。"
      },
      {
        type: "paragraph",
        content: "Day 2 is scheduled to get underway at 1 p.m. on Tuesday and play down to a winner. Play will resume on Level 13, which features blinds of 10,000/15,000 with a 15,000 big blind ante. Levels will continue to last 45 minutes each.",
        content_cn: "Day 2定于周二下午1点开始，将打出冠军。比赛将从第13级恢复，盲注为10,000/15,000，大盲前注15,000。每个级别仍为45分钟。",
        content_tw: "Day 2定於週二下午1點開始，將打出冠軍。比賽將從第13級恢復，盲注為10,000/15,000，大盲前注15,000。每個級別仍為45分鐘。"
      },
      {
        type: "paragraph",
        content: "With an impending massive money bubble and nearly a quarter million on the line for first, the final 11 players are sure to bring their A-game headed into the finale. Be sure to stick with PokerNews as we bring you all the action leading up to the next TLPT champion!",
        content_cn: "随着巨大的奖励圈泡沫即将来临，冠军将获得近25万美元，最后11名选手肯定会在决赛中全力以赴。请继续关注PokerNews，我们将为您带来下一位TLPT冠军的所有精彩！",
        content_tw: "隨著巨大的獎勵圈泡沫即將來臨，冠軍將獲得近25萬美元，最後11名選手肯定會在決賽中全力以赴。請繼續關注PokerNews，我們將為您帶來下一位TLPT冠軍的所有精彩！"
      }
    ]
  },
  "is-there-better-poker-tournament-player-stephen-song": {
    heroImage: "/image/news/details-news/new45/1en-C5LWbwPw.jpg",
    sections: [
      {
        type: "heading",
        content: "IS THERE A BETTER POKER TOURNAMENT PLAYER THAN STEPHEN SONG RIGHT NOW?",
        content_cn: "现在还有比STEPHEN SONG更好的锦标赛选手吗？",
        content_tw: "現在還有比STEPHEN SONG更好的錦標賽選手嗎？"
      },
      {
        type: "paragraph",
        content: "It was a runaway train that nobody was about to stand in front of on Day 3 of the $15,000 Main Event being hosted by The Lord Poker Tour (TLPT) at the Landing Casino in Jeju Shinhwa World Resort. From a field of 191 total entries, Stephen Song breezed to the $750,000 first-place prize to add another title to his poker resume, which already includes an EPT Main Event, WPT Prime Championship and WSOP bracelet triumph.",
        content_cn: "在济州神话世界度假村Landing Casino举办的TLPT $15,000主赛事Day 3，Stephen Song势不可挡。在191名参赛者中，Song轻松夺得75万美元冠军奖金，为他的扑克履历再添一个头衔，此前他已获得EPT主赛事冠军、WPT Prime锦标赛冠军和WSOP金手链。",
        content_tw: "在濟州神話世界度假村Landing Casino舉辦的TLPT $15,000主賽事Day 3，Stephen Song勢不可擋。在191名參賽者中，Song輕鬆奪得75萬美元冠軍獎金，為他的撲克履歷再添一個頭銜，此前他已獲得EPT主賽事冠軍、WPT Prime錦標賽冠軍和WSOP金手鏈。"
      },
      {
        type: "paragraph",
        content: "The payout was the second largest in Song's career and marked his 15th recorded tournament win. His live tournament earnings are now just a hair under $10 million, according to the The Hendon Mob.",
        content_cn: "这笔奖金是Song职业生涯中第二高的，也是他第15个有记录的锦标赛冠军。根据Hendon Mob的数据，他的线下锦标赛收入现在接近1000万美元。",
        content_tw: "這筆獎金是Song職業生涯中第二高的，也是他第15個有記錄的錦標賽冠軍。根據Hendon Mob的數據，他的線下錦標賽收入現在接近1000萬美元。"
      },
      {
        type: "paragraph",
        content: "Making the trip to Jeju, South Korea, was always a priority for Song, and building some momentum going into the WSOP that begins in just over a week will be a welcome sight. A seventh-place finish in the Circuit Main Event for $16,000 was just the tip of the iceberg for Song.",
        content_cn: "前往韩国济州一直是Song的优先事项，在一周后开始的WSOP之前积累势头将是一个可喜的进展。他在巡回赛主赛事中获得第七名和1.6万美元奖金只是冰山一角。",
        content_tw: "前往韓國濟州一直是Song的優先事項，在一週後開始的WSOP之前積累勢頭將是一個可喜的進展。他在巡迴賽主賽事中獲得第七名和1.6萬美元獎金只是冰山一角。"
      },
      {
        type: "paragraph",
        content: "Entering the final day of this Super High Roller Series Main Event that boasted a $3,000,000 guaranteed prize pool, Song was looking to better his final table appearance from earlier in the week. Those hopes unfolded in spades as Song bulldozed over his competition en route to a runaway victory, pocketing three-quarters of a million dollars in the process. Throughout the final table, Song made things look very easy while making every correct decision and getting slapped with the deck at the right time.",
        content_cn: "进入这场保底300万美元奖池的超豪客主赛事决赛日时，Song希望比本周早些时候的决赛桌表现更好。这些希望得到了完美实现，Song碾压对手一路狂奔获胜，收入75万美元。在整个决赛桌上，Song让一切看起来都很轻松，每一个决定都是正确的，并且在正确的时机得到了好牌。",
        content_tw: "進入這場保底300萬美元獎池的超豪客主賽事決賽日時，Song希望比本週早些時候的決賽桌表現更好。這些希望得到了完美實現，Song碾壓對手一路狂奔獲勝，收入75萬美元。在整個決賽桌上，Song讓一切看起來都很輕鬆，每一個決定都是正確的，並且在正確的時機得到了好牌。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/1en-C5LWbwPw.jpg",
        alt: "Stephen Song Champion"
      },
      {
        type: "heading",
        content: "TLPT $15K MAIN EVENT FINAL TABLE RESULTS",
        content_cn: "TLPT $15K 主赛事决赛桌结果",
        content_tw: "TLPT $15K 主賽事決賽桌結果"
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/2en-D0zzlf8L.jpg",
        alt: "Final Table Results"
      },
      {
        type: "heading",
        content: "DAY 3 ACTION",
        content_cn: "DAY 3 精彩回顾",
        content_tw: "DAY 3 精彩回顧"
      },
      {
        type: "paragraph",
        content: "There were 15 players who returned to their seats at the start of Day 3, all with the hopes of lifting the trophy at the day's end. Marius Gierse entered the day with a commanding lead over the rest of the competition and that lead continued to grow in the early going. There were no real short stacks when play got underway which led to a slow pace of chips being passed around the two tables. The seat finally broke when Jumbo Qu was eliminated with his pocket sevens against Song's pocket kings.",
        content_cn: "Day 3开始时有15名选手回到座位，都希望在一天结束时捧起奖杯。Marius Gierse以绝对优势领先进入比赛日，这一领先优势在早期继续扩大。比赛开始时没有真正的短码，导致两桌之间的筹码流动缓慢。最终Jumbo Qu用口袋77对抗Song的口袋KK被淘汰，局面才被打破。",
        content_tw: "Day 3開始時有15名選手回到座位，都希望在一天結束時捧起獎盃。Marius Gierse以絕對優勢領先進入比賽日，這一領先優勢在早期繼續擴大。比賽開始時沒有真正的短碼，導致兩桌之間的籌碼流動緩慢。最終Jumbo Qu用口袋77對抗Song的口袋KK被淘汰，局面才被打破。"
      },
      {
        type: "paragraph",
        content: "Not long after followed the eliminations of Gary Thompson, Martin Sedlak, Mauricio Salazar Sanchez, and Quan Zhou before the first break of the day. Upon returning from that break, Bin Leng managed to double his short stack but then was sent home in 10th place on the very next hand. The final nine players then took a production break and were introduced with smoke and mirrors before the final table got started.",
        content_cn: "不久后Gary Thompson、Martin Sedlak、Mauricio Salazar Sanchez和Quan Zhou在第一次休息前相继被淘汰。休息回来后，Bin Leng成功将短码翻倍，但下一手牌就在第10名出局。最后9名选手随后进行了制作休息，在决赛桌开始前进行了隆重介绍。",
        content_tw: "不久後Gary Thompson、Martin Sedlak、Mauricio Salazar Sanchez和Quan Zhou在第一次休息前相繼被淘汰。休息回來後，Bin Leng成功將短碼翻倍，但下一手牌就在第10名出局。最後9名選手隨後進行了製作休息，在決賽桌開始前進行了隆重介紹。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/3en-CbVcofQ3.jpg",
        alt: "Final Table"
      },
      {
        type: "paragraph",
        content: "The final nine players battled it out for well over an hour before anyone even got a sniff of the payout desk. Despite a massive three-way cooler, no eliminations took place, although, James Mendoza was left with just a single big blind. That didn't deter the eventual runner-up as he managed to double up three consecutive times, which brought him back to the middle of the pack. The first elimination belonged to Haitao Lei, which started a flurry of payouts.",
        content_cn: "最后9名选手激战了一个多小时，才有人接近领奖台。尽管出现了一个三人冷牌局面，但没有淘汰发生，不过James Mendoza只剩下一个大盲。这并没有阻止最终亚军，他连续三次翻倍，回到了中游位置。第一个被淘汰的是Haitao Lei，这引发了一连串的奖金发放。",
        content_tw: "最後9名選手激戰了一個多小時，才有人接近領獎台。儘管出現了一個三人冷牌局面，但沒有淘汰發生，不過James Mendoza只剩下一個大盲。這並沒有阻止最終亞軍，他連續三次翻倍，回到了中游位置。第一個被淘汰的是Haitao Lei，這引發了一連串的獎金發放。"
      },
      {
        type: "paragraph",
        content: "Jiaming Zhao held the chip lead at one point on the final day, but it only lasted a matter of hands. Zhao eventually bowed out in eighth place at the hands of Mendoza, who was now in contention for the top stack. After the second break of the day, Song caught the end of the deck and was nearly unbeatable.",
        content_cn: "Jiaming Zhao在决赛日一度领先，但只维持了几手牌。Zhao最终在第八名被Mendoza淘汰，后者现在正争夺头筹。在当天第二次休息后，Song开始手气爆发，几乎无人能敌。",
        content_tw: "Jiaming Zhao在決賽日一度領先，但只維持了幾手牌。Zhao最終在第八名被Mendoza淘汰，後者現在正爭奪頭籌。在當天第二次休息後，Song開始手氣爆發，幾乎無人能敵。"
      },
      {
        type: "paragraph",
        content: "The last female standing in the competition was Huawei Lin, but her time was limited upon returning to the shortest stack of the seven players remaining. Lin was poised for a double-up to stay alive, but Song managed to spike a pair on the river, which vaulted him into the chip lead. Ivan Zhang, co-founder of the TLPT, was next on the chopping block. A fairly quiet day at the felt by his standards, as Zhang was unable to gain any traction and eventually fell to Song as well.",
        content_cn: "比赛中最后一位女选手是Huawei Lin，但她回来时是剩余7名选手中最短的筹码。Lin准备翻倍求生，但Song在河牌击中对子，跃居筹码领先。TLPT联合创始人Ivan Zhang是下一个被淘汰的。按他的标准来说，这是相当安静的一天，Zhang无法获得任何优势，最终也倒在Song手下。",
        content_tw: "比賽中最後一位女選手是Huawei Lin，但她回來時是剩餘7名選手中最短的籌碼。Lin準備翻倍求生，但Song在河牌擊中對子，躍居籌碼領先。TLPT聯合創始人Ivan Zhang是下一個被淘汰的。按他的標準來說，這是相當安靜的一天，Zhang無法獲得任何優勢，最終也倒在Song手下。"
      },
      {
        type: "paragraph",
        content: "Patrik Demus made the final table at the last minute, but the Czech pro was not as kind to him. Demus managed to stave off elimination multiple times despite the cold deck. An epic fold after flopping two pair against the set of Song allowed Demus to survive a little longer, but eventually his demise came in fifth place. Martin Nielsen was one of the last players to enter the field on Day 2 and proved that a spin-up is always possible by reaching the final table. Laddering all the way up to fourth place for a payout of over $200,000 on just one bullet will go down as a success no matter what.",
        content_cn: "Patrik Demus在最后时刻进入决赛桌，但牌运对这位捷克职业选手并不友好。尽管手气不佳，Demus多次成功避免被淘汰。在翻牌击中两对却面对Song的暗三时做出了史诗级弃牌，让Demus又多存活了一段时间，但最终在第五名出局。Martin Nielsen是Day 2最后报名的选手之一，证明了逆袭总是可能的。仅用一颗子弹就爬升到第四名获得超过20万美元奖金，无论如何都是成功。",
        content_tw: "Patrik Demus在最後時刻進入決賽桌，但牌運對這位捷克職業選手並不友好。儘管手氣不佳，Demus多次成功避免被淘汰。在翻牌擊中兩對卻面對Song的暗三時做出了史詩級棄牌，讓Demus又多存活了一段時間，但最終在第五名出局。Martin Nielsen是Day 2最後報名的選手之一，證明了逆襲總是可能的。僅用一顆子彈就爬升到第四名獲得超過20萬美元獎金，無論如何都是成功。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new45/4en-Bu5wljpE.jpg",
        alt: "Champion Celebration"
      },
      {
        type: "paragraph",
        content: "As for the start-of-day chip leader, Gierse struggled for the latter half of the day and was unable to turn things around. There was a brief glimpse of hope for the German man when he nearly doubled up off Song, but the very next hand would see it all come to an end. At first sight, it appeared that Song would end the tournament with a double knockout when he picked up pocket jacks against the ace-king from both Gierse and Mendoza. However, Mendoza managed to find a four-bet and fold after two all-ins in front of him. Gierse wasn't as lucky with his chips in the middle, and some of his outs were already dead.",
        content_cn: "至于开局筹码领先者Gierse，他在后半程陷入困境无法翻盘。当他差点从Song那里翻倍时，这位德国人看到了一丝希望，但下一手牌就结束了一切。乍一看，当Song拿着口袋JJ面对Gierse和Mendoza都是AK时，似乎会以双杀结束比赛。然而，Mendoza在面前两个全下后设法找到四注并弃牌。Gierse就没那么幸运了，他的一些补牌已经死掉。",
        content_tw: "至於開局籌碼領先者Gierse，他在後半程陷入困境無法翻盤。當他差點從Song那裡翻倍時，這位德國人看到了一絲希望，但下一手牌就結束了一切。乍一看，當Song拿著口袋JJ面對Gierse和Mendoza都是AK時，似乎會以雙殺結束比賽。然而，Mendoza在面前兩個全下後設法找到四注並棄牌。Gierse就沒那麼幸運了，他的一些補牌已經死掉。"
      },
      {
        type: "paragraph",
        content: "That left Song and Mendoza to battle it out heads-up, with Song holding a massive chip lead. It turned out to be a lot of small-pot poker between the two players to kick things off until Song spiked a full house against the two pair of Mendoza. With just a few big blinds left, all of the chips went in the middle on the next hand. The hot streak continued for Song as he made two pair with some rags and brought an end to the inaugural Main Event of the TLPT.",
        content_cn: "这样Song和Mendoza进入单挑，Song拥有巨大的筹码优势。一开始两人打了很多小底池，直到Song用葫芦击败Mendoza的两对。Mendoza只剩几个大盲时，下一手牌所有筹码都进入了底池。Song的火热手气继续，用杂牌做成两对，为TLPT首届主赛事画上句号。",
        content_tw: "這樣Song和Mendoza進入單挑，Song擁有巨大的籌碼優勢。一開始兩人打了很多小底池，直到Song用葫蘆擊敗Mendoza的兩對。Mendoza只剩幾個大盲時，下一手牌所有籌碼都進入了底池。Song的火熱手氣繼續，用雜牌做成兩對，為TLPT首屆主賽事畫上句號。"
      }
    ]
  },
  "tlpt-jeju-2025-main-event-circuit-winner-wezheng": {
    heroImage: "/image/news/details-news/new47/1-BJRjznbR.png",
    sections: [
      {
        type: "paragraph",
        content: "The inaugural The Lord Poker Tournament in Jeju Island, South Korea has reached the halfway point. The action has been in full swing since May 13 with games continuing through May 22 at the Landing Casino within the Jeju Shinhwa World Resort. With a jaw-dropping USD 8,000,000 guarantee announced, expectedly players flocked in to earn their share. Below are the early highlights.",
        content_cn: "首届Lord扑克锦标赛在韩国济州岛已进行到一半。自5月13日以来，比赛在济州神话世界度假村的Landing Casino火热进行，将持续到5月22日。随着令人惊叹的800万美元保底奖金的公布，选手们蜂拥而至争夺他们的份额。以下是早期亮点。",
        content_tw: "首屆Lord撲克錦標賽在韓國濟州島已進行到一半。自5月13日以來，比賽在濟州神話世界度假村的Landing Casino火熱進行，將持續到5月22日。隨著令人驚嘆的800萬美元保底獎金的公佈，選手們蜂擁而至爭奪他們的份額。以下是早期亮點。"
      },
      {
        type: "heading",
        content: "TLPT JEJU – HALFWAY HIGHLIGHTS",
        content_cn: "TLPT济州 – 半程亮点",
        content_tw: "TLPT濟州 – 半程亮點"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/1-BJRjznbR.png",
        alt: "TLPT Jeju Tournament"
      },
      {
        type: "paragraph",
        content: "The main attraction is currently underway, the USD 3,000,000 guaranteed TLPT Main Event 15K Super High Roller, and expectedly, the field is populated with some of the world's most decorated players. Out of the 115 that signed up at Day 1, only 58 players advanced to Day 2 led by Haohui Ma.",
        content_cn: "主要赛事目前正在进行中，300万美元保底的TLPT主赛事15K超级豪客赛，如预期的那样，场上聚集了一些世界上最优秀的选手。在第一天报名的115人中，只有58名选手晋级第二天，由马浩辉领先。",
        content_tw: "主要賽事目前正在進行中，300萬美元保底的TLPT主賽事15K超級豪客賽，如預期的那樣，場上聚集了一些世界上最優秀的選手。在第一天報名的115人中，只有58名選手晉級第二天，由馬浩輝領先。"
      },
      {
        type: "paragraph",
        content: "Others in the mix were TLPT Ambassadors Quan Zhou and Dan Cates, Nguyen Quang Minh, Amichai Barer, Sean Ooi, Renji Mao, James Mendoza, Dominik Nitsche, and Lei Yu. Registration is still open on May 17 with buy-in at USD 15,000. Read up on the action via the Live Updates.",
        content_cn: "其他参赛者包括TLPT大使周全和Dan Cates、Nguyen Quang Minh、Amichai Barer、Sean Ooi、毛仁基、James Mendoza、Dominik Nitsche和于磊。5月17日报名仍然开放，买入费用为15,000美元。通过实时更新了解比赛动态。",
        content_tw: "其他參賽者包括TLPT大使周全和Dan Cates、Nguyen Quang Minh、Amichai Barer、Sean Ooi、毛仁基、James Mendoza、Dominik Nitsche和於磊。5月17日報名仍然開放，買入費用為15,000美元。通過實時更新了解比賽動態。"
      },
      {
        type: "heading",
        content: "#2 MAIN EVENT (CS) - 8 HANDED",
        content_cn: "#2 主赛事 (CS) - 8人桌",
        content_tw: "#2 主賽事 (CS) - 8人桌"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/2-Bismu3rc.png",
        alt: "TLPT Trophy"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/3-BxpfpXC6.png",
        alt: "Weizheng Zhong Champion"
      },
      {
        type: "heading",
        content: "INTERVIEW WITH WEIZHENG ZHONG - INAUGURAL TLPT MAIN EVENT CHAMPION",
        content_cn: "专访钟伟正 - 首届TLPT主赛事冠军",
        content_tw: "專訪鍾偉正 - 首屆TLPT主賽事冠軍"
      },
      {
        type: "paragraph",
        content: "The $700,000 guaranteed inaugural The Lord Poker Tournament Circuit Main Event crowned Weizheng Zhong capturing his first poker trophy and $120,000, to more than double his all-time live earnings.",
        content_cn: "70万美元保底的首届Lord扑克锦标赛巡回赛主赛事冠军由钟伟正获得，这是他的第一个扑克奖杯，奖金12万美元，使他的职业生涯现场收入翻了一番多。",
        content_tw: "70萬美元保底的首屆Lord撲克錦標賽巡迴賽主賽事冠軍由鍾偉正獲得，這是他的第一個撲克獎杯，獎金12萬美元，使他的職業生涯現場收入翻了一番多。"
      },
      {
        type: "qa",
        question: "Congratulations on winning the biggest event of the series so far! How do you feel?",
        question_cn: "恭喜你赢得了迄今为止系列赛中最大的赛事！你感觉如何？",
        question_tw: "恭喜你贏得了迄今為止系列賽中最大的賽事！你感覺如何？",
        answer: "I feel very happy and very lucky to win this.",
        answer_cn: "我感到非常高兴，能赢得这个比赛非常幸运。",
        answer_tw: "我感到非常高興，能贏得這個比賽非常幸運。"
      },
      {
        type: "qa",
        question: "This was quite the marathon heads up, how did you adjust to your opponent?",
        question_cn: "这是一场马拉松式的单挑，你是如何调整应对对手的？",
        question_tw: "這是一場馬拉松式的單挑，你是如何調整應對對手的？",
        answer: "So basically I tried to play as much as possible against him, but still I folded when I had KQ off suit against him. If I didn't get that cooler hand I'd probably lose the heads up.",
        answer_cn: "基本上我尽可能多地与他对抗，但当我有KQ杂色时还是弃牌了。如果没有那手冷牌我可能会输掉单挑。",
        answer_tw: "基本上我盡可能多地與他對抗，但當我有KQ雜色時還是棄牌了。如果沒有那手冷牌我可能會輸掉單挑。"
      },
      {
        type: "qa",
        question: "Starting day 2 with only 15BB how has the journey been to become champion?",
        question_cn: "第二天开始时只有15BB，成为冠军的旅程是怎样的？",
        question_tw: "第二天開始時只有15BB，成為冠軍的旅程是怎樣的？",
        answer: "It was pretty sweet honestly, on Day 1, I almost bubbled, before late reg I only had 3 or 4 bb left. Then I rounded up to 112K in one level, then eventually I bagged around 70K. You know the first two level of Day 2, I actually didn't get any spots so I was down to like 3 bb, then when I moved and got pretty good spots and cooler get paid.",
        answer_cn: "说实话真的很甜蜜，第一天我差点泡沫出局，晚报名前我只剩3或4bb。然后在一个级别内我涨到了112K，最终打包了大约70K。你知道第二天的前两个级别，我实际上没有任何机会，所以我降到了大约3bb，然后当我换位后得到了很好的位置，冷牌也得到了回报。",
        answer_tw: "說實話真的很甜蜜，第一天我差點泡沫出局，晚報名前我只剩3或4bb。然後在一個級別內我漲到了112K，最終打包了大約70K。你知道第二天的前兩個級別，我實際上沒有任何機會，所以我降到了大約3bb，然後當我換位後得到了很好的位置，冷牌也得到了回報。"
      },
      {
        type: "qa",
        question: "Who was your toughest opponent in the final table and why?",
        question_cn: "决赛桌上谁是你最难对付的对手，为什么？",
        question_tw: "決賽桌上誰是你最難對付的對手，為什麼？",
        answer: "It was Stephen Song because he is the most experienced player, but I didn't play many pots against him, but at last five players left I think it was William Jia because he was the better opponent after Stephen busted.",
        answer_cn: "是Stephen Song，因为他是最有经验的选手，但我没有和他打太多底池。但在最后五人时我认为是William Jia，因为在Stephen出局后他是更好的对手。",
        answer_tw: "是Stephen Song，因為他是最有經驗的選手，但我沒有和他打太多底池。但在最後五人時我認為是William Jia，因為在Stephen出局後他是更好的對手。"
      },
      {
        type: "qa",
        question: "How did you get into poker?",
        question_cn: "你是怎么开始玩扑克的？",
        question_tw: "你是怎麼開始玩撲克的？",
        answer: "I started playing poker when I was in college during the pandemic. My first time playing poker was in like 2019 and I started to play a lot during the first year of pandemic so 2020.",
        answer_cn: "我在大学期间疫情时开始玩扑克。我第一次玩扑克大约是2019年，然后在疫情第一年也就是2020年开始大量玩。",
        answer_tw: "我在大學期間疫情時開始玩撲克。我第一次玩撲克大約是2019年，然後在疫情第一年也就是2020年開始大量玩。"
      },
      {
        type: "qa",
        question: "Is it just a hobby or you play poker for a living?",
        question_cn: "这只是爱好还是你靠扑克谋生？",
        question_tw: "這只是愛好還是你靠撲克謀生？",
        answer: "Right now I play cards and crypto stuff.",
        answer_cn: "目前我玩牌和做加密货币相关的事情。",
        answer_tw: "目前我玩牌和做加密貨幣相關的事情。"
      },
      {
        type: "qa",
        question: "How will your poker career change now that you have this massive win?",
        question_cn: "赢得这场大胜后，你的扑克生涯会有什么变化？",
        question_tw: "贏得這場大勝後，你的撲克生涯會有什麼變化？",
        answer: "I mean it's not really like life changing money for me, but definitely I can travel more now.",
        answer_cn: "对我来说这并不是改变人生的钱，但我现在肯定可以更多地旅行了。",
        answer_tw: "對我來說這並不是改變人生的錢，但我現在肯定可以更多地旅行了。"
      },
      {
        type: "qa",
        question: "Will you try your luck in one of the high rollers in the coming days?",
        question_cn: "你会在接下来的几天里参加高额赛吗？",
        question_tw: "你會在接下來的幾天裡參加高額賽嗎？",
        answer: "My initial plan was not playing, but honestly I don't know now (laughs)",
        answer_cn: "我最初的计划是不参加，但老实说我现在不确定了（笑）",
        answer_tw: "我最初的計劃是不參加，但老實說我現在不確定了（笑）"
      },
      {
        type: "qa",
        question: "How did you find out about The Lord Poker Tournament and what made you play?",
        question_cn: "你是怎么知道Lord扑克锦标赛的，是什么让你决定参加？",
        question_tw: "你是怎麼知道Lord撲克錦標賽的，是什麼讓你決定參加？",
        answer: "My friend invited me to come here (Zhou Yinan) so he said there was a freeroll in Jeju and I was traveling to China so said sure yeah.",
        answer_cn: "我的朋友邀请我来这里（周一男），他说济州有免费赛，我正好在去中国旅行，所以就说好啊。",
        answer_tw: "我的朋友邀請我來這裡（周一男），他說濟州有免費賽，我正好在去中國旅行，所以就說好啊。"
      },
      {
        type: "paragraph",
        content: "Read up on the action via the Live Updates.",
        content_cn: "通过实时更新了解比赛动态。",
        content_tw: "通過實時更新了解比賽動態。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/5-Cekw5IQr.png",
        alt: "Main Event Payouts"
      },
      {
        type: "heading",
        content: "#2 MAIN EVENT (CS) - 8 HANDED",
        content_cn: "#2 主赛事 (CS) - 8人桌",
        content_tw: "#2 主賽事 (CS) - 8人桌"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/6-AyEJOqf2.png",
        alt: "Xiaqing Ji Champion"
      },
      {
        type: "heading",
        content: "XIAQING JI TURNED HIS AAPOKER FREEROLL TICKET TO $120,000!",
        content_cn: "XIAQING JI将AAPOKER免费赛门票变成了$120,000！",
        content_tw: "XIAQING JI將AAPOKER免費賽門票變成了$120,000！"
      },
      {
        type: "paragraph",
        content: "The first event of the inaugural TLPT Jeju blasted in as players poured for the $600,000 guaranteed Freezeout Freeroll. To enter players had to obtain entry via the AAPoker app. A total of 446 players showed up with the top 75 claiming a portion of the prize pool. In the end, it was Xiaqing Ji who turned his freeroll ticket to a whopping $120,000!",
        content_cn: "首届TLPT济州的第一场赛事火爆开场，选手们涌入60万美元保底的冻结免费赛。参赛选手必须通过AAPoker应用程序获得参赛资格。共有446名选手参赛，前75名瓜分奖池。最终，Xiaqing Ji将他的免费赛门票变成了惊人的12万美元！",
        content_tw: "首屆TLPT濟州的第一場賽事火爆開場，選手們湧入60萬美元保底的凍結免費賽。參賽選手必須通過AAPoker應用程序獲得參賽資格。共有446名選手參賽，前75名瓜分獎池。最終，Xiaqing Ji將他的免費賽門票變成了驚人的12萬美元！"
      },
      {
        type: "paragraph",
        content: "Interview With the Champion",
        content_cn: "冠军专访",
        content_tw: "冠軍專訪"
      },
      {
        type: "qa",
        question: "What does it feel like winning 100k from nothing",
        question_cn: "从零到赢得10万美元是什么感觉",
        question_tw: "從零到贏得10萬美元是什麼感覺",
        answer: "I feel great and very happy right now",
        answer_cn: "我现在感觉非常棒，非常开心",
        answer_tw: "我現在感覺非常棒，非常開心"
      },
      {
        type: "qa",
        question: "How did you hear about the event?",
        question_cn: "你是怎么知道这个赛事的？",
        question_tw: "你是怎麼知道這個賽事的？",
        answer: "From a good friend of mine Evan Zhang",
        answer_cn: "从我的好朋友Evan Zhang那里听说的",
        answer_tw: "從我的好朋友Evan Zhang那裡聽說的"
      },
      {
        type: "qa",
        question: "How did you approach the final table coming in as cl and having position on the 2nd biggest stack?",
        question_cn: "作为筹码领先者进入决赛桌，并且位置在第二大筹码之前，你是如何应对的？",
        question_tw: "作為籌碼領先者進入決賽桌，並且位置在第二大籌碼之前，你是如何應對的？",
        answer: "I just played my style, be aggressive and used my stack properly to build more and more stack.",
        answer_cn: "我只是按照自己的风格打牌，保持进攻性，合理利用筹码来不断积累更多筹码。",
        answer_tw: "我只是按照自己的風格打牌，保持進攻性，合理利用籌碼來不斷積累更多籌碼。"
      },
      {
        type: "qa",
        question: "How do you approach this tournament strategically? (e.g., do you play a wide range of hands, focus on post-flop play, or try to get a good chip stack early?)",
        question_cn: "你在这个锦标赛中的策略是什么？（例如，你会打宽范围的牌，专注于翻牌后的打法，还是尝试尽早建立良好的筹码？）",
        question_tw: "你在這個錦標賽中的策略是什麼？（例如，你會打寬範圍的牌，專注於翻牌後的打法，還是嘗試儘早建立良好的籌碼？）",
        answer: "First of all I read all the body movement of the player in my table so i know how will i adjust my play style.",
        answer_cn: "首先，我会观察桌上所有选手的肢体语言，这样我就知道如何调整我的打法。",
        answer_tw: "首先，我會觀察桌上所有選手的肢體語言，這樣我就知道如何調整我的打法。"
      },
      {
        type: "qa",
        question: "How do you handle the pressure of a big field?(Explore their ability to stay calm and make rational decisions despite the large number of players)",
        question_cn: "你如何应对大型赛事的压力？（探讨在众多选手的情况下保持冷静并做出理性决策的能力）",
        question_tw: "你如何應對大型賽事的壓力？（探討在眾多選手的情況下保持冷靜並做出理性決策的能力）",
        answer: "There is still some pressure on the big field, because some time ago compare the low period the grades are not very good.",
        answer_cn: "大型赛事还是有一些压力的，因为前段时间相比低谷期，成绩不是很好。",
        answer_tw: "大型賽事還是有一些壓力的，因為前段時間相比低谷期，成績不是很好。"
      },
      {
        type: "qa",
        question: "What is your poker history? You took a long break from playing poker after 2020",
        question_cn: "你的扑克历史是怎样的？你在2020年后休息了很长时间",
        question_tw: "你的撲克歷史是怎樣的？你在2020年後休息了很長時間",
        answer: "My Buglix probably started in 2017, I have also been all over the world,Including EPT the Australian Millions will participate there will be participation in domestic Asian competitions. Then give me more after winning the championship this time. It has greatly increased my confidence I hope that on the way to the next game you can also get better results.",
        answer_cn: "我的扑克生涯大概从2017年开始，我也去过世界各地，包括EPT、澳洲百万赛，也参加过国内和亚洲的比赛。这次赢得冠军给了我更多信心，希望在接下来的比赛中也能取得更好的成绩。",
        answer_tw: "我的撲克生涯大概從2017年開始，我也去過世界各地，包括EPT、澳洲百萬賽，也參加過國內和亞洲的比賽。這次贏得冠軍給了我更多信心，希望在接下來的比賽中也能取得更好的成績。"
      },
      {
        type: "qa",
        question: "Any advice for young players?",
        question_cn: "对年轻选手有什么建议吗？",
        question_tw: "對年輕選手有什麼建議嗎？",
        answer: "First of all, we should do a good job of fund management. Then through continuous learning I think everyone through hard work Naturally, there will be good grades.",
        answer_cn: "首先，要做好资金管理。然后通过不断学习，我认为每个人通过努力，自然会有好成绩。",
        answer_tw: "首先，要做好資金管理。然後通過不斷學習，我認為每個人通過努力，自然會有好成績。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/8-Bnniu1d6.png",
        alt: "Freeroll Payouts"
      },
      {
        type: "heading",
        content: "#3 AAPOKER DEEP STACK (CS) - 8 HANDED - UNLIMITED RE-BUY ($1,000)",
        content_cn: "#3 AAPOKER深筹赛 (CS) - 8人桌 - 无限重买 ($1,000)",
        content_tw: "#3 AAPOKER深籌賽 (CS) - 8人桌 - 無限重買 ($1,000)"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/9-ZKcALnec.png",
        alt: "Nevan Chang"
      },
      {
        type: "heading",
        content: "NEVAN CHANG WINS AAPOKER DEEP STACK",
        content_cn: "NEVAN CHANG赢得AAPOKER深筹赛",
        content_tw: "NEVAN CHANG贏得AAPOKER深籌賽"
      },
      {
        type: "paragraph",
        content: "The $1,000 buy-in AAPoker Deep stack event pulled in a healthy 202 entries to boost the prize pool to just over the guarantee for $202,000, shared among the top 26 places. Leading up to that moment, the bubble burst on Kanghao Yang with A♦ K♦ outdrawn by Lei Yu's Q♦ J♦.",
        content_cn: "1000美元买入的AAPoker深筹赛吸引了202名参赛者，将奖池提升到略高于保底的20.2万美元，由前26名分享。在此之前，泡沫在Kanghao Yang身上破裂，他的A♦ K♦被Lei Yu的Q♦ J♦击败。",
        content_tw: "1000美元買入的AAPoker深籌賽吸引了202名參賽者，將獎池提升到略高於保底的20.2萬美元，由前26名分享。在此之前，泡沫在Kanghao Yang身上破裂，他的A♦ K♦被Lei Yu的Q♦ J♦擊敗。"
      },
      {
        type: "paragraph",
        content: "With the money certain, it was a race to the final table. Notables Patrik Demus (20th) and Dong Chen (15th) were among the fallen while Yu missed the final 9 by one spot. With nearly every player decorated in achievements, it was anyone's game.",
        content_cn: "确定奖金后，比赛进入决赛桌争夺战。知名选手Patrik Demus（第20名）和Dong Chen（第15名）相继出局，而Yu差一名未能进入最后9人。几乎每位选手都成就斐然，比赛悬念十足。",
        content_tw: "確定獎金後，比賽進入決賽桌爭奪戰。知名選手Patrik Demus（第20名）和Dong Chen（第15名）相繼出局，而Yu差一名未能進入最後9人。幾乎每位選手都成就斐然，比賽懸念十足。"
      },
      {
        type: "paragraph",
        content: "TLPT's Ivan Zhang fell in 8th place, TLPT Ambassador Quan Zhou was out next in 7th falling to Nevan Chang with A♦ A♦ dominating A♥ K♥.",
        content_cn: "TLPT的Ivan Zhang在第8名出局，TLPT大使Quan Zhou紧随其后在第7名出局，被Nevan Chang的A♦ A♦压制A♥ K♥。",
        content_tw: "TLPT的Ivan Zhang在第8名出局，TLPT大使Quan Zhou緊隨其後在第7名出局，被Nevan Chang的A♦ A♦壓制A♥ K♥。"
      },
      {
        type: "paragraph",
        content: "At six remaining, poker couple Chang and Hua Wei Lin dominated the action. Lin built a wide lead after eliminating Zhengfang Huang in 6th place with pocket Jacks over pocket Fives however it didn't last as Chang overtook by railing Yongwei Mo in 4th place.",
        content_cn: "剩余6人时，扑克情侣Chang和Hua Wei Lin主导了比赛。Lin在用口袋JJ淘汰Zhengfang Huang的口袋55后建立了巨大领先，但这并未持续，Chang通过在第4名淘汰Yongwei Mo而反超。",
        content_tw: "剩餘6人時，撲克情侶Chang和Hua Wei Lin主導了比賽。Lin在用口袋JJ淘汰Zhengfang Huang的口袋55後建立了巨大領先，但這並未持續，Chang通過在第4名淘汰Yongwei Mo而反超。"
      },
      {
        type: "paragraph",
        content: "Down to three-handed Yanghao Fu went on a heater to see him surge to the top then took down Lin who was behind with Q♥ 6♥ at the flop K♥ Q♦ 3♦ against Fu's K♦ 3♦and didn't improve on the turn J♥ and river A♦.",
        content_cn: "三人桌时Yanghao Fu手气爆发冲到榜首，然后淘汰了Lin，Lin在翻牌K♥ Q♦ 3♦时拿着Q♥ 6♥落后于Fu的K♦ 3♦，转牌J♥和河牌A♦都没有改进。",
        content_tw: "三人桌時Yanghao Fu手氣爆發衝到榜首，然後淘汰了Lin，Lin在翻牌K♥ Q♦ 3♦時拿著Q♥ 6♥落後於Fu的K♦ 3♦，轉牌J♥和河牌A♦都沒有改進。"
      },
      {
        type: "paragraph",
        content: "It was a tight race for the trophy. Chang scored a decisive double up with A♦ 7♦ over A♦ 6♥ leaving Fu with crumbs. It quickly wrapped up with Chang sealing the victory sending Fu to settle for a runner-up finish.",
        content_cn: "冠军争夺战非常激烈。Chang用A♦ 7♦对A♦ 6♥完成决定性翻倍，让Fu只剩残局。Chang很快封印胜利，Fu获得亚军。",
        content_tw: "冠軍爭奪戰非常激烈。Chang用A♦ 7♦對A♦ 6♥完成決定性翻倍，讓Fu只剩殘局。Chang很快封印勝利，Fu獲得亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/11-CLUb-_JJ.png",
        alt: "Deep Stack Payouts"
      },
      {
        type: "heading",
        content: "#7 SINGLE DAY HR (SHR) - 8 HANDED ($7,500)"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/12-WIzkogdJ.png",
        alt: "Yuzhu Wang Champion"
      },
      {
        type: "image",
        src: "/image/news/details-news/new47/14-BioqKqNM.png",
        alt: "Single Day HR Payouts"
      }
    ]
  }
};

interface ArticleSection {
  type: "paragraph" | "heading" | "image" | "qa" | "table" | "video";
  content?: string;
  content_cn?: string;
  content_tw?: string;
  src?: string;
  src_cn?: string;
  src_tw?: string;
  alt?: string;
  question?: string;
  question_cn?: string;
  question_tw?: string;
  answer?: string;
  answer_cn?: string;
  answer_tw?: string;
  title?: string;
  headers?: string[];
  rows?: string[][];
  totalPrize?: string;
  entries?: string;
  itm?: string;
}

interface ArticleContent {
  heroImage?: string;
  heroImage_tw?: string;
  heroImage_cn?: string;
  sections: ArticleSection[];
  sections_tw?: ArticleSection[];
  sections_cn?: ArticleSection[];
}

export default function NewsDetailPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const article = getNewsArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const content = articleContent[slug];
  
  // Get language-specific sections
  const getSections = () => {
    if (!content) return [];
    if (language === "tw" && content.sections_tw) return content.sections_tw;
    if (language === "cn" && content.sections_cn) return content.sections_cn;
    return content.sections;
  };
  
  // Get language-specific hero image
  const getHeroImage = () => {
    if (!content) return article.image;
    if (language === "tw" && content.heroImage_tw) return content.heroImage_tw;
    if (language === "cn" && content.heroImage_cn) return content.heroImage_cn;
    return content.heroImage || article.image;
  };
  
  const currentSections = getSections();
  
  // Get translated title based on language
  const getTitle = () => {
    if (language === "cn" && article.title_cn) return article.title_cn;
    if (language === "tw" && article.title_tw) return article.title_tw;
    return article.title;
  };

  // Get translated title for any news item
  const getNewsTitle = (news: typeof article) => {
    if (language === "cn" && news.title_cn) return news.title_cn;
    if (language === "tw" && news.title_tw) return news.title_tw;
    return news.title;
  };

  // Format date based on language
  const formatDate = (dateString: string) => {
    if (language === "en") return dateString;
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      
      return `${year}年${month}月${day}日`;
    } catch (e) {
      return dateString;
    }
  };

  // Get translated section content based on language
  const getSectionContent = (section: ArticleSection) => {
    if (language === "cn" && section.content_cn) return section.content_cn;
    if (language === "tw" && section.content_tw) return section.content_tw;
    return section.content;
  };

  // Get translated Q&A content based on language
  const getQAContent = (section: ArticleSection) => {
    const question = language === "cn" && section.question_cn 
      ? section.question_cn 
      : language === "tw" && section.question_tw 
        ? section.question_tw 
        : section.question;
    const answer = language === "cn" && section.answer_cn 
      ? section.answer_cn 
      : language === "tw" && section.answer_tw 
        ? section.answer_tw 
        : section.answer;
    return { question, answer };
  };

  return (
    <div 
      className="min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #001d10, #011008)" }}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f2e29e] mb-4 sm:mb-6 leading-tight uppercase tracking-wide">
            {getTitle()}
          </h1>
          <p className="text-[#4ade80]/60 text-sm italic">
            {formatDate(article.date)}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative w-full overflow-hidden mb-10 flex justify-center"
        >
          <div className="relative max-w-[90%] md:max-w-[80%] w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={getHeroImage()}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 80vw"
              className="object-contain rounded-lg"
              quality={90}
            />
          </div>
        </motion.div>

        {/* Article Content */}
        {content && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            {currentSections.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6 text-base">
                      {getSectionContent(section)}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index} className="text-xl md:text-2xl font-bold text-[#f2e29e] mt-12 mb-6 text-center uppercase tracking-wide">
                      {getSectionContent(section)}
                    </h2>
                  );
                case "image":
                  const getImageSrc = (sec: ArticleSection) => {
                    if (language === "cn" && sec.src_cn) return sec.src_cn;
                    if (language === "tw" && sec.src_tw) return sec.src_tw;
                    return sec.src!;
                  };
                  return (
                    <div key={index} className="relative w-full overflow-hidden my-8 flex justify-center">
                      <div className="relative w-full max-w-4xl">
                        <img
                          src={getImageSrc(section)}
                          alt={section.alt!}
                          className="w-full h-auto object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                case "qa":
                  const qaContent = getQAContent(section);
                  return (
                    <div key={index} className="mb-6">
                      <p className="text-white font-semibold mb-2">{qaContent.question}</p>
                      <p className="text-gray-300 italic">{qaContent.answer}</p>
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
            ← {t("news.backToNews")}
          </Link>
        </motion.div>

        {/* Related News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#14532d] pt-12"
        >
          <h3 className="text-xl font-bold text-[#f2e29e] mb-8 tracking-wider">{t("news.relatedNews")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.slice(1, 4).map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.slug}`}
                className="group block bg-[#052e16] overflow-hidden hover:border-[#f2e29e]/50 border border-transparent transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                    {getNewsTitle(news)}
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
