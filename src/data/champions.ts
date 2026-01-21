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
  name: string;
  country: string;
  countryFlag: string;
  image: string;
  bannerImage: string;
  totalLiveEarnings: string;
  bestLiveCash: string;
  allTimeMoneyList: string;
  globalPokerIndexRanking: string;
  introduction: string[];
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
    name: "BRYN KENNEY",
    country: "USA",
    countryFlag: "🇺🇸",
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
    name: "JUNGLEMAN",
    country: "USA",
    countryFlag: "🇺🇸",
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
    name: "JOE HACHEM",
    country: "Australia",
    countryFlag: "🇦🇺",
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
    socialLinks: {},
    events: []
  },
  {
    id: 4,
    slug: "zhou-quan",
    name: "ZHOU QUAN",
    country: "China",
    countryFlag: "🇨🇳",
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
    name: "CHEN DONG",
    country: "China",
    countryFlag: "🇨🇳",
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
    name: "DIDIER GUERIN",
    country: "Australia",
    countryFlag: "🇦🇺",
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
    name: "MAO RENJI",
    country: "China",
    countryFlag: "🇨🇳",
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
    socialLinks: {},
    events: []
  },
  {
    id: 8,
    slug: "chen-yisha",
    name: "CHEN YISHA",
    country: "China",
    countryFlag: "🇨🇳",
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
    socialLinks: {},
    events: []
  }
];

// Third row - remaining champions
export const thirdRowChampions: Champion[] = [
  {
    id: 9,
    slug: "zhu-zheming",
    name: "ZHU ZHEMING",
    country: "Australia",
    countryFlag: "🇦🇺",
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
    name: "XIAO YAO",
    country: "China",
    countryFlag: "🇨🇳",
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
    name: "JIN BOXIN",
    country: "China",
    countryFlag: "🇨🇳",
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
    name: "YARA",
    country: "China",
    countryFlag: "🇨🇳",
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
