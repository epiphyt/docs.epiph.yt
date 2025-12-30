# Filters

## Block data

### `form_block_data_form`

Through the filter `form_block_data_form` the form block data of a form can be filtered before storing it in the database.

Parameters:  
array	$form_data The current block data that is being stored  
array	$block The original block data  
string	$form_id The form ID  

Expects an array.

### `form_block_get_form_data`

Through the filter `form_block_get_form_data` the field block data of a form element can be filtered before storing it in the database.

Parameters:  
array	$field_data The field data  
array	$blocks Blocks from parsed_blocks()  
array	$data Current form data  
string	$form_id The form ID  

Expects an array.

### `form_block_get_data`

Through the filter `form_block_get_data` the form data of a form can be filtered before storing it in the database.

Parameters:  
mixed[]	$data Current form data  
mixed[]	$block Current parsed block  
string	$form_id The form ID  
mixed[]	$field_data Field data  
string	$context Block context  

Expects an array.

### `form_block_block_context_prefixes` <Badge type="info" text="Since Form Block 1.5.2" />

Through the filter `form_block_block_context_prefixes` the current block context prefix can be filtered.

Parameters:  
string[]	$context_prefixes List of prefixes

Expects an array.

### `form_block_data_ignored_context` <Badge type="info" text="Since Form Block 1.5.2" />

Through the filter `form_block_data_ignored_context` the list of ignored contexts can be filtered.

Parameters:  
string[]	$ignored_contexts Current contexts to ignore  
mixed[]		$block Current parsed block  

Expects an array.

## Form block

### `form_block_form_action`

Through the filter `form_block_form_action` the action of a form can be filtered.

Parameters:  
string	$url The action URL  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_form_id`

Through the filter `form_block_form_form_id` the ID of a form can be filtered.

Parameters:  
string	$form_id The form ID  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_id_input`

Through the filter `form_block_form_id_input` the ID input of a form can be filtered.

Parameters:  
string	$form_id_input The form ID input  
string	$form_id The form ID  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_object_inputs` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_object_inputs` the object inputs (object ID, object type) of a form can be filtered.

Parameters:  
string	$object_inputs The object inputs  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_honeypot_code`

Through the filter `form_block_honeypot_code` the honeypot HTML code of a form can be filtered.

Parameters:  
string	$honeypot The honeypot code  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_label` <Badge type="info" text="Since Form Block 1.5.0" />

Through the filter `form_block_form_label` the label of a form can be filtered.

Parameters:  
string	string	$label Form label  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_maximum_upload_size`

Through the filter `form_block_form_maximum_upload_size` the overall maximum upload size of a form can be filtered.

Parameters:  
int		$maximum_upload_size Current maximum upload size  
string	$block_content The block content  
array	$block Block attributes  

Expects an integer or string.

### `form_block_form_maximum_upload_size_per_file`

Through the filter `form_block_form_maximum_upload_size_per_file` the maximum upload size per file of a form can be filtered.

Parameters:  
int		$maximum_upload_size Current maximum upload size per file  
string	$block_content The block content  
array	$block Block attributes  

Expects an integer or string.

### `form_block_form_method`

Through the filter `form_block_form_method` the method of a form can be filtered.

Parameters:  
string	$method The form method  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_required_notice`

Through the filter `form_block_form_required_notice` the notice for required fields of a form can be filtered.

Parameters:  
string	$notice The form required notice  
string	$block_content The block content  
array	$block Block attributes  

Expects a string.

### `form_block_form_style` <Badge type="info" text="Since Form Block 1.0.1" />

Through the filter `form_block_form_style` the block style of the form block can be filtered.

Parameters:  
string[]	$styles Current block styles

Expects a string.

### `form_block_pro_dropzone_delete_icon`

Form Block Pro only

Through the filter `form_block_pro_dropzone_delete_icon` the dropzone delete icon can be filtered.

Parameters:  
string $delete_icon Current delete icon

