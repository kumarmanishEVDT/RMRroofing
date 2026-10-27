export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ColorbondColor {
  name: string;
  hex: string;
  category: 'Contemporary' | 'Classic' | 'Matt';
  description: string;
}

export const COMPANY_DETAILS = {
  name: "RMR Roofing",
  legalName: "Rhys McRae Roofing Pty Ltd",
  director: "Rhys McRae",
  phone: "0432 589 939",
  phoneRaw: "0432589939",
  email: "enquiries@rmrroofing.com.au",
  licenceNumber: "454185C",
  licenceState: "NSW",
  experienceYears: "18+",
  googleReviewUrl: "https://share.google/RlOLclcNjKaCMovhp",
  serviceAreas: ["Central Coast NSW", "Sydney", "Newcastle"],
  primaryLocation: "Central Coast, NSW, Australia",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-metal-roofing",
    title: "Residential Metal Roofing",
    shortDesc: "Quality metal roofing solutions designed to complement your home and provide lasting performance.",
    fullDesc: "Tailored residential metal roofing engineered to withstand tough Australian coastal weather, strong winds, and heavy rain. Rhys works with you to select the ideal profile and finish to elevate your home's street appeal and energy efficiency.",
    iconName: "Home",
    features: ["Colorbond & Zincalume options", "Thermal insulation integration", "Coastal corrosion protection", "Clean lines & custom flashings"],
    recommendedFor: "Homeowners looking for modern durability, sleek aesthetics, and zero tile maintenance."
  },
  {
    id: "commercial-metal-roofing",
    title: "Commercial Metal Roofing",
    shortDesc: "Professional roofing services for commercial properties and projects requiring experienced metal roofing contractors.",
    fullDesc: "High-capacity commercial metal roofing services for warehouses, retail spaces, commercial strata buildings, and industrial facilities. Rhys oversees every stage with rigorous adherence to NSW building codes, safety compliance, and deadline milestones.",
    iconName: "Building2",
    features: ["High-span profile installations", "Commercial rainwater drainage", "Strict NSW WHS & safety compliance", "Minimal disruption to business operations"],
    recommendedFor: "Commercial asset owners, strata managers, and builders needing reliable, licensed roofing contractors."
  },
  {
    id: "metal-roof-replacement",
    title: "Metal Roof Replacement & Re-Roofing",
    shortDesc: "Upgrade an ageing or deteriorating roof with a replacement solution suited to your property and requirements.",
    fullDesc: "Specialised conversion of old leaky tile, rusted corrugated iron, or degraded asbestos roofs into lightweight, high-performance Colorbond metal roofing. Includes structural batten inspection, insulation upgrade, and complete site disposal.",
    iconName: "RefreshCw",
    features: ["Tile-to-Colorbond roof conversions", "Old roof removal & eco-conscious disposal", "Sub-structure batten inspection & strengthening", "Immediate weather-proofing during works"],
    recommendedFor: "Properties suffering from cracked tiles, frequent leaks, roof sag, or outdated street appeal."
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs & Leak Detection",
    shortDesc: "Address roofing issues and discuss the appropriate repair options with an experienced roofing professional.",
    fullDesc: "Prompt, honest diagnostic roof inspections and repairs by Rhys McRae. We identify the true origin of persistent water leaks, damaged flashings, loose sheets, or failing valleys before they cause costly structural timber or interior ceiling damage.",
    iconName: "Wrench",
    features: ["Accurate leak diagnosis & flashing repairs", "Storm damage emergency assessments", "Loose screw & rusted fastener replacement", "Direct assessment without pushy upselling"],
    recommendedFor: "Homeowners experiencing ceiling stains, storm leaks, or damaged metal roof sheets."
  },
  {
    id: "new-roof-installations",
    title: "New Roof Installations",
    shortDesc: "Planning a new build? Discuss your roofing requirements with Rhys to determine a suitable solution for your project.",
    fullDesc: "Complete metal roofing packages for architectural new builds, granny flats, extensions, and modern duplexes. Rhys works closely with your building plans to deliver exact pitch calculations, watertight custom valleys, and architectural perfection.",
    iconName: "Hammer",
    features: ["Plan takeoff & accurate upfront quoting", "Custom engineered flashing detailing", "Seamless coordination with builders & carpenters", "Manufacturer backed material warranties"],
    recommendedFor: "Custom home builders, owner-builders, and architects creating new homes."
  },
  {
    id: "colorbond-roofing",
    title: "Colorbond Roofing",
    shortDesc: "Explore Colorbond roof replacement and metal roofing options to suit the appearance and needs of your property.",
    fullDesc: "Genuine BlueScope Colorbond steel roofing made specifically for Australian extremes. Incorporating Thermatech® solar reflectance technology to keep your interior cooler, paired with superior chip, flake, and corrosion resistance.",
    iconName: "Palette",
    features: ["Full genuine 22-colour palette", "Thermatech® solar reflective technology", "Up to 25-year BlueScope steel warranty", "Available in Ultra grade for coastal surf zones"],
    recommendedFor: "Coastal NSW properties wanting the gold standard in Australian roofing steel."
  },
  {
    id: "architectural-cladding",
    title: "Architectural Cladding",
    shortDesc: "Enhance your building with architectural cladding solutions tailored to your project.",
    fullDesc: "Premium metal wall cladding including Standing Seam, Interlocking, and Custom Spandrel panels. Deliver striking contemporary facade lines, weatherproofing, and modern architectural texture that dramatically boosts property market value.",
    iconName: "Layers",
    features: ["Standing Seam & Interlocking profiles", "Concealed fastener systems", "Sharply defined shadow lines", "Low maintenance exterior wall finish"],
    recommendedFor: "Architectural residences, designer extensions, and commercial feature facades."
  },
  {
    id: "fascia-gutters-downpipes",
    title: "Metal Fascia, Gutters & Downpipes",
    shortDesc: "Complete your roofing system with metal fascia, gutters, downpipes and rainwater drainage components.",
    fullDesc: "Heavy-duty rainwater management systems customized to handle heavy coastal NSW downpours. High-capacity quad, half-round, or box gutters, matching fascia covers, and oversized downpipes that prevent overflow back into your eaves.",
    iconName: "Droplets",
    features: ["Quad, Half-Round & Box gutter profiles", "Colorbond matching fascia systems", "High-capacity downpipe installations", "Leaf guard & debris solution advice"],
    recommendedFor: "Homes with rusted gutters, sagging fascia boards, or overflowing stormwater during storms."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Direct Access to Rhys McRae",
    description: "No salespeople or middlemen. Deal directly with Rhys, the director of RMR Roofing, from your initial phone call through quote calculation, on-site works, and final sign-off.",
    iconName: "UserCheck"
  },
  {
    title: "Over 18 Years of Industry Experience",
    description: "Benefit from nearly two decades of specialised hands-on expertise across residential homes, heritage conversions, commercial projects, and architectural cladding.",
    iconName: "Award"
  },
  {
    title: "Licensed NSW Roofing Contractor",
    description: "RMR Roofing operates under NSW Contractor Licence #454185C, giving you total peace of mind that your roofing investment is fully certified and compliant.",
    iconName: "ShieldCheck"
  },
  {
    title: "Residential & Commercial Expertise",
    description: "From repairing a coastal family cottage to installing hundreds of square metres of commercial metal roofing, our tooling and skills scale effortlessly.",
    iconName: "CheckCircle"
  },
  {
    title: "Quality Workmanship & Daily Clean-Up",
    description: "Rhys and his crew are celebrated for being punctual, polite, respectful of your landscaping, and doing a thorough site clean and magnetic nail sweep at the end of each workday.",
    iconName: "Sparkles"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    author: "Mark & Sarah Henderson",
    location: "Terrigal, Central Coast",
    rating: 5,
    date: "Recent Google Review",
    title: "Outstanding Tile to Colorbond Conversion",
    comment: "Rhys was fantastic from start to finish. We replaced our 35-year-old crumbling concrete tiles with Colorbond Monument. Dealing directly with Rhys gave us so much confidence. He showed up when he said he would, his team were polite, and they cleaned up the yard impeccably every single afternoon.",
    highlight: "Punctual, polite, and left the property spotless every day."
  },
  {
    id: "2",
    author: "David Collins",
    location: "Gosford, NSW",
    rating: 5,
    date: "Recent Google Review",
    title: "Honest Advice and Flawless Workmanship",
    comment: "After two roofers tried to charge me for a full re-roof for a simple leak, Rhys inspected it and showed me the exact broken valley flashing causing the issue. Repaired it quickly at a very fair price. You can tell he really cares about his reputation. 10/10 recommended.",
    highlight: "Honest diagnostics and genuine pride in his trade."
  },
  {
    id: "3",
    author: "Bradley M.",
    location: "Newcastle Region",
    rating: 5,
    date: "Recent Google Review",
    title: "Commercial Metal Roof Finished Ahead of Time",
    comment: "Hired RMR Roofing for our commercial depot re-roofing project. Rhys handled all safety requirements, delivery schedules, and the finished standing metal roof looks top tier. Super easy to communicate with.",
    highlight: "Professional commercial delivery and seamless communication."
  },
  {
    id: "4",
    author: "Emma & Jason T.",
    location: "Wamberal, Central Coast",
    rating: 5,
    date: "Recent Google Review",
    title: "New Colorbond Roof & Gutters",
    comment: "Cannot speak highly enough of Rhys McRae. Our new Colorbond roof and black half-round gutters have completely transformed our coastal home. 18+ years experience clearly shows in the tidy flashing work.",
    highlight: "Transformed our home's appearance with precision flashings."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What roofing services does RMR Roofing provide?",
    answer: "RMR Roofing provides residential and commercial metal roofing, roof repairs, roof replacements, re-roofing, new roofs, Colorbond roof replacement, architectural cladding, fascia, gutters and downpipes."
  },
  {
    question: "Does RMR Roofing work on residential and commercial properties?",
    answer: "Yes. RMR Roofing offers both residential and commercial metal roofing services. Contact Rhys directly to discuss your specific project specifications."
  },
  {
    question: "How do I get a quote?",
    answer: "You can call Rhys directly on 0432 589 939 or submit the online enquiry form with details about your property and roofing requirements for a prompt callback and assessment."
  },
  {
    question: "Where does RMR Roofing provide services?",
    answer: "RMR Roofing identifies the Central Coast of NSW as its core service area, while also undertaking residential and commercial projects throughout Sydney and Newcastle. Contact Rhys to confirm availability for your property location."
  },
  {
    question: "Who will I speak to about my project?",
    answer: "Rhys McRae is the director of RMR Roofing and your primary contact. You deal directly with Rhys from your initial enquiry right through to the completion of your roofing project."
  }
];

