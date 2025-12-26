# Änderungsprotokoll

## 1.11.4

* Behoben: Fataler Fehler in WordPress-Versionen kleiner als 6.7 aufgrund einer fehlenden Funktion

## 1.11.3

* Behoben: Handhabung von youtu.be-Links in Elementor
* Behoben: Einheiten werden aus den Attributen `height` und `width` nun beim Berechnen des Seitenverhältnisses entfernt

## 1.11.2

* Verbessert: YouTube-Unterstützung in Elementor (Einstellungen werden jetzt ebenso unterstützt wie die Domain youtu.be, das Styling wurde verbessert)
* Behoben: Ersetzen von Einbettungen auf der Blog-Seite
* Behoben: Beim Einbetten in Feeds wird jetzt nur noch ein Link zum Inhalt angezeigt, anstatt eines nicht funktionierenden Overlays

## 1.11.1

* Verbessert: Leistung beim automatischen Laden von Klassen
* Verbessert: Erlaubt das Überschreiben der Konstante `EPI_EMBED_PRIVACY_BASE`
* Verbessert: `url_to_postid` mit einer Überprüfung der Benutzung eines Shortcodes im Inhalt ersetzt
* Behoben: JavaScript-Fehler beim Anklicken eines Opt-out-Kontrollkästchens
* Behoben: Veraltete Parameter der Style-Klasse werden nicht mehr benutzt
* Behoben: Fehlerhaftes Ersetzen von Overlays unter bestimmten Umständen

## 1.11.0

