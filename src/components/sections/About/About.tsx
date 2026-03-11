// src/components/sections/About/About.tsx
import Section from "@/components/layout/Section/Section";
import styles from "./About.module.css";

const values = [
  {
    icon: "🛡️",
    title: "Reliable Delivery",
    desc: "Production mindset from day one. Every feature is built to ship, not just to demo.",
  },
  {
    icon: "⚡",
    title: "Speed & Quality",
    desc: "Clean code structure and rapid iteration — we move fast without sacrificing quality.",
  },
  {
    icon: "🧩",
    title: "Scalable Systems",
    desc: "Component libraries, design tokens and consistent UX standards for long-term solutions.",
  },
  {
    icon: "📈",
    title: "Performance Focused",
    desc: "Core Web Vitals, SEO and UX metrics — we continuously improve what gets measured.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" title="About Compile">
      <div className={styles.grid}>
        {/* Sol: metin blok */}
        <div className={styles.left}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            About Compile
          </div>
          <h2 className={styles.h}>
            Digital products that make <em className={styles.em}>complex</em>{" "}
            feel simple.
          </h2>
          <p className={styles.p}>
            Compile is a focused software team dedicated to turning the
            insurance industry&apos;s most complex processes into fast, reliable
            and genuinely beautiful digital products.
          </p>
          <p className={styles.p}>
            We help teams move faster with clean frontend architecture,
            consistent UI systems and performance-driven delivery — from first
            commit to production.
          </p>
        </div>

        {/* Sağ: değerler listesi */}
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
