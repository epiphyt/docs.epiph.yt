# Ausgabe

## Impressum

Nachdem du alle relevanten Informationen angegeben hast, kann Impressum Plus dein Impressum generieren und ausgeben. Dafür nutzen wir entweder den entsprechenden Block im Gutenberg-Editor (ab Version 2.0.0) oder einen sogenannten Shortcode. Shortcodes werden von WordPress erkannt und beim Aufruf der Seite durch Besucher durch andere Inhalte, in unserem Fall ein komplettes Impressum, ersetzt.

### Gutenberg-Block

ab 2.0.0

Erstelle einen neuen Block und wähle aus der Block-Auswahl „Impressum“ aus.

Solltest du einmal nicht das gesamte Impressum, sondern nur einen Teil davon oder einen einzigen Wert ausgeben wollen, kannst du in der Block-Seitenleiste entsprechende Konfigurationen vornehmen.

### Shortcode

Kopiere dafür einfach den Shortcode `[​impressum​]` an eine (oder mehrere) beliebige Stelle deiner Seite und speichere. Im Normalfall nutzt man dafür eine gesonderte Seite, etwa „Impressum“.

Solltest du einmal nicht das gesamte Impressum, sondern nur einen Teil davon oder einen einzigen Wert ausgeben wollen, so kannst du deinen Shortcode mit dem Attribut `sections=` erweitern. Jeder einzelne Wert aus deinem Impressum kann darüber einzeln aufgerufen werden, oder du kannst ganze Gruppen von Werten kommasepariert aufrufen.

`[​impressum sections="email"​]` gibt also nur die E-Mail-Adresse aus, `[​impressum sections="email,phone"​]`E-Mail-Adresse und Telefonnummer. Folgende Werte sind aktuell für `sections` verfügbar:

|     |     |
| --- | --- |
| `address` | Adresse |
| `address_alternative` | Alternative Adresse |
| `coverage` | Geltungsbereich des Impressums |
| `country` | Land |
| `email` | E-Mail-Adresse |
| `fax` | Faxnummer |
| `free_text` | Freitextfeld |
| `legal_entity` | Rechtsform |
| `name` | Name |
| `phone` | Telefonnummer |
| `press_law_person` | Verantwortliche Person für den Inhalt |
| `vat_id` | Umsatzsteuer ID |
| `inspecting_authority` | Aufsichtsbehörde |
| `register` | Register |
| `business_id` | Register-Nummer |
| `representative` | Vertretungsberechtige(r) |
| `capital_stock` | Kapitaleinlagen |
| `professional_association` | Berufsgenossenschaft |
| `legal_job_title` | Gesetzliche Berufsbezeichnung |
| `professional_regulations` | Berufsrechtliche Regelungen |

Wenn du es vorziehst, dein Impressum ohne die HTML-Struktur auszugeben, die Impressum Plus vorgibt, kannst du den Shortcode um ein `markup="false"` erweitern. Der gesamte Shortcode sieht dann so aus: `[​impressum markup="false​"]` und gibt nur einen unformatierten Textblock aus.

**Ab Version 2.0.0:** Wenn du Impressumsdaten ohne den jeweiligen Titel des Feldes ausgeben möchtest, kannst du den Shortcode um ein `titles="false"` erweitern.

## Ausgabe der Datenschutzerklärung

Wenn du auch alle Informationen angegeben hast, um eine Datenschutzerklärung zu erstellen, kann Impressum Plus diese ebenfalls über einen eigenen Block oder Shortcode ausgeben.

### Gutenberg-Block

ab 2.0.0

Erstelle einen neuen Block und wähle aus der Block-Auswahl „Datenschutzerklärung“ aus.

### Shortcode

Dafür kannst du den Shortcode `[​impressum_privacy​]` kopieren und an einer beliebigen Stelle deiner Seite und einfügen. Wenn du den Shortcode direkt unterhalb des Impressums auf der selben Seiten einfügst, solltest du darauf achten, dass die Seite zum Beispiel im Footer deiner Website eindeutig als „Impressum und Datenschutz“ verlinkt ist, damit deine Besucher wissen, dass sie dort auch die Datenschutzerklärung finden.

## Ausgabe der Information zur Barrierefreiheit

ab 2.13.0

Wenn du auch alle Informationen angegeben hast, um eine Information zur Barrierefreiheit zu erstellen, kann Impressum Plus diese ebenfalls über einen eigenen Block oder Shortcode ausgeben.

### Block

Erstelle einen neuen Block und wähle aus der Block-Auswahl „Information zur Barrierefreiheit“ aus.

### Shortcode

Dafür kannst du den Shortcode `[​impressum_accessibility_information​]` kopieren und an einer beliebigen Stelle deiner Seite und einfügen.
