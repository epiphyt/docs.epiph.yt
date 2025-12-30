# Formularelemente

Formulare sind relativ komplex. Deshalb gibt es eine ganze Reihe an Formularelementen, die du in Form Block Pro und Form Block benutzen kannst. Wenn du weißt, wie Formulare technisch aufgebaut sind, kann es gut sein, dass du nachfolgend nichts neues erfährst.

## Formular

Das erste und vollständig umgebende Element ist das Formular selbst. Es definiert das allgemeine Verhalten des Formulars und was mit den Daten nach dem Absenden passiert.

### Übermittlungen lokal speichern

Du kannst das lokale Speichern von Übermittlungen für dieses spezifische Formular explizit deaktivieren, wenn die [globale Option zum lokalen Speichern von Formularübermittlungen](/de/form-block/settings#speichern-lokaler-ubermittlungen) dafür aktiviert ist.

### Individueller Betreff

Du kannst einen individuellen Betreff angeben, der verwendet wird, wenn die E-Mail mit den übermittelten Formularfeldern an den/die entsprechenden Empfänger versendet wird.

### Beschriftung

Du kannst eine Beschriftung definieren, die den Benutzern mitteilt, um was für eine Art Formular es sich handelt. Sie wird für Screenreader benutzt, um den Typ des Formulars direkt anzukündigen, um es besser zu verstehen. Sie wird auch in der Liste der [Formularübermittlungen](/de/form-block/getting-started/form-submissions) angezeigt.

### Individuelle Empfänger <Badge type="tip" text="Nur in Form Block Pro" />

Du kannst eine Liste mit einer oder mehrerer E-Mail-Adressen definieren, an die die übermittelten Formularfelder gesendet werden. Standardmäßig werden sie zum Website-Administrator geschickt, wie unter **Einstellungen > Allgemein > Administrator-E-Mail-Adresse** definiert.

### Individuelle Formular-Action <Badge type="tip" text="Nur in Form Block Pro" />

Du kannst ein individuelles Ziel festlegen, an das die Formularfelder gesendet werden. Wenn in Benutzung, stelle sicher, dass dort die serverseitige Überprüfung sichergestellt ist, da die integrierte Überprüfung von Form Block Pro dann nicht greift. Die Daten werden direkt an die angegebene URL weitergegeben.

### Individuelle Umleitungsseite <Badge type="tip" text="Nur in Form Block Pro" />

Standardmäßig zeigt Form Block Pro den Status der Formularübermittlung unter dem Formular selbst an, nachdem man auf den Absenden-Button geklickt hat. Wenn du stattdessen deine Benutzer auf eine andere Seite umleiten willst, kannst du diese hier definieren.

### Maximale Upload-Größe <Badge type="tip" text="Nur in Form Block Pro" />

Neben der [globalen Option bezüglich der maximalen Upload-Größe](/de/form-block/settings#maximimale-formular-upload-große) kannst du eine individuelle maximale Upload-Größe für das gesamte Formular hier definieren. Dieselbe Begrenzungungen wie für die globale Option greifen hier.<br>
Unterstützte Einheiten: B, KB/KiB, MB/MiB, GB/GiB

### Maximale Upload-Größe pro Datei <Badge type="tip" text="Nur in Form Block Pro" />

Du kannst eine individuelle maximale Upload-Größe für jede Datei festlegen.<br>
Unterstützte Einheiten: B, KB/KiB, MB/MiB, GB/GiB

## Eingabefeld

Ein Eingabefeld ist ein Formularelement, um eine einzelne Zeile an Inhalt hinzuzufügen. Je nach definiertem Typ, der ab Form Block 1.7.0 als Block-Variation bereitsteht, bietet es verschiedene Eingabemöglichkeiten. Du findest eine Beschreibung der Variationen durch das Öffnen des Auswahlfelds „In Variation umwandeln“ in seiner Block-Seitenleiste. Du findest ebenfalls eine etwas technischere Beschreibung im [Mozilla Developer Network](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input).

Während Form Block die wichtigsten Eingabefeld-Variationen beinhaltet, kommt Form Block Pro mit allen weiteren, die Teil des HTML-Standards sind.

## Auswahl

Ein Auswahlfeld ist ein Drop-down-Feld, das es erlaubt, eine Option aus einer vordefinierten Liste an Optionen auszuwählen. Sofern aktiviert, kann es auch benutzt werden, um mehrere Optionen auf einmal auszuwählen. Dann wird es allerdings nicht mehr als Drop-down-Feld angezeigt, sondern als Liste innerhalb eines Containers, in dem man jede Option auswählen kann. Die Optionen müssen im Editor durch einen Klick auf den Button „Optionen verwalten“ neben dem Auswahlfeld selbst definiert werden.

Hier kannst du eine Liste mit Optionen hinzufügen, sowohl mit dem Wert als auch mit der Beschriftung des Feldes. Wenn keine Beschriftung definiert ist, wird der Wert auch als Beschriftung angezeigt. Wenn kein Wert definiert ist, werden beim Absenden des Feldes keine Daten übermittelt (dies ist hilfreich für eine Standardoption wie „Bitte auswählen“ – deshalb gibt es eine solche Option bereits beim Hinzufügen dieses Blocks).

## Textbereich

Ein Textbereich ist ein mehrzeiliges Eingabefeld, das für längeren Text benutzt werden kann.

## Fieldset

Ein Fieldset kann benutzt werden, um einzelne Felder mit identischem Kontext zu gruppieren. Es besteht aus einer Legende (die den Titel repräsentiert) und mehreren zusammengehörenden Feldern. Diese Felder können jedes mögliche Eingabefeld, Auswahlfeld und/oder Textbereich sein. Eine Beispiel-Implementierung wäre eine Multiple-Choice-Frage mit einer Liste an Radio-Eingabefeldern oder ein Feld für eine Kreditkartennummer, bei der jede Vierergruppe der Kreditkartennummer ein eigenes Eingabefeld ist. Es wird ebenfalls automatisch für die individuellen Eingabefeld-Typen für Datum/Uhrzeit mit separaten Eingabefeldern für Tag, Monat, Jahr, Stunde und Minute benutzt.

Wenn mit einem Screenreader benutzt, wird die Legende des Fieldsets bei jedem Feld innerhalb des Fieldsets am Ende zusätzlich angekündigt. Benutze es demnach nur, wenn solch ein Kontext notwendig ist, um die Felder richtig auszufüllen.

## Repeater <Badge type="tip" text="Nur in Form Block Pro" />

Ein Repeater-Element kann benutzt werden, um mehrere identische Felder hinzuzufügen. Wenn du z. B. eine Liste an Elementen auf strukturierte Weise erfassen willst, kannst du ein Repeater-Element benutzen und der Benutzer kann mehrere Elemente jeweils durch einen einzelnen Klick hinzufügen, wenn nötig. Alle Felder innerhalb eines Repeaters werden beim Klick auf diesen Button wiederholt.

In der Block-Seitenleiste kannst du außerdem eine Repeater-Beschriftung definieren, die über allen wiederholten Feldern in Formularübermittlungen oder der E-Mail steht, die an den/die Empfänger gesendet wird. Sie wird nur für bessere Datenhandhabung nach Übermittlung des Formulars benutzt und wird nirgendwo im Frontend den Benutzern angezeigt.

## Einverständniserklärung <Badge type="tip" text="Nur in Form Block Pro" />

Dieses Feld fügt automatisch ein Auswahlkästchen im Frontend mit einer global definierten Einverständniserklärung hinzu (siehe die [Einverständniserklärung-Einstellung](/de/form-block/settings#einverständniserklärung) für weitere Informationen). Du kannst auch eine individuelle Nachricht hier hinzufügen, wenn die globale nicht passend ist.

## Name-Attribut

Das Name-Attribut eines Formularelements hat eine besondere Bedeutung, weshalb es nachfolgend explizit beschrieben ist. Es wird benutzt, um den übermittelten Wert eines Formulars mit dem definierten Formularelement im Editor zusammenzubringen. Deshalb muss es einzigartig sein. Wenn mehrere Felder denselben Namen haben und auf derselben Ebene sind (Repeater-Felder beispielsweise bilden eine neue Ebene), überschreiben sie sich gegenseitig. Der Wert des zweiten Felds wird dann den Wert des ersten Felds überschreiben und so weiter.

Es kann aber auch notwendig sein, identische Namen für unterschiedliche Felder zu benutzen. Für Eingabefelder des Typs „Radio“ z. B. sollte der Name identisch sein, wenn man nur einen der verfügbaren Werte auswählen können soll. Auf diese Art udn Weise sind die Felder miteinander verbunden und jedes Mal, wenn ein Wert ausgewählt wird, wird die Auswahl der anderen Radio-Felder automatisch vom Browser entfernt.

Standardmäßig wird der Name automatisch aus der Beschriftung des Felds generiert. You kannst ihn aber in der Block-Seitenleiste überschreiben. Wenn die Beschriftung nicht mit dem generierten Wert übereinstimmt, wird ein Warn-Icon neben der Beschriftung angezeigt, da es eigentlich übereinstimmen sollte. Wenn das aber Absicht war, kannst du diese Warnung ignorieren.