Expects a string.

### `form_block_pro_dropzone_icon`

Form Block Pro only

Through the filter `form_block_pro_dropzone_icon` the dropzone icon can be filtered.

Parameters:  
string	$icon The current SVG icon

Expects a string.

### `form_block_pro_dropzone_template`

Form Block Pro only

Through the filter `form_block_pro_dropzone_template` the dropzone template can be filtered.

Parameters:  
string	$template The current template

Expects a string.

## Form data

### `form_block_empty_nonce`

The action `form_block_empty_nonce` fires after verifying that the nonce is empty or absent.

### `form_block_invalid_data`

The action `form_block_invalid_data` fires after a request is considered invalid.

### `form_block_invalid_nonce`

The action `form_block_invalid_nonce` fires after a request has an invalid nonce.

### `form_block_is_honeypot_filled`

The action `form_block_is_honeypot_filled` fires after a request is considered invalid due to a filled honeypot.

### `form_block_pre_validated_data`

The action `form_block_pre_validated_data` fires before data has been validated.

Parameters:  
string	$form_id The form ID

### `form_block_validated_data`

The action `form_block_validated_data` fires after data has been validated.

Parameters:  
string	$form_id The form ID  
array	$fields Validated fields  
array	$validated_files Validated files  
array	$local_files Local files data  

### `form_block_submit_data` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_submit_data` the data of each submission type's state can be filtered.

Parameters:  
bool[]	$success A list of successful or failed submission methods  
string	$form_id The form ID  
array	$fields Validated fields  
array	$files Files data  

Expects an array.

### `form_block_submit_success_data` <Badge type="info" text="Since Form Block 1.0.3" />

Through the filter `form_block_submit_success_data` the submit success data can be filtered.

Parameters:  
array|null	$data Current data  
string		$form_id Current form ID  

Expects an array or null.

### `form_block_required_fields` <Badge type="info" text="Since Form Block 1.3.0" />

Through the filter `form_block_required_fields` the required fields can be filtered.

Parameters:  
array	$required Required fields  
array	$data Form data  
string	$form_id Form ID  
array	$post_fields POST fields  

Expects an array.

### `form_block_honeypot_key`

Through the filter `form_block_honeypot_key` the honeypot key can be filtered.

Parameters:  
string	$honeypot_key The honeypot key

Expects a string.

### `form_block_is_honeypot_filled`

Through the filter `form_block_is_honeypot_filled` the filled state of the honeypot can be filtered.

Parameters:  
bool	$is_filled Whether the honeypot is filled

Expects a boolean.

### `form_block_pre_get_name_by_label`

Through the filter `form_block_pre_get_name_by_label` the label before generating a name out of it can be filtered.

Parameters:  
string	$label The original label  
bool	$to_lowercase Whether the name should be lowercase  

Expects a string.

### `form_block_get_name_by_label`

Through the filter `form_block_get_name_by_label` the generated name from a label can be filtered.

Parameters:  
string	$name The generated name  
string	$label The original label  
bool	$to_lowercase Whether the name should be lowercase  

Expects a string.

### `form_block_output_field_omit` <Badge type="info" text="Since Form Block 1.0.3" />

Through the filter `form_block_output_field_omit` the value whether to omit the field from output can be filtered.

Parameters:  
bool	$omit_field Whether to omit the field from output  
string	$name Field name  
mixed	$value Field value  
array	$fields Fields data  

Expects a boolean.

### `form_block_output_field_value` <Badge type="info" text="Since Form Block 1.0.3" />

Through the filter `form_block_output_field_value` the field value in the output can be filtered.

Parameters:  
mixed	$values Field values  
string	$name Field name  
array	$fields Fields data  
int 	$level Current indentation level  

Expects a mixed value.

### `form_block_output_field_output` <Badge type="info" text="Since Form Block 1.1.0" />

Through the filter `form_block_output_field_output` the field output can be filtered.

