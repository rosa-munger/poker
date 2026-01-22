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
    date: "July 12, 2025",
    image: "/image/news/page/new35-BWw_V8k7.png",
    excerpt: "Congratulations! Michael Mizrachi, in collaboration with AA POKER claimed the championship"
  },
  {
    id: 3,
    slug: "tlpt-jeju-2025-top-money-earners",
    title: "TLPT JEJU 2025",
    date: "May 22, 2025",
    image: "/image/news/page/new43-DrONuJv9.png",
    excerpt: "TLPT JEJU 2025"
  },
  {
    id: 4,
    slug: "poker-tour-co-founder-bags-25k-high-roller-title-jeju",
    title: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju",
    date: "May 21, 2025",
    image: "/image/news/page/new42-CFrt_iU7.png",
    excerpt: "Poker Tour Co-Founder Bags a $25K High Roller Title in Jeju"
  },
  {
    id: 5,
    slug: "red-hot-stephen-song-leads-final-11-tlpt-20k",
    title: "Red Hot Stephen Song Leads Final 11 in TLPT $20k",
    date: "May 20, 2025",
    image: "/image/news/page/1-Dp0ONUPG.png",
    excerpt: "Red Hot Stephen Song Leads Final 11 in TLPT $20k"
  },
  {
    id: 6,
    slug: "is-there-better-poker-tournament-player-stephen-song",
    title: "Is There a Better Poker Tournament Player than Stephen Song Right Now?",
    date: "May 18, 2025",
    image: "/image/news/page/new40-B6XodAXe.png",
    excerpt: "Is There a Better Poker Tournament Player than Stephen Song Right Now?"
  },
  {
    id: 7,
    slug: "tlpt-jeju-2025-main-event-circuit-winner-wezheng",
    title: "TLPT Jeju 2025: Main Event Circuit Winner Wezheng Zhong Among Halfway Highlights",
    date: "May 17, 2025",
    image: "/image/news/section-more-information/1-BJRjznbR.png",
    excerpt: "TLPT Jeju 2025 Main Event Circuit Winner Wezheng Zhong Among Halfway Highlights"
  },
  {
    id: 8,
    slug: "impromptu-trip-pays-off-wezheng-zhong",
    title: "Impromptu Trip Pays Off as Wezheng Zhong Ships TLPT Circuit Main Event",
    date: "May 16, 2025",
    image: "/image/news/section-more-information/new38-DmsS5Dqe.png",
    excerpt: "Impromptu Trip Pays Off as Wezheng Zhong Ships TLPT Circuit Main Event"
  },
  {
    id: 9,
    slug: "poker-player-turned-50-into-100000",
    title: "This Poker Player Just Turned 50 Into $100,000 – Find Out How!",
    date: "May 14, 2025",
    image: "/image/news/section-more-information/new37-DoHS0q7h.png",
    excerpt: "This Poker Player Just Turned 50 Into $100,000 – Find Out How!"
  },
  {
    id: 10,
    slug: "long-lines-mark-opening-day-lord-poker-tlpt-jeju",
    title: "Long Lines Mark Opening Day Of The Lord Poker Tournament – TLPT Jeju",
    date: "May 13, 2025",
    image: "/image/news/section-more-information/2-ByOlVS9r.jpg",
    excerpt: "Long Lines Mark Opening Day Of The Lord Poker Tournament – TLPT Jeju"
  },
  {
    id: 11,
    slug: "king-quan-zhou-tough-guy-dong-chen-perfectly-close-2024",
    title: "'King' Quan Zhou and 'Tough Guy' Dong Chen Perfectly Close 2024, AA POKER Team's '***",
    date: "January 1, 2025",
    image: "/image/news/section-more-information/new34-aR3Xm8MB.png",
    excerpt: "'King' Quan Zhou and 'Tough Guy' Dong Chen Perfectly Close 2024, AA POKER Team's achievements"
  },
  {
    id: 12,
    slug: "wsop-paradise-island-dong-chen-finishes-10th",
    title: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event, Lei Yu Advances to---",
    date: "December 12, 2024",
    image: "/image/news/section-more-information/new33-45I9Okq4.png",
    excerpt: "WSOP Paradise Island: Dong Chen Finishes 10th in Mini Main Event"
  },
  {
    id: 13,
    slug: "aapoker-team-luxury-lineup-brand-new",
    title: "AApoker Team's luxury lineup is brand new, with Dong Chen, Yisha, Mao, Yara, Yao---",
    date: "December 10, 2024",
    image: "/image/news/section-more-information/new32-CwPTWq6M.png",
    excerpt: "AApoker Team's luxury lineup is brand new"
  },
  {
    id: 14,
    slug: "wsop-paradise-island-quan-zhou-dong-chen",
    title: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b, Mini Main Event Day 1b, N---",
    date: "December 08, 2024",
    image: "/image/news/section-more-information/new31--A0IMecX.png",
    excerpt: "WSOP Paradise Island: Quan Zhou and Dong Chen Dominate Day 1b"
  },
  {
    id: 15,
    slug: "congratulations-xu-xin-yin-china-chip-count-leader",
    title: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller---",
    date: "November 25, 2024",
    image: "/image/news/section-more-information/new30-DEJPuf47.png",
    excerpt: "Congratulations XU XIN YIN from China to be the #3 Chip-Single Day Super High Roller"
  },
  {
    id: 16,
    slug: "aa-poker-jeju-won-two-prestigious-championships",
    title: "AA POKER Jeju won two of the most prestigious high-stakes championships",
    date: "November 22, 2024",
    image: "/image/news/section-more-information/new29-Dvv9kn_v.png",
    excerpt: "AA POKER Jeju won two of the most prestigious high-stakes championships"
  },
  {
    id: 17,
    slug: "pure-quality-gold-quan-zhou-tlpt-25k",
    title: "Pure Quality: Gold for Quan Zhou in TLPT $25K International",
    date: "October 4, 2024",
    image: "/image/news/section-more-information/1-CTf9bq3s.png",
    excerpt: "Pure Quality: Gold for Quan Zhou in TLPT $25K International"
  },
  {
    id: 18,
    slug: "andy-lee-takes-down-tlpt-main-event-apt-brisbane",
    title: "Andy Lee takes down TLPT Main Event at APT Brisbane",
    date: "October 3, 2024",
    image: "/image/news/section-more-information/1-b3g8E56X.png",
    excerpt: "Andy Lee takes down TLPT Main Event at APT Brisbane"
  },
  {
    id: 19,
    slug: "2024-pgt-super-high-roller-series-chinese-poker-star",
    title: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory in---",
    date: "August 14, 2024",
    image: "/image/news/section-more-information/new26-CT8-D1vg.png",
    excerpt: "2024 PGT Super High Roller Series: Chinese Poker Star Quan Zhou Soars to Victory"
  },
  {
    id: 20,
    slug: "quan-zhou-won-red-dragon-high-roller",
    title: "Quan Zhou Won the Red Dragon High Roller!",
    date: "August 6, 2024",
    image: "/image/news/section-more-information/new25-CVFu2UJp.png",
    excerpt: "Quan Zhou Won the Red Dragon High Roller!"
  },
  {
    id: 21,
    slug: "jin-bei-cup-xiao-yao-bulldozes-single-day-nlh",
    title: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH",
    date: "May 13, 2024",
    image: "/image/news/section-more-information/new24-DZWWb0yZ.png",
    excerpt: "Jin Bei Cup: Xiao Yao bulldozes through Single Day NLH"
  },
  {
    id: 22,
    slug: "china-boxin-jin-claims-maiden-apt-title",
    title: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout",
    date: "May 8, 2024",
    image: "/image/news/section-more-information/new23-zF0Rc3Ik.png",
    excerpt: "China's Boxin Jin Claims Maiden APT Title in Event #11: NL Hold'em – Freezeout"
  },
  {
    id: 23,
    slug: "china-jin-boxin-beats-jeju-dragon-quest-field",
    title: "China's Jin Boxin beats Jeju Dragon Quest field – KRW $7,770,000 (~USD $5,636)",
    date: "March 28, 2024",
    image: "/image/news/section-more-information/new22-BaetBDUu.png",
    excerpt: "China's Jin Boxin beats Jeju Dragon Quest field"
  },
  {
    id: 24,
    slug: "whirlwind-quan-zhou-races-first-triton-title",
    title: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event.",
    date: "March 18, 2024",
    image: "/image/news/section-more-information/new21-BzbXwbXk.png",
    excerpt: "Whirlwind Quan Zhou Races to First Triton Title in $25K Plo Event"
  },
  {
    id: 25,
    slug: "quan-zhou-took-runner-up-prize-mystery-bounty",
    title: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty (€21,500)",
    date: "February 28, 2024",
    image: "/image/news/section-more-information/new20-DcZjf8Oo.png",
    excerpt: "Quan Zhou took the runner-up prize in the €10,200 Mystery Bounty"
  },
  {
    id: 26,
    slug: "aapoker-poker-community-without-thieves",
    title: "AApoker, a poker community without thieves. A fun and honest game is coming!",
    date: "February 4, 2024",
    image: "/image/news/section-more-information/new19-Dyx8YjQZ.png",
    excerpt: "AApoker, a poker community without thieves. A fun and honest game is coming!"
  },
  {
    id: 27,
    slug: "king-quan-zhou-becoming-aa-poker-global-ambassador",
    title: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador",
    date: "January 30, 2024",
    image: "/image/news/section-more-information/new18-Ck7rU9qQ.png",
    excerpt: "King Quan Zhou is Becoming AA POKER Global Tournament Ambassador"
  },
  {
    id: 28,
    slug: "wesley-new-brand-ambassador-aa-poker",
    title: "Wesley: New brand ambassador of AA POKER",
    date: "January 23, 2024",
    image: "/image/news/section-more-information/new17-Crj0riBD.png",
    excerpt: "Wesley: New brand ambassador of AA POKER"
  },
  {
    id: 29,
    slug: "jungleman-plays-high-stakes-andy-mariano-pepe",
    title: "Jungleman Plays HIGH STAKES $50/100/200w/ Andy, Mariano, Pepe, DJ Washburn & Mars",
    date: "November 11, 2023",
    image: "/image/news/section-more-information/new1-CjwHXmsk.png",
    excerpt: "Jungleman Plays HIGH STAKES with top players"
  },
  {
    id: 30,
    slug: "lord-poker-tournament-top-money-earners",
    title: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new2-BWLg7F35.png",
    excerpt: "THE LORD POKER TOURNAMENT TOP MONEY EARNERS"
  },
  {
    id: 31,
    slug: "tlpt-international-high-rollers",
    title: "TLPT INTERNATIONAL HIGH-ROLLERS",
    date: "October 28, 2023",
    image: "/image/news/section-more-information/new3-DJ4OVbWv.png",
    excerpt: "TLPT INTERNATIONAL HIGH-ROLLERS"
  },
  {
    id: 32,
    slug: "tlpt-international-10k-challenge-final-table",
    title: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE",
    date: "October 26, 2023",
    image: "/image/news/section-more-information/new4-Cu069u94.png",
    excerpt: "TLPT INTERNATIONAL 10K CHALLENGE FINAL TABLE"
  },
  {
    id: 33,
    slug: "tlpt-international-25k-challenge-final-table",
    title: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE",
    date: "October 25, 2023",
    image: "/image/news/section-more-information/new5-BcUZ0CJ6.png",
    excerpt: "TLPT INTERNATIONAL 25K CHALLENGE FINAL TABLE"
  },
  {
    id: 34,
    slug: "super-high-stakes-jungleman-andy-nik-pepe-mars",
    title: "SUPER HIGH STAKES $100/200/400!! Jungleman, Andy, Nik Airball, Pepe, Mars ---",
    date: "October 1, 2023",
    image: "/image/news/section-more-information/new6-YQyeTRSf.png",
    excerpt: "SUPER HIGH STAKES featuring top poker players"
  },
  {
    id: 35,
    slug: "aa-poker-largest-sponsor-tlpt-event",
    title: "AA POKER, the largest sponsor of the TLPT event",
    date: "October 4, 2023",
    image: "/image/news/section-more-information/new7-DeSa_0MK.png",
    excerpt: "AA POKER, the largest sponsor of the TLPT event"
  },
  {
    id: 36,
    slug: "that-man-zheming-zhu-wins-10k-world-champs",
    title: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER",
    date: "September 26, 2023",
    image: "/image/news/section-more-information/new8-DRKualZL.png",
    excerpt: "That man Zheming Zhu wins $10k World Champs Warm-up with AA POKER"
  },
  {
    id: 37,
    slug: "free-satellite-tournament",
    title: "Free Satellite Tournament",
    date: "September 22, 2023",
    image: "/image/news/section-more-information/new9-BrQE2WQx.png",
    excerpt: "Free Satellite Tournament"
  },
  {
    id: 38,
    slug: "aa-poker-global-pre-launch",
    title: "AA POKER Global pre-launch",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new11-ij5p31Lq.png",
    excerpt: "AA POKER Global pre-launch"
  },
  {
    id: 39,
    slug: "jungleman-aapoker-brand-ambassador",
    title: "Jungleman—AAPOKER BRAND AMBASSADOR!",
    date: "August 27, 2023",
    image: "/image/news/section-more-information/new12-BENtmTP7.png",
    excerpt: "Jungleman—AAPOKER BRAND AMBASSADOR!"
  },
  {
    id: 40,
    slug: "triton-poker-series-london-2023-event-11",
    title: "Triton Poker Series London 2023 - Event #11 $125k NLH Main Event - Final Table",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new13-iwFbbVs7.png",
    excerpt: "Triton Poker Series London 2023 - Event #11 Final Table"
  },
  {
    id: 41,
    slug: "triton-poker-series-london-2023-event-9",
    title: "Triton Poker Series London 2023 - Event #9 $250k NLH Luxm Invitational - FINAL TABLE",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new14-CrTzrfZC.png",
    excerpt: "Triton Poker Series London 2023 - Event #9 FINAL TABLE"
  },
  {
    id: 42,
    slug: "why-bryn-kenney-most-valuable-man-poker",
    title: "Why is Bryn Kenney the most valuable man in poker?",
    date: "August 5, 2023",
    image: "/image/news/section-more-information/new15-CV6z6WoF.png",
    excerpt: "Why is Bryn Kenney the most valuable man in poker?"
  },
  {
    id: 43,
    slug: "aa-poker-player-story-chris-moneymaker",
    title: "AA POKER Player Story—Chris Moneymaker",
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
