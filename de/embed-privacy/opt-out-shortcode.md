# Opt-out-Shortcode

Besucher können einen Embed-Anbieter dauerhaft erlauben, indem sie in einem Overlay „Inhalte von … immer anzeigen“ auswählen. Diese Entscheidung wird ein Jahr lang im Cookie `embed-privacy` gespeichert; die Inhalte dieses Anbieters werden danach auf jeder Seite direkt geladen, ohne erneut zu fragen.

Der Shortcode `[embed_privacy_opt_out]` bietet den Weg zurück: Er gibt eine Liste von Checkboxen aus – eine je Embed-Anbieter –, mit denen die Zustimmung wieder zurückgenommen werden kann. Der empfohlene Platz dafür ist deine Datenschutzerklärung.

```
[embed_privacy_opt_out]
```

::: tip
Mit den Standardattributen enthält die Liste nur die Anbieter, denen der Besucher bereits zugestimmt hat – und der gesamte Block wird von der Seite entfernt, wenn es keine gibt. Bei einem ersten Besuch sieht es deshalb so aus, als wäre gar nichts ausgegeben worden. Verwende `show_all="1"`, wenn die Liste immer sichtbar sein soll.
:::

Der Shortcode hat die folgenden Attribute:

* `headline`
* `headline_level`
* `show_all`
* `subline`

## headline

Der Text der Überschrift über der Liste. Standard: „Embed-Anbieter“.

```
[embed_privacy_opt_out headline="Meine eigene Überschrift"]
```

Die Überschrift beschriftet die Liste der Anbieter auch für assistive Technologien und sollte daher beschreiben, worum es in der Liste geht.

## headline_level <Badge type="info" text="Seit 1.13.1" />

Die Überschriftenebene der Überschrift, von `1` bis `6`. Standard: `3`. Werte außerhalb dieses Bereichs werden auf die nächstgelegene gültige Ebene begrenzt.

```
[embed_privacy_opt_out headline_level="2"]
```

Damit fügst du den Block in die Überschriftenstruktur der Seite ein, auf der er steht. Wenn deine Datenschutzerklärung `<h2>` für ihre Abschnitte verwendet, ist ein `<h3>` (der Standard) richtig, sofern der Shortcode innerhalb eines solchen Abschnitts steht – `headline_level="2"` ist richtig, wenn er einen eigenen Abschnitt bildet.

## show_all

Ob alle bekannten Embed-Anbieter aufgelistet werden sollen statt nur derer, denen der Besucher zugestimmt hat. Standard: `0`.

```
[embed_privacy_opt_out show_all="1"]
```

Mit `show_all="1"` wird jeder Anbieter aufgeführt, und die vom Besucher aktivierten sind als ausgewählt gekennzeichnet. So können Besucher einem Anbieter auch vorab zustimmen, ohne vorher auf einen seiner eingebetteten Inhalte zu stoßen.

## subline

Ein erklärender Absatz unterhalb der Überschrift. Standard: „Aktiviere oder deaktiviere Embed-Anbieter global. Wenn du einen Anbieter aktivierst, werden dessen eingebettete Inhalte auf jeder Seite direkt angezeigt, ohne dich erneut zu fragen.“

```
[embed_privacy_opt_out subline="Meine eigene Unterüberschrift"]
```

## Attribute kombinieren

Alle Attribute lassen sich kombinieren:

```
[embed_privacy_opt_out headline="Meine eigene Überschrift" headline_level="2" subline="Meine eigene Unterüberschrift" show_all="1"]
```

## Ausgabe anpassen

Die Überschrift und die Unterüberschrift lassen sich außerdem programmatisch über die Filter [`embed_privacy_opt_out_headline`](/de/embed-privacy/developer/filters#embed-privacy-opt-out-headline) und [`embed_privacy_opt_out_subline`](/de/embed-privacy/developer/filters#embed-privacy-opt-out-subline) ändern.
