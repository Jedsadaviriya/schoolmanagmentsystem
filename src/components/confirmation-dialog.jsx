"use client"

import { useEffect, useRef } from "react"
import styles from "./confirmation-dialog.module.css"

export default function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Bestätigen",
  cancelText = "Abbrechen",
  isLoading = false,
}) {
  const dialogRef = useRef(null)

  // Update the useEffect hook to handle positioning better
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose()
      }
    }

    // Handle escape key to close
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      // Add a class to the body but don't prevent scrolling
      document.body.classList.add("dialog-open")
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      // Remove the class when dialog is closed
      document.body.classList.remove("dialog-open")
    }
  }, [isOpen, onClose])

  // Update the return statement to include a wrapper for better positioning
  if (!isOpen) return null

  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <div className={styles.dialog} ref={dialogRef}>
          <h2 id="dialog-title" className={styles.title}>
            {title}
          </h2>
          <div className={styles.content}>{message}</div>
          <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={onClose} disabled={isLoading} aria-label={cancelText}>
              {cancelText}
            </button>
            <button className={styles.confirmButton} onClick={onConfirm} disabled={isLoading} aria-label={confirmText}>
              {isLoading ? (
                <span className={styles.loadingIndicator}>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                </span>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
