"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./animated-counter.module.css"

export default function AnimatedCounter({ value, duration = 1000, decimals = 2 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const startTimeRef = useRef(null)
  const frameRef = useRef(null)
  const startValueRef = useRef(0)

  useEffect(() => {
    startValueRef.current = displayValue
    startTimeRef.current = null

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)

      const nextValue = startValueRef.current + progress * (value - startValueRef.current)
      setDisplayValue(nextValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [value, duration])

  return <span className={styles.counter}>{displayValue.toFixed(decimals)}</span>
}
