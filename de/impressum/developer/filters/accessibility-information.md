# Filter Information zur Barrierefreiheit

## `impressum_accessibility_information_requirements`

Über den Filter `impressum_accessibility_information_requirements` kann der Inhalt des Anforderungen-Texts für die Information zur Barrierefreiheit verändert werden.

Parameter:
string $requirements Aktueller Text  
array $options Optionen der Informationen zur Barrierefreiheit  
array $imprint\_options Optionen zum Impressum

Erwartet eine Zeichenfolge.

### Example

```php
function my_impressum_accessibility_information_requirements( $requirements ) {
	return 'My custom requirements';
}

add_filter( 'impressum_accessibility_information_requirements', 'my_impressum_accessibility_information_requirements' );
```

## `impressum_accessibility_information_guidelines`

Über den Filter `impressum_accessibility_information_guidelines` kann der Inhalt des Guidelines-Texts für die Information zur Barrierefreiheit verändert werden.

Parameter:
string $guidelines Aktueller Text  
array $options Optionen der Informationen zur Barrierefreiheit  
array $imprint\_options Optionen zum Impressum

Erwartet eine Zeichenfolge.

### Example

```php
function my_impressum_accessibility_information_guidelines( $guidelines ) {
	return 'My custom guidelines';
}

add_filter( 'impressum_accessibility_information_guidelines', 'my_impressum_accessibility_information_guidelines' );
```

## `impressum_accessibility_information_incompatibilities`

Über den Filter `impressum_accessibility_information_incompatibilities` kann der Inhalt des Inkompatibilitäten-Texts für die Information zur Barrierefreiheit verändert werden.

Parameter:
string $incompatibilities Aktueller Text  
array $options Optionen der Informationen zur Barrierefreiheit  
array $imprint\_options Optionen zum Impressum

Erwartet eine Zeichenfolge.

### Example

```php
function my_impressum_accessibility_information_incompatibilities( $incompatibilities ) {
	return 'My custom incompatibilities';
}

add_filter( 'impressum_accessibility_information_incompatibilities', 'my_impressum_accessibility_information_incompatibilities' );
```

## `impressum_accessibility_information_technologies`

Über den Filter `impressum_accessibility_information_technologies` kann der Inhalt des Technologien-Texts für die Information zur Barrierefreiheit verändert werden.

Parameter:
string $technologies Aktueller Text  
array $options Optionen der Informationen zur Barrierefreiheit  
array $imprint\_options Optionen zum Impressum

Erwartet eine Zeichenfolge.

### Example

```php
function my_impressum_accessibility_information_technologies( $technologies ) {
	return 'My custom technologies';
}

add_filter( 'impressum_accessibility_information_technologies', 'my_impressum_accessibility_information_technologies' );
```

## `impressum_accessibility_information_authority`

Über den Filter `impressum_accessibility_information_authority` kann der Inhalt des Texts der Marktüberwachungsbehörde für die Information zur Barrierefreiheit verändert werden.

Parameter:
string $authority Aktueller Text  
array $options Optionen der Informationen zur Barrierefreiheit  
array $imprint\_options Optionen zum Impressum

Erwartet eine Zeichenfolge.

### Example

```php
function my_impressum_accessibility_information_authority( $authority ) {
	return 'My custom authority';
}

add_filter( 'impressum_accessibility_information_authority', 'my_impressum_accessibility_information_authority' );
```