Parameters:  
string	$current_output Field output  
string	$name Field name  
mixed	$value Field value  
array	$fields Fields data  
int		$level Current output level  
string	$format_type 'plain' text or 'html'  

Expects a string.

### `form_block_output_fieldset_legend` <Badge type="info" text="Since Form Block 1.5.0" />

Through the filter `form_block_output_fieldset_legend` the fieldset legend text can be filtered.

Parameters:  
string		$legend Current legend text  
mixed[]		$field Form field data  
string[]	$post_fields POST fields  

Expects a string.

### `form_block_local_file_map` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_local_file_map` the local file hash map can be filtered.

Parameters:  
array	$map Current mapping

Expects an array.

### `form_block_attachment_file_path` <Badge type="info" text="Since Form Block 1.4.1" />

Through the filter `form_block_attachment_file_path` the new path of an uploaded file can be filtered.

Parameters:  
string	$new_path New path of the file  
array	$file Uploaded file information array  
array	$file_data Form field data for this file  

Expects a string.

### `form_block_attachment_add_to_mail` <Badge type="info" text="Since Form Block 1.4.1" />

Through the filter `form_block_attachment_add_to_mail` the value whether the file should be added as attachment can be filtered.

Parameters:  
bool	$add_to_attachments Whether the field should be added  
array	$file Uploaded file information array  
array	$file_data Form field data for this file  

Expects a boolean.

### `form_field_attachment_after_add_to_mail`

The action `form_field_attachment_after_add_to_mail` fires after the file has been added to the mail.

Parameters:  
array	$file Uploaded file information array  
array	$file_data Form field data for this file  

### `form_block_output_file_output` <Badge type="info" text="Since Form Block 1.4.1" />

Through the filter `form_block_output_file_output` the file output can be filtered.

Parameters:  
string	$output The field output  
string	$name The field name  
mixed	$new_path File path  
array	$file_data File data array  
array	$file Uploaded file information array
string	$format_type 'plain' text or 'html'  

Expects a string.

### `form_block_file_is_saved_locally` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_file_is_saved_locally` the value whether a file is saved locally can be filtered.

Parameters:  
bool	$is_saved_locally Whether a file is saved locally  
mixed[]	$field_data Current field data  

Expects a boolean.

### `form_block_field_data_errors`

Through the filter `form_block_field_data_errors` the field data errors can be filtered.

Parameters:  
array	$errors Current detected errors  
array	$form_data Current form data to validate  
array	$fields Field data from request  
string	$form_id Current form ID  

Expects an array.

### `form_block_field_attributes_validation`

Through the filter `form_block_field_attributes_validation` the validation by field attributes can be filtered.

Parameters:  
array	$errors Current error list  
mixed	$value The field value  
array	$attributes Form field attributes  

Expects an array.

### `form_block_validated_fields`

Through the filter `form_block_validated_fields` the validated fields can be filtered.

Parameters:  
array	$validated The validated fields  
string	$form_id The form ID  
array	$form_data The form data  

Expects an array.

### `form_block_missing_fields` <Badge type="info" text="Since Form Block 1.5.2" />

Through the filter `form_block_missing_fields` the missing fields can be filtered.

Parameters:  
string[]	$missing_fields List of missing field names/titles  
mixed[]		$form_data Form data  
mixed[]		$validated List of validated field names and values  
string[]	$required_fields List of required field names  

Expects an array.

### `form_block_files_validation` <Badge type="info" text="Since Form Block 1.0.3" />

Through the filter `form_block_files_validation` the validated files can be filtered.

Parameters:  
array	$validated Validated files data  
array	$form_data Current form data  
array	$_FILES PHP files array  

Expects an array.

### `form_block_validate_file_type_mime_types` <Badge type="info" text="Since Form Block 1.5.6" />

Through the filter `form_block_validate_file_type_mime_types` the allowed mime types to upload can be filtered.

