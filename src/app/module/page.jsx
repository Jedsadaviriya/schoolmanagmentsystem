import { connectToDatabase } from "../lib/mongodb"
import Link from "next/link"
import styles from "./page.module.css"

export default async function Modules() {
  // Fetch modules from MongoDB
  const { db } = await connectToDatabase()
  const modules = await db.collection("modules").find({}).toArray()

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Module</h1>

      {modules.length > 0 ? (
        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <div key={module._id.toString()} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <h2 className={styles.moduleTitle}>{module.title}</h2>
                <p className={styles.moduleNumber}>Modul ({module.module_number})</p>
              </div>
              <div className={styles.moduleBody}>
                <p className={styles.moduleDescription}>{module.description || "Keine Beschreibung verfügbar"}</p>
                <Link href={`/module/${module._id}`} className={styles.viewButton}>
                  Details anzeigen
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>📚</div>
          <p className={styles.emptyStateText}>Keine Module gefunden</p>
        </div>
      )}
    </div>
  )
}
