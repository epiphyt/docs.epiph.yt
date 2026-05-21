# Imprint Filters

## `impressum_country_after_sort`

Through the filter `impressum_country_after_sort` you can change the countries after they have been sort.

Parameters:  
array $countries The top 50 countries alphabetically

Expects an array.

### Example

```php
function my_impressum_country_after_sort( $countries ) {
	$countries['grl'] = __( 'Greenland', 'my-textdomain' );
	
	return $countries;
}

add_filter( 'impressum_country_after_sort', 'my_impressum_country_after_sort' );
```

## `impressum_country_pre_sort`

Through the filter `impressum_country_pre_sort` you can change the countries before they have been sort.

Parameters:  
array $countries The top 50 countries

Expects an array.

### Example

```php
function my_impressum_country_pre_sort( $countries ) {
	$countries['grl'] = __( 'Greenland', 'my-textdomain' );
	
	return $countries;
}

add_filter( 'impressum_country_pre_sort', 'my_impressum_country_pre_sort' );
```

## `impressum_legal_entity_after_sort`

Through the filter `impressum_legal_entity_after_sort` you can change the legal entities after they have been sort.

Parameters:  
array $legal\_entities The legal entities alphabetically

Expects an array.

### Example

```php
function my_impressum_legal_entity_after_sort( $legal_entities ) {
	$legal_entities['other'] = __( 'Other', 'my-textdomain' );
	
	return $legal_entities;
}

add_filter( 'impressum_legal_entity_after_sort', 'my_impressum_legal_entity_after_sort' );
```

## `impressum_legal_entity_pre_sort`

Through the filter `impressum_legal_entity_pre_sort` you can change the legal entities before they have been sort.

Parameters:  
array $legal\_entities The legal entities

Expects an array.

### Example

```php
function my_impressum_legal_entity_pre_sort( $legal_entities ) {
	$legal_entities['other'] = __( 'Other', 'my-textdomain' );
	
	return $legal_entities;
}

add_filter( 'impressum_legal_entity_pre_sort', 'my_impressum_legal_entity_pre_sort' );
```

## `impressum_settings_fields`

Through the filter `impressum_settings_fields` you can change the settings fields in the backend.

Parameters:  
array $settings\_fields The current settings fields

Expects an array.

### Example

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

## `impressum_option_description_{$field_name}` <Badge type="info" text="Since 3.0.0" />

Through the action `impressum_option_description_{$field_name}` you can change the description of the given `$field_name`.

Parameters:  
string	$settings\_name Settings group name
array	$args Field arguments
array	$options Settings of this settings group

### Example

```php
function my_impressum_settings_description() {
	echo '<p>My setting\'s description</p>';
}

add_action( 'impressum_option_description_my_settings_name', 'my_impressum_settings_description' );
```
