# Einstellungen

Standardmäßig verwendet Form Block die bestmöglichen Einstellungen. Du kannst sie unter **Einstellungen > Form Block** an deine Wünsche anpassen.

## Maximale Formular-Upload-Größe

Du kannst die maximale Upload-Größe für jedes Formular definieren. Wenn nicht definiert (Standard), wird die serverseitige Beschränkung benutzt. Diese Beschränkung findest du auch unterhalb des Feldes in seiner Beschreibung. Das Benutzen eines höheren Wertes ist technisch nicht möglich.

## Datenhandhabung

### Speichern lokaler Übermittlungen

Übermittelte Formulardaten werden standardmäßig für 30 Tage in der Datenbank und auf dem Server gespeichert. Du kannst den Wert hier anpassen. Wenn du ihn auf 0 setzt, werden Formularübermittlungen niemals automatisch gelöscht. Das kann manuell unter **Werkzeuge > Formularübermittlungen** erfolgen.

### Daten bei der Deinstallation behalten

Aktiviere diese Option, um alle Daten bei der Deinstallation von Form Block zu behalten, z. B. wenn du etwas testest oder planst, Form Block in Zukunft erneut zu benutzen. Andernfalls werden alle Daten von Form Block bei der Deinstallation gelöscht. Bitte behalte im Hinterkopf, dass hinzugefügte Formulare im Block-Editor dennoch manuell entfernt werden müssen, da der Inhalt von Seiten/Beiträgen von Form Block nicht verändert wird.

## Einverständniserklärung <Badge type="tip" text="Nur in Form Block Pro" />

Die Idee der Einverständniserklärung ist, dass du ein einzelnes, globales Feld hast, um einen Text für eine explizite Einwillung zu definieren, die der Benutzer geben muss, um der erforderlichen Datenverarbeitung nach Absenden des Formulars zuzustimmen. Der aktuelle rechtliche Stand ist jedoch, dass dies nicht notwendig ist, da das Ausfüllen und Übermitteln des Formulars bereits implizit eine entsprechende Zustimmung darstellt. Andernfalls kannst du nichts mit den übermittelten Daten tun.

Diese Einstellung ist nach wie vor vorhanden, solltest du ein solches Feld benutzen, damit du den Text für die globale Einverständniserklärung anpassen kannst.
