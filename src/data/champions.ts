// Champions data with all information for detail pages
export interface ChampionEvent {
  name: string;
  region: string;
  date: string;
  rank: string;
  prize: string;
}

export interface Champion {
  id: number;
  slug: string;
  // name: string;
  country: string;
  // countryFlag: string;
  image: string;
  bannerImage: string;
  totalLiveEarnings: string;
  bestLiveCash: string;
  allTimeMoneyList: string;
  globalPokerIndexRanking: string;
  introduction: string[];
  introduction_cn?: string[];
  introduction_tw?: string[];
  playersHighlights?: string[];
  socialLinks?: {
    youtube?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  events?: ChampionEvent[];
}

// First row - 4 main champions
export const mainChampions: Champion[] = [
  {
    id: 1,
    slug: "bryn-kenney",
    // name: "BRYN KENNEY",
    country: "USA",
    // countryFlag: "🇺🇸",
    image: "/image/champions/body/BrynKenney-DJlFW8MS.png",
    bannerImage: "/image/champions/introduction/BrynKenney-banner-CFoVCSzd.png",
    totalLiveEarnings: "$74,056,233",
    bestLiveCash: "$20,563,324",
    allTimeMoneyList: "1st",
    globalPokerIndexRanking: "105",
    introduction: [
      "After competing in the summer's 2023 WSOP, Kenney appeared at the Triton London event. This time he entered as an AApoker sponsored player, and after mopping up the first few tournaments, he finally won Event #9 in a big way to claim his 3rd career Triton trophy.",
      "It's possible that AApoker's sponsorship gave Kenney a boost, as he had 5A play in the tournament, always getting the cards he needed at just the right time, with unrivalled skill and luck.",
      "The final singles match was between Kenney and British businessman and Triton Vietnam main event winner Talal Shakerchi, and the final hand saw the two go all in, with Kenney's 9♠8♠ against Shakerchi's A♠K♠, and Kenney was lucky enough to hit the 8 on the flopped circle and hold the advantage until the end.",
      "For winning this event, Kenney collected $6.86 million in prize money, bringing his career total to $65.03 million, and once again surpassing Justin Bonomo for the top spot on the all-time money list."
    ],
    introduction_cn: [
      "在参加完2023年夏季WSOP后，Kenney出现在Triton伦敦赛事上。这次他以AApoker赞助选手的身份参赛，在前几场比赛中表现出色后，最终以绝对优势赢得了第9场赛事，获得了他职业生涯第3座Triton奖杯。",
      "AApoker的赞助可能给了Kenney一些助力，因为他在比赛中打出了5A级别的表现，总是在关键时刻拿到需要的牌，展现了无与伦比的技术和运气。",
      "决赛单挑是在Kenney和英国商人、Triton越南主赛冠军Talal Shakerchi之间进行的。最后一手牌两人全押，Kenney的9♠8♠对阵Shakerchi的A♠K♠，Kenney幸运地在翻牌圈击中8并保持优势直到最后。",
      "凭借这场胜利，Kenney获得了686万美元奖金，使他的职业生涯总奖金达到6503万美元，再次超越Justin Bonomo登上历史奖金榜首位。"
    ],
    introduction_tw: [
      "在參加完2023年夏季WSOP後，Kenney出現在Triton倫敦賽事上。這次他以AApoker贊助選手的身份參賽，在前幾場比賽中表現出色後，最終以絕對優勢贏得了第9場賽事，獲得了他職業生涯第3座Triton獎盃。",
      "AApoker的贊助可能給了Kenney一些助力，因為他在比賽中打出了5A級別的表現，總是在關鍵時刻拿到需要的牌，展現了無與倫比的技術和運氣。",
      "決賽單挑是在Kenney和英國商人、Triton越南主賽冠軍Talal Shakerchi之間進行的。最後一手牌兩人全押，Kenney的9♠8♠對陣Shakerchi的A♠K♠，Kenney幸運地在翻牌圈擊中8並保持優勢直到最後。",
      "憑藉這場勝利，Kenney獲得了686萬美元獎金，使他的職業生涯總獎金達到6503萬美元，再次超越Justin Bonomo登上歷史獎金榜首位。"
    ],
    playersHighlights: [
      "https://www.youtube.com/shorts/i5JFhTjSBhs",
      "https://www.youtube.com/shorts/y1V81Q4fMUU"
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/brynkenney/"
    },
    events: [
      {
        name: "Triton Poker Series London 2023 - Event #9 $250k NLH Luxon Invitational - FINAL TABLE",
        region: "London",
        date: "August 5, 2023",
        rank: "Champion",
        prize: "$6,860,000"
      }
    ]
  },
  {
    id: 2,
    slug: "jungleman",
    // name: "JUNGLEMAN",
    country: "USA",
    // countryFlag: "🇺🇸",
    image: "/image/champions/body/JUAGLEMAN-C_6QD3Je.png",
    bannerImage: "/image/champions/introduction/JUNGLEMAN-banner-BuKoX22Z.png",
    totalLiveEarnings: "$14,184,047",
    bestLiveCash: "$1,940,000",
    allTimeMoneyList: "86th",
    globalPokerIndexRanking: "10466",
    introduction: [
      "Daniel 'jungleman' Cates achieved a historic feat at the 2022 World Series of Poker.",
      "The 32-year-old high stakes poker professional successfully defended his title in one of the most prestigious tournaments in the game: the $50,000 buy-in Poker Players Championship nine-game mix. In 2021, Cates topped a field of just 63 entries in the tough mixed game tournament to earn his first-ever WSOP bracelet. Just 239 days later (as year of 2020's series was held in the fall as a one-off schedule change due to the pandemic) Cates came out on top of a 112-player field to earn his second career bracelet and the top prize of $1,449,103.",
      "Cates, who is best known for his high-stakes cash game success both online and in the live arena, now also has nearly $11.7 million in career tournament earnings to his name."
    ],
    introduction_cn: [
      "Daniel 'jungleman' Cates在2022年世界扑克系列赛上创造了历史性壮举。",
      "这位32岁的高额现金游戏职业选手在游戏中最负盛名的比赛之一成功卫冕：50,000美元买入的扑克玩家锦标赛九项混合赛。2021年，Cates在艰难的混合游戏比赛中击败了仅63名参赛者，赢得了他的第一条WSOP金手链。仅仅239天后（由于疫情，2020年的系列赛在秋季举行，作为一次性的赛程调整），Cates在112人的参赛阵容中脱颖而出，赢得了他职业生涯第二条金手链和1,449,103美元的头奖。",
      "Cates以其在线上和线下高额现金游戏中的成功而闻名，现在他的职业比赛奖金也接近1170万美元。"
    ],
    introduction_tw: [
      "Daniel 'jungleman' Cates在2022年世界撲克系列賽上創造了歷史性壯舉。",
      "這位32歲的高額現金遊戲職業選手在遊戲中最負盛名的比賽之一成功衛冕：50,000美元買入的撲克玩家錦標賽九項混合賽。2021年，Cates在艱難的混合遊戲比賽中擊敗了僅63名參賽者，贏得了他的第一條WSOP金手鏈。僅僅239天後（由於疫情，2020年的系列賽在秋季舉行，作為一次性的賽程調整），Cates在112人的參賽陣容中脫穎而出，贏得了他職業生涯第二條金手鏈和1,449,103美元的頭獎。",
      "Cates以其在線上和線下高額現金遊戲中的成功而聞名，現在他的職業比賽獎金也接近1170萬美元。"
    ],
    playersHighlights: [
      "https://www.youtube.com/watch?v=6tDHS3us0ls"
    ],
    socialLinks: {
      youtube: "#",
      instagram: "#",
      facebook: "#"
    },
    events: [
      {
        name: "Triton Poker Series London 2023 - Event #11 $125k NLH Main Event - Final Table",
        region: "London",
        date: "August 5, 2023",
        rank: "Second Runner-up",
        prize: "$1,940,000"
      }
    ]
  },
  {
    id: 3,
    slug: "joe-hachem",
    // name: "JOE HACHEM",
    country: "Australia",
    // countryFlag: "🇦🇺",
    image: "/image/champions/body/JoeHachem-BzLczcPf.png",
    bannerImage: "/image/champions/introduction/Joe Hachem-banner-DQLgLjwR.png",
    totalLiveEarnings: "$12,986,073",
    bestLiveCash: "$7,500,000",
    allTimeMoneyList: "106th",
    globalPokerIndexRanking: "3,499th",
    introduction: [
      "After surviving from a record-field of 3,835 in the World Poker Tour Championship at Wynn Las Vegas, Joe Hachem found himself in an unenviable cooler situation on the money bubble with 481 players left.",
      "Hachem has always taken pride in his ability to make big laydowns, and even credited that ability with his run to the 2004 WSOP main event title.",
      "Earlier year 2023, Hachem finished runner-up in a WPT Prime event and this summer, he made a deep run in the WSOP main event. The Australian Poker Hall of Famer now has $12.5 million in career tournament earnings."
    ],
    introduction_cn: [
      "在拉斯维加斯永利酒店的世界扑克巡回赛锦标赛中，Joe Hachem从3,835人的破纪录参赛阵容中存活下来，却发现自己在奖金泡沫时陷入了一个令人缡慕的困境，当时还剩481名选手。",
      "Hachem一直以他做出重大弃牌的能力而自豪，甚至将这种能力归功于他在2004年WSOP主赛事冠军的征程。",
      "2023年初，Hachem在WPT Prime赛事中获得亚军，今年夏天，他在WSOP主赛事中走得很远。这位澳大利亚扑克名人堂成员现在的职业比赛奖金达到1250万美元。"
    ],
    introduction_tw: [
      "在拉斯維加斯永利酒店的世界撲克巡迴賽錦標賽中，Joe Hachem從3,835人的破紀錄參賽陣容中存活下來，卻發現自己在獎金泡沫時陷入了一個令人羨慕的困境，當時還剩481名選手。",
      "Hachem一直以他做出重大棄牌的能力而自豪，甚至將這種能力歸功於他在2004年WSOP主賽事冠軍的征程。",
      "2023年初，Hachem在WPT Prime賽事中獲得亞軍，今年夏天，他在WSOP主賽事中走得很遠。這位澳大利亞撲克名人堂成員現在的職業比賽獎金達到1250萬美元。"
    ],
    socialLinks: {},
    events: []
  },
  {
    id: 4,
    slug: "zhou-quan",
    // name: "ZHOU QUAN",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/ZHOU QUAN-CGaTl2V0.png",
    bannerImage: "/image/champions/introduction/zhou quan-banner-BG1c3hYO.png",
    totalLiveEarnings: "$10,835,403",
    bestLiveCash: "$1,165,000",
    allTimeMoneyList: "139th",
    globalPokerIndexRanking: "18",
    introduction: [
      "The first place in the GPI China region in 2017 is one of Zhou Quan's many highlights.",
      "Maybe you think this achievement is a bit far away from now, but it proves that Zhou Quan has been famous for a long time and his performance is stable.",
      "Because in 2020, Zhou Quan won the first place in the GPI world and the first place in POY (Player of the Year) Quan Zhou has won event no. 2 of the 2024 Super High Roller Bowl Series at the Merit Crystal Cove Hotel and Casino in Cyprus.",
      "The Chinese player bested a 39-entry field in the $25,750 buy-in no-limit hold'em tournament to earn $316,000 and his third title of 2024."
    ],
    introduction_cn: [
      "2017年GPI中国区第一名是周全众多亮点之一。",
      "也许你认为这个成就离现在有点远，但这证明了周全成名已久，且表现稳定。",
      "因为在2020年，周全赢得了GPI世界第一和POY（年度最佳选手）第一。周全在塞浦路斯Merit Crystal Cove酒店和赌场赢得了2024年超级高满赛系列赛第2场比赛。",
      "这位中国选手在$25,750买入的无限注德州扑克比赛中击败39人参赛阵容，赢得316,000美元，这是他2024年的第三个冠军。"
    ],
    introduction_tw: [
      "2017年GPI中國區第一名是周全眾多亮點之一。",
      "也許你認為這個成就離現在有點遠，但這證明了周全成名已久，且表現穩定。",
      "因為在2020年，周全贏得了GPI世界第一和POY（年度最佳選手）第一。周全在塞浦路斯Merit Crystal Cove酒店和賭場贏得了2024年超級高滿賽系列賽第2場比賽。",
      "這位中國選手在$25,750買入的無限注德州撲克比賽中擊敥39人參賽陣容，贏得316,000美元，這是他2024年的第三個冠軍。"
    ],
    socialLinks: {
      tiktok: "#"
    },
    events: [
      {
        name: "TLPT $25K International",
        region: "Brisbane",
        date: "October 4, 2024",
        rank: "Champion",
        prize: "$332,250"
      },
      {
        name: "2024 PGT Super High Roller Serie",
        region: "North Cyprus",
        date: "August 14, 2024",
        rank: "Champion",
        prize: ""
      },
      {
        name: "Red Dragon High Roller",
        region: "Jeju Island",
        date: "August 5, 2024",
        rank: "Champion",
        prize: ""
      },
      {
        name: "$25K Pot Limit Omaha Event",
        region: "Jeju Island",
        date: "March 18, 2024",
        rank: "Champion",
        prize: ""
      },
      {
        name: "2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty",
        region: "Paris",
        date: "February 28, 2024",
        rank: "Champion",
        prize: ""
      }
    ]
  }
];

// Second row - 4 more champions
export const secondRowChampions: Champion[] = [
  {
    id: 5,
    slug: "chen-dong",
    // name: "CHEN DONG",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/CHEN DONG-Ca3o-SkM.png",
    bannerImage: "/image/champions/introduction/chen dong-banner-BSyf2rIt.png",
    totalLiveEarnings: "$2,633,139",
    bestLiveCash: "$411,659",
    allTimeMoneyList: "937th",
    globalPokerIndexRanking: "85th",
    introduction: [
      "Chen Dong defeated Thomas Santerne heads-up in the 2023 WSOP $10,000 High Roller tournament to claim the top prize of $411,659 and his first WSOP bracelet.",
      "He had a commanding scoreboard lead over his final three opponents on the final day of play, an advantage he never relinquished en route to the title.",
      "Chen has just over $1 million in career tournament earnings, with his best result before the title being a runner-up finish at the Macau APPT in 2018 for $153,473.",
      "With Chen's win at WSOP, his previous best was nearly tripled."
    ],
    introduction_cn: [
      "陈东在2023年WSOP $10,000高满赛中单挑击败Thomas Santerne，获得411,659美元的头奖和他的第一条WSOP金手链。",
      "在比赛最后一天，他在记分牌上对最后三个对手保持着压倒性的领先优势，这个优势他在夺冠过程中从未放弃。",
      "陈东的职业比赛奖金刚刚超过100万美元，在夺冠之前，他的最佳成绩是2018年在澳门APPT获得亚军，奖金153,473美元。",
      "随着陈东在WSOP的胜利，他之前的最佳成绩几乎翻了三倍。"
    ],
    introduction_tw: [
      "陳東在2023年WSOP $10,000高滿賽中單挑擊敗Thomas Santerne，獲得411,659美元的頭獎和他的第一條WSOP金手鏈。",
      "在比賽最後一天，他在記分牌上對最後三個對手保持著壓倒性的領先優勢，這個優勢他在奪冠過程中從未放棄。",
      "陳東的職業比賽獎金剛剛超過100萬美元，在奪冠之前，他的最佳成績是2018年在澳門APPT獲得亞軍，獎金153,473美元。",
      "隨著陳東在WSOP的勝利，他之前的最佳成績幾乎翻了三倍。"
    ],
    socialLinks: {
      instagram: "#",
      tiktok: "#"
    },
    events: [
      {
        name: "WSOP Paradise Island Event #15 High Roller",
        region: "Bahamas",
        date: "December 12, 2024",
        rank: "10th",
        prize: "$51,080"
      }
    ]
  },
  {
    id: 6,
    slug: "didier-guerin",
    // name: "DIDIER GUERIN",
    country: "Australia",
    // countryFlag: "🇦🇺",
    image: "/image/champions/body/Didier Guerin-DF3FLRdB.png",
    bannerImage: "/image/champions/introduction/Didier Guerin-banner-Bx7y7yNO.png",
    totalLiveEarnings: "$1,127,480",
    bestLiveCash: "$247,329",
    allTimeMoneyList: "2,565th",
    globalPokerIndexRanking: "763",
    introduction: [
      "Didier emerged victorious in the 2023 $2,500 No-Limit Hold'em - High Stakes event, which attracted 120 players, claiming the championship title.",
      "Riding on his success, he continued his strong performance in 2024, securing second place in both the $2,250 + $250 No-Limit Hold'em event and the $9,500 + $500 No-Limit Hold'em - WPT World Championship Warm-Up event in August and September.",
      "With his career on the rise, Didier is sure to shine even brighter in the future."
    ],
    introduction_cn: [
      "Didier在2023年$2,500无限注德州扑克-高额赛事中获胜，该赛事吸引了120名选手，他夺得了冠军头衔。",
      "凭借这次成功，他在2024年继续保持强劲表现，在8月和9月分别在$2,250 + $250无限注德州扑克赛事和$9,500 + $500无限注德州扑克-WPT世界锦标赛热身赛中获得第二名。",
      "随着他的职业生涯不断上升，Didier在未来必将更加耀眼。"
    ],
    introduction_tw: [
      "Didier在2023年$2,500無限注德州撲克-高額賽事中獲勝，該賽事吸引了120名選手，他奪得了冠軍頭銜。",
      "憑藉這次成功，他在2024年繼續保持強勁表現，在8月和9月分別在$2,250 + $250無限注德州撲克賽事和$9,500 + $500無限注德州撲克-WPT世界錦標賽熱身賽中獲得第二名。",
      "隨著他的職業生涯不斷上升，Didier在未來必將更加耀眼。"
    ],
    socialLinks: {
      youtube: "#",
      tiktok: "#"
    },
    events: [
      {
        name: "2023 TLPT High Roller Tournament",
        region: "Sydney",
        date: "October 28, 2023",
        rank: "Champion",
        prize: "$247,329"
      }
    ]
  },
  {
    id: 7,
    slug: "mao-renji",
    // name: "MAO RENJI",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/MAO RENJI-DBIiM2jW.png",
    bannerImage: "/image/champions/introduction/MAO RENJI-banner-EdVegxkH.png",
    totalLiveEarnings: "$1,031,338",
    bestLiveCash: "$402,588",
    allTimeMoneyList: "2,808th",
    globalPokerIndexRanking: "274th",
    introduction: [
      "Renji Mao is a top student who graduated from Fudan University-MIT and won the WSOP gold bracelet champion in 2023.",
      "Mao said in an interview: 'In poker, my goal is not just a gold bracelet, but more importantly, I enjoy the game, work hard to improve myself, become a better player, and become a better person in all aspects. The gold bracelet is only a small part of it, but it is still a great thing for me.'",
      "2023 World Series of Poker—It took one more day than initially scheduled, but Renji Mao eventually emerged victorious in the $800 buy-in no-limit hold'em deepstack event.",
      "The Chinese player topped a field of 4,747 total entries to secure $402,588 and his first gold bracelet. This was Mao's first six-figure live tournament score.",
      "The tournament was slated to last three days, but Mao and bracelet winner Matthew Elsby (2nd – $248,833) had to return for a fourth day to finish their heads-up battle for the title."
    ],
    introduction_cn: [
      "毛仁吉是复旦大学-麻省理工学院毕业的高才生，2023年赢得了WSOP金手链冠军。",
      "毛在采访中说：'在扑克中，我的目标不仅仅是金手链，更重要的是，我享受这个游戏，努力提升自己，成为更好的选手，在各方面成为更好的人。金手链只是其中很小的一部分，但对我来说仍然是一件很棒的事情。'",
      "2023年世界扑克系列赛——比原定时间多用了一天，但毛仁吉最终在$800买入的无限注德州扑克深筹码赛事中获胜。",
      "这位中国选手在总共4,747人的参赛阵容中脱颖而出，获得402,588美元和他的第一条金手链。这是毛的第一次六位数现场比赛奖金。",
      "这场比赛原定为期三天，但毛和金手链得主Matthew Elsby（第2名 – $248,833）不得不在第四天返回完成他们的冠军争夺单挑战。"
    ],
    introduction_tw: [
      "毛仁吉是復旦大學-麻省理工學院畢業的高才生，2023年贏得了WSOP金手鏈冠軍。",
      "毛在採訪中說：'在撲克中，我的目標不僅僅是金手鏈，更重要的是，我享受這個遊戲，努力提升自己，成為更好的選手，在各方面成為更好的人。金手鏈只是其中很小的一部分，但對我來說仍然是一件很棒的事情。'",
      "2023年世界撲克系列賽——比原定時間多用了一天，但毛仁吉最終在$800買入的無限注德州撲克深籌碼賽事中獲勝。",
      "這位中國選手在總共4,747人的參賽陣容中脫穎而出，獲得402,588美元和他的第一條金手鏈。這是毛的第一次六位數現場比賽獎金。",
      "這場比賽原定為期三天，但毛和金手鏈得主Matthew Elsby（第2名 – $248,833）不得不在第四天返回完成他們的冠軍爭奪單挑戰。"
    ],
    socialLinks: {},
    events: []
  },
  {
    id: 8,
    slug: "chen-yisha",
    // name: "CHEN YISHA",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/CHEN YISHA-BtDqOGRz.png",
    bannerImage: "/image/champions/introduction/CHEN YISHA-banner-BiyYqYzf.png",
    totalLiveEarnings: "$856,525",
    bestLiveCash: "$478,000",
    allTimeMoneyList: "3,508th",
    globalPokerIndexRanking: "2,069th",
    introduction: [
      "Patience and courage are indispensable qualities in the game of Texas Hold'em. It is obvious that Yisha is calm and focused in playing this sport that requires strategy and skills, carefully observing her opponents and rationally analyzing the cards.",
      "When faced with important decisions, she can overcome her inner fear and hesitation and make decisions bravely.",
      "In the 2024 TLPT Main Event, Yisha won the third place.",
      "According to the records of The Hendon Mob database, her total career prize money is 850,000 US dollars, but the prize money in 2024 accounts for 740,000 US dollars, and the prize money comes from top international events such as APT, Triton, TLPT, and EPT."
    ],
    introduction_cn: [
      "耐心和勇气是德州扑克游戏中不可或缺的品质。很明显，依沙在这项需要策略和技巧的运动中冷静专注，仔细观察对手并理性分析牌局。",
      "当面临重要决定时，她能够克服内心的恐惧和犹豫，勇敢地做出决定。",
      "在2024年TLPT主赛事中，依沙获得了第三名。",
      "根据The Hendon Mob数据库的记录，她的职业生涯总奖金为85万美元，但2024年的奖金占了74万美元，奖金来自APT、Triton、TLPT和EPT等顶级国际赛事。"
    ],
    introduction_tw: [
      "耐心和勇氣是德州撲克遊戲中不可或缺的品質。很明顯，依沙在這項需要策略和技巧的運動中冷靜專注，仔細觀察對手並理性分析牌局。",
      "當面臨重要決定時，她能夠克服內心的恐懼和猶豫，勇敢地做出決定。",
      "在2024年TLPT主賽事中，依沙獲得了第三名。",
      "根據The Hendon Mob數據庫的記錄，她的職業生涯總獎金為85萬美元，但2024年的獎金佔74萬美元，獎金來自APT、Triton、TLPT和EPT等頂級國際賽事。"
    ],
    socialLinks: {},
    events: []
  }
];

// Third row - remaining champions
export const thirdRowChampions: Champion[] = [
  {
    id: 9,
    slug: "zhu-zheming",
    // name: "ZHU ZHEMING",
    country: "Australia",
    // countryFlag: "🇦🇺",
    image: "/image/champions/body/Zhu Zheming-vHdJ30Nm.png",
    bannerImage: "/image/champions/introduction/Zhu Zheming-banner-DQxF3Lzq.png",
    totalLiveEarnings: "$328,751",
    bestLiveCash: "$176,133",
    allTimeMoneyList: "10,130th",
    globalPokerIndexRanking: "4,129th",
    introduction: [
      "After what has been short, action-packed 8 hours of play today, the WPT Prime Gold Coast Opening Event field of 77 players coming into Day 2 is now down to just nine.",
      "Zheming Zhu emerged to claim the pole position as the tournament chip leader, seeing to the elimination of Shane Thompson, which proved to be a real turning point to set up his stack for the night. With the final knock out of Patrick Barba, Zhu has well and truly set up himself up well with almost four million in chips.",
      "Zhu is followed closely behind by David Luong, amongst some serious contenders on the final table including Anthony Cierco, TuLe, Adrian Pacheco and Brandon Bailey.",
      "Zhu has yet to win a major title, although he has had some success throughout the Australian poker circuit, with three cashes in the WSOP International Circuit events at Star Gold Coast last year including the High Roller and the Main Event."
    ],
    introduction_cn: [
      "经过今天短暂而精彩的8小时比赛，WPT Prime黄金海岸开幕赛的77名选手进入第2天后现在只剩9人。",
      "朱哲明脱颖而出，以比赛筹码领先者的身份占据杆位，淘汰了Shane Thompson，这证明是他当晚建立筹码堆的真正转折点。随着最后淘汰Patrick Barba，朱已经很好地奠定了自己的位置，拥有近400万筹码。",
      "朱紧随其后的是David Luong，以及决赛桌上的一些强劲竞争者，包括Anthony Cierco、TuLe、Adrian Pacheco和Brandon Bailey。",
      "朱尚未赢得重大冠军，尽管他在澳大利亚扑克巡回赛中取得了一些成功，去年在黄金海岸星光赌场的WSOP国际巡回赛事中有三次入钱，包括高满赛和主赛事。"
    ],
    introduction_tw: [
      "經過今天短暫而精彩的8小時比賽，WPT Prime黃金海岸開幕賽的77名選手進入第2天後現在只剩9人。",
      "朱哲明脫穎而出，以比賽籌碼領先者的身份佔據框位，淘汰了Shane Thompson，這證明是他當晚建立籌碼堆的真正轉折點。隨著最後淘汰Patrick Barba，朱已經很好地奠定了自己的位置，擁有近400萬籌碼。",
      "朱緊隨其後的是David Luong，以及決賽桌上的一些強勁競爭者，包括Anthony Cierco、TuLe、Adrian Pacheco和Brandon Bailey。",
      "朱尚未贏得重大冠軍，儘管他在澳大利亞撲克巡迴賽中取得了一些成功，去年在黃金海岸星光賭場的WSOP國際巡迴賽事中有三次入錢，包括高滿賽和主賽事。"
    ],
    socialLinks: {},
    events: [
      {
        name: "WPT Australia $10K World Champs Heads-Up",
        region: "Sydney",
        date: "September 26, 2023",
        rank: "Champion",
        prize: "$176,133"
      }
    ]
  },
  {
    id: 10,
    slug: "xiao-yao",
    // name: "XIAO YAO",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/XIAO YAO-BgRzfE6P.png",
    bannerImage: "/image/champions/introduction/XIAO YAO-banner-Cdnq8ydA.png",
    totalLiveEarnings: "$131,000",
    bestLiveCash: "$131,000",
    allTimeMoneyList: "24,108th",
    globalPokerIndexRanking: "41,406th",
    introduction: [
      "The inaugural 2024 Jin Bei Cup—the winner of the hand Yao Xiao never surrendered the top spot anymore and took down the event in dominating fashion.",
      "For his efforts, he collected a top prize of $131,000 and was overjoyed by the victory.",
      "He is widely known as 'xiaoyao', which means 'happy' in Chinese and Xiao was certainly all smiles after the final hand."
    ],
    introduction_cn: [
      "首届2024年金杯赛——这手牌的胜者小遥再也没有放弃排名第一的位置，以压倒性的方式夺得了赛事。",
      "凭借他的努力，他获得了131,000美元的头奖，并为这次胜利欣喜若狂。",
      "他被广泛称为'小遥'，在中文中意为'快乐'，在最后一手牌后，小遥确实满面笑容。"
    ],
    introduction_tw: [
      "首屆2024年金盃賽——這手牌的勝者小遙再也沒有放棄排名第一的位置，以壓倒性的方式奪得了賽事。",
      "憑藉他的努力，他獲得了131,000美元的頭獎，並為這次勝利欣喜若狂。",
      "他被廣泛稱為'小遙'，在中文中意為'快樂'，在最後一手牌後，小遙確實滿面笑容。"
    ],
    socialLinks: {},
    events: [
      {
        name: "2024 Jin Bei Cup",
        region: "Cambodia",
        date: "May 13, 2024",
        rank: "Champion",
        prize: "$131,000"
      }
    ]
  },
  {
    id: 11,
    slug: "jin-boxin",
    // name: "JIN BOXIN",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/Jin Boxin-CFhRkow-.png",
    bannerImage: "/image/champions/introduction/jin boxin-banner-CNclxK76.png",
    totalLiveEarnings: "$91,500",
    bestLiveCash: "$35,629",
    allTimeMoneyList: "33,114th",
    globalPokerIndexRanking: "6,553th",
    introduction: [
      "The WPT Jeju Dragon Quest event in March of 2024 was a two-day event with a buy-in of KRW 1,100,000 (~$817). Day 1 saw a total of 276 entries, creating a total prize pool of KRW 265,043,000 (~$196,792). On Day 2 all 36 survivors were guaranteed a min-cash of KRW 1,950,000 (~$1,448).",
      "After an exciting final table China's Jin received, besides his first prize of KRW 47,770,000 (~$35,488), a WPT trophy plus a WPT Korea Ring.",
      "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout. Once again, in July of 2024 it was a Chinese player taking the tournament top spot with Boxin Jin besting compatriot and Korea National Cup Flight A frontrunner Fei Wang head-up to claim the KRW 18,333,000 (~USD 13,310) top prize, in addition to his maiden APT title."
    ],
    introduction_cn: [
      "2024年3月的WPT济州龙之探索赛事是一场为期两天的比赛，买入为1,100,000韩元（约817美元）。第1天共有276人参赛，创建了265,043,000韩元（约196,792美元）的总奖池。第2天所36名幸存者都保证获得1,950,000韩元（约1,448美元）的最低奖金。",
      "经过精彩的决赛桌，中国的金除了获得47,770,000韩元（约35,488美元）的头奖外，还获得了WPT奖杯和WPT韩国戒指。",
      "中国的金博欣在第11场赛事：无限注德州扑克-冻结赛中夺得首个APT冠军。2024年7月，又一次是中国选手占据比赛首位，金博欣在单挑中击败了同胞和韩国国家杯第A场领先者王飞，夺得18,333,000韩元（约13,310美元）的头奖，以及他的首个APT冠军。"
    ],
    introduction_tw: [
      "2024年3月的WPT濟州龍之探索賽事是一場為期兩天的比賽，買入為1,100,000韓元（約817美元）。第1天共有276人參賽，創建了265,043,000韓元（約196,792美元）的總獎池。第2天所36名幸存者都保證獲得1,950,000韓元（約1,448美元）的最低獎金。",
      "經過精彩的決賽桌，中國的金除了獲得47,770,000韓元（約35,488美元）的頭獎外，還獲得了WPT獎盃和WPT韓國戒指。",
      "中國的金博欣在第11場賽事：無限注德州撲克-凍結賽中奪得首個APT冠軍。2024年7月，又一次是中國選手佔據比賽首位，金博欣在單挑中擊敗了同胞和韓國國家盃第A場領先者王飛，奪得18,333,000韓元（約13,310美元）的頭獎，以及他的首個APT冠軍。"
    ],
    socialLinks: {},
    events: [
      {
        name: "APT Jeju 2024",
        region: "Jeju Island",
        date: "April 26, 2024",
        rank: "Champion",
        prize: "$13,310"
      },
      {
        name: "WPT Jeju Dragon Quest Flight",
        region: "Jeju Island",
        date: "March 28, 2024",
        rank: "Champion",
        prize: "$35,498"
      }
    ]
  },
  {
    id: 12,
    slug: "yara",
    // name: "YARA",
    country: "China",
    // countryFlag: "🇨🇳",
    image: "/image/champions/body/Yara-tfeKlH3L.png",
    bannerImage: "/image/champions/introduction/YARA-banner-B1kR0aJn.png",
    totalLiveEarnings: "None",
    bestLiveCash: "None",
    allTimeMoneyList: "None",
    globalPokerIndexRanking: "None",
    introduction: [
      "Yara has shown a strong passion for poker from a young age. She is diligent and constantly refining her skills, gradually making a name for herself in major tournaments.",
      "Despite her soft and graceful appearance, Yara's aggressive playstyle has earned her the nickname 'Yara the Destroyer' in the poker streaming show HCL, and her direct and charming personality has helped her gain a large following around the world.",
      "Another key milestone in her career came in 2024, when she became the ambassador for AA POKER. We can't wait to see this rising star continue to shine in the poker world!"
    ],
    introduction_cn: [
      "Yara从小就对扑克表现出强烈的热情。她勤奋努力，不断磨练自己的技能，逐渐在大型比赛中崭露头角。",
      "尽管她外表柔美优雅，但Yara激进的打法为她在扑克直播节目HCL中赢得了'毁灭者Yara'的绰号，她直率而迷人的个性帮助她在世界各地赢得了大量粉丝。",
      "她职业生涯的另一个重要里程碑是在2024年，她成为AA POKER的品牌大使。我们迫不及待地想看到这位崛起之星继续在扑克世界闪耀！"
    ],
    introduction_tw: [
      "Yara從小就對撲克表現出強烈的熱情。她勤奮努力，不斷磨練自己的技能，逐漸在大型比賽中嶄露頭角。",
      "儘管她外表柔美優雅，但Yara激進的打法為她在撲克直播節目HCL中贏得了'毀滅者Yara'的綰號，她直率而迷人的個性幫助她在世界各地贏得了大量粉絲。",
      "她職業生涯的另一個重要里程碑是在2024年，她成為AA POKER的品牌大使。我們迫不及待地想看到這位崛起之星繼續在撲克世界閃耀！"
    ],
    socialLinks: {},
    events: []
  }
];

// All champions combined
export const allChampions: Champion[] = [
  ...mainChampions,
  ...secondRowChampions,
  ...thirdRowChampions
];

// Get champion by slug
export function getChampionBySlug(slug: string): Champion | undefined {
  return allChampions.find(c => c.slug === slug);
}
