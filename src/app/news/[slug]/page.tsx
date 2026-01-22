"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

// Full article content data
const articleContent: { [key: string]: ArticleContent } = {
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
        content_cn: "随着2024年悄然落幕，2025年迎来了新的开始。每年这个时候，扑克界的年度排名都会隆重发布。在过去的一年里，中国选手在世界各地的扑克锦标赛中崭露头角，取得了众多令人瞩目的成绩。因此，他们在年度排名中表现出色。在最近发布的2024年GPI（全球扑克指数）年度排名中，五位中国选手进入了全球前100名！值得注意的是，AA扑克团队的两名成员周全和陈东都成功进入GPI前100名，分别排名第26位和第66位，展示了他们非凡的天赋和竞争实力。",
        content_tw: "隨著2024年悄然落幕，2025年迎來了新的開始。每年這個時候，撲克界的年度排名都會隆重發布。在過去的一年裡，中國選手在世界各地的撲克錦標賽中嶄露頭角，取得了眾多令人矚目的成績。因此，他們在年度排名中表現出色。在最近發布的2024年GPI（全球撲克指數）年度排名中，五位中國選手進入了全球前100名！值得注意的是，AA撲克團隊的兩名成員周全和陳東都成功進入GPI前100名，分別排名第26位和第66位，展示了他們非凡的天賦和競爭實力。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/2-CB_1Gyxe.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "heading",
        content: "Global Poker Index (GPI)",
        content_cn: "全球扑克指数（GPI）",
        content_tw: "全球撲克指數（GPI）"
      },
      {
        type: "paragraph",
        content: "The GPI is a ranking system used to track and measure the performance of poker players in major global tournaments. It evaluates players' results across various prestigious poker events to provide a global ranking that reflects their overall skill and performance in the competitive poker scene.",
        content_cn: "GPI是一个用于跟踪和衡量扑克选手在全球主要锦标赛中表现的排名系统。它评估选手在各种著名扑克赛事中的成绩，提供一个反映他们在竞技扑克领域整体技术和表现的全球排名。",
        content_tw: "GPI是一個用於跟踪和衡量撲克選手在全球主要錦標賽中表現的排名系統。它評估選手在各種著名撲克賽事中的成績，提供一個反映他們在競技撲克領域整體技術和表現的全球排名。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/6-DTtOSAuy.png",
        alt: "GPI Rankings"
      },
      {
        type: "paragraph",
        content: "Achieving a spot in the GPI Top 100 is a prestigious honor, reflecting a player's consistent and high-level performance over the past six months.",
        content_cn: "进入GPI前100名是一项殊荣，反映了选手在过去六个月内稳定且高水平的表现。",
        content_tw: "進入GPI前100名是一項殊榮，反映了選手在過去六個月內穩定且高水準的表現。"
      },
      {
        type: "paragraph",
        content: "Quan Zhou's 2024: A Year of Glorious Achievements Let's first take a look at the 2024 journey of 'King' Zhou Quan, which is a 'breakout year' for him, marked by five championships, two runner-up finishes, two third-place finishes, and seven final table (FT) appearances. Among his five titles, three stand out as major victories in high-stakes tournaments: the Jeju Triton High Roller in March, the Cyprus Super High Roller in August, and the Brisbane TLPT High Roller in October.",
        content_cn: "周全的2024：辉煌成就之年 让我们先来看看『王者』周全的2024年征程，这是他的『爆发年』，收获了五个冠军、两个亚军、两个季军和七次决赛桌（FT）入围。在他的五个冠军中，有三个是高额赛事的重大胜利：3月的济州Triton豪客赛、8月的塞浦路斯超级豪客赛和10月的布里斯班TLPT豪客赛。",
        content_tw: "周全的2024：輝煌成就之年 讓我們先來看看『王者』周全的2024年征程，這是他的『爆發年』，收穫了五個冠軍、兩個亞軍、兩個季軍和七次決賽桌（FT）入圍。在他的五個冠軍中，有三個是高額賽事的重大勝利：3月的濟州Triton豪客賽、8月的塞浦路斯超級豪客賽和10月的布里斯班TLPT豪客賽。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/7-CsqpnwAQ.png",
        alt: "Quan Zhou Championships"
      },
      {
        type: "paragraph",
        content: "Zhou has been on an unstoppable rise throughout the entire year, and by November 2024, his career earnings surpassed the $10 million dollar. Currently, Zhou is undoubtedly at the peak of his career, and if he maintains this sizzling form, 2025 will surely bring even more championships! Dong Chen's 2024: Consistent and Rising Dong Chen, known as the 'Tough Guy' of Chinese poker players, combines good looks with exceptional poker skills. Despite his always considered himself a 'semi-professional' player, Chen stunned the poker world by winning the $10K High Roller at the WSOP Paradise Island event in December 2023, claiming a coveted WSOP bracelet—a dream come true for many pro players.",
        content_cn: "周全在整年都保持着不可阻挡的上升势头，到2024年11月，他的职业生涯收入已超过1000万美元。目前，周全无疑正处于职业生涯的巅峰，如果他能保持这种火热状态，2025年必将带来更多冠军！陈东的2024：稳定与上升 陈东被称为中国扑克选手中的『硬汉』，外表英俊与出色的扑克技术兼备。尽管他一直自认为是『半职业』选手，但陈东在2023年12月的WSOP天堂岛赛事中赢得1万美元豪客赛冠军，获得了令人垂涎的WSOP金手链——这是许多职业选手梦寐以求的成就，震惊了扑克界。",
        content_tw: "周全在整年都保持著不可阻擋的上升勢頭，到2024年11月，他的職業生涯收入已超過1000萬美元。目前，周全無疑正處於職業生涯的巔峰，如果他能保持這種火熱狀態，2025年必將帶來更多冠軍！陳東的2024：穩定與上升 陳東被稱為中國撲克選手中的『硬漢』，外表英俊與出色的撲克技術兼備。儘管他一直自認為是『半職業』選手，但陳東在2023年12月的WSOP天堂島賽事中贏得1萬美元豪客賽冠軍，獲得了令人垂涎的WSOP金手鍊——這是許多職業選手夢寐以求的成就，震驚了撲克界。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new5/8-C3xl1EcP.png",
        alt: "Dong Chen WPT Victory"
      },
      {
        type: "paragraph",
        content: "In 2024, Dong Chen continued his steady progress, earning one championship, two fourth-place finishes, and three final table (FT) appearances. The highlight of his year came in November 2024, when he clinched the WPT Super High Roller event.",
        content_cn: "2024年，陈东继续稳步前进，赢得一个冠军、两个第四名和三次决赛桌入围。他这一年的亮点出现在2024年11月，当时他夺得了WPT超级豪客赛冠军。",
        content_tw: "2024年，陳東繼續穩步前進，贏得一個冠軍、兩個第四名和三次決賽桌入圍。他這一年的亮點出現在2024年11月，當時他奪得了WPT超級豪客賽冠軍。"
      },
      {
        type: "paragraph",
        content: "With a career earnings total of $3 million, Chen is in the ascendant phase of his journey compared to Quan Zhou, who is already at the peak of his career. Chen steadily increasing his participation in high roller events, and joining the AA POKER team is a significant opportunity for him. With the full support of the team, Chen's potential is immense, and he is poised for an explosive rise in 2025!",
        content_cn: "职业生涯总收入达到300万美元的陈东，与已处于职业巅峰的周全相比，正处于上升阶段。陈东正在稳步增加参与豪客赛事的次数，加入AA POKER团队对他来说是一个重要机遇。在团队的全力支持下，陈东的潜力巨大，他有望在2025年实现爆发式增长！",
        content_tw: "職業生涯總收入達到300萬美元的陳東，與已處於職業巔峰的周全相比，正處於上升階段。陳東正在穩步增加參與豪客賽事的次數，加入AA POKER團隊對他來說是一個重要機遇。在團隊的全力支持下，陳東的潛力巨大，他有望在2025年實現爆發式增長！"
      },
      {
        type: "paragraph",
        content: "The AA POKER Teams: A Stellar Roster",
        content_cn: "AA POKER团队：全明星阵容",
        content_tw: "AA POKER團隊：全明星陣容"
      },
      {
        type: "paragraph",
        content: "Dan Cates: One of the most elusive and prestigious players in the world, the owner of two gold bracelets(most difficult-to-obtain world gold bracelets). Joe Hachem: WSOP Main Event champion and holder of the prestigious WSOP bracelet. Quan Zhou: Multiple world champion titles holder and the highest-performing Chinese player in poker. Dong Chen: WSOP bracelet winner. YARA: The most influential Chinese poker player globally, known for her charm and sweetness. Yisha Chen: A top Chinese female player and one of the top five ranked Chinese players on the GPI. Yi Ye: The fastest-rising Chinese player in 2024, with improved poker skills, and standout looks. Looking Ahead to 2025: A New Chapter Begins! The brilliance of 2024 is now a thing of the past, and 2025 is ready for a fresh start! We eagerly look forward to the AA POKER team, a powerhouse full of vitality and potential, creating even more exciting moments and winning more championships in 2025. We also wish all domestic players continued success and progress, making the 2025 rankings even more dazzling!",
        content_cn: "Dan Cates：世界上最神秘和最负盛名的选手之一，拥有两枚金手链（最难获得的世界金手链）。Joe Hachem：WSOP主赛事冠军和著名WSOP金手链持有者。周全：多次世界冠军头衔持有者，扑克界表现最出色的中国选手。陈东：WSOP金手链得主。YARA：全球最具影响力的中国扑克选手，以魅力和甜美著称。陈一莎：中国顶级女选手，GPI排名前五的中国选手之一。叶一：2024年进步最快的中国选手，扑克技术提升，外表出众。展望2025：新篇章开启！2024年的辉煌已成为过去，2025年准备迎接新的开始！我们热切期待AA POKER团队这支充满活力和潜力的强队，在2025年创造更多精彩时刻，赢得更多冠军。我们也祝愿所有国内选手继续成功进步，让2025年的排名更加耀眼！",
        content_tw: "Dan Cates：世界上最神秘和最負盛名的選手之一，擁有兩枚金手鍊（最難獲得的世界金手鍊）。Joe Hachem：WSOP主賽事冠軍和著名WSOP金手鍊持有者。周全：多次世界冠軍頭銜持有者，撲克界表現最出色的中國選手。陳東：WSOP金手鍊得主。YARA：全球最具影響力的中國撲克選手，以魅力和甜美著稱。陳一莎：中國頂級女選手，GPI排名前五的中國選手之一。葉一：2024年進步最快的中國選手，撲克技術提升，外表出眾。展望2025：新篇章開啟！2024年的輝煌已成為過去，2025年準備迎接新的開始！我們熱切期待AA POKER團隊這支充滿活力和潛力的強隊，在2025年創造更多精彩時刻，贏得更多冠軍。我們也祝願所有國內選手繼續成功進步，讓2025年的排名更加耀眼！"
      }
    ]
  },
  "wsop-paradise-island-dong-chen-finishes-10th": {
    heroImage: "/image/news/details-news/new6/1-D7HqxTgu.png",
    sections: [
      {
        type: "paragraph",
        content: "After 7 days of intense battles, the WSOP Paradise Island $2,500 Mini Main Event has finally crowned its champion. The event attracted a total of 2,031 entries, with a prize pool of an impressive $5.077 million, surpassing the $5 million guarantee. The payout was structured so that 304 of whom would receive at least a minimum prize of $5,350. By Day 3, only 17 players remained, all vying for the coveted top prize of $575,050. In the end, Jeffrey Hakim triumphed in a heads-up battle against the talented Alina Pailahoshka, securing his first WSOP gold bracelet. Hakim has earned over $2 million in live tournament earnings, and this victory marks a new peak in his career. However, for him, the prize money was not the most important thing. 'The gold bracelet is what matters most. Winning my first gold bracelet is the most important and happiest thing.'",
        content_cn: "经过7天的激烈战斗，WSOP天堂岛2500美元迷你主赛事终于加冕了冠军。该赛事共吸引了2031人参赛，奖池达到令人印象深刻的507.7万美元，超过了500万美元的保底。奖金结构设置为304人将至少获得5350美元的最低奖金。到第三天，只剩17名选手，都在争夺令人垂涎的575050美元冠军奖金。最终，Jeffrey Hakim在与才华横溢的Alina Pailahoshka的单挑战中获胜，获得了他的第一枚WSOP金手链。Hakim的现场锦标赛收入超过200万美元，这场胜利标志着他职业生涯的新高峰。然而，对他来说，奖金并不是最重要的。『金手链才是最重要的。赢得我的第一枚金手链是最重要和最幸福的事情。』",
        content_tw: "經過7天的激烈戰鬥，WSOP天堂島2500美元迷你主賽事終於加冕了冠軍。該賽事共吸引了2031人參賽，獎池達到令人印象深刻的507.7萬美元，超過了500萬美元的保底。獎金結構設置為304人將至少獲得5350美元的最低獎金。到第三天，只剩17名選手，都在爭奪令人垂涎的575050美元冠軍獎金。最終，Jeffrey Hakim在與才華橫溢的Alina Pailahoshka的單挑戰中獲勝，獲得了他的第一枚WSOP金手鍊。Hakim的現場錦標賽收入超過200萬美元，這場勝利標誌著他職業生涯的新高峰。然而，對他來說，獎金並不是最重要的。『金手鍊才是最重要的。贏得我的第一枚金手鍊是最重要和最幸福的事情。』"
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
        content_cn: "去年，陈东在WSOP天堂岛第15场豪客赛中获得金手链，这次他在赛事中取得了令人印象深刻的第10名，赢得了51,080美元。锦标赛结果：",
        content_tw: "去年，陳東在WSOP天堂島第15場豪客賽中獲得金手鍊，這次他在賽事中取得了令人印象深刻的第10名，贏得了51,080美元。錦標賽結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/3-D3WHiV9X.png",
        alt: "Tournament Results"
      },
      {
        type: "paragraph",
        content: "Zhen Chen, Jianwei Lin, and other Chinese players made it to the payout positions with the following results:",
        content_cn: "陈震、林健伟和其他中国选手进入了奖金位置，成绩如下：",
        content_tw: "陳震、林健偉和其他中國選手進入了獎金位置，成績如下："
      },
      {
        type: "paragraph",
        content: "Event #5: The $25,000 Dealer's Choice Tournament attracted 49 entries, with a total prize pool of $1,225,000. Among the participants were many players considered to be the best mixed-game players in the world.",
        content_cn: "第5场赛事：25,000美元庄家选择锦标赛吸引了49人参赛，总奖池达到1,225,000美元。参赛者中有许多被认为是世界上最好的混合游戏选手。",
        content_tw: "第5場賽事：25,000美元莊家選擇錦標賽吸引了49人參賽，總獎池達到1,225,000美元。參賽者中有許多被認為是世界上最好的混合遊戲選手。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/4-DHZ69_eY.png",
        alt: "Eric Wasserson Winner"
      },
      {
        type: "paragraph",
        content: "Only 4 players returned to the Bahamas Atlantis Paradise Island to compete in the Day 3 overtime session of Event #5. After 4 hours of intense play, Eric Wasserson emerged victorious, winning his first career gold bracelet and a reward of $353,340. Wasserson's career has been filled with many notable achievements. He had previously finished as a runner-up twice and third three times in bracelet events. Now, he can finally breathe a sigh of relief. 'I've always wanted to win a gold bracelet,' Wasserson admitted. 'It feels amazing to finally take it down. I can't even explain how it feels.' Event #5 Results:",
        content_cn: "只有4名选手返回巴哈马亚特兰蒂斯天堂岛参加第5场赛事第三天的加时赛。经过4小时的激烈比赛，Eric Wasserson获胜，赢得了他职业生涯的第一枚金手链和353,340美元的奖金。Wasserson的职业生涯充满了许多显著成就。他此前曾两次获得亚军，三次获得第三名。现在，他终于可以松一口气了。『我一直想赢得金手链，』Wasserson承认道。『终于拿下感觉太棒了。我甚至无法形容这种感觉。』第5场赛事结果：",
        content_tw: "只有4名選手返回巴哈馬亞特蘭蒂斯天堂島參加第5場賽事第三天的加時賽。經過4小時的激烈比賽，Eric Wasserson獲勝，贏得了他職業生涯的第一枚金手鍊和353,340美元的獎金。Wasserson的職業生涯充滿了許多顯著成就。他此前曾兩次獲得亞軍，三次獲得第三名。現在，他終於可以鬆一口氣了。『我一直想贏得金手鍊，』Wasserson承認道。『終於拿下感覺太棒了。我甚至無法形容這種感覺。』第5場賽事結果："
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/5-kTDc1bva.png",
        alt: "Event 5 Results"
      },
      {
        type: "paragraph",
        content: "Ongoing Tournament: Event #6: $5,000 Deep Stack Tournament attracted 363 entries, with a total prize pool of $1,815,000.",
        content_cn: "进行中的赛事：第6场赛事：5,000美元深筹码锦标赛吸引了363人参赛，总奖池达到1,815,000美元。",
        content_tw: "進行中的賽事：第6場賽事：5,000美元深籌碼錦標賽吸引了363人參賽，總獎池達到1,815,000美元。"
      },
      {
        type: "paragraph",
        content: "On Day 1, 253 players participated, with 94 players advancing to the next round. Lei Yu from Red Dragon Team and Yinan Zhou, also from China, both advanced smoothly to the next stage, thanks to their impressive chip stacks.",
        content_cn: "第一天，253名选手参赛，94名选手晋级下一轮。来自红龙队的于磊和同样来自中国的周一男，凭借他们令人印象深刻的筹码量顺利晋级下一阶段。",
        content_tw: "第一天，253名選手參賽，94名選手晉級下一輪。來自紅龍隊的於磊和同樣來自中國的周一男，憑藉他們令人印象深刻的籌碼量順利晉級下一階段。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/6-B8FJSEyO.png",
        alt: "Lei Yu Chip Leader"
      },
      {
        type: "paragraph",
        content: "On the following day, 110 players joined the battle, bringing the total number of competitors to 204, who started the new day of play. After Day 2, only the final 9 players remained, all of whom will compete in the next round, fiercely chasing the coveted gold bracelet. Among them, Lei Yu is currently in 9th place with a chip stack of 540,000.",
        content_cn: "第二天，110名选手加入战斗，使参赛者总数达到204人，开始新一天的比赛。第二天结束后，只剩下最后9名选手，他们都将在下一轮激烈争夺令人垂涎的金手链。其中，于磊目前以540,000的筹码量排名第9。",
        content_tw: "第二天，110名選手加入戰鬥，使參賽者總數達到204人，開始新一天的比賽。第二天結束後，只剩下最後9名選手，他們都將在下一輪激烈爭奪令人垂涎的金手鍊。其中，於磊目前以540,000的籌碼量排名第9。"
      },
      {
        type: "paragraph",
        content: "Event #7: $100,000 Triton Main Event Day 2: This tournament attracted 182 entries, featuring not only high-stakes regulars but also celebrity players and numerous world champions. The total prize pool reached an astonishing $18.2 million. As Day 2 began, David Yan (1,166,000), Dimitar Danchev (1,107,000), and Biao Ding (990,000) topped the leaderboard. These three experienced players are no strangers to high-stakes events at both WSOP and Triton, with impressive results in the highest-level tournaments.",
        content_cn: "第7场赛事：100,000美元Triton主赛事第二天：该锦标赛吸引了182人参赛，不仅有高额赛常客，还有明星选手和众多世界冠军。总奖池达到惊人的1820万美元。第二天开始时，David Yan（1,166,000）、Dimitar Danchev（1,107,000）和丁彪（990,000）位居排行榜前列。这三位经验丰富的选手对WSOP和Triton的高额赛事并不陌生，在最高级别锦标赛中有着令人印象深刻的成绩。",
        content_tw: "第7場賽事：100,000美元Triton主賽事第二天：該錦標賽吸引了182人參賽，不僅有高額賽常客，還有明星選手和眾多世界冠軍。總獎池達到驚人的1820萬美元。第二天開始時，David Yan（1,166,000）、Dimitar Danchev（1,107,000）和丁彪（990,000）位居排行榜前列。這三位經驗豐富的選手對WSOP和Triton的高額賽事並不陌生，在最高級別錦標賽中有著令人印象深刻的成績。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new6/7-DSkdebE3.png",
        alt: "Triton Main Event"
      },
      {
        type: "paragraph",
        content: "However, as the competition intensified, many big-name players were eliminated. As of the latest update, only the final 15 players remain, all battling hard for the title. Finnish player Ossi Ketola currently leads with a chip stack of 6.6 million, followed closely by well-known players Fedor Holz and Alex Foxen. Other notable competitors still in the race include Mikita Badziakouski, Joao Vieira, and Stephen Chidwick.",
        content_cn: "然而，随着竞争的加剧，许多大牌选手被淘汰。截至最新更新，只剩下最后15名选手，都在为冠军努力拼搏。芬兰选手Ossi Ketola目前以660万的筹码量领先，紧随其后的是知名选手Fedor Holz和Alex Foxen。其他仍在竞争中的著名选手包括Mikita Badziakouski、Joao Vieira和Stephen Chidwick。",
        content_tw: "然而，隨著競爭的加劇，許多大牌選手被淘汰。截至最新更新，只剩下最後15名選手，都在為冠軍努力拼搏。芬蘭選手Ossi Ketola目前以660萬的籌碼量領先，緊隨其後的是知名選手Fedor Holz和Alex Foxen。其他仍在競爭中的著名選手包括Mikita Badziakouski、Joao Vieira和Stephen Chidwick。"
      }
    ]
  },
  "aapoker-team-luxury-lineup-brand-new": {
    heroImage: "/image/news/details-news/new7/1-CgB682he.png",
    sections: [
      {
        type: "paragraph",
        content: "Time flies, and the year 2024 is about to pass. Looking back on the past year, AApoker team has achieved fruitful results. AApoker's luxury tournament brand 'TLPT King's Road' and Triton Legendary Poker have reached an official cooperation, the two luxury giants have joined forces, and 2025 is full of infinite imagination. From September 27th to October 6th, TLPT joined hands with APT Australian Championship to successfully hold the 2024 Brisbane Hawker Series, which was highly praised by the circle. In addition, the AApoker team lineup continues to grow with an influx of strong reinforcements. The AApoker team has also been performing well in international tournaments, and in the recently concluded KPC Super Hustler, two AA players met in the final and took the first and second place.",
        content_cn: "时光飞逝，2024年即将过去。回顾过去一年，AApoker团队取得了丰硕成果。AApoker的豪华赛事品牌『TLPT王者之路』与Triton传奇扑克达成了官方合作，两大豪华巨头强强联合，2025年充满无限想象。从9月27日到10月6日，TLPT携手APT澳大利亚锦标赛成功举办了2024布里斯班豪客系列赛，获得了圈内高度评价。此外，AApoker团队阵容持续壮大，强援不断涌入。AApoker团队在国际赛事中也表现出色，在刚刚结束的KPC超级豪客赛中，两名AA选手在决赛中相遇，包揽了冠亚军。",
        content_tw: "時光飛逝，2024年即將過去。回顧過去一年，AApoker團隊取得了豐碩成果。AApoker的豪華賽事品牌『TLPT王者之路』與Triton傳奇撲克達成了官方合作，兩大豪華巨頭強強聯合，2025年充滿無限想象。從9月27日到10月6日，TLPT攜手APT澳大利亞錦標賽成功舉辦了2024布里斯班豪客系列賽，獲得了圈內高度評價。此外，AApoker團隊陣容持續壯大，強援不斷湧入。AApoker團隊在國際賽事中也表現出色，在剛剛結束的KPC超級豪客賽中，兩名AA選手在決賽中相遇，包攬了冠亞軍。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/2-D3NOefQF.png",
        alt: "KPC Super Hustler Champions"
      },
      {
        type: "paragraph",
        content: "The current AApoker team includes both WSOP Main Event champion Joe Hachem, the former GPI Global No. 1 Quan Zhou, and WSOP gold bracelet winner Dong Chen... The lineup is so impressive, let's take a look at it now!",
        content_cn: "目前的AApoker团队包括WSOP主赛事冠军Joe Hachem、前GPI全球第一周全、以及WSOP金手链得主陈东……阵容如此豪华，让我们现在来看看吧！",
        content_tw: "目前的AApoker團隊包括WSOP主賽事冠軍Joe Hachem、前GPI全球第一周全、以及WSOP金手鍊得主陳東……陣容如此豪華，讓我們現在來看看吧！"
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
        content_cn: "Dan「Jungleman」Cates也是AApoker的全球品牌大使，是中国选手的老朋友，粗犷的外表下隐藏着细腻有趣的内心。Dan是一位强大的全能选手，在现场和在线锦标赛以及常规桌上都有着主导地位。他拥有两枚WSOP金手链，5万美元扑克选手锦标赛，他在2021年和2022年连续夺冠，这是WSOP历史上的奇迹。他的现场锦标赛奖金总额高达1440万美元。在线上，「Jungleman」同样传奇，盈利达1100万美元。更可怕的是，「Jungleman」仍处于职业生涯巅峰，必将创造更多奇迹。",
        content_tw: "Dan「Jungleman」Cates也是AApoker的全球品牌大使，是中國選手的老朋友，粗獷的外表下隱藏著細膩有趣的內心。Dan是一位強大的全能選手，在現場和在線錦標賽以及常規桌上都有著主導地位。他擁有兩枚WSOP金手鍊，5萬美元撲克選手錦標賽，他在2021年和2022年連續奪冠，這是WSOP歷史上的奇蹟。他的現場錦標賽獎金總額高達1440萬美元。在線上，「Jungleman」同樣傳奇，盈利達1100萬美元。更可怕的是，「Jungleman」仍處於職業生涯巔峰，必將創造更多奇蹟。"
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
        content_cn: "同样担任AApoker全球品牌大使的周全，长期以来一直是中国竞技扑克的领军人物，但他的成就远不止于此。周全早在2017年就获得了GPI中国第一名，然后在2020年获得了GPI全球第一名，以及当年的年度扑克选手，但这些只是周全众多亮点之一。2024年仍然是周全的『高光年』，他已经在世界顶级锦标赛中赢得了5个冠军、2个亚军和2个季军，职业生涯总奖金已突破1000万美元大关。周全不仅扑克技术高超，还富有爱心，早在2016年他就发起成立了德艺全明星慈善组织，为贫困山区儿童捐赠学习用品和生活用品，至今已坚持九年。无论是在竞技比赛还是品格道德方面，周全都为年轻一代扑克选手树立了高尚的榜样。",
        content_tw: "同樣擔任AApoker全球品牌大使的周全，長期以來一直是中國競技撲克的領軍人物，但他的成就遠不止於此。周全早在2017年就獲得了GPI中國第一名，然後在2020年獲得了GPI全球第一名，以及當年的年度撲克選手，但這些只是周全眾多亮點之一。2024年仍然是周全的『高光年』，他已經在世界頂級錦標賽中贏得了5個冠軍、2個亞軍和2個季軍，職業生涯總獎金已突破1000萬美元大關。周全不僅撲克技術高超，還富有愛心，早在2016年他就發起成立了德藝全明星慈善組織，為貧困山區兒童捐贈學習用品和生活用品，至今已堅持九年。無論是在競技比賽還是品格道德方面，周全都為年輕一代撲克選手樹立了高尚的榜樣。"
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
        content_cn: "Wesley Fei是一位财富人士，15岁就进入币圈，早早积累了巨额财富，在币圈声名鹊起。后来偶然接触到德州扑克，随即开始了在扑克圈人气飙升的道路。因为实力强劲，被网友称为『无限反手』。与传统的国内扑克选手不同，Wesley性格外向高调，很快成为著名现场扑克节目HCL的明星，是少数能够在高额桌上与外国选手持续竞争的国内扑克选手之一。在2023年6月的HCL百万直播中，Wesley首先与Tom Dwan打出了现场扑克历史上最大的底池310万美元，然后又打出了现场扑克历史上第二大的底池220万美元，在扑克界引起轰动。Wesley在高额桌上的强劲表现证明了国内扑克选手在高额桌上也有一席之地。随着他在扑克界的成熟，Wesley必将发挥得更好。",
        content_tw: "Wesley Fei是一位財富人士，15歲就進入幣圈，早早積累了巨額財富，在幣圈聲名鵲起。後來偶然接觸到德州撲克，隨即開始了在撲克圈人氣飆升的道路。因為實力強勁，被網友稱為『無限反手』。與傳統的國內撲克選手不同，Wesley性格外向高調，很快成為著名現場撲克節目HCL的明星，是少數能夠在高額桌上與外國選手持續競爭的國內撲克選手之一。在2023年6月的HCL百萬直播中，Wesley首先與Tom Dwan打出了現場撲克歷史上最大的底池310萬美元，然後又打出了現場撲克歷史上第二大的底池220萬美元，在撲克界引起轟動。Wesley在高額桌上的強勁表現證明了國內撲克選手在高額桌上也有一席之地。隨著他在撲克界的成熟，Wesley必將發揮得更好。"
      },
      {
        type: "heading",
        content: "Yisha Chen",
        content_cn: "陈一莎",
        content_tw: "陳一莎"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/6-BAwvbM6F.png",
        alt: "Yisha Chen"
      },
      {
        type: "paragraph",
        content: "The beautiful poker player Yisha Chen can be said to be the most eye-catching domestic female poker player in 2024. Originally a dance teacher, her tough and unyielding character has allowed her to survive in this male-dominated game and fight for her own piece of sky. The year 2024 was a year of great success for Chen. According to The Hendon Mob's database, her total career winnings amounted to $85W, but her winnings in 2024 accounted for $74W, with winnings coming from top international tournaments such as the APT, Triton, TLPT, and EPT. It can be seen that Chen already has a strong competitive edge. With both beauty and wisdom, face value and strength, she is very promising to grow into the leading female poker player in China.",
        content_cn: "美丽的扑克选手陈一莎可以说是2024年最引人注目的国内女扑克选手。原本是一名舞蹈老师，她坚韧不屈的性格让她在这个男性主导的游戏中生存下来，并为自己争得一片天空。2024年是陈一莎大获成功的一年。根据The Hendon Mob数据库，她的职业生涯总奖金达到85万美元，但2024年的奖金就占了74万美元，奖金来自APT、Triton、TLPT和EPT等顶级国际赛事。可以看出，陈一莎已经具备了很强的竞争力。她集美貌与智慧、颜值与实力于一身，很有希望成长为中国领先的女扑克选手。",
        content_tw: "美麗的撲克選手陳一莎可以說是2024年最引人注目的國內女撲克選手。原本是一名舞蹈老師，她堅韌不屈的性格讓她在這個男性主導的遊戲中生存下來，並為自己爭得一片天空。2024年是陳一莎大獲成功的一年。根據The Hendon Mob數據庫，她的職業生涯總獎金達到85萬美元，但2024年的獎金就佔了74萬美元，獎金來自APT、Triton、TLPT和EPT等頂級國際賽事。可以看出，陳一莎已經具備了很強的競爭力。她集美貌與智慧、顏值與實力於一身，很有希望成長為中國領先的女撲克選手。"
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
        content_cn: "陈东，中国扑克圈知名的『硬汉』，这个名字源于2019年的一次难忘经历。当时，陈东参加WSOP主赛事遭遇地震，正好他是大盲位，有人Open，许多扑克选手都跑出去了，而他坐着一动不动，朋友问他为什么不跑，他霸气地抛出一句：命可以不要，大盲不能丢。但这个名字确实名副其实，陈东确实很『硬』，无论是扑克技术还是颜值，都非常能打。他在2016年接触德州扑克，通常在线上学习打牌。虽然他声称自己不是职业选手，但他的比赛次数、竞技实力以及奖金和荣誉都远远超过了一个优秀的职业选手。在2023年WSOP巴哈马，他赢得了1万美元豪宅锦标赛，收获了竞技生涯的第一枚WSOP金手链和高达411,659美元的奖金，这是许多职业选手努力追求的梦想。根据The Hendon Mob数据库，他的现场锦标赛奖金已达到263万美元。加入AApoker团队对他来说将是一个很好的补充，他必将在未来取得更加惊人的成绩。",
        content_tw: "陳東，中國撲克圈知名的『硬漢』，這個名字源於2019年的一次難忘經歷。當時，陳東參加WSOP主賽事遭遇地震，正好他是大盲位，有人Open，許多撲克選手都跑出去了，而他坐著一動不動，朋友問他為什麼不跑，他霸氣地拋出一句：命可以不要，大盲不能丟。但這個名字確實名副其實，陳東確實很『硬』，無論是撲克技術還是顏值，都非常能打。他在2016年接觸德州撲克，通常在線上學習打牌。雖然他聲稱自己不是職業選手，但他的比賽次數、競技實力以及獎金和榮譽都遠遠超過了一個優秀的職業選手。在2023年WSOP巴哈馬，他贏得了1萬美元豪宅錦標賽，收穫了競技生涯的第一枚WSOP金手鍊和高達411,659美元的獎金，這是許多職業選手努力追求的夢想。根據The Hendon Mob數據庫，他的現場錦標賽獎金已達到263萬美元。加入AApoker團隊對他來說將是一個很好的補充，他必將在未來取得更加驚人的成績。"
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
        content_cn: "23岁的美女Yara是扑克界的后起之秀。当大多数同龄人刚刚离开学校时，Yara已经拥有了练习生、女团成员、模特和选美冠军等多重身份和丰富经历。凭借甜美的外表和完美的身材，Yara在2021年赢得了东方华裔小姐选美比赛。Yara从小就对扑克表现出浓厚兴趣，她努力学习和发展自己的技能，逐渐在各大赛事中崭露头角。她柔美的外表和凶猛的扑克风格让她在现场扑克节目HCL上大受欢迎，被昵称为『毁灭者Yara』，她直率的性格为她赢得了全球大量粉丝。尽管年纪轻轻，Yara是一位多才多艺的选手，我们期待看到她在扑克舞台上继续闪耀！",
        content_tw: "23歲的美女Yara是撲克界的後起之秀。當大多數同齡人剛剛離開學校時，Yara已經擁有了練習生、女團成員、模特和選美冠軍等多重身份和豐富經歷。憑藉甜美的外表和完美的身材，Yara在2021年贏得了東方華裔小姐選美比賽。Yara從小就對撲克表現出濃厚興趣，她努力學習和發展自己的技能，逐漸在各大賽事中嶄露頭角。她柔美的外表和兇猛的撲克風格讓她在現場撲克節目HCL上大受歡迎，被暱稱為『毀滅者Yara』，她直率的性格為她贏得了全球大量粉絲。儘管年紀輕輕，Yara是一位多才多藝的選手，我們期待看到她在撲克舞台上繼續閃耀！"
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
        content_cn: "58岁的Joe Hachem是一位黎巴嫩裔澳大利亚职业扑克选手，他的扑克履历既辉煌又悠久，职业生涯总奖金达1298万美元。早在2005年，Hachem首次前往拉斯维加斯就赢得了WSOP主赛事，震惊了扑克界，带回了750万美元的奖金，这在当时是有史以来最高的锦标赛奖金，他也是第一位赢得WSOP主赛事的澳大利亚扑克选手。2006年，他赢得了第一个WPT冠军，带回了220万美元，使他成为仅有的六位同时赢得WSOP主赛事和WPT的扑克选手之一。Hachem被称为澳大利亚的『扑克教父』，并于2009年入选澳大利亚扑克名人堂，因为他在巩固澳大利亚扑克热潮中发挥了重要作用。Hachem仍然活跃在世界各地的顶级赛事中，他最近的一次胜利是在今年10月5日的澳大利亚扑克锦标赛上。加入AApoker团队后，Hachem的扑克履历将更加令人印象深刻。",
        content_tw: "58歲的Joe Hachem是一位黎巴嫩裔澳大利亞職業撲克選手，他的撲克履歷既輝煌又悠久，職業生涯總獎金達1298萬美元。早在2005年，Hachem首次前往拉斯維加斯就贏得了WSOP主賽事，震驚了撲克界，帶回了750萬美元的獎金，這在當時是有史以來最高的錦標賽獎金，他也是第一位贏得WSOP主賽事的澳大利亞撲克選手。2006年，他贏得了第一個WPT冠軍，帶回了220萬美元，使他成為僅有的六位同時贏得WSOP主賽事和WPT的撲克選手之一。Hachem被稱為澳大利亞的『撲克教父』，並於2009年入選澳大利亞撲克名人堂，因為他在鞏固澳大利亞撲克熱潮中發揮了重要作用。Hachem仍然活躍在世界各地的頂級賽事中，他最近的一次勝利是在今年10月5日的澳大利亞撲克錦標賽上。加入AApoker團隊後，Hachem的撲克履歷將更加令人印象深刻。"
      },
      {
        type: "heading",
        content: "Yi Ye",
        content_cn: "叶一",
        content_tw: "葉一"
      },
      {
        type: "image",
        src: "/image/news/details-news/new7/10-B0PAz14B.png",
        alt: "Yi Ye"
      },
      {
        type: "paragraph",
        content: "Yi Ye is a newcomer to the poker scene in 2024. With a wide range of interests and a passion for competitive poker tournaments, Ye has made her professional debut in 2024 with a series of dazzling results. By joining the AApoker team and playing alongside her predecessors in the poker world, Ye's competitive strength is sure to soar, and her future will be immeasurable! The AApoker team is strong and star-studded. With experienced veterans, stalwarts in their prime, and energetic up-and-comers full of potential, let's look forward to their exciting performance in the global arena!",
        content_cn: "叶一是2024年扑克界的新人。凭借广泛的兴趣和对竞技扑克锦标赛的热情，叶一在2024年以一系列耀眼的成绩完成了职业首秀。通过加入AApoker团队并与扑克界的前辈们并肩作战，叶一的竞技实力必将飙升，她的未来不可限量！AApoker团队实力强大，星光熠熠。有经验丰富的老将，有正值巅峰的中坚力量，还有充满潜力的朝气新秀，让我们期待他们在全球舞台上的精彩表现！",
        content_tw: "葉一是2024年撲克界的新人。憑藉廣泛的興趣和對競技撲克錦標賽的熱情，葉一在2024年以一系列耀眼的成績完成了職業首秀。通過加入AApoker團隊並與撲克界的前輩們並肩作戰，葉一的競技實力必將飆升，她的未來不可限量！AApoker團隊實力強大，星光熠熠。有經驗豐富的老將，有正值巔峰的中堅力量，還有充滿潛力的朝氣新秀，讓我們期待他們在全球舞台上的精彩表現！"
      }
    ]
  },
  "wsop-paradise-island-quan-zhou-dong-chen": {
    heroImage: "/image/news/details-news/new8/1-BZMRHpdt.png",
    sections: [
      {
        type: "paragraph",
        content: "The next two weeks will be a thrilling celebration of the WSOP Paradise Island Series. Poker players from around the world have gathered at the Bahamas' Atlantis Paradise Island to continue adding to their illustrious poker careers. Event #1: $2,500 Mini Main Event Day 1b The $2,500 Mini Main Event Day 1b attracted a total of 937 entries, with only 73 players making it through to the next round. American player Jerry Wong leads the field with a chip stack of 97.4k.",
        content_cn: "接下来的两周将是WSOP天堂岛系列赛的激动人心的庆典。来自世界各地的扑克选手齐聚巴哈马的亚特兰蒂斯天堂岛，继续为他们辉煌的扑克生涯增光添彩。第1场赛事：2500美元迷你主赛事第1b天 2500美元迷你主赛事第1b天共吸引了937人参赛，只有73名选手晋级下一轮。美国选手Jerry Wong以97.4k的筹码量领先。",
        content_tw: "接下來的兩週將是WSOP天堂島系列賽的激動人心的慶典。來自世界各地的撲克選手齊聚巴哈馬的亞特蘭蒂斯天堂島，繼續為他們輝煌的撲克生涯增光添彩。第1場賽事：2500美元迷你主賽事第1b天 2500美元迷你主賽事第1b天共吸引了937人參賽，只有73名選手晉級下一輪。美國選手Jerry Wong以97.4k的籌碼量領先。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/2-B1dZcqzn.png",
        alt: "Jerry Wong Chip Leader"
      },
      {
        type: "paragraph",
        content: "Wong earned his first gold bracelet at the 2023 WSOP, winning Event #33: $10,000 Razz Championship. His biggest live cash came in the 2016 WSOP Main Event, where he finished 8th for $1,100,076.",
        content_cn: "Wong在2023年WSOP赢得了他的第一枚金手链，赢得了第33场赛事：10,000美元Razz锦标赛。他最大的现场奖金来自2016年WSOP主赛事，他获得第8名，赢得1,100,076美元。",
        content_tw: "Wong在2023年WSOP贏得了他的第一枚金手鍊，贏得了第33場賽事：10,000美元Razz錦標賽。他最大的現場獎金來自2016年WSOP主賽事，他獲得第8名，贏得1,100,076美元。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/3-BrYCOZDV.png",
        alt: "Day 1b Chip Counts"
      },
      {
        type: "paragraph",
        content: "Other notable players advancing include Timothy Adams, Anthony Zinno, David Peters, Georgios Sotiropoulos, Justin Saliba, and more.",
        content_cn: "其他晋级的著名选手包括Timothy Adams、Anthony Zinno、David Peters、Georgios Sotiropoulos、Justin Saliba等。",
        content_tw: "其他晉級的著名選手包括Timothy Adams、Anthony Zinno、David Peters、Georgios Sotiropoulos、Justin Saliba等。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/4-CQ5Wl3QU.png",
        alt: "Quan Zhou and Dong Chen"
      },
      {
        type: "paragraph",
        content: "Quan Zhou and Dong Chen also advanced to the next stage, showcasing excellent play.",
        content_cn: "周全和陈东也晋级下一阶段，展现了出色的表现。",
        content_tw: "周全和陳東也晉級下一階段，展現了出色的表現。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/5-k3-eIpmL.png",
        alt: "Quan Zhou and Dong Chen Chip Counts"
      },
      {
        type: "heading",
        content: "Event #2: $100,000 Triton Million Invitational",
        content_cn: "第2场赛事：100,000美元Triton百万邀请赛",
        content_tw: "第2場賽事：100,000美元Triton百萬邀請賽"
      },
      {
        type: "paragraph",
        content: "The prestigious $100,000 Triton Million Invitational has officially concluded its entry phase, with 96 entries, including 22 re-entries, creating a prize pool of $48 million.",
        content_cn: "享有盛誉的100,000美元Triton百万邀请赛已正式结束报名阶段，共有96人参赛，包括22次重新买入，创造了4800万美元的奖池。",
        content_tw: "享有盛譽的100,000美元Triton百萬邀請賽已正式結束報名階段，共有96人參賽，包括22次重新買入，創造了4800萬美元的獎池。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/6-CvWtzvB9.png",
        alt: "Triton Million Trophy"
      },
      {
        type: "paragraph",
        content: "The first-place winner will take home an impressive $12,070,000, along with a WSOP gold bracelet and the Triton trophy. The top 17 players are guaranteed at least $755,000 in prize money.",
        content_cn: "冠军将获得令人印象深刻的12,070,000美元，以及一枚WSOP金手链和Triton奖杯。前17名选手保证至少获得755,000美元的奖金。",
        content_tw: "冠軍將獲得令人印象深刻的12,070,000美元，以及一枚WSOP金手鍊和Triton獎杯。前17名選手保證至少獲得755,000美元的獎金。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/7-1DZEGjLX.png",
        alt: "Michael Moncek"
      },
      {
        type: "paragraph",
        content: "At the conclusion of Day 2, only 14 players remain in contention. Michael Moncek, who led the Day 1 chip counts, continued his strong performance on Day 2, retaining the lead with 125k in chips. Moncek has become a fan favorite for his aggressive playstyle and nearly 100% VPIP (voluntarily put money in pot). However, after suffering a loss of nearly $2 million in the high-stakes cash games, Moncek had a tough summer. Now, he hopes to recover his losses and add to his winnings. Following Moncek are Daniel Dvoress with 123.5k and Alejandro Lococo with 107.75k.",
        content_cn: "第二天结束时，只剩下14名选手在竞争。在第一天筹码量领先的Michael Moncek在第二天继续保持强劲表现，以125k的筹码量保持领先。Moncek因其激进的打法和近100%的VPIP（自愿投钱入池）而成为粉丝的最爱。然而，在高额现金游戏中损失近200万美元后，Moncek度过了一个艰难的夏天。现在，他希望挽回损失并增加奖金。紧随Moncek的是拥有123.5k的Daniel Dvoress和拥有107.75k的Alejandro Lococo。",
        content_tw: "第二天結束時，只剩下14名選手在競爭。在第一天籌碼量領先的Michael Moncek在第二天繼續保持強勁表現，以125k的籌碼量保持領先。Moncek因其激進的打法和近100%的VPIP（自願投錢入池）而成為粉絲的最愛。然而，在高額現金遊戲中損失近200萬美元後，Moncek度過了一個艱難的夏天。現在，他希望挽回損失並增加獎金。緊隨Moncek的是擁有123.5k的Daniel Dvoress和擁有107.75k的Alejandro Lococo。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/8-3wiflhiK.png",
        alt: "Day 2 Chip Counts"
      },
      {
        type: "paragraph",
        content: "Notable players who fell short of the money include Phil Ivey, Jason Koon, Patrik Antonius, Isaac Haxton, Nick Schulman, and Justin Bonomo.",
        content_cn: "未能进入奖金圈的著名选手包括Phil Ivey、Jason Koon、Patrik Antonius、Isaac Haxton、Nick Schulman和Justin Bonomo。",
        content_tw: "未能進入獎金圈的著名選手包括Phil Ivey、Jason Koon、Patrik Antonius、Isaac Haxton、Nick Schulman和Justin Bonomo。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/9-BL6an0gC.png",
        alt: "Phil Ivey and Justin Bonomo"
      },
      {
        type: "paragraph",
        content: "This marked Daniel Negreanu's first appearance in a Triton event, and despite being a newcomer, he made it to Day 2. However, in Level 12 (Blinds 15,000/30,000/30,000), his AK failed to overcome Kayhan Mokri's KK, and he was eliminated in 58th place. Although Ivey and Daniel Negreanu did not make it to the end, they still have multiple opportunities to win their second gold bracelet of the year, as there are several events left on the schedule.",
        content_cn: "这是Daniel Negreanu首次参加Triton赛事，尽管是新手，他还是进入了第二天。然而，在第12级（盲注15,000/30,000/30,000）中，他的AK未能战胜Kayhan Mokri的KK，他以第58名被淘汰。虽然Ivey和Daniel Negreanu没有坚持到最后，但他们仍有多次机会赢得今年的第二枚金手链，因为赛程中还有几场赛事。",
        content_tw: "這是Daniel Negreanu首次參加Triton賽事，儘管是新手，他還是進入了第二天。然而，在第12級（盲注15,000/30,000/30,000）中，他的AK未能戰勝Kayhan Mokri的KK，他以第58名被淘汰。雖然Ivey和Daniel Negreanu沒有堅持到最後，但他們仍有多次機會贏得今年的第二枚金手鍊，因為賽程中還有幾場賽事。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/10-BLiP2UB-.png",
        alt: "ST Wang"
      },
      {
        type: "heading",
        content: "ST Wang Takes Over the Torch",
        content_cn: "ST Wang接过火炬",
        content_tw: "ST Wang接過火炬"
      },
      {
        type: "paragraph",
        content: "Despite the early exits of players like Biao Ding and Elton Tsang, ST Wang has taken up the mantle for the Chinese players and advanced with the hopes of many. At the end of Day 2, ST Wang qualified for the next round with a chip stack of 1,000,000. While he holds the smallest stack among the remaining players, poker is unpredictable, and anything can happen. We wish him the best of luck in making an incredible comeback.",
        content_cn: "尽管丁彪和Elton Tsang等选手早早出局，但ST Wang为中国选手扛起了大旗，带着许多人的希望晋级。第二天结束时，ST Wang以1,000,000的筹码量晋级下一轮。虽然他在剩余选手中筹码量最少，但扑克是不可预测的，任何事情都可能发生。我们祝他好运，实现令人难以置信的逆转。",
        content_tw: "儘管丁彪和Elton Tsang等選手早早出局，但ST Wang為中國選手扛起了大旗，帶著許多人的希望晉級。第二天結束時，ST Wang以1,000,000的籌碼量晉級下一輪。雖然他在剩餘選手中籌碼量最少，但撲克是不可預測的，任何事情都可能發生。我們祝他好運，實現令人難以置信的逆轉。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new8/11-BdEfteIY.png",
        alt: "ST Wang Chip Count"
      },
      {
        type: "paragraph",
        content: "The remaining 14 players will return for the final showdown at 12:00 PM local time on December 9 to compete for the title in this historic event.",
        content_cn: "剩余的14名选手将在12月9日当地时间下午12:00返回进行最后对决，争夺这一历史性赛事的冠军。",
        content_tw: "剩餘的14名選手將在12月9日當地時間下午12:00返回進行最後對決，爭奪這一歷史性賽事的冠軍。"
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
  "china-boxin-jin-claims-maiden-apt-title-freezeout": {
    heroImage: "/image/news/details-news/new16/1-CYdDSjTl.png",
    sections: [
      {
        type: "paragraph",
        content: "JEJU, SOUTH KOREA, April 26, 2024 – Welcome to the APT Jeju 2024, with the action-packed 10-day festival featuring 91 events (including satellites) with the series proper comprising a substantial 86 Trophy Events and boasting over KRW 5 billion (~USD 3.7M) in prize pool guarantees. Running April 26 to May 5 in partnership with Landing Entertainment Korea (LEK) the series is playing out at the luxurious Jeju Shinhwa Resort. While this will be the fourth time the APT has visited Jeju, this marks the first visit of the new era following a seven-year hiatus, with Japan's Katsuhiro Muto the last APT Jeju Main Event champion crowned back in March 2017. The new era prize pools are over twenty times larger, with the APT Main Event running from April 26 to May 4 and coming with a sizable KRW 2 billion (~USD 1.5 million) guarantee. In addition to the guaranteed marquee events, the series boasts daily High Roller tournaments and an assorted poker variants, as well as cash games. Getting underway at 6:30pm local time on April 26th, the KRW 2M Event #11: NL Hold'em – Freezeout saw 25 players enter the action, battling at the baize for eighteen 25-minute levels to win a slice of the KRW 43,650,000 (~USD 31,700) prize pool. Once again, it was a Chinese player taking the tournament top spot with Boxin Jin beating compatriot and Korea National Cup Flight A frontrunner Fei Wang head-up to claim the KRW 18,333,000 (~USD 13,310) top prize, in addition to his maiden APT title.",
        content_cn: "韩国济州，2024年4月26日 – 欢迎来到APT济州2024，这是一个为期10天的精彩赛事，共有91场赛事（包括卫星赛），系列赛包含86场奖杯赛事，奖池保证超50亿韩元（约370万美元）。赛事与Landing Entertainment Korea（LEK）合作，于4月26日至5月5日在豪华的济州神话度假村举行。虽然这是APT第四次访问济州，但这是新时代的第一次访问，在七年中断后，日本的Katsuhiro Muto是2017年3月加冒的最后一位APT济州主赛事冠军。新时代的奖池是以前的20倍以上，APT主赛事于4月26日至5月4日进行，奖池保证高达20亿韩元（约150万美元）。除了保证的重大赛事外，系列赛还有每日豪客赛、各种扑克变体以及现金游戏。4月26日当地时间晚上6:30开始，200万韩元第11场赛事：无限注德州扑克 – Freezeout共有25名选手参赛，争夺43,650,000韩元（约31,700美元）奖池。再次，一位中国选手夺得冠军，金博欣在单挑中击败同胞和韩国国家杯A组领先者王飞，获得18,333,000韩元（约13,310美元）的头奖和他的首个APT冠军。",
        content_tw: "韓國濟州，2024年4月26日 – 歡迎來到APT濟州2024，這是一個為期10天的精彩賽事，共有91場賽事（包括衛星賽），系列賽包含86場獎杯賽事，獎池保證超50億韓元（約370萬美元）。賽事與Landing Entertainment Korea（LEK）合作，於4月26日至5月5日在豪華的濟州神話度假村舉行。雖然這是APT第四次訪問濟州，但這是新時代的第一次訪問，在七年中斷後，日本的Katsuhiro Muto是2017年3月加冒的最後一位APT濟州主賽事冠軍。新時代的獎池是以前的20倍以上，APT主賽事於4月26日至5月4日進行，獎池保證高達20億韓元（約150萬美元）。除了保證的重大賽事外，系列賽還有每日豪客賽、各種撲克變體以及現金遊戲。4月26日當地時間晚上6:30開始，200萬韓元第11場賽事：無限注德州撲克 – Freezeout共有25名選手參賽，爭奪43,650,000韓元（約31,700美元）獎池。再次，一位中國選手奪得冠軍，金博欣在單挑中擊敗同胞和韓國國家盃A組領先者王飛，獲得18,333,000韓元（約13,310美元）的頭獎和他的首個APT冠軍。"
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
  "china-jin-boxin-bests-jeju-dragon-quest-field": {
    heroImage: "/image/news/details-news/new17/1-1-en-BQkgythn.png",
    sections: [
      {
        type: "paragraph",
        content: "Exciting Recap: WPT Korea Jeju Dragon Quest Day 1A and Day 1B Highlights!",
        content_cn: "精彩回顾：WPT韩国济州龙之探索第1A天和第1B天精彩集锦！",
        content_tw: "精彩回顧：WPT韓國濟州龍之探索第1A天和第1B天精彩集錦！"
      },
      {
        type: "video",
        src: "/image/news/details-news/new17/AA22.mp4",
        alt: "WPT Korea Jeju Dragon Quest Highlights Video"
      },
      {
        type: "paragraph",
        content: "Jin Boxin has emerged as the latest JEJU Dragon Quest Champion at WPT Korea! In addition to winning a WPT Trophy and a side event Champion Ring, Jin Boxin bested a field of 276 players to take home KRW 47,770,000 in prize money. He agreed to split the winnings with Li Zhongxian, ensuring each received KRW 47,770,000.",
        content_cn: "金博欣成为WPT韩国最新的济州龙之探索冠军！除了赢得WPT奖杯和边赛冠军戒指外，金博欣击败了276名选手，带走了47,770,000韩元的奖金。他同意与李中贤分奖，确保每人获得47,770,000韩元。",
        content_tw: "金博欣成為WPT韓國最新的濟州龍之探索冠軍！除了贏得WPT獎杯和邊賽冠軍戒指外，金博欣擊敗了276名選手，帶走了47,770,000韓元的獎金。他同意與李中賢分獎，確保每人獲得47,770,000韓元。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new17/2-2zHN3ItS.png",
        alt: "Jin Boxin Champion"
      },
      {
        type: "paragraph",
        content: "Date/s: March 27-28, 2024 Buy-in: KRW 1,100,000 (~USD 810) Prize pool: KRW 265,043,000 (~USD 197,130) Entries: 276 (188 unique) ITM: 36 players Event #5: Jeju Dragon Quest – Final Table Results",
        content_cn: "日期：2024年3月27-28日 买入：1,100,000韩元（约810美元） 奖池：265,043,000韩元（约197,130美元） 参赛人数：276（188个独立参赛） 奖金圈：36人 第5场赛事：济州龙之探索 – 决赛桌结果",
        content_tw: "日期：2024年3月27-28日 買入：1,100,000韓元（約810美元） 獎池：265,043,000韓元（約197,130美元） 參賽人數：276（188個獨立參賽） 獎金圈：36人 第5場賽事：濟州龍之探索 – 決賽桌結果"
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
        content_cn: "祝贺AA POKER团队金博欣！",
        content_tw: "祝賀AA POKER團隊金博欣！"
      }
    ]
  },
  "whirlwind-quan-zhou-races-first-triton-title-25k-plo": {
    heroImage: "/image/news/details-news/new18/21-1-C4YZUrOJ.png",
    sections: [
      {
        type: "paragraph",
        content: "The final Saturday of the Triton Super High Roller Series festival in Jeju, South Korea, started with the search for Quan Zhou. It ended with the Chinese player in the most prominent place of all: holding aloft his first Triton winner's trophy.",
        content_cn: "韩国济州Triton超级豪客系列赛的最后一个周六，从寻找周全开始。最终，这位中国选手站在了最显赫的位置：高举他的第一座Triton冠军奖杯。",
        content_tw: "韓國濟州Triton超級豪客系列賽的最後一個週六，從尋找周全開始。最終，這位中國選手站在了最顯赫的位置：高舉他的第一座Triton冠軍獎杯。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-2-jxUPAYCP.png",
        alt: "Quan Zhou at Poker Table"
      },
      {
        type: "paragraph",
        content: "Zhou was the overnight chip leader of the $25K Pot Limit Omaha event here at the Jeju Shinhwa World Landing Resort, but was late to arrive for the tournament room for the 1pm restart of the event. It meant Zhou was missing from the customary pre-final table line-up photo. But no matter. Zhou set about his task today with customary focus and ensured that he was present for the most important photos of the day. Those were the ones featuring Zhou alone, alongside his winner's cap, winning hand, winning chips and that trophy. The $530,000 first prize is also now into his Triton account.",
        content_cn: "周全是济州神话世界Landing度假村这场25,000美元底池限注奥马哈赛事的隔夜筹码领先者，但他在下午1点赛事重新开始时迟到了比赛室。这意味着周全缺席了传统的决赛桌前合影。但没关系。周全今天以一贯的专注投入任务，并确保他出现在当天最重要的照片中。那些是周全独自一人的照片，旁边是他的冠军帽、获胜手牌、获胜筹码和那座奖杯。530,000美元的头奖现在也进入了他的Triton账户。",
        content_tw: "周全是濟州神話世界Landing度假村這場25,000美元底池限注奧馬哈賽事的隔夜籌碼領先者，但他在下午1點賽事重新開始時遲到了比賽室。這意味著周全缺席了傳統的決賽桌前合影。但沒關係。周全今天以一貫的專注投入任務，並確保他出現在當天最重要的照片中。那些是周全獨自一人的照片，旁邊是他的冠軍帽、獲勝手牌、獲勝籌碼和那座獎杯。530,000美元的頭獎現在也進入了他的Triton賬戶。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new18/21-3-CJ43Cp5_.png",
        alt: "Quan Zhou Victory Celebration"
      },
      {
        type: "paragraph",
        content: "This 39-year-old has come close to a Triton victory before, most notably when he was beaten heads-up in a PLO event in Monte Carlo last year. But this time he was not to be denied and blazed through the final day in a little more than four hours. He despatched his final challenger, Canada's Matthew Wood, on the first hand of head-up play. It ensured his first cash in Jeju came with a \"1st place\" notice beside it. He has staked a real claim as the man to beat in these PLO events, and confirmed that he's here to stay. 'I'm very happy with the win,' Zhou said, through an interpreter, as he began his celebrations. 'I have been looking forward to this title because there are a lot of strong competitors on the Triton Series.' He added: 'I played a lot of the no limit events and didn't cash, so there was a bit of pressure on me. But fortunately I have a lot of support from friends that keeps me going. Some of my friends came here to support me. Winning this title has helped me to relieve the pressure. It's a confidence boost.'",
        content_cn: "这位39岁的选手之前已经接近Triton胜利，最著名的是去年在蒙特卡洛的PLO赛事中单挑失利。但这次他不会再被拒之门外，在四个多小时内风驰电掌般完成了最后一天的比赛。他在单挑的第一手就击败了最后的挑战者、加拿大的Matthew Wood。这确保了他在济州的第一次奖金旁边有一个『第一名』的标注。他已经真正奠定了自己作为这些PLO赛事中需要击败的人的地位，并证明了他会继续留下来。『我对这次胜利非常高兴，』周全通过翻译在开始庆祝时说。『我一直期待这个冠军，因为Triton系列赛有很多强大的竞争对手。』他补充说：『我参加了很多无限注赛事但没有获得奖金，所以我有一些压力。但幸运的是，我有很多朋友的支持让我继续前进。我的一些朋友来这里支持我。赢得这个冠军帮助我缓解了压力。这是信心的提升。』",
        content_tw: "這位39歲的選手之前已經接近Triton勝利，最著名的是去年在蒙特卡洛的PLO賽事中單挑失利。但這次他不會再被拒之門外，在四個多小時內風馳電掌般完成了最後一天的比賽。他在單挑的第一手就擊敗了最後的挑戰者、加拿大的Matthew Wood。這確保了他在濟州的第一次獎金旁邊有一個『第一名』的標注。他已經真正奠定了自己作為這些PLO賽事中需要擊敗的人的地位，並證明了他會繼續留下來。『我對這次勝利非常高興，』周全通過翻譯在開始慶祝時說。『我一直期待這個冠軍，因為Triton系列賽有很多強大的競爭對手。』他補充說：『我參加了很多無限注賽事但沒有獲得獎金，所以我有一些壓力。但幸運的是，我有很多朋友的支持讓我繼續前進。我的一些朋友來這裡支持我。贏得這個冠軍幫助我緩解了壓力。這是信心的提升。』"
      }
    ]
  },
  "quan-zhou-runner-up-ept-paris-mystery-bounty": {
    heroImage: "/image/news/details-news/new19/20-1-BN6KnOwy.png",
    sections: [
      {
        type: "paragraph",
        content: "Paris is the City of Light, and today at the 2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty, the light shined brightest on Duco ten Haven.",
        content_cn: "巴黎是光之城，今天在2024年PokerStars欧洲扑克巡回赛巴黎站€10,200神秘赏金赛上，Duco ten Haven成为最耀眼的明星。",
        content_tw: "巴黎是光之城，今天在2024年PokerStars歐洲撲克巡迴賽巴黎站€10,200神秘賞金賽上，Duco ten Haven成為最耀眼的明星。"
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
        content: "The most heinous cheater in history is actually the WSOP Main Event Champion! Everyone despises cheaters, especially poker players. Nowadays, with the more popularity of poker all over the world, more questions have emerged, such as various cheating behaviors. There are some just as little thieves, but some are robbers with insatiable desires. Today, let's meet the most despicable, greedy, and famous cheater in history. You can hardly imagine how nasty he is! He has stolen over $20 million from players through cheating, without returning anything to the players or spending a day in jail. He is the former American professional player, Russ Hamilton.",
        content_cn: "历史上最可恶的作弊者竟然是WSOP主赛事冠军！每个人都鄙视作弊者，尤其是扑克选手。如今，随着扑克在全球的普及，更多的问题浮现，如各种作弊行为。有些只是小偷，但有些是贪得无厌的强盗。今天，让我们来认识历史上最卑鄙、最贪婪、最臭名昭著的作弊者。你很难想象他有多丑恶！他通过作弊从选手那里窃取了超2000万美元，既没有返还给选手，也没有坐过一天牢。他就是前美国职业选手Russ Hamilton。",
        content_tw: "歷史上最可惡的作弊者竟然是WSOP主賽事冠軍！每個人都鄙視作弊者，尤其是撲克選手。如今，隨著撲克在全球的普及，更多的問題浮現，如各種作弊行為。有些只是小偷，但有些是貪得無厭的強盜。今天，讓我們來認識歷史上最卑鄙、最貪婪、最臭名昭著的作弊者。你很難想象他有多醜惡！他通過作弊從選手那裡竊取了超2000萬美元，既沒有返還給選手，也沒有坐過一天牢。他就是前美國職業選手Russ Hamilton。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-1-QUAkBGe1.png",
        alt: "Russ Hamilton"
      },
      {
        type: "paragraph",
        content: "He was the 1994 World Series of Poker main event champion, defeating Hugh Vincent in heads-up play to win $1 million in first prize money as well as his body weight in silver. He was a bona fide poker pro. Instead of leaving a legacy, he chose infamy. During the online poker craze of the early 2000s, he launched his Ultimate Bet, the world's first online poker site named 'POTRIPPER,' which could directly see players' hole cards. This 'simple and easy' method enabled him to effortlessly steal over $20 million from other players between January 2005 and December 2007. After his misdeeds were exposed, Hamilton vehemently denied his crimes. Although being blacklisted by the poker community, he still faced no any punishment. Now, with the rapid development of AI technology, cheating methods have also evolved. Safeguarding the legitimate rights and interests of our poker players and creating a fair and fun gaming environment have become the top priorities for every poker platform operator.",
        content_cn: "他是1994年世界扑克系列赛主赛事冠军，在单挑中击败Hugh Vincent，赢得100万美元头奖以及与他体重相等的银子。他是一位真正的扑克职业选手。但他没有留下传奇，而是选择了臭名昭著。21世纪初的在线扑克热潮期间，他创建了Ultimate Bet，世界上第一个名为『POTRIPPER』的在线扑克网站，可以直接看到选手的底牌。这种『简单易行』的方法使他在2005年1月至2007年12月期间轻松从其他选手那里窃取了超2000万美元。在他的丑行暴露后，Hamilton极力否认他的罪行。尽管被扑克界列入黑名单，他仍然没有受到任何惩罚。现在，随着AI技术的快速发展，作弊方法也在不断演变。保护我们扑克选手的合法权益，创造一个公平有趣的游戏环境，已成为每个扑克平台运营商的首要任务。",
        content_tw: "他是1994年世界撲克系列賽主賽事冠軍，在單挑中擊敗Hugh Vincent，贏得100萬美元頭獎以及與他體重相等的銀子。他是一位真正的撲克職業選手。但他沒有留下傳奇，而是選擇了臭名昭著。21世紀初的在線撲克熱潮期間，他創建了Ultimate Bet，世界上第一個名為『POTRIPPER』的在線撲克網站，可以直接看到選手的底牌。這種『簡單易行』的方法使他在2005年1月至2007年12月期間輕鬆從其他選手那裡竊取了超2000萬美元。在他的醜行暴露後，Hamilton極力否認他的罪行。儘管被撲克界列入黑名單，他仍然沒有受到任何懲罰。現在，隨著AI技術的快速發展，作弊方法也在不斷演變。保護我們撲克選手的合法權益，創造一個公平有趣的遊戲環境，已成為每個撲克平台運營商的首要任務。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new20/19-2-en-Do2Dc4Us.png",
        alt: "AA Poker Honest Game"
      },
      {
        type: "paragraph",
        content: "So recently, AApoker has had all better hope that the profession can get its act together, creating a fair gaming environment for our players. We aim to eradicate all cheating behaviors and safeguard regular players! In order to create a fair tournament environment, improve gaming quality, establish industry standards, and combat any forms of collusion and cheating, AApoker has made the following technological enhancements for players:",
        content_cn: "因此，AApoker最近希望行业能够行动起来，为我们的选手创造一个公平的游戏环境。我们的目标是根除所有作弊行为，保护普通选手！为了创造公平的比赛环境、提升游戏质量、建立行业标准、打击任何形式的串谋和作弊，AApoker为选手进行了以下技术升级：",
        content_tw: "因此，AApoker最近希望行業能夠行動起來，為我們的選手創造一個公平的遊戲環境。我們的目標是根除所有作弊行為，保護普通選手！為了創造公平的比賽環境、提升遊戲質量、建立行業標準、打擊任何形式的串謀和作弊，AApoker為選手進行了以下技術升級："
      },
      {
        type: "paragraph",
        content: "For Players",
        content_cn: "为选手提供：",
        content_tw: "為選手提供："
      },
      {
        type: "paragraph",
        content: "1.Online table function 2. Face liveness detection",
        content_cn: "1.在线桌功能 2.人脸活体检测",
        content_tw: "1.在線桌功能 2.人臉活體檢測"
      },
      {
        type: "paragraph",
        content: "AApoker System Protection:",
        content_cn: "AApoker系统保护：",
        content_tw: "AApoker系統保護："
      },
      {
        type: "paragraph",
        content: "1. Automatic scanning and detection of IP address. 2. Big data detection of real location. 3. Automatic detection of AI bot cheaters. Prohibition of wormhole attacks. 5. Data protection: Use of blockchain technology AES256 encryption, making data interception and decryption impossible midway. AApoker attaches great importance to anti-cheating work this time. AA POKER always adheres to the spirit of fair and just game competition, has zero tolerance for cheating, protects the game rights of every player, and allows players to enjoy healthy, fair and fun poker games. Although combating cheating may seem like an arduous task, with the joint efforts of the professions, victory this time is inevitable!",
        content_cn: "1.自动扫描和检测IP地址。 2.大数据检测真实位置。 3.自动检测AI机器人作弊者。 4.禁止虫洞攻击。 5.数据保护：使用区块链技术AES256加密，使数据在中途无法被截取和解密。AApoker非常重视这次的反作弊工作。AA POKER始终坚持公平公正的游戏竞技精神，对作弊零容忍，保护每个选手的游戏权利，让选手享受健康、公平、有趣的扑克游戏。虽然打击作弊可能看起来是一项艰巨的任务，但在行业的共同努力下，这次的胜利是必然的！",
        content_tw: "1.自動掃描和檢測IP地址。 2.大數據檢測真實位置。 3.自動檢測AI機器人作弊者。 4.禁止蟲洞攻擊。 5.數據保護：使用區塊鏈技術AES256加密，使數據在中途無法被截取和解密。AApoker非常重視這次的反作弊工作。AA POKER始終堅持公平公正的遊戲競技精神，對作弊零容忍，保護每個選手的遊戲權利，讓選手享受健康、公平、有趣的撲克遊戲。雖然打擊作弊可能看起來是一項艱鉅的任務，但在行業的共同努力下，這次的勝利是必然的！"
      }
    ]
  },
  "king-quan-zhou-becoming-aa-poker-global-ambassador": {
    heroImage: "/image/news/details-news/new21/18-1-en-p-9TvWXH.png",
    sections: [
      {
        type: "heading",
        content: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador",
        content_cn: "“周王”周全成为AA POKER全球赛事大使",
        content_tw: "「周王」周全成為AA POKER全球賽事大使"
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
        content_cn: "WESLEY-AA POKER新品牌大使",
        content_tw: "WESLEY-AA POKER新品牌大使"
      },
      {
        type: "paragraph",
        content: "Congratulations! Wesley become one of the global brand ambassadors for a well-known poker brand, AAPoker! For Wesley, who entered the poker field just two years ago, this good news is undoubtedly industry recognition and an acknowledgment of his growing influence. 2023 was a thrilling year for Wesley. But this cooperation with AAPoker marks a satisfying conclusion to the 'turbulent' 2023 and also sets the stage for a promising start in 2024.",
        content_cn: "祝贺！Wesley成为知名扑克品牌AAPoker的全球品牌大使之一！对于两年前才进入扑克领域的Wesley来说，这个好消息无疑是行业的认可和对他日益增长的影响力的肯定。对Wesley来说，2023年是惊心动魄的一年。但与AAPoker的合作标志着“动荡”的2023年圆满结束，也为2024年的良好开端奠定了基础。",
        content_tw: "祝賀！Wesley成為知名撲克品牌AAPoker的全球品牌大使之一！對於兩年前才進入撲克領域的Wesley來說，這個好消息無疑是行業的認可和對他日益增長的影響力的肯定。對Wesley來說，2023年是驚心動魄的一年。但與AAPoker的合作標誌著「動盪」的2023年圓滿結束，也為2024年的良好開端奠定了基礎。"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-1-im51ScEu.png",
        alt: "Wesley AA Poker Ambassador"
      },
      {
        type: "paragraph",
        content: "As we all know, most Chinese poker players tend to be modest, because of their personalities and the environments where they are. However, Wesley, who grew up on the other side of the globe, is different. He isn't bound by rules and regulations. Since entering the 'poker world' after making a name for himself in the cryptocurrency sphere, he has embraced a 'high-profile' approach—appearing on popular shows, engaging in high-stakes poker games, and indulging in various forms of 'flaunting wealth.' This unconventional style has naturally polarized public opinion. Some people said he was too ostentatious. However, as 2023 comes to a close, we seem to witness a true Wesley. He seems to be a warrior with an inherent sense of never giving up. On the American poker stage, he bravely showcases a different image of a Chinese poker player, contributing to a unique form of cultural export through his actions and words.",
        content_cn: "众所周知，大多数中国扑克选手由于他们的性格和所处的环境，往往比较谦虚。然而，在地球另一端长大的Wesley则不同。他不受规则和条例的束缚。自从在加密货币领域成名后进入“扑克世界”，他就采取了“高调”的方式——出现在热门节目中、参与高额扑克游戏、并以各种形式“炙富”。这种非常规的风格自然引起了公众的两极化看法。有人说他太招摇了。然而，随着2023年接近尾声，我们似乎见证了真正的Wesley。他似乎是一个具有不屈不挠精神的战士。在美国扑克舞台上，他勇敢地展现了中国扑克选手的不同形象，通过他的行动和言语为一种独特的文化输出做出了贡献。",
        content_tw: "眾所周知，大多數中國撲克選手由於他們的性格和所處的環境，往往比較謙虛。然而，在地球另一端長大的Wesley則不同。他不受規則和條例的束縚。自從在加密貨幣領域成名後進入「撲克世界」，他就採取了「高調」的方式——出現在熱門節目中、參與高額撲克遊戲、並以各種形式「炙富」。這種非常規的風格自然引起了公眾的兩極化看法。有人說他太招搖了。然而，隨着2023年接近尾聲，我們似乎見證了真正的Wesley。他似乎是一個具有不屈不撓精神的戰士。在美國撲克舞台上，他勇敢地展現了中國撲克選手的不同形象，通過他的行動和言語為一種獨特的文化輸出做出了貢獻。"
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
        content_cn: "Wesley通过Hustler的百万美元现金游戏将自己的名字载入史册。在与Tom Dwan的对决中，他首先输了310万美元，这是电视扑克历史上最大的底池。但随后，他赢了另一个220万美元的巨大底池，这是电视扑克历史上第二大的底池。在这场比赛的巨大波动中，我们也可以从 Wesley的脸上看到真实的紧张。然而，似乎被忽略的是他坐在那张桌子上与顶级专业人士对决的勇气。当时，他进入这个行业才一年多，他没有出售他的份额，而是用自己的钱来挑战美国职业扑克的精英。",
        content_tw: "Wesley通過Hustler的百萬美元現金遊戲將自己的名字載入史冊。在與Tom Dwan的對決中，他首先輸了310萬美元，這是電視撲克歷史上最大的底池。但隨後，他贏了另一個220萬美元的巨大底池，這是電視撲克歷史上第二大的底池。在這場比賽的巨大波動中，我們也可以從Wesley的臉上看到真實的緊張。然而，似乎被忽略的是他坐在那張桌子上與頂級專業人士對決的勇氣。當時，他進入這個行業才一年多，他沒有出售他的份額，而是用自己的錢來挑戰美國職業撲克的精英。"
      },
      {
        type: "heading",
        content: "Bravely reporting international cheating syndicate illegal behavior",
        content_cn: "勇敢揭露国际作弊集团的违法行为",
        content_tw: "勇敢揭露國際作弊集團的違法行為"
      },
      {
        type: "image",
        src: "/image/news/details-news/new22/new17-3-CGcibsTz.png",
        alt: "Wesley Reporting Cheating"
      },
      {
        type: "paragraph",
        content: "The details of this incident are well-known. Wesley and his friends were deceived out of $4.1 million by Mars and an international cheating syndicate. After discovering the fraud, Wesley chose to expose it, although he was faced with personal threats. It's worth mentioning that this international cheating syndicate has existed for a long time, but no one has ever stepped forward online to expose them. Wesley was the first to bravely confront them, his act of justice exposing the fraudsters and purging the industry of its evil. Hope we live in a world without thieves!",
        content_cn: "这个事件的细节大家都知道。Wesley和他的朋友们被Mars和一个国际作弊集团骗了410万美元。发现欺诈后，尽管面临人身威胁，Wesley还是选择了揭露。值得一提的是，这个国际作弊集团已经存在很长时间了，但从来没有人在网上站出来揭露他们。Wesley是第一个勇敢面对他们的人，他的正义行为揭露了骗子，清除了行业的邪恶。希望我们生活在一个没有小偷的世界！",
        content_tw: "這個事件的細節大家都知道。Wesley和他的朋友們被Mars和一個國際作弊集團騙了410萬美元。發現欺詐後，儘管面臨人身威脅，Wesley還是選擇了揭露。值得一提的是，這個國際作弊集團已經存在很長時間了，但從來沒有人在網上站出來揭露他們。Wesley是第一個勇敢面對他們的人，他的正義行為揭露了騙子，清除了行業的邪惡。希望我們生活在一個沒有小偷的世界！"
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
  content_cn?: string;
  content_tw?: string;
  src?: string;
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
  heroImage: string;
  sections: ArticleSection[];
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
            {article.date}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative w-full overflow-hidden mb-10 flex justify-center"
        >
          <img
            src={content?.heroImage || article.image}
            alt={article.title}
            className="max-w-[90%] md:max-w-[80%] h-auto object-contain rounded-lg"
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
                  return (
                    <div key={index} className="relative w-full overflow-hidden my-8 flex justify-center">
                      <img
                        src={section.src!}
                        alt={section.alt!}
                        className="max-w-[85%] md:max-w-[75%] h-auto object-contain rounded-lg"
                      />
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
