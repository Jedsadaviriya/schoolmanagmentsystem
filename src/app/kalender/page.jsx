"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import LoadingAnimation from "@/components/loading-animation";
import Notification from "@/components/notification";

export default function Kalender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    show: false,
    eventId: null,
  });

  // Form state
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    type: "other",
  });

  // Form errors
  const [formErrors, setFormErrors] = useState({
    title: "",
    date: "",
  });

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showEventModal || showEventDetailsModal || deleteConfirmation.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showEventModal, showEventDetailsModal, deleteConfirmation.show]);

  // Fetch events when the component mounts or currentDate changes
  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  // Set page as loaded after initial loading
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
  }, []);

  // Handle modal close on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        if (showEventModal) setShowEventModal(false);
        if (showEventDetailsModal) setShowEventDetailsModal(false);
        if (deleteConfirmation.show)
          setDeleteConfirmation({ show: false, eventId: null });
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [showEventModal, showEventDetailsModal, deleteConfirmation.show]);

  // Fetch events from the API
  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      // Get the first and last day of the current month
      const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );

      // Format dates for the API
      const startDate = firstDay.toISOString().split("T")[0];
      const endDate = lastDay.toISOString().split("T")[0];

      const res = await fetch(
        `/api/events?startDate=${startDate}&endDate=${endDate}`
      );

      if (!res.ok) {
        throw new Error("Fehler beim Laden der Termine");
      }

      const data = await res.json();
      if (data.success) {
        setEvents(data.events);
      } else {
        showNotification(
          "error",
          "Fehler beim Laden",
          data.error || "Die Termine konnten nicht geladen werden."
        );
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      showNotification(
        "error",
        "Verbindungsfehler",
        "Es konnte keine Verbindung zum Server hergestellt werden."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Function to show notifications
  const showNotification = (type, title, message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, title, message }]);
  };

  // Handle notification removal
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
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

  // Format date as YYYY-MM-DD
  const formatDateForInput = (date) => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  // Open modal to add a new event
  const openAddEventModal = (date) => {
    setSelectedDate(date);
    setSelectedEvent(null);
    setEventForm({
      title: "",
      description: "",
      date: formatDateForInput(date),
      startTime: "",
      endTime: "",
      type: "other",
    });
    setFormErrors({
      title: "",
      date: "",
    });
    setShowEventModal(true);
  };

  // Open modal to edit an existing event
  const openEditEventModal = (event) => {
    setSelectedEvent(event);
    setEventForm({
      title: event.title,
      description: event.description || "",
      date: formatDateForInput(new Date(event.date)),
      startTime: event.startTime || "",
      endTime: event.endTime || "",
      type: event.type || "other",
    });
    setFormErrors({
      title: "",
      date: "",
    });
    setShowEventModal(true);
  };

  // Open modal to view event details
  const openEventDetailsModal = (event) => {
    setSelectedEvent(event);
    setShowEventDetailsModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field being edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: "", date: "" };

    if (!eventForm.title.trim()) {
      newErrors.title = "Bitte gib einen Titel ein";
      isValid = false;
    }

    if (!eventForm.date) {
      newErrors.date = "Bitte wähle ein Datum";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const method = selectedEvent ? "PUT" : "POST";
      const url = selectedEvent
        ? `/api/events/${selectedEvent._id}`
        : "/api/events";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventForm),
      });

      if (!res.ok) {
        throw new Error("Fehler beim Speichern des Termins");
      }

      const data = await res.json();

      if (data.success) {
        showNotification(
          "success",
          selectedEvent ? "Termin aktualisiert" : "Termin erstellt",
          `Der Termin "${eventForm.title}" wurde erfolgreich ${
            selectedEvent ? "aktualisiert" : "erstellt"
          }.`
        );
        setShowEventModal(false);
        fetchEvents();
      } else {
        showNotification(
          "error",
          "Fehler beim Speichern",
          data.error || "Der Termin konnte nicht gespeichert werden."
        );
      }
    } catch (error) {
      console.error("Error saving event:", error);
      showNotification(
        "error",
        "Verbindungsfehler",
        "Es konnte keine Verbindung zum Server hergestellt werden."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle event deletion
  const handleDeleteEvent = async () => {
    if (!deleteConfirmation.eventId) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/events/${deleteConfirmation.eventId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Fehler beim Löschen des Termins");
      }

      const data = await res.json();

      if (data.success) {
        showNotification(
          "success",
          "Termin gelöscht",
          "Der Termin wurde erfolgreich gelöscht."
        );
        setDeleteConfirmation({ show: false, eventId: null });
        setShowEventDetailsModal(false);
        fetchEvents();
      } else {
        showNotification(
          "error",
          "Fehler beim Löschen",
          data.error || "Der Termin konnte nicht gelöscht werden."
        );
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      showNotification(
        "error",
        "Verbindungsfehler",
        "Es konnte keine Verbindung zum Server hergestellt werden."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirm event deletion
  const confirmDeleteEvent = (eventId) => {
    setDeleteConfirmation({ show: true, eventId });
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dateString = formatDateForInput(date);

    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return formatDateForInput(eventDate) === dateString;
    });
  };

  // Get event type class
  const getEventTypeClass = (type) => {
    switch (type) {
      case "exam":
        return styles.eventExam;
      case "assignment":
        return styles.eventAssignment;
      case "meeting":
        return styles.eventMeeting;
      default:
        return styles.eventOther;
    }
  };

  // Get event type label
  const getEventTypeLabel = (type) => {
    switch (type) {
      case "exam":
        return "Prüfung";
      case "assignment":
        return "Aufgabe";
      case "meeting":
        return "Meeting";
      default:
        return "Sonstiges";
    }
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Adjust for Monday as first day of week (0 = Monday, 6 = Sunday)
    const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(<div key={`empty-${i}`} className={styles.calendarDay}></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = isSameDay(date, new Date());
      const dayEvents = getEventsForDay(day);

      days.push(
        <div
          key={`day-${day}`}
          className={`${styles.calendarDay} ${isToday ? styles.today : ""}`}
          onClick={() => openAddEventModal(date)}
        >
          <div className={styles.dayNumber}>{day}</div>
          <div className={styles.dayEvents}>
            {dayEvents.slice(0, 3).map((event) => (
              <div
                key={event._id}
                className={`${styles.eventIndicator} ${getEventTypeClass(
                  event.type
                )}`}
                onClick={(e) => {
                  e.stopPropagation();
                  openEventDetailsModal(event);
                }}
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
    }

    return days;
  };

  // Check if two dates are the same day
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Get month name
  const getMonthName = (month) => {
    const monthNames = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    return monthNames[month];
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}

      {/* Notification container */}
      <div className={styles.notificationContainer}>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onRemove={removeNotification}
          />
        ))}
      </div>

      {/* Add/Edit Event Modal */}
      {showEventModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowEventModal(false);
            }
          }}
        >
          <div className={`${styles.modal} ${styles.modalAnimation}`}>
            <h3 className={styles.modalTitle}>
              {selectedEvent ? "Termin bearbeiten" : "Neuen Termin erstellen"}
            </h3>
            <form onSubmit={handleSubmit} className={styles.eventForm}>
              <div className={styles.formGroup}>
                <label htmlFor="title" className={styles.label}>
                  Titel:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={eventForm.title}
                  onChange={handleInputChange}
                  className={`${styles.input} ${
                    formErrors.title ? styles.error : ""
                  }`}
                  placeholder="Terminbezeichnung"
                  disabled={isSubmitting}
                />
                {formErrors.title && (
                  <div className={styles.fieldError}>{formErrors.title}</div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>
                  Datum:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={eventForm.date}
                  onChange={handleInputChange}
                  className={`${styles.input} ${
                    formErrors.date ? styles.error : ""
                  }`}
                  disabled={isSubmitting}
                />
                {formErrors.date && (
                  <div className={styles.fieldError}>{formErrors.date}</div>
                )}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="startTime" className={styles.label}>
                    Startzeit:
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={eventForm.startTime}
                    onChange={handleInputChange}
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="endTime" className={styles.label}>
                    Endzeit:
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={eventForm.endTime}
                    onChange={handleInputChange}
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="type" className={styles.label}>
                  Termintyp:
                </label>
                <select
                  id="type"
                  name="type"
                  value={eventForm.type}
                  onChange={handleInputChange}
                  className={styles.input}
                  disabled={isSubmitting}
                >
                  <option value="other">Sonstiges</option>
                  <option value="exam">Prüfung</option>
                  <option value="assignment">Aufgabe</option>
                  <option value="meeting">Meeting</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>
                  Beschreibung:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={eventForm.description}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Beschreibung (optional)"
                  rows="3"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={`${styles.cancelButton} animated-button`}
                  onClick={() => setShowEventModal(false)}
                  disabled={isSubmitting}
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className={`${styles.submitButton} animated-button`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className={styles.buttonLoader}>
                      <span className={styles.loaderDot}></span>
                      <span className={styles.loaderDot}></span>
                      <span className={styles.loaderDot}></span>
                    </span>
                  ) : selectedEvent ? (
                    "Aktualisieren"
                  ) : (
                    "Erstellen"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {showEventDetailsModal && selectedEvent && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowEventDetailsModal(false);
            }
          }}
        >
          <div className={`${styles.modal} ${styles.modalAnimation}`}>
            <div
              className={`${styles.eventTypeTag} ${getEventTypeClass(
                selectedEvent.type
              )}`}
            >
              {getEventTypeLabel(selectedEvent.type)}
            </div>
            <h3 className={styles.eventDetailsTitle}>{selectedEvent.title}</h3>
            <div className={styles.eventDetailsDate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.eventDetailsIcon}
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {formatDate(selectedEvent.date)}
            </div>

            {(selectedEvent.startTime || selectedEvent.endTime) && (
              <div className={styles.eventDetailsTime}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.eventDetailsIcon}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {selectedEvent.startTime && selectedEvent.endTime
                  ? `${selectedEvent.startTime} - ${selectedEvent.endTime} Uhr`
                  : selectedEvent.startTime
                  ? `Ab ${selectedEvent.startTime} Uhr`
                  : `Bis ${selectedEvent.endTime} Uhr`}
              </div>
            )}

            {selectedEvent.description && (
              <div className={styles.eventDetailsDescription}>
                <h4 className={styles.eventDetailsSectionTitle}>
                  Beschreibung:
                </h4>
                <p>{selectedEvent.description}</p>
              </div>
            )}

            <div className={styles.eventDetailsCreated}>
              Erstellt am:{" "}
              {new Date(selectedEvent.createdAt).toLocaleDateString()}
            </div>

            <div className={styles.modalActions}>
              <button
                className={`${styles.deleteButton} animated-button`}
                onClick={() => confirmDeleteEvent(selectedEvent._id)}
                disabled={isSubmitting}
              >
                Löschen
              </button>
              <button
                className={`${styles.editButton} animated-button`}
                onClick={() => {
                  setShowEventDetailsModal(false);
                  openEditEventModal(selectedEvent);
                }}
                disabled={isSubmitting}
              >
                Bearbeiten
              </button>
              <button
                className={`${styles.closeButton} animated-button`}
                onClick={() => setShowEventDetailsModal(false)}
                disabled={isSubmitting}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmation.show && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setDeleteConfirmation({ show: false, eventId: null });
            }
          }}
        >
          <div className={`${styles.modal} ${styles.modalAnimation}`}>
            <h3 className={styles.modalTitle}>Termin löschen</h3>
            <p className={styles.modalContent}>
              Bist du sicher, dass du diesen Termin löschen möchtest? Diese
              Aktion kann nicht rückgängig gemacht werden.
            </p>
            <div className={styles.modalActions}>
              <button
                className={`${styles.cancelButton} animated-button`}
                onClick={() =>
                  setDeleteConfirmation({ show: false, eventId: null })
                }
                disabled={isSubmitting}
              >
                Abbrechen
              </button>
              <button
                className={`${styles.confirmButton} animated-button`}
                onClick={handleDeleteEvent}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.buttonLoader}>
                    <span className={styles.loaderDot}></span>
                    <span className={styles.loaderDot}></span>
                    <span className={styles.loaderDot}></span>
                  </span>
                ) : (
                  "Löschen"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`${styles.container} ${pageLoaded ? styles.loaded : ""}`}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Kalender</h1>
          <p className={styles.pageDescription}>
            Verwalte deine Termine, Prüfungen und Aufgaben im Kalender.
          </p>
        </div>

        <div className={styles.calendarControls}>
          <div className={styles.calendarNavigation}>
            <button
              className={`${styles.navButton} animated-button`}
              onClick={goToPreviousMonth}
              aria-label="Vorheriger Monat"
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <h2 className={styles.currentMonth}>
              {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
            </h2>
            <button
              className={`${styles.navButton} animated-button`}
              onClick={goToNextMonth}
              aria-label="Nächster Monat"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <button
            className={`${styles.todayButton} animated-button`}
            onClick={goToToday}
          >
            Heute
          </button>
        </div>

        <div className={styles.calendarLegend}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.eventExam}`}></div>
            <span>Prüfung</span>
          </div>
          <div className={styles.legendItem}>
            <div
              className={`${styles.legendColor} ${styles.eventAssignment}`}
            ></div>
            <span>Aufgabe</span>
          </div>
          <div className={styles.legendItem}>
            <div
              className={`${styles.legendColor} ${styles.eventMeeting}`}
            ></div>
            <span>Meeting</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.eventOther}`}></div>
            <span>Sonstiges</span>
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <div className={styles.weekday}>Mo</div>
            <div className={styles.weekday}>Di</div>
            <div className={styles.weekday}>Mi</div>
            <div className={styles.weekday}>Do</div>
            <div className={styles.weekday}>Fr</div>
            <div className={styles.weekday}>Sa</div>
            <div className={styles.weekday}>So</div>
          </div>
          <div className={styles.calendarGrid}>{renderCalendarDays()}</div>
        </div>

        <div className={styles.upcomingEvents}>
          <h2 className={styles.sectionTitle}>Anstehende Termine</h2>
          {events.length > 0 ? (
            <div className={styles.eventsList}>
              {events
                .filter((event) => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 5)
                .map((event) => (
                  <div
                    key={event._id}
                    className={`${styles.eventItem} card-hover`}
                    onClick={() => openEventDetailsModal(event)}
                  >
                    <div
                      className={`${styles.eventItemType} ${getEventTypeClass(
                        event.type
                      )}`}
                    >
                      {getEventTypeLabel(event.type)}
                    </div>
                    <div className={styles.eventItemContent}>
                      <div className={styles.eventItemTitle}>{event.title}</div>
                      <div className={styles.eventItemDate}>
                        {formatDate(event.date)}
                        {event.startTime && ` um ${event.startTime} Uhr`}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className={`${styles.emptyMessage} ${styles.emptyAnimation}`}>
              <div className={styles.emptyIcon}>📅</div>
              <p>
                Keine anstehenden Termine. Klicke auf einen Tag im Kalender, um
                einen Termin hinzuzufügen.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
