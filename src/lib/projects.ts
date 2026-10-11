export type ProjectScreen = {
  cover: string;
  label: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  label: string;
  summary: string;
  cover: string;
  tags: string[];
  design: string[];
  development: string[];
  role: string;
  services: string[];
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  build: string;
  highlights: string[];
  screens: ProjectScreen[];
  live?: string;
  featured?: boolean;
  system: {
    typeface: string;
    colors: { name: string; value: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "streamvibe",
    title: "StreamVibe",
    year: "2026",
    label: "Product design · Frontend development",
    summary:
      "A modern movie discovery experience designed and developed from end to end, combining thoughtful UX with a responsive frontend.",
    cover: "/images/streamvibe/home.png",
    tags: ["Next.js", "React", "TMDB API", "Tailwind CSS", "Product design"],
    design: ["UX", "User flows", "UI design", "Responsive layouts", "Design system"],
    development: ["Next.js", "React", "Tailwind CSS", "API integration", "Responsive implementation"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "Design system", "Frontend"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    challenge:
      "A streaming product has to feel like one place. Discovery, a title, a plan, and playback were drifting into separate moods.",
    approach:
      "I designed the path from browse to play first, then built those frames in Next.js on one token set: near-black, white, gray, and a red action.",
    outcome:
      "StreamVibe ships as a Next.js product. Movies and shows stay separate catalogs, and the same pricing, posters, and headings run through marketing and the product.",
    build:
      "The app uses the Next.js App Router. Catalog data comes from the TMDB API. Home is cached and revalidated every six hours so the hero can paint first. A movie id that belongs only to a show redirects into the show path. Trailers can play in place, and Escape closes them. On a small screen the desktop grid of trailer players is not mounted.",
    highlights: [
      "Designed the path from browse to play before the screens",
      "Shared pricing, posters, and headings between marketing and product",
      "Kept one token set: Manrope, near-black, white, gray, and red",
      "Built the home so the hero paints before the rest of the page",
    ],
    screens: [
      {
        cover: "/images/streamvibe/home.png",
        label: "Home",
        caption: "Discovery starts on one field. The hero is the first thing that paints.",
      },
      {
        cover: "/images/streamvibe/title.png",
        label: "Title",
        caption: "A title explains itself before anyone is asked to press play.",
      },
      {
        cover: "/images/streamvibe/watch.png",
        label: "Watch",
        caption: "The player is the last frame of the same product.",
      },
      {
        cover: "/images/streamvibe/plans.png",
        label: "Plans",
        caption: "Subscriptions use the same type, field, and action as the rest of the product.",
      },
      {
        cover: "/images/streamvibe/movies.png",
        label: "Catalog",
        caption: "Movies stay a catalog of their own, on the same field.",
      },
      {
        cover: "/images/streamvibe/browse-web.png",
        label: "Browse",
        caption: "Browse keeps discovery on the same field as home.",
      },
    ],
    system: {
      typeface: "Manrope",
      colors: [
        { name: "Field", value: "#141414" },
        { name: "Type", value: "#FFFFFF" },
        { name: "Muted", value: "#999999" },
        { name: "Action", value: "#E50000" },
        { name: "Card", value: "#0F0F0F" },
        { name: "Border", value: "#262626" },
      ],
    },
  },
  {
    slug: "tobams",
    title: "Tobams Group",
    year: "2026",
    label: "Product design · Team",
    summary:
      "Tobams Group is a UK talent and digital consulting company. This is an overview of the live site and the company I joined as Associate Product Designer — the website is a team effort.",
    cover: "/images/tobams/live-home.jpg",
    live: "https://www.tobamsgroup.com/",
    tags: ["Product design", "Website", "Talent", "Team"],
    design: ["Homepage", "About", "Jobs", "Information hierarchy"],
    development: [],
    role: "Associate Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma", "DM Sans"],
    challenge:
      "Visitors needed a clear picture of who Tobams Group is: talent, consulting, academy, and how to join.",
    approach:
      "I joined the design team. The live site is a shared product. This case study is an overview of the company and the surfaces people meet first: home, about, and jobs.",
    outcome:
      "tobamsgroup.com introduces the company in one place — who they are, what they offer, and where to apply.",
    build:
      "I contributed as Associate Product Designer on the team. The screens below are from the live company site, not a solo build.",
    highlights: [
      "An overview of the company, not a solo redesign",
      "Home, about, and jobs as the entry to Tobams Group",
      "Worked with the team on the voting and competition process for Tobams × Access",
      "Type set in DM Sans across the live site",
    ],
    screens: [
      {
        cover: "/images/tobams/live-home.jpg",
        label: "Homepage",
        caption: "tobamsgroup.com — the live company site.",
      },
      {
        cover: "/images/tobams/live-about.jpg",
        label: "About",
        caption: "Who they are, and the talent work behind the brand.",
      },
      {
        cover: "/images/tobams/live-jobs.jpg",
        label: "Jobs",
        caption: "Open roles, including product design, on the same site.",
      },
      {
        cover: "/images/tobams/live-products.jpg",
        label: "Products",
        caption: "AI-driven assessment and the product range on the live site.",
      },
      {
        cover: "/images/tobams/live-consult.jpg",
        label: "Consultation",
        caption: "Book a consultation — the live contact path.",
      },
      {
        cover: "/images/tobams/live-pricing.jpg",
        label: "Pricing",
        caption: "Plans on tobamsgroup.com.",
      },
      {
        cover: "/images/tobams/live-projects.jpg",
        label: "Projects",
        caption: "Project highlights from the live company site.",
      },
    ],
    system: {
      typeface: "DM Sans",
      colors: [
        { name: "Paper", value: "#FFFFFF" },
        { name: "Ink", value: "#1A1024" },
        { name: "Plum", value: "#5B1D6A" },
        { name: "Rose", value: "#E11D48" },
        { name: "Muted", value: "#6B6375" },
        { name: "Line", value: "#E8E4EC" },
      ],
    },
  },
  {
    slug: "rlkids",
    title: "RLkids",
    year: "2026",
    label: "Product design · Team",
    summary:
      "Recycled Learning for Kids is an AI-powered platform for ages 7–14. I worked with the team on the product: stories, games, and personalised pathways for real-world skills.",
    cover: "/images/rlkids/live-home.jpg",
    live: "https://rlkids.ai/",
    tags: ["Product design", "EdTech", "AI", "Team"],
    design: ["Homepage", "Learning paths", "Series catalog", "App surfaces"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "Kids aged 7–14 needed a place to learn leadership, AI, finance, and strategy that felt like play, not a classroom.",
    approach:
      "I worked with the team on Recycled Learning for Kids. The live product mixes story-led series, gamified lessons, and an AI path that follows each child’s pace.",
    outcome:
      "rlkids.ai is a live learning product: a homepage, a series catalog, pricing, and an app that puts books, badges, and progress in one place.",
    build:
      "This is a team product. The screens below are from the live site, not a solo build.",
    highlights: [
      "A team project, not a solo redesign",
      "Home, series, pricing, and the app as one learning path",
      "AI-personalised lessons wrapped in stories and games",
      "Skills in AI, leadership, strategy, sustainability, entrepreneurship, and finance",
    ],
    screens: [
      {
        cover: "/images/rlkids/live-home.jpg",
        label: "Homepage",
        caption: "rlkids.ai — building future-ready kids through AI-powered learning.",
      },
      {
        cover: "/images/rlkids/live-features.jpg",
        label: "Learning model",
        caption: "AI-powered paths, 162 life-skills series, and gamified lessons.",
      },
      {
        cover: "/images/rlkids/live-devices.jpg",
        label: "App",
        caption: "Read mode, quizzes, progress, and badges on the RLKids mobile app.",
      },
      {
        cover: "/images/rlkids/live-waitlist.jpg",
        label: "Product",
        caption: "Learner home and a teacher dashboard on the live product.",
      },
      {
        cover: "/images/rlkids/live-app.jpg",
        label: "Series",
        caption: "Think Sustainability, Think Finance, and the rest of the catalog.",
      },
      {
        cover: "/images/rlkids/live-pricing.jpg",
        label: "Pricing",
        caption: "Read, or Read + Play & Learn, on rlkids.ai.",
      },
      {
        cover: "/images/rlkids/live-about.jpg",
        label: "About",
        caption: "The team’s mission: real-world skills for a better future.",
      },
    ],
    system: {
      typeface: "Poppins",
      colors: [
        { name: "Forest", value: "#0B3D2E" },
        { name: "Leaf", value: "#2FA35A" },
        { name: "Sun", value: "#F5C518" },
        { name: "Blue", value: "#1B4F9A" },
        { name: "Paper", value: "#EEF6EE" },
        { name: "Ink", value: "#14201A" },
      ],
    },
  },
  {
    slug: "exyra",
    title: "Exyra",
    year: "2025",
    label: "AI · Crypto · Product design",
    summary:
      "An AI-powered crypto experience focused on intelligent interactions, AI agents, rewards, wallet experiences and user engagement.",
    cover: "/images/exyra/live-home.jpg",
    live: "https://exyra-lake.vercel.app/",
    tags: ["AI", "Product design", "Crypto", "Figma", "React"],
    design: ["Agent flows", "Wallet states", "Dark interface", "Reward moments"],
    development: ["React", "Tailwind CSS", "Components from Figma"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "UI", "Frontend"],
    stack: ["React", "JavaScript", "Tailwind CSS", "Figma"],
    challenge:
      "Crypto products often explain the market and forget the person. Exyra had to make an agent, a wallet, and a reward feel like one conversation.",
    approach:
      "I designed the dark interface around the next decision: ask the agent, check the wallet, or see a reward. Then I built the frontend from those Figma frames.",
    outcome:
      "The interface keeps the agent, the wallet, and rewards on one dark surface, with states a person can read without a second product.",
    build:
      "I developed the frontend in React and Tailwind CSS from the Figma designs: reusable components, responsive layouts, and the same structure on phone and desktop.",
    highlights: [
      "Put the agent, wallet, and reward on one path",
      "Designed the dark interface before writing components",
      "Built the screens from the Figma file, not a separate interpretation",
      "Kept each state readable on a phone",
    ],
    screens: [
      {
        cover: "/images/exyra/live-home.jpg",
        label: "Agent",
        caption: "The live Exyra agent: ask, execute, and stay on one surface.",
      },
      {
        cover: "/images/exyra/live-wallet.jpg",
        label: "Wallet",
        caption: "Connect Wallet from the live Exyra product.",
      },
      {
        cover: "/images/exyra/live-rewards.jpg",
        label: "Rewards",
        caption: "Badges and reward tiers from the live Exyra product.",
      },
      {
        cover: "/images/exyra/live-reward-system.jpg",
        label: "Reward system",
        caption: "The Exyra Rewards System — Orbit, Aether, Nexus, and the rest.",
      },
      {
        cover: "/images/exyra/live-agents.jpg",
        label: "Agents",
        caption: "Explore Agents on the live platform.",
      },
    ],
    system: {
      typeface: "Inter",
      colors: [
        { name: "Field", value: "#1C1C1C" },
        { name: "Type", value: "#F5F5F5" },
        { name: "Muted", value: "#8A8A8A" },
        { name: "Action", value: "#FF7A45" },
        { name: "Card", value: "#2A2A2A" },
        { name: "Line", value: "#3A3A3A" },
      ],
    },
  },
  {
    slug: "fraktia",
    title: "Fraktia",
    year: "2025",
    label: "AI product · Team",
    summary:
      "A futuristic AI product experience designed around intelligent agents, rewards and engaging digital interactions. I worked with the team on the product.",
    cover: "/images/fraktia/interface.jpg",
    tags: ["AI", "Product design", "Frontend", "Team"],
    design: ["Agent cards", "Rewards", "Dashboard", "Interactive states"],
    development: ["React", "Component states", "Responsive layout"],
    role: "Product Designer × Frontend Developer",
    services: ["UX/UI", "Product design", "Frontend"],
    stack: ["Figma", "React", "Tailwind CSS"],
    challenge:
      "An agent product can look clever and still be unclear. Fraktia needed a dashboard where the agent, the reward, and the next step are obvious.",
    approach:
      "I worked with the team. Agent cards became the unit of the product, then the dashboard around them. Interactive states were drawn before they were built.",
    outcome:
      "Fraktia reads as one AI product: a dashboard of agents, a reward state, and an interaction that stays on the same surface.",
    build:
      "This is a team product. The interface is built as reusable React components. Each agent card carries its own state, and the layout holds from a phone to a desktop dashboard.",
    highlights: [
      "A team project, not a solo build",
      "Made the agent card the unit of the interface",
      "Drew hover, active, and reward states before code",
      "Kept the dashboard quiet enough to read",
    ],
    screens: [
      {
        cover: "/images/fraktia/interface.jpg",
        label: "Builder",
        caption: "Design, configure, and build an agent on one dark field.",
      },
      {
        cover: "/images/fraktia/builder-ui.jpg",
        label: "Agents",
        caption: "Agent cards sit beside the framework tree.",
      },
      {
        cover: "/images/fraktia/core-live.jpg",
        label: "Launch",
        caption: "The same interface, held in the Fraktia Core launch frame from X.",
      },
      {
        cover: "/images/fraktia/beta.jpg",
        label: "Beta",
        caption: "Fraktia Core live on beta testing, with the builder on screen.",
      },
      {
        cover: "/images/fraktia/messier.jpg",
        label: "Partnership",
        caption: "Fraktia in the wild — the same system, held as a launch frame.",
      },
    ],
    system: {
      typeface: "Syne",
      colors: [
        { name: "Field", value: "#0A0A0A" },
        { name: "Type", value: "#F5F5E8" },
        { name: "Muted", value: "#8A8A7A" },
        { name: "Lime", value: "#D4E157" },
        { name: "Card", value: "#121210" },
        { name: "Line", value: "#2A2A22" },
      ],
    },
  },
  {
    slug: "stanbic",
    title: "Stanbic Homepage Redesign",
    year: "2026",
    label: "Product design · UX/UI",
    summary:
      "An independent homepage redesign concept focused on improving clarity, navigation, information hierarchy and the overall banking experience.",
    cover: "/images/stanbic/hero.png",
    tags: ["Product design", "UX/UI", "Banking", "Figma"],
    design: ["Homepage", "Navigation", "Information hierarchy", "Responsive screens"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "A bank homepage asks a person to do too many things at once. Accounts, cards, loans, and rates were competing for the first screen.",
    approach:
      "I treated this as an independent concept. The first screen is a promise and a path. Products, rates, and stories come after the person knows where they are.",
    outcome:
      "The concept gives Stanbic IBTC a clearer homepage: one headline, a calm navigation, and sections that separate personal banking, offers, and rates.",
    build:
      "This is a design concept, drawn in Figma for desktop and the supporting screens. It is not a production frontend and it is not the live bank site.",
    highlights: [
      "Led with one headline instead of a wall of products",
      "Separated personal banking, offers, and rates",
      "Kept the blue of the brand and simplified the page",
      "Designed the homepage as a path, not a brochure",
    ],
    screens: [
      {
        cover: "/images/stanbic/col-left.png",
        label: "Hero",
        caption: "The first screen states the promise and leaves room to choose a path.",
      },
      {
        cover: "/images/stanbic/col-mid.png",
        label: "Products",
        caption: "Internet banking, cards, and accounts each get a section.",
      },
      {
        cover: "/images/stanbic/col-right.png",
        label: "Rates",
        caption: "Exchange, eNaira, and the close of the homepage.",
      },
      {
        cover: "/images/stanbic/hero.png",
        label: "Homepage",
        caption: "Hero and products side by side as one banking path.",
      },
      {
        cover: "/images/stanbic/board.png",
        label: "Full page",
        caption: "The homepage as one board: hero, products, and rates.",
      },
    ],
    system: {
      typeface: "Inter",
      colors: [
        { name: "Blue", value: "#0033A0" },
        { name: "Type", value: "#0F172A" },
        { name: "Paper", value: "#FFFFFF" },
        { name: "Gold", value: "#C4A35A" },
        { name: "Muted", value: "#64748B" },
        { name: "Line", value: "#E2E8F0" },
      ],
    },
  },
  {
    slug: "styleloom",
    title: "StyleLoom",
    year: "2026",
    label: "Ecommerce · Product design · Frontend",
    summary:
      "A dark luxury fashion store: new season, a shop grid, and a product page that makes add-to-bag the only decision.",
    cover: "/images/styleloom/live-home.jpg",
    live: "https://style-loom-umber.vercel.app/",
    tags: ["Ecommerce", "Product design", "Frontend", "Fashion", "Figma"],
    design: ["Homepage", "Shop listing", "Product page", "Design system"],
    development: ["React", "Responsive layout"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "Frontend", "UX/UI", "Design system"],
    stack: ["Figma", "React"],
    challenge:
      "Fashion ecommerce often shouts. StyleLoom needed a quiet store that still converts: find a piece, choose a size, add it.",
    approach:
      "I designed three screens as one system. The homepage is editorial. The shop is a grid with filters. The product page holds the coat, the size, and the bag.",
    outcome:
      "StyleLoom reads as one dark store: black field, cream type, gold action, and photography that does the selling.",
    build:
      "The work is the product design: homepage, listing, and product page on one token set a frontend can ship.",
    highlights: [
      "Led with one editorial hero instead of a banner stack",
      "Kept filters beside the grid, not in a drawer first",
      "Made size and add-to-bag the only work on the product page",
      "Held black, cream, and gold as the whole system",
    ],
    screens: [
      {
        cover: "/images/styleloom/live-home.jpg",
        label: "Home",
        caption: "The live StyleLoom store: editorial hero, then the shop.",
      },
      {
        cover: "/images/styleloom/live-shop.jpg",
        label: "Shop",
        caption: "Collections and product cards on the same dark field.",
      },
      {
        cover: "/images/styleloom/live-product.jpg",
        label: "Product",
        caption: "A single piece, materials, and add to cart.",
      },
      {
        cover: "/images/styleloom/live-cart.jpg",
        label: "Cart",
        caption: "The bag on the live StyleLoom store.",
      },
      {
        cover: "/images/styleloom/live-contact.jpg",
        label: "Contact",
        caption: "Contact on the live StyleLoom store.",
      },
      {
        cover: "/images/styleloom/live-orders.jpg",
        label: "Orders",
        caption: "Track a package and order history on the live store.",
      },
      {
        cover: "/images/styleloom/live-womens.jpg",
        label: "Womens",
        caption: "The womens collection on the live StyleLoom store.",
      },
    ],
    system: {
      typeface: "Inter",
      colors: [
        { name: "Field", value: "#0B0B0B" },
        { name: "Type", value: "#FFFFFF" },
        { name: "Muted", value: "#9A9A9A" },
        { name: "Sand", value: "#C9B8A4" },
        { name: "Card", value: "#141414" },
        { name: "Line", value: "#2C2C2C" },
      ],
    },
  },
  {
    slug: "farm-rush",
    title: "Farm Rush",
    year: "2025",
    featured: false,
    label: "Game · Product design",
    summary:
      "A game landing page for a fast-paced farming adventure: harvest, upgrade, and outplay friends on one colourful field.",
    cover: "/images/farm-rush/landing.png",
    tags: ["Product design", "Game", "Landing page", "Figma"],
    design: ["Landing page", "Hero", "Game info", "Store badges"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma", "Canva"],
    challenge:
      "A farming game had to feel like play in the first screen: store, harvest, and a reason to tap Play now.",
    approach:
      "I designed a landing page around one hero, a Play now action, and short beats for farming, expeditions, and rewards.",
    outcome:
      "Farm Rush reads as a game you can join: a cartoon hero, store badges, and a dark field for the rest of the product.",
    build:
      "This is a design case from Behance, drawn in Figma for a Game Nest landing page. It is not a production frontend.",
    highlights: [
      "One hero that names the game and points to the stores",
      "Play now sits on the same field as harvest and upgrade",
      "Fun awaits cards for farming, expeditions, and rewards",
      "Game info, platforms, and a subscribe path at the end",
    ],
    screens: [
      {
        cover: "/images/farm-rush/landing.png",
        label: "Landing",
        caption: "The Farm Rush hero: a farmer, a horse, and the stores.",
      },
      {
        cover: "/images/farm-rush/play.png",
        label: "Play",
        caption: "Welcome, Play now, and the first two game stills.",
      },
      {
        cover: "/images/farm-rush/fun.png",
        label: "Fun awaits",
        caption: "Farming, expeditions, and rewards as three cards.",
      },
      {
        cover: "/images/farm-rush/cover.png",
        label: "Win",
        caption: "A Farm Rush win frame — Yay — on the wood field.",
      },
      {
        cover: "/images/farm-rush/info.png",
        label: "Info",
        caption: "Game info, other titles, and a subscribe path.",
      },
    ],
    system: {
      typeface: "Fredoka",
      colors: [
        { name: "Navy", value: "#1A1440" },
        { name: "Orange", value: "#F0A03A" },
        { name: "Sky", value: "#7EC8E3" },
        { name: "Grass", value: "#5CAD3A" },
        { name: "Type", value: "#FFFFFF" },
        { name: "Wood", value: "#C47A3A" },
      ],
    },
  },
  {
    slug: "uncle-tobi",
    title: "Uncle Tobi",
    year: "2025",
    featured: false,
    label: "Ecommerce · Product design",
    summary:
      "A recipes and tips site for Nigerian cooking — jollof, egusi, video tutorials, and a shop that feels like a home-cooked meal.",
    cover: "/images/uncle-tobi/home.png",
    tags: ["Product design", "Ecommerce", "Web design", "Figma"],
    design: ["Homepage", "Recipes listing", "Cooking tips", "Video tutorials"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "A recipes site had to feel warm and easy: search a dish, read a tip, watch a tutorial, without looking like a catalogue.",
    approach:
      "I designed Uncle Tobi as a kitchen table. Hero, latest recipes, cooking tips, and video tutorials sit in one scroll, with a shop path in the header.",
    outcome:
      "uncletobi.shop is a design: Simple and Tasty Recipes, jollof and egusi on the first screen, and a recipes listing with saved dishes beside it.",
    build:
      "This is a design case from Behance, drawn in Figma. It is not a production frontend.",
    highlights: [
      "A warm hero with search for a recipe or a cooking tip",
      "Latest recipes lead with jollof, egusi, and moi moi",
      "Cooking tips and video tutorials on the same home scroll",
      "A recipes listing with saved dishes and recommended tutorials",
    ],
    screens: [
      {
        cover: "/images/uncle-tobi/home.png",
        label: "Home",
        caption: "Simple and Tasty Recipes — search, then the latest dishes.",
      },
      {
        cover: "/images/uncle-tobi/listing.png",
        label: "Recipes",
        caption: "The recipes listing with saved dishes and tutorials beside it.",
      },
      {
        cover: "/images/uncle-tobi/tips.png",
        label: "Tips",
        caption: "Cooking tips: pounded yam, boli, ofada rice.",
      },
      {
        cover: "/images/uncle-tobi/videos.png",
        label: "Tutorials",
        caption: "Video tutorials and a shop signup at the end of home.",
      },
      {
        cover: "/images/uncle-tobi/cover.png",
        label: "Poster",
        caption: "The Uncle Tobi home, held as a poster in a bright room.",
      },
    ],
    system: {
      typeface: "Plus Jakarta Sans",
      colors: [
        { name: "Leaf", value: "#7CB342" },
        { name: "Ink", value: "#1A2332" },
        { name: "Paper", value: "#FFFFFF" },
        { name: "Muted", value: "#6B7280" },
        { name: "Field", value: "#1B2430" },
        { name: "Line", value: "#E5E7EB" },
      ],
    },
  },
  {
    slug: "portfolio-app",
    title: "Portfolio Management App",
    year: "2025",
    featured: false,
    label: "Product design · Mobile",
    summary:
      "A light and dark mobile UI for watching a portfolio: funds, insights, and invest, without noise.",
    cover: "/images/portfolio/cover.png",
    tags: ["Product design", "Mobile", "Fintech", "Figma"],
    design: ["Light mode", "Dark mode", "Portfolio home", "Invest actions"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "A portfolio app can look busy. This one had to stay simple in daylight and at night, with Add funds and Invest now easy to find.",
    approach:
      "I designed one layout for light and dark. Soft space in the day, a focused field at night, and the same actions in both.",
    outcome:
      "The app holds a total, three sleeves, and a path into funds, invest, and insights — in light, in dark, and on a watch.",
    build:
      "This is a design case from Behance, drawn in Figma with light and dark themes. It is not a production frontend.",
    highlights: [
      "One layout for light and dark, not two products",
      "Add funds, Invest now, and View insights as the three actions",
      "Tech, energy, and real estate sleeves on the first screen",
      "The same home on phone, tablet, and watch mockups",
    ],
    screens: [
      {
        cover: "/images/portfolio/cover.png",
        label: "Themes",
        caption: "Light and dark on the same home: portfolio value and three sleeves.",
      },
      {
        cover: "/images/portfolio/light.jpeg",
        label: "Light",
        caption: "The light home on a phone — Add funds, Invest now, View insights.",
      },
      {
        cover: "/images/portfolio/flow.png",
        label: "In hand",
        caption: "The same light home, held in hand.",
      },
      {
        cover: "/images/portfolio/dark.jpeg",
        label: "Dark",
        caption: "Dark mode on a tablet: the same sleeves, a quieter field.",
      },
      {
        cover: "/images/portfolio/phone.jpeg",
        label: "Phone",
        caption: "The light home on a phone, held against colour.",
      },
      {
        cover: "/images/portfolio/mock.jpeg",
        label: "Watch",
        caption: "Portfolio value on a watch — the same numbers, a smaller face.",
      },
    ],
    system: {
      typeface: "Inter",
      colors: [
        { name: "Field", value: "#0B0B0B" },
        { name: "Paper", value: "#F7F7F8" },
        { name: "Type", value: "#111111" },
        { name: "Action", value: "#4C6FFF" },
        { name: "Gain", value: "#1DBF73" },
        { name: "Card", value: "#1A1A1A" },
      ],
    },
  },
];

projects.sort((a, b) => Number(b.year) - Number(a.year));

export const featuredProjects = projects.filter((project) => project.featured !== false);

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
};

export const getOtherProjects = (slug: string, count = 3) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return [];
  const others: (typeof projects)[number][] = [];
  for (let step = 1; step < projects.length && others.length < count; step += 1) {
    others.push(projects[(index + step) % projects.length]);
  }
  return others;
};

export const projectNumber = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return String(index + 1).padStart(2, "0");
};
