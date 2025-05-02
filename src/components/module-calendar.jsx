"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./module-calendar.module.css";

export default function ModuleCalendar({ moduleId, events = [] }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Group events by month and year
  const groupedEvents = events.reduce((acc, event) => {
    const date = new Date(event.date);
    const monthYear = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}`;

    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }

    acc[monthYear].push(event);
    return acc;
  }, {});

  // Sort grouped events by date
  Object.keys(groupedEvents).forEach((monthYear) => {
    groupedEvents[monthYear].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  });

  // Sort month-year groups chronologically
  const sortedMonthYears = Object.keys(groupedEvents).sort();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openCreateModal = () => {
    setIsEditing(false);
    setFormData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
    });
    setShowModal(true);
  };

  const openEditModal = (event) => {
    setIsEditing(true);
    setCurrentEvent(event);
    setFormData({
      title: event.title,
      date: new Date(event.date).toISOString().split("T")[0],
      description: event.description || "",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentEvent(null);
  };

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/modules/${moduleId}/events`, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: isEditing ? currentEvent._id : undefined,
          event: formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(isEditing ? "Termin aktualisiert" : "Termin erstellt");
        closeModal();
        router.refresh();
      } else {
        showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("Ein Fehler ist aufgetreten", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (eventId) => {
    if (!confirm("Möchten Sie diesen Termin wirklich löschen?")) {
      return;
    }

    try {
      const response = await fetch(
        `/api/modules/${moduleId}/events/${eventId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        showNotification("Termin gelöscht");
        router.refresh();
      } else {
        showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("Ein Fehler ist aufgetreten", "error");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getMonthName = (monthYear) => {
    const [year, month] = monthYear.split("-");
    const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1, 1);
    return date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <h2 className={styles.calendarTitle}>Terminkalender</h2>
        <button
          onClick={openCreateModal}
          className={styles.addButton}
          aria-label="Neuen Termin hinzufügen"
        >
          + Neuer Termin
        </button>
      </div>

      {sortedMonthYears.length > 0 ? (
        sortedMonthYears.map((monthYear) => (
          <div key={monthYear} className={styles.monthSection}>
            <h3 className={styles.monthTitle}>{getMonthName(monthYear)}</h3>
            <div className={styles.eventsList}>
              {groupedEvents[monthYear].map((event, index) => (
                <div key={event._id || index} className={styles.eventCard}>
                  <div className={styles.eventHeader}>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                    <div className={styles.eventActions}>
                      <button
                        onClick={() => openEditModal(event)}
                        className={styles.editButton}
                        aria-label="Termin bearbeiten"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className={styles.deleteButton}
                        aria-label="Termin löschen"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className={styles.eventDate}>
                    {formatDate(event.date)}
                  </div>
                  {event.description && (
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noEvents}>
          <p>Keine Termine vorhanden</p>
        </div>
      )}

      {showModal && (
        <div className={styles.modalBackdrop}>
          <div
            className={styles.modal}
            role="dialog"
            aria-labelledby="modalTitle"
          >
            <div className={styles.modalHeader}>
              <h3 id="modalTitle" className={styles.modalTitle}>
                {isEditing ? "Termin bearbeiten" : "Neuer Termin"}
              </h3>
              <button
                onClick={closeModal}
                className={styles.closeButton}
                aria-label="Schließen"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor="title" className={styles.formLabel}>
                  Titel
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.formLabel}>
                  Datum
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.formLabel}>
                  Beschreibung
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  rows="3"
                ></textarea>
              </div>
              <div className={styles.formActions}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.cancelButton}
                  disabled={isSubmitting}
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Wird gespeichert..."
                    : isEditing
                    ? "Aktualisieren"
                    : "Erstellen"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}
