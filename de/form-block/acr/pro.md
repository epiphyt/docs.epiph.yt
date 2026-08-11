# Accessibility Conformance Report für Form Block Pro

**Name des Produkts/Version:** Form Block Pro, Version 1.5.1

**Datum des Berichts:** 12. August 2026

**Produktbeschreibung:** Form Block Pro ist eine kommerzielle Erweiterung des kostenlosen
WordPress-Plugins Form Block. Es ergänzt mehrstufige Formulare (einen Abschnittsblock mit
Fortschrittsanzeige), wiederholbare Feldgruppen (einen Wiederholungsblock), einen Block für die
Einverständniserklärung, bedingte Felder, die abhängig von anderen Antworten erscheinen und
verschwinden, Datei-Uploads per Drag-and-drop, das Vorbelegen von Feldern aus URL-Parametern sowie
zusätzliche Feldeigenschaften wie eine eigene Fehlermeldung und eine Beschreibung, die assistiven
Technologien zugänglich gemacht wird. In der Administration ergänzt es unter
**Werkzeuge → Formularübermittlungen** die Aktion „Antworten“ sowie einen Bereich für die
Einverständniserklärung und die Lizenz unter **Einstellungen → Form Block**.

**Kontaktinformationen:** Matthias Kittsteiner, https://epiph.yt/kontakt/

