"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);

    const sections = links
      .map((l) => document.querySelector(l.href) as HTMLElement)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.row}>
          <a href="#home" className={styles.brand}>
            <Image
              src="/logo.png"
              alt="Compile"
              width={120}
              height={37}
              priority
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          <nav className={styles.nav}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className={styles.cta}>
              Let&apos;s talk
            </a>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {open && (
          <div className={styles.mobile}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${styles.mobileLink} ${active === l.href ? styles.mobileLinkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk →
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}
