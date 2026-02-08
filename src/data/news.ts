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
  }
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getLatestNews(count: number = 6): NewsArticle[] {
  return newsArticles.slice(0, count);
}
