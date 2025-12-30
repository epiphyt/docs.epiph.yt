# Filters

## Blockdaten

### `form_block_data_form`

Über den Filter `form_block_data_form` können die Blockdaten eines Formulars geändert werden, bevor sie in der Datenbank gespeichert werden.

Parameter:  
array	$form_data Die aktuellen Blockdaten, die gespeichert werden  
array	$block Die originalen Blockdaten  
string	$form_id Die Formular-ID  

Erwartet ein Array.

### `form_block_get_form_data`

Über den Filter `form_block_get_form_data` können die Blockdaten eines Formularelements geändert werden, bevor sie in der Datenbank gespeichert werden.

Parameter:  
array	$field_data Die Blockdaten des Feldes  
array	$blocks Blöcke aus parsed_blocks()  
array	$data Aktuelle Formulardaten  
string	$form_id Die Formular-ID  

Erwartet ein Array.

### `form_block_get_data`

Über den Filter `form_block_get_data` können die Formulardaten eines Formulars geändert werden, bevor sie in der Datenbank gespeichert werden.

Parameter:  
mixed[]	$data Aktuelle Formulardaten  
mixed[]	$block Aktueller geparster Block  
string	$form_id Die Formular-ID  
mixed[]	$field_data Felddaten  
string	$context Block-Kontext  

Erwartet ein Array.

### `form_block_block_context_prefixes` <Badge type="info" text="Seit Form Block 1.5.2" />

Über den Filter `form_block_block_context_prefixes` the current block context prefix can be filtered.

Parameter:  
string[]	$context_prefixes List of prefixes

Erwartet ein Array.

### `form_block_data_ignored_context` <Badge type="info" text="Seit Form Block 1.5.2" />

Über den Filter `form_block_data_ignored_context` kann die Liste ignorierter Kontexte geändert werden.

Parameter:  
string[]	$ignored_contexts Aktuelle ignorierte Kontexte  
mixed[]		$block Aktueller geparster Block  

Erwartet ein Array.

## Formular-Block

### `form_block_form_action`

Über den Filter `form_block_form_action` kann die Action eines Formulars geändert werden.

Parameter:  
string	$url Die Action-URL  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_form_id`

Über den Filter `form_block_form_form_id` kann die ID eines Formulars geändert werden.

Parameter:  
string	$form_id Die Formular-ID  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_id_input`

Über den Filter `form_block_form_id_input` kann das ID-Eingabefeld eines Formulars geändert werden.

Parameter:  
string	$form_id_input Das ID-Eingabefeld  
string	$form_id Die Formular-ID  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_object_inputs` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_object_inputs` können die Objekt-Eingabefelder eines Formulars geändert werden.

Parameter:  
string	$object_inputs Die Objekt-Eingabefelder  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_honeypot_code`

Über den Filter `form_block_honeypot_code` kann der Honeypot-HTML-Code eines Formulars geändert werden.

Parameter:  
string	$honeypot Der Honeypot-Code  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_label` <Badge type="info" text="Seit Form Block 1.5.0" />

Über den Filter `form_block_form_label` kann die Beschriftung eines Formulars geändert werden.

Parameter:  
string	string	$label Formular-Beschriftung  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_maximum_upload_size`

Über den Filter `form_block_form_maximum_upload_size` kann die allgemeine maximale Upload-Größe eines Formulars geändert werden.

Parameter:  
int		$maximum_upload_size Aktuelle maximale Upload-Größe  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine ganze Zahl oder Zeichenfolge.

### `form_block_form_maximum_upload_size_per_file`

Über den Filter `form_block_form_maximum_upload_size_per_file` kann die maximale Upload-Größe pro Datei eines Formulars geändert werden.

Parameter:  
int		$maximum_upload_size Aktuelle maximale Upload-Größe pro Datei  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine ganze Zahl oder Zeichenfolge.

### `form_block_form_method`

Über den Filter `form_block_form_method` kann die Methode eines Formulars geändert werden.

Parameter:  
string	$method Die Formular-Methode  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_required_notice`

Über den Filter `form_block_form_required_notice` kann der Hinweis für erforderliche Felder eines Formulars geändert werden.

