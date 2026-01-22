export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  title_cn?: string;
  title_tw?: string;
  date: string;
  image: string;
  excerpt: string;
  excerpt_cn?: string;
  excerpt_tw?: string;
  content?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "wsop-cyprus-king-championship-super-mystery-bounty",
    title: "WSOP Cyprus \"King\" fully wins the championship of the Super Mystery Bounty Tournament and ranks fifth in the Super Fast Bounty Tournament",
    title_cn: "WSOP塞浦路斯\"King\"全面夺得超级神秘赏金赛冠军并在超级快速赏金赛中获得第五名",
    title_tw: "WSOP塞浦路斯\"King\"全面奪得超級神秘賞金賽冠軍並在超級快速賞金賽中獲得第五名",
    date: "October 21, 2025",
    image: "/image/news/page/2-Bn2M0-DS.png",
    excerpt: "WSOP Cyprus King fully wins the championship of the Super Mystery Bounty Tournament",
    excerpt_cn: "WSOP塞浦路斯King全面夺得超级神秘赏金赛冠军",
    excerpt_tw: "WSOP塞浦路斯King全面奪得超級神秘賞金賽冠軍"
  },
  {
    id: 2,
    slug: "congratulations-michael-mizrachi-aa-poker",
    title: "Congratulations! Michael Mizrachi, in collaboration with AA POKER claimed the championship",
    title_cn: "恭喜！Michael Mizrachi与AA POKER合作夺得冠军",
    title_tw: "恭喜！Michael Mizrachi與AA POKER合作奪得冠軍",
    date: "July 12, 2025",
    image: "/image/news/page/new35-BWw_V8k7.png",
    excerpt: "Congratulations! Michael Mizrachi, in collaboration with AA POKER claimed the championship"
  },
  {
    id: 3,
    slug: "tlpt-jeju-2025-top-money-earners",
    title: "TLPT JEJU 2025",
    title_cn: "TLPT济州2025",
    title_tw: "TLPT濟州2025",
    date: "May 22, 2025",
    image: "/image/news/page/new43-DrONuJv9.png",
    excerpt: "TLPT JEJU 2025"
  },
  {
    id: 4,
    slug: "poker-tour-co-founder-bags-25k-high-roller-title-jeju",
    title: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju",
    title_cn: "扑克巡回赛联合创始人在济州赢得$25K高额赛冠军",
    title_tw: "撲克巡迴賽聯合創始人在濟州贏得$25K高額賽冠軍",
    date: "May 21, 2025",
    image: "/image/news/page/new42-CFrt_iU7.png",
    excerpt: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju"
  },
  {
    id: 5,
    slug: "red-hot-stephen-song-leads-final-11-tlpt-20k",
    title: "Red Hot Stephen Song Leads Final 11 in TLPT $20k",
    title_cn: "火热的Stephen Song在TLPT $20k中领跑最后11人",
    title_tw: "火熱的Stephen Song在TLPT $20k中領跑最後11人",
    date: "May 20, 2025",
    image: "/image/news/page/1-Dp0ONUPG.png",
    excerpt: "Red Hot Stephen Song Leads Final 11 in TLPT $20k"
  },
  {
    id: 6,
    slug: "is-there-better-poker-tournament-player-stephen-song",
    title: "Is There a Better Poker Tournament Player than Stephen Song Right Now?",
    title_cn: "现在有比Stephen Song更出色的扑克锦标赛选手吗？",
    title_tw: "現在有比Stephen Song更出色的撲克錦標賽選手嗎？",
    date: "May 18, 2025",
    image: "/image/news/page/new40-B6XodAXe.png",
    excerpt: "Is There a Better Poker Tournament Player than Stephen Song Right Now?"
  },
  {
    id: 7,
    slug: "tlpt-jeju-2025-main-event-circuit-winner-wezheng",
    title: "TLPT Jeju 2025: Main Event Circuit Winner Wezheng Zhong Among Halfway Highlights",
    title_cn: "TLPT济州2025：主赛事巡回赛冠军钟伟正进入半程亮点",
    title_tw: "TLPT濟州2025：主賽事巡迴賽冠軍鍾偉正進入半程亮點",
    date: "May 17, 2025",
    image: "/image/news/section-more-information/1-BJRjznbR.png",
    excerpt: "TLPT Jeju 2025 Main Event Circuit Winner Wezheng Zhong Among Halfway Highlights"
  },
  {
    id: 8,
    slug: "impromptu-trip-pays-off-wezheng-zhong",
    title: "Impromptu Trip Pays Off as Wezheng Zhong Ships TLPT Circuit Main Event",
    title_cn: "临时决定的旅程获得回报，钟伟正赢得TLPT巡回赛主赛事",
    title_tw: "臨時決定的旅程獲得回報，鍾偉正贏得TLPT巡迴賽主賽事",
    date: "May 16, 2025",
    image: "/image/news/section-more-information/new38-DmsS5Dqe.png",
    excerpt: "Impromptu Trip Pays Off as Wezheng Zhong Ships TLPT Circuit Main Event"
  },
  {
    id: 9,
    slug: "poker-player-turned-50-into-100000",
    title: "This Poker Player Just Turned 50 Into $100,000 – Find Out How!",
    title_cn: "这位扑克选手刚把50美元变成10万美元 - 看看他是怎么做到的！",
    title_tw: "這位撲克選手剛把50美元變成10萬美元 - 看看他是怎麼做到的！",
    date: "May 14, 2025",
    image: "/image/news/section-more-information/new37-DoHS0q7h.png",
    excerpt: "This Poker Player Just Turned 50 Into $100,000 – Find Out How!"
  },
  {
    id: 10,
    slug: "long-lines-mark-opening-day-lord-poker-tlpt-jeju",
    title: "Long Lines Mark Opening Day Of The Lord Poker Tournament – TLPT Jeju",
    title_cn: "长队伍标志着Lord扑克锦标赛开幕日 - TLPT济州",
    title_tw: "長隊伍標誌著Lord撲克錦標賽開幕日 - TLPT濟州",
    date: "May 13, 2025",
    image: "/image/news/section-more-information/2-ByOlVS9r.jpg",
    excerpt: "Long Lines Mark Opening Day Of The Lord Poker Tournament – TLPT Jeju"
  },
  {
    id: 11,
    slug: "king-quan-zhou-tough-guy-dong-chen-perfectly-close-2024",
    title: "'King' Quan Zhou and 'Tough Guy' Dong Chen Perfectly Close 2024, AA POKER Team's '***",
    title_cn: "'王者'周全和'硬汉'陈东完美收官2024，AA POKER团队的成就",
    title_tw: "'王者'周全和'硬漢'陳東完美收官2024，AA POKER團隊的成就",
    date: "January 1, 2025",
    image: "/image/news/section-more-information/new34-aR3Xm8MB.png",
    excerpt: "'King' Quan Zhou and 'Tough Guy' Dong Chen Perfectly Close 2024, AA POKER Team's achievements"
  },
  {
    id: 12,
    slug: "wsop-paradise-island-dong-chen-finishes-10th",
    title: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event, Lei Yu Advances to---",
    title_cn: "WSOP天堂岛：陈东在迷你主赛事中获得第10名，于磊晋级",
    title_tw: "WSOP天堂島：陳東在迷你主賽事中獲得第10名，於磊晉級",
    date: "December 12, 2024",
    image: "/image/news/section-more-information/new33-45I9Okq4.png",
    excerpt: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event"
  },
  {
    id: 13,
    slug: "aapoker-team-luxury-lineup-brand-new",
    title: "AApoker Team's luxury lineup is brand new, with Dong Chen, Yisha, Mao, Yara, Yao---",
    title_cn: "AApoker团队豪华阵容全新亮相，陈东、一莎、毛、Yara、姚",
    title_tw: "AApoker團隊豪華陣容全新亮相，陳東、一莎、毛、Yara、姚",
    date: "December 10, 2024",
    image: "/image/news/section-more-information/new32-CwPTWq6M.png",
    excerpt: "AApoker Team's luxury lineup is brand new"
  },
  {
    id: 14,
    slug: "wsop-paradise-island-quan-zhou-dong-chen",
    title: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b, Mini Main Event Day 1b, N---",
    title_cn: "WSOP天堂岛：周全和陈东称霸Day 1b，迷你主赛事Day 1b",
    title_tw: "WSOP天堂島：周全和陳東稱霸Day 1b，迷你主賽事Day 1b",
    date: "December 08, 2024",
    image: "/image/news/section-more-information/new31--A0IMecX.png",
    excerpt: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b"
  },
  {
    id: 15,
    slug: "congratulations-xu-xin-yin-china-chip-count-leader",
    title: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller---",
    title_cn: "恭喜中国选手徐鑫银在单日超高额赛中获得第3名筹码领先",
    title_tw: "恭喜中國選手徐鑫銀在單日超高額賽中獲得第3名籌碼領先",
    date: "November 25, 2024",
    image: "/image/news/section-more-information/new30-DEJPuf47.png",
    excerpt: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller"
  },
  {
    id: 16,
    slug: "aa-poker-jeju-won-two-prestigious-championships",
    title: "AA POKER Jeju won two of the most prestigious high-stakes championships",
    title_cn: "AA POKER济州赢得两项最负盛名的高额赛冠军",
    title_tw: "AA POKER濟州贏得兩項最負盛名的高額賽冠軍",
    date: "November 22, 2024",
    image: "/image/news/section-more-information/new29-Dvv9kn_v.png",
    excerpt: "AA POKER Jeju won two of the most prestigious high-stakes championships"
  },
  {
    id: 17,
    slug: "pure-quality-gold-quan-zhou-tlpt-25k",
    title: "Pure Quality: Gold for Quan Zhou in TLPT $25K International",
    title_cn: "纯粹品质：周全在TLPT $25K国际赛中夺金",
    title_tw: "純粹品質：周全在TLPT $25K國際賽中奪金",
    date: "October 4, 2024",
    image: "/image/news/section-more-information/1-CTf9bq3s.png",
    excerpt: "Pure Quality: Gold for Quan Zhou in TLPT $25K International"
  },
  {
    id: 18,
    slug: "andy-lee-takes-down-tlpt-main-event-apt-brisbane",
    title: "Andy Lee takes down TLPT Main Event at APT Brisbane",
    title_cn: "Andy Lee在APT布里斯班夺得TLPT主赛事冠军",
    title_tw: "Andy Lee在APT布里斯班奪得TLPT主賽事冠軍",
    date: "October 3, 2024",
    image: "/image/news/section-more-information/1-b3g8E56X.png",
    excerpt: "Andy Lee takes down TLPT Main Event at APT Brisbane"
  },
  {
    id: 19,
    slug: "2024-pgt-super-high-roller-series-chinese-poker-star",
    title: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory in---",
    title_cn: "2024 PGT超级高额赛系列：中国扑克明星周全飞升至胜利",
    title_tw: "2024 PGT超級高額賽系列：中國撲克明星周全飛升至勝利",
    date: "August 14, 2024",
    image: "/image/news/section-more-information/new26-CT8-D1vg.png",
    excerpt: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory"
  },
  {
    id: 20,
    slug: "quan-zhou-won-red-dragon-high-roller",
    title: "Quan Zhou Won the Red Dragon High Roller!",
    title_cn: "周全赢得红龙高额赛冠军！",
    title_tw: "周全贏得紅龍高額賽冠軍！",
    date: "August 6, 2024",
    image: "/image/news/section-more-information/new25-CVFu2UJp.png",
    excerpt: "Quan Zhou Won the Red Dragon High Roller!"
  },
  {
    id: 21,
    slug: "jin-bei-cup-xiao-yao-bulldozes-single-day-nlh",
    title: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH",
    title_cn: "金杯赛：肖遥横扫单日NLH",
    title_tw: "金盃賽：肖遙橫掃單日NLH",
    date: "May 13, 2024",
    image: "/image/news/section-more-information/new24-DZWWb0yZ.png",
    excerpt: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH"
  },
  {
    id: 22,
    slug: "china-boxin-jin-claims-maiden-apt-title",
    title: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout",
    title_cn: "中国选手金博鑫在第11项赛事中夺得首个APT冠军：NL Hold'em - Freezeout",
    title_tw: "中國選手金博鑫在第11項賽事中奪得首個APT冠軍：NL Hold'em - Freezeout",
    date: "May 8, 2024",
    image: "/image/news/section-more-information/new23-zF0Rc3Ik.png",
    excerpt: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout"
  },
  {
    id: 23,
    slug: "china-jin-boxin-beats-jeju-dragon-quest-field",
    title: "China's Jin Boxin beats Jeju Dragon Quest field – KRW $7,770,000 (~USD $5,636)",
    title_cn: "中国选手金博鑫击败济州龙之寻宝赛场 - KRW $7,770,000",
    title_tw: "中國選手金博鑫擊敗濟州龍之尋寶賽場 - KRW $7,770,000",
    date: "March 28, 2024",
    image: "/image/news/section-more-information/new22-BaetBDUu.png",
    excerpt: "China's Jin Boxin beats Jeju Dragon Quest field"
  },
  {
    id: 24,
    slug: "whirlwind-quan-zhou-races-first-triton-title",
    title: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event.",
    title_cn: "旋风周全在$25K PLO赛事中夺得首个Triton冠军",
    title_tw: "旋風周全在$25K PLO賽事中奪得首個Triton冠軍",
    date: "March 18, 2024",
    image: "/image/news/section-more-information/new21-BzbXwbXk.png",
    excerpt: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event"
  },
  {
    id: 25,
    slug: "quan-zhou-took-runner-up-prize-mystery-bounty",
    title: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty (€21,500)",
    title_cn: "周全在€10,200神秘赏金赛中获得亚军(€21,500)",
    title_tw: "周全在€10,200神秘賞金賽中獲得亞軍(€21,500)",
    date: "February 28, 2024",
    image: "/image/news/section-more-information/new20-DcZjf8Oo.png",
    excerpt: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty"
  },
  {
    id: 26,
    slug: "aapoker-poker-community-without-thieves",
    title: "AApoker, a poker community without thieves. A fun and honest game is coming!",
    title_cn: "AApoker，一个没有小偷的扑克社区。有趣且诚实的游戏来了！",
    title_tw: "AApoker，一個沒有小偷的撲克社區。有趣且誠實的遊戲來了！",
    date: "February 4, 2024",
    image: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
    excerpt: "AApoker, a poker community without thieves. A fun and honest game is coming!"
  },
  {
    id: 27,
    slug: "king-quan-zhou-becoming-aa-poker-global-ambassador",
    title: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador",
    title_cn: "王者周全成为AA POKER全球锦标赛大使",
    title_tw: "王者周全成為AA POKER全球錦標賽大使",
    date: "January 30, 2024",
    image: "/image/news/section-more-information/new18-Ck7rU9qQ.png",
    excerpt: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador"
  },
  {
    id: 28,
    slug: "wesley-new-brand-ambassador-aa-poker",
    title: "Wesley: New brand ambassador of AA POKER",
    title_cn: "Wesley：AA POKER新品牌大使",
    title_tw: "Wesley：AA POKER新品牌大使",
    date: "January 23, 2024",
    image: "/image/news/section-more-information/new17-Crj0riBD.png",
    excerpt: "Wesley: New brand ambassador of AA POKER"
  },
  {
    id: 29,
    slug: "jungleman-plays-high-stakes-andy-mariano-pepe",
    title: "Jungleman Plays HIGH STAKES $50/100/200w/ Andy, Mariano, Pepe, DJ Washburn & Mars",
    title_cn: "Jungleman玩高额赌注$50/100/200与Andy, Mariano, Pepe, DJ Washburn & Mars",
    title_tw: "Jungleman玩高額賭注$50/100/200與Andy, Mariano, Pepe, DJ Washburn & Mars",
    date: "November 11, 2023",
    image: "/image/news/section-more-information/new1-CjwHXmsk.png",
    excerpt: "Jungleman Plays HIGH STAKES with top players"
  },
  {
    id: 30,
    slug: "lord-poker-tournament-top-money-earners",
    title: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS",
    title_cn: "LORD扑克锦标赛最高奖金获得者",
    title_tw: "LORD撲克錦標賽最高獎金獲得者",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new2-BWLg7F35.png",
    excerpt: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS"
  },
  {
    id: 31,
    slug: "tlpt-international-high-rollers",
    title: "TLPT INTERNATIONAL HIGH-ROLLERS",
    title_cn: "TLPT国际高额赛",
    title_tw: "TLPT國際高額賽",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new3-DJ4OVbWv.png",
    excerpt: "TLPT INTERNATIONAL HIGH-ROLLERS"
  },
  {
    id: 32,
    slug: "tlpt-international-10k-challenge-final-table",
    title: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE",
    title_cn: "TLPT国隙10K挑战赛决赛桌",
    title_tw: "TLPT國際10K挑戰賽決賽桌",
    date: "October 26, 2023",
    image: "/image/news/section-more-information/new4-Cu069u94.png",
    excerpt: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE"
  },
  {
    id: 33,
    slug: "tlpt-international-25k-challenge-final-table",
    title: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE",
    title_cn: "TLPT国隙25K挑战赛决赛桌",
    title_tw: "TLPT國際25K挑戰賽決賽桌",
    date: "October 25, 2023",
    image: "/image/news/section-more-information/new5-BcUZ0CJ6.png",
    excerpt: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE"
  },
  {
    id: 34,
    slug: "super-high-stakes-jungleman-andy-nik-pepe-mars",
    title: "SUPER HIGH STAKES $100/200/400!! Jungleman, Andy, Nik Airball, Pepe, Mars ---",
    title_cn: "超高额赌注$100/200/400!! Jungleman, Andy, Nik Airball, Pepe, Mars",
    title_tw: "超高額賭注$100/200/400!! Jungleman, Andy, Nik Airball, Pepe, Mars",
    date: "October 1, 2023",
    image: "/image/news/section-more-information/new6-YQyeTRSf.png",
    excerpt: "SUPER HIGH STAKES featuring top poker players"
  },
  {
    id: 35,
    slug: "aa-poker-largest-sponsor-tlpt-event",
    title: "AA POKER, the largest sponsor of the TLPT event",
    title_cn: "AA POKER，TLPT赛事最大赞助商",
    title_tw: "AA POKER，TLPT賽事最大贊助商",
    date: "October 4, 2023",
    image: "/image/news/section-more-information/new7-DeSa_0MK.png",
    excerpt: "AA POKER, the largest sponsor of the TLPT event"
  },
  {
    id: 36,
    slug: "that-man-zheming-zhu-wins-10k-world-champs",
    title: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER",
    title_cn: "那个男人朱志明与AA POKER赢得$10k世界冠军热身赛",
    title_tw: "那個男人朱志明與AA POKER贏得$10k世界冠軍熱身賽",
    date: "September 26, 2023",
    image: "/image/news/section-more-information/new8-DRKualZL.png",
    excerpt: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER"
  },
  {
    id: 37,
    slug: "free-satellite-tournament",
    title: "Free Satellite Tournament",
    title_cn: "免费卫星赛",
    title_tw: "免費衛星賽",
    date: "September 22, 2023",
    image: "/image/news/section-more-information/new9-BrQE2WQx.png",
    excerpt: "Free Satellite Tournament"
  },
  {
    id: 38,
    slug: "aa-poker-global-pre-launch",
    title: "AA POKER Global pre-launch",
    title_cn: "AA POKER全球预发布",
    title_tw: "AA POKER全球預發布",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new11-ij5p31Lq.png",
    excerpt: "AA POKER Global pre-launch"
  },
  {
    id: 39,
    slug: "jungleman-aapoker-brand-ambassador",
    title: "Jungleman—AAPOKER BRAND AMBASSADOR!",
    title_cn: "Jungleman—AAPOKER品牌大使！",
    title_tw: "Jungleman—AAPOKER品牌大使！",
    date: "August 27, 2023",
    image: "/image/news/section-more-information/new12-BENtmTP7.png",
    excerpt: "Jungleman—AAPOKER BRAND AMBASSADOR!"
  },
  {
    id: 40,
    slug: "triton-poker-series-london-2023-event-11",
    title: "Triton Poker Series London 2023 - Event #11 $125k NLH Main Event - Final Table",
    title_cn: "Triton扑克系列赛伦敘2023 - 第11项赛事 $125k NLH主赛事 - 决赛桌",
    title_tw: "Triton撲克系列賽倫敘2023 - 第11項賽事 $125k NLH主賽事 - 決賽桌",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new13-iwFbbVs7.png",
    excerpt: "Triton Poker Series London 2023 - Event #11 Final Table"
  },
  {
    id: 41,
    slug: "triton-poker-series-london-2023-event-9",
    title: "Triton Poker Series London 2023 - Event #9 $250k NLH Luxm Invitational - FINAL TABLE",
    title_cn: "Triton扑克系列赛伦敘2023 - 第9项赛事 $250k NLH豪华邀请赛 - 决赛桌",
    title_tw: "Triton撲克系列賽倫敘2023 - 第9項賽事 $250k NLH豪華邀請賽 - 決賽桌",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new14-CrTzrfZC.png",
    excerpt: "Triton Poker Series London 2023 - Event #9 FINAL TABLE"
  },
  {
    id: 42,
    slug: "why-bryn-kenney-most-valuable-man-poker",
    title: "Why is Bryn Kenney the most valuable man in poker?",
    title_cn: "为什么Bryn Kenney是扑克界最有价值的人？",
    title_tw: "為什麽Bryn Kenney是撲克界最有價值的人？",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new15-CV6z6WoF.png",
    excerpt: "Why is Bryn Kenney the most valuable man in poker?"
  },
  {
    id: 43,
    slug: "aa-poker-player-story-chris-moneymaker",
    title: "AA POKER Player Story—Chris Moneymaker",
    title_cn: "AA POKER选手故事—Chris Moneymaker",
    title_tw: "AA POKER選手故事—Chris Moneymaker",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new16-BeFig88k.png",
    excerpt: "AA POKER Player Story—Chris Moneymaker"
  }
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getLatestNews(count: number = 6): NewsArticle[] {
  return newsArticles.slice(0, count);
}