export const COLORBOND_COLORS: ColorbondColor[] = [
  { name: "Monument®", hex: "#32353B", category: "Contemporary", description: "Deep charcoal, modern, dramatic and Australia's #1 popular choice." },
  { name: "Surfmist®", hex: "#D6D9D5", category: "Contemporary", description: "Clean off-white reflecting maximum solar heat for coastal aesthetics." },
  { name: "Basalt®", hex: "#5C5E60", category: "Contemporary", description: "Powerful, cool neutral grey evoking natural solid rock." },
  { name: "Woodland Grey®", hex: "#474944", category: "Classic", description: "Deep olive-grey that blends seamlessly into bushland environments." },
  { name: "Dune®", hex: "#A8A59C", category: "Classic", description: "Warm, natural mid-tone neutral inspired by Australian coastal dunes." },
  { name: "Deep Ocean®", hex: "#2B3C48", category: "Classic", description: "Rich, bold coastal blue echoing deep Pacific waters." },
  { name: "Shale Grey™", hex: "#BFC3C3", category: "Contemporary", description: "Light silvery grey providing balanced contrast and modern softness." },
  { name: "Ironstone®", hex: "#3B424C", category: "Classic", description: "Deep stormy blue-grey with a sophisticated contemporary character." }
];

export const SERVICE_AREAS = [
  {
    region: "Central Coast NSW",
    isPrimary: true,
    suburbs: ["Gosford", "Terrigal", "Wamberal", "Avoca Beach", "Erina", "Kincumber", "Tuggerah", "The Entrance", "Woy Woy", "Bateau Bay", "Budgewoi", "Wyong"],
    desc: "Our primary home base. Fast on-site consultations, coastal-grade metal roofing systems, and storm repair services across all Central Coast suburbs."
  },
  {
    region: "Sydney",
    isPrimary: false,
    suburbs: ["Northern Beaches", "Hills District", "North Shore", "Hornby", "Ryde", "Northern Suburbs", "Greater Sydney Metro"],
    desc: "Residential roof replacements, tile-to-Colorbond conversions, and architectural cladding projects throughout Sydney's northern and metropolitan areas."
  },
  {
    region: "Newcastle & Hunter",
    isPrimary: false,
    suburbs: ["Newcastle CBD", "Merewether", "Warners Bay", "Charlestown", "Lake Macquarie", "Maitland", "Port Stephens"],
    desc: "Commercial metal roofing installations, residential re-roofs, and heavy-duty coastal guttering throughout Newcastle and the surrounding Hunter region."
  }
];
