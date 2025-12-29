# API Filters

## `impressum_api_api_args`

Through the filter `impressum_api_api_args` you can change the parameters of the particular fields in the API.

Parameters:  
array $api\_args The API parameters

Expects an array.

### Example

```php
function my_impressum_api_api_args( $api_args ) {
	// get $settings_fields from somewhere with each field
	// having a sub-index 'api' for API related information
	
	foreach ( $settings_fields as $key => $settings_field ) {
		if ( empty( $settings_field['api'] ) ) continue;
		
		$my_args[ $key ] = $settings_field['api'];
	}
	
	return $my_args;
}

add_filter( 'impressum_api_api_args', 'my_impressum_api_api_args' );
```

## `impressum_api_option_name`

Through the filter `impressum_api_option_name` you can change the name of the options, that should be returned/changed via API.

Parameters:  
string $option\_name The option’s name  
\\WP\_REST\_Request $request The current request object (since 2.3.0)

Expects a string.

### Example

```php
function my_impressum_api_option_name( $option_name, $request ) {
	return 'my_option';
}

add_filter( 'impressum_api_option_name', 'my_impressum_api_option_name', 10, 2 );
```

## `impressum_api_option_sub_key` <Badge type="info" text="Since 2.3.0" />

Through the filter `impressum_api_option_sub_key` you can change the name of the key of the option, that should be returned/changed via API.

Parameters:  
string $sub\_key The sub key name  
\\WP\_REST\_Request $request The current request object

Expects a string.

### Example

```php
function my_impressum_api_option_name( $sub_key, $request ) {
	return 'name';
}

add_filter( 'impressum_api_option_sub_key', 'my_impressum_api_option_name', 10, 2 );
```
