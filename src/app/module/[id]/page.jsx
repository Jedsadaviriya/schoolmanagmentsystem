import { connectToDatabase } from "../../lib/mongodb"
import Link from "next/link"
import styles from "./page.module.css"
import { ObjectId } from "mongodb"

export default async function ModuleDetail({ params }) {
  const { db } = await connectToDatabase()
  let module

  try {
    module = await db.collection("modules").findOne({ _id: new ObjectId(params.id) })
  } catch (e) {
    return <div className={styles.container}>Modul nicht gefunden</div>
  }

  if (!module) {
    return <div className={styles.container}>Modul nicht gefunden</div>
  }

  // Fetch grades related to this module
  const grades = await db.collection("grades").find({ module_id: params.id }).toArray()

  // Calculate average grade for this module
  const calculateAverage = () => {
    if (grades.length === 0) return 0

    const sum = grades.reduce((total, grade) => {
      return total + Number.parseFloat(grade.grade)
    }, 0)

    return sum / grades.length
  }

  const averageGrade = calculateAverage()

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{module.title}</h1>
      <p className={styles.moduleNumber}>Modul-Nummer: {module.module_number}</p>

      <div className={styles.moduleCard}>
        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Modulinformationen</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Dozent</span>
              <span className={styles.infoValue}>{module.instructor || "Nicht angegeben"}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Semester</span>
              <span className={styles.infoValue}>{module.semester || "Nicht angegeben"}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>ECTS</span>
              <span className={styles.infoValue}>{module.credits || "Nicht angegeben"}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Status</span>
              <span className={styles.infoValue}>{module.status || "Aktiv"}</span>
            </div>
          </div>
        </div>  */}

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Beschreibung</h2>
          <p className={styles.sectionContent}>{module.description || "Keine Beschreibung verfügbar"}</p>
        </div>

        {grades.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Noten</h2>
            <div className={styles.gradesGrid}>
              {grades.map((grade, index) => (
                <div key={index} className={styles.gradeCard}>
                  <h3 className={styles.gradeTitle}>{grade.subject || "Prüfung"}</h3>
                  <div className={styles.gradeValue}>{Number.parseFloat(grade.grade).toFixed(1)}</div>
                  <div className={styles.gradeDate}>
                    Eingetragen am: {new Date(grade.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <div className={styles.sectionTitle}>Durchschnittsnote</div>
              <div className={styles.gradeValue} style={{ display: "inline-block" }}>
                {averageGrade.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link href="/module" className={`${styles.backButton} animated-button`}>
        Zurück zu Modulen
      </Link>
    </div>
  )
}
