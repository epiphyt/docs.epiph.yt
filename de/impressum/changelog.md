# Änderungsprotokoll

## Version 2.14.3

13\. Dezember 2025

* Hinzugefügt: Übersetzungen für einige Felder auf Französisch, Niederländisch, Tschechisch und Ungarisch
* Verbessert: Zuverlässigkeit von Aktualisierungen (der Download sollte nun auch funktionieren, wenn die letzte Lizenzprüfung länger her ist als die Suche nach Aktualisierungen)
* Verbessert: Überprüfung der gesamten Code-Basis mit fast 500 hinzugefügten Tests
* Behoben: Rückgabe in WP-CLI für Lizenzdaten, die nun ausgeben, dass es sich um die Impressum-Lizenz handelt
* Behoben: Überprüfung für erlaubte Inkompatibilitäten in der API zur Information zur Barrierefreiheit
* Behoben: Nicht geschlossenes Absatz-HTML-Element in der Ausgabe der Impressum-Felder
* Behoben: Fehlendes schließendes Absatz-HTML-Element innerhalb des Bereichs „Verantwortliche Person“ der Datenschutzerklärung
* Behoben: Ausgabe der E-Mail-Adresse des Datenschutzbeauftragten in der Datenschutzerklärung

## Version 2.14.2

14\. Oktober 2025

* Behoben: Einige Einstellungen wurden nicht abgespeichert

## Version 2.14.1

13\. Oktober 2025

* Behoben: Einige Assets konnten im Backend nicht geladen werden, wodurch die JavaScript-Funktionalität nicht verfügbar war
* Behoben: Die Lizenzüberprüfung konnte in manchen Umgebungen fehlschlagen

## Version 2.14.0

6\. Oktober 2025

* Hinzugefügt: Alle Marktüberwachungsbehörden und Gesetzestitel für alle europäischen Länder für die Information zur Barrierefreiheit
* Hinzugefügt: Unterstützung für die Rechtsform GesbR
* Hinzugefügt: Unterstützung für neue soziale Netzwerke:
  * LinkedIn
  * TikTok
  * XING
  * YouTube
* Hinzugefügt: Unterstützung zum Öffnen von Links zu sozialen Netzwerken in einem neuen Tab
* Verbessert: Die Einstellung für aktivierte Felder im Impressum-Block sind jetzt einzelne Auswahlkästchen
* Entfernt: „In Gründung“ für die Gemeinsame Marktüberwachung der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)

## Version 2.13.3

18\. Juni 2025

