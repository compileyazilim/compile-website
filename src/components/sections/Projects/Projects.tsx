// src/components/sections/Projects/Projects.tsx
import Section from "@/components/layout/Section/Section";
import styles from "./Projects.module.css";

const projects = [
  {
    icon: "🏥",
    tag: "Health Insurance",
    title: "TSS Journey Screens",
    desc: "End-to-end complementary health insurance flow — multi-step application, real-time validation, complex eligibility logic and production-grade error handling.",
    client: "Insurance sector client",
    href: "#",
  },
  {
    icon: "💊",
    tag: "Pharmacy Operations",
    title: "Pharmacy Provizyon Module",
    desc: "Contracted pharmacy approval and provizyon flows, invoice processing steps and full operation screens deeply integrated with backend insurance services.",
    client: "Insurance sector client",
    href: "#",
  },
  {
    icon: "⚡",
    tag: "Digital Self Service",
    title: "DAP & Self Service Portal",
    desc: "Policy management, digital application and self-service modules on a unified platform. Clean architecture, fast load times and robust API integration.",
    client: "Insurance sector client",
    href: "#",
  },
];

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      tag="Our work"
      title={
        <>
          Real projects,
          <br />
          <em>real impact</em>.
        </>
      }
      subtitle="Production-grade digital products delivered for clients in the insurance sector."
      background="cream"
    >
      <div className={styles.grid}>
        {projects.map((p) => (
          <a key={p.title} href={p.href} className={styles.card}>
            <div className={styles.top}>
              <div className={styles.ico}>{p.icon}</div>
              <div className={styles.arr}>↗</div>
            </div>
            <div className={styles.tag}>{p.tag}</div>
            <div className={styles.title}>{p.title}</div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.foot}>
              <span className={styles.dot} />
              <span className={styles.client}>{p.client}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
