// src/components/sections/Contact/Contact.tsx
import styles from "./Contact.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.sec}>
      {/* Dekoratif glow'lar */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.line} /> Let&apos;s work together{" "}
          <span className={styles.line} />
        </div>
        <h2 className={styles.h}>
          Ready to build
          <br />
          something <em className={styles.em}>great</em>?
        </h2>
        <p className={styles.sub}>
          Looking for the right technology partner for your insurance platform?
          Let&apos;s talk about your project and see how we can help.
        </p>

        <div className={styles.links}>
          <a href="mailto:hello@compile.dev" className={styles.cl}>
            <span className={styles.ico}>✉️</span>
            <span>hello@compile.dev</span>
            <span className={styles.arr}>→</span>
          </a>
          <a href="https://linkedin.com" target="_blank" className={styles.cl}>
            <span className={styles.ico}>💼</span>
            <span>Connect on LinkedIn</span>
            <span className={styles.arr}>→</span>
          </a>
          <a href="https://github.com" target="_blank" className={styles.cl}>
            <span className={styles.ico}>🐙</span>
            <span>Explore our GitHub</span>
            <span className={styles.arr}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
