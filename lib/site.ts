export const site = {
  name: "burcu payidarol",
  displayName: "Burcu Payidarol",
  email: "payidarol.burcu@gmail.com",
  mailto: "mailto:payidarol.burcu@gmail.com",
  linkedin: "https://www.linkedin.com/in/burcupayidarol",
  resumeHref: "/burcu-payidarol-resume.pdf",
  location: "nyc",
  availability: "Freelance Projects & Full-Time",
  tagline:
    "Product Designer crafting strategic products that build trust, attract customers, and fuel growth.",
} as const;

export const projects = [
  {
    slug: "neurocycle",
    name: "neurocycle",
    title: "Neurocycle (redesigned)",
    types: "(B2C,B2B)",
    blurb:
      "Lead end-to-end redesign decreasing user error by 40% and improving App Store ratings from 3.2 to 4.0 and Google Play from 3.0 to 3.8.",
    href: "/neurocycle",
    hero: "/images/neurocycle/hero.png",
    heroAlt:
      "Neurocycle Day 1 home on a MacBook and iPhone, with the pink Brain-Ee character",
    accent: "pink" as const,
  },
  {
    slug: "splyt",
    name: "splyt",
    title: "Splyt",
    types: "(B2C, P2P)",
    blurb:
      "Co-led the redesign and simplification of the payment-splitting experience, resulting in a 30% decrease in user support requests.",
    href: "/splyt",
    hero: "/images/splyt/hero.png",
    heroAlt:
      "Three iPhones showing Splyt receipt review, moderator totals, and pending items",
    accent: "purple" as const,
  },
  {
    slug: "despark",
    name: "despark",
    title: "Despark",
    types: "(B2B/B2C/SaaS)",
    blurb:
      "Streamlined a custom mission-joining user flow on a user research platform connecting companies with target users, improving the overall user experience by 20%.",
    href: "/despark",
    hero: "/images/despark/hero.png",
    heroAlt: "Despark All Missions dashboard on a laptop",
    accent: "purple" as const,
  },
] as const;

export type Project = (typeof projects)[number];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function otherProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug);
}
