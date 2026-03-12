const en = {
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    cta: "Let's talk",
  },

  home: {
    eyebrow: "Insurance Digital Products",
    h1a: "We build",
    h1accent: "insurance",
    h1b: "software that works.",
    lead: "End-to-end digital products for the insurance industry — pharmacy ops, inpatient & outpatient flows, DAP, e-invoice, provizyon and more. Built with Angular, Java and PL/SQL.",
    btnPrimary: "See our work →",
    btnSecondary: "Get in touch",
    stat1val: "10+",
    stat1lbl: "Live projects",
    stat2val: "6",
    stat2lbl: "Years in insurance",
    stat3val: "100%",
    stat3lbl: "Insurance focused",
    cardLabel: "Coverage Areas",
    cardBadge: "Active",
    cardFooterTitle: "Insurance sector",
    cardFooterSub: "Active partnerships",
    domains: [
      { name: "Pharmacy", desc: "Provizyon & approval flows" },
      { name: "Inpatient / ÖSS", desc: "Hospital & eligibility flows" },
      { name: "DAP & Self Service", desc: "Digital application portals" },
      { name: "Contracted Providers", desc: "Pricing, offers & network mgmt" },
    ],
  },

  services: {
    tag: "What we do",
    titleA: "Deep domain.",
    titleAccent: "Clean code.",
    titleB: "Delivered.",
    subtitle:
      "We design, develop and maintain complex insurance software — from UI to database, end to end.",
    items: [
      {
        num: "01",
        title: "Insurance UI Development",
        desc: "Enterprise-grade Angular applications for health insurance workflows. TSS, ÖSS, pharmacy, inpatient and self-service — built to handle real-world complexity at scale.",
        tags: ["Angular", "TypeScript", "Enterprise UI"],
      },
      {
        num: "02",
        title: "Java & PL/SQL Integration",
        desc: "Java dispatcher layer that bridges PL/SQL business logic to clean REST endpoints. Robust, maintainable and deeply integrated with insurance backend systems.",
        tags: ["Java", "PL/SQL", "REST API"],
      },
      {
        num: "03",
        title: "Insurance Domain Expertise",
        desc: "Six years inside insurance systems — provizyon flows, e-invoice structures, contracted provider networks, pricing & offer management. We know the domain before writing a single line of code.",
        tags: ["Provizyon", "e-Fatura", "Provider Network"],
      },
      {
        num: "04",
        title: "End-to-End Delivery",
        desc: "From requirements to production. We work across the full stack — Angular frontend, Java middleware and PL/SQL backend — so nothing gets lost between layers.",
        tags: ["Full Stack", "Architecture", "Support"],
      },
    ],
  },

  projects: {
    tag: "Our work",
    titleA: "10+ projects.",
    titleAccent: "one domain.",
    subtitle:
      "A decade of insurance software — every project built with the same care, domain knowledge and attention to production quality.",
    client: "Insurance sector client",
    items: [
      {
        tag: "Pharmacy Operations",
        title: "Pharmacy Provizyon Module",
        desc: "Contracted pharmacy approval flows, provizyon processing and full operation screens — deeply integrated with backend insurance services and real-time validation.",
      },
      {
        tag: "Inpatient & Outpatient",
        title: "Hospital Eligibility Flows",
        desc: "Inpatient and outpatient insurance workflows covering eligibility checks, approval chains and patient journey screens for health insurance operations.",
      },
      {
        tag: "Digital Self Service",
        title: "DAP & Self Service Portal",
        desc: "Digital application platform and self-service insurance management. Multi-step flows, document handling and policy management on a unified Angular platform.",
      },
      {
        tag: "Provider Network",
        title: "Contracted Provider Management",
        desc: "End-to-end platform for managing contracted hospitals, clinics and pharmacies — price negotiations, offer flows, agreement tracking and network status monitoring.",
      },
    ],
  },

  about: {
    tag: "About Compile",
    titleA: "Small team.",
    titleAccent: "deep expertise.",
    titleB: "",
    p1: "Compile is a five-person software team with six years of hands-on experience building digital products for the insurance industry.",
    p2: "We work across the full stack — Angular on the frontend, Java as the middleware dispatcher, and PL/SQL at the data layer. We know insurance workflows from the inside: provizyon, e-fatura, icmal, DAP and everything in between.",
    p3: "Our size is our advantage. Every project gets senior attention from day one — no juniors, no handoffs, no surprises.",
    values: [
      {
        title: "Domain Knowledge",
        desc: "Six years inside insurance systems. We know the flows, the edge cases and the compliance requirements before you explain them.",
      },
      {
        title: "Full Stack Ownership",
        desc: "Angular, Java, PL/SQL — we own the entire stack. No finger-pointing between layers, no lost context between teams.",
      },
      {
        title: "Senior Team Only",
        desc: "Five experienced engineers. Every feature is built, reviewed and shipped by people who have done it before.",
      },
      {
        title: "Production Mindset",
        desc: "We build for the long run. Clean architecture, proper error handling and maintainable code — not just for demo day.",
      },
    ],
  },

  contact: {
    eyebrow: "Let's work together",
    titleA: "Got an insurance",
    titleB: "project?",
    titleAccent: "Let's talk",
    sub: "Whether you need a new module, a full platform or help untangling an existing system — we know insurance software and we'd love to hear about your project.",
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
