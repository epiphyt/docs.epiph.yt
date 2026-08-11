# Accessibility Conformance Report für Multisite Auto Language Switcher

**Name des Produkts/Version:** Multisite Auto Language Switcher, Version 1.1.3

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Multisite Auto Language Switcher ist ein kostenloses WordPress-Plugin für
Multisite-Installationen, das das Plugin Multisite Language Switcher erweitert. Es leitet Besucher
automatisch zu derjenigen Variante des aktuellen Inhalts weiter, die der bevorzugten Sprache
entspricht, die ihr Browser bei jeder Anfrage übermittelt. Das Plugin hat keine eigene
Einstellungsseite; angemeldete Benutzer können die Weiterleitung für ihr Benutzerkonto in ihrem
WordPress-Profil unter **Automatische Weiterleitung** deaktivieren.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Multisite Auto Language Switcher – die Option *Automatische Weiterleitung*, die es dem Benutzerprofil
hinzufügt, den Link *Dokumentation*, den es seiner Zeile auf der Plugin-Seite hinzufügt, und das
Link-Markup, das es zu dem von Multisite Language Switcher ausgegebenen Sprachumschalter beisteuert.
Er behandelt **nicht** das Plugin Multisite Language Switcher selbst, die umgebende
WordPress-Administration, das aktive Theme, andere Plugins oder die Inhalte der Seiten, zu denen
Besucher weitergeleitet werden. Die Weiterleitung erfolgt während des Seitenaufbaus, noch vor jeder
Interaktion durch den Benutzer. Die Barrierefreiheit der fertigen Seite hängt zudem vom Theme und der
Website-Konfiguration ab (siehe [Abhängigkeiten](#dependencies)).

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet in einer
WordPress-7.0-Multisite mit Multisite Language Switcher 2.9.6 und dem Theme Twenty Twenty-Five. Die
Bewertungen wurden zusätzlich mit dem Quellcode des Plugins (Version 1.1.3) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Das Plugin gibt keine eigenen Bilder, Symbole oder sonstigen Nicht-Text-Inhalte aus; alles, was es ausgibt, ist Text oder Link-Markup. Die Flaggenbilder, die im Sprachumschalter erscheinen können, werden von Multisite Language Switcher erzeugt und tragen dessen `alt`-Attribut (siehe [Abhängigkeiten](#dependencies)). |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine reinen Audio- oder Videoinhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Die Profiloption ist eine native Checkbox in einer Zeile der `form-table`, deren `<th scope="row">` die Zeilenüberschrift „Automatische Weiterleitung“ enthält, mit einer `<label for="…">`, die programmatisch mit der `id` des Eingabefelds verknüpft ist. Im Sprachumschalter wird der Eintrag der aktuellen Sprache programmatisch mit `aria-current="page"` gekennzeichnet und nicht allein durch Gestaltung. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Das Plugin hängt dem Profilformular eine einzelne Zeile an und ändert die Reihenfolge des Sprachumschalters nicht; die DOM-Reihenfolge entspricht der visuellen Reihenfolge und ergibt auch ohne CSS Sinn. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung stützt sich allein auf Form, Größe, visuelle Position oder Ton. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Das Plugin definiert keine Farben. Die aktuelle Sprache im Sprachumschalter wird zusätzlich zu einer etwaigen Theme-Gestaltung durch `aria-current="page"` vermittelt, sodass die Information nicht allein über Farbe transportiert wird. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin spielt kein Audio ab. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Das einzige Steuerelement des Plugins ist eine native Checkbox, und die Einträge des Sprachumschalters sind native Links. Das Plugin registriert keine Tasten- oder Klick-Handler; sein einziges Skript schreibt lediglich die aktuelle URL um und fügt kein interaktives Verhalten hinzu. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Es ist keine Fokus-Einfang-Logik vorhanden; der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel. |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt keine Zeitbegrenzungen. Die Sprachweiterleitung erfolgt einmalig beim Abruf der Seite, nicht über einen Timer oder nach einer Verzögerung. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Nicht anwendbar | Das Plugin erzeugt keine sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Inhalte. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden; Sprunglinks und Landmarks auf Seitenebene werden von WordPress und dem Theme bereitgestellt. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Das Plugin fügt keine eigenen Seiten hinzu. Seitentitel – auch die einer Seite, zu der ein Besucher weitergeleitet wurde – werden von WordPress und dem Theme der jeweiligen Website geliefert. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge. Das Plugin verschiebt den Fokus an keiner Stelle: seine Profilzeile wird an Ort und Stelle eingefügt, und sein Skript schreibt lediglich die URL um. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Die Links des Sprachumschalters sind mit dem von Multisite Language Switcher gelieferten Sprachnamen beschriftet. Der Link „Dokumentation“ in der Plugin-Zeile auf der Plugin-Seite hat aussagekräftigen Text und weist darauf hin, dass er in einem neuen Tab geöffnet wird. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität stützt sich auf pfadbasierte oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Die native Checkbox und die nativen Links reagieren auf das Standard-Aktivierungsereignis; keine Funktion wird beim Herunterdrücken ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name der Checkbox ergibt sich aus ihrer sichtbaren Beschriftung. Seit 1.1.3 tragen die Links des Sprachumschalters kein `title`-Attribut mehr, das von ihrem sichtbaren Text abweichen könnte, und der zugängliche Name des Links „Dokumentation“ beginnt mit seinem sichtbaren Text. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und beeinflusst nicht die von WordPress und dem Theme deklarierte Seitensprache. Indem es Besucher zu der Website mit der passenden Sprachvariante weiterleitet, liefert es den Inhalt auf einer Website aus, deren deklarierte Seitensprache diesem Inhalt entspricht. Seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements erfolgt keine Kontextänderung. Die Sprachweiterleitung erfolgt beim Abruf der Seite, noch vor jeder Interaktion durch den Benutzer, und wird daher nicht durch den Fokus ausgelöst. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Umschalten der Checkbox *Automatische Weiterleitung* ändert den Kontext nicht; die Einstellung wird beim Absenden des Profilformulars übernommen. Die Sprachweiterleitung wird nicht durch das Ausfüllen oder Ändern eines Steuerelements ausgelöst. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Nicht anwendbar | Das Plugin führt keine Eingabevalidierung durch; seine einzelne Checkbox kann nicht falsch ausgefüllt werden. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Die Profiloption verfügt über eine sichtbare, zugeordnete `<label>` („Automatische Weiterleitung zur bevorzugten Sprache deaktivieren“) und steht in einer Zeile mit der Überschrift „Automatische Weiterleitung“, die zusammen den Zweck der Option benennen. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Nicht anwendbar | Das Plugin hat keinen mehrstufigen Prozess, der dieselbe Information mehrfach abfragt. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Die Benutzeroberfläche besteht aus einer nativen Checkbox und nativen Links, sodass Name, Rolle und Wert vom Browser bereitgestellt werden. Die aktuelle Sprache im Sprachumschalter stellt ihren Zustand zusätzlich über `aria-current="page"` bereit – wiederhergestellt in 1.1.3, zusammen mit der Entfernung eines überflüssigen `title`-Attributs. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt kein aufgezeichnetes Video. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin sperrt weder Inhalt noch Oberfläche auf eine einzelne Anzeigeausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Nicht anwendbar | Das einzige Steuerelement des Plugins ist eine Checkbox für eine Voreinstellung; es erhebt keine Informationen über den Benutzer, für die WCAG einen Eingabezweck definiert. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Das Plugin liefert kein Stylesheet aus und definiert keine eigenen Farben. Text in der Administration übernimmt die Farbpalette der WordPress-Administration, Text im Frontend die Farben des Themes. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Das Plugin setzt keine Schriftgrößen und verwendet standardmäßiges, textbasiertes Markup, sodass Text mit dem Browser/Zoom skaliert. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher vom Plugin ausgegebener Text ist echter Text; es verwendet keine Bilder von Text. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Die Ausgabe des Plugins besteht aus einer Zeile im WordPress-Profilformular sowie Inline-Link-Markup, ohne eigene Container mit fester Breite. Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das Plugin überschreibt weder Rahmen von Steuerelementen noch Fokusindikatoren und übernimmt die Stile der WordPress-Administration und des Themes. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Das Plugin verwendet keine Inline-Stile und überhaupt kein CSS, sodass nichts Zeilenhöhe, Buchstaben- oder Wortabstand beschränkt. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Nicht anwendbar | Das Plugin zeigt bei Hover oder Fokus keine zusätzlichen Inhalte an. Das zuvor an den Links des Sprachumschalters ausgegebene `title`-Attribut wurde in 1.1.3 entfernt. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Anwendungsbereichs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Das Plugin fügt keine Überschriften hinzu. Seine Zeilenüberschrift („Automatische Weiterleitung“) und seine Checkbox-Beschriftung beschreiben den Zweck der Option. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Plugin liefert kein CSS aus und damit auch kein `outline: none` oder eine andere Fokusunterdrückung; die standardmäßigen Fokusindikatoren von WordPress, Theme und Browser bleiben auf allen Steuerelementen sichtbar. |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente hinzu, die ein fokussiertes Steuerelement verdecken könnten. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Nicht anwendbar | Das Plugin hat keine auf Ziehen basierenden Interaktionen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Die interaktiven Elemente sind eine native Checkbox und native Links in ihrer Standardgröße. Das Plugin verwendet kein CSS, das ein Ziel verkleinern würde; die dargestellte Größe des Sprachumschalters wird vom Theme bestimmt (siehe [Abhängigkeiten](#dependencies)). |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin kennzeichnet keine Passagen in einer anderen Sprache als der Seitensprache; seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. Die im Sprachumschalter angezeigten Sprachnamen werden von Multisite Language Switcher ausgegeben (siehe [Abhängigkeiten](#dependencies)). |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Das Plugin fügt seinen Link „Dokumentation“ bei jedem Aufruf an derselben Stelle ein und ändert die Reihenfolge des Sprachumschalters nicht, die von Multisite Language Switcher bestimmt wird. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Die Option und der Link des Plugins sind überall einheitlich beschriftet. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent über den Link „Dokumentation“ in der Plugin-Zeile auf der Plugin-Seite angeboten, bei jedem Aufruf an derselben Stelle. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Nicht anwendbar | Das Plugin erkennt keine Eingabefehler, sodass keine Korrekturen vorgeschlagen werden müssen. |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen, finanziellen oder dateneinreichenden Transaktionen durch; die Profiloption kann jederzeit geändert und erneut gespeichert werden. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Nicht anwendbar | Das Plugin stellt keine eigene Authentifizierung bereit; die Anmeldung erfolgt über WordPress. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Das Plugin gibt keine eigenen Statusmeldungen aus; das Speichern der Option *Automatische Weiterleitung* wird durch den Standardhinweis „Profil aktualisiert“ von WordPress bestätigt. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Inhalte werden über native Semantik zugänglich gemacht: eine zugeordnete Beschriftung für die Profiloption sowie native Links, deren aktueller Eintrag mit `aria-current="page"` gekennzeichnet ist. |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne feste Größen und ohne vom Plugin definierte Farben (siehe 1.4.3, 1.4.4). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Informationen werden nie allein durch Farbe vermittelt (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass der Nutzer spricht. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Die gesamte Funktionalität ist mit der Tastatur über native Steuerelemente bedienbar (siehe 2.1.1). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Eine einzelne, klar formulierte Option sowie eine automatische Weiterleitung, die Besuchern das eigenständige Auffinden der passenden Sprachvariante erspart; angemeldete Benutzer können sie in ihrem Profil abschalten. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die die Daten des Nutzers anders als über die Standardsteuerelemente offenlegen würde. |

### Kapitel 5: Allgemeine Anforderungen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 5.1 Geschlossene Funktionalität | Nicht anwendbar | Das Plugin läuft in einem universellen Webbrowser und bietet keine geschlossene Funktionalität. |
| 5.2 Aktivierung von Funktionen zur Barrierefreiheit | Nicht anwendbar | Keine Plattform-Funktionen zur Barrierefreiheit zu aktivieren. |
| 5.3 Biometrie | Nicht anwendbar | Das Plugin verwendet keine Biometrie. |
| 5.4 Erhaltung von Informationen zur Barrierefreiheit bei Konvertierung | Nicht anwendbar | Das Plugin führt keine Formatkonvertierung von Nutzerinhalten durch. |
| 5.5 Bedienbare Teile | Unterstützt | Bedienbare Teile sind native Steuerelemente und native Links; siehe WCAG 2.1.1 und 2.5.x. |
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

Die Benutzeroberfläche des Plugins (die Profiloption und die von ihm hinzugefügten Links) ist
webbasierte Software, die in der WordPress-Administration und im Frontend dargestellt wird.
Anforderungen, die WCAG entsprechen, verweisen auf den [WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt keine Schriften oder Farben, die die Plattform-/Browsereinstellungen des Nutzers überschreiben würden; es übernimmt die Umgebung der WordPress-Administration und des Themes. |
| 11.8 Autorenwerkzeuge | Nicht anwendbar | Das Plugin stellt kein Autorenwerkzeug bereit: Es fügt keine Blöcke, keine Editor-Integration und keine Oberfläche zum Erstellen von Inhalten hinzu. |

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

Die Barrierefreiheit des Sprachumschalters und der Seite, die ein Besucher letztlich zu sehen bekommt,
hängt von Faktoren ab, die außerhalb der Kontrolle dieses Plugins liegen, darunter:

- das Plugin **Multisite Language Switcher**, das den Sprachumschalter selbst ausgibt – die
  Flaggenbilder und ihre Alternativtexte, das Listen-Markup rund um die Einträge, die Sprachnamen und
  die Reihenfolge der Sprachen. Multisite Auto Language Switcher passt lediglich das Markup der
  einzelnen Links über den Filter `msls_output_get` an;
- das aktive **WordPress-Theme** (Farben, Kontrast, Fokusstile sowie Größe und Gestaltung des
  Sprachumschalters, einschließlich der Klasse `current_language`);
- andere **Plugins** auf der Website;
- die **Website, zu der ein Besucher weitergeleitet wird** – die Barrierefreiheit der Zielseite wird
  durch das Theme, die Inhalte und die Plugins dieser Website bestimmt.

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins. Für die
Barrierefreiheit ihrer Website insgesamt bleiben die Website-Betreiber verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
