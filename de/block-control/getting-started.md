# Erste Schritte

Nach der Installation des Plugins findest du den Eintrag Block Control in der Plugin-Übersicht – im **Plugins**-Menüeintrag des WordPress-Backends. Du kannst dort das Plugin aktivieren.

Nach dem Aktivieren von Block Control findest du einen neuen Abschnitt namens „Sichtbarkeit“ bei jedem Block in der Block-Seitenleiste, wo du diesen Block unter bestimmten Bedingungen verstecken kannst. Block Control versteckt Blöcke nicht via CSS, sondern deaktiviert die gesamte Ausgabe des Blocks. Deshalb ist es nicht kompatibel mit Caching-Systemen, die nicht zwischen diesen Einstellungen unterscheiden können (z. B. unterschiedliche Caches für unterschiedliche Gerätetypen oder Benutzerrollen).

Ebenso gibt es eine neue Formatierungseinstellung in formatierbaren Textbereichen, um Text als „Screenreader-Text“ zu markieren, wodurch der Inhalt visuell versteckt und nur Screenreadern vorgelesen wird.

## Gerätetypen

Du kannst den Block für Desktop- oder Mobilbenutzer ausblenden, oder auch nur für Screenreader. Letzteres versteckt den Block nicht visuell, sondern nur für assistive Technologien.

Die Erkennung für Mobilbenutzer wird nur anhand der Browserkennung (User-Agent) vorgenommen.

## Anmeldestatus

Du kannst den Block für alle angemeldeten Benutzer oder Gäste verstecken.

## Datum

Du kannst den Block basierend anhand eines Datums verstecken. Wenn du nur das „Ausblendedatum“ definierst, wird der Block ab diesem Datum versteckt sein. Wenn du auch ein „Anzeigedatum“ definierst, wird der Block ab diesem Datum nicht mehr versteckt sein.

Wenn du nur ein „Anzeigedatum“ definierst, wird der Block bis zu diesem Datum versteckt sein.

## Benutzerrollen

Du kannst den Block für jede in deiner WordPress-Instanz registrierten Benutzerrolle verstecken. Du kannst auch mehrere Rollen auf einmal auswählen.

## Spezifische Seiten-Typen

Du kannst den Block für spezifische Seiten-Typen verstecken, die in WordPress technisch einzigartig sind. Das sind beispielsweise die Blog-Seite, die Titelseite, Kategorien etc.

Als eine separate Option kannst du Inhalte auch innerhalb von Feeds verstecken. <Badge type="info" text="Seit 1.6.0" />

## Nummerierte Seiten

Du kannst den Block auf nummerierten Seiten verstecken, z. B. auf einzelnen Seiten innerhalb eines Archivs. Es gibt einige vordefinierte Werte, aber du kannst auch die Seitennummern spezifisch angeben, auf denen du den Block verstecken willst.

## Inhaltstypen

Du kannst den Block auf einzelnen Elementen des aktuellen Inhaltstyps verstecken. Wenn du eine Seite bearbeitest, kannst du hier Seiten definieren. Wenn du einen Blogbeitrag bearbeitest, kannst du hier Blogbeiträge definieren. Wenn du die Sichtbarkeitseinstellungen im Website-Editor oder dem Widget-Bereich verwendest, werden alle registrierten Inhaltstypen angezeigt (mit Ausnahme einiger systemrelevanter Inhaltstypen wie z. B. Navigationsmenü-Einträge, Block-Vorlagen etc.).
