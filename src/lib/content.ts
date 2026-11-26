export const site = {
  name: "Talentovix",
  tagline: "Talent. Technology. Transformation.",
  description:
    "Talentovix is an international talent and consulting group helping enterprises build high-performing teams, modernize technology, and accelerate transformation across 30+ countries.",
  email: "hello@talentovix.com",
  phone: "+1 (415) 555-0142",
  year: 2026,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "users" | "cpu" | "compass" | "cloud" | "sparkles" | "shield";
  capabilities: string[];
  outcomes: { value: string; label: string }[];
  approach: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "talent-solutions",
    title: "Talent Solutions",
    short: "Build world-class teams, anywhere, at the speed your business moves.",
    description:
      "From executive search to fully managed delivery teams, we connect organizations with pre-vetted specialists across 30+ countries — combining global reach with deep local market knowledge.",
    icon: "users",
    capabilities: [
      "Executive & leadership search",
      "Dedicated delivery teams",
      "Recruitment process outsourcing (RPO)",
      "Employer of record (EOR) & global payroll",
      "Contract & interim specialists",
      "Talent market intelligence",
    ],
    outcomes: [
      { value: "21 days", label: "average time-to-hire for senior roles" },
      { value: "94%", label: "12-month placement retention" },
      { value: "40k+", label: "pre-vetted specialists in our network" },
    ],
    approach: [
      { title: "Define", text: "We map the capabilities you need against market supply, compensation benchmarks and location strategy." },
      { title: "Source", text: "Our regional hubs activate curated talent pools and run structured, bias-aware assessment." },
      { title: "Integrate", text: "Onboarding, compliance and payroll handled end to end so teams are productive from week one." },
      { title: "Grow", text: "Ongoing performance, retention and upskilling programs keep teams engaged and evolving." },
    ],
  },
  {
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    short: "Turn ambition into an executable roadmap with measurable value.",
    description:
      "Our consultants partner with C-suite leaders to shape operating models, workforce strategy and transformation programs that deliver tangible business outcomes — not slideware.",
    icon: "compass",
    capabilities: [
      "Business & digital strategy",
      "Operating model design",
      "Workforce & organizational strategy",
      "M&A integration",
      "Transformation office (PMO)",
      "Change management",
    ],
    outcomes: [
      { value: "3.2x", label: "average ROI on transformation programs" },
      { value: "120+", label: "enterprise transformations delivered" },
      { value: "18 mo", label: "median time to full value realization" },
    ],
    approach: [
      { title: "Diagnose", text: "Rapid, data-driven assessment of where value is created — and where it leaks." },
      { title: "Design", text: "Target state, roadmap and business case co-created with your leadership team." },
      { title: "Deliver", text: "Hands-on execution with integrated talent and technology squads." },
      { title: "Sustain", text: "Embedded capability building so change outlasts our engagement." },
    ],
  },
  {
    slug: "technology-engineering",
    title: "Technology & Engineering",
    short: "Design, build and scale digital products and platforms.",
    description:
      "Product engineering, platform modernization and enterprise integration delivered by senior engineering teams with nearshore and offshore flexibility.",
    icon: "cpu",
    capabilities: [
      "Product & platform engineering",
      "Legacy modernization",
      "Enterprise architecture",
      "Quality engineering & test automation",
      "DevOps & platform engineering",
      "Experience design (UX/UI)",
    ],
    outcomes: [
      { value: "45%", label: "faster release cycles" },
      { value: "2,500+", label: "engineers across delivery centers" },
      { value: "99.95%", label: "platform availability achieved" },
    ],
    approach: [
      { title: "Discover", text: "Product discovery and architecture spikes de-risk the investment early." },
      { title: "Build", text: "Cross-functional squads ship in short, measurable increments." },
      { title: "Scale", text: "Cloud-native foundations and automation for reliable growth." },
      { title: "Operate", text: "SRE practices and managed services keep products healthy." },
    ],
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    short: "Make AI real — responsibly, securely and at enterprise scale.",
    description:
      "From data foundations to generative AI and agentic systems, we help enterprises move from pilots to production with governance built in.",
    icon: "sparkles",
    capabilities: [
      "Data strategy & governance",
      "Modern data platforms",
      "Generative & agentic AI",
      "Machine learning engineering (MLOps)",
      "Analytics & decision intelligence",
      "Responsible AI frameworks",
    ],
    outcomes: [
      { value: "60+", label: "AI solutions in production" },
      { value: "30%", label: "average operating cost reduction" },
      { value: "8 wks", label: "from idea to production pilot" },
    ],
    approach: [
      { title: "Prioritize", text: "Identify high-value, feasible AI use cases tied to P&L outcomes." },
      { title: "Foundation", text: "Secure, governed data and model platforms ready for scale." },
      { title: "Productionize", text: "Engineer, evaluate and deploy AI into real workflows." },
      { title: "Adopt", text: "Train people and redesign processes so value compounds." },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    short: "Migrate, modernize and optimize on any cloud.",
    description:
      "Multi-cloud strategy, migration factories and FinOps practices that make cloud faster, more resilient and more cost-effective.",
    icon: "cloud",
    capabilities: [
      "Cloud strategy & landing zones",
      "Migration & modernization",
      "FinOps & cost optimization",
      "Site reliability engineering",
      "Hybrid & edge infrastructure",
      "Managed cloud services",
    ],
    outcomes: [
      { value: "35%", label: "average cloud cost savings" },
      { value: "4,000+", label: "workloads migrated" },
      { value: "24/7", label: "follow-the-sun operations" },
    ],
    approach: [
      { title: "Assess", text: "Portfolio analysis and TCO modeling for every workload." },
      { title: "Migrate", text: "Industrialized migration waves with minimal disruption." },
      { title: "Modernize", text: "Re-platform and re-architect for cloud-native value." },
      { title: "Optimize", text: "Continuous FinOps and reliability improvement." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Protect the business while enabling it to move faster.",
    description:
      "Security strategy, identity, cloud security and managed detection delivered by certified specialists — and the security talent to staff it.",
    icon: "shield",
    capabilities: [
      "Security strategy & risk",
      "Identity & access management",
      "Cloud & application security",
      "Managed detection & response",
      "Compliance (ISO 27001, SOC 2, DORA, NIS2)",
      "Security talent services",
    ],
    outcomes: [
      { value: "70%", label: "reduction in mean time to respond" },
      { value: "300+", label: "certified security professionals" },
      { value: "100%", label: "audit pass rate for clients" },
    ],
    approach: [
      { title: "Assess", text: "Threat-led maturity assessment against your risk appetite." },
      { title: "Architect", text: "Zero-trust roadmaps that balance protection and agility." },
      { title: "Implement", text: "Controls, tooling and processes deployed and tested." },
      { title: "Defend", text: "Always-on monitoring and response from our SOC." },
    ],
  },
];

export const industries = [
  { slug: "financial-services", title: "Financial Services", text: "Banks, insurers and fintechs modernizing core platforms and scaling compliant talent." },
  { slug: "healthcare", title: "Healthcare & Life Sciences", text: "Accelerating clinical innovation, patient experience and regulated data platforms." },
  { slug: "technology", title: "Technology & Software", text: "Scaling product engineering for ISVs, SaaS leaders and high-growth scale-ups." },
  { slug: "energy", title: "Energy & Utilities", text: "Enabling the energy transition with digital grids, analytics and skilled workforces." },
  { slug: "retail", title: "Retail & Consumer", text: "Unified commerce, personalization and supply chain intelligence." },
  { slug: "manufacturing", title: "Manufacturing & Industrial", text: "Smart factories, IoT and engineering talent for Industry 4.0." },
  { slug: "telecom", title: "Telecom & Media", text: "5G, network automation and digital customer journeys." },
  { slug: "public-sector", title: "Public Sector", text: "Citizen-centric digital services delivered securely and transparently." },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Professionals worldwide" },
  { value: 32, suffix: "", label: "Countries with active delivery" },
  { value: 650, suffix: "+", label: "Enterprise clients" },
  { value: 97, suffix: "%", label: "Client retention rate" },
];

export const clients = [
  "NORTHWIND", "Helios Bank", "AURORA", "Vantage", "Lumen Health", "Kestrel", "Orbital", "MERIDIAN", "Atlas Energy", "Polaris", "Zenith Retail", "Cobalt",
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "agentic-ai-workforce-2027",
    category: "Research Report",
    title: "The agentic enterprise: how AI agents will reshape the workforce by 2027",
    excerpt: "Our survey of 1,200 executives reveals where autonomous AI creates value — and the new roles it demands.",
    date: "November 12, 2026",
    readTime: "12 min read",
    gradient: "from-violet-600 via-indigo-600 to-cyan-500",
    body: [
      "AI agents are moving from experimentation to production faster than any enterprise technology before them. In our survey of 1,200 executives across 18 countries, 64% expect autonomous agents to execute end-to-end business processes within the next 18 months.",
      "Yet the bottleneck is not technology — it is talent and operating models. Organizations that succeed are redesigning work around human-agent collaboration, creating roles such as agent operations leads, AI product owners and evaluation engineers.",
      "Three moves separate leaders from laggards: they tie every agent to a measurable business outcome, they invest in governance and evaluation from day one, and they reskill their workforce in parallel with deployment rather than after it.",
      "The opportunity is significant. Leaders report 25–40% productivity gains in targeted functions — but only when process redesign accompanies the technology.",
    ],
  },
  {
    slug: "global-talent-index",
    category: "Index",
    title: "Global Talent Index 2026: where to build your next engineering hub",
    excerpt: "We ranked 60 cities on talent depth, cost, stability and time-zone fit for distributed teams.",
    date: "October 28, 2026",
    readTime: "9 min read",
    gradient: "from-emerald-500 via-teal-600 to-sky-600",
    body: [
      "Choosing where to build a delivery center is one of the most consequential decisions a technology leader makes. Our 2026 Global Talent Index ranks 60 cities across talent depth, cost efficiency, political and economic stability, language proficiency and time-zone alignment.",
      "Central and Eastern Europe continues to lead for nearshore delivery into Western Europe, while Latin America has emerged as the fastest-growing region for North American companies.",
      "Emerging hubs in Southeast Asia and Africa offer compelling talent depth in data and cloud engineering, particularly for follow-the-sun operating models.",
    ],
  },
  {
    slug: "cloud-finops-playbook",
    category: "Playbook",
    title: "The FinOps playbook: cutting cloud spend 30% without slowing innovation",
    excerpt: "A practical framework for aligning engineering, finance and product around cloud value.",
    date: "October 9, 2026",
    readTime: "7 min read",
    gradient: "from-orange-500 via-rose-500 to-fuchsia-600",
    body: [
      "Cloud costs have become the second-largest technology line item for many enterprises. Yet most organizations still lack the shared language between engineering and finance needed to manage them.",
      "Our FinOps playbook outlines a three-phase approach — inform, optimize, operate — and the organizational changes that make savings stick.",
      "Clients applying this playbook have reduced cloud spend by 25–35% in the first year while increasing deployment frequency.",
    ],
  },
  {
    slug: "skills-based-organization",
    category: "Perspective",
    title: "From jobs to skills: building a skills-based organization",
    excerpt: "Why the most adaptive companies are organizing work around skills instead of roles.",
    date: "September 18, 2026",
    readTime: "6 min read",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    body: [
      "Job descriptions age quickly. Skills, by contrast, can be measured, developed and redeployed. Skills-based organizations match people to work dynamically, unlocking internal mobility and reducing external hiring costs.",
      "The transition requires a common skills taxonomy, AI-assisted skills inference and leaders willing to manage talent as an enterprise-wide resource.",
    ],
  },
  {
    slug: "cyber-resilience-dora",
    category: "Point of View",
    title: "DORA and beyond: operational resilience as a competitive advantage",
    excerpt: "How financial institutions can turn regulatory compliance into stronger customer trust.",
    date: "August 30, 2026",
    readTime: "8 min read",
    gradient: "from-slate-700 via-slate-800 to-indigo-900",
    body: [
      "The EU Digital Operational Resilience Act has raised the bar for financial institutions and their technology providers. Leading firms are using it as a catalyst to modernize risk management and third-party oversight.",
      "Resilience by design — automated testing, clear ownership and continuous monitoring — reduces both regulatory exposure and the cost of incidents.",
    ],
  },
  {
    slug: "nearshore-latam",
    category: "Case Study",
    title: "How a Fortune 500 insurer scaled to 400 engineers in Latin America in 9 months",
    excerpt: "A dedicated delivery model that cut time-to-market in half while improving quality.",
    date: "August 4, 2026",
    readTime: "5 min read",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    body: [
      "Facing an ambitious digital roadmap and a tight domestic labor market, a leading North American insurer partnered with Talentovix to build a nearshore engineering center.",
      "Within nine months, the center grew to 400 engineers across three cities, delivering a new policy administration platform and reducing release cycles from quarterly to bi-weekly.",
    ],
  },
];

export const offices = [
  { region: "North America", cities: ["New York", "San Francisco", "Toronto"] },
  { region: "Europe", cities: ["London", "Berlin", "Warsaw", "Lisbon"] },
  { region: "Middle East & Africa", cities: ["Dubai", "Cape Town"] },
  { region: "Latin America", cities: ["Mexico City", "São Paulo", "Bogotá"] },
  { region: "Asia Pacific", cities: ["Singapore", "Bengaluru", "Sydney"] },
];

export const jobs = [
  { title: "Senior AI Engineer", team: "Data & AI", location: "Remote · Europe", type: "Full-time" },
  { title: "Engagement Manager", team: "Strategy & Consulting", location: "London, UK", type: "Full-time" },
  { title: "Principal Cloud Architect", team: "Cloud & Infrastructure", location: "Toronto, Canada", type: "Full-time" },
  { title: "Talent Partner — Executive Search", team: "Talent Solutions", location: "Dubai, UAE", type: "Full-time" },
  { title: "Lead Frontend Engineer", team: "Technology & Engineering", location: "Warsaw, Poland", type: "Full-time" },
  { title: "Security Consultant (IAM)", team: "Cybersecurity", location: "Singapore", type: "Full-time" },
  { title: "Delivery Director", team: "Technology & Engineering", location: "Mexico City, Mexico", type: "Full-time" },
  { title: "Data Platform Engineer", team: "Data & AI", location: "Bengaluru, India", type: "Full-time" },
];

export const values = [
  { title: "People first", text: "Our talent is our product. We invest in growth, wellbeing and belonging for every Talentovian." },
  { title: "Outcomes over output", text: "We measure success by the value our clients realize, not the hours we bill." },
  { title: "Global by design", text: "Diverse teams across 32 countries bring perspectives that make solutions stronger." },
  { title: "Integrity always", text: "Transparent, ethical and accountable — in every engagement, in every market." },
];

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];