* Verbessert: Fehlerbehebungen von [Impressum 2.1.3](https://de.wordpress.org/plugins/impressum/#developers) integriert

## Version 2.13.2

13\. Juni 2025

* Verbessert: Fehlerbehebungen von [Impressum 2.1.2](https://de.wordpress.org/plugins/impressum/#developers) integriert

## Version 2.13.1

12\. Juni 2025

* Behoben: Individuelle Feldtitel werden wieder angezeigt

## Version 2.13.0

9\. Juni 2025

* Hinzugefügt: Generator für die Information zur Barrierefreiheit
* Behoben: Funktionalität der Plus-Version des Impressumsblocks wiederhergestellt
* Behoben: Fehlerhaft angezeigte Felder zum anzeigen im Impressumsblock

## Version 2.12.1

22\. Mai 2025

* Behoben: Ein Fehler, wodurch Teile der Übersetzungen nicht geladen wurden

## Version 2.12.0

22\. Mai 2025

* Verbessert: Gültigkeitsprüfung für Umsatzsteuer- und Wirtschafts-ID
* Verbessert: Code-Basis
* Entfernt: Link, um Datenschutz-Ersetzungen direkt über die Admin-Leiste hinzuzufügen
* Entfernt: Link zur Plattform zur Online-Streitbeilegung der Europäischen Kommission ab dem 20. Juli 2025
* Behoben: Probleme bezüglich der Barrierefreiheit beim Bearbeiten von Feldtiteln auf der Einstellungsseite
* Behoben: Handhabung von Systemdaten in der API

## Version 2.11.2

24\. April, 2025

* Ein Fehler wurde behoben, der eine Aktualisierung verhinderte, wenn die Lizenzdaten über PHP-Konstanten verwaltet werden.

## Version 2.11.1

23\. April, 2025

* Ein Fehler wurde behoben, der durch eine zu frühe Verwendung von übersetzten Texten verursacht wurde.

## Version 2.11.0

19\. April, 2025

* Verarbeitung des Inhalts der Datenschutzerklärung wurde durch eine komplette Neuentwicklung modernisiert.
* Unterstützung für Datenschutztexte hinzugefügt, wenn ActivityPub/Webmentions verwendet werden.
* Unterstützung für die [Installation von Impressum Plus via Composer](/de/impressum/installation.html#installation-via-composer) wurde hinzugefügt.

## Version 2.10.3

31\. Dezember 2024

* Wir haben einen Fehler behoben, der die automatische Aktualisierung anderer Plugins verhindern könnte.

## Version 2.10.2

28\. November 2024

* Wir haben einen Fehler behoben, der das Aktualisieren von Impressum Plus nahezu unmöglich machte.

## Version 2.10.1

21\. November 2024

* Wir haben die Unterstützung von WordPress 6.7 verbessert, indem die Übersetzungsdateien im `init`\-Hook statt im `plugins_loaded`\-Hook geladen werden.

## Version 2.10.0

21\. Oktober 2024

* Wir haben eine [WP-CLI-Integration](/de/impressum/wp-cli/imprint.md) hinzugefügt.
* Du kannst die Lizenzdaten nun über die [Konstanten](/de/impressum/license.html) `IMPRESSUM_PLUS_LICENSE_EMAIL` und `IMPRESSUM_PLUS_LICENSE_KEY` konfigurieren.
* Polylang wird nun für die Kontaktformular-Seite unterstützt.
* Wir haben den Bereich „Verwendung“ aktualisiert, damit klar wird, dass auch ein Block verwendet werden kann, um das Impressum und die Datenschutzerklärung auszugeben.
* Der Namespace `\epiphyt\Impressum` gilt nun als veraltet und wurde durch `\epiphyt\Impressum_Plus` ersetzt.
* Wir haben mehrere Probleme bezüglich der Aktivierung/Deaktivierung einer Lizenz behoben und so den Prozess zuverlässiger gestaltet.

## Version 2.9.0

26\. Juli 2024

* Wir haben den Omnisend-Newsletteranbieter hinzugefügt.
* Wir haben den Mollie-Bezahlungsdienst hinzugefügt.

## Version 2.8.1

3\. Mai 2024

* Wir haben die Prüfung auf ein gültiges Impressum im Admin-Hinweis korrigiert.
* Wir haben eine potenzielle PHP-Warnung behoben, die auftrat, wenn das Land noch nicht definiert war.

## Version 2.8.0

22\. April 2024

* Wir haben eine alternative Auswahl für eine Kontaktformular-Seite hinzugefügt, statt die Eingabe einer Telefonnummer zu erzwingen.
* Wir haben das Feld „Unternehmensgegenstand“ für Österreicher hinzugefügt.
* Wir haben JavaScript-Funktionalität zu den Tabs in den Einstellungen hinzugefügt, um die Navigation zwischen diesen zu beschleunigen.
* Wir haben das Änderungsprotokoll in der Plugin-Liste dynamisch gemacht.
* Wir haben eine Prüfung für das offizielle [Plugin VG WORT METIS](https://de.wordpress.org/plugins/vgw-metis/) hinzugefügt.
* Wir haben die Informationen bezüglich des EU-US Data Privacy Framework (DPF) aufgrund von möglicherweise irreführenden Teilen entfernt.

Weitere Informationen zu den größten Neuerungen findest du im [Blogbeitrag zu dieser neuen Version](https://epiph.yt/blog/2024/impressum-plus-2-8-0-veroeffentlicht/).

## Version 2.7.1

16\. Oktober 2023

* Wir haben einen Fehler bei der automatischen Aktualisierung behoben.

## Version 2.7.0

15\. Oktober 2023

* Wir haben Informationen bezüglich des EU-US Data Privacy Framework (DPF) zur Datenschutzerklärung hinzugefügt.
* Wir haben die Unterstützung für Spotify hinzugefügt.
* Wir haben die Unterstützung für CleanTalk hinzugefügt.
* Wir haben Buttons zum Kundenkonto und zur Seite „Lizenz verloren“ unter das Formular zur Eingabe der Lizenzdaten hinzugefügt.
* Wir haben Facebook Pixel zu Meta-Pixel umbenannt.
* Wir haben eine potenzielle PHP-Warnung bei der Systemüberprüfung behoben.

## Version 2.6.1

15\. Juli 2023

* Wir haben die fehlenden Abschnitte zum Ersetzen des Inhalts der Datenschutzerklärung von Embed Privacy und Google reCAPTCHA hinzugefügt.
* Wir haben den Newsletter-Anbieter Newsletter2Go zu Brevo/Sendinblue/Newsletter2Go umbenannt.
* Wir haben die Anzeige der Standardoption „Bitte auswählen“ für den Ersetzungsabschnitt der Datenschutzerklärung korrigiert, sodass sie nun die erste statt die letzte Option ist.
* Wir haben einen Fehler behoben, der auftrat, wenn der Block hinzugefügt wurde, ohne je Impressumseinstellungen zu speichern.
* Wir haben eine Prüfung im Editor korrigiert, die eine Information anzeigt, wenn noch kein Impressumsfeld verfügbar ist.
* Wir haben die Anzeige des Felds „Aufsichtsbehörde“ im Backend für die Rechtsform GbR korrigiert.

## Version 2.6.0

25\. Juni 2023

* Du kannst nun Teile der Datenschutzerklärung (oder die gesamte Datenschutzerklärung) manuell unter **Einstellungen > Datenschutz-Ersetzungen** ersetzen.
* Wir haben die Rechtsform „eG” hinzugefügt.

## Version 2.5.2

6\. Juni 2023

* Wir haben Teile von Sendinblue (vormals Newsletter2Go) aufgrund der Umbenennung zu Brevo aktualisiert.

## Version 2.5.1

8\. Mai 2023

* Wir haben einen Fehler bei der Ausgabe des Impressums behoben.

## Version 2.5.0

8\. Mai 2023

* Wir haben die Möglichkeit hinzugefügt, die Felder im Block-Editor manuell zu sortieren.
* Wir haben das Mehrfach-Auswahlfeld für aktive Felder mit einem durchsuchbaren Auswahlfeld ersetzt, um die Benutzbarkeit zu verbessern.
* Wir haben Teile von MailPoet aktualisiert, da diese von Automattic übernommen wurden.
* Wir haben einen möglichen Fehler bei der Anzeige der letzten (fehlerhaften) API-Antwort behoben.

## Version 2.4.0

12\. März 2023

* Wir haben ein Eingabefeld für eine Mastodon-Profilseite hinzugefügt.
* Wir haben einen Warnhinweis in PHP 8.0 behoben.
* Wir haben einen Warnhinweis in PHP 8.2 behoben.
* Wir haben ein Scroll-Problem bei der Auswahl „Aktive Felder“ des Impressumsblocks behoben.
* Wir haben den Code unter der Haube verbessert.

## Version 2.3.0

26\. September 2022

* Wir haben eine Option hinzugefügt, um zu einer Online-Streitbeilegung zu verlinken. Du hast nun die Möglichkeit, auszuwählen, ob du an einem Online-Streitbeilegungsverfahren teilnimmst.
* Individuelle Titel können nun per REST API empfangen werden. Besuche die [API-Dokumentation](/de/impressum/api/authentication.html) für weitere Informationen.
* Individuelle Titel können nun von deiner WordPress-Installation über die API-Einstellungen versendet werden. Du kannst dazu den Datentyp „Feldtitel“ benutzen.
* Wir haben die Handhabung medizinischer Freiberufler verbessert, indem wir ihnen eine eigene Option im Feld „Rechtsform“ gegeben haben.
* Wir haben eine potenzielle PHP-Warnung beim Zurücksetzen individueller Feldtitel behoben.
* Wir haben das Versenden von Impressumsdaten über die API zu einer anderen WordPress-Installation korrigiert.

## Version 2.2.0

28\. März 2022

* Wir haben die Datenschutzerklärung vollständig ins Englische übersetzt und eine saubere Unterscheidung zwischen formaler und informaler deutscher Sprache hinzugefügt.
* Du kannst nun die Feldtitel an die eigenen Bedürfnisse anpassen.
* BerufshaftpflichtversicherungWir haben das Feld „Berufshaftpflichtversicherung“ hinzugefügt.
* Wir haben eine Datenschutzerklärungs-Systemüberprüfung für das Plugin WooCommerce PayPal Payments hinzugefügt.
* Das Register-Feld ist nun ein Textbereich.
* Wir haben den Impressums-Containernamen verbessert, damit Adblocker dessen Inhalt nicht mehr blockiert.
* Wir haben ein Problem behoben, durch das die Feldauswahl des Impressumsblocks möglicherweise verschwindet.
* Wir haben ein Problem behoben, das dazu führt, dass in den Netzwerk-Optionen die Einstellungen aus der primären Website geladen werden.

## Version 2.1.2

7\. Februar 2022

* Wir haben den Namen von Facebook Inc. zu Meta Platforms Ireland Ltd. aufgrund deren Firmen-Umbenennung vorgenommen.
* Wir haben ein Problem behoben, das verhindert, dass das Plugin in PHP-Versionen < 7.3 funktioniert.

## Version 2.1.1

28\. August 2021

* Wir haben die Systemüberprüfung für Embed Privacy korrigiert, die zu einer Fehlermeldung führte, sobald du Embed Privacy deaktivierst.

## Version 2.1.0

25\. Juni 2021

* Wir haben die Unterstützung für zusätzliche Dienste in der Datenschutzerklärung hinzugefügt:
  * [Avatar Privacy](https://de.wordpress.org/plugins/avatar-privacy/)
  * [Embed Privacy](https://de.wordpress.org/plugins/embed-privacy/)
  * [Shariff Wrapper](https://de.wordpress.org/plugins/shariff/)
  * [Matomo](https://de.wordpress.org/plugins/matomo/)
  * Amazon CloudFront CDN
  * DigitalOcean CDN
  * KeyCDN
  * Podtrac
  * Verwertungsgesellschaft WORT
* Wir haben einen Platzhalter zum Impressum-Block hinzugefügt, wenn noch keine Impressumsdaten verfügbar sind.
* Wir haben die Unterstützung für einfaches HTML im Freitextfeld hinzugefügt (a, strong, b, em, i, h1–h6, p).
* Wir haben die Unterstützung für automatische Aktualisierungen hinzugefügt.
* Wir haben einige Stellen der Datenschutzerklärung vereinheitlicht.
* Wir haben die Anzeige ausstehender Plugin-Updates verbessert.
* Wir haben die Überprüfung auf eine aktive Lizenz auf der Plugins-Seite in Multisites korrigiert.

## Version 2.0.3

16\. Mai 2021

* Wir haben die Formatierung der verantwortlichen Person und des Datenschutzbeauftragten in der Datenschutzerklärung angepasst, damit sie identisch ist.
* Wir haben die Anzeige des Felds „Verantwortlich für den Inhalt“ im Backend für deutsche Benutzer korrigiert.

## Version 2.0.2

20\. März 2021

* Impressum Plus ist nun offiziell mit WordPress 5.7 getestet.
* Danke an Florian Brinkmann für das Beheben eines Fehlers in Kombination mit Anwendungspasswörtern.
* Wir haben Präfixe zu E-Mail-Adresse und Telefonnummer des Datenschutzbeauftragten hinzugefügt und zeigen sie nun auf dieselbe Weise sowohl auf der Impressums- als auch der Datenschutzseite an.
* Wir haben den Filternamen für den Datenschutz-Text zu DHL korrigiert.

## Version 2.0.1

17\. Dezember 2020

* Wir haben einen Fehler beim Versuch, eine Lizenz zu deaktivieren, behoben.
* Wir haben ein Problem behoben, wodurch MailPoet nicht als Newsletter-Anbieter in der Datenschutzerklärung angezeigt wurde.

## Version 2.0.0

7\. Dezember 2020

* Wir haben Gutenberg-Blöcke für das Impressum und die Datenschutzerklärung hinzugefügt.
* Die Code-Struktur wurde vollständig angepasst und modernisiert. Es ist jetzt einfacher als je zuvor, die Funktionalität von Impressum Plus anzupassen oder zu filtern. [Besuche die Migrationsanleitung für weitere Informationen](/de/impressum/developer/migration-2.html).
* Wir haben den Impressumsgenerator für eine verbesserte Erfahrung angepasst.
* Impressum Plus erkennt nun das Land durch die benutzte Browsersprache.
* Für Nicht-Deutsche ist das Feld Wirtschafts-Identifikationsnummer nun versteckt, da dort diese Information nicht vorliegt.
* Wir haben die Rechtsform „Partnerschaft” hinzugefügt.
* Wir haben das Änderungsprotokoll zum Informations-Modal hinzugefügt.
* Du kannst nun das Impressum mit Hilfe von `titles="false"` ohne Titel ausgeben.
* Es können nun `+` und `*` in der Umsatzsteuer-ID benutzt werden, um Umsatzsteuer-IDs aus den Niederlanden zu erlauben.
* Wir haben Inhalte zur Datenschutzerklärung für Google reCAPTCHA, Cloudflare und StackPath (MaxCDN/BootstrapCDN) hinzugefügt.
* Wir haben Inhalte zur Datenschutzerklärung für PayPal, Stripe und DHL hinzugefügt.
* Wir haben Mailpoet als Newsletter-Anbieter hinzugefügt.
* Lizenzprüfungen werden nun anders gehandhabt, sodass auf großen Multisites nicht mehr hunderte Anfragen passieren.
* Der Aktualisierungshinweis zeigt nun an, ob deine WordPress-Version unterstützt wird.
* Wir haben die Überschriften-Nummer zu den Filtern in der Datenschutzerklärung hinzugefügt.
* Wir haben einen Filter zur Ausgabe des Impressums hinzugefügt.
* Wir haben einen Filter zu `Privacy::has_content()` hinzugefügt.
* Wir haben das „gemäß § 55 Absatz 2 RStV“ entfernt, da es nicht mehr aktuell ist.
* Wir haben die Ausgabe der E-Mail-Adresse des Datenschutzbeauftragten korrigiert. Es beginnt nun nicht mehr länger mit `http://`.

## Version 1.1.2

12\. Juni 2020

* Wir haben die Ausgabe der Datenschutzerklärung an einigen Stellen optimiert und richtig sortiert.
* Ein textlicher Fehler in der Datenschutzerklärung wurde behoben.
* Ein möglicher Fehler bei der Systemüberprüfung der Datenschutzerklärung wurde behoben.

## Version 1.1.1

23\. Mai 2020

* Es gibt nun eine Anzeige an verschiedenen Stellen, wenn die eigene Lizenz abgelaufen ist und aufgrund dessen kein direktes Update durchgeführt werden kann.
* Ein textlicher Fehler in der Datenschutzerklärung wurde behoben.
* Impressum Plus schickt nun auch die eingesetzte PHP-Version und Sprache mit an den Update-Server.
* Wir haben die deutsche Übersetzung angepasst, sodass sie sich besser in vorhandene Übersetzungen von WordPress einfügt.

## Version 1.1.0

13\. Mai 2020

* Impressum Plus generiert jetzt auch eine Datenschutzerklärung.
* Alle Daten von Impressum Plus können über die [REST API](https://impressum.plus/dokumentation/api/) gelesen und geschrieben werden\. Damit ist zum Beispiel das Synchronisieren von Impressumsdaten über mehrere Websites oder das automatische Anlegen eines Impressums aus einem CRM möglich.
* Über [40 neue Filter](https://impressum.plus/dokumentation/entwickler/) zur Beeinflussung von Interface und Ausgabe wurden hinzugefügt.
* Ein Feld zur Angabe von Kammerzugehörigkeit wurde hinzugefügt.
* Zusätzliche Felder für Social-Media-Profile wurden hinzugefügt.
* Die Abfrage der Rechtsform wurde verbessert.
* Die Handhabung von optionalen Feldern wurde verbessert.
* Ein Fehler mit einem falschen Präfix für E-Mail-Adressen wurde behoben.
* Die Verwaltung von Lizenzdaten wurde verbessert.

## Version 1.0.2

9\. März 2019

* Die Überprüfung, ob eine Umsatzsteuer-ID angegeben wurde, haben wir entfernt. Diese Angabe basiert auf Umsatzzahlen, nicht auf der Rechtsform.
* Bei der Deinstallation von Impressum Plus werden nun auch die Lizenzinformationen aus der Datenbank entfernt.
* Die Handhabung der Rechtsform GbR wurde verbessert.
* Eine fehlende Übersetzung wurde hinzugefügt.
* Nach dem Hinzufügen einer neuer Website innerhalb einer Multisite fehlte eine Überprüfung, ob es für diese bereits Impressumsdaten gibt.
* Eine Fehlermeldung beim Öffnen der Update-Informationen wurde behoben.
* Der Update-Server wird nun nur noch einmal beim Suchen nach Updates angefragt statt für jedes installierte Plugin.
* Die Felder „Geltungsbereich“ und „Freitext“ werden nun auch für Privatpersonen und Selbstständige angezeigt.
* Netzwerkweite Impressumsangaben wurden bei der Überprüfung, ob alle notwendigen Felder angegegeben sind, nicht beachtet.
* Bei der Anzeige der Updates wird ab sofort das Logo von Impressum Plus als Icon angezeigt.

## Version 1.0.1

1\. November 2018

* Ein Fehler wurde behoben, der bei gleichzeitiger Aktivierung von Impressum und Impressum Plus zu einem PHP-Fehler führte. Ab sofort wird Impressum in diesem Fall automatisch deaktiviert.
* Die Ausgabe einzelner Informationen über den Parameter `sections` war nicht möglich, wenn sie nur in den Netzwerk-Einstellungen definiert wurden.
* Zeilenumbrüche werden in der Ausgabe ohne Markup nun automatisch zu Kommata umgewandelt.

## Version 1.0.0

31\. Oktober 2018

* Erste Veröffentlichung
