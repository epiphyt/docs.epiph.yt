# Änderungsprotokoll

## Version 1.4.0

20\. September 2025

* Hinzugefügt: Auf lokal gespeicherte Formularübermittlungen kann nun direkt innerhalb von WordPress geantwortet werden
* Hinzugefügt: Unterstützung für die [Installation/Aktualisierung via Composer](/de/form-block/installation.md#installation-via-composer)
* Hinzugefügt: Die Fehlermeldung, die für ungültige Feldwerte angezeigt wird, ist nun anpassbar
* Verbessert: Assets für Funktionen (Abhängigkeiten, Drop-zone) werden nun nur geladen, wenn notwendig
* Verbessert: Registrierung der Blöcke ist nun schneller
* Behoben: Mehrere E-Mail-Adressen können nun auch durch Komma getrennt werden

## Version 1.3.0

29\. März 2025

* Hinzugefügt: Wiederholungs-Block für Wiederholungsfelder
* Hinzugefügt: Feldwerte können nun optional via URL-Parameter ausgefüllt werden
* Hinzugefügt: Das Änderungsprotokoll wird dynamisch abgerufen
* Behoben: Das `size`\-Attribut wird nur noch angezeigt, wenn es verwendet werden darf
* Behoben: Verschiedene nicht kritische Probleme im Zusammenhang mit React

## Version 1.2.3

30\. Dezember 2024

* Behoben: Potenzieller PHP-Fehler nach dem Abrufen der Lizenzinformationen

## Version 1.2.2

16\. Dezember 2024

* Hinzugefügt: Unterstützung für From Block 1.5.0

## Version 1.2.1

4\. November 2024

* Hinzugefügt: Unterstützung für WordPress 6.7
* Behoben: Der Download von lokalen Dateien hat manchmal versucht, die Dateien als Text anzuzeigen, statt sie herunterzuladen
* Behoben: Die Enter-Taste sendet bei vorhandener Drop-Zone nun auch das Formular ab, statt den Dialog zur Auswahl einer Datei anzuzeigen
* Behoben: Überprüfungsprobleme bei der Drop-Zone

## Version 1.2.0

2\. September 2024

* Hinzugefügt: Option zum Hochladen von Dateien auf den Server, anstatt sie an die E-Mail anzuhängen, was normalerweise größere Uploads ermöglicht.
* Behoben: Die Drop-Zone wird jetzt korrekt für Datei-Eingabefelder registriert und kann jetzt im Backend ausgewählt werden.

## Version 1.1.4

17\. Juni 2024

* Entfernt: Spezifische Eingabetypen, die nun auch in der kostenlosen Version verfügbar sind

## Version 1.1.3

9\. Mai 2024

* Behoben: Potenzieller PHP-Fehler beim Speichern der Einstellungen
* Entfernt: Doppelte Kontrollelemente in der Seitenleiste bei einigen Feldern

## Version 1.1.2

4\. Februar 2024

* Behoben: Potenzieller fataler Fehler nach einer Aktualisierung
* Behoben: PHP-Warnung durch fehlende Abhängkeitsdaten bei alten Formularen

## Version 1.1.1

29\. Januar 2024

* Behoben: Erforderliche Felder wurden im Frontend beim Absenden nicht mehr überprüft
* Behoben: Fehlende deutsche Übersetzungen

## Version 1.1.0

29\. Januar 2024

* Hinzugefügt: Unterstützung für Feldabhängigkeiten
* Hinzugefügt: Unterstützung für die Einstellung einer Aria-Beschreibung für jedes Feld
* Behoben: Fehlende Steuerelemente in Eingabefeldern der Pro-Version
* Hinweis: Diese Version erfordert mindestens WordPress 6.3

## Version 1.0.1

16\. Oktober 2023

* Wir haben einen Fehler bei der automatischen Aktualisierung behoben.

## Version 1.0.0

2\. Juli 2023

* Erste Veröffentlichung
