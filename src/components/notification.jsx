"use client"

import { useState, useEffect } from "react"
import styles from "./notification.module.css"

export default function Notification({ id, type, title, message, onRemove }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        onRemove(id)
      }, 300) // Animation duration
    }, 4700) // Show for 4.7 seconds before starting exit animation

    return () => clearTimeout(timeout)
  }, [id, onRemove])

  return (
    <div
      className={`${styles.notification} ${
        type === "success" ? styles.notificationSuccess : styles.notificationError
      } ${isExiting ? styles.exit : ""}`}
    >
      <div className={styles.notificationIcon}>
        {type === "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.notificationIconSvg}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.notificationIconSvg}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )}
      </div>
      <div className={styles.notificationContent}>
        <div className={styles.notificationTitle}>{title}</div>
        <div className={styles.notificationMessage}>{message}</div>
      </div>
      <div className={styles.notificationProgressBar}></div>
    </div>
  )
}
