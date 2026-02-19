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
    id: 64,
    slug: "aapoker-dominates-2026-online-poker-scene-aa-poker-review",
    title: "AAPoker (AA Poker) Dominates 2026 Online Poker Scene: Why Players Choose aapoker.top",
    title_cn: "AAPoker (AA Poker) 主导2026在线扑克界：为何玩家选择aapoker.top",
    title_tw: "AAPoker (AA Poker) 主導2026線上撲克界：為何玩家選擇aapoker.top",
    date: "February 19, 2026",
    image: "/image/news/section-more-information/new1-CjwHXmsk.png",
    excerpt: "AAPoker (AA Poker) has emerged as the leading platform in 2026. Discover why aapoker is the top choice for 'Poker AA' fans and how to download the aapoker app today.",
    excerpt_cn: "AAPoker (AA Poker) 已成为2026年的领先平台。探索为何aapoker是'Poker AA'粉丝的首选，以及如何立即下载aapoker应用。",
    excerpt_tw: "AAPoker (AA Poker) 已成為2026年的領先平台。探索為何aapoker是'Poker AA'粉絲的首選，以及如何立即下載aapoker應用。"
  },
  {
    id: 1,
    slug: "wsop-cyprus-king-championship-super-mystery-bounty",
    title: "WSOP Cyprus 「King」 fully wins the championship of the Super Mystery Bounty Tournament and ranks fifth in the Super Fast Bounty Tournament",
    title_cn: "WSOP塞浦路斯「国王」周全勇夺超级神秘赏金赛冠军及超快速赏金底池限注奥马哈赛第五名",
    title_tw: "WSOP賽普勒斯「國王」周全勇奪超級神秘賞金賽冠軍及超快速賞金底池限注奧馬哈賽第五名",
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
    title_cn: "恭喜Michael Mizrachi携手AA poker 登顶世界扑克主赛冠军，获得1000万美金奖金！",
    title_tw: "恭喜Michael Mizrachi攜手AA poker登頂世界撲克主賽冠軍，獲得1000萬美金獎金！",
    date: "July 12, 2025",
    image: "/image/news/page/new35-BWw_V8k7.png",
    excerpt: "Congratulations! Michael Mizrachi, in collaboration with AA POKER claimed the championship"
  },
  {
    id: 3,
    slug: "tlpt-jeju-2025-top-money-earners",
    title: "TLPT JEJU 2025",
    title_cn: "2025TLPT王者之路扑克系列赛",
    title_tw: "2025TLPT王者之路撲克繁列賽",
    date: "May 22, 2025",
    image: "/image/news/page/new43-DrONuJv9.png",
    excerpt: "TLPT JEJU 2025"
  },
  {
    id: 4,
    slug: "poker-tour-co-founder-bags-25k-high-roller-title-jeju",
    title: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju",
    title_cn: "TLPT济州岛-圆满收官！中国选手Ivan Zhang获$25K超豪赛冠军，Stephen So---",
    title_tw: "TLPT濟州島-圓滿收官！中國選手Ivan Zhang獲$25K超豪賽冠軍，Stephen So---",
    date: "May 21, 2025",
    image: "/image/news/page/new42-CFrt_iU7.png",
    excerpt: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju"
  },
  {
    id: 5,
    slug: "red-hot-stephen-song-leads-final-11-tlpt-20k",
    title: "Red Hot Stephen Song Leads Final 11 in TLPT $20k",
    title_cn: "TLPT济州岛-豪客主赛FT产生，德国Marius Gierse领先，Lin Huawei、Zhao Jiamin---",
    title_tw: "TLPT濟州島-豪客主賽FT產生，德國Marius Gierse領先，Lin Huawei、Zhao Jiamin---",
    date: "May 20, 2025",
    image: "/image/news/page/1-Dp0ONUPG.png",
    excerpt: "Red Hot Stephen Song Leads Final 11 in TLPT $20k"
  },
  {
    id: 6,
    slug: "is-there-better-poker-tournament-player-stephen-song",
    title: "Is There a Better Poker Tournament Player than Stephen Song Right Now?",
    title_cn: "TLPT济州岛-巡游赛主赛9人FT产生，网红博主「扑克夫妻」深筹赛夺冠！",
    title_tw: "TLPT濟州島-巡遊賽主賽9人FT產生，網紅博主「撲克夫妻」深籌賽奪冠！",
    date: "May 18, 2025",
    image: "/image/news/page/new40-B6XodAXe.png",
    excerpt: "Is There a Better Poker Tournament Player than Stephen Song Right Now?"
  },
  {
    id: 7,
    slug: "tlpt-jeju-2025-main-event-circuit-winner-wezheng",
    title: "TLPT Jeju 2025: Main Event Circuit Winner Wezheng Zhong Among Halfway Highlights",
    title_cn: "TLPT济州岛-揭幕赛Ji Xiaqing夺冠，巡游赛主赛505人次参赛，60人晋级Day2",
    title_tw: "TLPT濟州島-揭幕賽Ji Xiaqing奪冠，巡遊賽主賽505人次參賽，60人晉級Day2",
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
    title_cn: "「国王」周全、「硬汉」陈东 2024完美收官，AA POKER战队「双子星」强势闯入GPI百强榜！",
    title_tw: "「國王」周全、「硬漢」陳東 2024完美收官，AA POKER戰隊「雙子星」強勢闖入GPI百強榜！",
    date: "January 1, 2025",
    image: "/image/news/section-more-information/new34-aR3Xm8MB.png",
    excerpt: "'King' Quan Zhou and 'Tough Guy' Dong Chen Perfectly Close 2024, AA POKER Team's achievements"
  },
  {
    id: 12,
    slug: "wsop-paradise-island-dong-chen-finishes-10th",
    title: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event, Lei Yu Advances to---",
    title_cn: "WSOP天堂岛：陈东获迷你主赛第10名 余磊闯入$5,000深筹赛Day3",
    title_tw: "WSOP天堂島：陳東獲迷你主賽第10名 余磊闖入$5,000深籌賽Day3",
    date: "December 12, 2024",
    image: "/image/news/section-more-information/new33-45I9Okq4.png",
    excerpt: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event"
  },
  {
    id: 13,
    slug: "aapoker-team-luxury-lineup-brand-new",
    title: "AApoker Team's luxury lineup is brand new, with Dong Chen, Yisha, Mao, Yara, Yao---",
    title_cn: "AApoker战队豪华阵容全新亮相，陈东、陈易莎、Yara、叶依强势加盟！",
    title_tw: "AApoker戰隊豪華陣容全新亮相，陳東、陳易莎、Yara、葉依強勢加盟！",
    date: "December 10, 2024",
    image: "/image/news/section-more-information/new32-CwPTWq6M.png",
    excerpt: "AApoker Team's luxury lineup is brand new"
  },
  {
    id: 14,
    slug: "wsop-paradise-island-quan-zhou-dong-chen",
    title: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b, Mini Main Event Day 1b, N---",
    title_cn: "WSOP天堂岛：周全、陈东深码晋级迷你主赛Day1b组 Ivey、DanielTriton百万赛落败 ST王---",
    title_tw: "WSOP天堂島：周全、陳東深碼晉級迷你主賽Day1b組 Ivey、DanielTriton百萬賽落敗 ST王---",
    date: "December 08, 2024",
    image: "/image/news/section-more-information/new31--A0IMecX.png",
    excerpt: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b"
  },
  {
    id: 15,
    slug: "congratulations-xu-xin-yin-china-chip-count-leader",
    title: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller---",
    title_cn: "恭喜来自中国的 XU XIN YIN获得KPC 单日超级豪客赛冠军！",
    title_tw: "恭喜來自中國的 XU XIN YIN獲得KPC 單日超級豪客賽冠軍！",
    date: "November 25, 2024",
    image: "/image/news/section-more-information/new30-DEJPuf47.png",
    excerpt: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller"
  },
  {
    id: 16,
    slug: "aa-poker-jeju-won-two-prestigious-championships",
    title: "AA POKER Jeju won two of the most prestigious high-stakes championships",
    title_cn: "AA战队济州岛夺得两个最有含金量的豪客赛冠军",
    title_tw: "AA戰隊濟州島奪得兩個最有含金量的豪客賽冠軍",
    date: "November 22, 2024",
    image: "/image/news/section-more-information/new29-Dvv9kn_v.png",
    excerpt: "AA POKER Jeju won two of the most prestigious high-stakes championships"
  },
  {
    id: 17,
    slug: "pure-quality-gold-quan-zhou-tlpt-25k",
    title: "Pure Quality: Gold for Quan Zhou in TLPT $25K International",
    title_cn: "周全在王者之路扑克25K国际赛中夺金",
    title_tw: "周全在王者之路撲克25K國際賽中奪金",
    date: "October 4, 2024",
    image: "/image/news/section-more-information/1-CTf9bq3s.png",
    excerpt: "Pure Quality: Gold for Quan Zhou in TLPT $25K International"
  },
  {
    id: 18,
    slug: "andy-lee-takes-down-tlpt-main-event-apt-brisbane",
    title: "Andy Lee takes down TLPT Main Event at APT Brisbane",
    title_cn: "安迪·李在APT布里斯班站夺得TLPT主赛事冠军",
    title_tw: "安迪·李在APT布里斯班站奪得TLPT主賽事冠軍",
    date: "October 3, 2024",
    image: "/image/news/section-more-information/1-b3g8E56X.png",
    excerpt: "Andy Lee takes down TLPT Main Event at APT Brisbane"
  },
  {
    id: 19,
    slug: "2024-pgt-super-high-roller-series-chinese-poker-star",
    title: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory in---",
    title_cn: "超级碗塞浦路斯｜周全赛事#2夺冠",
    title_tw: "超級杯賽普勒斯｜周全賽事#2奪冠",
    date: "August 14, 2024",
    image: "/image/news/section-more-information/new26-CT8-D1vg.png",
    excerpt: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory"
  },
  {
    id: 20,
    slug: "quan-zhou-won-red-dragon-high-roller",
    title: "Quan Zhou Won the Red Dragon High Roller!",
    title_cn: "红龙杯济洲站圆满结束，周全再次获得红龙豪客赛冠军！",
    title_tw: "紅龍杯濟洲站圓滿結束，周全再次獲得紅龍豪客賽冠軍！",
    date: "August 6, 2024",
    image: "/image/news/section-more-information/new25-CVFu2UJp.png",
    excerpt: "Quan Zhou Won the Red Dragon High Roller!"
  },
  {
    id: 21,
    slug: "jin-bei-cup-xiao-yao-bulldozes-single-day-nlh",
    title: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH",
    title_cn: "金贝杯｜首日赛事单日德州扑克锦标赛AA团队多人参赛 逍遥气势如虹夺冠军奖杯！",
    title_tw: "金貝杯｜首日賽事單日德州撲克錦標賽AA團隊多人參賽 逍遙勢如虹奪冠軍獎杯！",
    date: "May 13, 2024",
    image: "/image/news/section-more-information/new24-DZWWb0yZ.png",
    excerpt: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH"
  },
  {
    id: 22,
    slug: "china-boxin-jin-claims-maiden-apt-title",
    title: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout",
    title_cn: "JIN BOXIN 首次获得APT冠军",
    title_tw: "JIN BOXIN 首次獲得APT冠軍",
    date: "May 8, 2024",
    image: "/image/news/section-more-information/new23-zF0Rc3Ik.png",
    excerpt: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout"
  },
  {
    id: 23,
    slug: "china-jin-boxin-beats-jeju-dragon-quest-field",
    title: "China's Jin Boxin beats Jeju Dragon Quest field – KRW $7,770,000 (~USD $5,636)",
    title_cn: "AA POKER团队Jin Boxin选手拿下寻龙争霸赛冠军",
    title_tw: "AA POKER團隊Jin Boxin選手拿下尋龍爭霸賽冠軍",
    date: "March 28, 2024",
    image: "/image/news/section-more-information/new22-BaetBDUu.png",
    excerpt: "China's Jin Boxin beats Jeju Dragon Quest field"
  },
  {
    id: 24,
    slug: "whirlwind-quan-zhou-races-first-triton-title",
    title: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event.",
    title_cn: "「国王」周全赢得第一座Triton冠军奖杯",
    title_tw: "「國王」周全贏得第一座Triton冠軍獎杯",
    date: "March 18, 2024",
    image: "/image/news/section-more-information/new21-BzbXwbXk.png",
    excerpt: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event"
  },
  {
    id: 25,
    slug: "quan-zhou-took-runner-up-prize-mystery-bounty",
    title: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty (€21,500)",
    title_cn: "2024 EPT巴黎站周全获神秘赏金赛亚军",
    title_tw: "2024 EPT巴黎站周全獲神秘賞金賽亞軍！",
    date: "February 28, 2024",
    image: "/image/news/section-more-information/new20-DcZjf8Oo.png",
    excerpt: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty"
  },
  {
    id: 26,
    slug: "aapoker-poker-community-without-thieves",
    title: "AApoker, a poker community without thieves. A fun and honest game is coming!",
    title_cn: "AA POKER祭出「天下无贼」，全方位组合拳打击作弊！",
    title_tw: "AA POKER祭出「天下無賊」，全方位組合拳打擊作弊！",
    date: "February 4, 2024",
    image: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
    excerpt: "AApoker, a poker community without thieves. A fun and honest game is coming!"
  },
  {
    id: 27,
    slug: "king-quan-zhou-becoming-aa-poker-global-ambassador",
    title: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador",
    title_cn: "「国王」周全-AA POKER全球赛事形象大使",
    title_tw: "「國王」周全-AA POKER全球賽事形象大使",
    date: "January 30, 2024",
    image: "/image/news/section-more-information/new18-Ck7rU9qQ.png",
    excerpt: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador"
  },
  {
    id: 28,
    slug: "wesley-new-brand-ambassador-aa-poker",
    title: "Wesley: New brand ambassador of AA POKER",
    title_cn: "Wesley-AAPOKER新全球品牌代言人",
    title_tw: "Wesley-AAPOKER新全球品牌代言人",
    date: "January 23, 2024",
    image: "/image/news/section-more-information/new17-Crj0riBD.png",
    excerpt: "Wesley: New brand ambassador of AA POKER"
  },
  {
    id: 29,
    slug: "jungleman-plays-high-stakes-andy-mariano-pepe",
    title: "Jungleman Plays HIGH STAKES $50/100/200w/ Andy, Mariano, Pepe, DJ Washburn & Mars",
    title_cn: "Jungleman-hustler casino 周末现金桌直播，盲注级别$100/200+200",
    title_tw: "Jungleman 和raymond 在hustler casino直播現金桌",
    date: "November 11, 2023",
    image: "/image/news/section-more-information/new1-CjwHXmsk.png",
    excerpt: "Jungleman Plays HIGH STAKES with top players"
  },
  {
    id: 30,
    slug: "lord-poker-tournament-top-money-earners",
    title: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS",
    title_cn: "TLPT豪客赛赢家排行榜",
    title_tw: "TLPT豪客賽贏家排行榜",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new2-BWLg7F35.png",
    excerpt: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS"
  },
  {
    id: 31,
    slug: "tlpt-international-high-rollers",
    title: "TLPT INTERNATIONAL HIGH-ROLLERS",
    title_cn: "TLPT 澳洲豪客赛",
    title_tw: "TLPT 澳洲豪客賽",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new3-DJ4OVbWv.png",
    excerpt: "TLPT INTERNATIONAL HIGH-ROLLERS"
  },
  {
    id: 32,
    slug: "tlpt-international-10k-challenge-final-table",
    title: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE",
    title_cn: "TLPT 10K 决赛桌",
    title_tw: "TLPT 10K 決賽桌",
    date: "October 26, 2023",
    image: "/image/news/section-more-information/new4-Cu069u94.png",
    excerpt: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE"
  },
  {
    id: 33,
    slug: "tlpt-international-25k-challenge-final-table",
    title: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE",
    title_cn: "TLPT 25K决赛桌",
    title_tw: "TLPT 25K決賽桌",
    date: "October 25, 2023",
    image: "/image/news/section-more-information/new5-BcUZ0CJ6.png",
    excerpt: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE"
  },
  {
    id: 34,
    slug: "super-high-stakes-jungleman-andy-nik-pepe-mars",
    title: "SUPER HIGH STAKES $100/200/400!! Jungleman, Andy, Nik Airball, Pepe, Mars ---",
    title_cn: "Jungleman-hustler casino 周末现金桌直播，盲注等级$100/200+200",
    title_tw: "Jungleman-hustler casino 週末現金桌直播，盲注等級$100/200+200",
    date: "October 1, 2023",
    image: "/image/news/section-more-information/new6-YQyeTRSf.png",
    excerpt: "SUPER HIGH STAKES featuring top poker players"
  },
  {
    id: 35,
    slug: "aa-poker-largest-sponsor-tlpt-event",
    title: "AA POKER, the largest sponsor of the TLPT event",
    title_cn: "AA POKER全力赞助TLPT赛事",
    title_tw: "AA POKER全力贊助TLPT賽事",
    date: "October 4, 2023",
    image: "/image/news/section-more-information/new7-DeSa_0MK.png",
    excerpt: "AA POKER, the largest sponsor of the TLPT event"
  },
  {
    id: 36,
    slug: "that-man-zheming-zhu-wins-10k-world-champs",
    title: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER",
    title_cn: "WPT AUSTRALIA，那个中国人Zheming Zhu戴着AA POKER夺冠",
    title_tw: "WPT AUSTRALIA，那個中國人Zheming Zhu戴著AA POKER奪冠",
    date: "September 26, 2023",
    image: "/image/news/section-more-information/new8-DRKualZL.png",
    excerpt: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER"
  },
  {
    id: 37,
    slug: "free-satellite-tournament",
    title: "Free Satellite Tournament",
    title_cn: "免费卫星赛开启",
    title_tw: "免費衛星賽開啟",
    date: "September 22, 2023",
    image: "/image/news/section-more-information/new9-BrQE2WQx.png",
    excerpt: "Free Satellite Tournament"
  },
  {
    id: 38,
    slug: "aa-poker-global-pre-launch",
    title: "AA POKER Global pre-launch",
    title_cn: "AA POKER伦敦发布会",
    title_tw: "AA POKER倫敦發布會",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new11-ij5p31Lq.png",
    excerpt: "AA POKER Global pre-launch"
  },
  {
    id: 39,
    slug: "jungleman-aapoker-brand-ambassador",
    title: "Jungleman—AAPOKER BRAND AMBASSADOR!",
    title_cn: "AA POKER签言人签约",
    title_tw: "AA POKER簽言人簽約",
    date: "August 27, 2023",
    image: "/image/news/section-more-information/new12-BENtmTP7.png",
    excerpt: "Jungleman—AAPOKER BRAND AMBASSADOR!"
  },
  {
    id: 40,
    slug: "triton-poker-series-london-2023-event-11",
    title: "Triton Poker Series London 2023 - Event #11 $125k NLH Main Event - Final Table",
    title_cn: "传奇扑克系列赛伦敦2023-$125k主赛-决赛桌",
    title_tw: "傳奇撲克系列賽倫敦2023-$125k主賽-決賽桌",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new13-iwFbbVs7.png",
    excerpt: "Triton Poker Series London 2023 - Event #11 Final Table"
  },
  {
    id: 41,
    slug: "triton-poker-series-london-2023-event-9",
    title: "Triton Poker Series London 2023 - Event #9 $250k NLH Luxm Invitational - FINAL TABLE",
    title_cn: "传奇扑克2023年伦敦赛-250k买入决赛桌",
    title_tw: "傳奇撲克2023年倫敦賽-250k買入決賽桌",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new14-CrTzrfZC.png",
    excerpt: "Triton Poker Series London 2023 - Event #9 FINAL TABLE"
  },
  {
    id: 42,
    slug: "why-bryn-kenney-most-valuable-man-poker",
    title: "Why is Bryn Kenney the most valuable man in poker?",
    title_cn: "为什么36岁的Bryn Kenney再一次成为扑克圈最能赚钱的男人？",
    title_tw: "為什麼36歲的Bryn Kenney再一次成為撲克圈最能賺錢的男人？",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new15-CV6z6WoF.png",
    excerpt: "Why is Bryn Kenney the most valuable man in poker?"
  },
  {
    id: 43,
    slug: "aa-poker-player-story-chris-moneymaker",
    title: "AA POKER Player Story—Chris Moneymaker",
    title_cn: "AA POKER名人故事—Christ Moneymaker",
    title_tw: "AA POKER名人故事—Christ Moneymaker",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new16-BeFig88k.png",
    excerpt: "AA POKER Player Story—Chris Moneymaker"
  },
  {
    id: 44,
    slug: "5-pro-tips-dominate-aapoker-cash-games",
    title: "5 Pro Tips to Dominate Cash Games on AAPoker: Master the Strategy",
    title_cn: "AAPoker现金桌制胜指南：5个专业技巧助你称霸牌局",
    title_tw: "AAPoker現金桌致勝指南：5個專業技巧助你稱霸牌局",
    date: "February 7, 2026",
    image: "/image/news/section-more-information/new26-CT8-D1vg.png",
    excerpt: "Discover essential strategies to improve your win rate on AAPoker's cash games.",
    excerpt_cn: "探索提高AAPoker现金桌胜率的关键策略。",
    excerpt_tw: "探索提高AAPoker現金桌勝率的關鍵策略。"
  },
  {
    id: 45,
    slug: "why-poker-aa-enthusiasts-switching-to-aapoker-2026",
    title: "Why 'Poker AA' Enthusiasts Are Switching to AAPoker in 2026",
    title_cn: "为何'Poker AA'爱好者在2026年纷纷转向AAPoker？",
    title_tw: "為何'Poker AA'愛好者在2026年紛紛轉向AAPoker？",
    date: "February 8, 2026",
    image: "/image/news/section-more-information/new23-zF0Rc3Ik.png",
    excerpt: "Discover the reasons behind the massive migration of players to AAPoker, the ultimate destination for Poker AA fans.",
    excerpt_cn: "探索玩家大规模迁移至AAPoker背后的原因，这是Poker AA粉丝的终极目的地。",
    excerpt_tw: "探索玩家大規模遷移至AAPoker背後的原因，這是Poker AA粉絲的終極目的地。"
  },
  {
    id: 46,
    slug: "aapoker-mobile-app-review-2026-best-poker-aa-experience",
    title: "AAPoker Mobile App Review 2026: The Best 'Poker AA' Experience on iOS & Android",
    title_cn: "2026年AAPoker移动端评测：iOS和Android上最佳的'Poker AA'体验",
    title_tw: "2026年AAPoker移動端評測：iOS和Android上最佳的'Poker AA'體驗",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new22-BaetBDUu.png",
    excerpt: "Reviewing the AAPoker mobile app: Seamless multi-tabling, vertical mode, and robust security make it the top choice for mobile poker in 2026.",
    excerpt_cn: "评测AAPoker移动应用：无缝多桌、竖屏模式和强大的安全性使其成为2026年移动扑克的首选。",
    excerpt_tw: "評測AAPoker移動應用：無縫多桌、豎屏模式和強大的安全性使其成為2026年移動撲克的首選。"
  },
  {
    id: 47,
    slug: "aapoker-global-championship-2026-ultimate-stage-poker-aa-legends",
    title: "AAPoker Global Championship 2026 Announced: The Ultimate Stage for 'Poker AA' Legends",
    title_cn: "2026 AAPoker全球锦标赛官宣：'Poker AA'传奇的终极舞台",
    title_tw: "2026 AAPoker全球錦標賽官宣：'Poker AA'傳奇的終極舞台",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new30-DEJPuf47.png",
    excerpt: "AAPoker unveils the 2026 Global Championship with a record-breaking guarantee. See why 'Poker AA' professionals are calling it the must-play event of the year.",
    excerpt_cn: "AAPoker揭晓2026全球锦标赛，奖金保底创纪录。看看为什么'Poker AA'职业选手称之为年度必玩赛事。",
    excerpt_tw: "AAPoker揭曉2026全球錦標賽，獎金保底創紀錄。看看為什麼'Poker AA'職業選手稱之為年度必玩賽事。"
  },
  {
    id: 48,
    slug: "high-stakes-action-aapoker-where-poker-aa-whales-sharks-collide",
    title: "High Stakes Action on AAPoker: Where 'Poker AA' Whales and Sharks Collide",
    title_cn: "AAPoker上的高额桌行动：'Poker AA'巨鲸与鲨鱼的碰撞之地",
    title_tw: "AAPoker上的高額桌行動：'Poker AA'巨鯨與鯊魚的碰撞之地",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new6-YQyeTRSf.png",
    excerpt: "From $100/$200 to nosebleeds, AAPoker is the new home for high stakes poker. Discover why the biggest 'Poker AA' names are playing here.",
    excerpt_cn: "从$100/$200到超高额注，AAPoker是高额扑克的新家园。探索为什么最大的'Poker AA'名字都在这里玩。",
    excerpt_tw: "從$100/$200到超高額注，AAPoker是高額撲克的新家園。探索為什麼最大的'Poker AA'名字都在這裡玩。"
  },
  {
    id: 49,
    slug: "aapoker-2026-welcome-bonus-best-value-poker-aa-players",
    title: "AAPoker's 2026 Welcome Bonus: The Best Value for 'Poker AA' Players",
    title_cn: "AAPoker 2026欢迎红利：'Poker AA'玩家的最佳价值",
    title_tw: "AAPoker 2026歡迎紅利：'Poker AA'玩家的最佳價值",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new5-BcUZ0CJ6.png",
    excerpt: "Double your deposit and get exclusive tournament tickets. Find out why the new AAPoker Welcome Package is the talk of the 'Poker AA' community.",
    excerpt_cn: "存款翻倍并获得独家锦标赛门票。了解为什么新的AAPoker欢迎礼包成为'Poker AA'社区的热门话题。",
    excerpt_tw: "存款翻倍並獲得獨家錦標賽門票。了解為什麼新的AAPoker歡迎禮包成為'Poker AA'社區的熱門話題。"
  },
  {
    id: 50,
    slug: "dream-of-sponsorship-join-team-aapoker-2026",
    title: "Dreaming of Sponsorship? How to Join Team AAPoker in 2026",
    title_cn: "梦想获得赞助？如何在2026年加入AAPoker战队",
    title_tw: "夢想獲得贊助？如何在2026年加入AAPoker戰隊",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new18-Ck7rU9qQ.png",
    excerpt: "Do you have what it takes to represent the 'Poker AA' brand? Learn what AAPoker scouts are looking for in the next generation of ambassadors.",
    excerpt_cn: "你有能力代表'Poker AA'品牌吗？了解AAPoker星探在寻找什么样的下一代形象大使。",
    excerpt_tw: "你有能力代表'Poker AA'品牌嗎？了解AAPoker星探在尋找什麼樣的下一代形象大使。"
  },
  {
    id: 51,
    slug: "why-plo-is-booming-on-aapoker-action-game",
    title: "Why PLO (Pot Limit Omaha) is Booming on AAPoker: The Action Game of 2026",
    title_cn: "为何PLO（奥马哈）在AAPoker上如此火爆：2026年的动作游戏",
    title_tw: "為何PLO（奧馬哈）在AAPoker上如此火爆：2026年的動作遊戲",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new21-BzbXwbXk.png",
    excerpt: "Forget two cards, try four! Discover why 'Poker AA' enthusiasts are flocking to AAPoker's Pot Limit Omaha tables for bigger pots and more excitement.",
    excerpt_cn: "忘掉两张牌，试试四张！探索为什么'Poker AA'爱好者蜂拥至AAPoker的奥马哈牌桌，寻求更大的底池和更刺激的体验。",
    excerpt_tw: "忘掉兩張牌，試試四張！探索為什麼'Poker AA'愛好者蜂擁至AAPoker的奧馬哈牌桌，尋求更大的底池和更刺激的體驗。"
  },
  {
    id: 52,
    slug: "fair-play-first-inside-aapoker-security-protocols-poker-aa",
    title: "Fair Play First: Inside AAPoker's Security Protocols for 'Poker AA' Integrity",
    title_cn: "公平游戏至上：深入了解AAPoker为'Poker AA'诚信打造的安全协议",
    title_tw: "公平遊戲至上：深入了解AAPoker為'Poker AA'誠信打造的安全協議",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
    excerpt: "How does AAPoker keep the bots away? We take a deep dive into the advanced security measures protecting every 'Poker AA' hand dealt.",
    excerpt_cn: "AAPoker如何将机器人拒之门外？我们深入探讨保护每一手'Poker AA'牌局的先进安全措施。",
    excerpt_tw: "AAPoker如何將機器人拒之門外？我們深入探討保護每一手'Poker AA'牌局的先進安全措施。"
  },
  {
    id: 53,
    slug: "aapoker-vip-club-explained-rewards-for-loyal-players",
    title: "AAPoker VIP Club Explained: Massive Rewards for Loyal Players",
    title_cn: "AAPoker VIP俱乐部详解：忠诚玩家的巨额奖励",
    title_tw: "AAPoker VIP俱樂部詳解：忠誠玩家的巨額獎勵",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new15-CV6z6WoF.png",
    excerpt: "From 60% rakeback to live event packages, the AAPoker VIP Club is setting a new standard. See what you can earn by playing your favorite game.",
    excerpt_cn: "从60%返水到现场赛事套餐，AAPoker VIP俱乐部正在树立新标准。看看通过玩你最喜欢的游戏能赢得什么。",
    excerpt_tw: "從60%返水到現場賽事套餐，AAPoker VIP俱樂部正在樹立新標準。看看通過玩你最喜歡的遊戲能贏得什麼。"
  },
  {
    id: 54,
    slug: "instant-withdrawals-why-aapoker-king-crypto-poker",
    title: "Instant Withdrawals: Why AAPoker is the King of Crypto Poker",
    title_cn: "即时提款：为何AAPoker是加密扑克之王",
    title_tw: "即時提款：為何AAPoker是加密撲克之王",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new37-DoHS0q7h.png",
    excerpt: "Tired of waiting for checks? AAPoker's seamless USDT integration ensures your 'Poker AA' winnings are in your wallet in minutes, not days.",
    excerpt_cn: "厌倦了等待支票？AAPoker的无缝USDT集成确保您的'Poker AA'奖金在几分钟内而不是几天内到达您的钱包。",
    excerpt_tw: "厭倦了等待支票？AAPoker的無縫USDT集成確保您的'Poker AA'獎金在幾分鐘內而不是幾天內到達您的錢包。"
  },
  {
    id: 55,
    slug: "run-your-own-game-ultimate-guide-aapoker-clubs",
    title: "Run Your Own Game: The Ultimate Guide to AAPoker Clubs",
    title_cn: "运营你自己的游戏：AAPoker俱乐部终极指南",
    title_tw: "運營你自己的遊戲：AAPoker俱樂部終極指南",
    date: "February 10, 2026",
    image: "/image/news/section-more-information/new32-CwPTWq6M.png",
    excerpt: "Want to host private 'Poker AA' games for your friends or build a massive poker empire? AAPoker provides the tools you need to succeed.",
    excerpt_cn: "想为朋友举办私人'Poker AA'游戏或建立庞大的扑克帝国？AAPoker为您提供成功所需的工具。",
    excerpt_tw: "想為朋友舉辦私人'Poker AA'遊戲或建立龐大的撲克帝國？AAPoker為您提供成功所需的工具。"
  },
  {
    id: 56,
    slug: "mastering-poker-aa-mindset-how-to-think-like-pro-2026",
    title: "Mastering the 'Poker AA' Mindset: How to Think Like a Pro in 2026",
    title_cn: "掌握'Poker AA'心态：2026年如何像职业选手一样思考",
    title_tw: "掌握'Poker AA'心態：2026年如何像職業選手一樣思考",
    date: "February 13, 2026",
    image: "/image/news/section-more-information/new38-DmsS5Dqe.png",
    excerpt: "Tilt control, discipline, and focus. Learn the mental strategies that separate the 'Poker AA' winners from the rest of the field.",
    excerpt_cn: "情绪控制、纪律和专注。学习区分'Poker AA'赢家和其他人的心理策略。",
    excerpt_tw: "情緒控制、紀律和專注。學習區分'Poker AA'贏家和其他人的心理策略。"
  },
  {
    id: 57,
    slug: "aapoker-bad-beat-jackpot-when-losing-means-winning-big",
    title: "AAPoker Bad Beat Jackpot: When Losing Means Winning Big",
    title_cn: "AAPoker爆冷大奖池：当输牌意味着赢得大奖",
    title_tw: "AAPoker爆冷大獎池：當輸牌意味著贏得大獎",
    date: "February 13, 2026",
    image: "/image/news/section-more-information/new35-BWw_V8k7.png",
    excerpt: "Have you ever lost with Quad Aces? On AAPoker, that 'bad beat' could make you a millionaire. Inside the record-breaking Jackpot system.",
    excerpt_cn: "你曾经拿四条A输过吗？在AAPoker，那种'爆冷'可能会让你成为百万富翁。深入了解破纪录的奖池系统。",
    excerpt_tw: "你曾經拿四條A輸過嗎？在AAPoker，那種'爆冷'可能會讓你成為百萬富翁。深入了解破紀錄的獎池系統。"
  },
  {
    id: 58,
    slug: "aapoker-premier-choice-online-poker-2026",
    title: "AAPoker: The Premier Choice for Online Poker Enthusiasts in 2026",
    title_cn: "AAPoker：2026年在线扑克爱好者的首选平台",
    title_tw: "AAPoker：2026年線上撲克愛好者的首選平台",
    date: "February 15, 2026",
    image: "/image/news/section-more-information/new32-CwPTWq6M.png",
    excerpt: "Discover why AAPoker is leading the industry with fair play certification, instant withdrawals, and a massive global community. The ultimate poker experience awaits.",
    excerpt_cn: "探索为什么AAPoker凭借公平游戏认证、即时提款和庞大的全球社区引领行业。终极扑克体验等着您。",
    excerpt_tw: "探索為什麼AAPoker憑藉公平遊戲認證、即時提款和龐大的全球社區引領行業。終極撲克體驗等著您。"
  },
  {
    id: 59,
    slug: "aapoker-security-revolution-fair-play-2026",
    title: "AAPoker's Security Revolution: Setting the Standard for Fair Play in 2026",
    title_cn: "AAPoker的安全革命：树立2026年公平游戏新标准",
    title_tw: "AAPoker的安全革命：樹立2026年公平遊戲新標準",
    date: "February 16, 2026",
    image: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
    excerpt: "In an era of advanced bots, AAPoker fights back with cutting-edge AI security. Discover how we protect the integrity of every 'Poker AA' hand dealt.",
    excerpt_cn: "在高级机器人时代，AAPoker利用尖端AI安全技术进行反击。了解我们如何保护每一手'Poker AA'牌局的完整性。",
    excerpt_tw: "在高級機器人時代，AAPoker利用尖端AI安全技術進行反擊。了解我們如何保護每一手'Poker AA'牌局的完整性。"
  },
  {
    id: 60,
    slug: "global-poker-boom-2026-asia-leads-charge",
    title: "Global Poker Boom 2026: Asia Leads the Charge with Record-Breaking Numbers",
    title_cn: "2026年全球扑克繁荣：亚洲以创纪录的数字领跑",
    title_tw: "2026年全球撲克繁榮：亞洲以創紀錄的數字領跑",
    date: "February 17, 2026",
    image: "/image/news/section-more-information/new26-CT8-D1vg.png",
    excerpt: "The poker world is witnessing a new golden age, driven by an explosion of interest in Asia. See how platforms like AAPoker are fueling this 'Poker AA' renaissance.",
    excerpt_cn: "扑克世界正在见证一个新的黄金时代，这主要得益于亚洲兴趣的爆发。看看像AAPoker这样的平台如何推动这场'Poker AA'复兴。",
    excerpt_tw: "撲克世界正在見證一個新的黃金時代，這主要得益於亞洲興趣的爆發。看看像AAPoker這樣的平台如何推動這場'Poker AA'復興。"
  },
  {
    id: 61,
    slug: "best-mobile-poker-experience-aapoker-vertical-mode-2026",
    title: "The Best Mobile Poker Experience 2026: Winning Big on AAPoker's Vertical Mode",
    title_cn: "2026年最佳移动扑克体验：在AAPoker竖屏模式上赢得大奖",
    title_tw: "2026年最佳移動撲克體驗：在AAPoker豎屏模式上贏得大獎",
    date: "February 18, 2026",
    image: "/image/news/section-more-information/new22-BaetBDUu.png",
    excerpt: "Forget clunky landscape apps. AAPoker's revolutionary vertical mode lets you play 'Poker AA' with one hand, anytime, anywhere. See why it's the top-rated mobile poker app of 2026.",
    excerpt_cn: "忘记笨重的横屏应用吧。AAPoker革命性的竖屏模式让您可以随时随地单手玩'Poker AA'。看看为什么它是2026年评价最高的移动扑克应用。",
    excerpt_tw: "忘記笨重的橫屏應用吧。AAPoker革命性的豎屏模式讓您可以隨時隨地單手玩'Poker AA'。看看為什麼它是2026年評價最高的移動撲克應用。"
  },
  {
    id: 62,
    slug: "aapoker-promotions-2026-free-chips-bonus",
    title: "AAPoker 2026 Promotions: Your Guide to Free Chips and Massive Bonuses",
    title_cn: "AAPoker 2026 促销活动：免费筹码和巨额红利指南",
    title_tw: "AAPoker 2026 促銷活動：免費籌碼和巨額紅利指南",
    date: "February 18, 2026",
    image: "/image/news/section-more-information/new37-DoHS0q7h.png",
    excerpt: "Want to boost your bankroll? Discover the latest AAPoker promotions for 2026, including welcome bonuses, daily missions, and exclusive 'Poker AA' rewards.",
    excerpt_cn: "想要增加您的资金吗？探索AAPoker 2026年的最新促销活动，包括欢迎红利、每日任务和独家'Poker AA'奖励。",
    excerpt_tw: "想要增加您的資金嗎？探索AAPoker 2026年的最新促銷活動，包括歡迎紅利、每日任務和獨家'Poker AA'獎勵。"
  },
  {
    id: 63,
    slug: "what-is-aapoker-complete-guide-aa-poker-platform-2026",
    title: "What is AAPoker? The Complete Guide to AA Poker Platform in 2026",
    title_cn: "什么是AAPoker？2026年AA Poker平台完整指南",
    title_tw: "什麼是AAPoker？2026年AA Poker平台完整指南",
    date: "February 18, 2026",
    image: "/image/news/section-more-information/new1-CjwHXmsk.png",
    excerpt: "Everything you need to know about AAPoker (AA Poker). Learn why aapoker.top is the #1 choice for online poker players. Download aapoker today and join millions of Poker AA enthusiasts.",
    excerpt_cn: "关于AAPoker（AA Poker）您需要了解的一切。了解为什么aapoker.top是在线扑克玩家的首选。立即下载aapoker，加入数百万Poker AA爱好者。",
    excerpt_tw: "關於AAPoker（AA Poker）您需要了解的一切。了解為什麼aapoker.top是線上撲克玩家的首選。立即下載aapoker，加入數百萬Poker AA愛好者。"
  }
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getLatestNews(count: number = 6): NewsArticle[] {
  return newsArticles.slice(0, count);
}
