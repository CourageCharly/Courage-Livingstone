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
      "StreamVibe is a movie and TV app I designed and built. You browse movies and shows, open a title, compare plans, and watch, all in one Next.js product.",
    cover: "/images/streamvibe/home.png",
    tags: ["Next.js", "React", "TMDB API", "Tailwind CSS", "Product design"],
    design: ["UX", "User flows", "UI design", "Responsive layouts", "Design system"],
    development: ["Next.js", "React", "Tailwind CSS", "API integration", "Responsive implementation"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "Design system", "Frontend"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    challenge:
      "Finding a film, reading about it, choosing a plan, and pressing play were starting to feel like different products. StreamVibe needed one clear path from the home page to the player.",
    approach:
      "I designed that path first, then built the screens in Next.js. Movies and shows stay in their own catalogs. Prices, posters, and headings use the same type and colors on the marketing pages and inside the app.",
    outcome:
      "StreamVibe is a working app. The home page shows its hero before the rest of the page loads. A movie link that actually belongs to a show sends you to the show. Trailers play on the page, and Escape closes them.",
    build:
      "The app uses the Next.js App Router. Film and show data comes from the TMDB API. The home page is cached and refreshed every six hours so the hero can appear first. On a phone, the desktop row of trailer players is not loaded.",
    highlights: [
      "Designed the path from browsing to playback before building the screens",
      "Kept movies and shows as two catalogs that still look like one product",
      "Used one set of type, colors, prices, and posters across the marketing pages and the app",
      "Loaded the home hero first so the page feels ready straight away",
    ],
    screens: [
      {
        cover: "/images/streamvibe/home.png",
        label: "Home",
        caption: "The home page leads with a featured title and a search, so you can start watching or keep looking.",
      },
      {
        cover: "/images/streamvibe/title.png",
        label: "Movies & Shows",
        caption: "Movies & Shows opens on a featured title, with the rest of the catalog one step away.",
      },
      {
        cover: "/images/streamvibe/watch.png",
        label: "Watch",
        caption: "Playback is the last step. The trailer plays on the same page.",
      },
      {
        cover: "/images/streamvibe/plans.png",
        label: "Plans",
        caption: "The plans use the same type, buttons, and layout as the rest of the app.",
      },
      {
        cover: "/images/streamvibe/movies.png",
        label: "Catalog",
        caption: "Movies has its own list, separate from shows.",
      },
      {
        cover: "/images/streamvibe/browse-web.png",
        label: "Browse",
        caption: "Browse keeps the home layout while you look through more titles.",
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
      "Tobams Group is a UK company for talent and digital consulting. I joined as Associate Product Designer. The website is a team product, and this page walks through the live site.",
    cover: "/images/tobams/live-home.jpg",
    live: "https://www.tobamsgroup.com/",
    tags: ["Product design", "Website", "Talent", "Team"],
    design: ["Homepage", "About", "Jobs", "Information hierarchy"],
    development: [],
    role: "Associate Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma", "DM Sans"],
    challenge:
      "People landing on the site needed a quick answer to three questions: who Tobams Group is, what the company offers, and how to apply or get in touch.",
    approach:
      "I worked with the design team on the live site. This case study covers the pages visitors meet first: home, about, jobs, products, consultation, pricing, and projects. I also worked with the team on the voting and competition flow for Tobams × Access.",
    outcome:
      "tobamsgroup.com introduces the company in one place: the work, the products, the open roles, and a way to book a consultation.",
    build:
      "I contributed as Associate Product Designer. I did not design or build this site alone. The screens here are from the live company website.",
    highlights: [
      "Joined the team as Associate Product Designer on the live site",
      "Home, about, and jobs explain the company and how to join",
      "Worked with the team on the voting and competition process for Tobams × Access",
      "The live site is set in DM Sans",
    ],
    screens: [
      {
        cover: "/images/tobams/live-home.jpg",
        label: "Homepage",
        caption: "The live homepage introduces Tobams Group and what the company does.",
      },
      {
        cover: "/images/tobams/live-about.jpg",
        label: "About",
        caption: "About explains who the company is and the talent work behind the brand.",
      },
      {
        cover: "/images/tobams/live-jobs.jpg",
        label: "Jobs",
        caption: "Jobs lists open roles, including product design, on the same site.",
      },
      {
        cover: "/images/tobams/live-products.jpg",
        label: "Products",
        caption: "Products shows the AI-driven assessment tools and the rest of the range.",
      },
      {
        cover: "/images/tobams/live-consult.jpg",
        label: "Consultation",
        caption: "Consultation is the contact path for booking time with the team.",
      },
      {
        cover: "/images/tobams/live-pricing.jpg",
        label: "Pricing",
        caption: "Pricing sets out the plans on tobamsgroup.com.",
      },
      {
        cover: "/images/tobams/live-projects.jpg",
        label: "Projects",
        caption: "Projects highlights work from the live company site.",
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
      "RLkids is an AI learning product for children aged 7 to 14. I worked with the team on stories, games, and lesson paths that teach real-world skills.",
    cover: "/images/rlkids/live-home.jpg",
    live: "https://rlkids.ai/",
    tags: ["Product design", "EdTech", "AI", "Team"],
    design: ["Homepage", "Learning paths", "Series catalog", "App surfaces"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "Children needed a way to learn leadership, AI, money, and strategy that felt like a game, not a classroom worksheet.",
    approach:
      "I worked with the team on Recycled Learning for Kids. The product uses story series, short games, and an AI path that moves at each child's pace. The site and the app share one journey: pick a series, read or play, and see progress.",
    outcome:
      "rlkids.ai is live. Families can browse the series, compare Read and Read + Play plans, and open an app with books, badges, and progress in one place.",
    build:
      "This is a team product. I did not build it alone. The screens below are from the live site and app.",
    highlights: [
      "A team product for children aged 7 to 14",
      "Stories and games carry lessons in AI, leadership, money, and strategy",
      "Each child gets a path that follows their pace",
      "The site and the app share series, pricing, badges, and progress",
    ],
    screens: [
      {
        cover: "/images/rlkids/live-home.jpg",
        label: "Homepage",
        caption: "The homepage explains RLkids: AI-powered learning for children, through stories and games.",
      },
      {
        cover: "/images/rlkids/live-features.jpg",
        label: "Learning model",
        caption: "The learning model combines AI paths, 162 life-skills series, and short games.",
      },
      {
        cover: "/images/rlkids/live-devices.jpg",
        label: "App",
        caption: "The app holds reading, quizzes, progress, and badges in one place.",
      },
      {
        cover: "/images/rlkids/live-waitlist.jpg",
        label: "Product",
        caption: "A learner home for the child, and a dashboard for the teacher.",
      },
      {
        cover: "/images/rlkids/live-app.jpg",
        label: "Series",
        caption: "The catalog includes Think Sustainability, Think Finance, and the other series.",
      },
      {
        cover: "/images/rlkids/live-pricing.jpg",
        label: "Pricing",
        caption: "Two plans: Read, or Read + Play & Learn.",
      },
      {
        cover: "/images/rlkids/live-about.jpg",
        label: "About",
        caption: "About states the mission: real-world skills for a better future.",
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
    slug: "locepx",
    title: "Locepx",
    year: "2026",
    featured: false,
    label: "Product design · Team",
    summary:
      "Locepx helps organisations develop leaders. I worked with the team and did most of the product design, plus QA and UX research.",
    cover: "/images/locepx/home.jpg",
    live: "https://www.locepx.com/",
    tags: ["Product design", "UX research", "QA", "Team"],
    design: ["Homepage", "Programmes", "Corporate solutions", "Contact"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX research", "QA"],
    stack: ["Figma"],
    challenge:
      "A leader looking for a programme, and a company looking for a custom one, needed a clear way through the same site.",
    approach:
      "This is a team project. I did most of the product design. I also did the QA and the UX research, checking the pages against how people look for a programme and ask for help.",
    outcome:
      "locepx.com opens on the programmes and a way to talk to the team. The programme list can be searched. Corporate solutions explains a programme built around the business.",
    build:
      "This is a team project. I did most of the design. I did not build the site alone. The screens are from the live site.",
    highlights: [
      "A team project where I did most of the product design",
      "QA and UX research on the live pages",
      "Home, programmes, and corporate solutions share one path",
      "A clean, minimalist design with a simple, modern, and consistent visual style.",
    ],
    screens: [
      {
        cover: "/images/locepx/home.jpg",
        label: "Homepage",
        caption: "The homepage introduces Locepx and points to the programmes.",
      },
      {
        cover: "/images/locepx/programmes.jpg",
        label: "Programmes",
        caption: "Programmes can be searched, then opened by focus area.",
      },
      {
        cover: "/images/locepx/corporate.jpg",
        label: "Corporate",
        caption: "Corporate solutions explains a programme built around the business.",
      },
      {
        cover: "/images/locepx/about.jpg",
        label: "About",
        caption: "About states why Locepx exists and how to explore the programmes.",
      },
      {
        cover: "/images/locepx/contact.jpg",
        label: "Contact",
        caption: "Contact is where a leader or a company sends a message.",
      },
    ],
    system: {
      typeface: "Inter",
      colors: [
        { name: "Night", value: "#030711" },
        { name: "Type", value: "#F8FAFC" },
        { name: "Action", value: "#F15B07" },
        { name: "Paper", value: "#FFFFFF" },
        { name: "Ink", value: "#221D23" },
      ],
    },
  },
  {
    slug: "exyra",
    title: "Exyra",
    year: "2025",
    label: "AI · Crypto · Product design",
    summary:
      "Exyra is an AI crypto product I designed and built. You can talk to an agent, connect a wallet, and see rewards without jumping between different tools.",
    cover: "/images/exyra/live-home.jpg",
    live: "https://exyra-lake.vercel.app/",
    tags: ["AI", "Product design", "Crypto", "Figma", "React"],
    design: ["Agent flows", "Wallet states", "Dark interface", "Reward moments"],
    development: ["React", "Tailwind CSS", "Components from Figma"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "UI", "Frontend"],
    stack: ["React", "JavaScript", "Tailwind CSS", "Figma"],
    challenge:
      "A lot of crypto products explain the market and lose the person using them. Exyra had to make an agent, a wallet, and a reward feel like one conversation.",
    approach:
      "I designed the dark interface around the next thing someone might do: ask the agent, check the wallet, or look at a reward. Then I built the frontend in React from those Figma screens.",
    outcome:
      "The live interface keeps the agent, wallet, and rewards on one dark screen. Each state is labeled clearly enough to use on a phone.",
    build:
      "I built the frontend in React and Tailwind CSS from the Figma file. The components are shared, and the layout keeps the same structure on a phone and on a desktop.",
    highlights: [
      "Put the agent, the wallet, and rewards on one path",
      "Designed the screens in Figma before writing the components",
      "Built the frontend from those screens, not a separate version",
      "Kept every state readable on a phone",
    ],
    screens: [
      {
        cover: "/images/exyra/live-home.jpg",
        label: "Agent",
        caption: "The agent is where you ask a question and see the result on the same screen.",
      },
      {
        cover: "/images/exyra/live-wallet.jpg",
        label: "Wallet",
        caption: "Connect Wallet is part of the same product, not a separate app.",
      },
      {
        cover: "/images/exyra/live-rewards.jpg",
        label: "Rewards",
        caption: "Rewards shows badges and tiers you have earned.",
      },
      {
        cover: "/images/exyra/live-reward-system.jpg",
        label: "Reward system",
        caption: "The reward system names each tier, from Orbit and Aether to Nexus.",
      },
      {
        cover: "/images/exyra/live-agents.jpg",
        label: "Agents",
        caption: "Explore Agents lets you pick which agent to use.",
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
      "Fraktia is an AI product for creating and launching agents. I worked with the team on the dashboard, the agent cards, and the reward states.",
    cover: "/images/fraktia/interface.jpg",
    tags: ["AI", "Product design", "Frontend", "Team"],
    design: ["Agent cards", "Rewards", "Dashboard", "Interactive states"],
    development: ["React", "Component states", "Responsive layout"],
    role: "Product Designer × Frontend Developer",
    services: ["UX/UI", "Product design", "Frontend"],
    stack: ["Figma", "React", "Tailwind CSS"],
    challenge:
      "An agent product can look advanced and still be hard to use. Fraktia needed a dashboard where you can see the agent, the reward, and what to do next.",
    approach:
      "I worked with the team. We made the agent card the main piece of the interface, then built the dashboard around it. Hover, active, and reward states were designed before they were coded.",
    outcome:
      "Fraktia reads as one product: a dashboard of agents, a clear reward state, and controls that stay on the same screen.",
    build:
      "This is a team product. The interface is reusable React components. Each agent card has its own state, and the layout works from a phone to a desktop dashboard.",
    highlights: [
      "A team project, not a solo build",
      "The agent card is the main piece of the interface",
      "Hover, active, and reward states were designed before code",
      "The dashboard stays quiet enough to scan",
    ],
    screens: [
      {
        cover: "/images/fraktia/interface.jpg",
        label: "Builder",
        caption: "The builder is where you design, configure, and launch an agent.",
      },
      {
        cover: "/images/fraktia/builder-ui.jpg",
        label: "Agents",
        caption: "Agent cards sit next to the list of frameworks they use.",
      },
      {
        cover: "/images/fraktia/core-live.jpg",
        label: "Launch",
        caption: "The same interface, shown in the Fraktia Core launch frame.",
      },
      {
        cover: "/images/fraktia/beta.jpg",
        label: "Beta",
        caption: "Fraktia Core in beta, with the builder on screen.",
      },
      {
        cover: "/images/fraktia/messier.jpg",
        label: "Partnership",
        caption: "The same system, shown in a partnership launch frame.",
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
      "An independent redesign concept for the Stanbic IBTC homepage. I focused on a clearer first screen, simpler navigation, and sections that separate personal banking, offers, and rates.",
    cover: "/images/stanbic/hero.png",
    tags: ["Product design", "UX/UI", "Banking", "Figma"],
    design: ["Homepage", "Navigation", "Information hierarchy", "Responsive screens"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "The bank homepage asked people to do too many things at once. Accounts, cards, loans, and rates were all competing for the first screen.",
    approach:
      "I treated this as my own concept, not the live bank site. The first screen is one promise and a way in. Products, rates, and stories come after someone knows where they are.",
    outcome:
      "The concept gives the homepage one headline, calmer navigation, and separate sections for personal banking, offers, and rates. It keeps the Stanbic blue.",
    build:
      "I designed it in Figma for desktop and the supporting screens. It is not a coded website, and it is not the live Stanbic site.",
    highlights: [
      "Started with one headline instead of a wall of products",
      "Split personal banking, offers, and rates into their own sections",
      "Kept the Stanbic blue and simplified the page",
      "Designed the homepage as a path through the bank, not a brochure",
    ],
    screens: [
      {
        cover: "/images/stanbic/col-left.png",
        label: "Hero",
        caption: "The first screen states one promise and leaves room to choose where to go next.",
      },
      {
        cover: "/images/stanbic/col-mid.png",
        label: "Products",
        caption: "Internet banking, cards, and accounts each get their own section.",
      },
      {
        cover: "/images/stanbic/col-right.png",
        label: "Rates",
        caption: "Exchange rates and eNaira sit at the end of the page, after the products.",
      },
      {
        cover: "/images/stanbic/hero.png",
        label: "Homepage",
        caption: "The hero and the product sections read as one path through the bank.",
      },
      {
        cover: "/images/stanbic/board.png",
        label: "Full page",
        caption: "The full homepage on one board: hero, products, and rates.",
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
      "StyleLoom is a dark fashion store I designed and built. The shop, the product page, and the bag all lead to one action: add the piece you want.",
    cover: "/images/styleloom/live-home.jpg",
    live: "https://style-loom-umber.vercel.app/",
    tags: ["Ecommerce", "Product design", "Frontend", "Fashion", "Figma"],
    design: ["Homepage", "Shop listing", "Product page", "Design system"],
    development: ["React", "Responsive layout"],
    role: "Product Designer × Frontend Developer",
    services: ["Product design", "Frontend", "UX/UI", "Design system"],
    stack: ["Figma", "React"],
    challenge:
      "Fashion shops often shout. StyleLoom needed to stay quiet and still make it easy to find a piece, pick a size, and add it to the bag.",
    approach:
      "I designed the store as one system. The home page is editorial. The shop is a grid you can filter. The product page shows the piece, the size, and add to bag, and little else.",
    outcome:
      "StyleLoom is one dark store: a black background, cream type, a gold action, and photography that does the selling. The same look runs from home to the bag.",
    build:
      "I designed the home page, shop, product page, bag, and account screens as one system, then built the store in React so those screens ship together.",
    highlights: [
      "One editorial home page instead of a stack of banners",
      "Filters sit beside the product grid",
      "The product page asks for a size, then add to bag",
      "Black, cream, and gold are the whole visual system",
    ],
    screens: [
      {
        cover: "/images/styleloom/live-home.jpg",
        label: "Home",
        caption: "Home opens with one editorial image, then leads into the shop.",
      },
      {
        cover: "/images/styleloom/live-shop.jpg",
        label: "Shop",
        caption: "The shop lists collections and products on the same dark background.",
      },
      {
        cover: "/images/styleloom/live-product.jpg",
        label: "Product",
        caption: "A product page shows one piece, the materials, and add to bag.",
      },
      {
        cover: "/images/styleloom/live-cart.jpg",
        label: "Cart",
        caption: "The bag lists what you added and the next step to check out.",
      },
      {
        cover: "/images/styleloom/live-contact.jpg",
        label: "Contact",
        caption: "Contact keeps the same type and colors as the shop.",
      },
      {
        cover: "/images/styleloom/live-orders.jpg",
        label: "Orders",
        caption: "Orders is where you track a package and see past purchases.",
      },
      {
        cover: "/images/styleloom/live-womens.jpg",
        label: "Womens",
        caption: "The womens collection uses the same grid as the rest of the shop.",
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
      "A landing page for Farm Rush, a farming game. I designed the first screen so it explains the game and gives a clear Play now action.",
    cover: "/images/farm-rush/landing.png",
    tags: ["Product design", "Game", "Landing page", "Figma"],
    design: ["Landing page", "Hero", "Game info", "Store badges"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma", "Canva"],
    challenge:
      "The game had to feel like play before anyone scrolled. The first screen needed the app stores, the idea of harvest and upgrade, and a reason to tap Play now.",
    approach:
      "I designed one landing page: a hero with the character and the store badges, a Play now button, then short sections for farming, expeditions, and rewards.",
    outcome:
      "The page reads as a game you can join. A cartoon hero and the store badges introduce Farm Rush, and the rest of the page stays on a dark background.",
    build:
      "This is a design case from Behance, drawn in Figma for a Game Nest landing page. It is not a coded website.",
    highlights: [
      "One hero that names the game and points to the app stores",
      "Play now sits with harvest and upgrade, not on a separate page",
      "Three cards explain farming, expeditions, and rewards",
      "Game info, platforms, and a subscribe path close the page",
    ],
    screens: [
      {
        cover: "/images/farm-rush/landing.png",
        label: "Landing",
        caption: "The hero shows the farmer, a horse, and buttons for the app stores.",
      },
      {
        cover: "/images/farm-rush/play.png",
        label: "Play",
        caption: "Play now sits under a short welcome, with the first two game stills.",
      },
      {
        cover: "/images/farm-rush/fun.png",
        label: "Fun awaits",
        caption: "Three cards explain farming, expeditions, and rewards.",
      },
      {
        cover: "/images/farm-rush/cover.png",
        label: "Win",
        caption: "A win moment from the game, on the wooden background.",
      },
      {
        cover: "/images/farm-rush/info.png",
        label: "Info",
        caption: "The close of the page: game details, other titles, and a way to subscribe.",
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
    label: "Product design · Team",
    summary:
      "A recipes and tips site for Nigerian cooking. I worked with the team on the home page, the recipe list, cooking tips, and video tutorials.",
    cover: "/images/uncle-tobi/home.png",
    tags: ["Product design", "Ecommerce", "Web design", "Figma"],
    design: ["Homepage", "Recipes listing", "Cooking tips", "Video tutorials"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "People needed to search for a dish, read a tip, or watch a tutorial without getting lost in a dense shop layout.",
    approach:
      "I worked with the team. Uncle Tobi is one scroll: a search, the latest recipes, cooking tips, and video tutorials, with the shop in the header.",
    outcome:
      "The design opens on Simple and Tasty Recipes. Jollof and egusi are on the first screen, and the recipe list keeps saved dishes close by.",
    build:
      "This is a team project. I contributed to the design in Figma. The screens are the shared design, not a solo build.",
    highlights: [
      "A search on the first screen for a recipe or a cooking tip",
      "Latest recipes lead with jollof, egusi, and moi moi",
      "Cooking tips and video tutorials stay on the same home scroll",
      "The recipe list keeps saved dishes and recommended tutorials beside it",
    ],
    screens: [
      {
        cover: "/images/uncle-tobi/home.png",
        label: "Home",
        caption: "Home starts with a search, then the latest dishes.",
      },
      {
        cover: "/images/uncle-tobi/listing.png",
        label: "Recipes",
        caption: "The recipe list keeps saved dishes and tutorials next to the results.",
      },
      {
        cover: "/images/uncle-tobi/tips.png",
        label: "Tips",
        caption: "Cooking tips cover dishes such as pounded yam, boli, and ofada rice.",
      },
      {
        cover: "/images/uncle-tobi/videos.png",
        label: "Tutorials",
        caption: "Video tutorials close the home page, with a signup for the shop.",
      },
      {
        cover: "/images/uncle-tobi/cover.png",
        label: "Poster",
        caption: "The home page, shown as a poster.",
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
      "A mobile app for checking a portfolio. I designed one layout in light and dark, so funds, insights, and invest stay easy to find.",
    cover: "/images/portfolio/cover.png",
    tags: ["Product design", "Mobile", "Fintech", "Figma"],
    design: ["Light mode", "Dark mode", "Portfolio home", "Invest actions"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI"],
    stack: ["Figma"],
    challenge:
      "Portfolio apps get noisy. This one had to stay simple in daylight and at night, with Add funds and Invest now easy to spot.",
    approach:
      "I designed one layout and used it for both light and dark. The day version has more open space. The night version uses a darker background. The actions stay in the same place.",
    outcome:
      "The home screen shows a total, three groups of investments, and a way into funds, invest, and insights. The same screen works in light, in dark, and on a watch.",
    build:
      "This is a design case from Behance, drawn in Figma with light and dark themes. It is not a coded app.",
    highlights: [
      "One layout for light and dark, not two different apps",
      "Add funds, Invest now, and View insights are the three actions",
      "Tech, energy, and real estate show on the first screen",
      "The same home is shown on a phone, a tablet, and a watch",
    ],
    screens: [
      {
        cover: "/images/portfolio/cover.png",
        label: "Themes",
        caption: "Light and dark share one home screen: the portfolio total and three investment groups.",
      },
      {
        cover: "/images/portfolio/light.jpeg",
        label: "Light",
        caption: "The light home on a phone, with Add funds, Invest now, and View insights.",
      },
      {
        cover: "/images/portfolio/flow.png",
        label: "In hand",
        caption: "The same light home, shown in a hand.",
      },
      {
        cover: "/images/portfolio/dark.jpeg",
        label: "Dark",
        caption: "Dark mode on a tablet keeps the same groups on a quieter background.",
      },
      {
        cover: "/images/portfolio/phone.jpeg",
        label: "Phone",
        caption: "The light home on a phone.",
      },
      {
        cover: "/images/portfolio/mock.jpeg",
        label: "Watch",
        caption: "The portfolio total on a watch, using the same numbers.",
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

export const navProjects = projects.filter(
  (project) =>
    project.featured !== false ||
    project.slug === "farm-rush" ||
    project.slug === "uncle-tobi" ||
    project.slug === "locepx",
);

export const fillsFrame = (slug: string) =>
  slug === "stanbic" || slug === "farm-rush" || slug === "uncle-tobi";

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
