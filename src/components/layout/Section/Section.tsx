import { ReactNode } from "react";
import Container from "../Container/Container";
import Reveal from "../../ui/Reveal";
import styles from "./Section.module.css";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>

        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
