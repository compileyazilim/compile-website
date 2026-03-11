// src/components/sections/Projects/Projects.tsx
import Section from "@/components/layout/Section/Section";
import styles from "./Projects.module.css";

const projects = [
  {
    icon: "🏥",
    tag: "Health Insurance",
    title: "TSS Journey Screens",
    desc: "Complementary health insurance application and management flow. Multi-step journey, validation layers, production-ready implementation for a leading insurer.",
    client: "Insurance sector client",
    href: "#",
  },
  {
    icon: "💊",
    tag: "Pharmacy Ops",
    title: "Pharmacy Provizyon Module",
    desc: "Contracted pharmacy approval flows, invoice steps and end-to-end operation screens — deeply integrated with backend provizyon services.",
    client: "Insurance sector client",
    href: "#",
  },
  {
    icon: "⚡",
    tag: "Self Service",
    title: "DAP & Self Service Portal",
    desc: "Digital application platform and self-service insurance management modules. Modern UI architecture backed by a robust, fully integrated service layer.",
    client: "Insurance sector client",
    href: "#",
  },
];

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Real projects,<br /><em>real impact</em>."
      subtitle="Production projects delivered for clients in the insurance sector."
    >
      <div className={styles.grid}>
        {projects.map((p) => (
          <a key={p.title} href={p.href} className={styles.card}>
            <div className={styles.top}>
              {/* Sol: emoji ikon kutu */}
              <div className={styles.ico}>{p.icon}</div>
              {/* Sağ: yuvarlak ok */}
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