Parameter:  
string	$notice Der Hinweis für erforderliche Felder  
string	$block_content Der Block-Inhalt  
array	$block Block-Attribute  

Erwartet eine Zeichenfolge.

### `form_block_form_style` <Badge type="info" text="Seit Form Block 1.0.1" />

Über den Filter `form_block_form_style` können die Block-Stile des Formular-Blocks geändert werden.

Parameter:  
string[]	$styles Aktuelle Block-Stile

Erwartet eine Zeichenfolge.

### `form_block_pro_dropzone_delete_icon`

Form Block Pro only

Über den Filter `form_block_pro_dropzone_delete_icon` kann das Löschen-Icon der Dropzone geändert werden.

Parameter:  
string $delete_icon Aktuelles Löschen-Icon

Erwartet eine Zeichenfolge.

### `form_block_pro_dropzone_icon`

Form Block Pro only

Über den Filter `form_block_pro_dropzone_icon` kann das Icon der Dropzone geändert werden.

Parameter:  
string	$icon Das aktuelle SVG-Icon

Erwartet eine Zeichenfolge.

### `form_block_pro_dropzone_template`

Form Block Pro only

Über den Filter `form_block_pro_dropzone_template` kann das Dropzone-Template geändert werden.

Parameter:  
string	$template Das aktuelle Template

Erwartet eine Zeichenfolge.

## Formulardaten

### `form_block_empty_nonce`

Die Action `form_block_empty_nonce` feuert, nachdem verifiziert wurde, dass die Nonce leer ist oder fehlt.

### `form_block_invalid_data`

Die Action `form_block_invalid_data` feuert, nachdem eine Anfrage als ungültig erkannt wurde.

### `form_block_invalid_nonce`

Die Action `form_block_invalid_nonce` feuert, wenn eine Anfrage eine ungültige Nonce hat.

### `form_block_is_honeypot_filled`

Die Action `form_block_is_honeypot_filled` feuert, nachdem eine Anfrage aufgrund eines ausgefüllten Honeypots als ungültig erkannt wurde.

### `form_block_pre_validated_data`

Die Action `form_block_pre_validated_data` feuert, bevor Daten überprüft wurden.

Parameter:  
string	$form_id Die Formular-ID

### `form_block_validated_data`

Die Action `form_block_validated_data` feuert, nachdem Daten überprüft wurden.

Parameter:  
string	$form_id Die Formular-ID  
array	$fields Überprüfte Felder  
array	$validated_files Überprüfte Dateien  
array	$local_files Daten lokaler Dateien  

### `form_block_submit_data` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_submit_data` können die Statusdaten jedes Übermittlungstyps geändert werden.

Parameter:  
bool[]	$success Eine Liste erfolgreicher oder fehlgeschlagener Übermittlungsmethoden  
string	$form_id Die Formular-ID  
array	$fields Überprüfte Felder  
array	$files Datei-Daten  

Erwartet ein Array.

### `form_block_submit_success_data` <Badge type="info" text="Seit Form Block 1.0.3" />

Über den Filter `form_block_submit_success_data` können die Daten, die bei erfolgreicher Übermittlung zurückgegeben werden, geändert werden.

Parameter:  
array|null	$data Aktuelle Daten  
string		$form_id Aktuelle Formular-ID  

Erwartet ein Array oder null.

### `form_block_required_fields` <Badge type="info" text="Seit Form Block 1.3.0" />

Über den Filter `form_block_required_fields` können die erforderlichen Felder geändert werden.

Parameter:  
array	$required Erforderliche Felder  
array	$data Formular-Daten  
string	$form_id Formular-ID  
array	$post_fields POST-Felder  

Erwartet ein Array.

### `form_block_honeypot_key`

Über den Filter `form_block_honeypot_key` kann der Honeypot-Feldname geändert werden.

Parameter:  
string	$honeypot_key Der Honeypot-Feldname

Erwartet eine Zeichenfolge.

### `form_block_is_honeypot_filled`

Über den Filter `form_block_is_honeypot_filled` kann der Füllstatus des Honeypots geändert werden.

