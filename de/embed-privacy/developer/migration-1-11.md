# Migration auf Version 1.11.0

Version 1.11.0 von Embed Privacy enthält zwei ähnliche veraltete Funktionen, die zu Beginn des Veröffentlichungszyklus von Version 1.10.0 entwickelt und nie aktualisiert wurden. Dies ist nun in dieser Version geschehen.

Ab dieser Version ist die Verwendung des Anbieter-Namens allein in `epiphyt\Embed_Privacy\embed\Assets` und `epiphyt\Embed_Privacy\embed\Style` veraltet. Du solltest immer ein richtiges Objekt vom Typ `epiphyt\Embed_Privacy\embed\Provider` übergeben. Für eine einfache Migration erlaubt die aktuelle Version zwar noch die Verwendung des Parameters als Zeichenkette im Klassen-Konstruktur dieser beiden Klassen, aber gibt einen entsprechenden Veraltet-Hinweis darüber aus.

Zusätzlich ist die Verwendung des zweiten Parameters mit einem Inhalts-Objekt des Embed-Anbieters für diese beiden Klassen-Konstruktoren ab sofort veraltet, da das übergebene `epiphyt\Embed_Privacy\embed\Provider`\-Objekt bereits selbiges enthält. Der zweite Parameter ist damit insgesamt als veraltet anzusehen.
