# Accessibility Conformance Report für Form Block

**Name des Produkts/Version:** Form Block, Version 1.8.1

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Form Block ist ein kostenloses WordPress-Plugin, mit dem Formulare direkt im
Block-Editor erstellt werden. Es stellt fünf Blöcke bereit – Formular, Feldgruppe, Eingabefeld,
Auswahlfeld und Textbereich –, aus denen Autoren ein Formular zusammensetzen, und prüft
Übermittlungen sowohl im Browser als auch auf dem Server. Übermittelte Daten können per E-Mail
versendet und in WordPress gespeichert werden, wo sie unter **Werkzeuge → Formularübermittlungen**
verwaltet werden. Eine Einstellungsseite steht unter **Einstellungen → Form Block** bereit.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Form Block – das Markup, das seine Blöcke im Frontend ausgeben, seine Validierungsmeldungen im
Browser und auf dem Server, seine Steuerelemente im Block-Editor, die Seite
**Einstellungen → Form Block** sowie die Seite **Werkzeuge → Formularübermittlungen**. Er behandelt
**nicht** die umgebende WordPress-Administration, das aktive Theme, andere Plugins oder die
Beschriftungen, Legenden und Meldungen, die Autoren selbst eingeben. Da ein Formular Feld für Feld
von Autoren zusammengesetzt wird, hängt das Ergebnis zudem von deren Entscheidungen ab (siehe
[Abhängigkeiten](#dependencies)). Form Block Pro ist ein eigenes Produkt und wird in diesem Bericht
nicht behandelt.

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0 und dem
Theme Twenty Twenty-Five. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 1.9.0) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Die Frontend-Ausgabe des Plugins besteht aus Text und nativen Formularelementen; sie enthält keine Bilder. Rein dekorative Zeichen werden vor assistiven Technologien verborgen: sowohl das Sternchen, das ein Pflichtfeld kennzeichnet, als auch die Trennzeichen zwischen den Teilen eines Datumsfelds mit getrennten Feldern tragen `aria-hidden="true"`. Im Adminbereich sind die Symbole in der Vergleichstabelle mit `aria-hidden="true"` ausgezeichnet und stehen neben ihrem Text „Ja“/„Nein“; die Symbole im Block-Editor sind SVGs mit `aria-hidden`. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine reinen Audio- oder Videoinhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Jedes Feld ist ein natives `<input>`, `<select>` oder `<textarea>`, das mit seinem `<label>` verknüpft ist: Das Plugin erzeugt beim Rendern des Blocks eine eindeutige `id` am Steuerelement und das passende `for` an der Beschriftung, sodass die Verknüpfung von Autoren nicht zerstört werden kann. Der Block „Feldgruppe“ gibt ein echtes `<fieldset>` mit `<legend>` aus, und ein Datum mit getrennten Feldern wird in ein erzeugtes `<fieldset>` gefasst, dessen `<legend>` die gesamte Gruppe benennt, während jeder Teil seine eigene Beschriftung behält. Pflichtfelder verwenden das native Attribut `required` und nicht allein eine visuelle Konvention. Fehlermeldungen sind über `aria-describedby` mit ihrem Feld verknüpft, ungültige Felder tragen `aria-invalid`. Im Adminbereich gliedert die Einstellungsseite ihre Optionen in ein Tab-Widget mit `role="tablist"`/`tab`/`tabpanel`, die Vergleichstabelle verwendet `<thead>` mit `scope="col"`, und übermittelte Werte werden als `<dl>` ausgegeben, die über die Überschrift darüber benannt ist. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Felder werden in der von Autoren festgelegten Reihenfolge ausgegeben. Jede Beschriftung folgt im DOM auf ihr Steuerelement und wird per CSS `order` visuell darüber platziert. Das ändert die visuelle Position, nicht die Leserichtung – Beschriftung und Steuerelement bleiben benachbart und korrekt verknüpft, und das Formular ist auch ohne CSS verständlich. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung beruht ausschließlich auf Form, Größe, visueller Position oder Ton. Die einzige positionsbezogene Konvention – das Sternchen an Pflichtfeldern – ist nicht der einzige Träger dieser Information: Das Attribut `required` vermittelt sie programmatisch. Genau deshalb sind der erläuternde Satz und das Sternchen selbst vor assistiven Technologien verborgen, statt als bedeutungsloses Symbol vorgelesen zu werden. |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Der Validierungszustand wird nie allein durch Farbe vermittelt. Ein ungültiges Feld erhält immer eine Textmeldung darunter, und das eigene Stylesheet des Plugins weist dieser Meldung überhaupt keine Farbe zu. Im Adminbereich enthalten die grünen, grauen und roten Statusfelder der Vergleichstabelle stets die Wörter „Ja“, „Nein“ oder eine entsprechende Angabe. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin gibt keine Audioinhalte wieder. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Alle Funktionen sind mit der Tastatur verfügbar, da das Formular durchgehend aus nativen Steuerelementen besteht; im Frontend fügt das Plugin kein eigenes Widget hinzu. Das `<form>` wird zwar mit `novalidate` ausgegeben, damit das Plugin eigene Meldungen anzeigen kann, die Validierung wird aber über die Ereignisse `blur`, `change`, `input` und `submit` ausgelöst, die alle auch per Tastatur entstehen. Die Einstellungs-Tabs im Adminbereich setzen ein vollständiges Tastaturmodell um (Pfeil links/rechts, Pos1 und Ende mit wanderndem `tabindex`), und die übermittelten Daten einer Zeile werden über ein natives `<details>`/`<summary>` aufgeklappt. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Es ist keine Logik vorhanden, die den Fokus einschließt; der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel mit einzelnen Zeichen. Die Pfeil-, Pos1- und Ende-Tasten im Tab-Widget des Adminbereichs sind die Standardtasten dieses Muster und wirken nur, solange ein Tab den Fokus hat. |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Unterstützt | Das Plugin setzt kein Zeitlimit für das Ausfüllen eines Formulars: Ein Formular kann in beliebigem Tempo ausgefüllt werden, und während der Bearbeitung läuft nichts ab. Die beiden zeitbezogenen Spam-Maßnahmen begrenzen nicht die für die Aufgabe verfügbare Zeit. Die Überflutungskontrolle, die eine erneute Übermittlung desselben Formulars innerhalb eines einstellbaren Intervalls optional blockiert (standardmäßig 30 Sekunden, mit dem Wert 0 deaktiviert), begrenzt, wie oft ein Formular gesendet werden darf, nicht wie lange Besucher dafür brauchen dürfen. Der zeitbasierte Spamschutz weist unplausibel schnelle Übermittlungen ab; in diesem Fall meldet er einen Fehler, auf den Besucher reagieren können, und ein sofortiges erneutes Senden ist erfolgreich. Es gehen also keine Eingaben verloren und es wird keine Frist gesetzt. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Unterstützt | Das Plugin erzeugt keine sich bewegenden, blinkenden, scrollenden oder sich automatisch aktualisierenden Inhalte. Die einzigen Animationen sind der Ladeindikator während einer laufenden Übermittlung und das Einblenden der Bestätigungsmeldung im Adminbereich; beide werden unter `prefers-reduced-motion: reduce` deaktiviert, und der Ladeindikator wird vom Text „Wird geladen …“ begleitet, sodass seine Bedeutung nicht von der Bewegung abhängt. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden; Sprunglinks und Landmarks auf Seitenebene stellen WordPress und das Theme bereit. Ein Formular ist ein einzelner Bereich der Seite, und seine versteckten Felder – einschließlich der Felder des Spamschutzes – liegen außerhalb der Tab-Reihenfolge. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Die Einstellungsseite gibt ihren Titel als `<h1>` aus, die Seite der Formularübermittlungen mit einer eigenen Überschrift; die Seitentitel im Frontend stammen von WordPress und dem Theme. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge; die visuelle Umsortierung der Beschriftungen wirkt sich nicht darauf aus, da eine Beschriftung nicht fokussierbar ist. Der Fokus wird nie auf den Dokumentkörper zurückgesetzt: Schlägt eine Übermittlung fehl und ist genau ein Feld betroffen, wandert der Fokus in dieses Feld; nach dem Löschen einer Übermittlung im Adminbereich wandert er auf die Löschen-Schaltfläche der Nachbarzeile oder auf die Überschrift der Seite, wenn der letzte Eintrag entfernt wurde. Die Einstellungs-Tabs setzen den Fokus auf den aktiv werdenden Tab und halten inaktive Panels aus der Tab-Reihenfolge heraus. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Im Frontend gibt das Plugin keine Links aus. Im Adminbereich stehen „Kaufen“ und „Mehr Informationen“ direkt unter der Überschrift und dem einleitenden Text ihres Abschnitts, und der Link „Dokumentation“ in der Plugin-Zeile der Plugin-Seite wird durch seinen Kontext dort benannt. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktion beruht auf pfadbasierten oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das Standard-Ereignis `click`/Loslassen; keine Funktion wird beim Herunterdrücken ausgelöst. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name jedes Steuerelements ist seine sichtbare Beschriftung, da der Name aus dem `<label>` stammt, das Autoren im Editor sehen. Die Schaltflächen im Adminbereich erhalten ihren Namen aus ihrem sichtbaren Text. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktion wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und greift nicht in die von WordPress bzw. dem Theme deklarierte Seitensprache ein; alle eigenen Zeichenketten, einschließlich jeder Validierungsmeldung, sind in die Sprache der Website übersetzt. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements findet keine Änderung des Kontexts statt. Die Validierung läuft, wenn ein Feld verlassen oder geändert wird, und fügt lediglich eine Meldung neben diesem Feld ein. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Eine Eingabe ändert keinen Kontext. Die Validierung eines Felds fügt seine Fehlermeldung hinzu oder entfernt sie, ohne den Fokus zu verschieben oder etwas abzusenden. Nach einer erfolgreichen Übermittlung können Besucher weitergeleitet werden, wenn Autoren eine Weiterleitung eingerichtet haben; das folgt aber auf die ausdrückliche Betätigung der Absende-Schaltfläche, nicht auf eine Eingabe. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Unterstützt | Fehler werden als Text neben dem betroffenen Feld benannt, über `aria-describedby` mit ihm verknüpft, und das Feld wird mit `aria-invalid` gekennzeichnet. Ein einzeln geprüftes Feld gibt seine Meldung über eine Live-Region aus, sodass ein leer gelassenes Feld gemeldet wird, ohne zuerst absenden zu müssen. Beim Absenden wird ein ungültiges Formular nie gesendet: Ist ein einzelnes Feld fehlerhaft, wandert der Fokus dorthin, sodass seine Meldung vorgelesen wird; bei mehreren gibt das Plugin eine Zusammenfassung aus, die die Anzahl der ungültigen Felder nennt und sie aufzählt. Fehler, die nur der Server erkennen kann – ein nicht unterstützter Dateityp, eine zu große Datei, ein unvollständig gefülltes getrenntes Datum, eine abgewiesene Spam-Prüfung –, werden als Text zurückgegeben, dem Titel des betroffenen Felds vorangestellt und in einer Alert-Region ausgegeben. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Jedes Feld hat eine Beschriftung, und das Plugin erzeugt das Paar aus `for` und `id`, das beide verbindet. Der Pflichtstatus wird über das native Attribut `required` vermittelt. Wo das Format eines Felds nicht offensichtlich ist, tragen die Teilfelder eines getrennten Datums zusätzlich zu ihren Beschriftungen Platzhalter wie „TT“ und „MM“; die Beschriftungen bleiben assistiven Technologien auch dann verfügbar, wenn sie visuell verborgen sind. Jedes Feld auf der Einstellungsseite hat eine Beschriftung und eine über `aria-describedby` verknüpfte Beschreibung. Das Plugin vergibt außerdem automatisch `autocomplete`-Werte anhand der Beschriftung eines Felds und lässt Autoren sie korrigieren – eine Anweisung an den Browser statt an Besucher, die das Eintippen bekannter Daten ganz erspart. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Unterstützt | Ein Formular ist ein einzelner Schritt und fragt nichts doppelt ab. Eingegebene Werte bleiben erhalten, wenn die Validierung fehlschlägt, sodass nichts erneut eingegeben werden muss, und die `autocomplete`-Unterstützung lässt den Browser Informationen einsetzen, die Besucher an anderer Stelle schon angegeben haben. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Das Frontend besteht vollständig aus nativen HTML-Steuerelementen, deren Name, Rolle und Wert der Browser bereitstellt; das Plugin ergänzt `aria-describedby` und `aria-invalid`, um den Validierungszustand zu vermitteln, und hält `aria-invalid` aktuell, wenn ein Feld wieder gültig wird. Das Tab-Widget im Adminbereich stellt `role="tablist"`, `role="tab"` mit `aria-selected` sowie `role="tabpanel"` mit `aria-labelledby` und `hidden` bereit, synchron gehalten von seinem Skript. Der Beschäftigt-Zustand der Löschen-Schaltfläche wird mit `aria-disabled` ausgezeichnet, und die Schaltfläche reagiert während ihrer Anfrage tatsächlich nicht mehr, sodass der ausgezeichnete Zustand dem Verhalten entspricht. Diese Attribute bleiben auch erhalten, wenn WordPress das gespeicherte Markup filtert, und sind damit unabhängig von den Rechten der speichernden Person vorhanden. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Videos. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin beschränkt weder Inhalte noch Oberfläche auf eine einzelne Bildschirmausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Unterstützt | Felder, die Informationen über den Nutzer erfassen, können den passenden `autocomplete`-Wert tragen, und das Plugin hilft aktiv dabei: Es vergleicht die Beschriftung eines Felds mit einer Liste bekannter Beschriftungen und vergibt automatisch einen passenden Wert, bietet Autoren die vollständige Liste der HTML-Autocomplete-Werte zur Auswahl an und unterstützt einen Abschnittsnamen, damit ein Formular zwei verschiedene Adressen abfragen kann. Der `autocomplete`-Wert bleibt beim Filtern des gespeicherten Markups erhalten. Da Autoren die Felder zusammenstellen, hängt das Ergebnis davon ab, dass sie den Vorschlag übernehmen oder korrigieren (siehe [Abhängigkeiten](#dependencies)). |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Für die Frontend-Ausgabe legt das Plugin keine Textfarben fest; Beschriftungen, Werte und Fehlermeldungen erben die Textfarbe des Themes, und die mitgelieferten Stylesheets für Twenty Twenty-Two bis Twenty Twenty-Five ändern nur Rahmen und Abstände. Im Adminbereich erreichen die Statusfelder der Vergleichstabelle etwa 5,7:1 und 5,8:1 für dunklen Text auf Grün und Grau sowie 4,9:1 für weißen Text auf Rot, die Löschen-Schaltfläche etwa 4,55:1 – alle über dem Minimum von 4,5:1. Die übrige Admin-Oberfläche übernimmt die Farbpalette der WordPress-Administration. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Für die Frontend-Ausgabe legt das Plugin keine festen Pixel-Schriftgrößen fest; die einzigen Schriftgrößenangaben sind relative Werte in den mitgelieferten Theme-Stylesheets. Feld-Container sind Flexbox-Spalten, die mit ihrem Inhalt wachsen, sodass eine höher werdende Beschriftung oder Fehlermeldung nicht abgeschnitten wird. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Aller Text ist echter Text; das Plugin verwendet keine Bilder von Text. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Felder im Frontend sind fluide und brechen um, statt zu scrollen; die einzigen festen Breiten haben die schmalen Zahlenfelder eines getrennten Datums, die deutlich unter 320 px passen. Im Adminbereich scrollt das einzige breite Element – die Vergleichstabelle – innerhalb seines eigenen Containers, sodass die Seite selbst nie horizontal scrollt. Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Das eigene Stylesheet des Plugins zeichnet keine Rahmen für Steuerelemente und überlässt sie dem Theme. Wo ein mitgeliefertes Theme-Stylesheet einen Rahmen setzt, verwendet es `#949494`, was gegen Weiß etwa 3,03:1 erreicht und damit das Minimum von 3:1 erfüllt. Fokus-Indikatoren werden an keiner Stelle überschrieben (siehe 2.4.7). Im Adminbereich erreicht der Rahmen der Löschen-Schaltfläche etwa 4,7:1 gegen die Zeile dahinter. |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Das Plugin legt weder Zeilenhöhe noch Zeichen- oder Wortabstand fest, und kein Container hat eine feste Höhe, die Text bei erhöhten Abständen abschneiden würde. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Unterstützt | Das Plugin fügt keine eigenen Inhalte bei Hover oder Fokus hinzu; die Hilfe-Schaltflächen neben den Feldattributen im Block-Editor nutzen die Tooltips der Standardkomponenten von WordPress, deren Verhalten von WordPress bereitgestellt wird. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Umfangs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Im Frontend gibt das Plugin keine eigenen Überschriften aus; Beschriftungen beschreiben ihr Feld, und ein Formular kann einen Namen erhalten, der assistiven Technologien zur Verfügung steht, sodass ein Screenreader mehrere Formulare auf einer Seite unterscheiden kann. Die Einstellungsseite ist in beschreibende Überschriften gegliedert, ihre Tabs sind benannt, und die Spalten der Vergleichstabelle werden durch echte Tabellenkopfzellen benannt. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Plugin unterdrückt keinen Fokus-Indikator – in seinen Stylesheets, auch in den mitgelieferten Theme-Stylesheets, findet sich kein `outline: none` –, sodass jedes Steuerelement den Indikator zeigt, den im Frontend das Theme und im Adminbereich WordPress bereitstellt. Die Fokus-Indikatoren im Frontend stammen letztlich vom Theme (siehe [Abhängigkeiten](#dependencies)). |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Das Plugin fügt keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente über fokussierbaren Steuerelementen hinzu. Meldungen werden in den Dokumentfluss neben dem Feld oder am Ende des Formulars eingefügt, nicht darüber. Die Bestätigungsmeldung im Adminbereich erscheint in der unteren Ecke und verdeckt kein Formularelement. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Unterstützt | Im Frontend gibt es keine Interaktion durch Ziehen. Im Block-Editor lässt sich die Reihenfolge der Optionen eines Auswahlfelds über Schaltflächen statt durch Ziehen ändern, und Blöcke selbst können über die Standard-Schaltflächen und Tastenkürzel des Block-Editors umsortiert werden. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Das Plugin verändert die Größe der ausgegebenen nativen Steuerelemente nicht, was die Ausnahme dieses Kriteriums für Benutzeragenten abdeckt, und jede Checkbox sowie jeder Radiobutton ist zusätzlich mit einem klickbaren `<label>` gekoppelt, das die Zielfläche vergrößert. Die Schaltflächen im Adminbereich verwenden die Standardgrößen von WordPress. |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin zeichnet keine Passagen in einer von der Seite abweichenden Sprache aus; seine eigenen Zeichenketten sind in die Sprache der Website übersetzt. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Die Einstellungsseite zeigt ihre Tabs und Abschnitte bei jedem Aufruf in derselben Reihenfolge, und jedes Formular ordnet seine Felder bei jedem Besuch konsistent in der von Autoren festgelegten Reihenfolge an. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Alle Felder desselben Typs werden aus derselben Vorlage erzeugt, sodass dieselbe Funktion auf einer Website überall gleich dargestellt wird: Fehlermeldungen verwenden pro Prüfregel eine Formulierung, und die Kennzeichnung von Pflichtfeldern ist bei jedem Feld identisch. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Hilfe wird konsistent angeboten: eine Beschreibung unter jedem Feld der Einstellungsseite, eine Hilfe-Schaltfläche neben jedem Attribut im Block-Editor und ein Link „Dokumentation“ in der Plugin-Zeile der Plugin-Seite. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Unterstützt | Meldungen benennen, was falsch ist, und nicht nur, dass etwas falsch ist: Sie unterscheiden ein leeres Pflichtfeld, einen zu kurzen oder zu langen Wert, einen zu niedrigen oder zu hohen Wert, eine ungültige E-Mail-Adresse, URL, ein ungültiges Datum oder eine ungültige Zeit, eine nicht gewählte Option, eine nicht angehakte Checkbox, einen nicht unterstützten Dateityp und eine zu große Datei. Ein nur teilweise gefülltes getrenntes Datum wird mit „Bitte fülle alle Datumsfelder aus.“ beantwortet. In Form Block Pro können Autoren die allgemeine Meldung eines Felds durch eine spezifischere ersetzen. |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen oder finanziellen Transaktionen durch und speichert keine Daten, für deren Pflege Besucher verantwortlich sind. Es übermittelt eine Nachricht an die Website-Betreiber; wofür ein Formular genutzt wird, entscheiden die Autoren. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Unterstützt | Für das Absenden eines Formulars verlangt das Plugin keinen kognitiven Funktionstest: Es verwendet kein CAPTCHA und kein Rätsel. Sein Spamschutz arbeitet mit versteckten Feldern und Zeitmessung und verlangt von Besuchern nichts, und die `autocomplete`-Unterstützung erlaubt es, Informationen vom Browser einsetzen zu lassen, statt sie zu erinnern und einzutippen. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Änderungen, die den Fokus nicht verschieben, werden über Live-Regionen ausgegeben, die von Anfang an in der Seite vorhanden sind, sodass eine Meldung beim Erscheinen zuverlässig gemeldet wird: eine Region mit `role="status"` für Lade- und Erfolgsmeldungen und eine mit `role="alert"` für Fehler, die der Server zurückgibt. Ein einzeln geprüftes Feld gibt seine eigene Fehlermeldung aus, während bei einer Übermittlung mit mehreren ungültigen Feldern stattdessen eine Zusammenfassung ausgegeben wird, sodass sich die Meldungen nicht überlagern. Im Adminbereich wird das Ergebnis des Löschens einer Übermittlung über eine höfliche Live-Region gemeldet. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Jedes Feld stellt seine Beschriftung, seinen Pflichtstatus und seinen Validierungszustand über native Semantik und ARIA bereit, und Validierungsergebnisse werden über Live-Regionen ausgegeben (siehe 4.1.3). Ein Formular kann einen Namen erhalten, sodass es von anderen Formularen auf der Seite unterscheidbar ist. |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne feste Schriftgrößen; im Frontend legt das Plugin keine eigenen Textfarben fest, und seine Farben im Adminbereich überschreiten das Kontrastminimum (siehe 1.4.3). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Der Validierungszustand wird stets durch Text vermittelt, nie allein durch Farbe (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Töne. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Töne. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass Nutzer Sprache erzeugen. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Alle Funktionen sind mit nativen Steuerelementen per Tastatur bedienbar, Checkboxen und Radiobuttons haben Zielflächen in Beschriftungsgröße, und die `autocomplete`-Unterstützung verringert die nötige Tipparbeit (siehe 2.1.1 und 2.5.8). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an die körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Fehlermeldungen benennen das Problem in einfacher Sprache und weisen das betroffene Feld aus, Werte bleiben bei einer fehlgeschlagenen Übermittlung erhalten, für das Ausfüllen gilt kein Zeitlimit, es ist kein CAPTCHA zu lösen, und Bewegung wird reduziert, wenn Nutzer dies bevorzugen. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die Nutzerdaten anders offenlegen würde als die Standard-Steuerelemente. Sein Spamschutz benötigt keine persönlichen Eingaben von Besuchern, und übermittelte Daten werden nur dorthin gesendet und gespeichert, wo die Website-Betreiber es eingerichtet haben. |

### Kapitel 5: Allgemeine Anforderungen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 5.1 Geschlossene Funktionalität | Nicht anwendbar | Das Plugin läuft in einem allgemeinen Webbrowser und bietet keine geschlossene Funktionalität. |
| 5.2 Aktivierung von Funktionen zur Barrierefreiheit | Nicht anwendbar | Es gibt keine Plattformfunktionen zur Barrierefreiheit zu aktivieren. |
| 5.3 Biometrie | Nicht anwendbar | Das Plugin verwendet keine Biometrie. |
| 5.4 Erhaltung von Informationen zur Barrierefreiheit bei Konvertierung | Nicht anwendbar | Das Plugin führt keine Formatkonvertierung von Nutzerinhalten durch. |
| 5.5 Bedienbare Teile | Unterstützt | Bedienbare Teile sind native Steuerelemente; siehe WCAG 2.1.1 und 2.5.x. |
| 5.6 Sperr- oder Umschaltsteuerungen | Nicht anwendbar | Das Plugin stellt keine Sperr- oder Umschaltzustände (z. B. Feststelltaste) dar. |
| 5.7 Tastenwiederholung | Nicht anwendbar | Das Verhalten der Tastenwiederholung ist eine Funktion der Plattform bzw. Hardware. |
| 5.8 Akzeptanz von Doppelanschlägen | Nicht anwendbar | Funktion der Plattform bzw. Hardware. |
| 5.9 Gleichzeitige Nutzeraktionen | Unterstützt | Keine Bedienung erfordert gleichzeitige Nutzeraktionen. |

### Kapitel 6: IKT mit wechselseitiger Sprachkommunikation

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 6 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine wechselseitige Sprachkommunikation. |

### Kapitel 7: IKT mit Videofunktionen

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 7 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Videofunktionen: Es gibt Video weder wieder, noch nimmt es Video auf, überträgt oder verarbeitet es. |

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
| 9.5 Keine Beeinträchtigung | Unterstützt | Das Plugin verwendet keine ausschließlich farbbasierten Hinweise, kein Blitzen, keine Töne und keine Zeitvorgaben, die sich auf die übrige Seite auswirken würden. Seine Live-Regionen gehören jeweils zu ihrem Formular, sodass mehrere Formulare auf einer Seite nicht die Meldungen der anderen ausgeben. |
| 9.6 WCAG-Konformitätsanforderungen | Unterstützt | Die Ausgabe erfüllt die Konformitätsanforderungen der WCAG 2.2 für die Stufen A und AA. |

### Kapitel 10: Nicht-Web-Dokumente

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 10 (alle Abschnitte) | Nicht anwendbar | Das Plugin erzeugt keine Nicht-Web-Dokumente (z. B. PDF- oder Office-Dateien). Die Benachrichtigungs-E-Mail, die es versendet, ist reiner Text oder einfaches HTML mit den übermittelten Werten als Definitionsliste. |

### Kapitel 11: Software

Die Benutzeroberfläche des Plugins (Einstellungsseite, Seite der Formularübermittlungen und
Steuerelemente im Block-Editor) ist webbasierte Software, die in der WordPress-Administration
dargestellt wird. Anforderungen, die WCAG entsprechen, sind im
[WCAG-2.2-Bericht](#wcag-2-2-report) abgebildet.

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin legt keine festen Schriftarten fest und respektiert die Einstellungen der Plattform: Es deaktiviert die Animation des Ladeindikators und die Übergänge der Meldungen im Adminbereich unter `prefers-reduced-motion: reduce`. Ansonsten übernimmt die Admin-Oberfläche die Umgebung der WordPress-Administration. |
| 11.8 Autorenwerkzeuge | Unterstützt | Die Blöcke des Plugins laufen im Block-Editor von WordPress, einem Autorenwerkzeug, und sind so gebaut, dass ein barrierefreies Ergebnis der Standardfall ist. Autoren geben eine Beschriftung an, und das Plugin erzeugt beim Rendern das Paar aus `for` und `id`, das sie mit dem Steuerelement verbindet, sodass die Verknüpfung nicht von Hand zerstört werden kann; der Pflichtstatus wird zum nativen Attribut `required`; ein passender `autocomplete`-Wert wird automatisch aus der Beschriftung vorgeschlagen; und der Editor warnt, wenn die Beschriftung eines Felds nicht mehr zu seinem Namen passt. Der Block „Feldgruppe“ steht bereit, um zusammengehörende Felder wie eine Gruppe von Radiobuttons zu bündeln. In der Verantwortung der Autoren bleiben die Formulierung von Beschriftungen und Legenden sowie die Frage, ob sie zusammengehörende Felder überhaupt gruppieren (siehe [Abhängigkeiten](#dependencies)). |

### Kapitel 12: Dokumentation und Support-Dienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 12.1.1 Merkmale zu Barrierefreiheit und Kompatibilität | Unterstützt | Diese Dokumentation beschreibt die Funktionen des Plugins, einschließlich dieses Accessibility Conformance Reports und einer eigenen Seite zu den Werkzeugen für Barrierefreiheit, die Autoren eines Formulars nutzen sollten. |
| 12.1.2 Barrierefreie Dokumentation | Unterstützt | Die Dokumentation wird als HTML unter docs.epiph.yt veröffentlicht. |
| 12.2.2 Informationen zu Merkmalen der Barrierefreiheit und Kompatibilität | Unterstützt | Verhalten, das für die Barrierefreiheit relevant ist, wird hier, im Kapitel [Barrierefreiheit](/de/form-block/accessibility) und in der Readme-Datei des Plugins dokumentiert. |
| 12.2.3 Effektive Kommunikation | Unterstützt | Support wird über das Support-Forum auf WordPress.org und die Kanäle des Herstellers unter epiph.yt angeboten. |
| 12.2.4 Barrierefreie Dokumentation (Support) | Unterstützt | Die Support-Dokumentation wird als barrierefreies HTML bereitgestellt. |

### Kapitel 13: IKT für Relais- oder Notdienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 13 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Relais- oder Notdienst-Funktionalität. |

## Abhängigkeiten {#dependencies}

Die Barrierefreiheit eines Formulars, wie es Besuchern schließlich erscheint, hängt von Faktoren ab,
die das Plugin nicht kontrollieren kann.

Form Block folgt den etablierten WordPress-Konventionen für barrierefreie Themes und erwartet vom
aktiven Theme:

- eine **`.screen-reader-text`-Hilfsklasse**, die Inhalte visuell verbirgt. Das Plugin verwendet
  diese Klasse für den Namen eines Formulars, für die Beschriftungen eines getrennten Datumsfelds,
  wenn Autoren sie ausblenden, und für die Zusammenfassung, die die Anzahl der ungültigen Felder
  nennt. Ein Theme, das die Klasse nicht definiert, zeigt diesen Text als gewöhnlichen Inhalt –
  weniger elegant, aber es geht nichts verloren;
- **sichtbare Fokus-Indikatoren** für Formularelemente. Das Plugin unterdrückt keinen davon – in
  seinen Stylesheets findet sich nirgends `outline: none` –, überschreibt aber auch die des Themes
  nicht;
- **ausreichenden Kontrast** für Text und Rahmen von Steuerelementen. Für seine Frontend-Ausgabe legt
  das Plugin keine Textfarben fest, sodass Beschriftungen, Werte und Fehlermeldungen die Farben des
  Themes erben. Für Twenty Twenty-Two bis Twenty Twenty-Five liefert es angepasste Stylesheets mit.

Über das Theme hinaus hängt die Barrierefreiheit eines Formulars davon ab, wie Autoren es aufbauen:

- die **Formulierung von Beschriftungen, Legenden und eigenen Fehlermeldungen**, die das Plugin nicht
  liefern kann. Eine Beschriftung, die ihr Feld nicht beschreibt, lässt sich nicht automatisch
  korrigieren;
- ob **zusammengehörende Felder gruppiert** werden. Das Plugin erzeugt für ein getrenntes Datumsfeld
  ein `<fieldset>` mit `<legend>`, eine Gruppe zusammengehörender Radiobuttons oder Checkboxen wird
  aber nur gruppiert, wenn Autoren sie in einen Block „Feldgruppe“ fassen;
- der **`autocomplete`-Wert** jedes Felds. Das Plugin schlägt anhand der Beschriftung einen Wert vor
  und Autoren können ihn anpassen, aber nur sie wissen, wonach ein Feld wirklich fragt;
- ob ein Feld als **Pflichtfeld** gekennzeichnet ist und ob das Formular mehr abfragt als nötig;
- **andere Plugins** auf der Website, die Markup um das Formular herum oder darin ergänzen können.

Dieser Bericht beschreibt das eigene Markup und die eigene Oberfläche des Plugins. Für die
Barrierefreiheit ihrer Website insgesamt bleiben die Website-Betreiber verantwortlich.

## Bekannte Probleme

Zum Zeitpunkt dieses Berichts sind keine offenen Probleme mit der Barrierefreiheit bekannt.

## Rechtlicher Hinweis

Dieser Accessibility Conformance Report ist eine selbst erklärte Aussage zur Konformität des Produkts
mit den oben aufgeführten Standards, zum Datum des Berichts und für die angegebene Version. Er ist
weder eine Garantie noch eine Zusicherung rechtlicher Konformität. Die Barrierefreiheit wird nach
bestem Wissen bewertet und kann sich zwischen Versionen ändern.
