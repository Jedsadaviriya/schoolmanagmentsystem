"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Modal from "./Modal";

export default function Modules() {
  const [modules, setModules] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch("/api/modules");
        const data = await response.json();
        if (data.success) setModules(data.modules);
      } catch (error) {
        console.error("Error fetching modules:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  const handleAddModule = async (formData) => {
    const response = await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setModules((prev) => [...prev, { ...formData, _id: result.id }]);
      setIsModalOpen(false);
    } else {
      alert(result.error || "Fehler beim Erstellen des Moduls");
    }
  };

  if (loading) return <div className={styles.container}>Laden...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Module</h1>
      <button
        className={`${styles.addButton} animated-button`}
        onClick={() => setIsModalOpen(true)}
      >
        Neues Modul hinzufügen
      </button>

      {modules.length > 0 ? (
        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <div key={module._id.toString()} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <h2 className={styles.moduleTitle}>{module.title}</h2>
                <p className={styles.moduleNumber}>
                  Modul ({module.module_number})
                </p>
              </div>
              <div className={styles.moduleBody}>
                <p className={styles.moduleDescription}>
                  {module.description || "Keine Beschreibung verfügbar"}
                </p>
                <Link
                  href={`/module/${module._id}`}
                  className={`${styles.viewButton} animated-button-secondary`}
                >
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddModule}
      />
    </div>
  );
}
