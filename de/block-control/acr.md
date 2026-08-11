# Accessibility Conformance Report für Block Control

**Name des Produkts/Version:** Block Control, Version 1.6.1

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Block Control ist ein kostenloses WordPress-Plugin, mit dem Autoren
festlegen, unter welchen Bedingungen ein Block angezeigt wird. Es ergänzt die Inspektor-Seitenleiste
jedes Blocks im Block-Editor um das Panel **Sichtbarkeit**, in dem sich ein Block nach Gerätetyp,
Anmeldestatus, Zeitraum, Benutzerrolle, Seitentyp, Feed, Beitrag eines Inhaltstyps oder Seitenzahl
innerhalb nummerierter Seiten ausblenden lässt. Zusätzlich registriert es die Inline-Formatierung
**Screenreader-Text**, die ausgewählten Text als ausschließlich für Screenreader verfügbar
kennzeichnet. Blöcke, auf die eine Bedingung zutrifft, werden serverseitig aus der Ausgabe entfernt;
das Plugin hat keine Einstellungsseite und stellt im Frontend keine eigene Benutzeroberfläche dar.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Block Control – sein Sichtbarkeits-Panel, seine Schaltfläche für die Screenreader-Text-Formatierung,
die Markierungen, die es im Editor darstellt, und die beiden Attribute, die es dem Block-Markup im
Frontend hinzufügt. Er behandelt **nicht** den umgebenden WordPress-Block-Editor, das aktive Theme,
andere Plugins oder die Inhalte, die ein Autor auszublenden wählt. Da das Plugin ein Autorenwerkzeug
erweitert, hängt die Barrierefreiheit der veröffentlichten Seite zusätzlich davon ab, wie seine
Optionen eingesetzt werden (siehe [Abhängigkeiten](#dependencies)).

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0 und dem
Theme Twenty Twenty-Five. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 1.6.1) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Das Plugin stellt zwei Grafiken dar, beide mit einer Textalternative. Das Augensymbol, das einen Block mit Sichtbarkeitseinstellungen kennzeichnet, wird von visuell verborgenem Text begleitet („Für diesen Block gelten Sichtbarkeitseinstellungen.“), der sich innerhalb der Umschalt-Schaltfläche des Panels befindet. Der Zustand ist damit Teil des zugänglichen Namens dieser Schaltfläche und wird nicht allein durch das Symbol vermittelt. Die nur aus einem Symbol bestehende Schaltfläche für Screenreader-Text in der Block-Werkzeugleiste erhält ihren zugänglichen Namen aus ihrem `title` („Screenreader-Text“), den der Editor sowohl als Beschriftung als auch als Tooltip darstellt. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen Nur-Audio- oder Nur-Video-Inhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Jede Gruppe zusammengehöriger Steuerelemente ist ein `<fieldset>` mit einer `<legend>`: die Geräte-Schalter, die Benutzerrollen, die Seitentypen, die nummerierten Seiten und je eine Gruppe pro Inhaltstyp. Die Optionen zum Anmeldestatus bilden eine Radiogruppe, für die das `RadioControl` des Editors ein eigenes Fieldset mit Legende bereitstellt. Jede der beiden Datumszeilen verknüpft ihre Schaltfläche über `aria-labelledby` mit der Beschriftung der Zeile und über `aria-describedby` mit dem erläuternden Satz; das Feld für Seitenzahlen ist über seinen Hilfetext beschrieben. Dadurch wird kein Steuerelement ohne die Gruppe angesagt, zu der es gehört – was insbesondere für die Checkbox „Alle“ wichtig ist, die je Inhaltstyp einmal vorhanden ist. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Das Panel wird in einer logischen DOM-Reihenfolge ausgegeben, die der visuellen Reihenfolge entspricht, und die Gruppen erscheinen in einer festen Abfolge. Steuerelemente, die durch ein anderes Steuerelement eingeblendet werden – die beiden Datumsfelder, das Feld für Seitenzahlen –, werden unmittelbar dahinter eingefügt. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Beschriftung und keine Anweisung verweist auf Form, Größe, visuelle Position oder Ton. Die Markierung um einen aktuell nach Datum ausgeblendeten Block ist ein ergänzender Hinweis; maßgeblich ist das Sichtbarkeits-Panel, das den Zustand als Text bereitstellt. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Das Plugin vermittelt keine Informationen allein durch Farbe. Ein nach Datum ausgeblendeter Block wird mit einer gestrichelten Kontur gekennzeichnet, nur für Screenreader bestimmter Text mit einer gepunkteten Unterstreichung – beides sind Unterschiede im Linienstil und nicht in der Farbe, und beide geben Informationen wieder, die im Panel als Text verfügbar sind. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin gibt keinen Ton wieder. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Die gesamte Funktionalität ist über die Tastatur verfügbar. Das Panel besteht ausschließlich aus Komponenten des Editors – Schaltern, Radiobuttons, Checkboxen, Schaltflächen, einer Datumsauswahl in einem Dropdown und einem Token-Feld –, die native Formularelemente darstellen. Die Checkbox-Listen für Rollen, Seitentypen, Beiträge und nummerierte Seiten sind in der Höhe begrenzt und scrollen, doch jede Checkbox darin liegt in der Tabulator-Reihenfolge und wird beim Fokussieren in den sichtbaren Bereich gescrollt; kein Inhalt ist nur mit dem Zeigegerät erreichbar. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Das Plugin enthält keine Logik, die den Fokus einschließt. Die einzige Komponente, die den Fokus hält, ist das Popover der Datumsauswahl des Editors, das sich mit Escape schließt und den Fokus an die öffnende Schaltfläche zurückgibt. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel mit einzelnen Zeichen. |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt kein Zeitlimit für das Abschließen einer Aufgabe. Die Option zum Ausblenden nach Datum steuert, wann Inhalte veröffentlicht oder zurückgezogen werden; sie begrenzt nicht die Zeit, die zur Bedienung der Oberfläche zur Verfügung steht. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Nicht anwendbar | Das Plugin erzeugt keine bewegten, blinkenden, scrollenden oder sich automatisch aktualisierenden Inhalte, und sein Stylesheet enthält überhaupt keine Animation oder Übergänge. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden. Es ergänzt die Inspektor-Seitenleiste um ein einzelnes, zusammenklappbares Panel, das standardmäßig geschlossen ist; seine Steuerelemente gelangen daher erst in die Tabulator-Reihenfolge, wenn sie benötigt werden. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Nicht anwendbar | Das Plugin fügt keine eigene Ansicht hinzu. Die Titel des Editors und der Admin-Ansichten, die es erweitert, stammen von WordPress. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge. Der Fokus bleibt über Zustandswechsel hinweg erhalten: Beim Entfernen eines Datums wandert er zur zugehörigen Datums-Schaltfläche, statt auf den Dokumentkörper zu fallen, und die Kennzeichnung eines nach Datum ausgeblendeten Blocks ändert eine Klasse am bestehenden Block-Element, statt es zu umschließen. Das Panel wird dadurch nie neu erzeugt und schließt sich beim Bearbeiten der Einstellungen weder, noch verliert es den Fokus. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Das Plugin stellt einen einzigen Link dar: „Dokumentation“ in seiner Zeile auf der Plugin-Seite. Sein zugänglicher Name benennt sowohl das Ziel als auch das Verhalten: „Dokumentation (wird in einem neuen Tab geöffnet)“. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität beruht auf pfadbasierten oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das übliche `click`-/Up-Ereignis; keine Funktion wird beim Down-Ereignis ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Überall dort, wo ein zugänglicher Name die sichtbare Beschriftung erweitert, ist der sichtbare Text darin enthalten und steht am Anfang: „Ausblenden-Datum: Datum festlegen“, „Ausblenden-Datum entfernen“, „Anzeige-Datum entfernen“, „Dokumentation (wird in einem neuen Tab geöffnet)“ sowie die Panel-Schaltfläche „Sichtbarkeit Für diesen Block gelten Sichtbarkeitseinstellungen.“ Nutzer von Spracheingabe können daher jedes Steuerelement über seinen sichtbaren Text ansprechen. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und greift nicht in die von WordPress oder dem Theme deklarierte Seitensprache ein; alle eigenen Zeichenketten sind an die Sprache der Website angepasst. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements tritt keine Kontextänderung ein. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Ändern einer Einstellung aktualisiert das Block-Attribut und gegebenenfalls die Markierung im Editor; eine Kontextänderung tritt nicht ein. Das Aktivieren von „Nach Datum ausblenden“ oder die Auswahl von „Bestimmte Seite(n)“ blendet unmittelbar hinter dem bedienten Steuerelement weitere Steuerelemente ein, was Inhalte ergänzt, aber den Kontext nicht ändert. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Unterstützt | Die einzige Eingabe, die zurückgewiesen werden kann, ist das Feld für Seitenzahlen, das ausschließlich Zahlen annimmt. Eine zurückgewiesene Eingabe wird über die assertive Live-Region des Editors als Text angesagt, und der Hilfetext des Feldes benennt die Einschränkung, bevor ein Fehler auftreten kann. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Jedes Steuerelement hat eine sichtbare Beschriftung, und überall dort, wo eine Einschränkung oder eine nicht offensichtliche Folge besteht, gibt es eine Anweisung: Zu jedem Datumsfeld gehört ein Satz, der seine Wirkung beschreibt, das Feld für Seitenzahlen nennt das Trennzeichen und dass nur Zahlen zulässig sind, und die Option zum Ausblenden für Screenreader erläutert, dass sie den Inhalt nicht visuell ausblendet und nicht für Inhalte mit Links oder Schaltflächen verwendet werden sollte. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Nicht anwendbar | Das Plugin hat keinen mehrstufigen Prozess, der dieselbe Information mehrfach abfragt. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Die Oberfläche besteht aus Komponenten des Editors, die native Steuerelemente mit programmatisch verfügbaren Zuständen darstellen. Wo das Plugin selbst Semantik ergänzt, nutzt es nach Möglichkeit natives Markup – `<fieldset>` und `<legend>` für die Gruppen – und ARIA nur dort, wo Markup die Beziehung nicht ausdrücken kann: `aria-labelledby` und `aria-describedby` an den Datums-Schaltflächen, `aria-expanded` und `aria-haspopup="dialog"` an den Dropdown-Umschaltern sowie `aria-label`, um die beiden ansonsten gleichnamigen Entfernen-Schaltflächen zu unterscheiden. Jede Checkbox hat einen nicht leeren zugänglichen Namen; Beiträge ohne Titel erhalten ersatzweise „(kein Titel)“. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine eigenen Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen aufgezeichneten Videos. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin legt weder Inhalte noch Oberfläche auf eine einzelne Bildschirmausrichtung fest. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Nicht anwendbar | Das Plugin hat keine Eingabefelder, die Informationen über den Nutzer erfassen; seine Felder konfigurieren einen Block, keine Person. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Das Plugin legt nur für ein einziges Element eine Textfarbe fest, den Hilfetext unter den Datumsfeldern, mit `#757575` auf der weißen Seitenleiste (≈ 4,6:1, über dem Minimum von 4,5:1); alle übrigen Beschriftungen übernehmen die Farbpalette der WordPress-Administration. Es reduziert die Deckkraft keines Elements, sodass der Kontrast der im Editor dargestellten Inhalte durch das Plugin nie verringert wird – ein nach Datum ausgeblendeter Block und als Screenreader-Text ausgezeichneter Text behalten ihren vollen Kontrast und werden stattdessen durch eine Kontur beziehungsweise eine Unterstreichung gekennzeichnet. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Das Panel übernimmt die Schriftgrößen des Editors; das Plugin deklariert eine einzige Schriftgröße, `12px` für den Hilfetext, passend zur Hilfetext-Darstellung des Editors, und kein Container hindert Text am Wachsen. Bestätigt bei 200 % Zoom. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher Text ist echter Text; das Plugin liefert keine Bilder eines Textes aus. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Das Panel wird von der Seitenleiste des Editors angeordnet und verwendet keinen Container mit fester Breite. Die Checkbox-Listen sind ausschließlich in der Höhe begrenzt und scrollen in sich selbst, sodass keine Inhalte verloren gehen. Bestätigt bei 320 px / 400 % Zoom. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das Plugin überschreibt keine Rahmen von Steuerelementen und unterdrückt keine Fokusanzeige; sein Stylesheet enthält weder `outline: none` noch `box-shadow: none`. Die einzige Begrenzung, die es selbst zeichnet – die gestrichelte Kontur eines nach Datum ausgeblendeten Blocks –, verwendet die Admin-Themefarbe (standardmäßig `#007cba`, ≈ 4,6:1 gegen Weiß) und liegt damit über dem Minimum von 3:1. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Das Plugin begrenzt weder Zeilenhöhe noch Zeichen- oder Wortabstand. Die einzigen höhenbegrenzten Container sind die scrollbaren Checkbox-Listen, die bei wachsendem Text scrollen, statt ihn abzuschneiden. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Nicht anwendbar | Das Plugin definiert keine eigenen Inhalte, die bei Hover oder Fokus erscheinen. Der Tooltip an der Werkzeugleisten-Schaltfläche für Screenreader-Text wird von der Schaltflächen-Komponente des Editors dargestellt. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Umfangs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Die Legenden der Gruppen beschreiben deren Zweck („Gerätetypen ausblenden“, „Für Benutzerrollen ausblenden“, „Für bestimmte Seitentypen ausblenden“, „Auf nummerierten Seiten ausblenden“ sowie „Für Inhaltstyp … ausblenden“ mit Nennung des Inhaltstyps). Die beiden visuell identischen Datumszeilen werden durch ihre Beschriftungen „Ausblenden-Datum:“ und „Anzeige-Datum:“ unterschieden, und ihre Schaltflächen sowie die Entfernen-Schaltflächen führen diese Beschriftungen in ihren zugänglichen Namen. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Plugin unterdrückt keine Fokusanzeige und übernimmt durchgehend die Anzeigen der WordPress-Administration und der Editor-Komponenten. |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten, schwebenden oder überlagernden Elemente hinzu. Seine Steuerelemente liegen im Fluss der Inspektor-Seitenleiste; die Datumsauswahl öffnet sich in einem vom Editor positionierten Popover, das das öffnende Steuerelement nicht verdeckt. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Nicht anwendbar | Das Plugin hat keine Interaktionen, die auf Ziehen beruhen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Die Checkboxen, Schalter und Radiobuttons sind Steuerelemente des Editors, deren Größe das Plugin nicht verändert, und jedes ist mit einer klickbaren Beschriftung verbunden. Die beiden als Link gestalteten Datums-Schaltflächen sind die einzigen Ziele, die das Plugin selbst gestaltet; sie erhalten eine Mindesthöhe von 24 px und erfüllen damit das Minimum von 24 × 24 px. Die Entfernen-Schaltflächen daneben sind kompakte Standard-Schaltflächen mit 32 px. |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin zeichnet keine Passagen in einer von der umgebenden Seite abweichenden Sprache aus; alle seine Zeichenketten sind an die Sprache der Website angepasst. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Das Sichtbarkeits-Panel erscheint bei jedem Block an derselben Stelle der Inspektor-Seitenleiste und stellt seine Gruppen stets in derselben Reihenfolge dar. Gruppen, die im aktuellen Kontext nicht zutreffen – die Inhaltstyp-Gruppen außerhalb ihres Inhaltstyps –, entfallen, statt umgeordnet zu werden. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Dieselbe Funktion ist durchgehend gleich beschriftet: Jeder Block nutzt dasselbe Panel, dieselbe Formulierung für dieselbe Option und dasselbe Augensymbol mit demselben verborgenen Text als Hinweis darauf, dass Einstellungen gelten. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent angeboten: Anweisungen stehen in jeder Gruppe, die eine benötigt, direkt unter dem beschriebenen Steuerelement, und in der Zeile des Plugins auf der Plugin-Seite steht ein Link „Dokumentation“ zur Verfügung. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Unterstützt | Die einzige Eingabe, die zurückgewiesen werden kann, ist das Feld für Seitenzahlen. Sein Hilfetext benennt das erwartete Format und die zulässigen Werte, sodass die Korrektur sowohl vor als auch nach dem Auftreten des Fehlers beschrieben ist (siehe 3.3.1). |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen, finanziellen oder datenverbindlichen Transaktionen durch; jede Einstellung ist umkehrbar und kann vor wie nach dem Speichern jederzeit wieder geändert werden. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Nicht anwendbar | Das Plugin stellt keine eigene Authentifizierung bereit; die Anmeldung übernimmt WordPress. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Eine Zustandsänderung, die den Fokus nicht bewegt, wird über eine Live-Region angesagt: Wird die letzte verbliebene Einstellung eines Blocks entfernt, meldet das Plugin „Für diesen Block gelten keine Sichtbarkeitseinstellungen mehr.“ Dies ergänzt die Umschalt-Schaltfläche des Panels, deren zugänglicher Name den umgekehrten Zustand benennt, solange Einstellungen aktiv sind. Zurückgewiesene Eingaben im Feld für Seitenzahlen werden über die Live-Region des Editors angesagt. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Jedes Steuerelement ist ein natives Steuerelement mit programmatisch verfügbarem Namen, Rolle, Zustand und Gruppe; Zustandsänderungen, die den Fokus nicht bewegen, werden über eine Live-Region angekündigt (siehe 4.1.3). |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne Container mit fester Breite; das Plugin reduziert nirgends die Deckkraft und legt nur eine Textfarbe fest, die das Kontrastminimum übertrifft (siehe 1.4.3 und 1.4.11). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Informationen werden nie allein durch Farbe vermittelt (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass der Nutzer spricht. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Die gesamte Funktionalität ist mit der Tastatur über native Steuerelemente bedienbar, die Ziele erfüllen die Mindestgröße, und keine Bedienung erfordert Ziehen oder eine Geste (siehe 2.1.1, 2.5.7 und 2.5.8). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Das Panel ist für jeden Block identisch, gruppiert seine Optionen unter aussagekräftigen Legenden und erläutert diejenigen Optionen, deren Wirkung nicht selbsterklärend ist – insbesondere die Option zum Ausblenden für Screenreader. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die die Daten des Nutzers anders als über die Standardsteuerelemente offenlegen würde, und speichert keine personenbezogenen Daten. |

### Kapitel 5: Allgemeine Anforderungen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 5.1 Geschlossene Funktionalität | Nicht anwendbar | Das Plugin läuft in einem universellen Webbrowser und bietet keine geschlossene Funktionalität. |
| 5.2 Aktivierung von Funktionen zur Barrierefreiheit | Nicht anwendbar | Keine Plattform-Funktionen zur Barrierefreiheit zu aktivieren. |
| 5.3 Biometrie | Nicht anwendbar | Das Plugin verwendet keine Biometrie. |
| 5.4 Erhaltung von Informationen zur Barrierefreiheit bei Konvertierung | Nicht anwendbar | Das Plugin führt keine Formatkonvertierung von Nutzerinhalten durch. |
| 5.5 Bedienbare Teile | Unterstützt | Bedienbare Teile sind native Steuerelemente; siehe WCAG 2.1.1 und 2.5.x. |
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
| 7 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Videofunktionen: Es spielt, zeichnet, überträgt und verarbeitet kein Video. |

### Kapitel 8: Hardware

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 8 (alle Abschnitte) | Nicht anwendbar | Das Plugin ist reine Software; es enthält keine Hardware. |

### Kapitel 9: Web

Die Editor-Oberfläche des Plugins und das Markup, das es im Frontend ergänzt, sind Webinhalte. Die
Konformität ist im [WCAG-2.2-Bericht](#wcag-2-2-report) oben dokumentiert; die Abschnitte 9.1–9.4 der
EN 301 549 entsprechen direkt den zugehörigen WCAG-2.2-Erfolgskriterien.

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 9.1 – 9.4 (WCAG 2.2 A & AA) | Siehe WCAG-2.2-Bericht | Siehe Tabellen 1 und 2 oben; alle Kriterien der Stufen A und AA sind mit „Unterstützt“ oder „Nicht anwendbar“ bewertet. |
| 9.5 Keine Beeinträchtigung | Unterstützt | Das Plugin verwendet keine rein farblichen Hinweise, kein Blitzen, kein Audio und keine Zeitvorgaben, die die gesamte Seite beeinträchtigen würden. Im Frontend entfernt es Blöcke vollständig, statt sie visuell auszublenden, sodass keine Inhalte zurückbleiben, die assistive Technologien weiterhin erreichen könnten. |
| 9.6 WCAG-Konformitätsanforderungen | Unterstützt | Die Ausgabe erfüllt die Konformitätsanforderungen von WCAG 2.2 der Stufen A und AA. |

### Kapitel 10: Nicht-Web-Dokumente

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 10 (alle Abschnitte) | Nicht anwendbar | Das Plugin erzeugt keine Nicht-Web-Dokumente (z. B. PDF- oder Office-Dateien). |

### Kapitel 11: Software

Die Benutzeroberfläche des Plugins ist webbasierte Software, die innerhalb des
WordPress-Block-Editors dargestellt wird. Anforderungen, die WCAG entsprechen, verweisen auf den
[WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt über den einzelnen Hilfetext-Stil hinaus keine festen Schriften, Farben oder Größen und übernimmt das Farbschema der WordPress-Administration des Nutzers, einschließlich der Admin-Themefarbe für seine eigene Markierung. Es definiert keine Animation, die reduziert werden müsste. |
| 11.8 Autorenwerkzeuge | Unterstützt | Block Control erweitert ein Autorenwerkzeug; dieser Abschnitt ist daher der für das Plugin bedeutsamste. Das Plugin verändert das von Autoren verfasste Markup nicht: Inhalte, die sichtbar bleiben, werden unverändert durchgereicht, und Inhalte, auf die eine Bedingung zutrifft, werden vollständig aus der Ausgabe entfernt statt per CSS ausgeblendet, sodass nichts in der Seite zurückbleibt, das assistive Technologien noch ansagen könnten. Informationen zur Barrierefreiheit im beibehaltenen Markup bleiben dadurch erhalten. Zwei Optionen wirken sich auf die Barrierefreiheit des Ergebnisses aus und werden entsprechend behandelt. „Für Screenreader ausblenden“ ergänzt das äußere Element eines Blocks um `aria-hidden="true"` – einmalig und nur an diesem Element, sodass das umgebende Markup gültig bleibt – und die Option erläutert im Editor, dass sie Inhalte nicht visuell ausblendet und nicht für Inhalte mit Links oder Schaltflächen verwendet werden darf, die sonst fokussierbar blieben, obwohl sie aus dem Accessibility-Baum entfernt sind. Die Formatierung Screenreader-Text kennzeichnet Text als ausschließlich für assistive Technologien verfügbar und nutzt dafür die von WordPress-Themes etablierte Klassenkonvention (siehe [Abhängigkeiten](#dependencies)). Beides sind bewusste Autorenentscheidungen, deren sachgerechter Einsatz in der Verantwortung des Autors bleibt. |

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

Die Barrierefreiheit einer Seite, wie sie dem Besucher letztlich angezeigt wird, hängt von Faktoren
ab, die außerhalb der Kontrolle des Plugins liegen.

Block Control folgt den etablierten WordPress-Konventionen für barrierefreie Themes und erwartet vom
aktiven Theme:

- eine **`.screen-reader-text`-Hilfsklasse**, die Inhalte visuell verbirgt und bei `:focus` wieder
  sichtbar macht. Mit der Formatierung Screenreader-Text ausgezeichneter Text trägt diese Klasse
  zusätzlich zur eigenen Klasse des Plugins und wird dadurch von derselben Regel verborgen, die das
  Theme bereits für seine Sprunglinks verwendet. Ein Theme, das die Klasse nicht definiert, zeigt den
  Text allen Besuchern an;
- **sichtbare Fokusanzeigen** für Links und Formularelemente. Das Plugin unterdrückt keine – weder
  `outline: none` noch `box-shadow: none` kommen in seinem Stylesheet vor –, überschreibt aber auch
  die des Themes nicht.

Da das Plugin ein Autorenwerkzeug erweitert, wirken sich außerdem folgende Punkte auf das Ergebnis
aus:

- **wie die Sichtbarkeitsoptionen eingesetzt werden**. Einen Block für eine Besuchergruppe
  auszublenden und für eine andere nicht, verändert den Inhalt der Seite; das Plugin sorgt für eine
  vollständige und gültige Entfernung, ob die verbleibende Seite noch schlüssig ist, ist jedoch eine
  redaktionelle Entscheidung;
- **der Einsatz von „Für Screenreader ausblenden“** bei Inhalten mit Links, Schaltflächen oder
  Formularfeldern. Solche Inhalte bleiben sichtbar und fokussierbar, während sie aus dem
  Accessibility-Baum entfernt sind – ein Konflikt, vor dem das Plugin warnt, den es dem Autor aber
  nicht abnehmen kann;
- **der Einsatz der Formatierung Screenreader-Text**, deren Text Informationen ergänzen sollte, die
  sonst visuell vermittelt werden, statt sie zu wiederholen oder ihnen zu widersprechen;
- **das Theme und andere Plugins**, die das Markup rund um die von Block Control beibehaltenen oder
  entfernten Blöcke bereitstellen.

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins.
Website-Betreiber bleiben für die Barrierefreiheit ihrer Website insgesamt verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
