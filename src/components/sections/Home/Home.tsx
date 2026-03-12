"use client";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/layout/Container/Container";
import styles from "./Home.module.css";

const domains = [
  { icon: "🏥", name: "TSS / ÖSS", desc: "Journey screens & workflows" },
  { icon: "💊", name: "Pharmacy", desc: "Provizyon & approval flows" },
  {
    icon: "🛏️",
    name: "Inpatient / Outpatient",
    desc: "Hospital & eligibility UX",
  },
  {
    icon: "⚡",
    name: "DAP & Self Service",
    desc: "Digital application portals",
  },
];

export default function HomeSection() {
  return (
    <section id="home" className={styles.hero}>
      {/* Dekoratif çizgi — yatay diyagonal */}
      <div className={styles.line} />

      {/* Sağ taraftaki büyük daire (büyük ekran) */}
      <div className={styles.circle} />
      <div className={styles.circleInner} />

      <Container>
        <div className={styles.inner}>
          {/* ─ Sol: metin ─ */}
          <Reveal>
            <div className={styles.left}>
              {/* Eyebrow — çizgi + yazı + çizgi */}
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Insurance Digital Products
                <span className={styles.eyebrowLine} />
              </div>

              {/* H1 — Playfair + italic accent */}
              <h1 className={styles.h1}>
                We engineer <em className={styles.em}>insurance</em>
                <br />
                platforms that ship.
              </h1>

              <p className={styles.lead}>
                We build production-ready digital platforms for the insurance
                industry — TSS &amp; ÖSS journeys, pharmacy ops, inpatient flows
                and self-service portals, end to end.
              </p>

              <div className={styles.btns}>
                <a href="#projects" className={styles.btnP}>
                  See our projects →
                </a>
                <a href="#contact" className={styles.btnS}>
                  Get in touch
                </a>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>5+</div>
                  <div className={styles.statLbl}>Live projects</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>Full</div>
                  <div className={styles.statLbl}>Stack delivery</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>100%</div>
                  <div className={styles.statLbl}>Insurance focused</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ─ Sağ: floating card (yalnızca ≥1080px) ─ */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Coverage Areas</span>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} /> Active
              </div>
            </div>

            <div className={styles.domainList}>
              {domains.map((d) => (
                <div key={d.name} className={styles.dlItem}>
                  <div className={styles.dlIco}>{d.icon}</div>
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
                <div className={styles.clientTxt}>Insurance sector</div>
                <div className={styles.clientSub}>Active partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
