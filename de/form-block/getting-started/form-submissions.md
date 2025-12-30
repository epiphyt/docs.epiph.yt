# Formularübermittlungen

Standardmäßig speichern Form Block Pro und Form Block übermittelte Formulardaten für jedes Formular unter **Werkzeuge > Formularübermittlungen**. Dieser Untermenüpunkt ist verfügbar, sobald es mindestens eine Formularübermittlung gibt. Dort findest du alle Details der übermittelten Formulardaten in einer Tabelle.

## Daten

Hier findest du die Formular-Beschriftung, wenn eine individuelle hinzugefügt wurde, wodurch du unterschiedliche Formulare unterscheiden kannst. Mit einem Klick auf den Button „Übermittelte Daten anzeigen“ erhältst du eine Liste aller Felder und Dateien, die mit dieser Anfrage übermittelt wurden.

## Quelle

Hier findest du die Seite/den Inhalt verlinkt, auf der/dem das Formular abgesendet wurde, sodass du direkt dorthin wechseln kannst.

## Datum

Das Datum an dem die Formulardaten übermittelt wurden.

## Aktionen

### Antworten <Badge type="tip" text="Nur in Form Block Pro" />

Du kannst direkt auf eine Formularübermittlung aus dem Backend heraus antworten. Klicke auf den Button „Antworten“ und ein Modal erscheint, in dem du mit einem umfangreichen Editor direkt auf die Übermittlung antworten kannst. Das ist jedoch nur möglich, wenn es in den übermittelten Daten eine E-Mail-Adresse gibt.

Du kannst auch hier alle übermittelten Daten innerhalb des Modals anzeigen, indem du auf den Button „Übermittelte Daten anzeigen“, identisch wie in der Ansicht der Tabelle selbst.

### Löschen

Standardmäßig werden Formularübermittlungen nach 30 Tagen gelöscht. Das kann in den [Einstellungen](/de/form-block/settings#speichern-lokaler-übermittlungen) konfiguriert werden. Wenn du manuell eine einzelne Formularübermittlung löschen möchtest, kannst du das durch einen Klick auf den Button „Löschen“ tun. Diese Aktion wird sofort ausgeführt und kann nicht rückgängig gemacht werden.

## Durchsuchen/Filtern

Oberhalb der Tabelle kannst du auch nach Formulardaten suchen und sie nach einem spezifischen Formular filtern. Für letzteres wird die Formular-Beschriftung benutzt, wenn definiert. Da mehrere Formulare identische Namen besitzen können, wird in solchen Fällen auch die ID der einzelnen Formular im Filter angezeigt. Diese IDs sind nur im Quellcode jedes Formulars als verstecktes Eingabefeld vorzufinden, was folgendermaßen aussehen kann:

```html
<input type="hidden" name="_form_id" value="a532ccd4-d671-4aac-9e80-d4bce1e89d5d" />
```

Hier erkennst du die ID als `a532ccd4-d671-4aac-9e80-d4bce1e89d5d` innerhalb des Attributes `value`.
