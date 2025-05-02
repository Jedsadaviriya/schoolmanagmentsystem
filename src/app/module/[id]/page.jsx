import { connectToDatabase } from "../../lib/mongodb";
import Link from "next/link";
import styles from "./page.module.css";
import { ObjectId } from "mongodb";
import GoogleStyleCalendar from "../../../components/google-style-calendar";

export default async function ModuleDetail({ params }) {
  const { db } = await connectToDatabase();
  let module;

  try {
    module = await db
      .collection("modules")
      .findOne({ _id: new ObjectId(params.id) });
  } catch (e) {
    return <div className={styles.container}>Modul nicht gefunden</div>;
  }

  if (!module) {
    return <div className={styles.container}>Modul nicht gefunden</div>;
  }

  // Fetch grades related to this module
  const grades = await db
    .collection("grades")
    .find({ module_id: params.id })
    .toArray();

  // Calculate average grade for this module
  const calculateAverage = () => {
    if (grades.length === 0) return 0;

    const sum = grades.reduce((total, grade) => {
      return total + Number.parseFloat(grade.grade);
    }, 0);

    return sum / grades.length;
  };

  const averageGrade = calculateAverage();

  // Ensure events array exists
  const events = module.events || [];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{module.title}</h1>
      <p className={styles.moduleNumber}>
        Modul-Nummer: {module.module_number}
      </p>

      <div className={styles.moduleCard}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Beschreibung</h2>
          <p className={styles.sectionContent}>
            {module.description || "Keine Beschreibung verfügbar"}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Terminkalender</h2>
          <GoogleStyleCalendar moduleId={params.id} initialEvents={events} />
        </div>

        {grades.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Noten</h2>
            <div className={styles.gradesGrid}>
              {grades.map((grade, index) => (
                <div key={index} className={styles.gradeCard}>
                  <h3 className={styles.gradeTitle}>
                    {grade.subject || "Prüfung"}
                  </h3>
                  <div className={styles.gradeValue}>
                    {Number.parseFloat(grade.grade).toFixed(1)}
                  </div>
                  <div className={styles.gradeDate}>
                    Eingetragen am:{" "}
                    {new Date(grade.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <div className={styles.sectionTitle}>Durchschnittsnote</div>
              <div
                className={styles.gradeValue}
                style={{ display: "inline-block" }}
              >
                {averageGrade.toFixed(2)}
              </div>
            </div>
          </div>
        )}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Termine</h2>
          {module.events && module.events.length > 0 ? (
            <div className={styles.section}>
              {module.events.map((event, index) => (
                <div className={styles.moduleCard}>
                  <div key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{event.title}</h2>
                    <p className={styles.sectionContent}>Date: {event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                    <br />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Keine Termine</p>
          )}
        </div>
      </div>

      <Link href="/module" className={`${styles.backButton} animated-button`}>
        Zurück zu Modulen
      </Link>
    </div>
  );
}
