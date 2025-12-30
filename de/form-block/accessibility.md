# Barrierefreiheit

Form Block Pro und Form Block geben dir eine Menge Werkzeuge, um die Barrierefreiheit der Formulare zu verbessen. Standardmäßig benutzen sie bereits bewährte Methoden für Dinge wie Fehlerbehandlung u. Ä., um die bestmögliche Barrierefreiheit zu bieten. Da Formularfelder aber im Normalfall manuell erstellt werden, solltest du sicherstellen, dass du diese Werkzeuge auch benutzt.

## Formularbeschriftung

Die Formularbeschriftung wird benutzt, um das Formular sauber zu benennen. Je nach verwendetem Screenreader kann sie dann dafür benutzt werden, direkt aus einem speziellen Menü heraus zu dem Formular zu springen. Auch ist es wesentlich angenehmer, wenn ein „Newsletter-Formular“ als solches beschriftet ist (genauso wie ein „Kontaktformular“, eine „Umfrage zu XYZ“ etc.), sodass Benutzer, die einen Screenreader benutzen, direkt erkennen können, um was für einen Typ Formular es sich handelt.

Die Formularbeschriftung wird ebenfalls als Identifizierungsmerkmal des Formulars innerhalb der [Tabelle der Formularübermittlungen](/de/form-block/getting-started/form-submissions) benutzt.

## Autovervollständigung

Die Autovervollständigung ist ein netter Weg, um den Browser die Arbeit machen zu lassen. Richtig definiert, kann der Browser Werte für die Formularfelder bereits vorausfüllen oder zumindest vorschlagen (z. B. Name, Adresse, Stadt etc.). Form Block Pro und Form Block kommen bereits mit einer genischen Liste bekannter Übereinstimmungen für Formularelement-Beschriftungen und ihrem jeweiligen Wert zur Autovervollständigung und versuchen dadurch bereits automatisch, den richtigen Wert zu setzen. Wenn das jedoch nicht funktioniert oder der falsche Wert gesetzt wird, kannst (und solltest) du den richtigen Wert zur Autovervollständigung aus der Liste der verfügbaren wählen – wenn es einen passenden Wert gibt.

## Aria-Beschreibung <Badge type="tip" text="Nur in Form Block Pro" />

Da Form Block Pro nicht den genauen Zweck des Formularelements kennt, kann es keine integrierte Beschreibung für ein Feld anbieten. Um das zu ermöglichen, kannst du eine Aria-Beschreibung für jedes Formularelement hinzufügen, um anzugeben, wie das Feld ausgefüllt werden muss, bevor es der Benutzer überhaupt probiert hat.

## Fehlermeldung <Badge type="tip" text="Nur in Form Block Pro" />

Da Form Block Pro nicht den genauen Zweck des Formularelements kennt, ist die Fehlermeldung bei ungültigen Angaben eines Formularelements eher generisch. Um das zu verbessern, kannst du eine individuelle Fehlermeldung für jedes Formularelement in der Block-Seitenleiste hinzufügen, um eine spezifischere Nachricht darüber anzubieten, wie das Formularfeld richtig ausgefüllt werden kann.
