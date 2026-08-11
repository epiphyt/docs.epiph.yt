# Accessibility Conformance Report für Impressum Plus

**Name des Produkts/Version:** Impressum Plus, Version 3.0.5

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Impressum Plus ist eine kommerzielle Erweiterung des kostenlosen
WordPress-Plugins Impressum. Zusätzlich zur Erzeugung eines rechtskonformen Impressums erzeugt es eine
Datenschutzerklärung und eine Erklärung zur Barrierefreiheit, kann Impressumsdaten über eine API
zwischen Websites synchronisieren und ergänzt Blöcke für den Block-Editor. Es stellt
Admin-Einstellungsseiten unter **Einstellungen → Impressum** bereit (Tabs für Impressum,
Datenschutzerklärung, Erklärung zur Barrierefreiheit, API und Lizenz) und gibt seine Inhalte im
Frontend über Blöcke und Shortcodes aus.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Impressum Plus – seine Admin-Einstellungsseiten, seine Block-Editor-Steuerelemente und das
HTML-Markup, das es im Frontend ausgibt. Er behandelt **nicht** die umgebende
WordPress-Administration, das aktive Theme, andere Plugins oder vom Website-Betreiber eingegebene
Inhalte. Die Barrierefreiheit der fertigen Seite hängt zudem vom Theme und der Website-Konfiguration
ab (siehe [Abhängigkeiten](#dependencies)). Anforderungen, die mit dem kostenlosen Plugin geteilt
werden, sind im [Accessibility Conformance Report für Impressum](/de/impressum/acr/free) dokumentiert;
dieser Bericht konzentriert sich auf die zusätzliche Funktionalität von Impressum Plus.

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0.2 und
dem Theme Twenty Twenty-Three 1.6. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 3.0.5) abgeglichen.

## Anzuwendende Standards / Richtlinien

Dieser Bericht dokumentiert die Konformität mit den folgenden Standards:

| Standard / Richtlinie | Im Bericht enthalten |
| --- | --- |
| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Stufe A (Ja) · Stufe AA (Ja) · Stufe AAA (Nein) |
| [EN 301 549 v3.2.1 (2021-03)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) | Ja |

## Begriffe

Die in der Spalte „Konformitätsstufe“ verwendeten Begriffe sind wie folgt definiert:

- **Unterstützt:** Die Funktionalität des Produkts verfügt über mindestens eine Methode, die das
  Kriterium ohne bekannte Mängel erfüllt, oder erfüllt es durch eine gleichwertige Alternative.
- **Unterstützt teilweise:** Ein Teil der Funktionalität des Produkts erfüllt das Kriterium nicht.
- **Unterstützt nicht:** Der überwiegende Teil der Funktionalität des Produkts erfüllt das Kriterium
  nicht.
- **Nicht anwendbar:** Das Kriterium ist für das Produkt nicht relevant.
- **Nicht bewertet:** Das Produkt wurde nicht anhand des Kriteriums bewertet. (Darf nur für
  WCAG-2.x-Kriterien der Stufe AAA verwendet werden.)

## WCAG-2.2-Bericht {#wcag-2-2-report}

Die Tabellen 1 und 2 dokumentieren die Konformität mit WCAG 2.2. Hinweis: WCAG 2.2 hat das
Erfolgskriterium 4.1.1 Parsing entfernt; es ist daher unten nicht aufgeführt.

### Tabelle 1: Erfolgskriterien, Stufe A

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Das Plugin gibt keine informativen Bilder, Symbole oder sonstigen Nicht-Text-Inhalte aus; alle Ausgaben sind Text. Das dekorative Symbol zum Entfernen eines Empfängers in den API-Einstellungen ist ein Dashicon mit `aria-hidden="true"`, begleitet vom sichtbaren Text „Entfernen“. Block-Editor-Symbole werden von WordPress bereitgestellt. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine reinen Audio- oder Videoinhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Die Impressumsausgabe ist eine Definitionsliste (`<dl>` / `<dt>` / `<dd>`). Die Datenschutzerklärung verwendet semantische Überschriften (`<h2>` pro nummeriertem Abschnitt, `<h3>` für Unterabschnitte) sowie `<ul>` / `<ol>`-Listen. Die Erklärung zur Barrierefreiheit verwendet `<h2>`-Abschnitte. Die Einstellungen nutzen das WordPress-`form-table`-Muster, wobei jede Beschriftung in `<th scope="row"><label for="…">` steht. Radiobutton-Gruppen im API-Tab werden als benannte Gruppen ausgezeichnet (`role="radiogroup"` mit `aria-label`). |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Inhalte werden in einer logischen DOM-Reihenfolge ausgegeben, die auch ohne CSS korrekt gelesen wird. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung stützt sich auf Form, Größe, visuelle Position oder Ton. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Farbe ist niemals das einzige Mittel zur Informationsvermittlung; Statushinweise und Hinweise auf vorausgewählte Felder enthalten stets erläuternden Text neben jedem Farbhinweis. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin spielt kein Audio ab. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Alle Einstellungen verwenden native Formularelemente. Die Steuerelemente zum Hinzufügen und Entfernen eines Empfängers im API-Tab sind native `<button>`-Elemente, bedienbar mit Enter/Leertaste. Die Einstellungs-Tabs setzen ein vollständiges Tastaturmodell um (Pfeil links/rechts, Pos1, Ende mit wanderndem `tabindex`). Die Block-Editor-Steuerelemente verwenden Standard-`@wordpress/components`. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen; das benutzerdefinierte Widget zum Bearbeiten des Feldnamens steuert den Fokus, ohne ihn einzufangen. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel aus einzelnen Zeichen. (Die Einstellungs-Tabs verwenden nur Pfeil-/Pos1-/Ende-Tasten, die außerhalb des Anwendungsbereichs dieses Kriteriums liegen.) |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt keine Zeitbegrenzungen. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Nicht anwendbar | Das Plugin erzeugt keine sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Inhalte. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden; Sprunglinks und Landmarks auf Seitenebene werden von WordPress und dem Theme bereitgestellt. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Die Einstellungsseiten geben den Admin-Seitentitel in einem `<h1>` aus; Frontend-Seitentitel werden von WordPress und dem Theme geliefert. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge. Das Tab-Skript verschiebt den Fokus auf den neu gewählten Tab und hält inaktive Tab-Panels aus der Tab-Reihenfolge heraus; das Widget zum Bearbeiten des Feldnamens gibt den Fokus beim Betreten und Abbrechen des Bearbeitungsmodus an eine sinnvolle Stelle zurück. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Frontend-Links sind selbsterklärend: E-Mail-Adressen werden als `mailto:`-Links dargestellt, deren Text die Adresse ist, Social-Media-Links tragen den Namen des Netzwerks, und Verweise auf die Datenschutzerklärung benennen ihr Ziel (externe Verweise verwenden die Ziel-URL als sichtbaren Text). Admin-Links haben aussagekräftigen Text. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität stützt sich auf pfadbasierte oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das Standard-Ereignis `click`/Loslassen; keine Funktion wird beim Herunterdrücken ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name jedes Steuerelements enthält seine sichtbare Beschriftung oder seinen Schaltflächentext; Steuerelemente mit reinem Symbol tragen dazu passenden sichtbaren oder Screenreader-Text. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und beeinflusst nicht die von WordPress/dem Theme deklarierte Seitensprache; seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements erfolgt keine Kontextänderung. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Ändern eines `<select>` oder einer Checkbox blendet zugehörige Felder auf derselben Seite ein oder aus, sendet das Formular jedoch nicht ab und ändert den Kontext nicht. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Unterstützt | Clientseitige Validierungsfehler (z. B. Format der USt-IdNr., Pflichtfelder) werden im Text beschrieben und programmatisch mit ihrem Feld verknüpft: das Eingabefeld erhält `aria-invalid` und wird über `aria-describedby` mit der Meldung verbunden. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Jedes Feld verfügt über eine zugeordnete `<label for>` (oder eine Gruppenbeschriftung bei Radio-Gruppen) sowie, wo relevant, über eine sichtbare Beschreibung. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Nicht anwendbar | Das Plugin hat keinen mehrstufigen Prozess, der dieselbe Information mehrfach abfragt. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Die Oberfläche besteht aus nativen Formularelementen sowie den Standardkomponenten des Block-Editors. Die Einstellungs-Tabs stellen korrekte Rollen und Zustände bereit (`role="tablist/tab/tabpanel"`, `aria-selected`, `aria-labelledby`, `hidden`), die von ihrem Skript synchron gehalten werden. Radio-Gruppen im API-Tab werden als benannte `role="radiogroup"`-Gruppen ausgezeichnet. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt kein aufgezeichnetes Video. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin sperrt weder Inhalt noch Oberfläche auf eine einzelne Anzeigeausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Unterstützt | Felder, die Informationen über den Nutzer erfassen, tragen den passenden `autocomplete`-Wert: die E-Mail des Lizenzkontos verwendet `autocomplete="email"`, und die E-Mail-/Telefonfelder verwenden `type="email"` / `type="tel"`. Die übrigen Felder beschreiben die Organisation oder Dritte (z. B. die juristische Person, den Datenschutzbeauftragten), für die die WCAG-Eingabezweck-Werte nicht gelten. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Das Plugin definiert kaum eigene Farben und übernimmt die Farbpalette der WordPress-Administration (der Frontend-Text erbt die Farben des Themes). Die einzige eigene Textfarbe ist das Link-Blau der WordPress-Administration (`#2271b1` auf Weiß, ≈ 5,2:1, sowie seine dunkleren Hover-/Fokus-Töne), das das Minimum von 4,5:1 erfüllt. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Das Plugin setzt keine festen Pixel-Schriftgrößen und verwendet standardmäßiges, textbasiertes Markup, sodass Text mit dem Browser/Zoom skaliert. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher Text ist echter Text; das Plugin verwendet keine Bilder von Text. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Die Ausgabe verwendet fließendes, semantisches Markup ohne Container mit fester Breite (eingefügte Hinweise verwenden `max-width`, keine feste Breite). Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das Plugin überschreibt weder Rahmen von Steuerelementen noch Fokusindikatoren und übernimmt die Stile der WordPress-Administration; der einzige eigene Fokusstil stellt einen sichtbaren `#2271b1`-Fokusring bereit. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Keine Inline-Stile beschränken Zeilenhöhe, Buchstaben- oder Wortabstand so, dass Text abgeschnitten würde. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Unterstützt | Auf der Impressum-Einstellungsseite wird das Steuerelement zum Bearbeiten des Anzeigetitels eines Felds eingeblendet, wenn dessen Feldzeile den Hover oder Fokus erhält. Das eingeblendete Steuerelement ist beständig (es bleibt sichtbar, solange die Zeile Hover oder Fokus behält, einschließlich `:focus-within`, während das Steuerelement selbst fokussiert ist) und überfahrbar (der Zeiger kann darauf bewegt werden, ohne dass es verschwindet); es erscheint in einem eigenen Bereich innerhalb des Zeilenkopfes und verdeckt keine anderen Inhalte, sodass kein gesonderter Mechanismus zum Ausblenden erforderlich ist. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Anwendungsbereichs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Überschriften und Feldbeschriftungen sind aussagekräftig, und die Überschriftenebenen sind im gesamten Impressum, der Datenschutzerklärung und der Erklärung zur Barrierefreiheit korrekt verschachtelt. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Stylesheet des Plugins enthält keine Fokusunterdrückung, die den Indikator entfernt; der standardmäßige Fokusindikator von WordPress/Browser bleibt sichtbar, und das einzige eigene Steuerelement stellt einen eigenen sichtbaren Fokusring bereit. |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente hinzu, die ein fokussiertes Steuerelement verdecken könnten. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Nicht anwendbar | Das Plugin hat keine auf Ziehen basierenden Interaktionen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Interaktive Elemente sind native Steuerelemente und Standardkomponenten des Block-Editors/von WordPress in ihrer Standardgröße (≥ 24 × 24 px). |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Wo die Erklärung zur Barrierefreiheit ein nationales Gesetz zur Barrierefreiheit unter seinem offiziellen fremdsprachigen Titel nennt, wird dieser Titel in ein `<span lang="…">` mit dem korrekten BCP-47-Sprachcode eingefasst, sodass assistive Technologien ihn in der richtigen Sprache ansagen. Die eigenen Zeichenketten des Plugins sind ansonsten in die Website-Sprache lokalisiert. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Die Einstellungsseiten zeigen ihre Tabs bei jedem Aufruf in gleichbleibender Reihenfolge. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Komponenten mit derselben Funktion sind in der gesamten Einstellungsoberfläche einheitlich beschriftet. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent angeboten: feldbezogene Beschreibungen auf den Einstellungsseiten und ein „Dokumentation“-Link in der Plugin-Zeile auf der Plugins-Seite. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Unterstützt | Wird ein Fehler erkannt, schlägt die Meldung eine Korrektur vor (z. B. Hinweise zu Pflichtfeldern und konkrete Formatvorgaben für die USt-IdNr.), angekündigt und mit dem Feld verknüpft (siehe 3.3.1 / 4.1.3). |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen, finanziellen oder dateneinreichenden Transaktionen durch; Einstellungen sind bearbeitbar und jederzeit erneut speicherbar. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Unterstützt | Das Plugin stellt keine eigene Authentifizierung bereit; seine Lizenzaktivierung erfordert nur die Eingabe einer E-Mail-Adresse und eines Lizenzschlüssels, die beide Einfügen und Passwortmanager unterstützen (kein kognitiver Funktionstest). Die Anmeldung bei WordPress wird von WordPress abgewickelt. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Die Bestätigung „Einstellungen gespeichert“ nutzt den Standardmechanismus von WordPress, und die clientseitigen Validierungsmeldungen des Plugins werden als Live-Region (`role="alert"`) eingefügt, sodass sie von assistiven Technologien beim Erscheinen angekündigt werden. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Inhalte werden über native Semantik zugänglich gemacht (Definitionsliste, zugeordnete Beschriftungen, ARIA-Tabs und Radio-Gruppen), und dynamische Validierungsmeldungen werden Screenreadern angekündigt (siehe 4.1.3). |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne feste Größen; die vom Plugin definierten Farben erfüllen die Kontrastvorgaben (siehe 1.4.3). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Informationen werden nie allein durch Farbe vermittelt (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass der Nutzer spricht. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Die gesamte Funktionalität ist mit der Tastatur über native Steuerelemente bedienbar (siehe 2.1.1). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Gleichbleibendes Layout, aussagekräftige Beschriftungen, feldbezogene Hilfe und verständliche Fehlervorschläge. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die die Daten des Nutzers anders als über die Standardsteuerelemente offenlegen würde. |

### Kapitel 5: Allgemeine Anforderungen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 5.1 Geschlossene Funktionalität | Nicht anwendbar | Das Plugin läuft in einem universellen Webbrowser und bietet keine geschlossene Funktionalität. |
| 5.2 Aktivierung von Funktionen zur Barrierefreiheit | Nicht anwendbar | Keine Plattform-Funktionen zur Barrierefreiheit zu aktivieren. |
| 5.3 Biometrie | Nicht anwendbar | Das Plugin verwendet keine Biometrie. |
| 5.4 Erhaltung von Informationen zur Barrierefreiheit bei Konvertierung | Nicht anwendbar | Das Plugin führt keine Formatkonvertierung von Nutzerinhalten durch. |
| 5.5 Bedienbare Teile | Unterstützt | Bedienbare Teile sind native Steuerelemente und Standardkomponenten; siehe WCAG 2.1.1 und 2.5.x. |
| 5.6 Sperr- oder Umschaltsteuerungen | Nicht anwendbar | Das Plugin stellt keine Sperr-/Umschaltstatustasten bereit, über die zu berichten wäre. |
| 5.7 Tastenwiederholung | Nicht anwendbar | Das Verhalten der Tastenwiederholung ist eine Plattform-/Hardwarefunktion. |
| 5.8 Akzeptanz von Doppelanschlägen | Nicht anwendbar | Plattform-/Hardwarefunktion. |
| 5.9 Gleichzeitige Nutzeraktionen | Unterstützt | Keine Bedienung erfordert gleichzeitige Nutzeraktionen. |

### Kapitel 6: IKT mit wechselseitiger Sprachkommunikation

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 6 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine wechselseitige Sprachkommunikation. |

### Kapitel 7: IKT mit Videofunktionen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 7 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Videofunktionen. |

### Kapitel 8: Hardware

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 8 (alle Abschnitte) | Nicht anwendbar | Das Plugin ist reine Software; es enthält keine Hardware. |

### Kapitel 9: Web

Die Frontend-Ausgabe des Plugins und seine browserbasierte Admin-Oberfläche sind Webinhalte. Die
Konformität ist im [WCAG-2.2-Bericht](#wcag-2-2-report) oben dokumentiert; die Abschnitte 9.1–9.4 der
EN 301 549 entsprechen direkt den zugehörigen WCAG-2.2-Erfolgskriterien.

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 9.1 – 9.4 (WCAG 2.2 A & AA) | Siehe WCAG-2.2-Bericht | Siehe Tabellen 1 und 2 oben; alle Kriterien der Stufen A und AA sind mit „Unterstützt“ oder „Nicht anwendbar“ bewertet. |
| 9.5 Keine Beeinträchtigung | Unterstützt | Das Plugin verwendet keine rein farblichen Hinweise, kein Blitzen, kein Audio und keine Zeitvorgaben, die die gesamte Seite beeinträchtigen würden. |
| 9.6 WCAG-Konformitätsanforderungen | Unterstützt | Die Ausgabe erfüllt die Konformitätsanforderungen von WCAG 2.2 der Stufen A und AA. |

### Kapitel 10: Nicht-Web-Dokumente

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 10 (alle Abschnitte) | Nicht anwendbar | Das Plugin erzeugt keine Nicht-Web-Dokumente (z. B. PDF- oder Office-Dateien). |

### Kapitel 11: Software

Die Benutzeroberfläche des Plugins (Einstellungsseiten und Block-Editor-Steuerelemente) ist
webbasierte Software, die in der WordPress-Administration dargestellt wird. Anforderungen, die WCAG
entsprechen, verweisen auf den [WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt keine festen Schriften oder Farben, die die Plattform-/Browsereinstellungen des Nutzers überschreiben würden; es übernimmt die Umgebung der WordPress-Administration. |
| 11.8 Autorenwerkzeuge | Unterstützt | Die Blöcke des Plugins laufen im WordPress-Block-Editor (einem Autorenwerkzeug). Die Blöcke für Datenschutz- und Barrierefreiheits-Informationen verwenden `ServerSideRender` mit `supports.html = false`, sodass Autoren kein beliebiges Markup einfügen können und die Blöcke stets die semantische Ausgabe des Plugins erzeugen – das Autorenwerkzeug erzeugt standardmäßig barrierefreie Inhalte. |

### Kapitel 12: Dokumentation und Support-Dienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 12.1.1 Merkmale zu Barrierefreiheit und Kompatibilität | Unterstützt | Diese Dokumentation beschreibt die Funktionen des Plugins, einschließlich dieses Accessibility Conformance Report. |
| 12.1.2 Barrierefreie Dokumentation | Unterstützt | Die Dokumentation wird als HTML unter docs.epiph.yt veröffentlicht. |
| 12.2.2 Informationen zu Merkmalen der Barrierefreiheit und Kompatibilität | Unterstützt | Für die Barrierefreiheit relevantes Verhalten ist hier und in der Plugin-Readme dokumentiert. |
| 12.2.3 Effektive Kommunikation | Unterstützt | Support wird über die Kanäle des Anbieters unter epiph.yt angeboten. |
| 12.2.4 Barrierefreie Dokumentation (Support) | Unterstützt | Die Support-Dokumentation wird als barrierefreies HTML bereitgestellt. |

### Kapitel 13: IKT für Relais- oder Notdienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 13 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Relais- oder Notdienst-Funktionalität. |

## Abhängigkeiten {#dependencies}

Die Barrierefreiheit des Impressums, der Datenschutzerklärung und der Erklärung zur Barrierefreiheit,
wie sie dem Besucher letztlich angezeigt werden, hängt von Faktoren ab, die außerhalb der Kontrolle
des Plugins liegen, darunter:

- das aktive **WordPress-Theme** (Farben, Kontrast, Fokusstile, Überschriftenstruktur, responsives
  Verhalten der Seite rund um die Ausgabe des Plugins);
- andere **Plugins** auf der Website;
- **vom Website-Betreiber eingegebene Inhalte** – insbesondere das freie Textfeld des Impressums und
  die Funktion „Ersetzungen“ des Datenschutzes, die es Autoren erlauben, eigenes Markup (einschließlich
  Überschriften und Inline-Stilen) beizusteuern. Für die Barrierefreiheit selbst erstellter Inhalte
  bleiben die Website-Betreiber verantwortlich.

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins. Für die
Barrierefreiheit ihrer Website insgesamt bleiben die Website-Betreiber verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
