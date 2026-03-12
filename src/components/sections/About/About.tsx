// src/components/sections/About/About.tsx
import Section from "@/components/layout/Section/Section";
import styles from "./About.module.css";

const values = [
  {
    icon: "🛡️",
    title: "Reliable Delivery",
    desc: "Production mindset from day one. Every feature is built to ship and maintain — not just to demo.",
  },
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    desc: "Rapid iteration with clean architecture. We move fast without creating technical debt.",
  },
  {
    icon: "🧩",
    title: "Scalable UI Systems",
    desc: "Component libraries and design tokens built for consistency across every screen, every team.",
  },
  {
    icon: "📈",
    title: "Performance by Default",
    desc: "Core Web Vitals, accessibility and SEO are not afterthoughts — they are part of every build.",
  },
];

export default function AboutSection() {
  return (
    <Section
      id="about"
      tag="About Compile"
      title={
        <>
          We turn <em>complexity</em>
          <br />
          into clarity.
        </>
      }
      background="cream2"
    >
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.p}>
            Compile is a focused software team dedicated to building fast,
            reliable and genuinely well-crafted digital products for the
            insurance industry.
          </p>
          <p className={styles.p}>
            We partner with insurers and insurtech teams to ship clean frontend
            architecture, consistent UI systems and performance-driven
            experiences — from the first commit to long-term production support.
          </p>
          <p className={styles.p}>
            Our deep domain knowledge means we understand your workflows, your
            compliance requirements and your users — so we build the right
            thing, right.
          </p>
        </div>

        <div className={styles.values}>
          {values.map((v) => (
            <div key={v.title} className={styles.vi}>
              <div className={styles.viRow}>
                <span className={styles.viTitle}>{v.title}</span>
                <span className={styles.viIco}>{v.icon}</span>
              </div>
              <p className={styles.viDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
