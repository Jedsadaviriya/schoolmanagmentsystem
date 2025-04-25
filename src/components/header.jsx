"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeSwitcher from "@/components/theme-switcher"
import styles from "./header.module.css"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.logoIcon}
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
        School Management
      </Link>

      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}>
            Home
          </Link>
          <Link href="/kalender" className={`${styles.navLink} ${pathname === "/kalender" ? styles.activeLink : ""}`}>
            Kalender
          </Link>
          <Link href="/noten" className={`${styles.navLink} ${pathname === "/noten" ? styles.activeLink : ""}`}>
            Noten
          </Link>
          <Link href="/module" className={`${styles.navLink} ${pathname === "/module" ? styles.activeLink : ""}`}>
            Module
          </Link>
        </div>

        <ThemeSwitcher />
      </nav>
    </header>
  )
}
