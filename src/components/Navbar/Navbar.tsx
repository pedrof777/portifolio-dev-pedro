"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const isActive = (href: string) => pathName === href;

  const linkClass = (href: string) =>
    isActive(href) ? styles.linkActive : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {"~/pedro-dev"}
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/" className={linkClass("/")}>
            {"início"}
          </Link>
          <Link href="/projetos" className={linkClass("/projetos")}>
            {"projetos"}
          </Link>
          <Link href="/sobre" className={linkClass("/sobre")}>
            {"sobre"}
          </Link>
          <Link href="/#contato" className={styles.contato}>
            {"contato"}
          </Link>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            {"início"}
          </Link>
          <Link
            href="/projetos"
            className={linkClass("/projetos")}
            onClick={() => setMenuOpen(false)}
          >
            {"projetos"}
          </Link>
          <Link
            href="/sobre"
            className={linkClass("/sobre")}
            onClick={() => setMenuOpen(false)}
          >
            {"sobre"}
          </Link>
          <Link
            href="/#contato"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            {"contato"}
          </Link>
        </nav>
      )}
    </header>
  );
}
