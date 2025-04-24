"use client"

import { useTheme } from "@/components/theme-provider"
import styles from "./theme-switcher.module.css"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.switcherContainer}>
      <button
        onClick={() => setTheme("light")}
        className={`${styles.themeButton} ${theme === "light" ? styles.activeLight : ""}`}
        aria-label="Light mode"
      >
        {/* Sun Icon als SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`${styles.themeButton} ${theme === "dark" ? styles.activeDark : ""}`}
        aria-label="Dark mode"
      >
        {/* Moon Icon als SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>
    </div>
  )
}