**Hinweise:** Dieser Bericht behandelt ausschließlich die eigene Benutzeroberfläche des Plugins
Form Block Pro – das Markup, das seine Blöcke und Filter im Frontend ergänzen, das Verhalten seiner
Skripte, seine Steuerelemente im Block-Editor und die Admin-Seiten, die es erweitert. Er behandelt
**nicht** die umgebende WordPress-Administration, das aktive Theme, andere Plugins oder die
Beschriftungen, Legenden und Meldungen, die Autoren selbst eingeben. Form Block Pro setzt das
kostenlose Plugin Form Block voraus, das das `<form>`-Element, die Felder, ihre Beschriftungen und
die Validierung bereitstellt; die dort erfüllten Anforderungen sind im
[Accessibility Conformance Report für Form Block](/de/form-block/acr/free) dokumentiert und werden
hier nicht wiederholt. Da ein Formular Feld für Feld und Schritt für Schritt von Autoren
zusammengesetzt wird, hängt das Ergebnis zudem von deren Entscheidungen ab (siehe
[Abhängigkeiten](#dependencies)).

**Verwendete Bewertungsmethoden:** Manuelle Tests ausschließlich mit der Tastatur; Screenreader-Tests
mit VoiceOver + Safari unter macOS 26. Manuelle Kontrastprüfungen. Getestet mit WordPress 7.0 und dem
Theme Twenty Twenty-Five. Die Bewertungen wurden zusätzlich mit dem Quellcode des Plugins
(Version 1.6.0) abgeglichen.

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
| [1.1.1 Nicht-Text-Inhalt](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Unterstützt | Die Frontend-Ausgabe des Plugins besteht aus Text und nativen Formularelementen. Seine beiden dekorativen Grafiken tragen keine eigene Information und sind vor assistiven Technologien verborgen: Die `<progress>`-Leiste wiederholt nur die ohnehin im Text genannte Schrittzahl und ist mit `aria-hidden="true"` ausgezeichnet, und das Häkchen bzw. Ausrufezeichen an einem Schritt der Fortschrittsanzeige begleitet visuell verborgenen Text, der denselben Zustand benennt. Die Symbole zum Hochladen und Löschen im Drag-and-drop-Bereich sind `aria-hidden`-SVGs neben einer echten Schaltfläche und einer benannten Entfernen-Schaltfläche. In der Administration ist das Schließen-Symbol des Antwort-Dialogs `aria-hidden` und wird vom Screenreader-Text „Schließen“ begleitet. |
| [1.2.1 Nur-Audio und Nur-Video (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine reinen Audio- oder Videoinhalte. |
| [1.2.2 Untertitel (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Nicht anwendbar | Das Plugin erzeugt keine aufgezeichneten Medien. |
| [1.3.1 Info und Beziehungen](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Unterstützt | Jeder Schritt eines mehrstufigen Formulars ist ein `role="group"`-Bereich, der nach seinem Abschnittstitel benannt ist, sodass ein Screenreader ansagt, in welchem Teil des Formulars er sich befindet. Die Fortschrittsanzeige ist eine geordnete Liste, deren Einträge echte Schaltflächen sind; der aktuelle Schritt trägt `aria-current="step"`, und abgeschlossene, fehlerhafte sowie noch nicht erreichbare Schritte tragen ihren Zustand zusätzlich zu einem Symbol als Text. Jedes Element einer Wiederholung ist eine `role="group"` mit dem Namen „Element *n*“, und die zugehörige Schaltfläche heißt „Element *n* entfernen“, sodass mehrere gleichartige Zeilen unterscheidbar sind. Wird ein Element hinzugefügt oder entfernt, schreibt das Plugin den gesamten Referenzgraph dieses Elements neu – jedes `id`, `for`, `aria-describedby` und `aria-errormessage` –, sodass keine zwei Elemente denselben Bezeichner tragen und jede Beschreibung und Fehlermeldung auf das Feld zeigt, zu dem sie gehört. Eine im Editor hinterlegte Feldbeschreibung wird genau einmal pro Feld eingefügt und bei einer Feldgruppe am `<fieldset>` verankert. Der Block für die Einverständniserklärung gibt eine echte Checkbox mit erzeugtem `for`/`id`-Paar aus; die Pflichtfeld-Markierung ist `aria-hidden`, da der Zustand vom nativen `required`-Attribut getragen wird. |
| [1.3.2 Bedeutungstragende Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Unterstützt | Abschnitte, Wiederholungselemente und Felder werden in der Reihenfolge ausgegeben, in der Autoren sie platziert haben; das Plugin ordnet visuell nichts um. Ein gerade nicht angezeigter Schritt ist nicht nur visuell, sondern auch im Accessibility-Baum ausgeblendet, sodass die Lesereihenfolge stets dem entspricht, was auf dem Bildschirm steht. Der Drag-and-drop-Bereich wird im Container seines Felds vor dem Datei-Eingabefeld eingefügt, für das er steht, und seine Schaltfläche benennt sich nach diesem Feld – er ist also an der Stelle verständlich, an der er begegnet. |
| [1.3.3 Sensorische Eigenschaften](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Unterstützt | Keine Anweisung stützt sich allein auf Form, Größe, visuelle Position oder Ton. Schritte der Fortschrittsanzeige werden durch ihre Nummer und ihren Titel identifiziert, nicht durch ihre Position in der Reihe, und der Drag-and-drop-Bereich benennt seine Alternative in Worten („Dateien hierher ziehen und ablegen oder Dateien durchsuchen“). |
| [1.4.1 Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Unterstützt | Die Zustände eines Schritts der Fortschrittsanzeige werden nie allein durch Farbe vermittelt. Ein abgeschlossener Schritt zeigt ein Häkchen und das visuell verborgene Wort „abgeschlossen“, ein Schritt mit Validierungsfehlern ein Ausrufezeichen und den Text „enthält Fehler“, und ein noch nicht erreichbarer Schritt ist mit `aria-disabled` ausgezeichnet und trägt den Text „noch nicht verfügbar“. Bedingte Felder werden im Block-Editor zusätzlich zu ihrer Umrandung mit dem Textzusatz „Bedingt“ gekennzeichnet. |
| [1.4.2 Audio-Steuerung](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Nicht anwendbar | Das Plugin spielt kein Audio ab. |
| [2.1.1 Tastatur](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Unterstützt | Jedes Steuerelement, das das Plugin ergänzt, ist eine native `<button>`: die Zurück-/Weiter-Navigation eines mehrstufigen Formulars, jeder Schritt der Fortschrittsanzeige, die Schaltflächen zum Hinzufügen und Entfernen von Wiederholungselementen sowie die Schaltfläche „Dateien durchsuchen“ des Drag-and-drop-Bereichs. Dateien lassen sich daher vollständig mit der Tastatur auswählen; das Datei-Eingabefeld, für das der Ablagebereich steht, ist aus der Tabulator-Reihenfolge genommen und kann so kein unsichtbarer Halt werden. In der Administration ist der Antwort-Dialog vollständig mit der Tastatur bedienbar, einschließlich seines Rich-Text-Editors. |
| [2.1.2 Keine Tastaturfalle](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Unterstützt | Im Frontend fügt das Plugin keine Logik hinzu, die den Fokus einfängt; der Fokus kann jedes Steuerelement mit den Standardtasten wieder verlassen. Der Antwort-Dialog in der Administration führt den Fokus bewusst im Kreis, wie es sich für einen modalen Dialog gehört, und lässt sich jederzeit mit Escape oder über seine Schaltflächen zum Schließen, Abbrechen und Absenden verlassen – jede davon schließt den Dialog, gibt den Fokus an das auslösende Steuerelement zurück und hebt den `inert`-Zustand der dahinterliegenden Seite wieder auf. |
| [2.1.4 Tastenkürzel mit einzelnen Zeichen](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Nicht anwendbar | Das Plugin implementiert keine Tastenkürzel aus einzelnen Zeichen. Enter und Escape werden nur in ihrer üblichen Rolle und nur dann verwendet, wenn die betreffende Komponente den Fokus hat. |
| [2.2.1 Zeiteinteilung anpassbar](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Nicht anwendbar | Das Plugin setzt keine Zeitbegrenzung: Ein mehrstufiges Formular kann in beliebigem Tempo ausgefüllt werden, Schritte laufen nicht ab, und Werte aus früheren Schritten bleiben im Dokument erhalten. |
| [2.2.2 Pausieren, Stoppen, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Unterstützt | Das Plugin erzeugt keine blinkenden, scrollenden oder sich automatisch aktualisierenden Inhalte. Seine einzige Bewegung ist die Überblendung zwischen zwei Schritten und das Wachsen der Fortschrittsanzeige; beide laufen einmal pro Nutzeraktion und werden vollständig abgeschaltet, wenn `prefers-reduced-motion: reduce` gesetzt ist. |
| [2.3.1 Dreimaliges Blitzen oder weniger](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Nicht anwendbar | Das Plugin erzeugt keine blitzenden Inhalte. |
| [2.4.1 Blöcke umgehen](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Unterstützt | Das Plugin führt keine wiederholten Inhaltsblöcke ein, die einen Umgehungsmechanismus erfordern würden. Ein mehrstufiges Formular zeigt jeweils einen Schritt und verkürzt damit eher, was durchlaufen werden muss; die Fortschrittsanzeige steht genau einmal am Anfang des Formulars. |
| [2.4.2 Seite mit Titel versehen](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Unterstützt | Seitentitel werden von WordPress und dem Theme geliefert. Wenn ein mehrstufiges Formular den Dokumenttitel um den aktuellen Schritt ergänzt, kombiniert es den Schrittnamen mit dem eigenen Titel der Seite, statt ihn zu ersetzen, stellt den ursprünglichen Titel beim Zurücksetzen des Formulars wieder her und tut dies nur für das Formular, mit dem Besucher gerade arbeiten. |
| [2.4.3 Fokus-Reihenfolge](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Unterstützt | Die Fokus-Reihenfolge folgt der logischen DOM-Reihenfolge, und der Fokus geht nie an den Dokumentkörper verloren. Bei jedem Schrittwechsel – vorwärts, zurück, über die Fortschrittsanzeige, beim Zurücksetzen des Formulars nach erfolgreicher Übermittlung und wenn eine Abhängigkeit den gerade angezeigten Schritt ausblendet – wandert der Fokus in den Container des Schritts, der sichtbar wird, sodass der Schritt namentlich angesagt wird, bevor sein erstes Feld erreicht ist. Nach dem Entfernen eines Wiederholungselements wandert der Fokus zur Entfernen-Schaltfläche eines benachbarten Elements oder zur Hinzufügen-Schaltfläche; nach dem Entfernen einer Datei aus der Upload-Liste zu einem benachbarten Steuerelement. Ist die Höchstzahl an Wiederholungselementen erreicht, bleibt die Hinzufügen-Schaltfläche an ihrem Platz und erhält `aria-disabled`, statt ausgeblendet zu werden – der Fokus wird also nicht unter den Fingern entzogen. In der Administration wandert der Fokus beim Öffnen des Antwort-Dialogs in diesen hinein und beim Schließen zurück auf den Link „Antworten“, der ihn geöffnet hat. |
| [2.4.4 Linkzweck (im Kontext)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Unterstützt | Das Plugin gibt im Frontend keine eigenen Links aus; ein Link in einer Einverständniserklärung stammt vom Website-Betreiber. In der Administration ist die Aktion „Antworten“ durch die Zeile der Übermittlung benannt, zu der sie gehört. |
| [2.5.1 Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Nicht anwendbar | Keine Funktionalität stützt sich auf pfadbasierte oder Mehrpunkt-Gesten. |
| [2.5.2 Abbruch der Zeigereingabe](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Unterstützt | Steuerelemente reagieren auf das Standard-Ereignis `click`/Loslassen; keine Funktion wird beim Herunterdrücken ausgelöst. Das Ablegen einer Datei wird erst beim Loslassen abgeschlossen und lässt sich abbrechen, indem der Zeiger den Ablagebereich verlässt. |
| [2.5.3 Beschriftung im Namen](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Unterstützt | Der zugängliche Name jedes Steuerelements beginnt mit seinem sichtbaren Text. Die Upload-Schaltfläche zeigt „Dateien durchsuchen“ und heißt „Dateien durchsuchen für *Feld*“; ein Schritt der Fortschrittsanzeige ist nach seiner Nummer und seinem Titel benannt, gefolgt von seinem Zustand; die Entfernen-Schaltfläche einer Wiederholung heißt „Element *n* entfernen“ neben ihrem sichtbaren Symbol. |
| [2.5.4 Betätigung durch Bewegung](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Nicht anwendbar | Keine Funktionalität wird durch Geräte- oder Nutzerbewegung bedient. |
| [3.1.1 Sprache der Seite](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Unterstützt | Das Plugin setzt kein `lang`-Attribut und beeinflusst nicht die von WordPress/dem Theme deklarierte Seitensprache; alle eigenen Zeichenketten, einschließlich sämtlicher Ansagen, sind in die Website-Sprache lokalisiert. |
| [3.2.1 Bei Fokus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Unterstützt | Beim Fokussieren eines Steuerelements erfolgt keine Kontextänderung. Das Betreten eines Schritts oder das Fokussieren eines Schritts der Fortschrittsanzeige löst für sich genommen nichts aus. |
| [3.2.2 Bei Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Unterstützt | Das Ändern eines Werts sendet nie das Formular ab und wechselt nie den Schritt. Das Bestätigen einer Auswahl in einem `<select>` mit Enter ist ausdrücklich von der Tastenkombination ausgenommen, die einen Schritt weiterschaltet – eine Auswahl bleibt also eine Auswahl. Ein bedingtes Feld, das erscheint oder verschwindet, verändert den Inhalt des aktuellen Schritts, verschiebt aber weder den Fokus noch sendet es etwas ab, und die Änderung wird angesagt (siehe 4.1.3). Das Vorbelegen von Feldern aus URL-Parametern geschieht einmalig, bevor Besucher mit dem Formular arbeiten. |
| [3.3.1 Fehlererkennung](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Unterstützt | Wird ein Schritt validiert, erhält jedes ungültige Feld `aria-invalid` und wird über `aria-describedby` mit seiner Meldung verknüpft, bevor sich der Fokus überhaupt bewegt – die Meldung wird also gemeinsam mit dem Feld vorgelesen. Ist genau ein Feld fehlerhaft, wandert der Fokus dorthin; sind es mehrere, überlässt das Plugin der Zusammenfassung des kostenlosen Plugins das Wort, statt den Fokus an sich zu ziehen, sodass Besucher erfahren, wie viele Felder Aufmerksamkeit brauchen. Ein Schritt mit Fehlern wird in der Fortschrittsanzeige mit Text und Symbol markiert, sodass sich das Problem auch später wiederfinden lässt. Wird ein Wiederholungselement entfernt oder ein Schritt verlassen, werden Fehlermeldungen und die auf sie zeigenden `aria-describedby`-Verweise gemeinsam entfernt, sodass kein Verweis ins Leere führt. |
| [3.3.2 Beschriftungen oder Anweisungen](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Unterstützt | Die Beschriftungen stammen vom kostenlosen Plugin; Form Block Pro ergänzt Anweisungen und entfernt niemals eine Beschriftung. Ein Feld kann eine Beschreibung erhalten, die über `aria-describedby` verknüpft wird, eine eigene Fehlermeldung anstelle der allgemeinen sowie einen Pflichtfeld-Zustand, der über den Drag-and-drop-Upload hinweg erhalten und beim Wiedereinblenden eines bedingten Felds wiederhergestellt wird. Der Ablagebereich benennt in Worten, was er annimmt und wie er ohne Ziehen zu bedienen ist. In der Administration hat jede Einstellung eine Beschriftung und eine über `aria-describedby` verknüpfte Beschreibung, einschließlich des Hinweises, dass ein gespeicherter Lizenzschlüssel maskiert angezeigt wird. |
| [3.3.7 Redundante Eingabe](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Unterstützt | Ein mehrstufiges Formular fragt nichts zweimal ab. Alle Schritte gehören zu einem einzigen Formular, und jeder Wert bleibt im Dokument, während Besucher zwischen den Schritten wechseln – Vor- und Zurückgehen verliert also keine Antwort, und nichts muss erneut eingegeben werden. Ein durch eine Abhängigkeit ausgeblendetes Feld wird geleert, aber nur, weil es nicht mehr zutrifft. |
| [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Unterstützt | Das Plugin ergänzt native Steuerelemente, wo immer das möglich ist, und macht den Zustand des Übrigen zugänglich. Ein Schrittbereich ist eine benannte `role="group"`; eine Schritt-Schaltfläche trägt `aria-current="step"`, wenn sie die aktuelle ist, und `aria-disabled`, solange sie nicht erreichbar ist, und der Klick-Handler beachtet diesen Zustand, sodass angesagter Zustand und Verhalten übereinstimmen. Ein Abschnitt ohne Titel erhält einen erzeugten Namen, sodass `role="group"` nie namenlos ist und eine Schritt-Schaltfläche nie als bloße Zahl angesagt wird. Die Hinzufügen-Schaltfläche einer Wiederholung trägt bei Erreichen des Maximums `aria-disabled`. Das `<progress>`-Element, dessen Wert eine rein visuelle Skala ist, wird vor assistiven Technologien verborgen, statt eine Zahl zu melden, die dem sichtbaren „Schritt 1 von 3“ widerspricht. In der Administration ist der Antwort-Dialog eine `role="dialog"` mit `aria-modal="true"`, benannt durch seine Überschrift, während alles außerhalb `inert` gesetzt wird; die Rich-Text-Editoren des Dialogs und der Einstellung für die Einverständniserklärung erhalten zugängliche Namen, sodass der iframe, in den Autoren schreiben, nicht namenlos bleibt. |

### Tabelle 2: Erfolgskriterien, Stufe AA

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| [1.2.4 Untertitel (live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Nicht anwendbar | Das Plugin erzeugt keine Live-Medien. |
| [1.2.5 Audiodeskription (aufgezeichnet)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Nicht anwendbar | Das Plugin erzeugt kein aufgezeichnetes Video. |
| [1.3.4 Ausrichtung](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Unterstützt | Das Plugin sperrt weder Inhalt noch Oberfläche auf eine einzelne Anzeigeausrichtung. Die Fortschrittsanzeige wechselt unterhalb von 600 px von einer waagerechten zu einer senkrechten Anordnung, was sich nach der verfügbaren Breite richtet, nicht nach der Geräteausrichtung. |
| [1.3.5 Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Unterstützt | Die `autocomplete`-Werte werden vom kostenlosen Plugin gesetzt und bleiben von allem erhalten, was Form Block Pro ergänzt: Ein Feld behält seinen `autocomplete`-Wert, wenn es in ein neues Wiederholungselement kopiert wird, wenn es von einer Abhängigkeit aus- und wieder eingeblendet wird und wenn es aus einem URL-Parameter vorbelegt wird. |
| [1.4.3 Kontrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Unterstützt | Für seine Frontend-Ausgabe legt das Plugin außerhalb der Fortschrittsanzeige keine Textfarben fest. Dort sind Vorder- und Hintergrundfarbe der Markierung Custom Properties, die auf die Kontrast- und Basisfarben des Themes und danach auf feste Werte (`#1e1e1e` auf `#fff`) zurückfallen, wenn ein Theme keine davon definiert – die Kombination kann also nie zu unformatiertem Text zusammenfallen. Der Fehlerzustand verwendet Weiß auf `#d63638` (ca. 4,7:1) und stellt seine Vordergrundfarbe als Custom Property bereit, sodass eine Website mit geändertem Hintergrund die Kombination erhalten kann. Der Zusatz, der im Block-Editor einen bedingten Block kennzeichnet, verwendet Weiß auf dem Alarmrot des Editors (ca. 5,7:1). Die Admin-Oberfläche übernimmt die Farbpalette der WordPress-Administration. |
| [1.4.4 Textgröße ändern](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Unterstützt | Für seine sichtbare Frontend-Ausgabe setzt das Plugin keine festen Pixel-Schriftgrößen; Fortschrittsanzeige, Schritttitel und Drag-and-drop-Bereich sind mit flexiblen Boxen aufgebaut, die mit ihrem Inhalt wachsen. Bei 200 % Zoom bestätigt. |
| [1.4.5 Bilder eines Textes](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Unterstützt | Sämtlicher Text ist echter Text; das Plugin verwendet keine Bilder von Text. |
| [1.4.10 Umbruch (Reflow)](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Unterstützt | Die Frontend-Ausgabe ist fließend: Die Fortschrittsanzeige ordnet sich auf schmalen Viewports zu einer senkrechten Liste um, Wiederholungselemente und der Ablagebereich brechen um, statt zu scrollen, und kein Container hat eine feste Breite. In der Administration scrollt der Antwort-Dialog in sich selbst, statt Inhalte aus dem Viewport zu drängen. Bei 320 px / 400 % Zoom bestätigt. |
| [1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Unterstützt | Die grafischen Teile der Fortschrittsanzeige sind die einzigen Oberflächengrafiken, die das Plugin zeichnet. Ihre Füllung erbt die Kontrastfarbe des Themes und fällt auf `#1e1e1e` zurück, und die noch nicht erreichte Spur ist ein durchscheinendes Schwarz über dem Seitenhintergrund; die Fehlermarkierung erreicht mit `#d63638` gegen Weiß ca. 4,7:1. Rahmen von Steuerelementen und Fokusindikatoren überschreibt das Plugin nicht (siehe 2.4.7). |
| [1.4.12 Textabstand](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Unterstützt | Für seine Frontend-Ausgabe setzt das Plugin weder Zeilenhöhe noch Buchstaben- oder Wortabstand, und kein Container hat eine feste Höhe, die Text bei vergrößerten Abständen abschneiden würde. |
| [1.4.13 Inhalt bei Hover oder Fokus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Unterstützt | Das Plugin blendet weder bei Hover noch bei Fokus zusätzliche Inhalte ein. Bedingte Felder erscheinen als Reaktion auf einen Wert, nicht auf den Zeiger, und bleiben, bis sich der Wert wieder ändert. |
| [2.4.5 Verschiedene Methoden](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Nicht anwendbar | Dies ist eine Anforderung auf Website-Ebene zum Auffinden von Seiten innerhalb einer Gruppe von Webseiten; sie liegt außerhalb des Anwendungsbereichs der Ausgabe eines einzelnen Plugins. |
| [2.4.6 Überschriften und Beschriftungen](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Unterstützt | Jeder Schritt eines Formulars ist benannt, und dieser Name wird einheitlich für den Schrittbereich, seinen Eintrag in der Fortschrittsanzeige und seine Ansage beim Betreten verwendet. Wiederholungselemente und ihre Entfernen-Schaltflächen sind nummeriert und dadurch unterscheidbar. Eigene Überschriften gibt das Plugin im Frontend nicht aus, weil die passende Überschriftenebene von der Seite rund um das Formular abhängt und dem Plugin nicht bekannt sein kann; der Dialog in der Administration verwendet ein `<h2>`, das zugleich den Dialog benennt. |
| [2.4.7 Fokus sichtbar](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Unterstützt | Das Plugin unterdrückt keinen Fokusindikator – in seinen Stylesheets findet sich nirgends `outline: none` –, sodass jedes Steuerelement den Indikator zeigt, den das Theme im Frontend und WordPress in der Administration bereitstellt. Elemente, die programmgesteuert statt durch Nutzer fokussiert werden, etwa ein Schritt-Container, erhalten `tabindex="-1"` und werden damit fokussierbar, ohne in die Tabulator-Reihenfolge zu geraten. Das Datei-Eingabefeld hinter dem Drag-and-drop-Bereich ist aus der Tabulator-Reihenfolge genommen, damit es nicht ohne sichtbaren Indikator fokussiert werden kann. Die Fokusindikatoren im Frontend stellt letztlich das Theme bereit (siehe [Abhängigkeiten](#dependencies)). |
| [2.4.11 Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Unterstützt | Im Frontend fügt das Plugin keine fixierten Kopfzeilen, Overlays oder schwebenden Elemente über fokussierbaren Steuerelementen hinzu. Der Antwort-Dialog in der Administration hat eine eigene fixierte Kopfzeile; die Steuerelemente in seinem scrollbaren Bereich halten oberhalb Platz frei, sodass ein fokussiertes Element nie darunter geschoben wird. |
| [2.5.7 Ziehende Bewegungen](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Unterstützt | Der Drag-and-drop-Upload ist die einzige Zieh-Interaktion des Plugins, und sie ist für nichts der einzige Weg: Derselbe Bereich enthält eine Schaltfläche „Dateien durchsuchen“, die den Dateidialog öffnet, und eine auf beiden Wegen hinzugefügte Datei wird mit derselben Schaltfläche wieder entfernt. Keine Funktion erfordert Ziehen. |
| [2.5.8 Zielgröße (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Unterstützt | Die vom Plugin ergänzten Steuerelemente sind mindestens 24 × 24 px groß. Die runde Markierung eines Schritts der Fortschrittsanzeige, das kleinste davon, ist mit `max(1.5rem, 24px)` bemessen und behält das Minimum daher auch bei einem Theme, das die Grundschriftgröße verkleinert; die übrigen Steuerelemente sind vom Theme gestaltete Schaltflächen in normaler Größe. |
| [3.1.2 Sprache von Teilen](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Unterstützt | Das Plugin zeichnet keine Passagen in einer anderen Sprache als der Seitensprache aus; seine eigenen Zeichenketten sind in die Website-Sprache lokalisiert. |
| [3.2.3 Konsistente Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Unterstützt | Ein mehrstufiges Formular zeigt seine Schritte bei jedem Aufruf in gleicher Reihenfolge, die Fortschrittsanzeige steht stets am Anfang des Formulars, und die Zurück-/Weiter-Schaltflächen stehen stets an derselben Stelle am Ende eines Schritts. |
| [3.2.4 Konsistente Erkennung](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Unterstützt | Komponenten mit derselben Funktion werden überall gleich benannt: Jeder Schritt jedes Formulars wird mit derselben Formulierung angesagt, jede Wiederholung verwendet dieselben Namen für ihre Hinzufügen- und Entfernen-Schaltflächen, und jeder Upload-Bereich verwendet denselben Schaltflächentext und dieselben Ansagen. |
| [3.2.6 Konsistente Hilfe](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Unterstützt | Die Hilfemechanismen des kostenlosen Plugins bleiben unverändert und werden im selben Stil erweitert: eine Beschreibung unter jedem Feld der Einstellungsseite, eine Hilfe-Schaltfläche neben jeder Eigenschaft im Block-Editor und ein „Dokumentation“-Link in der Plugin-Zeile auf der Plugins-Seite. |
| [3.3.3 Fehlervorschlag](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Unterstützt | Die Meldungen benennen, was nicht stimmt und was zu tun ist. Beim Validieren eines Schritts werden die Validierungsmeldungen des kostenlosen Plugins unverändert übernommen, und Autoren können die allgemeine Meldung jedes Felds durch eine genauere ersetzen. Die Wiederholung benennt ihre Grenzen in Worten – „Bitte füge mindestens *n* Elemente hinzu“, „Bitte füge nicht mehr als *n* Elemente hinzu“, „Die maximale Anzahl an Elementen ist erreicht“ und, wenn das letzte Element nicht entfernt werden kann, warum. |
| [3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Nicht anwendbar | Das Plugin führt keine rechtlichen oder finanziellen Transaktionen durch und speichert keine Daten, für deren Pflege Besucher verantwortlich wären. Wofür ein Formular verwendet wird, entscheiden die Autoren. |
| [3.3.8 Barrierefreie Authentifizierung (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Unterstützt | Das Plugin verlangt keinen kognitiven Funktionstest: Es fügt einem Formular weder CAPTCHA noch Rätsel hinzu. Das Lizenzschlüsselfeld in der Administration unterstützt Einfügen und Passwortmanager. |
| [4.1.3 Statusmeldungen](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Unterstützt | Alles, was sich ohne Fokuswechsel ändert, wird über eine höfliche Live-Region angesagt, die von Anfang an Teil der Seite ist und deshalb zuverlässig meldet, sobald etwas erscheint. Ein mehrstufiges Formular sagt den Schritt an, zu dem es gewechselt ist, samt Titel; eine Wiederholung sagt an, wenn ihr Maximum erreicht ist und warum sich das letzte Element nicht entfernen lässt; der Upload-Bereich sagt jede hinzugefügte oder entfernte Datei samt der daraus folgenden Dateianzahl an; und ein bedingtes Feld sagt namentlich an, wenn es erscheint oder nicht mehr benötigt wird. Wo eine Änderung stattdessen den Fokus verschiebt – beim Betreten eines neuen Schritts oder bei einem einzelnen ungültigen Feld –, reist die Ansage mit dem Fokuswechsel, statt mit ihm zu konkurrieren. |

## EN-301-549-Bericht

Die folgenden Tabellen dokumentieren die Konformität mit EN 301 549 v3.2.1. Kapitel sind als „Nicht
anwendbar“ gekennzeichnet, wenn die zugehörige Technologie im Produkt nicht vorhanden ist.

### 4.2 Funktionale Leistungsfähigkeit (informativ)

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Schritte, Wiederholungselemente und Upload-Listen werden als benannte Bereiche und Steuerelemente zugänglich gemacht, Zustände werden über ARIA statt über Gestaltung vermittelt, und jede Änderung ohne Fokuswechsel wird über eine Live-Region angesagt (siehe 4.1.3). |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Textbasierte, zoombare Ausgabe ohne feste Schriftgrößen; die wenigen vom Plugin definierten Farben haben feste Rückfallwerte und erfüllen die Kontrastvorgaben (siehe 1.4.3). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Schrittzustände tragen zusätzlich zur Farbe Text und ein Symbol (siehe 1.4.1). |
| 4.2.4 Nutzung ohne Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Nicht anwendbar | Das Plugin vermittelt keine Informationen über Ton. |
| 4.2.6 Nutzung ohne Sprechvermögen | Nicht anwendbar | Keine Bedienung erfordert, dass Nutzer sprechen. |
| 4.2.7 Nutzung mit eingeschränkter Beweglichkeit oder Kraft | Unterstützt | Jedes Steuerelement ist eine native, mit der Tastatur bedienbare Schaltfläche, keine Funktion erfordert Ziehen, und die Zielgrößen bleiben mindestens beim Minimum (siehe 2.1.1, 2.5.7 und 2.5.8). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Nicht anwendbar | Reine Software; keine Anforderungen an körperliche Reichweite. |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Das Plugin erzeugt keine blitzenden Inhalte (siehe 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkter Kognition, Sprache oder Lernfähigkeit | Unterstützt | Ein langes Formular wird in kurze Schritte mit sichtbarer Fortschrittsanzeige geteilt, Werte bleiben beim Wechsel zwischen Schritten erhalten, es gilt keine Zeitbegrenzung, Grenzen und Fehler werden verständlich benannt, und Bewegung wird abgeschaltet, wenn Nutzer das vorziehen. |
| 4.2.11 Privatsphäre | Unterstützt | Das Plugin fügt keine Funktion zur Barrierefreiheit hinzu, die die Daten der Nutzer anders als über die Standardsteuerelemente offenlegen würde. |

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
| 5.9 Gleichzeitige Nutzeraktionen | Unterstützt | Keine Bedienung erfordert gleichzeitige Nutzeraktionen; zum Ziehen einer Datei gibt es stets eine Schaltfläche, die dasselbe leistet. |

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

Die Frontend-Ausgabe des Plugins und seine browserbasierte Admin-Oberfläche sind Webinhalte. Die
Konformität ist im [WCAG-2.2-Bericht](#wcag-2-2-report) oben dokumentiert; die Abschnitte 9.1–9.4 der
EN 301 549 entsprechen direkt den zugehörigen WCAG-2.2-Erfolgskriterien.

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 9.1 – 9.4 (WCAG 2.2 A & AA) | Siehe WCAG-2.2-Bericht | Siehe Tabellen 1 und 2 oben; alle Kriterien der Stufen A und AA sind mit „Unterstützt“ oder „Nicht anwendbar“ bewertet. |
| 9.5 Keine Beeinträchtigung | Unterstützt | Das Plugin verwendet keine rein farblichen Hinweise, kein Blitzen, kein Audio und keine Zeitvorgaben, die die gesamte Seite beeinträchtigen würden. Seine Live-Regionen und seine Änderungen am Dokumenttitel sind auf das jeweilige Formular beschränkt, sodass zwei mehrstufige Formulare auf einer Seite nicht die Schritte des jeweils anderen ansagen. |
| 9.6 WCAG-Konformitätsanforderungen | Unterstützt | Die Ausgabe erfüllt die Konformitätsanforderungen von WCAG 2.2 der Stufen A und AA. |

### Kapitel 10: Nicht-Web-Dokumente

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 10 (alle Abschnitte) | Nicht anwendbar | Das Plugin erzeugt keine Nicht-Web-Dokumente. Dateien, die über den Drag-and-drop-Bereich hochgeladen werden, werden unverändert weitergereicht; für ihre Barrierefreiheit sind diejenigen verantwortlich, die sie erstellt haben. |

### Kapitel 11: Software

Die Benutzeroberfläche des Plugins (seine Steuerelemente im Block-Editor und die von ihm erweiterten
Admin-Seiten) ist webbasierte Software, die in der WordPress-Administration dargestellt wird.
Anforderungen, die WCAG entsprechen, verweisen auf den [WCAG-2.2-Bericht](#wcag-2-2-report).

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-basiert) | Siehe WCAG-2.2-Bericht | Die Oberfläche ist webbasiert; siehe Tabellen 1 und 2 oben. |
| 11.5.1 Geschlossene Funktionalität | Nicht anwendbar | Keine geschlossene Funktionalität. |
| 11.7 Benutzereinstellungen | Unterstützt | Das Plugin setzt keine festen Schriften und respektiert die Plattformeinstellungen der Nutzer: Sowohl der Übergang zwischen Schritten als auch die Animation der Fortschrittsanzeige werden unter `prefers-reduced-motion: reduce` abgeschaltet. Ansonsten übernimmt die Admin-Oberfläche die Umgebung der WordPress-Administration. |
| 11.8 Autorenwerkzeuge | Unterstützt | Die Blöcke des Plugins laufen im WordPress-Block-Editor, einem Autorenwerkzeug, und sind so gebaut, dass ein barrierefreies Ergebnis der Standardfall ist. Die Blöcke für Abschnitt, Wiederholung und Einverständniserklärung sowie ihre Steuerelemente im Editor sind benannt, ein Abschnitt ohne Titel erzeugt im Editor eine Warnung und erhält im Frontend dennoch einen erzeugten zugänglichen Namen, Blöcke mit einer Bedingung werden mit einem Textzusatz gekennzeichnet, sodass Autoren sehen, welche Teile eines Formulars bedingt sind, und die Bezeichner, die Beschriftungen, Beschreibungen und Fehlermeldungen mit ihren Feldern verbinden, werden beim Rendern erzeugt und lassen sich nicht von Hand zerstören. In der Verantwortung der Autoren bleiben die Formulierung von Abschnittstiteln, Feldbeschreibungen, eigenen Fehlermeldungen und der Einverständniserklärung (siehe [Abhängigkeiten](#dependencies)). |

### Kapitel 12: Dokumentation und Support-Dienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 12.1.1 Merkmale zu Barrierefreiheit und Kompatibilität | Unterstützt | Diese Dokumentation beschreibt die Funktionen des Plugins, einschließlich dieses Accessibility Conformance Report und einer eigenen Seite zu den Werkzeugen für Barrierefreiheit, die Formular-Autoren nutzen sollten. |
| 12.1.2 Barrierefreie Dokumentation | Unterstützt | Die Dokumentation wird als HTML unter docs.epiph.yt veröffentlicht. |
| 12.2.2 Informationen zu Merkmalen der Barrierefreiheit und Kompatibilität | Unterstützt | Für die Barrierefreiheit relevantes Verhalten ist hier, im Kapitel [Barrierefreiheit](/de/form-block/accessibility) und in der Plugin-Readme dokumentiert. |
| 12.2.3 Effektive Kommunikation | Unterstützt | Support wird über die Kanäle des Anbieters unter epiph.yt angeboten. |
| 12.2.4 Barrierefreie Dokumentation (Support) | Unterstützt | Die Support-Dokumentation wird als barrierefreies HTML bereitgestellt. |

### Kapitel 13: IKT für Relais- oder Notdienste

| Kriterium | Konformitätsstufe | Anmerkungen und Erläuterungen |
| --- | --- | --- |
| 13 (alle Abschnitte) | Nicht anwendbar | Das Plugin bietet keine Relais- oder Notdienst-Funktionalität. |

## Abhängigkeiten {#dependencies}

Die Barrierefreiheit eines Formulars, wie es Besuchern schließlich erscheint, hängt von Faktoren ab,
die das Plugin nicht kontrollieren kann.

Form Block Pro setzt das kostenlose Plugin **Form Block** voraus und baut darauf auf. Jenes Plugin
stellt das `<form>`-Element, die Felder, ihre Beschriftungen, die Pflichtfeld-Markierungen und die
Validierung bereit; seine Konformität ist gesondert im
[Accessibility Conformance Report für Form Block](/de/form-block/acr/free) dokumentiert.

Form Block Pro folgt den etablierten WordPress-Konventionen für barrierefreie Themes und erwartet,
dass eine **`.screen-reader-text`-Hilfsklasse** definiert ist, die Inhalte visuell verbirgt. Das
Plugin verwendet diese Klasse für seine Live-Regionen, für den Zustand eines Schritts der
Fortschrittsanzeige, für den Titel eines Schritts, dessen Abschnitt keinen eigenen Titel hat, und für
den Screenreader-Text von Admin-Steuerelementen, die nur aus einem Symbol bestehen. Es verlässt sich
dabei auf die Definition, die WordPress mit `wp-block-library` ausliefert und im Frontend einbindet,
oder auf die des Themes. Eine Website, die dieses Stylesheet entfernt und ein Theme verwendet, das die
Klasse nicht definiert, zeigt diese Texte als sichtbaren Inhalt – weniger elegant, aber es geht nichts
verloren.

Darüber hinaus erwartet es vom Theme:

- **sichtbare Fokus-Indikatoren** für Formularelemente und Schaltflächen. Das Plugin unterdrückt
  keinen davon – in seinen Stylesheets findet sich nirgends `outline: none` –, überschreibt aber auch
  die des Themes nicht;
- **ausreichenden Kontrast** für Text und Rahmen von Steuerelementen. Außerhalb der
  Fortschrittsanzeige legt das Plugin keine Farben fest, und auch dort haben seine Custom Properties
  das Theme an erster Stelle und greifen nur dann auf feste Werte zurück, wenn das Theme keine
  anbietet.

Über das Theme hinaus hängt die Barrierefreiheit eines Formulars davon ab, wie Autoren es aufbauen:

- die **Titel der Abschnitte** eines mehrstufigen Formulars. Sie benennen den Schrittbereich, seinen
  Eintrag in der Fortschrittsanzeige und seine Ansage beim Betreten. Das Plugin warnt im Editor, wenn
  ein Abschnitt keinen Titel hat, und erzeugt einen, damit nichts namenlos bleibt – ein erzeugtes
  „Abschnitt 2“ sagt jedoch weniger als ein echter Titel;
- die **Einverständniserklärung**, sowohl die globale als auch die je Block hinterlegte. Sie ist vom
  Website-Betreiber verfasster Rich-Text und wird zur Beschriftung der Einverständnis-Checkbox, sodass
  ihre Formulierung das ist, was ein Screenreader für diese Checkbox ansagt. Ein darin platzierter
  Link – etwa zur Datenschutzerklärung – bleibt ein funktionierender Link und schaltet die Checkbox
  nicht um, wird aber Teil ihres zugänglichen Namens und verlängert ihn;
- die **Formulierung von Feldbeschreibungen und eigenen Fehlermeldungen**, die das Plugin assistiven
  Technologien zugänglich macht, aber nicht verfassen kann;
- welche **Felder bedingt** gemacht werden und ob ein Formular auch dann noch verständlich ist, wenn
  sie ausgeblendet sind;
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
