"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./google-style-calendar.module.css";

export default function GoogleStyleCalendar({ moduleId, initialEvents = [] }) {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Update events when initialEvents changes
  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);

  // Get month details
  const getMonthDetails = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    // Total days in month
    const daysInMonth = lastDay.getDate();

    // Previous month's days to show
    const prevMonthDays = [];
    if (firstDayOfWeek > 0) {
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (
        let i = prevMonthLastDay - firstDayOfWeek + 1;
        i <= prevMonthLastDay;
        i++
      ) {
        prevMonthDays.push({
          date: new Date(year, month - 1, i),
          isCurrentMonth: false,
        });
      }
    }

    // Current month's days
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Next month's days to show
    const nextMonthDays = [];
    const totalDaysShown = prevMonthDays.length + currentMonthDays.length;
    const remainingDays = 42 - totalDaysShown; // 6 weeks * 7 days = 42

    for (let i = 1; i <= remainingDays; i++) {
      nextMonthDays.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Navigate to today
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get month and year for header
  const getMonthYearHeader = () => {
    return currentDate.toLocaleDateString("de-DE", {
      month: "long",
      year: "numeric",
    });
  };

  // Check if a date has events
  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  // Handle day click
  const handleDayClick = (day) => {
    setSelectedDate(day.date);
    setEventForm({
      title: "",
      date: day.date.toISOString().split("T")[0],
      description: "",
    });
    setSelectedEvent(null);
    setShowModal(true);
  };

  // Handle event click
  const handleEventClick = (e, event) => {
    e.stopPropagation(); // Prevent triggering the day click
    setSelectedEvent(event);
    setEventForm({
      title: event.title,
      date: new Date(event.date).toISOString().split("T")[0],
      description: event.description || "",
    });
    setShowModal(true);
  };

  // Handle input change in form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm((prev) => ({ ...prev, [name]: value }));
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setSelectedDate(null);
  };

  // Show notification
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Save event
  const saveEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = selectedEvent
        ? `/api/modules/${moduleId}/events/${selectedEvent._id}`
        : `/api/modules/${moduleId}/events`;

      const method = selectedEvent ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventForm),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(
          selectedEvent ? "Termin aktualisiert" : "Termin erstellt"
        );

        // Refresh the page to get updated events
        router.refresh();

        // Close the modal
        closeModal();
      } else {
        showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
      }
    } catch (error) {
      console.error("Error saving event:", error);
      showNotification("Ein Fehler ist aufgetreten", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ask for delete confirmation
  const confirmDeleteEvent = (e) => {
    e.stopPropagation();
    if (!selectedEvent) return;
    setConfirmDelete(selectedEvent._id);
  };

  // Delete event
  const deleteEvent = async () => {
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `/api/modules/${moduleId}/events/${confirmDelete}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        showNotification("Termin gelöscht");
        // Refresh the page to get updated events
        router.refresh();
        // Close the modal
        closeModal();
      } else {
        showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      showNotification("Ein Fehler ist aufgetreten", "error");
    } finally {
      setConfirmDelete(null);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  // Get the days of the week
  const weekDays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <div className={styles.calendarControls}>
          <button onClick={goToPrevMonth} className={styles.navButton}>
            &lt;
          </button>
          <h2 className={styles.calendarTitle}>{getMonthYearHeader()}</h2>
          <button onClick={goToNextMonth} className={styles.navButton}>
            &gt;
          </button>
        </div>
        <button onClick={goToToday} className={styles.todayButton}>
          Heute
        </button>
      </div>

      <div className={styles.calendarGrid}>
        {/* Week day headers */}
        {weekDays.map((day, index) => (
          <div key={index} className={styles.weekDayHeader}>
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {getMonthDetails().map((day, index) => {
          const dayEvents = getEventsForDate(day.date);
          const isToday =
            day.date.getDate() === new Date().getDate() &&
            day.date.getMonth() === new Date().getMonth() &&
            day.date.getFullYear() === new Date().getFullYear();

          return (
            <div
              key={index}
              className={`${styles.calendarDay} ${
                day.isCurrentMonth ? styles.currentMonth : styles.otherMonth
              } ${isToday ? styles.today : ""}`}
              onClick={() => handleDayClick(day)}
            >
              <div className={styles.dayNumber}>{day.date.getDate()}</div>

              {/* Event indicators */}
              <div className={styles.dayEvents}>
                {dayEvents.slice(0, 3).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={styles.eventIndicator}
                    onClick={(e) => handleEventClick(e, event)}
                  >
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 3 && (
                  <div className={styles.moreEvents}>
                    +{dayEvents.length - 3} mehr
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Event Modal */}
      {showModal && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{selectedEvent ? "Termin bearbeiten" : "Neuer Termin"}</h3>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
            </div>

            <form onSubmit={saveEvent} className={styles.eventForm}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Titel</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={eventForm.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Terminbezeichnung"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Datum</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={eventForm.date}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Beschreibung</label>
                <textarea
                  id="description"
                  name="description"
                  value={eventForm.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Beschreibung hinzufügen (optional)"
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div className={styles.formActions}>
                {selectedEvent && (
                  <button
                    type="button"
                    onClick={confirmDeleteEvent}
                    className={styles.deleteButton}
                    disabled={isSubmitting}
                  >
                    Löschen
                  </button>
                )}
                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Wird gespeichert..."
                    : selectedEvent
                    ? "Aktualisieren"
                    : "Speichern"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className={styles.modalBackdrop}>
          <div className={styles.confirmModal}>
            <h3>Termin löschen</h3>
            <p>Möchten Sie diesen Termin wirklich löschen?</p>
            <div className={styles.confirmActions}>
              <button className={styles.cancelButton} onClick={cancelDelete}>
                Abbrechen
              </button>
              <button className={styles.confirmButton} onClick={deleteEvent}>
                Löschen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div
          className={`${styles.notification} ${
            notification.type === "error"
              ? styles.errorNotification
              : styles.successNotification
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}
