# Accessibility Conformance Report für Embed Privacy

**Name des Produkts/Version:** Embed Privacy, Version 1.14.0

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Embed Privacy ist ein kostenloses WordPress-Plugin, das verhindert, dass
externe eingebettete Inhalte (Videos, Beiträge, Karten und ähnliche Inhalte Dritter) geladen werden,
bevor der Besucher ausdrücklich zustimmt. Jeder blockierte Inhalt wird durch ein Overlay ersetzt, das
den Embed-Anbieter benennt und auf dessen Datenschutzerklärung verlinkt. Das Plugin stellt eine
Admin-Einstellungsseite unter **Einstellungen → Embed Privacy**, einen eigenen Inhaltstyp
„Embed-Anbieter“ zur Verwaltung der Anbieter sowie den Shortcode `[embed_privacy_opt_out]` bereit,
mit dem Besucher Anbieter global aktivieren oder deaktivieren können.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Embed Privacy – sein Einwilligungs-Overlay, seinen Opt-out-Shortcode, seine Einstellungsseite und die
Admin-Ansichten der Embed-Anbieter. Er behandelt **nicht** die umgebende WordPress-Administration,
das aktive Theme, andere Plugins oder die Inhalte Dritter, die nach der Einwilligung geladen werden.
Die Barrierefreiheit der fertigen Seite hängt zudem vom Theme und der Website-Konfiguration ab (siehe
[Abhängigkeiten](#dependencies)).

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0 und dem
Theme Twenty Twenty-Five. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 1.13.1) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Das Anbieter-Logo und das Vorschaubild des blockierten Inhalts sind CSS-Hintergrundbilder auf leeren Elementen mit `aria-hidden="true"` und werden dadurch korrekt als rein dekorativ ausgewiesen; der Name des Anbieters steht stets als Text im Overlay. Das einzige Steuerelement, das nur aus einem Symbol besteht – die Schaltfläche zum Entfernen des Hintergrundbilds eines Anbieters im Adminbereich –, trägt einen Namen als `screen-reader-text`. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen reinen Audio- oder Videoinhalte. Medienalternativen für eingebettete Inhalte Dritter liegen in der Verantwortung des jeweiligen Anbieters (siehe [Abhängigkeiten](#dependencies)). |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine eigenen aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Das Overlay besteht aus einem Absatz mit erklärendem Text, einer Checkbox mit zugeordnetem `<label for>`, einem optionalen Link zum Inhalt und einer Schaltfläche, die den eingebetteten Inhalt lädt. Der Opt-out-Shortcode fasst seine Checkboxen in einer `role="group"` zusammen, die per `aria-labelledby` mit seiner Überschrift verknüpft ist; deren Ebene lässt sich über das Attribut `headline_level` festlegen. Die Einstellungsseite gliedert ihre Optionen in `<h2>`-Abschnitte, und jedes Feld ist über `for`/`id` mit seiner Beschriftung und über `aria-describedby` mit seiner Beschreibung verknüpft. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Inhalte werden in einer logischen DOM-Reihenfolge ausgegeben; das Overlay ergibt auch ohne CSS Sinn. Der Link in der Fußzeile steht sowohl im DOM als auch visuell an letzter Stelle. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung stützt sich allein auf Form, Größe, visuelle Position oder Ton. Wo der Adminbereich den Direktlink über seine Position beschreibt („in der unteren rechten Ecke“), wird zusätzlich seine Funktion genannt. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Das Plugin vermittelt keine Information allein durch Farbe. Links im Overlay erben dieselbe Farbe wie der umgebende Text und werden durch die Linkunterstreichung des Themes unterschieden (siehe [Abhängigkeiten](#dependencies)); die Bestätigung zum Kopieren der Supportdaten benennt ihr Ergebnis stets in Worten. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin spielt kein Audio ab. Eingebettete Inhalte werden konstruktionsbedingt erst nach einer ausdrücklichen Nutzeraktion geladen, sodass beim Laden der Seite nichts automatisch abgespielt wird. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Jeder eingebettete Inhalt lässt sich per Tastatur über eine echte Schaltfläche („Inhalt von *Anbieter* anzeigen“) laden, die sowohl auf die Eingabe- als auch auf die Leertaste reagiert. Die Checkbox, der Link zur Datenschutzerklärung, der Direktlink und alle Opt-out-Checkboxen sind native Steuerelemente. Im Adminbereich ist der scrollbare Bereich mit den Supportdaten fokussierbar (`tabindex="0"`) und dadurch mit der Tastatur scrollbar. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Es ist keine Fokus-Einfang-Logik vorhanden; der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel aus einzelnen Zeichen. |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt keine Zeitbegrenzung für das Abschließen einer Aufgabe. Das einzige zeitgesteuerte Verhalten ist die Bestätigung zum Kopieren der Supportdaten auf der Einstellungsseite, die sich nach zehn Sekunden selbst zurücksetzt; sie ist eine Bestätigung und kein Schritt in einem Prozess, und die zugehörigen Supportdaten bleiben auf der Seite. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Nicht anwendbar | Das Plugin erzeugt keine sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Inhalte. Seine einzigen Animationen sind kurze Farb- und Deckkraft-Übergänge am Overlay, die bei `prefers-reduced-motion: reduce` deaktiviert werden. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden; Sprunglinks und Landmarks auf Seitenebene werden von WordPress und dem Theme bereitgestellt. Jedes Overlay steuert genau ein Element zur Tab-Reihenfolge bei, und dieses wird nach dem Laden des Inhalts entfernt. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Die Einstellungsseite gibt ihren Titel in einem `<h1>` aus; Frontend-Seitentitel werden von WordPress und dem Theme geliefert. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge. Nach dem Laden eines eingebetteten Inhalts wandert der Fokus in den geladenen Inhalt, und die nun überflüssige Schaltfläche wird entfernt, sodass kein verwaistes Steuerelement in der Tab-Reihenfolge zurückbleibt. Im Bildfeld des Adminbereichs wandert der Fokus nach dem Auswählen eines Bildes auf die Schaltfläche zum Entfernen und nach dem Entfernen zurück auf die Schaltfläche zum Hochladen, sodass er nie verloren geht. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Links sind selbsterklärend: „Erfahre mehr in der Datenschutzerklärung von *Anbieter* (wird in einem neuen Tab geöffnet)“, „*Titel* direkt öffnen“ und, in Feeds, „Eingebetteten Inhalt von *Anbieter* öffnen“. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität stützt sich auf pfadbasierte oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das Standard-Ereignis `click`/Loslassen; keine Funktion wird beim Herunterdrücken ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name jedes Steuerelements ist seine sichtbare Beschriftung: die Checkbox „Inhalte von *Anbieter* immer anzeigen“, die Opt-out-Checkboxen und die Schaltflächen im Adminbereich beziehen ihren Namen aus dem sichtbaren Text. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und beeinflusst nicht die von WordPress/dem Theme deklarierte Seitensprache; seine eigenen Zeichenketten, einschließlich der mitgelieferten Anbieterbeschreibungen, sind in die Website-Sprache lokalisiert. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements erfolgt keine Kontextänderung. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Aktivieren von „Inhalte von *Anbieter* immer anzeigen“ lädt die Inhalte dieses Anbieters sofort und verschiebt den Fokus in den geladenen Inhalt. Die Beschriftung kündigt dieses Verhalten an, bevor das Steuerelement benutzt wird – genau das verlangt dieses Kriterium. Die Einstellungsseite und die Anbieterverwaltung ändern bei Eingabe keinen Kontext. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Nicht anwendbar | Das Plugin validiert keine Nutzereingaben und meldet keine Eingabefehler; seine Einstellungen sind Checkboxen, und die Anbieterfelder nehmen freien Text entgegen. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Jedes Feld verfügt über eine zugeordnete Beschriftung sowie, wo relevant, über eine sichtbare Anweisung `<p class="description">`, die über `aria-describedby` mit ihrem Steuerelement verknüpft ist. Das Feld für das Hintergrundbild, das über Schaltflächen statt über ein beschriftbares Steuerelement bedient wird, ist als `role="group"` mit dem Feldtitel als Beschriftung ausgezeichnet. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Nicht anwendbar | Das Plugin hat keinen mehrstufigen Prozess, der dieselbe Information mehrfach abfragt. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Die Oberfläche besteht aus nativen HTML-Steuerelementen. Wo die native Semantik nicht ausreicht, wird korrektes ARIA eingesetzt: `role="status"` für die Ladebestätigung und die Statusmeldungen im Adminbereich, `role="group"` mit `aria-labelledby` für die Opt-out-Liste und das Feld für das Hintergrundbild, `aria-describedby` für Feldbeschreibungen und `aria-hidden="true"` für das dekorative Anbieter-Logo. Iframes, die für Elementor-Video-Elemente erzeugt werden, erhalten ein `title`-Attribut. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine eigenen Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt kein eigenes aufgezeichnetes Video. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin sperrt weder Inhalt noch Oberfläche auf eine einzelne Anzeigeausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Nicht anwendbar | Das Plugin hat keine Eingabefelder, die Informationen über den Nutzer erfassen; seine Felder konfigurieren die Website, keine Person. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Das Overlay stellt Text in `#eee` auf einer Ebene in `rgba(0, 0, 0, .7)` über dem Vorschaubild des Anbieters dar. Der ungünstigste Fall ist ein vollständig weißes Vorschaubild, das zu `#4D4D4D` überlagert wird und ein Verhältnis von etwa 7,3:1 ergibt – über dem Minimum von 4,5:1, auch für den kleineren Text in der Fußzeile. Bei Hover und Fokus hellt der Text auf `#fff` auf, was das Verhältnis weiter erhöht. Die Admin-Oberfläche übernimmt die Farbpalette der WordPress-Administration. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Das Plugin setzt keine festen Pixel-Schriftgrößen; die einzige Schriftgrößenangabe ist relativ (`.85em` für die Fußzeile). Das Overlay verwendet `min-height` und wächst dadurch mit seinem Inhalt, statt ihn abzuschneiden. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher Text ist echter Text. Die Anbieter-Logos sind Logotypen, die dieses Kriterium ausnimmt, und der Anbietername steht zusätzlich als Text zur Verfügung. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Das Overlay ist fließend (`width: 100%`, `max-width: 100%`) und hat keinen Container mit fester Breite. Das einzige in der Breite begrenzte Element, der Supportdaten-Bereich im Adminbereich, verwendet `max-width` und scrollt in sich selbst. Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das Plugin überschreibt keine Rahmen von Steuerelementen. Die Fokusindikatoren, die es selbst definiert – an der Schaltfläche zum Entfernen des Bildes und am Supportdaten-Bereich –, verwenden `#2271b1` aus der Farbpalette der WordPress-Administration auf Weiß (≈ 4,6:1) und liegen damit deutlich über dem Minimum von 3:1; ein weißer innerer Ring sorgt dafür, dass sie auch über beliebigen Bildern sichtbar bleiben. Bei `forced-colors: active` erhält das Overlay einen Rahmen in der Systemtextfarbe, damit seine Begrenzung erkennbar bleibt, sobald seine Hintergrundfarbe überschrieben wird. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Keine Inline-Stile beschränken Zeilenhöhe, Buchstaben- oder Wortabstand so, dass Text abgeschnitten würde; das Overlay wächst mit seinem Inhalt. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Nicht anwendbar | Hover oder Fokus verändern am Overlay nur die Farben; es werden keine zusätzlichen Inhalte eingeblendet. Das Plugin verwendet keine benutzerdefinierten Tooltips oder `title`-basierten Einblendungen. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Anwendungsbereichs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Beschriftungen benennen sowohl das Steuerelement als auch den Anbieter, für den es gilt. Die Einstellungsseite ist in aussagekräftige `<h2>`-Abschnitte gegliedert („Eingebettete Inhalte“, „Datenverarbeitung“, „Supportdaten“), und die Überschriftenebene des Opt-out-Shortcodes lässt sich über das Attribut `headline_level` an die umgebende Dokumentstruktur anpassen. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Plugin unterdrückt keinen Fokusindikator – seine Stylesheets enthalten kein `outline: none` – und übernimmt im Frontend den Indikator des Themes und im Adminbereich den von WordPress. Wo es selbst eine Standarddarstellung entfernt, ersetzt es sie: die runde Schaltfläche zum Entfernen des Bildes, die keine `.button`-Klasse trägt, definiert einen eigenen `:focus-visible`-Ring. Zusätzlich wird beim Fokussieren eines Steuerelements im Overlay derselbe visuelle Zustand angewendet wie beim Hover. Fokusindikatoren im Frontend stammen letztlich vom Theme (siehe [Abhängigkeiten](#dependencies)). |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente über fokussierbaren Steuerelementen hinzu. Das Einwilligungs-Overlay ersetzt den eingebetteten Inhalt im Dokumentfluss, statt andere Inhalte zu überdecken. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Nicht anwendbar | Das Plugin hat keine auf Ziehen basierenden Interaktionen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Das Overlay selbst ist mindestens 200 px hoch. Die Checkboxen sind native Steuerelemente, deren Größe das Plugin nicht verändert – dies deckt die Ausnahme dieses Kriteriums für vom Benutzeragenten bestimmte Größen ab; zusätzlich ist jede Checkbox mit einem über die volle Breite anklickbaren `<label>` verbunden. |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin kennzeichnet keine Passagen in einer anderen Sprache als der Seitensprache; die mitgelieferten Anbieterbeschreibungen sind in die Website-Sprache lokalisiert. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Die Einstellungsseite zeigt ihre Abschnitte bei jedem Aufruf in gleichbleibender Reihenfolge, und jedes Overlay ordnet seine Steuerelemente gleich an. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Jedes Overlay entsteht aus derselben Vorlage, sodass dieselbe Funktion für jeden Anbieter auf der gesamten Website gleich beschriftet ist. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent angeboten: feldbezogene Beschreibungen auf der Einstellungsseite und in der Anbieterverwaltung sowie ein „Dokumentation“-Link in der Plugin-Zeile auf der Plugins-Seite. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Nicht anwendbar | Das Plugin erkennt keine Eingabefehler (siehe 3.3.1). |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen, finanziellen oder dateneinreichenden Transaktionen durch; Einstellungen und Anbieter sind bearbeitbar und jederzeit erneut speicherbar. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Nicht anwendbar | Das Plugin stellt keine eigene Authentifizierung bereit; die Anmeldung erfolgt über WordPress. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Änderungen, die den Fokus nicht verschieben, werden über Live-Regionen angekündigt: Beim Laden eines eingebetteten Inhalts wird „Inhalt von *Anbieter* wurde geladen.“ in eine `role="status"`-Region geschrieben; die Einstellungsseite kündigt das Ergebnis des Kopierens der Supportdaten an; und das Feld für das Hintergrundbild meldet, wenn ein Bild ausgewählt oder entfernt wurde. Inhalte, die automatisch geladen werden, weil der Besucher zuvor zugestimmt hat, werden nicht angekündigt, sodass eine Seite keine Flut redundanter Meldungen erzeugt. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Jedes Overlay stellt über native Semantik eine benannte Schaltfläche, eine beschriftete Checkbox und aussagekräftige Links bereit, und das Laden eines Inhalts wird über eine Live-Region angekündigt (siehe 4.1.3). |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne feste Größen; die eigenen Farben des Plugins übertreffen das Kontrastminimum (siehe 1.4.3), und das Overlay behält im Modus mit erzwungenen Farben eine sichtbare Begrenzung. |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Informationen werden nie allein durch Farbe vermittelt (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass der Nutzer spricht. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Die gesamte Funktionalität ist mit der Tastatur über native Steuerelemente bedienbar, und das primäre Ziel – das Overlay – ist großflächig (siehe 2.1.1 und 2.5.8). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Jedes Overlay ist strukturell identisch, benennt den Anbieter, auf den es sich bezieht, verlinkt auf dessen Datenschutzerklärung und bietet im Adminbereich feldbezogene Hilfe. Bewegung wird reduziert, wenn der Nutzer dies bevorzugt. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die die Daten des Nutzers anders als über die Standardsteuerelemente offenlegen würde. Sein Zweck ist das Gegenteil: Vor der Einwilligung erreichen keine Daten einen Embed-Anbieter. |

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
| 7 (alle Abschnitte) | Nicht anwendbar | Obwohl das Plugin eingebettete Videos blockiert, bietet es selbst keine Videofunktionen: Es spielt, zeichnet, überträgt und verarbeitet kein Video. Nach der Einwilligung eines Besuchers wird die Wiedergabe vollständig vom Player des jeweiligen Drittanbieters übernommen (siehe [Abhängigkeiten](#dependencies)). |

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
| 9.5 Keine Beeinträchtigung | Unterstützt | Das Plugin verwendet keine rein farblichen Hinweise, kein Blitzen, kein Audio und keine Zeitvorgaben, die die gesamte Seite beeinträchtigen würden. Es verhindert außerdem, dass eingebettete Inhalte Dritter vor der Einwilligung des Besuchers ausgeführt werden, sodass deren Skripte die Seite vorher nicht beeinträchtigen können. |
| 9.6 WCAG-Konformitätsanforderungen | Unterstützt | Die Ausgabe erfüllt die Konformitätsanforderungen von WCAG 2.2 der Stufen A und AA. |

### Kapitel 10: Nicht-Web-Dokumente

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 10 (alle Abschnitte) | Nicht anwendbar | Das Plugin erzeugt keine Nicht-Web-Dokumente (z. B. PDF- oder Office-Dateien). |

### Kapitel 11: Software

Die Benutzeroberfläche des Plugins (Einstellungsseite und Ansichten der Embed-Anbieter) ist
webbasierte Software, die in der WordPress-Administration dargestellt wird. Anforderungen, die WCAG
entsprechen, verweisen auf den [WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt keine festen Schriften und respektiert die Plattformeinstellungen des Nutzers: Bei `prefers-reduced-motion: reduce` deaktiviert es seine Übergänge, und bei `forced-colors: active` passt es das Overlay an. Die Admin-Oberfläche übernimmt die Umgebung der WordPress-Administration. |
| 11.8 Autorenwerkzeuge | Unterstützt | Das Plugin fügt dem Block-Editor keinen Block hinzu; der Inhaltstyp „Embed-Anbieter“ wird mit dem klassischen Editor bearbeitet. Was dort bearbeitet wird – Titel, Beschreibung, URL zur Datenschutzerklärung, Hintergrundbild –, wird in die feste Overlay-Vorlage des Plugins eingesetzt. Das erzeugte Markup ist dadurch konstruktionsbedingt barrierefrei, und Autoren können seine Struktur nicht verändern. Vom Website-Betreiber eingegebene Beschreibungen bleiben in dessen Verantwortung (siehe [Abhängigkeiten](#dependencies)). |

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

Embed Privacy folgt den etablierten WordPress-Konventionen für barrierefreie Themes und erwartet vom
aktiven Theme:

- ein **`.screen-reader-text`-Hilfsmittel**, das Inhalte visuell verbirgt und bei `:focus` wieder
  sichtbar macht. Die Schaltfläche „Inhalt von *Anbieter* anzeigen“ im Overlay verwendet diese
  Klasse: Sie bleibt visuell im Hintergrund, bleibt aber in der Tab-Reihenfolge und wird sichtbar,
  sobald ein Tastaturnutzer sie erreicht. Ein Theme, das die Klasse gar nicht definiert, zeigt die
  Schaltfläche als einfachen Text an; ein Theme, das sie ohne Zurücksetzen bei `:focus` definiert,
  lässt sie auch im fokussierten Zustand unsichtbar;
- **sichtbare Fokusindikatoren** für Links und Formularelemente. Das Plugin unterdrückt keinen davon
  – in seinen Stylesheets gibt es kein `outline: none` –, überschreibt aber auch die des Themes
  nicht;
- **unterstrichene Links** oder eine andere nicht-farbliche Unterscheidung zwischen Linktext und
  Fließtext. Links im Overlay erben bewusst die Farbe des umgebenden Textes.

Über das Theme hinaus wirken sich außerdem aus:

- der **eingebettete Inhalt des Drittanbieters selbst**. Nach der Einwilligung eines Besuchers liegt
  die Barrierefreiheit des Videos, Beitrags oder der Karte allein beim Anbieter – das Plugin
  verändert sie weder, noch kann es sie verbessern;
- **vom Website-Betreiber eingegebene Inhalte** in der Beschreibung eines Anbieters oder in dessen
  URL zur Datenschutzerklärung;
- **andere Plugins** auf der Website, insbesondere die Page-Builder und Plugins, mit denen
  Embed Privacy zusammenarbeitet (Elementor, Divi, Enfold, Kadence Blocks, wpForo und weitere), die
  ihr eigenes Markup rund um das Overlay beisteuern.

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins. Für die
Barrierefreiheit ihrer Website insgesamt bleiben die Website-Betreiber verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