Parameter:  
bool	$is_filled Ob der Honeypot ausgefüllt wurde

Erwartet einen bool’schen Wert.

### `form_block_pre_get_name_by_label`

Über den Filter `form_block_pre_get_name_by_label` kann die Beschriftung geändert werden, bevor daraus ein Name generiert wird.

Parameter:  
string	$label Die originale Beschriftung  
bool	$to_lowercase Ob der Name in Kleinbuchstaben ausgegeben werden soll  

Erwartet eine Zeichenfolge.

### `form_block_get_name_by_label`

Über den Filter `form_block_get_name_by_label` kann der generierte Name aus einer Beschriftung geändert werden.

Parameter:  
string	$name Der generierte Name  
string	$label Die originale Beschriftung  
bool	$to_lowercase Ob der Name in Kleinbuchstaben ausgegeben werden soll  

Erwartet eine Zeichenfolge.

### `form_block_output_field_omit` <Badge type="info" text="Seit Form Block 1.0.3" />

Über den Filter `form_block_output_field_omit` kann der Wert, ob das Feld von der Ausgabe ausgeschlossen werden soll, geändert werden.

Parameter:  
bool	$omit_field Ob das Feld von der Ausgabe ausgeschlossen werden soll  
string	$name Feldname  
mixed	$value Feldwert  
array	$fields Felder-Daten  

Erwartet einen bool’schen Wert.

### `form_block_output_field_value` <Badge type="info" text="Seit Form Block 1.0.3" />

Über den Filter `form_block_output_field_value` kann der Feldwert in der Ausgabe geändert werden.

Parameter:  
mixed	$values Feldwerte  
string	$name Feldname  
array	$fields Felder-Daten  
int 	$level Aktuelle Einrückungsebene  

Erwartet einen beliebigen Wert.

### `form_block_output_field_output` <Badge type="info" text="Seit Form Block 1.1.0" />

Über den Filter `form_block_output_field_output` kann die Feldausgabe geändert werden.

Parameter:  
string	$current_output Feldausgabe  
string	$name Feldname  
mixed	$value Feldwert  
array	$fields Felder-Daten  
int		$level Aktuelle Einrückungsebene  
string	$format_type 'plain'-Text oder 'html'  

Erwartet eine Zeichenfolge.

### `form_block_output_fieldset_legend` <Badge type="info" text="Seit Form Block 1.5.0" />

Über den Filter `form_block_output_fieldset_legend` kann der Text der Fieldtext-Legende geändert werden.

Parameter:  
string		$legend Aktueller Legenden-Text  
mixed[]		$field Formularfeld-Daten  
string[]	$post_fields POST-Felder  

Erwartet eine Zeichenfolge.

### `form_block_local_file_map` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_local_file_map` kann die Hash-Zuweisung lokaler Dateien geändert werden.

Parameter:  
array	$map Aktuelle Zuweisungen

Erwartet ein Array.

### `form_block_attachment_file_path` <Badge type="info" text="Seit Form Block 1.4.1" />

Über den Filter `form_block_attachment_file_path` kann der neue Pfad einer hochgeladenen Datei geändert werden.

Parameter:  
string	$new_path Neuer Pfad der Datei  
array	$file Informations-Array der hochgeladenen Datei  
array	$file_data Formularfeld-Daten für diese Datei  

Erwartet eine Zeichenfolge.

### `form_block_attachment_add_to_mail` <Badge type="info" text="Seit Form Block 1.4.1" />

Über den Filter `form_block_attachment_add_to_mail` kann der Wert, ob die Datei als Anhang hinzugefügt werden soll, geändert werden.

Parameter:  
bool	$add_to_attachments Ob die Datei als Anhang hinzugefügt werden soll  
array	$file Informations-Array der hochgeladenen Datei  
array	$file_data Formularfeld-Daten für diese Datei  

Erwartet einen bool’schen Wert.

### `form_field_attachment_after_add_to_mail`

Die Action `form_field_attachment_after_add_to_mail` feuert, nachdem die Datei zur E-Mail hinzugefügt wurde.

