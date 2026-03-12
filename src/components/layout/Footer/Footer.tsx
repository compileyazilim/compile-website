// src/components/layout/Footer/Footer.tsx
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Image
            src="/footer_logo.png"
            alt="Compile"
            width={31}
            height={31}
            className={styles.logo}
          />
          <div className={styles.copy}>
            © {new Date().getFullYear()} Compile. Insurance digital products.
          </div>
          <div className={styles.links}>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
