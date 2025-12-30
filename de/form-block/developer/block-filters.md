# Block-Filter

## Daten

### `formBlock.data.attributes`

Über den Filter `formBlock.data.attributes` können die Daten der Formularelement-Attribute geändert werden.

Parameter:  
object	Liste der Formularelement-Attribute

Erwartet ein Objekt.

## Fieldset

### `formBlock.fieldset.allowedBlocks`

Über den Filter `formBlock.fieldset.allowedBlocks` können die erlaubten Blöcke innerhalb eines Fieldsets geändert werden.

Parameter:  
string[]	Liste erlaubter Blöcke

Erwartet ein Array.

## Formular

### `formBlock.controls.additionalPrimaryPanelControls`

Über den Filter `formBlock.controls.additionalPrimaryPanelControls` können die zusätzlichen Kontrollelemente im primären Block-Panel geändert werden.

Parameter:  
JSX.Element|null	Zusätzliche Kontrollelemente.

Erwartet ein JSX.Element oder null.

### `formBlock.form.template.contact`

Über den Filter `formBlock.form.template.contact` können die Standardfelder für ein Kontaktformular-Template geändert werden.

Parameter:  
array	Liste an Blöcken

Erwartet ein Array.

### `formBlock.form.template.default`

Über den Filter `formBlock.form.template.default` können die Standardfelder für ein Formular-Template geändert werden.

Parameter:  
array	Liste an Blöcken

Erwartet ein Array.

### `formBlock.form.template.newsletter`

Über den Filter `formBlock.form.template.newsletter` können die Standardfelder für ein Newsletterformular-Template geändert werden.

Parameter:  
array	Liste an Blöcken

Erwartet ein Array.

### `formBlock.wizard.fieldMatches`

Über den Filter `formBlock.wizard.fieldMatches` können die Zuweisungen von spezifischen Feldtypen im Assistenten geändert werden.

Parameter:  
object	Zuweisungen von Feldtyp zu den Titeln von Bezeichnungen

Erwartet ein Objekt.

### `formBlock.wizard.consentCheckboxBlock`

Über den Filter `formBlock.wizard.consentCheckboxBlock` kann der Block zur Einwilligung im Assistenten geändert werden.

Parameter:  
object	Block zur Einwilligung

Erwartet ein Objekt.

## Eingabefeld

### `formBlock.module.datePicker.allowedInputTypes`

Über den Filter `formBlock.module.datePicker.allowedInputTypes` können die erlaubten Feldtypen für das Datumsauswahl-Modul geändert werden,

Parameter:  
array	Liste erlaubter Feldtypen

Erwartet ein Array.

### `formBlock.input.attributes`

Über den Filter `formBlock.input.attributes` können die Attribute für einen Eingabefeld-Block geändert werden.

Parameter:  
object	Block-Attribute

Erwartet ein Objekt.

### `formBlock.input.controlTypes`

Über den Filter `formBlock.input.controlTypes` können die Kontrollelement-Typen für die Eingabefeld-Attribute geändert werden.

Parameter:  
array	Daten der Kontrollelement-Typen

Erwartet ein Array.

### `formBlock.input.controls`

Über den Filter `formBlock.input.controls` können zusätzliche Kontrollelemente für den Eingabefeld-Block ausgegeben werden.

Parameter:  
JSX.Element|null	Zusätzliche Kontrollelemente

Erwartet ein JSX.Element oder null.

### `formBlock.input.htmlTypes`

Über den Filter `formBlock.input.htmlTypes` können Daten für Eingabefeld-Typen geändert werden.

Parameter:  
object	Daten für Eingabefeld-Typen

Erwartet ein Objekt.

## Auswahl

### `formBlock.select.attributes`

Über den Filter `formBlock.select.attributes` können die Attribute für einen Auswahl-Block geändert werden.

Parameter:  
object	Block-Attribute

Erwartet ein Objekt.

### `formBlock.select.controlTypes`

Über den Filter `formBlock.select.controlTypes` können die Kontrollelement-Typen für die Auswahl-Attribute geändert werden.

Parameter:  
array	Daten der Kontrollelement-Typen

Erwartet ein Array.

### `formBlock.select.controls`

Über den Filter `formBlock.select.controls` können zusätzliche Kontrollelemente für den Auswahl-Block ausgegeben werden.

Parameter:  
JSX.Element|null	Zusätzliche Kontrollelemente

Erwartet ein JSX.Element oder null.

## Textbereich

### `formBlock.textarea.attributes`

Über den Filter `formBlock.textarea.attributes` können die Attribute für einen Textbereich-Block geändert werden.

Parameter:  
object	Block-Attribute

Erwartet ein Objekt.

### `formBlock.textarea.controlTypes`

Über den Filter `formBlock.textarea.controlTypes` können die Kontrollelement-Typen für die Textbereich-Attribute geändert werden.

Parameter:  
array	Daten der Kontrollelement-Typen

Erwartet ein Array.

### `formBlock.textarea.controls`

Über den Filter `formBlock.textarea.controls` können zusätzliche Kontrollelemente für den Textbereich-Block ausgegeben werden.

Parameter:  
JSX.Element|null	Zusätzliche Kontrollelemente

Erwartet ein JSX.Element oder null.
