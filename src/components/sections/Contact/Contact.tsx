"use client";

import Section from "../../layout/Section/Section";
import styles from "./Contact.module.css";
import ui from "../../ui/ui.module.css";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Tell us about your project. We’ll reply quickly."
    >
      <div className={styles.grid}>
        <div className={`${ui.card} ${styles.info}`}>
          <div className={styles.infoTitle}>Compile</div>
          <p className={styles.infoText}>
            İstanbul / Remote <br />
            UI Engineering · Next.js · Design Systems
          </p>

          <div className={styles.row}>
            <span className={styles.k}>Email</span>
            <a className={styles.v} href="mailto:hello@compile.com">
              hello@compile.com
            </a>
          </div>

          <div className={styles.row}>
            <span className={styles.k}>LinkedIn</span>
            <a className={styles.v} href="#" target="_blank">
              Open profile →
            </a>
          </div>
        </div>

        <form className={`${ui.card} ${styles.form}`} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            Name
            <input className={styles.input} placeholder="Your name" />
          </label>

          <label className={styles.label}>
            Email
            <input className={styles.input} placeholder="you@email.com" />
          </label>

          <label className={styles.label}>
            Message
            <textarea className={styles.textarea} placeholder="Tell us what you need..." />
          </label>

          <button className={styles.submit} type="submit">
            Send message
          </button>

        </form>
      </div>
    </Section>
  );
}
