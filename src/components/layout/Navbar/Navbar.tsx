"use client";

import { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import styles from "./Navbar.module.css";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
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
              width={400}
              height={160}
              priority
              className={styles.logo}
            />
          </a>

          <nav className={styles.nav}>
            {items.map((x) => (
              <a key={x.href} href={x.href} className={styles.link}>
                {x.label}
              </a>
            ))}
            <a href="#contact" className={styles.cta}>
              Let’s talk
            </a>
          </nav>

          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            Menu
          </button>
        </div>

        {open ? (
          <div className={styles.mobile}>
            {items.map((x) => (
              <a key={x.href} href={x.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {x.label}
              </a>
            ))}
            <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
              Let’s talk
            </a>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
