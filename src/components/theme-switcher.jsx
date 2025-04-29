"use client"

import { useTheme } from "@/components/theme-provider"
import styles from "./theme-switcher.module.css"
import { useState, useEffect } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // After mounting, we can safely show the theme switcher
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme) => {
    if (theme === newTheme) return

    setIsAnimating(true)
    setTimeout(() => {
      setTheme(newTheme)
      setTimeout(() => {
        setIsAnimating(false)
      }, 600)
    }, 300)
  }

  if (!mounted) return null

  return (
    <div className={`${styles.switcherContainer} ${isAnimating ? styles.animating : ""}`}>
      <button
        onClick={() => handleThemeChange("light")}
        className={`${styles.themeButton} ${theme === "light" ? styles.activeLight : ""}`}
        aria-label="Light mode"
        disabled={isAnimating}
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
        onClick={() => handleThemeChange("dark")}
        className={`${styles.themeButton} ${theme === "dark" ? styles.activeDark : ""}`}
        aria-label="Dark mode"
        disabled={isAnimating}
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