Parameter:  
array	$file Informations-Array der hochgeladenen Datei  
array	$file_data Formularfeld-Daten für diese Datei  

### `form_block_output_file_output` <Badge type="info" text="Seit Form Block 1.4.1" />

Über den Filter `form_block_output_file_output` kann die Dateiausgabe geändert werden.

Parameter:  
string	$output Die Feldausgabe  
string	$name Der Feldname  
mixed	$new_path Datei-Pfad  
array	$file_data Formularfeld-Daten für diese Datei  
array	$file Informations-Array der hochgeladenen Datei  
string	$format_type 'plain'-Text oder 'html'  

Erwartet eine Zeichenfolge.

### `form_block_file_is_saved_locally` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_file_is_saved_locally` kann der Wert, ob eine Datei lokal gespeichert wird, geändert werden.

Parameter:  
bool	$is_saved_locally Ob eine Datei lokal gespeichert wird  
mixed[]	$field_data Aktuelle Felddaten  

Erwartet einen bool’schen Wert.

### `form_block_field_data_errors`

Über den Filter `form_block_field_data_errors` können die Fehler der Felddaten geändert werden.

Parameter:  
array	$errors Aktuell erkannte Fehler  
array	$form_data Aktuelle zu überprüfende Formulardaten  
array	$fields Felddaten der Anfrage  
string	$form_id Aktuelle Formular-ID  

Erwartet ein Array.

### `form_block_field_attributes_validation`

Über den Filter `form_block_field_attributes_validation` kann die Überprüfung durch Feldattribute geändert werden.

Parameter:  
array	$errors Aktuelle Fehlerliste  
mixed	$value Der Feldwert  
array	$attributes Formularfeld-Attribute  

Erwartet ein Array.

### `form_block_validated_fields`

Über den Filter `form_block_validated_fields` können die überprüften Felder geändert werden.

Parameter:  
array	$validated Die überprüften Felder  
string	$form_id Die Formular-ID  
array	$form_data Die Formulardaten  

Erwartet ein Array.

### `form_block_missing_fields` <Badge type="info" text="Seit Form Block 1.5.2" />

Über den Filter `form_block_missing_fields` können die fehlenden Felder geändert werden.

Parameter:  
string[]	$missing_fields Liste fehlender Feldnamen/-Beschriftungen  
mixed[]		$form_data Formulardaten  
mixed[]		$validated Liste überprüfter Feldnamen und -Beschriftungen  
string[]	$required_fields Liste erforderlicher Feldnamen  

Erwartet ein Array.

### `form_block_files_validation` <Badge type="info" text="Seit Form Block 1.0.3" />

Über den Filter `form_block_files_validation` können die überprüften Dateien geändert werden.

Parameter:  
array	$validated Überprüfte Dateien  
array	$form_data Aktuelle Formulardaten  
array	$_FILES PHP-Dateien-Array  

Erwartet ein Array.

### `form_block_validate_file_type_mime_types` <Badge type="info" text="Seit Form Block 1.5.6" />

Über den Filter `form_block_validate_file_type_mime_types` können die erlaubten Mime-Typen für den Upload geändert werden.filtered.

Parameter:  
string[]	$allowed_mime_types Liste erlaubter Mime-Typen
array	$file Aktuell zu überprüfende Datei

Erwartet ein Array.

## Übermittlungen

### `form_block_reply_to` <Badge type="info" text="Seit Form Block 1.1.0" />

Über den Filter `form_block_reply_to` kann die „Antwort an“-Adresse geändert werden.

Parameter:  
mixed	$value Der Feldwert
array	$data Die POST-Daten
array	$fields Die Formularfelder

Erwartet eine Zeichenfolge oder ein Array.

### `form_block_recipients`

Über den Filter `form_block_recipients` können die Formular-Empfänger geändert werden.

Parameter:  
array	$recipients Die Empfänger  
int		$form_id Die Formular-ID  
array	$fields Die überprüften Felder  
array	$files Die überprüften Dateien  

Erwartet ein Array.

### `form_block_email_text`

Über den Filter `form_block_email_text` kann der E-Mail-Text geändert werden.