* Hinzugefügt: Unterstützung für den Einbettungsanbieter Bluesky
* Hinzugefügt: Unterstützung für den Einbettungsanbieter Canva
* Hinzugefügt: Unterstützung für lokale ActivityPub-Beiträge
* Hinzugefügt: Unterstützung für BuddyPress-Aktivitäten
* Hinzugefügt: Unterstützung für Facebook- und Instagram-HTML-Einbettungscodes
* Hinzugefügt: Unterstützung für wpForo Embeds
* Hinzugefügt: Definition des Begriffs für den Inhalts-Direktlink oder dessen vollständige Deaktivierung
* Hinzugefügt: Supportbereich zum einfachen Kopieren von Daten für den Support
* Verbessert: Nach der Aktivierung einer Einbettung erhält der Inhalt jetzt den Fokus
* Verbessert: Die Link-Namen für die Datenschutzerklärung enthalten jetzt den Namen des Dienstes
* Behoben: Unterstützung die Installation von Embed Privacy im MU-Plugin-Verzeichnis
* Entwickler: [Migrationsleitfaden](https://epiph.yt/embed-privacy/dokumentation-embed-privacy/migration-auf-version-1-11-0/)

## 1.10.10

* Behoben: Laden von Google Maps in Divi
* Behoben: Ersetzen von HTML-Elementen mit regulären Ausdrücken
* Behoben: Fälschlich negative Erkennung der ActivityPub-Benutzung

## 1.10.9

* Behoben: Erkennung für Einbettungen von Twitter/X
* Behoben: Die Ausgabe des Instagram-Feed-Plugins wird durch ein fehlerhaftes Overlay ersetzt
* Behoben: Anzeige von Einbettungen im dynamischen Inhalt von Divi

## 1.10.8

* Behoben: Eine undefinierte Variable in der Shortcode-Ausgabe

## 1.10.7

* Behoben: Individuelle Hintergrundbilder und Logos
* Behoben: Direktlink zu YouTube-Videos
* Behoben: Verarbeitung nicht mehr verfügbarer YouTube-Videos
* Behoben: Ersetzen von URLs innerhalb von Attributen
* Behoben: Ungültiges HTML
* Behoben: Ersetzen von URLs, die mit x.com enden
* Behoben: Anzeige der immer aktiven Anbieter

## 1.10.6

* Behoben: Erkennung für unbekannte Einbettungen
* Behoben: Erkennung für Maps Marker Pro

## 1.10.5

* Verbessert: Umbenennung von Twitter in X
* Behoben: Prüfung auf passenden Anbieter
* Behoben: Fehlende Assets für das YouTube-Overlay in Elementor
* Behoben: Ausblenden von Anbietern in den Opt-out-Shortcodes, wenn gewünscht
* Behoben: Mögliche PHP-Warnung

## 1.10.4

* Behoben: Blockieren von Einbettungen, die nach einem deaktivierten/immer aktiven Anbieter im selben Inhalt erscheinen
* Behoben: Cookie-Lebensdauer

## 1.10.3

* Behoben: Mehrfaches Ersetzen der gleichen Einbettung
* Behoben: Ersetzen von unbekannten Einbettungen
* Behoben: `Providers::get_by_name()` gibt immer einen eingebetteten Provider über zurück
* Behoben: Warnung über eine möglicherweise nicht verfügbare Asset-Version

## 1.10.2

* Behoben: Möglicher fataler Fehler bei fehlender Überprüfung der Verfügbarkeit der Funktion `is_plugin_active`

## 1.10.1

* Behoben: Korrekte Einstellung „Getestet bis“ auf WordPress 6.6

## 1.10.0

* Hinzugefügt: Vorschaubild-Unterstützung für Polylang
* Hinzugefügt: Filter zur Verhinderung des Löschens verwaister Vorschaubilder
* Hinzugefügt: Neues Style-System für ein verbessertes Markup und gültigen HTML-Code
* Verbessert: Im Fediverse freigegebene Inhalte enthalten kein Overlay mehr
* Verbessert: Es wurde deutlicher gemacht, was der Opt-out-Shortcode tut
* Behoben: Fehlende Assets auf der Blog-Startseite, wenn sie eine Einbettung enthält
* Für Entwickler: Mehr Hinweise bei veraltetem Code
* Für Entwickler: Komplette Überarbeitung des Codes des Plugins (mit vollständiger Abwärtskompatibilität). Siehe [den Migrationsleitfaden](https://epiph.yt/embed-privacy/dokumentation-embed-privacy/migration-auf-version-1-10-0/) für weitere Informationen

## 1.9.2

* Verbessert: Text für Screenreader beim Aktivieren des eingebetteten Inhalts
* Behoben: Kompatibilität mit anderen Widget-Plugins
* Behoben: Handhabung von Videos in Divi

## 1.9.1

* Behoben: Ein Fehler beim Deinstallieren des Plugins
* Behoben: Seitenverhältnis von über Divi eingebetteten Einbettungen
* Behoben: Rechtschreibung von „SlideShare“

## 1.9.0

* Hinzugefügt: Unterstützung für Vorschaubilder von WordPress TV
* Hinzugefügt: Filter, um Embed-Argumente zu filtern
* Hinzugefügt: Filter, um bestimmte Embeds zu ignorieren
* Verbessert: Stil-Generierung, um die Leistung zu verbessern und die HTML-Gültigkeit zu korrigieren
* Verbessert: Das Laden von Skripten durch Verwendung des `defer`\-Attributs
* Behoben: bestimmte gelöschte Felder nach dem Ändern eines Embed-Anbieters auf Entwurf
* Behoben: URL-Kodierung nach Ersetzungen

## 1.8.1

* Behoben: Die Ausgabe des Opt-out-Shortcodes (danke an wpdabh für die Meldung)

## 1.8.0

* Hinzugefügt: Unterstützung für Anghami
* Hinzugefügt: Filter, um die Entfernung verwaister Vorschaubilder zu deaktivieren
* Hinzugefügt: Prüfung für die PHP-DOM-Erweiterung
* Verbessert: Laden der Embed-Anbieter

## 1.7.3

* Verbessert: Kompatibilität zu Advanced Custom Fields
* Behoben: Kompatibilität zu PHP 8.2
* Behoben: Eine potenzielle PHP-Warnung, wenn ein Beitrag nicht existiert, während die Berechtigungen überprüft werden
* Behoben: Die Funktionalität des Opt-out-Shortcodes, wenn die aktuelle Website einen Port verwendet, der vom Standard abweicht
* Behoben: Bei individuellen Embeds werden nun nur noch die notwendigen Teile des eingebundenen Inhalts ersetzt
* Behoben: Ersetzen aller Vorkommnisse von individuellen Embeds im selben Inhalt
* Behoben: Mehrere unnötige Datenbank-Abfragen für die Migration vor der eigentlichen Abfrage, ob die Migration notwendig ist
* Behoben: Wiederholter Download des Vorschaubildes, wenn mehrfach derselbe Embed eingebunden wird
* Behoben: Gelöschte Vorschaubilder, wenn sie nur innerhalb von Advanced Custom Fields vorkommen
* Behoben: Ein potenzielles Sicherheitsproblem bezüglich der Ausgabe absoluter Pfade in Vorschaubild-URLs (spezieller Dank an [@kraftner](https://profiles.wordpress.org/kraftner/))
* Behoben: Generierung des CSS für das Seitenverhältnis, wenn Breite oder Höhe ein Prozentzeichen beinhalten
* Behoben: Vorschaubild-Positionierung (es ist nun horizontal und vertikal zentriert)
* Behoben: HTML-Ausgabe des Opt-out-Shortcodes

## 1.7.2

* Behoben: Erhalt der URL des Video-Shortcodes, um Inhalt von derselben (Sub-)Domain nicht zu blockieren

## 1.7.1

* Verbessert: Google-Maps-Höhe in Kadence Blocks
* Behoben: Einen JavaScript-Fehler, wenn jQuery nicht initialisiert ist
* Behoben: Potenzielle PHP-Warnung bezüglich einer nicht definierten Variable
* Behoben: Potenzielle PHP-Warnung bezüglich eines nicht definierten Hostnamens beim Abrufen der Embed-URL

## 1.7.0

* Hinzugefügt: Unterstützung für crowdsignal.net
* Hinzugefügt: Unterstützung für den/das klassische/n Video-Shortcode/-Widget
* Hinzugefügt: Unterstützung für SlideShare-Vorschaubilder (Danke an [@Lazza](https://github.com/Lazza))
* Hinzugefügt: Unterstützung für individuelle Vorschaubild-Generierung über Filter
* Behoben: Vorschaubilder werden ausgeblendet, nachdem der eingebettete Inhalt aktiviert wurde
* Behoben: Seitenverhältnis bei Embeds mit ungenauen/keinen Informationen über ihre Abmessung

## 1.6.5

* Behoben: Seitenverhältnis für Themes mit der Nicht-Standard-Inhaltsbreite
* Behoben: Handhabung des %s-Zeichens

## 1.6.4

* Behoben: Seitenverhältnis für viele oEmbeds

## 1.6.3

* Behoben: Ersetzen einiger oEmbeds
* Behoben: Potenzielle Probleme beim Abrufen eines einzelnen Embed-Anbieters
* Behoben: Löschung von Beitrags-Metadaten von Embed-Anbietern, während sie via WP-CLI bearbeitet werden

## 1.6.2

* Wiederhergestellt: Anzeige von YouTube-Vorschaubildern

## 1.6.1

* Aktualisiert: Erforderliche WordPress-Version auf 5.0
* Behoben: Textlinks zu youtube.com
* Behoben: Twitter-Embeds

## 1.6.0

* Hinzugefügt: Automatische Erkennung des Seitenverhältnisses, wenn vom Embed bereitgestellt
* Hinzugefügt: Fähigkeit, um mit HTML von normalen oEmbed-Anbietern zu funktionieren
* Hinzugefügt: Filter, um Shortcodes zu ignorieren (siehe [Dokumentation](https://epiph.yt/embed-privacy/dokumentation/#embed_privacy_ignored_shortcodes))
* Hinzugefügt: Passende Links zur neuen Dokumentation unter [https://epiph.yt/embed-privacy/dokumentation/](https://epiph.yt/embed-privacy/dokumentation/)
* Verbessert: Handhabung der Übereinstimmung von Nicht-Standard-Elementen (embed, iframe, object, siehe [Dokumentation](https://epiph.yt/embed-privacy/dokumentation/#regex-pattern))
* Behoben: Google-Map-Regex-Muster nach der Installation
* Behoben: das Verhalten des Opt-out-Shortcodes mit aktiviertem Seiten-Caching
* Behoben: Zeilenhöhe individueller Embeds in Elementor
* Allgemeine Code-Verbesserungen

## 1.5.1

* Behoben: Speichern und Anzeigen von Video-Thumbnails von Vimeo, die über die Domain player.vimeo.com eingebettet werden
* Behoben: Nicht benötigte Zeilenumbrüche mit dem klassischen Editor
* Behoben: Anzeige des Overlays, wenn ein Embed eines bekannten Embed-Anbieters nach einem Embed eines unbekannten Embed-Anbieters anzeigt wurde
* Behoben: Deinstallationsprobleme

## 1.5.0

* Hinzugefügt: Unterstützung für den Embed-Anbieter Pocket Casts
* Hinzugefügt: Unterstützung für Maps Marker und Maps Marker Pro
* Hinzugefügt: Unterstützung für Google Maps in Shortcodes Ultimate
* Hinzugefügt: Unterstützung, um automatisch ein Vorschaubild für das Embed von Vimeo und YouTube (nur in Beiträgen) herunterzuladen und anzuzeigen
* Hinzugefügt: Unterstützung, um die Datenbank-Migration erneut zu starten und eine Fehlermeldung anzuzeigen, wenn dies mindestens dreimal fehlgeschlagen ist
* Hinzugefügt: Unterstützung für Polylang und Polylang Pro
* Hinzugefügt: einen neuen Filter, um die Handhabung unbekannter Embeds in Embed Privacy zu stoppen
* Hinzugefügt: Option zum Deaktivieren des Direktlinks im Overlay
* Aktualisierte Logos für Reddit, SmugMug und SoundCloud für eine bessere Lesbarkeit
* Die Plugin-Version wird jetzt als Versions-Parameter für Assets benutzt, um besseres Caching zu ermöglichen und Probleme mit bestimmten Setups zu verhindern
* Allgemeine Code-Verbesserungen
* Behoben: Einen JavaScript-Fehler

## 1.4.8

* Behoben: Ein Problem damit, dass immer aktive Anbieter von Seiten-Caching-Plugins zwischengespeichert werden
* Behoben: Dass die Ausgabe des Inline-JavaScripts nur einmal erfolgt

## 1.4.7

* Behoben: Die Anzeige von Embeds auf Mobilgeräten, wenn Divi in Benutzung ist
* Behoben: Die Ausgabe von Assets
* Verbessert: Regulärer Ausdruck für Google Maps

## 1.4.6

* Behoben: Ein Problem, wodurch JavaScript-Assets für den Opt-out-Shortcode möglicherweise fehlten

## 1.4.5

* Behoben: Ein Problem mit der „Immer aktivieren“-Funktion von unbekannten Embed-Anbietern
* Behoben: Probleme mit fehlendem JavaScript für das Facebook-Embed von Jetpack

## 1.4.4

* Behoben: Ein potenzielles Enkodierungs-Problem
* Behoben: Fehler mit dem Facebook-Embed von Jetpack
* Behoben: Fehler beim Registrieren der Assets

## 1.4.3

* Behoben: Ein Problem, wodurch Embed-Felder nicht gespeichert werden konnten

## 1.4.2

* Behoben: Ein abgelaufener Link während der Plugin-Aktivierung und dem Erstellen eines neuen Embed-Anbieters

## 1.4.1

* Behoben: Ungültiges HTML durch die Barrierefreiheitsfunktion (es ist nun ein separater Button)
* Behoben: Unter Umständen wurden leere Link-Titel angezeigt, wenn die Website-Sprache nicht Englisch ist
* Behoben: Eine potenziell ungewünschte URL-Enkodierung im Inhalt, nachdem Embed Privacy ein Embed ersetzt hat

## 1.4.0

* Hinzugefügt: Unterstützung für Pinterest und Wolfram Cloud
* Verbessert: Migrationen, um doppelte Anbieter oder Performance-Probleme in Multisite-Installationen zu vermeiden
* Embeds können nun über die Tastatur aktiviert werden
* Hinzugefügt: Ein Link zum originalen Inhalt in der unteren rechten Ecke des Overlays
* Hinzugefügt: Unterstützung für das Caching des Opt-out-Shortcodes
* Das Klicken auf „Inhalt von X immer aktivieren“ aktiviert alle Embeds dieses Anbieters auf der aktuellen Seite sofort
* Verbessert: Markup von lokalen Tweets
* Hinzugefügt: Zusätzliche Klasse zum Auswahlkästchen-Absatz, danke an @florianbrinkmann
* Systemanbieter können nicht mehr gelöscht werden
* Behoben: Den oEmbed-Anbietername, wenn der Anbieter unbekannt ist
* Behoben: Die Ausgabe von Assets für unbekannte Embed-Anbieter

## 1.3.6

* Behoben: Das Aktivieren mehrere YouTube-Videos in Elementor
* Behoben: Die Darstellung der Seite, wenn sie einen immer aktiven Anbieter beinhaltet

## 1.3.5

* Behoben: Funktionalität in Elementor
* Behoben: Ausgabe von individuellen Embed-Anbietern
* Behoben: Mehrfache Inhaltsersetzung in Shortcodes
* Behoben: Prüfung für das Theme/Template

## 1.3.4

* Behoben: Gelöschte Metadaten, wenn ein Embed-Anbieter in den Papierkorb gelegt und dann wiederhergestellt wird
* Behoben: Embed Privacy versucht manchmal, ein Embed zweimal zu ersetzen
* Behoben: Ein Fehler, der auftrat, wenn Embed Privacy versucht, ein Embed zu ersetzen, das nicht ersetzt werden muss
* Behoben: Prüfung für die lokale Domain, Wenn WordPress selbst in einer Subdomain liegt
* Behoben: YouTube, wenn immer aktiv in Divi
* Behoben: Zeilenhöhe des Overlays in Divi

## 1.3.3

* Verbessert: Mobiles Design für responsive Embeds
* Behoben: Das Zentrieren für nicht-responsive Embeds
* Behoben: Ein deaktivierter Embed-Inhalt konnte Interaktionen mit dem Text unter dem Overlay verhindern

## 1.3.2

* Behoben: Allgemeiner Fehler bei der Aktivierung

## 1.3.1

* Behoben: Einen fatalen Fehler beim deinstallieren in Nicht-Multisites
* Behoben: Die Aktivierung via WP-CLI
* Behoben: Die Entfernung einer Option bei der Deinstallation

## 1.3.0

* Hinzugefügt: Lokale Tweets ohne Overlay
* Hinzugefügt: Option, um Daten bei der Deinstallation zu behalten
* Hinzugefügt: Kompatibilität mit dem Theme Astra
* Hinzugefügt: Filter `embed_privacy_markup`, um das gesamte Markup eines Embed-Overlays zu filtern
* Hinzugefügt: Korrekte Unterstützung für Embeds der aktuellen Domain
* Hinzugefügt: Unterstützung für Embeds mit anderen Elementen als `embed`, `iframe` und `object`
* Einbindung von Assets nur, wenn erforderlich
* Entfernt: Bilder aus der Mediathek (die in Version 1.2.0 hinzugefügt wurden). Für Standard-Embed-Anbieter werden nun Fallback-Bilder benutzt.
* Verbessert: Regulärer Ausdruck für Google Maps
* Verbessert: Texte zum besseren Verständnis
* Behoben: Sichtbarkeit des individuellen Inhaltstyps
* Behoben: Netzwerk-weite Aktivierung
* Behoben: Leeren des oEmbed-Caches

## 1.2.2

* Hinzugefügt: Eine Prüfung, ob eine Migration bereits läuft
* Behoben: Ein Fehler, wodurch das Markup der Seite unerwartet verändert werden konnte
* `<object>`\-Elemente werden nun korrekt ersetzt
* Hinzugefügt: Fehlende Textdomain zu einer Zeichenkette
* Lokale Embeds (mit derselben Domain) werden ausgeschlossen
* Behoben: Zu gierigen regulären Ausdruck von Amazon Kindle

## 1.2.1

* Behoben: Ein Fehler, wodurch das Markup der Seite unerwartet verändert werden konnte
* Behoben: Eine Warnung, wenn ein Embed-Anbieter keinen regulären Ausdruck besitzt
* Verbessert: Migrationen von Metadaten von Embed-Anbietern, um sicherzugehen, dass sie zur Datenbank hinzugefügt wurden

## 1.2.0

* Hinzugefügt: Unterstützung für die Verwaltung von Embeds (hinzufügen/entfernen/bearbeiten/deaktivieren)
* Hinzugefügt: Unterstützung für Caching-Plugins, indem eine JavaScript-Erkennung für immer aktive Embed-Anbieter hinzugefügt wurde
* Hinzugefügt: CSS-Klassen, die angeben, wie der aktuelle Status des Embeds ist (`is-disabled`/`is-enabled`)
* Hinzugefügt: Shortcode `[embed_privacy_opt_out]`, damit Benutzer ihr Einverständnis widerrufen/geben können
* Behoben: Responsives Design, wenn der Embed eine eigene Breite hinzufügt

## 1.1.3

* Geändert: Anbietername von Polldaddy zu Crowdsignal
* Entfernt: Anbieter Hulu

## 1.1.2

* Behoben: Ein potenzieller Unterschied bei den benutzen Klassennamen der Embed-Anbieter im HTML und CSS

## 1.1.1

* Entfernt: Anbieter CollegeHumor
* Behoben: Ein Fehler im Bezug mit sich automatisch hinzugefügten Absätzen

## 1.1.0

* Hinzugefügt: Die Möglichkeit, alle Embeds eines Anbieters zu erlauben
* Hinzugefügt: Anbieter TikTok, verfügbar in WordPress 5.4
* Hinzugefügt: Unterstützung für Google Maps iframes
* Hinzugefügt: URL-Umschreibung zu youtube-nocookie.com
* Hinzugefügt: Die Möglichkeit, dass Benutzer ihre Zustimmung pro Embed-Anbieter dauerhaft speichern können
* Hinzugefügt: Anbieterlogo zu unserem Platzhalter
* Hinzugefügt: Die Möglichkeit, unser Platzhalter-Markup zu filtern
* Hinzugefügt: Die Unterstützung für die Gutenberg-Klassen „alignwide“ und „alignfull“
* Hinzugefügt: Die Unterstützung zur Nutzung unseres Embed-Overlay-Mechanismus für andere Entwickler
* Verbessert: Unser Platzhalter-Markup ist nun semantisch richtig
* Geändert: Die Klassen .embed- zu .embed-privacy-
* Behoben: Manche Embed-Anbieter, die individuelles z-index benutzen, führten dazu, dass der eingebettete Inhalt über dem Overlay lag
* Behoben: Tippfehler

## 1.0.2

* Verbessert: Kompatibilität mit [Autoptimize](https://de.wordpress.org/plugins/autoptimize/)
* Verbessert: Kompatibilität mit [AMP](https://de.wordpress.org/plugins/amp/)
* Behoben: Falscher Platzhalter bei SlideShare-Links

## 1.0.1

* Unterstützung für PHP 5.6 korrigiert

## 1.0.0

* Erste Veröffentlichung
