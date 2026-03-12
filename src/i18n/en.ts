const en = {
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    cta: "Let's talk",
  },

  home: {
    eyebrow: "Insurance Digital Products",
    h1a: "We engineer",
    h1accent: "insurance",
    h1b: "platforms that ship.",
    lead: "We build production-ready digital platforms for the insurance industry — TSS & ÖSS journeys, pharmacy ops, inpatient flows and self-service portals, end to end.",
    btnPrimary: "See our projects →",
    btnSecondary: "Get in touch",
    stat1val: "5+",   stat1lbl: "Live projects",
    stat2val: "Full", stat2lbl: "Stack delivery",
    stat3val: "100%", stat3lbl: "Insurance focused",
    cardLabel: "Coverage Areas",
    cardBadge: "Active",
    cardFooterTitle: "Insurance sector",
    cardFooterSub: "Active partnerships",
    domains: [
      { name: "TSS / ÖSS",             desc: "Journey screens & workflows" },
      { name: "Pharmacy",               desc: "Provizyon & approval flows"  },
      { name: "Inpatient / Outpatient", desc: "Hospital & eligibility UX"   },
      { name: "DAP & Self Service",     desc: "Digital application portals" },
    ],
  },

  services: {
    tag: "What we do",
    titleA: "Built for",
    titleAccent: "insurance",
    titleB: "built for production.",
    subtitle: "We design, build and ship insurance-specific digital products — from first wireframe to go-live.",
    items: [
      {
        num: "01", title: "Frontend Platforms",
        desc: "High-performance web interfaces for TSS, ÖSS and health insurance modules. Complex business workflows translated into clean, intuitive user experiences.",
        tags: ["React / Next.js", "TypeScript", "Performance"],
      },
      {
        num: "02", title: "Service Integration",
        desc: "Seamless connection with insurance backends, provizyon APIs and pharmacy networks. Robust data flows, deep validation layers and comprehensive error handling.",
        tags: ["API Integration", "REST / GraphQL", "Error Handling"],
      },
      {
        num: "03", title: "UI Systems & Design",
        desc: "Insurance-specific component libraries, design token systems and consistent interface standards that scale across every product and team we work with.",
        tags: ["Design System", "Tokens", "Storybook"],
      },
      {
        num: "04", title: "Technical Consulting",
        desc: "Architecture reviews, performance audits and frontend strategy for insurance teams who need a trusted technical partner with deep domain knowledge.",
        tags: ["Architecture", "Audit", "Strategy"],
      },
    ],
  },

  projects: {
    tag: "Our work",
    titleA: "Real projects,",
    titleAccent: "real impact",
    subtitle: "Production-grade digital products delivered for clients in the insurance sector.",
    client: "Insurance sector client",
    items: [
      {
        tag: "Health Insurance", title: "TSS Journey Screens",
        desc: "End-to-end complementary health insurance flow — multi-step application, real-time validation, complex eligibility logic and production-grade error handling.",
      },
      {
        tag: "Pharmacy Operations", title: "Pharmacy Provizyon Module",
        desc: "Contracted pharmacy approval and provizyon flows, invoice processing steps and full operation screens deeply integrated with backend insurance services.",
      },
      {
        tag: "Digital Self Service", title: "DAP & Self Service Portal",
        desc: "Policy management, digital application and self-service modules on a unified platform. Clean architecture, fast load times and robust API integration.",
      },
    ],
  },

  about: {
    tag: "About Compile",
    titleA: "We turn",
    titleAccent: "complexity",
    titleB: "into clarity.",
    p1: "Compile is a focused software team dedicated to building fast, reliable and genuinely well-crafted digital products for the insurance industry.",
    p2: "We partner with insurers and insurtech teams to ship clean frontend architecture, consistent UI systems and performance-driven experiences — from the first commit to long-term production support.",
    p3: "Our deep domain knowledge means we understand your workflows, your compliance requirements and your users — so we build the right thing, right.",
    values: [
      { title: "Reliable Delivery",        desc: "Production mindset from day one. Every feature is built to ship and maintain — not just to demo." },
      { title: "Speed Without Compromise", desc: "Rapid iteration with clean architecture. We move fast without creating technical debt." },
      { title: "Scalable UI Systems",      desc: "Component libraries and design tokens built for consistency across every screen, every team." },
      { title: "Performance by Default",   desc: "Core Web Vitals, accessibility and SEO are not afterthoughts — they are part of every build." },
    ],
  },

  contact: {
    eyebrow: "Let's work together",
    titleA: "Ready to build",
    titleB: "something",
    titleAccent: "exceptional",
    sub: "Whether you're starting a new insurance platform or improving an existing one — we'd love to hear about your project.",
    email: "developers@compile.com.tr",
    linkedin: "Connect on LinkedIn",
    github: "Explore our GitHub",
  },

  footer: {
    copy: "Compile. Insurance digital products.",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
  },
};

export default en;
export type Translations = typeof en;