// src/components/sections/Contact/Contact.tsx
import styles from "./Contact.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.sec}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          Let&apos;s work together
          <span className={styles.line} />
        </div>

        <h2 className={styles.h}>
          Ready to build
          <br />
          something <em className={styles.em}>exceptional</em>?
        </h2>

        <p className={styles.sub}>
          Whether you&apos;re starting a new insurance platform or improving an
          existing one — we&apos;d love to hear about your project.
        </p>

        <div className={styles.links}>
          <a href="mailto:developers@compile.com.tr" className={styles.cl}>
            <span className={styles.ico}>✉️</span>
            <span>developers@compile.com.tr</span>
            <span className={styles.arr}>→</span>
          </a>
          <a
            href="https://www.linkedin.com/company/compileyazilim/"
            target="_blank"
            rel="noreferrer"
            className={styles.cl}
          >
            <span className={styles.ico}>💼</span>
            <span>Connect on LinkedIn</span>
            <span className={styles.arr}>→</span>
          </a>
          <a
            href="https://github.com/compileyazilim"
            target="_blank"
            rel="noreferrer"
            className={styles.cl}
          >
            <span className={styles.ico}>🐙</span>
            <span>Explore our GitHub</span>
            <span className={styles.arr}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
