# Accessibility Conformance Report für Impressum

**Name des Produkts/Version:** Impressum, Version 3.0.2

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Impressum ist ein kostenloses WordPress-Plugin, das ein rechtskonformes
Impressum für eine Website erzeugt. Es stellt eine Admin-Einstellungsseite unter
**Einstellungen → Impressum** zur Eingabe der Impressumsdaten bereit und gibt das Impressum im
Frontend über einen „Impressum“-Block im WordPress-Block-Editor oder den Shortcode `[impressum]` aus.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Impressum – seine Admin-Einstellungsseite, seine Block-Editor-Steuerelemente und das HTML-Markup, das
es im Frontend ausgibt. Er behandelt **nicht** die umgebende WordPress-Administration, das aktive
Theme, andere Plugins oder vom Website-Betreiber eingegebene Inhalte. Die Barrierefreiheit der
fertigen Seite hängt zudem vom Theme und der Website-Konfiguration ab (siehe
[Abhängigkeiten](#dependencies)).

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0.2 und
dem Theme Twenty Twenty-Three 1.6. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 3.0.2) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Das Plugin gibt keine informativen Bilder, Symbole oder sonstigen Nicht-Text-Inhalte aus; alle Daten werden als Text vermittelt. Das einzige Symbol (der `Placeholder` im leeren Block im Block-Editor) ist rein dekorativ und wird von der sichtbaren Beschriftung „Impressum“ begleitet. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine reinen Audio- oder Videoinhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Die Frontend-Ausgabe ist eine Definitionsliste (`<dl>` / `<dt>` Feldtitel / `<dd>` Wert). Die Einstellungsseite verwendet eine `form-table` mit `role="presentation"`, wobei jede Feldbeschriftung in `<th scope="row"><label for="…">` programmatisch mit der `id` des Steuerelements verknüpft ist, und Abschnittsüberschriften als `<h2>`. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Inhalte werden in einer logischen DOM-Reihenfolge ausgegeben; die `<dl>`-Paare und Formularzeilen ergeben auch ohne CSS Sinn. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung stützt sich allein auf Form, Größe, visuelle Position oder Ton. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Farbe ist niemals das einzige Mittel zur Informationsvermittlung: Pflichtfelder werden mit dem Text „Dies ist ein Pflichtfeld.“ gekennzeichnet, und die grünen/roten Statuszellen im „Get Plus“-Tab enthalten stets die Wörter „Ja“/„Nein“. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin spielt kein Audio ab. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Alle Einstellungen verwenden native Formularelemente. Die Einstellungs-Tabs setzen ein vollständiges Tastaturmodell um (Pfeil links/rechts, Pos1, Ende mit wanderndem `tabindex`). Die Block-Editor-Steuerelemente verwenden Standard-`@wordpress/components`. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Es ist keine Fokus-Einfang-Logik vorhanden; der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel aus einzelnen Zeichen. (Das Tab-Widget verwendet nur Pfeil-/Pos1-/Ende-Tasten, die außerhalb des Anwendungsbereichs dieses Kriteriums liegen.) |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt keine Zeitbegrenzungen; ausblendbare Hinweise bleiben über eine gespeicherte Option bestehen, nicht über einen Timer. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Nicht anwendbar | Das Plugin erzeugt keine sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Inhalte. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden; Sprunglinks und Landmarks auf Seitenebene werden von WordPress und dem Theme bereitgestellt. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Die Einstellungsseite gibt den Admin-Seitentitel in einem `<h1>` aus (über `get_admin_page_title()`); Frontend-Seitentitel werden von WordPress und dem Theme geliefert. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge; das Tab-Skript verschiebt den Fokus auf den neu gewählten Tab und hält inaktive Tab-Panels aus der Tab-Reihenfolge heraus. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Frontend-Links sind selbsterklärend: die E-Mail wird als `mailto:`-Link dargestellt, dessen Text die Adresse ist, und der Kontaktformular-Link lautet „Zum Kontaktformular“. Admin-Links („Jetzt konfigurieren!“, „Dokumentation“, die Plus-Schaltflächen) haben aussagekräftigen Text. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität stützt sich auf pfadbasierte oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das Standard-Ereignis `click`/Loslassen; keine Funktion wird beim Herunterdrücken ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name jedes Steuerelements ergibt sich aus seiner sichtbaren `<label>`- oder sichtbaren Schaltflächenbeschriftung, sodass die sichtbare Beschriftung im zugänglichen Namen enthalten ist. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und beeinflusst nicht die von WordPress/dem Theme deklarierte Seitensprache; seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements erfolgt keine Kontextänderung. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Ändern der Auswahl von Land oder Rechtsform (`<select>`) blendet zugehörige Felder auf derselben Seite ein oder aus, sendet das Formular jedoch nicht ab und ändert den Kontext nicht. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Unterstützt | Validierungsfehler werden im Text beschrieben (z. B. „Du musst eine E-Mail-Adresse eingeben.“) und seit 3.0.2 programmatisch mit ihrem Feld verknüpft: das Eingabefeld erhält `aria-invalid` und wird über `aria-describedby` mit der Meldung verbunden. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Jedes Feld verfügt über eine zugeordnete `<label for>` sowie, wo relevant, über eine sichtbare Anweisung `<p class="description">`. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Nicht anwendbar | Das Plugin hat keinen mehrstufigen Prozess, der dieselbe Information mehrfach abfragt. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Die Oberfläche besteht aus nativen Formularelementen sowie den Standardkomponenten des Block-Editors. Das benutzerdefinierte Tab-Widget stellt korrekte Rollen und Zustände bereit (`role="tablist/tab/tabpanel"`, `aria-selected`, `aria-labelledby`, `hidden`), die von seinem Skript synchron gehalten werden. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt kein aufgezeichnetes Video. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin sperrt weder Inhalt noch Oberfläche auf eine einzelne Anzeigeausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Unterstützt | Die Felder für E-Mail und Telefon verwenden `type="email"`/`type="tel"`, und seit 3.0.2 tragen die Felder für Name, Adresse, E-Mail und Telefon `autocomplete`-Werte (`name`, `street-address`, `email`, `tel`), sodass ihr Eingabezweck programmatisch bestimmbar ist. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Das Plugin definiert kaum eigene Farben und übernimmt die Farbpalette der WordPress-Administration (der Frontend-Text erbt die Farben des Themes). Die einzigen eigenen Farben sind die „Get Plus“-Vergleichs-Badges: Rot (`#fff` auf `#c5443f`, ≈ 4,9:1) und, seit 3.0.2, Grün (`#000` auf `#48a03e`, ≈ 6,4:1) – beide erfüllen das Minimum von 4,5:1. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Das Plugin setzt keine festen Pixel-Schriftgrößen und verwendet standardmäßiges, textbasiertes Markup, sodass Text mit dem Browser/Zoom skaliert. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher Text ist echter Text; das Plugin verwendet keine Bilder von Text. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Die Ausgabe verwendet fließendes, semantisches Markup ohne Container mit fester Breite (der einzige JS-Hinweis verwendet `max-width`, keine feste Breite). Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das Plugin überschreibt weder Rahmen von Steuerelementen noch Fokusindikatoren und übernimmt die Stile der WordPress-Administration. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Keine Inline-Stile beschränken Zeilenhöhe, Buchstaben- oder Wortabstand so, dass Text abgeschnitten würde. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Nicht anwendbar | Das Plugin zeigt bei Hover oder Fokus keine zusätzlichen Inhalte an (keine benutzerdefinierten Tooltips oder `title`-basierten Einblendungen). |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Anwendungsbereichs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Überschriften („Haftungsausschluss“, „Verwendung“, Abschnittstitel) und Feldbeschriftungen sind aussagekräftig; die Überschriftenebenen wurden in einer aktuellen Version überprüft und korrigiert. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Stylesheet des Plugins enthält kein `outline: none` oder eine andere Fokusunterdrückung, sodass der standardmäßige Fokusindikator von WordPress/Browser auf allen Steuerelementen sichtbar bleibt. |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente hinzu, die ein fokussiertes Steuerelement verdecken könnten. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Nicht anwendbar | Das kostenlose Plugin hat keine auf Ziehen basierenden Interaktionen; die Feldauswahl erfolgt über Checkboxen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Interaktive Elemente sind native Steuerelemente und Standardkomponenten des Block-Editors/von WordPress in ihrer Standardgröße (≥ 24 × 24 px). |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin kennzeichnet keine Passagen in einer anderen Sprache als der Seitensprache; seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Die Einstellungsseite zeigt ihre Tabs bei jedem Aufruf in gleichbleibender Reihenfolge. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Komponenten mit derselben Funktion sind in der gesamten Einstellungsoberfläche einheitlich beschriftet. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent angeboten: Feldbezogene Beschreibungen auf der Einstellungsseite und ein „Dokumentation“-Link in der Plugin-Zeile auf der Plugins-Seite. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Unterstützt | Wird ein Fehler erkannt, schlägt die Meldung eine Korrektur vor (z. B. Hinweise zu Pflichtfeldern und konkrete Formatvorgaben für USt-IdNr. und Registernummer), angekündigt und mit dem Feld verknüpft (siehe 3.3.1 / 4.1.3). |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen, finanziellen oder dateneinreichenden Transaktionen durch; Einstellungen sind bearbeitbar und jederzeit erneut speicherbar. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Nicht anwendbar | Das kostenlose Plugin stellt keine eigene Authentifizierung bereit; die Anmeldung erfolgt über WordPress. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Die Bestätigung „Einstellungen gespeichert“ nutzt den Standardmechanismus von WordPress, und seit 3.0.2 werden die clientseitigen Validierungsmeldungen des Plugins als Live-Region (`role="alert"`) eingefügt, sodass sie von assistiven Technologien beim Erscheinen angekündigt werden. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Inhalte werden über native Semantik zugänglich gemacht (Definitionsliste, zugeordnete Beschriftungen, ARIA-Tabs), und dynamische Validierungsmeldungen werden Screenreadern angekündigt (siehe 4.1.3). |
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
| 5.6 Sperr- oder Umschaltsteuerungen | Nicht anwendbar | Das Plugin stellt keine Sperr-/Umschaltstatustasten (z. B. Feststelltaste) bereit, über die zu berichten wäre. |
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

Die Benutzeroberfläche des Plugins (Einstellungsseite und Block-Editor-Steuerelemente) ist
webbasierte Software, die in der WordPress-Administration dargestellt wird. Anforderungen, die WCAG
entsprechen, verweisen auf den [WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt keine festen Schriften oder Farben, die die Plattform-/Browsereinstellungen des Nutzers überschreiben würden; es übernimmt die Umgebung der WordPress-Administration. |
| 11.8 Autorenwerkzeuge | Unterstützt | Der „Impressum“-Block läuft im WordPress-Block-Editor (einem Autorenwerkzeug). Seine `block.json` setzt `supports.html = false`, sodass Autoren kein beliebiges Markup einfügen können und der Block stets die semantische `<dl>`-Ausgabe des Plugins erzeugt – das Autorenwerkzeug erzeugt standardmäßig barrierefreie Inhalte. |

### Kapitel 12: Dokumentation und Support-Dienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 12.1.1 Merkmale zu Barrierefreiheit und Kompatibilität | Unterstützt | Diese Dokumentation beschreibt die Funktionen des Plugins, einschließlich dieses Accessibility Conformance Report. |
| 12.1.2 Barrierefreie Dokumentation | Unterstützt | Die Dokumentation wird als HTML unter docs.epiph.yt veröffentlicht. |
| 12.2.2 Informationen zu Merkmalen der Barrierefreiheit und Kompatibilität | Unterstützt | Für die Barrierefreiheit relevantes Verhalten ist hier und in der Plugin-Readme dokumentiert. |
| 12.2.3 Effektive Kommunikation | Unterstützt | Support wird über das Supportforum auf WordPress.org und die Kanäle des Anbieters unter epiph.yt angeboten. |
| 12.2.4 Barrierefreie Dokumentation (Support) | Unterstützt | Die Support-Dokumentation wird als barrierefreies HTML bereitgestellt. |

### Kapitel 13: IKT für Relais- oder Notdienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 13 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Relais- oder Notdienst-Funktionalität. |

## Abhängigkeiten {#dependencies}

Die Barrierefreiheit des Impressums, wie es dem Besucher letztlich angezeigt wird, hängt von Faktoren
ab, die außerhalb der Kontrolle des Plugins liegen, darunter:

- das aktive **WordPress-Theme** (Farben, Kontrast, Fokusstile, Überschriftenstruktur, responsives
  Verhalten der Seite rund um das Impressum);
- andere **Plugins** auf der Website;
- **vom Website-Betreiber eingegebene Inhalte** in den Impressumsfeldern (z. B. Links, Formatierungen).

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins. Für die
Barrierefreiheit ihrer Website insgesamt bleiben die Website-Betreiber verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
