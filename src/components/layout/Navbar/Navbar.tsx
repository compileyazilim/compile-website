"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <a href="#home" className={styles.brand}>
            <Image
              src="/logo.png"
              alt="Compile"
              width={120}
              height={37}
              priority
            />
          </a>

          <nav className={styles.nav}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className={styles.cta}>
              Let&apos;s talk
            </a>
          </nav>

          {/* Mobil hamburger */}
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
                className={styles.mobileLink}
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