Parameter:  
string	$email_text Der E-Mail-Text  
string	$field_output Die Textausgabe der Felder  
string	$form_id Die Formular-ID  
array	$fields Die überprüften Felder  

Erwartet eine Zeichenfolge.

### `form_block_mail_subject`

Über den Filter `form_block_mail_subject` kann der E-Mail-Betreff geändert werden.

Parameter:  
string	$subject Der E-Mail-Betreff

Erwartet eine Zeichenfolge.

### `form_block_sent_emails`

Die Action `form_block_sent_emails` feuert, nach dem E-Mail-Versand mit einem Status pro Empfänger.

Parameter:  
array	$email_sent Liste an E-Mail-Adressen und ob sie versendet wurden  
string	$email_text Der versendete E-Mail-Text  
array	$attachments Die versendeten Anhänge  

### `form_block_create_submission_data` <Badge type="info" text="Seit Form Block 1.7.0" />

Über den Filter `form_block_create_submission_data` können Daten vor der Erstellung einer Übermittlung geändert werden.

Parameter:  
array	$data Übermittlungsdaten  
string	$form_id Formular-ID  

Erwartet ein Array.

### `form_block_pre_create_submission` <Badge type="info" text="Seit Form Block 1.7.0" />

Die Action `form_block_pre_create_submission` feuert, bevor eine Übermittlung erstellt wurde.

Parameter:  
string	$form_id Formular-ID  
array	$data Übermittlungsdaten  

### `form_block_after_create_submission` <Badge type="info" text="Seit Form Block 1.7.0" />

Die Action `form_block_after_create_submission` feuert, nachdem eine Übermittlung erstellt wurde.

Parameter:  
\epiphyt\Form_Block\submissions\Submission	$submission Übermittlungs-Objekt  
string	$form_id Formular-ID  
array	$data Übermittlungsdaten  

### `form_block_submission_actions` <Badge type="info" text="Seit Form Block 1.6.0" />

Die Action `form_block_submission_actions` feuert, wenn die Aktionen-Spalte in der Übermittlungen-Liste angezeigt wird.

Parameter:  
array	$item Aktuelles Element  

### `form_block_submissions_columns` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_submissions_columns` können die Spalten bei den Übermittlungen geändert werden.

Parameter:  
string[]	$columns Liste an Spalten  

Erwartet ein Array.

### `form_block_submissions_columns_sortable` <Badge type="info" text="Seit Form Block 1.6.0" />

Über den Filter `form_block_submissions_columns_sortable` können die sortierbaren Spalten bei den Übermittlungen geändert werden.

Parameter:  
mixed[]	$sortable_columns Aktuell sortierbare Spalten  

Erwartet ein Array.

### `form_block_submission` <Badge type="info" text="Seit Form Block 1.7.0" />

Über den Filter `form_block_submission` können die Übermittlungsdaten geändert werden.

Parameter:  
mixed[]	$submission_data Übermittlungsdaten  
mixed[] $data Felder und Dateien aus der Anfrage  
string	$form_id Formular-ID  

Erwartet ein Array.

## Admin

### `form_block_admin_options_default_tab` <Badge type="info" text="Seit Form Block 1.7.0" />

Über den Filter `form_block_admin_options_default_tab` kann der Standard-Tab bei den Optionen geändert werden.

Parameter:  
string	$default_tab Der Standard-Tab  

Erwartet eine Zeichenfolge.

### `form_block_admin_options_tabs` <Badge type="info" text="Seit Form Block 1.7.0" />

Über den Filter `form_block_admin_options_tabs` können die Tabs bei den Admin-Optionen geändert werden.

Parameter:  
array	$tabs Tabs bei den Admin-Optionen  

Erwartet ein Array.

### `form_block_settings_page` <Badge type="info" text="Seit Form Block 1.7.0" />

Die Action `form_block_settings_page` feuert, nach den allgemeinen Einstellungen von Form Block im Einstellungen-Tab.


### `form_block_pro_license_page` <Badge type="info" text="Seit Form Block Pro 1.4.0" />

Die Action `form_block_pro_license_page` feuert, nach den allgemeinen Lizenz-Feldern von Form Block im Lizenz-Tab.
