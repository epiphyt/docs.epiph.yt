# Embed-Anbieter verwalten

Embed Privacy unterstützt bereits eine große Menge an Embed-Anbieter. Wenn du weitere benötigst, kannst du sie selbst hinzufügen. Dafür kannst du die Anbieter unter **Einstellungen > Embed Privacy > Einbettungen verwalten** einsehen und verwalten. Jeder Anbieter hat die folgenden Felder:

* Titel
* Beschreibung
* URL der Datenschutzerklärung
* Hintergrundbild
* Inhaltsname
* Regex-Muster
* Beitragsbild

## Titel

Der Titel des Embed-Anbieters, der innerhalb des Overlays verwendet wird.

## Beschreibung

Eine Beschreibung, die innerhalb des Overlays angezeigt wird.

## URL der Datenschutzerklärung

Eine URL zur Datenschutzerklärung des Embed-Anbieters, das im Normalfall erforderlich ist, damit die Benutzer prüfen können, ob sie den eingebetteten Inhalt laden wollen oder nicht.

## Hintergrundbild

Ein individuelles Hintergrundbild für das Overlay.

## Inhaltsname

Der Inhaltsname ist der Name eines einzelnen eingebetteten Inhalts dieses Anbieters. Für YouTube beispielsweise ist es „Video“, während es für Meetup eine „Veranstaltung“ ist. Er wird im Overlay als Teil des Direktlinks zum Inhalt verwendet. Wenn leer, wird standardmäßig „Inhalt“ verwendet.

## Regex-Muster

Ein regulärer Ausdruck, der dem Inhalt entspricht, den der Anbieter blockieren soll. Wenn du einen Anbieter von `sub.example.com` in einem Iframe abgleichen möchtest, kannst du dieses Muster verwenden:

```regexp
/<iframe src="(.*)sub\.example\.com([^"]*)"><\/iframe>/
```

Wenn dein regulärer Ausdruck kein `<` oder `>` enthält, wird er automatisch mit einer Liste umliegender Elemente erweitert. Wenn dein regulärer Ausdruck demnach nur `/sub\.example\.com/` ist, lautet der finale reguläre Ausdruck:

```regexp
/<(blockquote|div|embed|iframe|object)([^"]*)"([^<]*)sub\.example\.com([^"]*)"([^>]*)(>(.*)<\/(blockquote|div|embed|iframe|object))?>/
```

Die Liste der Elemente, die hinzugefügt werden, können über den FIlter [`embed_privacy_replacer_matcher_elements`](/de/embed-privacy/developer/filters#embed-privacy-replacer-matcher-elements) verändert werden.

Das beginnende und schließende `/` im regulären Ausdruck sind optional und werden automatisch im Code hinzugefügt, wenn sie nicht vorhanden sind.

## Beitragsbild

Das Beitragsbild wird als Logo verwendet. Die besten Ergebnisse kann mit einem Bild mit einer Höhe von 96 Pixel erzielt werden.
