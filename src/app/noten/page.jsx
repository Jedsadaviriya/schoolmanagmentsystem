"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./page.module.css"
import LoadingAnimation from "@/components/loading-animation"
import AnimatedNotification from "@/components/animated-notification"
import ConfirmationDialog from "@/components/confirmation-dialog"

export default function Noten() {
  const [grades, setGrades] = useState([])
  const [subject, setSubject] = useState("")
  const [grade, setGrade] = useState("")
  const [errors, setErrors] = useState({
    subject: "",
    grade: "",
  })
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    show: false,
    gradeId: null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)
  const [notifications, setNotifications] = useState([])

  const statsRef = useRef(null)
  const subjectAveragesRef = useRef(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              setAnimateStats(true)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    if (subjectAveragesRef.current) {
      observer.observe(subjectAveragesRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
      if (subjectAveragesRef.current) {
        observer.unobserve(subjectAveragesRef.current)
      }
    }
  }, [])

  // Function to show notifications
  const showNotification = (type, title, message) => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, type, title, message }])
    return id
  }

  // Function to remove notifications
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  // Fetch grades when the component mounts
  useEffect(() => {
    async function fetchGrades() {
      try {
        setIsLoading(true)
        const res = await fetch("/api/grades")

        // Check if the response is JSON
        const contentType = res.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Verbindungsfehler: Ungültige Serverantwort")
        }

        const data = await res.json()
        if (data.success) {
          setGrades(data.grades)
        } else {
          showNotification("error", "Fehler beim Laden", data.error || "Die Noten konnten nicht geladen werden.")
        }
      } catch (error) {
        console.error("Error fetching grades:", error)
        showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.")
      } finally {
        setIsLoading(false)
        setTimeout(() => {
          setPageLoaded(true)
        }, 300)
      }
    }
    fetchGrades()
  }, [])

  // Calculate grade average
  const calculateAverage = () => {
    if (grades.length === 0) return 0

    const sum = grades.reduce((total, grade) => {
      const gradeValue = Number.parseFloat(grade.grade)
      return isNaN(gradeValue) ? total : total + gradeValue
    }, 0)

    return sum / grades.length
  }

  // Calculate average per subject
  const calculateSubjectAverages = () => {
    const subjects = {}

    grades.forEach((grade) => {
      const subjectName = grade.subject
      const gradeValue = Number.parseFloat(grade.grade)

      if (!subjects[subjectName]) {
        subjects[subjectName] = {
          total: gradeValue,
          count: 1,
        }
      } else {
        subjects[subjectName].total += gradeValue
        subjects[subjectName].count += 1
      }
    })

    const averages = Object.keys(subjects).map((subject) => ({
      subject,
      average: subjects[subject].total / subjects[subject].count,
      count: subjects[subject].count,
    }))

    return averages
  }

  // Get grade distribution
  const getGradeDistribution = () => {
    const distribution = {
      excellent: 0, // 5.5 - 6.0
      good: 0, // 4.5 - 5.4
      satisfactory: 0, // 4.0 - 4.4
      insufficient: 0, // < 4.0
    }

    grades.forEach((grade) => {
      const value = Number.parseFloat(grade.grade)
      if (value >= 5.5) distribution.excellent++
      else if (value >= 4.5) distribution.good++
      else if (value >= 4.0) distribution.satisfactory++
      else distribution.insufficient++
    })

    return distribution
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

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/grades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, grade: Number.parseFloat(grade) }),
      })

      const data = await res.json()

      if (data.success) {
        const newGrade = {
          _id: data.id,
          subject,
          grade: Number.parseFloat(grade),
          createdAt: new Date().toISOString(),
        }
        setGrades((prevGrades) => [...prevGrades, newGrade])
        setSubject("")
        setGrade("")
        showNotification("success", "Note gespeichert", `Die Note für ${subject} wurde erfolgreich gespeichert.`)
      } else {
        showNotification("error", "Fehler beim Speichern", data.error || "Die Note konnte nicht gespeichert werden.")
      }
    } catch (error) {
      console.error("Error saving grade:", error)
      showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle grade deletion
  const handleDeleteGrade = async (id) => {
    setIsSubmitting(true)
    try {
      const res = await fetch(`/api/grades/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Verbindungsfehler: Server antwortet nicht")
      }

      const data = await res.json()

      if (data.success) {
        // Update the grades state by filtering out the deleted grade
        setGrades((prevGrades) => prevGrades.filter((grade) => grade._id !== id))
        showNotification("success", "Note gelöscht", "Die Note wurde erfolgreich gelöscht.")
      } else {
        showNotification("error", "Fehler beim Löschen", data.error || "Die Note konnte nicht gelöscht werden.")
      }
    } catch (error) {
      console.error("Error deleting grade:", error)
      showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.")
    } finally {
      setIsSubmitting(false)
      setDeleteConfirmation({ show: false, gradeId: null })
    }
  }

  // Show delete confirmation modal
  const confirmDelete = (id) => {
    setDeleteConfirmation({ show: true, gradeId: id })
  }

  // Calculate the average grade
  const average = calculateAverage()
  const distribution = getGradeDistribution()
  const subjectAverages = calculateSubjectAverages()

  return (
    <>
      {isLoading && <LoadingAnimation />}

      {/* Notifications */}
      <div className={styles.notificationContainer}>
        {notifications.map((notification) => (
          <AnimatedNotification
            key={notification.id}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>

      {/* Use our confirmation dialog component */}
      <ConfirmationDialog
        isOpen={deleteConfirmation.show}
        onClose={() => setDeleteConfirmation({ show: false, gradeId: null })}
        onConfirm={() => handleDeleteGrade(deleteConfirmation.gradeId)}
        title="Note löschen"
        message="Bist du sicher, dass du diese Note löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden."
        confirmText="Löschen"
        cancelText="Abbrechen"
        isLoading={isSubmitting}
      />

      <div className={`${styles.container} ${pageLoaded ? styles.loaded : ""}`}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Noten</h1>
          <p className={styles.pageDescription}>
            Hier kannst du deine Noten eintragen und deinen Notendurchschnitt berechnen.
          </p>
        </div>

        {/* Grade Statistics */}
        <div className={`${styles.statisticsSection} ${animateStats ? styles.animateStats : ""}`} ref={statsRef}>
          <h2 className={styles.sectionTitle}>Notenstatistik</h2>
          <div className={styles.statisticsGrid}>
            <div className={`${styles.statisticsCard} ${styles.averageCard}`}>
              <div className={styles.statisticsHeader}>
                <div className={styles.statisticsIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="M7 21h10"></path>
                    <path d="M12 3v18"></path>
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                  </svg>
                </div>
                <div className={styles.statisticsTitle}>Notendurchschnitt</div>
              </div>
              <div className={`${styles.averageValue} ${styles.countUp}`} data-grade={getGradeCategory(average)}>
                {average.toFixed(2)}
              </div>
              <div className={styles.statisticsFooter}>
                Basierend auf {grades.length} {grades.length === 1 ? "Note" : "Noten"}
              </div>
            </div>

            <div className={`${styles.statisticsCard} ${styles.distributionCard}`}>
              <div className={styles.statisticsHeader}>
                <div className={styles.statisticsIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <div className={styles.statisticsTitle}>Notenverteilung</div>
              </div>
              <div className={styles.distributionGrid}>
                <div className={styles.distributionItem}>
                  <div className={styles.distributionLabel}>Sehr gut</div>
                  <div className={styles.distributionBar}>
                    <div
                      className={`${styles.distributionBarFill} ${styles.excellent} ${animateStats ? styles.animate : ""}`}
                      style={{ width: grades.length ? `${(distribution.excellent / grades.length) * 100}%` : "0%" }}
                    ></div>
                  </div>
                  <div className={styles.distributionCount}>{distribution.excellent}</div>
                </div>
                <div className={styles.distributionItem}>
                  <div className={styles.distributionLabel}>Gut</div>
                  <div className={styles.distributionBar}>
                    <div
                      className={`${styles.distributionBarFill} ${styles.good} ${animateStats ? styles.animate : ""}`}
                      style={{ width: grades.length ? `${(distribution.good / grades.length) * 100}%` : "0%" }}
                    ></div>
                  </div>
                  <div className={styles.distributionCount}>{distribution.good}</div>
                </div>
                <div className={styles.distributionItem}>
                  <div className={styles.distributionLabel}>Genügend</div>
                  <div className={styles.distributionBar}>
                    <div
                      className={`${styles.distributionBarFill} ${styles.satisfactory} ${animateStats ? styles.animate : ""}`}
                      style={{ width: grades.length ? `${(distribution.satisfactory / grades.length) * 100}%` : "0%" }}
                    ></div>
                  </div>
                  <div className={styles.distributionCount}>{distribution.satisfactory}</div>
                </div>
                <div className={styles.distributionItem}>
                  <div className={styles.distributionLabel}>Ungenügend</div>
                  <div className={styles.distributionBar}>
                    <div
                      className={`${styles.distributionBarFill} ${styles.insufficient} ${animateStats ? styles.animate : ""}`}
                      style={{ width: grades.length ? `${(distribution.insufficient / grades.length) * 100}%` : "0%" }}
                    ></div>
                  </div>
                  <div className={styles.distributionCount}>{distribution.insufficient}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Averages */}
        <div className={`${styles.subjectAverages} ${pageLoaded ? styles.fadeIn : ""}`} ref={subjectAveragesRef}>
          <h2 className={styles.sectionTitle}>Durchschnitt pro Fach</h2>
          {subjectAverages.length > 0 ? (
            <div className={`${styles.subjectGrid} stagger-animation animate`}>
              {subjectAverages.map((item, index) => (
                <div key={index} className={`${styles.subjectCard} card-hover`}>
                  <div className={styles.subjectName}>{item.subject}</div>
                  <div className={styles.subjectAverage} style={{ color: getGradeColor(item.average) }}>
                    {item.average.toFixed(2)}
                  </div>
                  <div className={styles.subjectCount}>
                    {item.count} {item.count === 1 ? "Note" : "Noten"}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${styles.emptyMessage} ${styles.emptyAnimation}`}>
              <div className={styles.emptyIcon}>📊</div>
              <p>Keine Fächerdurchschnitte verfügbar. Füge Noten hinzu, um Durchschnitte zu sehen.</p>
            </div>
          )}
        </div>

        {/* Form to add a new grade */}
        <div className={`${styles.formSection} ${pageLoaded ? styles.slideIn : ""}`}>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
            <button type="submit" className={`${styles.submitButton} animated-button`} disabled={isSubmitting}>
              {isSubmitting ? (
                <span className={styles.buttonLoader}>
                  <span className={styles.loaderDot}></span>
                  <span className={styles.loaderDot}></span>
                  <span className={styles.loaderDot}></span>
                </span>
              ) : (
                "Note speichern"
              )}
            </button>
          </form>
        </div>

        {/* Display saved grades */}
        <div className={`${styles.gradesSection} ${pageLoaded ? styles.fadeIn : ""}`}>
          <h2 className={styles.sectionTitle}>Gespeicherte Noten</h2>
          {grades.length > 0 ? (
            <div className={`${styles.gradesList} stagger-animation animate`}>
              {grades.map((entry) => (
                <div key={entry._id} className={`${styles.gradeItem} card-hover`}>
                  <div className={styles.gradeInfo}>
                    <span className={styles.gradeSubject}>{entry.subject}</span>
                    <div className={styles.gradeDate}>
                      Eingetragen am: {new Date(entry.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <span className={`${styles.gradeValue} ${getGradeValueClass(Number.parseFloat(entry.grade))}`}>
                    {Number.parseFloat(entry.grade).toFixed(1)}
                  </span>
                  <div className={styles.gradeActions}>
                    <button
                      className={styles.deleteButton}
                      onClick={() => confirmDelete(entry._id)}
                      aria-label="Note löschen"
                      disabled={isSubmitting}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${styles.emptyMessage} ${styles.emptyAnimation}`}>
              <div className={styles.emptyIcon}>📝</div>
              <p>Keine Noten vorhanden. Füge deine erste Note hinzu!</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Helper function to determine grade category for styling
function getGradeCategory(grade) {
  if (grade >= 5.5) return "excellent"
  if (grade >= 4.5) return "good"
  if (grade >= 4.0) return "satisfactory"
  return "insufficient"
}

// Helper function to get class name for grade value
function getGradeValueClass(grade) {
  if (grade >= 5.5) return styles.gradeExcellent
  if (grade >= 4.5) return styles.gradeGood
  if (grade >= 4.0) return styles.gradeSatisfactory
  return styles.gradeInsufficient
}

// Helper function to get color for grade value
function getGradeColor(grade) {
  if (grade >= 5.5) return "var(--color-success-600)"
  if (grade >= 4.5) return "var(--color-secondary-600)"
  if (grade >= 4.0) return "var(--color-warning-600)"
  return "var(--color-danger-600)"
}
