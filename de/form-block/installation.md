# Installation

Lade zuerst Form Block von WordPress.org herunter:<br>
https://de.wordpress.org/plugins/form-block/

Nach dem Kauf von Form Block Pro erhältst du einen Link zum Download der Plugin-Dateien und einen Lizenzschlüssel. Für das kostenlose Form-Block-Plugin sind solche Zugangsdaten weder vorhanden noch erforderlich.

## Installation über das Backend

Die heruntergeladene `.zip`-Datei kannst du einfach über dein WordPress-Backend hochladen. Dafür benötigst du einen Benutzer-Account mit Administrator-Rechten (Superadministrator-Rechte bei Multisite Installationen). Sobald du angemeldet bist, findest du im Menü auf der linken Seite den Punkt **Plugins > Installieren** neben der Überschrift auf dieser Seite kannst über den Button „Plugin hochladen“ eine `.zip`-Datei hochladen.

## Installation via FTP

Um die heruntergeladene `.zip`-Datei per (S)FTP zu installieren, musst du sie zunächst entpacken und die enthaltenen Dateien und Verzeichnisse mit dem FTP-Programm deiner Wahl auf deinen Webspace laden.
Nach dem Upload sollten sie unter `wp-content/plugins/form-block-pro` bzw. `wp-content/plugins/form-block` abgelegt sein.

## Installation via Composer <Badge type="info" text="Seit 1.4.0" />

Composer ist eine Paketverwaltung für PHP-Projekte, die verwendet werden kann, um Form Block Pro als erforderliches Paket in deine eigenen PHP-Projekte hinzuzufügen.

### `auth.json` hinzufügen

Die `auth.json`-Datei wird in Composer verwendet, um Zugangsdaten zu verwalten. Da unser Composer-Repository eine Authentifizierung via E-Mail-Adresse und Lizenzschlüssel erfordert, füge den folgenden Inhalt zu deiner `auth.json` im Wurzelverzeichnis deines Projekts hinzu:

```json
{
	"http-basic": {
		"packages.epiph.yt": {
			"username": "your-email@domain.tld",
			"password": "146e217a-1520-437a-858a-29922787fa7d"
		}
	}
}
```

Ersetze den Wert von `username` mit der E-Mail-Adresse, die mit deiner Lizenz verbunden ist, und den Wert von `password` mit dem Lizenzschlüssel. Du findest beides in [deinem Konto](https://epiph.yt/kundenkonto/licenses/).

### Repository hinzufügen

Als nächstes musst du das Repository `packages.epiph.yt` zu deiner `composer.json`-Datei hinzufügen. Dies kann so aussehen:

```json
"repositories": [
	{
		"type": "composer",
		"url": "https://packages.epiph.yt"
	}
]
```

### Installiere das Plugin

Jetzt kannst du das Plugin via Composer mithilfe eines Befehls installieren:

```shell
composer require epiphyt/form-block-pro
```
