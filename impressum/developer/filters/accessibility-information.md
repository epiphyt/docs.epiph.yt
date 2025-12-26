# Accessibility Information Filters

## `impressum_accessibility_information_requirements`

Through the filter `impressum_accessibility_information_requirements` you can change the content of the requirements text for the accessibility information.

Parameters:  
string $requirements Current text  
array $options Accessibility information options  
array $imprint\_options Imprint options

Expects a string.

### Example

```php
function my_impressum_accessibility_information_requirements( $requirements ) {
	return 'My custom requirements';
}

add_filter( 'impressum_accessibility_information_requirements', 'my_impressum_accessibility_information_requirements' );
```

## `impressum_accessibility_information_guidelines`

Through the filter `impressum_accessibility_information_guidelines` you can change the content of the guidelines text for the accessibility information.

Parameters:  
string $guidelines Current text  
array $options Accessibility information options  
array $imprint\_options Imprint options

Expects a string.

### Example

```php
function my_impressum_accessibility_information_guidelines( $guidelines ) {
	return 'My custom guidelines';
}

add_filter( 'impressum_accessibility_information_guidelines', 'my_impressum_accessibility_information_guidelines' );
```

## `impressum_accessibility_information_incompatibilities`

Through the filter `impressum_accessibility_information_incompatibilities` you can change the content of the incompatibilities text for the accessibility information.

Parameters:  
string $incompatibilities Current text  
array $options Accessibility information options  
array $imprint\_options Imprint options

Expects a string.

### Example

```php
function my_impressum_accessibility_information_incompatibilities( $incompatibilities ) {
	return 'My custom incompatibilities';
}

add_filter( 'impressum_accessibility_information_incompatibilities', 'my_impressum_accessibility_information_incompatibilities' );
```

## `impressum_accessibility_information_technologies`

Through the filter `impressum_accessibility_information_technologies` you can change the content of the technologies text for the accessibility information.

Parameters:  
string $technologies Current text  
array $options Accessibility information options  
array $imprint\_options Imprint options

Expects a string.

### Example

```php
function my_impressum_accessibility_information_technologies( $technologies ) {
	return 'My custom technologies';
}

add_filter( 'impressum_accessibility_information_technologies', 'my_impressum_accessibility_information_technologies' );
```

## `impressum_accessibility_information_authority`

Through the filter `impressum_accessibility_information_authority` you can change the content of the authority text for the accessibility information.

Parameters:  
string $authority Current text  
array $options Accessibility information options  
array $imprint\_options Imprint options

Expects a string.

### Example

```php
function my_impressum_accessibility_information_authority( $authority ) {
	return 'My custom authority';
}

add_filter( 'impressum_accessibility_information_authority', 'my_impressum_accessibility_information_authority' );
```
