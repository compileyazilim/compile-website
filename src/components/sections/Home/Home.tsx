"use client";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/layout/Container/Container";
import styles from "./Home.module.css";
import { useLang } from "@/context/LangContext";

const icons = ["🏥", "💊", "🛏️", "⚡"];

export default function HomeSection() {
  const { t } = useLang();
  const h = t.home;
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.line} />

      <div className={styles.circle} />
      <div className={styles.circleInner} />

      <Container>
        <div className={styles.inner}>
          <Reveal>
            <div className={styles.left}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {h.eyebrow}
                <span className={styles.eyebrowLine} />
              </div>

              <h1 className={styles.h1}>
                {h.h1a} <em className={styles.em}>{h.h1accent}</em>
                <br />
                {h.h1b}
              </h1>
              <p className={styles.lead}>{h.lead}</p>
              <div className={styles.btns}>
                <a href="#projects" className={styles.btnP}>
                  {h.btnPrimary}
                </a>
                <a href="#contact" className={styles.btnS}>
                  {h.btnSecondary}
                </a>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>{h.stat1val}</div>
                  <div className={styles.statLbl}>{h.stat1lbl}</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>{h.stat2val}</div>
                  <div className={styles.statLbl}>{h.stat2lbl}</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>{h.stat3val}</div>
                  <div className={styles.statLbl}>{h.stat3lbl}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>{h.cardLabel}</span>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} /> {h.cardBadge}
              </div>
            </div>

            <div className={styles.domainList}>
              {h.domains.map((d, i) => (
                <div key={i} className={styles.dlItem}>
                  <div className={styles.dlIco}>{icons[i]}</div>
                  <div>
                    <div className={styles.dlName}>{d.name}</div>
                    <div className={styles.dlDesc}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.clientRow}>
              <span>🤝</span>
              <div>
                <div className={styles.clientTxt}>{h.cardFooterTitle}</div>
                <div className={styles.clientSub}>{h.cardFooterSub}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