Parameters:  
string[]	$allowed_mime_types List of allowed mime types
array	$file Current file to validate

Expects an array.

## Submissions

### `form_block_reply_to` <Badge type="info" text="Since Form Block 1.1.0" />

Through the filter `form_block_reply_to` the reply to address can be filtered.

Parameters:  
mixed	$value The field value
array	$data The POST data
array	$fields The form fields

Expects a string or array.

### `form_block_recipients`

Through the filter `form_block_recipients` the form recipients can be filtered.

Parameters:  
array	$recipients The recipients  
int		$form_id The form ID  
array	$fields The validated fields  
array	$files The validated files  

Expects an array.

### `form_block_email_text`

Through the filter `form_block_email_text` the email text can be filtered.

Parameters:  
string	$email_text The email text  
string	$field_output The field text output  
string	$form_id The form ID  
array	$fields The validated fields  

Expects a string.

### `form_block_mail_subject`

Through the filter `form_block_mail_subject` the email subject can be filtered.

Parameters:  
string	$subject The email subject

Expects a string.

### `form_block_sent_emails`

The action `form_block_sent_emails` fires after sending emails with a status per recipient.

Parameters:  
array	$email_sent List of emails and whether they were sent  
string	$email_text The sent email text  
array	$attachments The sent attachments  

### `form_block_create_submission_data` <Badge type="info" text="Since Form Block 1.7.0" />

Through the filter `form_block_create_submission_data` the data before creating a submission can be filtered.

Parameters:  
array	$data Submission data  
string	$form_id Form ID  

Expects an array.

### `form_block_pre_create_submission` <Badge type="info" text="Since Form Block 1.7.0" />

The action `form_block_pre_create_submission` fires before submission is created.

Parameters:  
string	$form_id Form ID  
array	$data Submission data  

### `form_block_after_create_submission` <Badge type="info" text="Since Form Block 1.7.0" />

The action `form_block_after_create_submission` fires after submission is created.

Parameters:  
\epiphyt\Form_Block\submissions\Submission	$submission Submission object  
string	$form_id Form ID  
array	$data Submission data  

### `form_block_submission_actions` <Badge type="info" text="Since Form Block 1.6.0" />

The action `form_block_submission_actions` fires when the submission list actions column is displayed.

Parameters:  
array	$item Current item  

### `form_block_submissions_columns` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_submissions_columns` the submissions columns can be filtered.

Parameters:  
string[]	$columns List of columns  

Expects an array.

### `form_block_submissions_columns_sortable` <Badge type="info" text="Since Form Block 1.6.0" />

Through the filter `form_block_submissions_columns_sortable` the submission sortable columns can be filtered.

Parameters:  
mixed[]	$sortable_columns Current sortable columns  

Expects an array.

### `form_block_submission` <Badge type="info" text="Since Form Block 1.7.0" />

Through the filter `form_block_submission` the form submission data can be filtered.

Parameters:  
mixed[]	$submission_data Submission data  
mixed[] $data Field and files data from the request  
string	$form_id Form ID  

Expects an array.

## Admin

### `form_block_admin_options_default_tab` <Badge type="info" text="Since Form Block 1.7.0" />

Through the filter `form_block_admin_options_default_tab` the default options tab can be filtered.

Parameters:  
string	$default_tab The default tab  

Expects a string.

### `form_block_admin_options_tabs` <Badge type="info" text="Since Form Block 1.7.0" />

Through the filter `form_block_admin_options_tabs` the admin options tabs can be filtered.

Parameters:  
array	$tabs Admin options tabs  

Expects an array.

### `form_block_settings_page` <Badge type="info" text="Since Form Block 1.7.0" />

The action `form_block_settings_page` fires after the general Form Block settings in the settings tab.


### `form_block_pro_license_page` <Badge type="info" text="Since Form Block Pro 1.4.0" />

The action `form_block_pro_license_page` fires after the general Form Block Pro license in the license tab.
