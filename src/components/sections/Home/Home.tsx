"use client";

import { FadeUp, fadeUpProps } from "@/components/ui/Motion";
import Container from "@/components/layout/Container/Container";
import styles from "./Home.module.css";

export default function HomeSection() {
  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <FadeUp {...fadeUpProps}>
              <div className={styles.left}>
                <div className={styles.badge}>
                  <span className={styles.dot} />
                  Compile • Insurance Digital Products
                </div>

                <h1 className={styles.h1}>
                  Compile builds{" "}
                  <span className={styles.accent}>production-ready</span>
                  <br /> insurance platforms.
                </h1>

                <p className={styles.lead}>
                  TSS & ÖSS, eczane, yatarak/ayakta, anlaşmalı kurum, DAP & Self
                  Service — modern web UI, strong performance, clean
                  architecture.
                </p>

                <div className={styles.actions}>
                  <a className={styles.primary} href="#portfolio">
                    See case studies
                  </a>
                  <a className={styles.secondary} href="#contact">
                    Talk to us
                  </a>
                </div>

                <FadeUp
                  {...fadeUpProps}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
                >
                  <div className={styles.miniGrid}>
                    <div className={styles.miniItem}>
                      <div className={styles.miniIcon}>🛡️</div>
                      <div className={styles.miniTitle}>Reliable</div>
                      <div className={styles.miniDesc}>
                        Production workflows & validation mindset.
                      </div>
                    </div>

                    <div className={styles.miniItem}>
                      <div className={styles.miniIcon}>⚡</div>
                      <div className={styles.miniTitle}>Fast Delivery</div>
                      <div className={styles.miniDesc}>
                        Clean structure, quick iteration.
                      </div>
                    </div>

                    <div className={styles.miniItem}>
                      <div className={styles.miniIcon}>🧩</div>
                      <div className={styles.miniTitle}>UI Systems</div>
                      <div className={styles.miniDesc}>
                        Components, tokens, consistency.
                      </div>
                    </div>

                    <div className={styles.miniItem}>
                      <div className={styles.miniIcon}>📈</div>
                      <div className={styles.miniTitle}>Performance</div>
                      <div className={styles.miniDesc}>
                        SEO + Core Web Vitals focused.
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </FadeUp>

            <FadeUp
              {...fadeUpProps}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            >
              <div className={styles.panel}>
                <div className={styles.panelTop}>
                  <div className={styles.panelTitle}>Domains</div>
                  <div className={styles.panelPill}>
                    Insurance • Platforms • UI
                  </div>
                </div>

                <div className={styles.panelGrid}>
                  <div className={styles.panelCard}>
                    <div className={styles.panelHead}>TSS / ÖSS</div>
                    <div className={styles.panelDesc}>
                      Journey screens, validations, production workflows.
                    </div>
                  </div>

                  <div className={styles.panelCard}>
                    <div className={styles.panelHead}>Eczane</div>
                    <div className={styles.panelDesc}>
                      Approval flows, invoice steps, contracted pharmacy ops.
                    </div>
                  </div>

                  <div className={styles.panelCard}>
                    <div className={styles.panelHead}>Yatarak / Ayakta</div>
                    <div className={styles.panelDesc}>
                      Hospital processes, eligibility, payment experiences.
                    </div>
                  </div>

                  <div className={styles.panelCard}>
                    <div className={styles.panelHead}>DAP & Self Service</div>
                    <div className={styles.panelDesc}>
                      Digital application + self-service modules in production.
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <a href="#about" className={styles.scrollHint}>
            Scroll <span className={styles.chev}>↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}