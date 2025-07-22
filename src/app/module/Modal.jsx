"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Modal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    module_number: "",
    description: "",
    events: [{ title: "", date: "", description: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (index, e) => {
    const { name, value } = e.target;
    const newEvents = [...formData.events];
    newEvents[index] = { ...newEvents[index], [name]: value };
    setFormData((prev) => ({ ...prev, events: newEvents }));
  };

  const addEvent = () => {
    setFormData((prev) => ({
      ...prev,
      events: [...prev.events, { title: "", date: "", description: "" }],
    }));
  };

  const removeEvent = (index) => {
    const newEvents = formData.events.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, events: newEvents }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Neues Modul erstellen</h2>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Titel *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="module_number">Modulnummer *</label>
            <input
              type="text"
              id="module_number"
              name="module_number"
              value={formData.module_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Beschreibung</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Ereignisse</label>
            {formData.events.map((event, index) => (
              <div key={index} className={styles.eventGroup}>
                <div className={styles.formGroup}>
                  <label htmlFor={`event-title-${index}`}>Titel</label>
                  <input
                    type="text"
                    id={`event-title-${index}`}
                    name="title"
                    value={event.title}
                    onChange={(e) => handleEventChange(index, e)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor={`event-date-${index}`}>Datum</label>
                  <input
                    type="date"
                    id={`event-date-${index}`}
                    name="date"
                    value={event.date}
                    onChange={(e) => handleEventChange(index, e)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor={`event-description-${index}`}>
                    Beschreibung
                  </label>
                  <input
                    type="text"
                    id={`event-description-${index}`}
                    name="description"
                    value={event.description}
                    onChange={(e) => handleEventChange(index, e)}
                  />
                </div>
                <button
                  type="button"
                  className={styles.removeEventButton}
                  onClick={() => removeEvent(index)}
                >
                  Ereignis entfernen
                </button>
              </div>
            ))}
            <button
              type="button"
              className={styles.addEventButton}
              onClick={addEvent}
            >
              Ereignis hinzufügen
            </button>
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Abbrechen
            </button>
            <button type="submit" className={styles.saveButton}>
              Speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
