# API-Filter

## `impressum_api_api_args`

Über den Filter `impressum_api_api_args` können die die Parameter der einzelnen Felder innerhalb der API verändert werden.

Parameter:
array $api\_args Die Parameter der API

Erwartet ein Array.

### Beispiel

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

Über den Filter `impressum_api_option_name` kann der Name der Option, der über die API ausgegeben/verändert werden soll, verändert werden.

Parameter:
string $option\_name Der Name der Option  
\\WP\_REST\_Request $request Das aktuelle Anfrage-Objekt (ab 2.3.0)

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_api_option_name( $option_name, $request ) {
	return 'my_option';
}

add_filter( 'impressum_api_option_name', 'my_impressum_api_option_name', 10, 2 );
```

## `impressum_api_option_sub_key`

ab 2.3.0

Über den Filter `impressum_api_option_sub_key` kann der Name des Schlüssels einer Option, die über die API ausgegeben/verändert werden soll, verändert werden.

Parameter:
string $sub\_key Der Name des Schlüssels  
\\WP\_REST\_Request $request Das aktuelle Anfrage-Objekt

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_api_option_name( $sub_key, $request ) {
	return 'name';
}

add_filter( 'impressum_api_option_sub_key', 'my_impressum_api_option_name', 10, 2 );
```
