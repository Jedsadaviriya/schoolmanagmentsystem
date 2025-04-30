"use client"

import { useState, useEffect } from "react"
import styles from "./animated-progress.module.css"

export default function AnimatedProgress({ value, max = 100, color = "primary", height = 8, label, count }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setWidth((value / max) * 100)
    }, 100)

    return () => clearTimeout(timer)
  }, [value, max])

  return (
    <div className={styles.progressContainer}>
      {label && <div className={styles.progressLabel}>{label}</div>}
      <div className={styles.progressBar} style={{ height: `${height}px` }}>
        <div className={`${styles.progressFill} ${styles[color]}`} style={{ width: `${width}%` }}></div>
      </div>
      {count !== undefined && <div className={styles.progressCount}>{count}</div>}
    </div>
  )
}
