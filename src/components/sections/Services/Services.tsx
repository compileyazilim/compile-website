// src/components/sections/Services/Services.tsx
import Section from "@/components/layout/Section/Section";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Frontend Platforms",
    desc: "High-performance web interfaces for TSS, ÖSS and health insurance modules. Complex business workflows translated into clean, intuitive user experiences.",
    tags: ["React / Next.js", "TypeScript", "Performance"],
  },
  {
    num: "02",
    title: "Service Integration",
    desc: "Seamless connection with insurance backends, provizyon APIs and pharmacy networks. Robust data flows, deep validation layers and comprehensive error handling.",
    tags: ["API Integration", "REST / GraphQL", "Error Handling"],
  },
  {
    num: "03",
    title: "UI Systems & Design",
    desc: "Insurance-specific component libraries, design token systems and consistent interface standards that scale across every product and team we work with.",
    tags: ["Design System", "Tokens", "Storybook"],
  },
  {
    num: "04",
    title: "Technical Consulting",
    desc: "Architecture reviews, performance audits and frontend strategy for insurance teams who need a trusted technical partner with deep domain knowledge.",
    tags: ["Architecture", "Audit", "Strategy"],
  },
];

export default function ServicesSection() {
  return (
    <Section
      id="services"
      tag="What we do"
      title={
        <>
          Built for <em>insurance</em>,<br />
          built for production.
        </>
      }
      subtitle="We design, build and ship insurance-specific digital products — from first wireframe to go-live."
      background="cream2"
    >
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.sv}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.title}>{s.title}</div>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
