"use client"

import { useState, useEffect } from "react"
import styles from "./page.module.css"

export default function Noten() {
  const [grades, setGrades] = useState([])
  const [subject, setSubject] = useState("")
  const [grade, setGrade] = useState("")
  const [notifications, setNotifications] = useState([])
  const [errors, setErrors] = useState({
    subject: "",
    grade: "",
  })

  // Fetch grades when the component mounts
  useEffect(() => {
    async function fetchGrades() {
      try {
        const res = await fetch("/api/grades")
        const data = await res.json()
        if (data.success) {
          setGrades(data.grades)
        } else {
          showNotification("error", "Fehler beim Laden", "Die Noten konnten nicht geladen werden.")
        }
      } catch (error) {
        console.error("Error fetching grades:", error)
        showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.")
      }
    }
    fetchGrades()
  }, [])

  // Function to show notifications
  const showNotification = (type, title, message) => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, type, title, message }])

    // Auto-remove notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id))
    }, 3000)
  }

  // Validate form inputs
  const validateInputs = () => {
    let isValid = true
    const newErrors = { subject: "", grade: "" }

    if (!subject.trim()) {
      newErrors.subject = "Bitte gib ein Fach ein"
      isValid = false
    }

    if (!grade) {
      newErrors.grade = "Bitte gib eine Note ein"
      isValid = false
    } else {
      const gradeValue = Number.parseFloat(grade)
      if (isNaN(gradeValue) || gradeValue < 1 || gradeValue > 6) {
        newErrors.grade = "Die Note muss zwischen 1 und 6 liegen"
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  // Handle form submission to save a new grade
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateInputs()) {
      return
    }

    try {
      const res = await fetch("/api/grades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, grade: Number.parseFloat(grade) }),
      })

      const data = await res.json()

      if (data.success) {
        setGrades([...grades, { subject, grade: Number.parseFloat(grade), createdAt: new Date().toISOString() }])
        setSubject("")
        setGrade("")
        showNotification("success", "Note gespeichert", `Die Note für ${subject} wurde erfolgreich gespeichert.`)
      } else {
        showNotification("error", "Fehler beim Speichern", data.error || "Die Note konnte nicht gespeichert werden.")
      }
    } catch (error) {
      console.error("Error saving grade:", error)
      showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.")
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Noten</h1>
      <p className={styles.pageDescription}>
        Hier kannst du deine Noten eintragen und deinen Notendurchschnitt berechnen.
      </p>

      {/* Notification system */}
      <div className={styles.notificationContainer}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styles.notification} ${notification.type === "success" ? styles.notificationSuccess : styles.notificationError}`}
          >
            <div className={styles.notificationIcon}>
              {notification.type === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
            </div>
            <div className={styles.notificationContent}>
              <div className={styles.notificationTitle}>{notification.title}</div>
              <div className={styles.notificationMessage}>{notification.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Form to add a new grade */}
      <div className={styles.formSection}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Fach:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${styles.input} ${errors.subject ? styles.error : ""}`}
              placeholder="z.B. Mathematik"
            />
            {errors.subject && (
              <div className={styles.fieldError}>
                <span className={styles.fieldErrorIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </span>
                {errors.subject}
              </div>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="grade" className={styles.label}>
              Note:
            </label>
            <input
              type="number"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className={`${styles.input} ${errors.grade ? styles.error : ""}`}
              min="1"
              max="6"
              step="0.1"
              placeholder="1.0 - 6.0"
            />
            {errors.grade && (
              <div className={styles.fieldError}>
                <span className={styles.fieldErrorIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </span>
                {errors.grade}
              </div>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Note speichern
          </button>
        </form>
      </div>

      {/* Display saved grades */}
      <div className={styles.gradesSection}>
        <h2 className={styles.sectionTitle}>Gespeicherte Noten</h2>
        {grades.length > 0 ? (
          <div className={styles.gradesList}>
            {grades.map((entry, index) => (
              <div key={index} className={styles.gradeItem}>
                <div>
                  <span className={styles.gradeSubject}>{entry.subject}</span>
                  <div className={styles.gradeDate}>
                    Eingetragen am: {new Date(entry.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <span className={styles.gradeValue}>{Number.parseFloat(entry.grade).toFixed(1)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyMessage}>Keine Noten vorhanden. Füge deine erste Note hinzu!</div>
        )}
      </div>
    </div>
  )
}
