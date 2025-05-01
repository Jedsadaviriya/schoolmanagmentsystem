# Schlussbericht: Scool Management System (SMS)

## 1. Kurz und bündig

Das _Scool Management System_ (SMS) ist eine Web-App, die den Schulalltag mit Notenverwaltung, Modulübersicht und einem Kalender einfacher machen soll. Dieser Bericht fasst die Konzept- und Realisierungsphase (Nov. 2024 – Apr. 2025) zusammen. Wir haben fast alle Ziele erreicht, aber die Kalender-Datenbank-Integration klappt noch nicht. Der Bericht ist für Kurt Järmann und andere Studierende, die wissen wollen, wie das Projekt lief.

## 2. Was haben wir geschafft?

### 2.1 Erfolge

- **Notenverwaltung**: Die Noten-Seite funktioniert super – Noten hinzufügen, löschen und den Durchschnitt berechnen geht einwandfrei.
- **Modulübersicht**: Alle Module werden übersichtlich angezeigt und lassen sich leicht verwalten.
- **Einfache Bedienung**: Die App ist intuitiv, mit einer klaren Startseite und einfacher Navigation.

Unsere Tests (siehe Realisierungsbericht) zeigen: Die App ist stabil, keine Abstürze, alles funktioniert wie geplant.

### 2.2 Was fehlt noch?

Der Kalender ist nicht ganz fertig – Termine kann man eintragen, aber die Verbindung zur Datenbank hakt. Das ist aber nicht so dringend, da Noten und Module die Hauptfunktionen sind. Kleinere To-Dos:

- Kalender für kleine Bildschirme optimieren.
- Vielleicht Erinnerungen für Termine hinzufügen.
- Lokale Speicherung Alles sollte lokal in MongoDB gespeichert.

## 3. Was lief schief, was haben wir gelernt?

### 3.1 Probleme

- **Kalender-Datenbank**: Die Verbindung zur Datenbank war knifflig, weil uns Erfahrung mit solchen Datenstrukturen fehlte.
- **Teamplanung**: Wir haben alles gleichzeitig gemacht – Programmieren, Dokumentieren, Testen. Das war stressig.

### 3.2 Erkenntnisse

- **Bessere Planung**: Nächstes Mal machen wir klare Aufgabenpläne und tägliche Absprachen von Anfang an.
- **Technik testen**: Komplexe Dinge wie den Kalender sollten wir erst als Prototyp bauen, um Probleme früh zu sehen.
- **Fokus setzen**: Die Kernfunktionen zuerst fertigzumachen war richtig – weniger wichtige Sachen können später kommen.

## 4. Wie wurde es gebaut?

- **Tools**: Visual Studio Code, React (JSX), Next.js
- **Daten**: Lokale MongoDB-Datenbank
- **Struktur**: Seiten für Start, Noten, Module und Kalender

Die Daten bleiben auf dem Gerät, ohne Internet oder Passwortschutz, wie im Konzept geplant.

## 5. Was kommt als Nächstes?

Die App ist schon jetzt nützlich für Noten und Module. Für die Zukunft könnten wir:

- Den Kalender mit der Datenbank verbinden.
- Cloud-Speicher für Nutzung auf mehreren Geräten hinzufügen.
- Besser planen, um Stress zu vermeiden.

## 6. Fazit

Das SMS ist fast fertig und macht, was es soll: Noten und Module im Blick behalten. Die Kalenderprobleme sind ärgerlich, aber nicht so wichtig. Wir haben viel gelernt, vor allem, wie man als Team besser plant. Danke an Kurt Järmann für die Unterstützung – wir hoffen, der Bericht zeigt klar, was wir erreicht haben!

**Autoren**: Jeremy Ritter, Loris Stahlberg, Setthawut Jedsadaviriya  
**Datum**: 01.05.2025
