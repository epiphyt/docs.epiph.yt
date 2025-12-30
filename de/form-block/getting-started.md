# Erste Schritte

Nach der Installation des Plugins, sollte sich in der Plugin-Übersicht – unter **Plugins** im Admin-Menü des WordPress-Backends – ein Eintrag für Form Block Pro bzw. Form Block finden. Über diesen Eintrag können die Plugins aktiviert werden. Bitte stelle sicher, dass du Form Block zuerst aktivierst (oder die Mehrfachauswahl verwendest, um beide gleichzeitig zu aktivieren).

## Erstelle dein erstes Formular

Form Block ist vollständig blockbasiert und daher nur mit dem Block-Editor (Gutenberg-Editor) kompatibel. Es kann nicht in anderen Editoren verwendet werden. Gehe zu der Seite oder dem Beitrag, zu dem you ein Formular hinzufügen möchten, und suche im Block-Inserter nach „Formular”. Wähle dann den Block „Formular” aus, um ein Formular einzufügen.

<img src="/images/form-block/form-block-inserter.png" alt="Block-Editor-Einfügefunktion mit hervorgehobenem Formularblock">

Der Formular-Block wird eingefügt und bietet eine Auswahl verschiedener Formulartypen. Du kannst die vorgegebenen Formulartypen und alle Formularfelder nach der Auswahl eines davon noch ändern/erweitern.

### Formular-Assistent

Der Formular-Assistent ist eine interaktive Methode zum Erstellen eines vollständig individuellen Formulars. Gib die gewünschten Formularfelder als durch Komma getrennte Liste ein und der Formular-Block generiert die am besten passenden Formularfelder für dich.

### Leeres Formular

Das leere Formular enthält ein einziges leeres Eingabeelement sowie einen Button zum Absenden. Es ist für vollständig individuelle Formulare vorgesehen.

### Kontaktformular

Das Kontaktformular ist für die Kontaktaufnahme mit dir optimiert und enthält Felder für Name, E-Mail-Adresse, Telefonnummer sowie eine Nachricht.

### Newsletter-Formular

Das Newsletter-Formular ist so optimiert, dass es die für die Verwendung in einem Newsletter-Formular erforderlichen Daten erfasst. Das bedeutet, dass es ein Feld für die E-Mail-Adresse und einen Button zum Absenden enthält.

## Formulare bearbeiten/erweitern

Jedes Formular enthält verschachtelte Blöcke für jedes Formularelement. Dies könnte strukturell wie folgt aussehen:

```
Formular
├── Eingabefeld
├── Auswahl
├── Textbereich
├── Spalten
│   └── Spalte
│       └── Eingabefeld
│   └── Spalte
│       └── Eingabefeld
└── Fieldset
    ├── Eingabefeld
    └── Eingabefeld
```

Du kannst entweder direkt auf einen beliebigen inneren Block klicken, um ihn auszuwählen, die Dokumentübersicht in der oberen linken Ecke des Editors verwenden oder den nächsten übergeordneten Block über das erste Symbol links in der Block-Symbolleiste auswählen.

Um neue Formularfelder hinzuzufügen, wähle entweder den Formular-Block aus und verwenden das Plus-Symbol „Block hinzufügen“ in der unteren rechten Ecke des Blocks oder wählen die drei Punkte in der Block-Werkzeugleiste eines vorhandenen Blocks innerhalb des Formulars und wählen „Davpor hinzufügen“ oder Danach hinzufügen“, je nachdem, ob du einen Block vor oder nach dem aktuell ausgewählten Block hinzufügen möchtest.

Für Formularelemente wie „Eingabefeld“, „Auswahl“ und „Textbereich“ kannst du die Beschriftung und den erforderlichen Status direkt im Inhaltsbereich des Editors festlegen. Alle weiteren Einstellungen kannst du über die Block-Seitenleiste vornehmen.

Für den Auswahl-Block kannst du auch jede auswählbare Option direkt im Inhaltsbereich festlegen, indem du im Block auf den Button „Option verwalten“ klickst. Hier kannst du eine Liste mit Optionen hinzufügen, sowohl mit dem Wert als auch mit der Beschriftung des Feldes. Wenn keine Beschriftung definiert ist, wird der Wert auch als Beschriftung angezeigt. Wenn kein Wert definiert ist, werden beim Absenden des Feldes keine Daten übermittelt (dies ist hilfreich für eine Standardoption wie „Bitte auswählen“ – deshalb gibt es eine solche Option bereits beim Hinzufügen dieses Blocks).
