import Section from "../../layout/Section/Section";
import styles from "./Blog.module.css";
import ui from "../../ui/ui.module.css";

import { blogPosts } from "@/content/blog";

export default function BlogSection() {
  return (
    <Section
      id="blog"
      title="Blog"
      subtitle="Notes about UI, frontend engineering and product thinking."
    >
      <div className={styles.grid}>
        {blogPosts.map((p) => (
          <a key={p.title} href={p.href} className={`${ui.card} ${styles.card}`}>
            <div className={styles.date}>{p.date}</div>
            <div className={styles.title}>{p.title}</div>
            <p className={styles.excerpt}>{p.excerpt}</p>
            <div className={styles.more}>Read →</div>
          </a>
        ))}
      </div>
    </Section>
  );
}
