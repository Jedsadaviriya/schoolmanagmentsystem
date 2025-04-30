"use client"

import { useState, useEffect } from "react"
import styles from "./loading-animation.module.css"

export default function LoadingAnimation({ isLoading = true }) {
  const [dots, setDots] = useState(1)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prev) => (prev < 3 ? prev + 1 : 1))
      }, 400)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading{".".repeat(dots)}</p>
      </div>
    </div>
  )
}
