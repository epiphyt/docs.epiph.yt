# Vorschaubild-Anbieter

Embed Privacy hat seit Version 1.9.0 eine einfach verwendbare Methode implementiert, um individuelle Vorschaubild-Anbieter hinzuzufügen. Um einen individuellen Vorschaubild-Anbieter hinzuzufügen, erweitere die abstrakte Klasse `epiphyt\Embed_Privacy\thumbnail\provider\Thumbnail_Provider` und implementiere das Interface `epiphyt\Embed_Privacy\thumbnail\provider\Thumbnail_Provider_Interface`. (Siehe auch [diesen Blogbeitrag über Embed Privacys Vorschaubild-Generierung](https://epiph.yt/blog/2024/veraenderung-an-der-vorschaubild-generierung-von-embed-privacy/) für weitere Informationen bezüglich der abstrakten Klasse und des Interfaces.)

Darin musst du nur definieren, wie das Vorschaubild heruntergeladen werden kann und wie man die Embed-ID erhält. Du findest [eine Basis-Implementierung für Vimeo](https://github.com/epiphyt/embed-privacy/blob/v1.9.0/inc/thumbnail/provider/class-vimeo.php) auf GitHub.

Verwende dann den Filter [`embed_privacy_thumbnail_providers`](/de/embed-privacy/developer/filters#embed_privacy_thumbnail_providers), um deinen individuellen Vorschaubild-Anbieter zu registrieren.
