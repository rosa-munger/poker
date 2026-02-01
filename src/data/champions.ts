// Champions data with all information for detail pages
export interface ChampionEvent {
  name: string;
  name_cn?: string;
  name_tw?: string;
  region: string;
  region_cn?: string;
  region_tw?: string;
  date: string;
  date_cn?: string;
  date_tw?: string;
  rank: string;
  rank_cn?: string;
  rank_tw?: string;
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
      "在征战完2023年夏天的WSOP后，Kenney出现在了Triton伦敦赛事的现场。这次他以AApoker赞助选手的身份参赛，经过前几场比赛后，终于在第9场赛事中获得了Triton冠军奖杯，这是他职业生涯第3座Triton奖杯。",
      "可能AApoker的赞助给Kenney带来了加持，他在比赛中有着5A级的发挥，总能在适当的时候拿到需要的牌，技术和运气无人可及。",
      "最后的单挑是在Kenney与英国商人Triton越南主赛冠军Talal Shakerchi之间进行，最后一手牌两人全入，Kenney的9♠8♠对阵Shakerchi的A♠K♠，而Kenney在翻牌圈幸运地击中了8，并将优势保持到最后。",
      "凭借这场胜利的夺冠，Kenney收获了686万的奖金，职业生涯总奖金入达到了6503万力，再次超越Justin Bonomo成为历史奖金榜第一人。"
    ],
    introduction_tw: [
      "在征戰完2023年夏天的WSOP後，Kenney出現在了Triton倫敦賽事的現場。這次他以AApoker贊助選手的身份參賽，經過前幾場比賽後，終於在第9場賽事中獲得了Triton冠軍獎杯，這是他職業生涯第3座Triton獎杯。",
      "可能AApoker的贊助給Kenney帶來了加持，他在比賽中有著5A級的發揮，總能在適當的時候拿到需要的牌，技術和運氣無人可及。",
      "最後的單挑是在Kenney與英國商人Triton越南主賽冠軍Talal Shakerchi之間進行，最後一手牌兩人全入，Kenney的9♠8♠對陣Shakerchi的A♠K♠，而Kenney在翻牌圈幸運地擊中了8，並將優勢保持到最後。",
      "憑藉這場勝利的奪冠，Kenney收穫了686萬的獎金，職業生涯總獎金入達到了6503萬力，再次超越Justin Bonomo成為歷史獎金榜第一人。"
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
        name_cn: "传奇扑克系列赛伦敦站2023 - 赛事#9 $250k无限注德州Luxon邀请赛 - 决赛桌",
        name_tw: "傳奇撲克系列賽倫敦站2023 - 賽事#9 $250k無限注德州Luxon邀請賽 - 決賽桌",
        region: "London",
        region_cn: "伦敦",
        region_tw: "倫敦",
        date: "August 5, 2023",
        date_cn: "2023年8月5日",
        date_tw: "2023年8月5日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "Dan 'jungleman' Cates在2022年世界扑克系列赛上创造了历史性就绩。这位32岁的高额扑克玩家选手在扑克赛事中最负盛名的锦标赛之一——中成功卫冠：买入费50,000美元的九场扑克竞赛混合赛。",
      "2021年，Cates在这场艰难的混合游戏锦标赛中击败了仅63名参赛者，赢得了他的第一个WSOP手镲。",
      "仅仅239天后（由于疫情，2020年的系列赛在秋季举行，这是一次性的赛程变更），Cates在112名选手的比赛中脱颖而出，赢得了他职业生涯的第二条手镲周1,449,103美元的最高奖金。",
      "Cates以线上和现场高额现金游戏的成功而闻名，现在他的职业比赛奖金接近1,170万美元。"
    ],
    introduction_tw: [
      "Dan 'jungleman' Cates在2022年世界撲克系列賽上創造了歷史性就績。這位32歲的高額撲克玩家選手在撲克賽事中最負盛名的錦標賽之一——中成功衛冕：買入費50,000美元的九場撲克競賽混合賽。",
      "2021年，Cates在這場艱難的混合遊戲錦標賽中擊敗了僅63名參賽者，贏得了他的第一個WSOP手鐲。",
      "僅僅239天後（由於疫情，2020年的系列賽在秋季舉行，這是一次性的賽程變更），Cates在112名選手的比賽中脫穎而出，贏得了他職業生涯的第二條手鐲和1,449,103美元的最高獎金。",
      "Cates以線上和現場高額現金遊戲的成功而聞名，現在他的職業比賽獎金接近1,170萬美元。"
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
        name_cn: "传奇扑克系列赛伦敦站2023 - 赛事#11 $125k无限注德州主赛事 - 决赛桌",
        name_tw: "傳奇撲克系列賽倫敦站2023 - 賽事#11 $125k無限注德州主賽事 - 決賽桌",
        region: "London",
        region_cn: "伦敦",
        region_tw: "倫敦",
        date: "August 5, 2023",
        date_cn: "2023年8月5日",
        date_tw: "2023年8月5日",
        rank: "Second Runner-up",
        rank_cn: "季军",
        rank_tw: "季軍",
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
      "在永利拉斯加维斯举行的世界扑克巡回赛锦标赛上，Joe Hachem从创纪录的3,835名选手中脱颖而出，随后发现自己陷入了一个令人缡慕的困境，当时还剩481名选手，恰入了泡沫期。",
      "Hachem一直以自己大手笔下注的能力而自豪，甚至将这种能力归功于他在2004年WSOP主赛事中的夺冠。",
      "2023年早些时候，Hachem在WPT Prime赛事中获得亚军，同年夏天，他在WSOP主赛事中走得很远。这位澳大利亚扑克名人堂成员收入自前已达到1250万美元。"
    ],
    introduction_tw: [
      "在永利拉斯加維斯舉行的世界撲克巡迴賽錦標賽上，Joe Hachem從創紀錄的3,835名選手中脫穎而出，隨後發現自己陷入了一個令人羨慕的困境，當時還剩481名選手，恰入了泡沫期。",
      "Hachem一直以自己大手筆下注的能力而自豪，甚至將這種能力歸功於他在2004年WSOP主賽事中的奪冠。",
      "2023年早些時候，Hachem在WPT Prime賽事中獲得亞軍，同年夏天，他在WSOP主賽事中走得很遠。這位澳大利亞撲克名人堂成員收入自前已達到1250萬美元。"
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
      "2017年的GPI中国区第一名，是周全众多高光时刻之一。",
      "也许你会觉得这个成就距现在有些遥远，但这能证明了周全成名已久，而且成绩稳定。因为就在2020年，周全赢得了GPI全球第一名，同时是POY第一名（年度最佳牌手）。",
      "周全在赛浦路斯Merit Crystal Cove酒店和赌场举行的2024年超级豪客杯系列赛第2场比赛中获胜。",
      "这位中国选手手在25,750美元买入的无限注德州扑克赛事中击败了39名参赛者，赢得了316,000美元，这是他2024年的第三个冠军。"
    ],
    introduction_tw: [
      "2017年的GPI中國區第一名，是周全眾多高光時刻之一。",
      "也許你會覺得這個成就距現在有些遙遠，但這能證明了周全成名已久，而且成績穩定。因為就在2020年，周全贏得了GPI全球第一名，同時是POY第一名（年度最佳牌手）。",
      "周全在賽浦路斯Merit Crystal Cove酒店和賭場舉行的2024年超級豪客杯系列賽第2場比賽中獲勝。",
      "這位中國選手手在25,750美元買入的無限注德州撲克賽事中擊敗了39名參賽者，贏得了316,000美元，這是他2024年的第三個冠軍。"
    ],
    socialLinks: {
      tiktok: "#"
    },
    events: [
      {
        name: "TLPT $25K International",
        name_cn: "TLPT $25K国际赛",
        name_tw: "TLPT $25K國際賽",
        region: "Brisbane",
        region_cn: "布里斯班",
        region_tw: "布里斯班",
        date: "October 4, 2024",
        date_cn: "2024年10月4日",
        date_tw: "2024年10月4日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
        prize: "$332,250"
      },
      {
        name: "2024 PGT Super High Roller Serie",
        name_cn: "2024 PGT超级豪客系列赛",
        name_tw: "2024 PGT超級豪客系列賽",
        region: "North Cyprus",
        region_cn: "北塞浦路斯",
        region_tw: "北賽普勒斯",
        date: "August 14, 2024",
        date_cn: "2024年8月14日",
        date_tw: "2024年8月14日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
        prize: ""
      },
      {
        name: "Red Dragon High Roller",
        name_cn: "红龙豪客赛",
        name_tw: "紅龍豪客賽",
        region: "Jeju Island",
        region_cn: "济州岛",
        region_tw: "濟州島",
        date: "August 5, 2024",
        date_cn: "2024年8月5日",
        date_tw: "2024年8月5日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
        prize: ""
      },
      {
        name: "$25K Pot Limit Omaha Event",
        name_cn: "$25K底池限注奥马哈赛事",
        name_tw: "$25K底池限注奧馬哈賽事",
        region: "Jeju Island",
        region_cn: "济州岛",
        region_tw: "濟州島",
        date: "March 18, 2024",
        date_cn: "2024年3月18日",
        date_tw: "2024年3月18日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
        prize: ""
      },
      {
        name: "2024 PokerStars European Poker Tour Paris €10,200 Mystery Bounty",
        name_cn: "2024 PokerStars欧洲扑克巡回赛巴黎站 €10,200神秘赏金赛",
        name_tw: "2024 PokerStars歐洲撲克巡迴賽巴黎站 €10,200神秘賞金賽",
        region: "Paris",
        region_cn: "巴黎",
        region_tw: "巴黎",
        date: "February 28, 2024",
        date_cn: "2024年2月28日",
        date_tw: "2024年2月28日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "陈东在2023年WSOP天堂赛10,000美元豪客赛中单挑中击败了Thomas Santerne，获得了411,659美元的最高奖金和他的第一条WSOP金手链。",
      "陈东在最后一天的比赛中以绝对的记分牌优势在最后三位对手，他在夺冠的道路上从未放弃这一优势。",
      "陈的职业生涯总奖金收入刚超过100万美元，夺冠前的最佳成绩是2018年在澳门APPT获得亚军，奖金为153473美元。随着陈在WSOP天堂赛夺冠，此前的最佳成绩几乎翻了三倍。"
    ],
    introduction_tw: [
      "陳東在2023年WSOP天堂賽10,000美元豪客賽中單挑中擊敗了Thomas Santerne，獲得了411,659美元的最高獎金和他的第一條WSOP金手鏈。",
      "陳東在最後一天的比賽中以絕對的記分牌優勢在最後三位對手，他在奪冠的道路上從未放棄這一優勢。",
      "陳的職業生涯總獎金收入剛超過100萬美元，奪冠前的最佳成績是2018年在澳門APPT獲得亞軍，獎金為153473美元。隨著陳在WSOP天堂賽奪冠，此前的最佳成績幾乎翻了三倍。"
    ],
    socialLinks: {
      instagram: "#",
      tiktok: "#"
    },
    events: [
      {
        name: "WSOP Paradise Island Event #15 High Roller",
        name_cn: "WSOP天堂岛赛事#15 豪客赛",
        name_tw: "WSOP天堂島賽事#15 豪客賽",
        region: "Bahamas",
        region_cn: "巴哈马",
        region_tw: "巴哈馬",
        date: "December 12, 2024",
        date_cn: "2024年12月12日",
        date_tw: "2024年12月12日",
        rank: "10th",
        rank_cn: "第10名",
        rank_tw: "第10名",
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
      "Didier在2023年$2,500无限注德州扑克-高额赛泠120人的比赛中脱颖而出，获得冠军。",
      "在2024年乘胜追击，在8月和9月2,250美元+250无限注德州扑克赛事和9,500美元+500无限注德州扑克-WPT世界锦标赛热身赛中获得第三名的好成绩。",
      "处于事业上升期的他一定会在未来大放异彩。"
    ],
    introduction_tw: [
      "Didier在2023年$2,500無限注德州撲克-高額賽注120人的比賽中脫穎而出，獲得冠軍。",
      "在2024年乘勝追擊，在8月和9月2,250美元+250無限注德州撲克賽事和9,500美元+500無限注德州撲克-WPT世界錦標賽熱身賽中獲得第三名的好成績。",
      "處於事業上升期的他一定會在未來大放異彩。"
    ],
    socialLinks: {
      youtube: "#",
      tiktok: "#"
    },
    events: [
      {
        name: "2023 TLPT High Roller Tournament",
        name_cn: "2023 TLPT豪客锦标赛",
        name_tw: "2023 TLPT豪客錦標賽",
        region: "Sydney",
        region_cn: "悉尼",
        region_tw: "雪梨",
        date: "October 28, 2023",
        date_cn: "2023年10月28日",
        date_tw: "2023年10月28日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "需要集结和技巧的运动中冷静又专注，细腻地观察对手，理智地分析牌局时，她能克服内心的恐惧和犹豫，并勇敢地做出决定。",
      "在2024年TLPT Main Event的比赛中Yisha取得了第三名的佳绩。",
      "根据The Hendon Mob数据库的记录，她的职业生涯总奖金为85万美元，但2024年的奖金就占了74万美元，而奖金全部来自APT、Triton、TLPT、EPT这些国际顶级赛事上。"
    ],
    introduction_tw: [
      "需要集結和技巧的運動中冷靜又專注，細膩地觀察對手，理智地分析牌局時，她能克服內心的恐懼和猶豫，並勇敢地做出決定。",
      "在2024年TLPT Main Event的比賽中Yisha取得了第三名的佳績。",
      "根據The Hendon Mob數據庫的記錄，她的職業生涯總獎金為85萬美元，但2024年的獎金就佔了74萬美元，而獎金全部來自APT、Triton、TLPT、EPT這些國際頂級賽事上。"
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
      "今天，经过了短暂而激烈的8小时比赛，WPT Prime Gold Coast开幕赛第2天的参赛者从77名减少到9名。",
      "Zheming Zhu脱颖而出，赢得领先的筹码领先者的位置，淘汰了Shane Thompson，这成为他当晚堆疊筹码的真正转折点。",
      "随着Patrick Barba的最终淘汰法，Zhu已经以近400万筹码的优势为自己已记录了良好的战绩。紧随其后的是David Luong，决赛桌上还有一些强大的竞争者，包括Anthony Cierco、Tu Le、Adrian Pacheco和Brandon Bailey。",
      "Zhu还没有赢得重大冠军，尽管他在澳洲扑克巡回赛中取得了一些成功，去年他在澳洲黄金海岸星光赌场的WSOP国际巡回赛事中获得了三次奖金，包括高满赛和主赛事。"
    ],
    introduction_tw: [
      "今天，經過了短暫而激烈的8小時比賽，WPT Prime Gold Coast開幕賽第2天的參賽者從77名減少到9名。",
      "Zheming Zhu脫穎而出，贏得領先的籌碼領先者的位置，淘汰了Shane Thompson，這成為他當晚堆疊籌碼的真正轉折點。",
      "隨著Patrick Barba的最終淘汰法，Zhu已經以近400萬籌碼的優勢為自己已記錄了良好的戰績。緊隨其後的是David Luong，決賽桌上還有一些強大的競爭者，包括Anthony Cierco、Tu Le、Adrian Pacheco和Brandon Bailey。",
      "Zhu還沒有贏得重大冠軍，儘管他在澳洲撲克巡迴賽中取得了一些成功，去年他在澳洲黃金海岸星光賭場的WSOP國際巡迴賽事中獲得了三次獎金，包括高滿賽和主賽事。"
    ],
    socialLinks: {},
    events: [
      {
        name: "WPT Australia $10K World Champs Heads-Up",
        name_cn: "WPT澳大利亚 $10K世界冠军单挑赛",
        name_tw: "WPT澳大利亞 $10K世界冠軍單挑賽",
        region: "Sydney",
        region_cn: "悉尼",
        region_tw: "雪梨",
        date: "September 26, 2023",
        date_cn: "2023年9月26日",
        date_tw: "2023年9月26日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "首届2024金杯第一——获胜者Yao Xiao以压倒性的优势赢得了比赛。凭借他的努力，他获得了131,000美元的最高奖金，并为此利益而兴奋若狂。",
      "他以“xiaoyao”著称，在中文中意为“快乐”，最后一局结束后，他的脸上挂着笑容。"
    ],
    introduction_tw: [
      "首屆2024金杯第一——獲勝者Yao Xiao以壓倒性的優勢贏得了比賽。憑借他的努力，他獲得了131,000美元的最高獎金，並為此利益而興奮若狂。",
      "他以“xiaoyao”著稱，在中文中意為“快樂”，最後一局結束後，他的臉上挂著笑容。"
    ],
    socialLinks: {},
    events: [
      {
        name: "2024 Jin Bei Cup",
        name_cn: "2024金杯赛",
        name_tw: "2024金杯賽",
        region: "Cambodia",
        region_cn: "柬埔寨",
        region_tw: "柬埔寨",
        date: "May 13, 2024",
        date_cn: "2024年5月13日",
        date_tw: "2024年5月13日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "2024年3月举行的WPT济州吉该字学赛事为期两天，参赛费为1,100,000韩元（约合817美元）。",
      "第一天共有276人参赛，总奖池为265,043,000韩元（约合196,792美元）。",
      "第二天，所有36名幸存者保底能获得1,950,000韩元（约合1,448美元）的最低奖金。经过一场张动人心的决赛桌后，中国选手Jinbo Xin除了获得47,770,000韩元（约35,488美元）的头奖外，还获得了一座WPT奖杯和一枚WPT韩国戒指。",
      "中国选手Jinbo Xin在第11场赛事：NL Hold'em–Freezeout中夺得首个APT冠军。2024年7月，中国选手再次占据比赛顶层冠军，Boxin Jin与同胞、韩国国家杯一组领先者Fei Wang，夺得18,333,000韩元（约13,310美元）的最高奖金，并获得了他的首个APT冠军。"
    ],
    introduction_tw: [
      "2024年3月舉行的WPT濟州吉該字學賽事為期兩天，參賽費為1,100,000韓元（約合817美元）。",
      "第一天共有276人參賽，總獎池為265,043,000韓元（約合196,792美元）。",
      "第二天，所有36名幸存者保底能獲得1,950,000韓元（約合1,448美元）的最低獎金。經過一場張動人心的決賽桌後，中國選手Jinbo Xin除了獲得47,770,000韓元（約35,488美元）的頭獎外，還獲得了一座WPT獎杯和一枚WPT韓國戒指。",
      "中國選手Jinbo Xin在第11場賽事：NL Hold'em–Freezeout中奪得首個APT冠軍。2024年7月，中國選手再次佔據比賽頂層冠軍，Boxin Jin與同胞、韓國國家杯一組領先者Fei Wang，奪得18,333,000韓元（約13,310美元）的最高獎金，並獲得了他的首個APT冠軍。"
    ],
    socialLinks: {},
    events: [
      {
        name: "APT Jeju 2024",
        name_cn: "APT济州岛 2024",
        name_tw: "APT濟州島 2024",
        region: "Jeju Island",
        region_cn: "济州岛",
        region_tw: "濟州島",
        date: "April 26, 2024",
        date_cn: "2024年4月26日",
        date_tw: "2024年4月26日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
        prize: "$13,310"
      },
      {
        name: "WPT Jeju Dragon Quest Flight",
        name_cn: "WPT济州龙争霸赛",
        name_tw: "WPT濟州龍爭霸賽",
        region: "Jeju Island",
        region_cn: "济州岛",
        region_tw: "濟州島",
        date: "March 28, 2024",
        date_cn: "2024年3月28日",
        date_tw: "2024年3月28日",
        rank: "Champion",
        rank_cn: "冠军",
        rank_tw: "冠軍",
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
      "Yara从小就展现出了对扑克的浓厚兴趣。她勤奋好学，不断研究技巧，逐渐在各大赛事中崭露头角。",
      "外表柔美的她拥有则风格，这也让她在直播节目HCL中大欢迎，并获得了“Yara the Destroyer”，加上她可爱的个性，Yara赢得了世界各地的大批粉丝。",
      "她还有一个非常重要的职业生涯里程碑是在2024年成为AA poker的代言人，让我们期待这位小美女在扑克圈内大放异彩！"
    ],
    introduction_tw: [
      "Yara從小就展現出了對撲克的濃厚興趣。她勤奮好學，不斷研究技巧，逐漸在各大賽事中嶄露頭角。",
      "外表柔美的她擁有則風格，這也讓她在直播節目HCL中大歡迎，並獲得了“Yara the Destroyer”，加上她可愛的個性，Yara贏得了世界各地的大批粉絲。",
      "她還有一個非常重要的職業生涯里程碑是在2024年成為AA poker的代言人，讓我們期待這位小美女在撲克圈內大放異彩！"
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
