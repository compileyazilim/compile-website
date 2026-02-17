import Section from "@/components/layout/Section/Section";
import styles from "./About.module.css";
import ui from "@/components/ui/ui.module.css";

const areas = [
  {
    title: "Web Platforms",
    desc:
      "Modern web applications with scalable architecture and clean UX.",
  },
  {
    title: "UI Systems",
    desc:
      "Design tokens and reusable component libraries for consistent experiences.",
  },
  {
    title: "Performance",
    desc:
      "Fast loading, SEO-friendly pages and strong Core Web Vitals.",
  },
  {
    title: "Product Growth",
    desc:
      "Iteration, analytics-ready foundations and long-term maintainability.",
  },
];

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="Our Mission"
      subtitle="We build practical and high-quality solutions using today’s and tomorrow’s technology."
    >
      <div className={styles.grid}>
        <div className={`${ui.card} ${styles.mission}`}>
          <div className={styles.kicker}>Our</div>
          <div className={styles.missionTitle}>Mission</div>

          <p className={styles.text}>
            Compile is a young, innovative technology team focused on quality,
            design and affordability. We create value by building clean digital
            products that make work easier and experiences better.
          </p>

          <p className={styles.text}>
            We aim to help teams move faster with better foundations: scalable
            frontend architecture, consistent UI systems and performance-driven
            delivery.
          </p>
        </div>

        <div className={styles.cards}>
          {areas.map((a) => (
            <div key={a.title} className={`${ui.card} ${styles.areaCard}`}>
              <div className={styles.areaTop}>
                <div className={styles.areaTitle}>{a.title}</div>
                <div className={styles.areaDot} />
              </div>
              <p className={styles.areaDesc}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
