import Section from "../../layout/Section/Section";
import styles from "./Portfolio.module.css";
import ui from "../../ui/ui.module.css";
import { portfolio } from "@/content/portfolio";

export default function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      title="Portfolio"
      subtitle="Selected work. Clean UI, fast delivery, maintainable code."
    >
      <div className={styles.grid}>
        {portfolio.map((p) => (
          <a key={p.title} href={p.href} className={`${ui.card} ${styles.card}`}>
            <div className={styles.top}>
              <span className={styles.tag}>{p.tag}</span>
              <span className={styles.arrow}>→</span>
            </div>

            <div className={styles.title}>{p.title}</div>
            <p className={styles.desc}>{p.desc}</p>

            <div className={styles.more}>View details</div>
          </a>
        ))}
      </div>
    </Section>
  );
}
