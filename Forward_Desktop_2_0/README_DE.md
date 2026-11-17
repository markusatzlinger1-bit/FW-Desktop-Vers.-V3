# Forward 2.0 — Desktop Edition (Black & Blue)

Eine für PC/Laptop optimierte Version der Forward-Schreibapp. Läuft als installierbare Web-App (PWA) in Microsoft Edge oder Google Chrome. Ein Windows-Electron-Projekt mit GitHub-Actions-Build liegt separat vor.

## Installation mit GitHub Pages — ohne Programmieren

1. Entpacke das ZIP.
2. Lade **die einzelnen Dateien aus dem entpackten Ordner** in das Stammverzeichnis eines GitHub-Repositories hoch (`index.html`, `app.js`, `style.css`, `manifest.json`, `sw.js`, `plop.wav`, `thud.wav`, Icons).
3. GitHub-Repository → **Settings → Pages** → **Deploy from a branch** → `main` und `/(root)` → **Save**.
4. Öffne die veröffentlichte GitHub-Pages-Adresse am PC in Edge oder Chrome.
5. **Microsoft Edge:** Menü `…` → `Apps` → `Diese Site als App installieren`. In Chrome: das Installationssymbol in der Adressleiste oder Menü → `Installieren`.
6. Forward kann nach dem ersten erfolgreichen Laden offline genutzt werden, solange der Browser die Service-Worker-Daten nicht löscht.

**Tipp:** Wenn du dein altes iPhone-Repository nicht verändern möchtest, verwende ein **eigenes Repository** für Forward Desktop. Dieselbe App passt sich auch kleinen Bildschirmen an, deshalb kannst du sie alternativ über deine bisherige Adresse veröffentlichen.

## Von iPhone auf PC wechseln

- iPhone: bisherige Forward-App → `Optionen → Bibliothek sichern` → JSON-Datei auf den PC übertragen.
- PC: Forward Desktop → `Einstellungen → Backup einlesen` → die JSON-Datei auswählen.
- **Achtung:** Das Einlesen ersetzt die vorhandene Bibliothek auf diesem PC. Sichere vorher deine PC-Bibliothek.
- Neue Wörter auf iPhone und Desktop werden **nicht automatisch synchronisiert**. GitHub speichert den Code, aber nicht deine Kapitel.

Falls du die neue Version auf **genau derselben GitHub-Pages-Adresse** und im selben Browserprofil öffnest, verwendet sie normalerweise weiterhin die vorhandenen lokalen Daten. Unabhängig davon vorher JSON-Backup erstellen.

## Funktionen

- Ein Absatz bleibt frei editier- und formatierbar; **Enter** sperrt ihn dauerhaft für den Draft-Modus.
- Fett, Kursiv, Unterstrichen, Em-Dash (—) und Szenentrenner (---).
- Sounds Plop/Thud beim Absatzabschluss (deaktivierbar).
- Marker für Textauswahl **auch in gesperrten Absätzen**: Text markieren → `Marker` oder `Alt + M`. Die Markerliste enthält Absatznummer und Zitat.
- Kapiteloptionen (`•••`): Abschluss, Zurück zu Draft, Umbenennen, Export, Löschen.
- Wortziel (Standard 360.000), Romanfortschritt und Kapitelbeitrag, Wortzähler, Statistik.
- Black-&-Blue-Desktoplayout: linke Kapitelnavigation, mittlerer Schreibbereich, rechte Informationsspalte ab breiten Bildschirmen; Fokusmodus.
- Automatisches Speichern in IndexedDB, JSON-Backup/Import, TXT/Markdown/DOCX-Export.
- Markdown-/DOCX-Export übernimmt Textformatierungen aus dem Draft. Die freie Revisionsfassung ist derzeit unformatiert; nach Änderungen dort exportiert sie einfachen Text.

## Tastatur

| Tastenkombination | Aktion |
| --- | --- |
| `Enter` | Aktuellen Absatz abschließen und sperren |
| `Alt + N` | Neues Kapitel |
| `Alt + M` | Revisionsmarker setzen (ggf. mit Textauswahl) |
| `Strg + S` | Speichern |
| `Strg + B / I / U` | Fett / Kursiv / Unterstrichen im aktiven Absatz |

## Hinweise

- Der Absatz-Lock ist eine **Benutzeroberflächen-Sperre**: Er schützt vor versehentlichem Zurückeditieren, nicht vor absichtlichem Manipulieren von JSON-Daten.
- Das Wortziel zählt die aktuelle Fassung je Kapitel; `---` zählt nicht als Wort. Nach Kapitel-Löschung sinkt der Gesamtfortschritt. Historische Tagesaktivität bleibt erhalten.
- Auf dem PC wurde JavaScript-Syntax und Kernlogik geprüft, einschließlich DOCX-Container. Ein vollständiger Browser-/Windows-Funktionstest war in der Erstellungsumgebung nicht möglich. Exportiere vor echten Projektdaten ein Backup und teste mit einem Probekapitel.
