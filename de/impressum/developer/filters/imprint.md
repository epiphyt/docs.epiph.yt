# Impressum-Filter

## `impressum_country_after_sort`

Über den Filter `impressum_country_after_sort` können die Länder verändert werden, nachdem sie sortiert werden.

Parameter:
array $countries Die Top 50 Länder alphabetisch sortiert

Erwartet ein Array.

### Beispiel

```php
function my_impressum_country_after_sort( $countries ) {
	$countries['grl'] = __( 'Greenland', 'my-textdomain' );
	
	return $countries;
}

add_filter( 'impressum_country_after_sort', 'my_impressum_country_after_sort' );
```

## `impressum_country_pre_sort`

Über den Filter `impressum_country_pre_sort` können die Länder verändert werden, bevor sie sortiert werden.

Parameter:
array $countries Die Top 50 Länder

Erwartet ein Array.

### Beispiel

```php
function my_impressum_country_pre_sort( $countries ) {
	$countries['grl'] = __( 'Greenland', 'my-textdomain' );
	
	return $countries;
}

add_filter( 'impressum_country_pre_sort', 'my_impressum_country_pre_sort' );
```

## `impressum_legal_entity_after_sort`

Über den Filter `impressum_legal_entity_after_sort` können die Rechtsformen verändert werden, nachdem sie sortiert werden.

Parameter:
array $legal\_entities Die Rechtsformen alphabetisch sortiert

Erwartet ein Array.

### Beispiel

```php
function my_impressum_legal_entity_after_sort( $legal_entities ) {
	$legal_entities['other'] = __( 'Other', 'my-textdomain' );
	
	return $legal_entities;
}

add_filter( 'impressum_legal_entity_after_sort', 'my_impressum_legal_entity_after_sort' );
```

## `impressum_legal_entity_pre_sort`

Über den Filter `impressum_legal_entity_pre_sort` können die Rechtsformen verändert werden, bevor sie sortiert werden.

Parameter:
array $legal\_entities Die Rechtsformen

Erwartet ein Array.

### Beispiel

```php
function my_impressum_legal_entity_pre_sort( $legal_entities ) {
	$legal_entities['other'] = __( 'Other', 'my-textdomain' );
	
	return $legal_entities;
}

add_filter( 'impressum_legal_entity_pre_sort', 'my_impressum_legal_entity_pre_sort' );
```

## `impressum_settings_fields`

Über den Filter `impressum_settings_fields` können die Einstellungsfelder, die im Backend angezeigt und später ausgegeben werden, verändert werden.

Parameter:
array $settings\_fields Die aktuellen Einstellungsfelder

Erwartet ein Array.

### Beispiel

```php
function my_impressum_settings_fields( $settings_fields ) {
	// add a custom settings field
	$settings_fields['my_field'] = [
		'title' => __( 'My Field', 'my-textdomain' ),
		'callback' => 'impressum_input_text_callback', // function name or function
		'page' => 'impressum_imprint',
		'section' => 'impressum_section_imprint',
		'args' => [
			'label_for' => 'my_field',
			'class' => 'impressum_row',
			'description' => __( 'Optional description for my field', 'my-textdomain' ),
			'required' => true,	
		],
		'api' => [
			'description' => esc_html__( 'The checkbox whether my field is being used.', 'my-textdomain' ),
			'type' => 'text',
		],
	];
	
	return $settings_fields;
}

add_filter( 'impressum_settings_fields', 'my_impressum_settings_fields' );
```
