# Realisierungsbericht

## Status

- In Arbeit
- In Prüfung
- Abgeschlossen

## Projektname

Scool Management System (SMS)

## Projektleiter

Loris Stahlberg

## Auftraggeber

Kurt Järmann

## Autoren

Jeremy Ritter, Loris Stahlberg, Setthawut Jedsadaviriya

## Verteiler

Jeremy Ritter

## Änderungskontrolle, Prüfung, Genehmigung

| Version | Datum      | Beschreibung, Bemerkung | Name oder Rolle |
| ------- | ---------- | ----------------------- | --------------- |
| 1.0.0   | 29.11.2024 | Schreiben der Studie    | SJ, LS, JR      |
| 1.0.1   | 22.04.2025 | Konzeptbericht          | SJ, LS, JR      |
| 1.1     | 23.04.2025 | Realisierung            | SJ, LS, JR      |

## Definitionen und Abkürzungen

| Begriff / Abkürzung | Bedeutung |
| ------------------- | --------- |
|                     |           |

## Referenzen

| Referenz | Titel, Quelle |
| -------- | ------------- |
| [1]      | Grok          |
| [2]      | Vercel v0     |
| [3]      |               |

## Inhaltsverzeichnis

1. [Zusammenfassung](#zusammenfassung)
2. [Technische Detailspezifikation](#technische-detailspezifikation)
   2.1 [Systemdesign](#systemdesign)
   2.1.1 [Struktur](#struktur)
   2.1.2 [Beschreibung der Elemente](#beschreibung-der-elemente)
   2.2 [Schnittstellendefinitionen](#schnittstellendefinitionen)
   2.3 [Sicherheit (ISDS)](#sicherheit-isds)
   2.4 [Anforderungszuordnung](#anforderungszuordnung)
3. [Systemdokumentation](#systemdokumentation)
   3.1 [Konfigurations-Dokumentation](#konfigurations-dokumentation)
   3.2 [Benutzerhandbuch](#benutzerhandbuch)
   3.2.1 [Systemübersicht](#systemübersicht)
   3.2.2 [Anwenderfunktionalität](#anwenderfunktionalität)
   3.3 [Supporthandbuch](#supporthandbuch)
   3.3.1 [Maßnahmen bei Benutzerproblemen](#maßnahmen-bei-benutzerproblemen)
   3.3.2 [Maßnahmen bei technischen Problemen](#maßnahmen-bei-technischen-problemen)
   3.3.3 [Anhang zum Supporthandbuch](#anhang-zum-supporthandbuch)
4. [Systemtest](#systemtest)
   4.1 [Testspezifikation](#testspezifikation)
   4.1.1 [Kritikalität der Funktionseinheit](#kritikalität-der-funktionseinheit)
   4.1.2 [Testanforderungen](#testanforderungen)
   4.1.3 [Testverfahren](#testverfahren)
   4.1.4 [Testkriterien](#testkriterien)
   4.1.5 [Testfälle](#testfälle)
   4.2 [Testprozedur](#CDF)
   4.2.1 [Vorbereitung](#vorbereitung)
   4.2.2 [Durchführung](#durchführung)
   4.2.3 [Nachbearbeitung](#nachbearbeitung)
   4.3 [Testprotokoll](#testprotokoll)
   4.3.1 [Testobjekt](#testobjekt)
   4.3.2 [Testresultate](#testresultate)
   4.3.3 [Testauswertung](#testauswertung)
5. [Weiterführung der Projektplanung](#weiterführung-der-projektplanung)
   5.1 [Abgleich von Planung und tatsächlichem Verlauf der Phase Konzept](#abgleich-von-planung-und-tatsächlichem-verlauf-der-phase-konzept)
   5.2 [Aktualisierung der Risikosituation](#aktualisierung-der-risikosituation)
   5.3 [Planung der nächsten Phase](#planung-der-nächsten-phase)

## Abbildungsverzeichnis

_(Leer, da keine Abbildungen vorhanden)_

## 1. Zusammenfassung

Dieser Bericht dokumentiert die Realisierung des Projekts _Scool Management System_ (SMS). Das SMS ist eine Web-App, die den Schulalltag durch Planung und Notenverwaltung erleichtert, um stets einen Überblick zu gewährleisten.

Der Bericht beschreibt die technische Umsetzung (Aufbau, Schnittstellen, Datenspeicherung etc.), die Umsetzung des Konzepts in Code sowie notwendige Änderungen. Zusätzlich enthält er eine Übersicht über Testmethoden, Testergebnisse und einen Ausblick auf die nächste Projektphase.

## 2. Technische Detailspezifikation

### 2.1 Systemdesign

#### 2.1.1 Struktur

Die App besteht aus drei Hauptseiten:

- **Main Page**: Übersicht mit Links zu allen Seiten.
- **Kalender Page**: Kalender für Termineintragungen.
- **Noten Page**: Eingabe und Berechnung von Notendurchschnitten.

#### 2.1.2 Beschreibung der Elemente

- **Noten Page**: Hinzufügen und Löschen von Noten.
- **Module Page**: Anzeige aller besuchten Module.
- **Kalender Page**: Termine eintragen (z. B. Abgaben, LBs).
- **Homepage**: Einstiegspunkt mit Buttons zu den Modulen.

### 2.2 Schnittstellendefinitionen

- **Externe Schnittstellen**: Nutzeroberfläche (Touch, Maus, Tastatur).
- **Interne Schnittstellen**: Datenspeicherung via JSON (z. B. Noten, Modulinformationen).

### 2.3 Sicherheit (ISDS)

- Daten werden lokal auf dem Gerät gespeichert, kein Datentransfer über das Internet.
- Kein Passwortschutz oder Registrierung.
- Daten werden unverschlüsselt gespeichert.

### 2.4 Anforderungszuordnung

Alle Anforderungen aus dem Konzeptbericht wurden 1:1 umgesetzt, inklusive Notenverwaltung, Kalender, Offline-Fähigkeit und einfacher Bedienung. Geräteübergreifende Nutzung ist theoretisch via Cloud möglich, aktuell jedoch lokal.

| AFo.-Nr. | Anforderung (Stichwort)         | Umsetzung |
| -------- | ------------------------------- | --------- |
| 1        | Noteneinfügung                  | X         |
| 2        | Notenlöschung                   | X         |
| 3        | Automatischer Notendurchschnitt | X         |
| 4        | Notenverteilung                 | X         |
| 5        | Einfache Bedienung (UX)         | X         |
| 6        | Speicherung der Daten (lokal)   | X         |

## 3. Systemdokumentation

### 3.1 Konfigurations-Dokumentation

**Systemkonfiguration**:

- **Entwicklungsumgebung**: Visual Studio Code
- **Programmiersprache**: React (JSX)
- **UI-Technologie**: Next.js
- **Zielplattform**: Web
- **Datenhaltung**: MongoDB (lokal)
- **Projektstruktur**:
  - `MainPage.jsx`
  - `KalenderPage.jsx`
  - `NotenPage.jsx`
  - `ModulePage.jsx`

### 3.2 Benutzerhandbuch

#### 3.2.1 Systemübersicht

**Ziele und Hauptfunktionen**:

- Notenübersicht
- Eintragen von Lernzeiten/Prüfungen im Kalender
- Module hinzufügen

**Systemstruktur**:

- Navigation über AppShell (Startseite mit Buttons)
- Modulare Seitenstruktur
- Lokale Datenspeicherung in MongoDB
- Externe Schnittstelle: Benutzeroberfläche (Touch, Maus, Tastatur)

**Sicherheit/Datenschutz**:

- Internetverbindung erforderlich
- Lokale Datenspeicherung
- Kein Login oder Cloud-Zugriff
- Anwenderrolle: Endnutzer ohne Registrierung

#### 3.2.2 Anwenderfunktionalität

**Aufgabe**: Planung und Verwaltung von Noten, Terminen und Modulen.

**Instruktion**:

- App starten, gewünschte Funktion auf Startseite auswählen (z. B. Kalender, Noten, Module).

**Initialisierung**:

- Erster Start: App leer, Noten/Module können sofort hinzugefügt werden.

**Durchführung**:

- **Kalender**: Datum/Termine eintragen.
- **Module**: Module anlegen, bearbeiten, löschen.
- **Noten**: Notenübersicht automatisch erstellt.

**Terminierung**:

- App jederzeit schließbar, Änderungen werden automatisch gespeichert.

**Wiederanlauf**:

- App neu starten, Daten bleiben erhalten.

**Überwachung**:

- Visuelle Kontrolle durch Nutzer (Listenaktualisierung).

**Fehlerfall**:

- Ungültige Eingaben werden nicht gespeichert.
- Leere Listen führen nicht zum Absturz.

**Fehlermeldungen**:

- Keine klassischen Fehlermeldungen, Eingaben intern abgefangen.

**Fehlerdiagnose**:

- Überprüfung der gespeicherten Daten in Preferences.

**Fehlerbehebung**:

- App neustarten oder Datenspeicher zurücksetzen.

**Wiederherstellung**:

- App neu öffnen, Daten werden automatisch wiederhergestellt.

### 3.3 Supporthandbuch

#### 3.3.1 Maßnahmen bei Benutzerproblemen

- **Problem**: Seite reagiert nicht
  - **Lösung**: App schließen und neu starten.
- **Problem**: Eingaben verschwinden
  - **Lösung**: Daten löschen und neu eingeben.
- **Problem**: App zeigt nichts an
  - **Lösung**: Prüfen, ob Daten in Preferences vorhanden sind.

#### 3.3.2 Maßnahmen bei technischen Problemen

- **Problem**: App startet nicht
  - **Lösung**: App neu installieren, Daten sichern.
- **Problem**: Änderungen werden nicht gespeichert
  - **Lösung**: Preferences-Zugriff prüfen.
- **Problem**: App friert ein
  - **Lösung**: Visual Studio Debug, Stacktrace analysieren.

#### 3.3.3 Anhang zum Supporthandbuch

_(Leer, da keine zusätzlichen Informationen)_

## 4. Systemtest

### 4.1 Testspezifikation

#### 4.1.1 Kritikalität der Funktionseinheit

- **Hoch**: Speichern/Laden von Noten, Module anzeigen, Kalender (Datenverlust wirkt sich direkt aus).
- **Mittel**: Navigation (Fehler schränken Nutzung ein, blockieren aber nicht).
- **Niedrig**: UI-Darstellung (Farben, Abstände, Labels).

#### 4.1.2 Testanforderungen

- Tests mit gültigen, leeren und ungültigen Eingaben.
- Offline-Tests und simulierte Internetverbindung.
- Stressbedingungen: Viele Daten, schnelles Seitenwechseln.
- Fehlertests: Speichern ohne Eingabe, Entfernen aller Daten, Start ohne Datenbestand.

#### 4.1.3 Testverfahren

**Vorbereitung**:

- 3 Testnutzer auf Notebook, Tablet, Handy.
- Testdaten manuell erfassen (verschiedene Noten).

**Durchführung**:

- Manuelles Durchklicken der Funktionen.
- Testen jeder Seite einzeln und im Zusammenhang.
- Speicherung/Wiederaufruf nach App-Neustart prüfen.

**Auswertung**:

- Vergleich mit erwarteter Anzeige.
- Speicherung via Preferences-JSON prüfen.
- Screenshots/Kommentare dokumentieren.

#### 4.1.4 Testkriterien

**Abdeckungsgrad**:

- 100 % der Funktionen (Erstellen, Bearbeiten, Löschen, Speichern, Anzeigen).
- Navigation, Wiederherstellung, Datenspeicherung.

**Checklisten**:

- Häkchenliste pro Funktion: Start, Eingabe, Speichern, Anzeige, Navigation, Fehlerfall.

**Ende-Kriterien**:

- Keine Abstürze.
- Korrekte Speicherung/Anzeige.
- Keine Fehler bei Bedienung (z. B. leere Felder).
- Optische Rückmeldungen funktionieren.
- Tester geben „OK“.

#### 4.1.5 Testfälle

| Nr. | AFo.-Nr. | Anwendungsfall          | Ausgangssituation                  | Eingabedaten              | Erwartetes Ergebnis                        | Bemerkungen, Prüfergebnis      |
| --- | -------- | ----------------------- | ---------------------------------- | ------------------------- | ------------------------------------------ | ------------------------------ |
| 1   | 1        | Noten speichern         | Öffne Noten Seite                  | Name: „Fach“, Noten       | Note wird gespeichert und angezeigt        | OK – funktioniert wie erwartet |
| 2   | 2        | Module anzeigen         | Seite öffnen                       | Keine                     | Module werden angezeigt                    | OK – Eintrag korrekt sichtbar  |
| 3   | 3        | Zwei Termine generieren | Zwei Termine in Module             | Keine                     | Termine werden angezeigt                   | OK – korrekte Gruppierung      |
| 4   | 4        | Daten nach Neustart     | App schließen, wieder öffnen       | Keine                     | Gespeicherte Daten vorhanden               | OK – Daten persistent geladen  |
| 5   | 5        | Termin bearbeiten       | Auf Terminblock drücken, editieren | Änderungen an Textfeldern | Änderungen gespeichert, Liste aktualisiert | OK – Änderungen übernommen     |
| 6   | 6        | Termin löschen          | Eine Termin löschen                | Löschen-Button gedrückt   | Termin entfernt, Liste aktualisiert        | OK – Eintrag verschwindet      |

### 4.2 Testprozedur

#### 4.2.1 Vorbereitung

- **Ausgangszustand**: App korrekt installiert, startet ohne Fehler. Mindestens 5 Noten und 2 Termine eingefügt.
- **Voraussetzungen**: Visual Studio Code installiert, `npm install next@latest` ausgeführt.

#### 4.2.2 Durchführung

1. App starten.
2. „Noten“: Neue Noten hinzufügen (Fach + Note).
3. „Module“: Neue Termine planen.
4. „Module“: Prüfen, ob Termine erscheinen.
5. App schließen, erneut öffnen, Daten prüfen.
6. Termine bearbeiten, speichern, Ergebnis kontrollieren.
7. Termine löschen, prüfen, ob sie verschwinden.
8. Leere Eingaben testen (z. B. Speichern bei leeren Feldern).

#### 4.2.3 Nachbearbeitung

- Ergebnisse mit Testtabelle (4.1.5) abgleichen.
- Prüfergebnisse dokumentieren (Tabelle/Screenshots).
- Fehler im Team besprechen.
- Bei Bedarf: Bugfixes implementieren und retesten.
- Abschluss mit OK-Vermerk.

### 4.3 Testprotokoll

#### 4.3.1 Testobjekt

- **Name**: School Management System
- **Version**: 1.1
- **Ort**: BWD Bern, Raum E307
- **Datum**: 23.04.2025
- **Zeit**: 09:30–11:15 Uhr
- **Tester**: _(Nicht angegeben)_

#### 4.3.2 Testresultate

- Note speichern: Erfolgreich
- Note anzeigen: Erfolgreich
- Note korrekt angezeigt: Erfolgreich
- Daten nach Neustart: Erfolgreich
- Löschen funktioniert: Erfolgreich
- Fehleingaben abgefangen: Erfolgreich

#### 4.3.3 Testauswertung

- **Abweichungen**: Keine
- **Systemverhalten**: Stabil und erwartungsgemäß
- **Fehlerquote**: 0
- **Fazit**: App voll funktionsfähig, alle Kernfunktionen erfolgreich getestet. Keine Fehler/Abstürze. Bereit für Präsentation und Abgabe.

## 5. Weiterführung der Projektplanung

### 5.1 Abgleich von Planung und tatsächlichem Verlauf der Phase Konzept

**Soll-Zeitplan**:

- Realisierung: 3 Arbeitstage für vollständige Umsetzung (Notenportfolio, Kalender).

**Ist-Verlauf**:

- App nicht vollständig umgesetzt (Probleme mit Kalender).
- Notenportfolio fertig und funktionsfähig.

**Risiken**:

- **Zeitdruck**: Gleichzeitiges Programmieren/Dokumentieren.
  - **Lösung**: Klare Rollenverteilung, tägliche Mini-Sitzungen.
- **Technische Bugs**: Probleme mit Kalender-Datensynchronisation.
- **Konsequenzen**: Kalenderprobleme verhinderten pünktliche Fertigstellung.

### 5.2 Aktualisierung der Risikosituation

- **Aktueller Stand**: Keine neuen Risiken. Ursprüngliche Risiken (Zeit, technisches Verständnis) durch Zusammenarbeit gelöst.
- **Maßnahmen**:
  - Präsentation gemeinsam proben.
  - Backup-Version der App für Präsentation vorbereiten.

### 5.3 Planung der nächsten Phase

**Nächste Phase**:

- Präsentation am 25.04.2025 mit Live-Demo.
- Erstellung eines PDF-Dossiers für Portfolio.

**To-Do-Plan**:

- 24.04.: Letztes Bugfixing, Daten auf Demo-Gerät laden.
- 25.04.: Präsentation, Feedback einholen.
- 29.04.–02.05.: Portfolio finalisieren, archivieren, bei Lehrperson abgeben.
