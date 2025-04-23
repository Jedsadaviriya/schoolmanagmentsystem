"use client";

import { useState, useEffect } from "react";

export default function Noten() {
  const [grades, setGrades] = useState([]);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

  // Fetch grades when the component mounts
  useEffect(() => {
    async function fetchGrades() {
      try {
        const res = await fetch("/api/grades");
        const data = await res.json();
        if (data.success) {
          setGrades(data.grades);
        }
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    }
    fetchGrades();
  }, []);

  // Handle form submission to save a new grade
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/grades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, grade }),
      });
      const data = await res.json();
      if (data.success) {
        setGrades([
          ...grades,
          { subject, grade, createdAt: new Date().toISOString() },
        ]);
        setSubject("");
        setGrade("");
      }
    } catch (error) {
      console.error("Error saving grade:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Noten</h1>
      <p>Hier werden die Noten eingetragen und berechnet.</p>

      {/* Form to add a new grade */}
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Fach:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium">
              Note:
            </label>
            <input
              type="number"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              min="1"
              max="6"
              step="0.1"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Note speichern
          </button>
        </form>
      </div>

      {/* Display saved grades */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Gespeicherte Noten</h2>
        {grades.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {grades.map((entry, index) => (
              <li key={index} className="p-2 border rounded">
                <span className="font-medium">{entry.subject}</span>:{" "}
                {entry.grade} (Eingetragen am:{" "}
                {new Date(entry.createdAt).toLocaleDateString()})
              </li>
            ))}
          </ul>
        ) : (
          <p>Keine Noten vorhanden.</p>
        )}
      </div>
    </div>
  );
}
