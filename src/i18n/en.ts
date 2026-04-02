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
    h1b: "software that creates value.",
    lead: "End-to-end digital solutions for the insurance industry — contracted provider management systems, digital pricing and quotation workflows, pharmacy provisioning, inpatient and outpatient systems, and more.",
    btnPrimary: "See our work →",
    btnSecondary: "Contact us",
    stat1val: "15+",
    stat1lbl: "Live projects",
    stat2val: "20",
    stat2lbl: "Years of experience",
    stat3val: "100%",
    stat3lbl: "Insurance-focused",
    cardLabel: "Coverage Areas",
    cardBadge: "Active",
    cardFooterTitle: "Insurance sector",
    cardFooterSub: "Active partnerships",
    domains: [
      { name: "Provisioning Systems", desc: "Provisioning and approval processes" },
      { name: "Digital Approval", desc: "Digital application portals" },
      { name: "e-Invoice", desc: "Integration with provisioning systems" },
      { name: "Contracted Providers", desc: "Pricing, quotation, and network management" },
      { name: "Workplace Physician System", desc: "Digital solutions for workplace physicians" },
      { name: "OVM", desc: "SMV common data model submission service" },
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
    tag: "Our Work",
    titleA: "10+ projects.",
    titleAccent: "one domain.",
    subtitle:
      "A decade of insurance software expertise — every project is built with the same care, domain knowledge, and production quality.",
    client: "Insurance industry client",
    items: [
      {
        tag: "Provisioning Systems",
        title: "Provisioning & Approval Platform",
        desc: "End-to-end provisioning and approval processes for insurance operations — real-time validation, rule-based decision engines, and full integration with backend services.",
      },
      {
        tag: "Digital Approval",
        title: "Digital Application & Approval Flows",
        desc: "Multi-step digital application and approval processes — including document management, validation layers, and user-friendly interfaces for fast and error-free workflows.",
      },
      {
        tag: "e-Invoice",
        title: "e-Invoice Integration Systems",
        desc: "e-Invoice solutions integrated with provisioning systems — enabling automated billing, reconciliation processes, and full compliance with financial workflows.",
      },
      {
        tag: "Contracted Providers",
        title: "Provider Network Management Platform",
        desc: "A comprehensive platform for managing hospitals, clinics, and pharmacy networks — including pricing, quotation processes, agreement tracking, and network monitoring.",
      },
      {
        tag: "Workplace Physician System",
        title: "Workplace Health Management System",
        desc: "A digital solution designed for workplace physicians — enabling employee health tracking, reporting, and seamless integration with insurance processes.",
      },
      {
        tag: "OVM",
        title: "Common Data Model (OVM) Integration",
        desc: "SMV-based common data model submission service — ensuring standardized data exchange and seamless integration with external systems.",
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
    about: "About",
  },
};

export default en;
export type Translations = typeof en;
