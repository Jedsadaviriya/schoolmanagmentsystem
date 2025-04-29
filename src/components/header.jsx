"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import ThemeSwitcher from "@/components/theme-switcher"
import styles from "./header.module.css"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    setMounted(true)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  if (!mounted) return null

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIconWrapper}>
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
        </div>
        <span className={styles.logoText}>School Management</span>
      </Link>

      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}>
            <span className={styles.navLinkText}>Home</span>
          </Link>
          <Link href="/kalender" className={`${styles.navLink} ${pathname === "/kalender" ? styles.activeLink : ""}`}>
            <span className={styles.navLinkText}>Kalender</span>
          </Link>
          <Link href="/noten" className={`${styles.navLink} ${pathname === "/noten" ? styles.activeLink : ""}`}>
            <span className={styles.navLinkText}>Noten</span>
          </Link>
          <Link href="/module" className={`${styles.navLink} ${pathname === "/module" ? styles.activeLink : ""}`}>
            <span className={styles.navLinkText}>Module</span>
          </Link>
        </div>

        <ThemeSwitcher />
      </nav>
    </header>
  )
}
