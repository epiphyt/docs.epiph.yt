# Allgemein

## `IMPRESSUM_PLUS_SKIP_REWRITE_RULES`

Ab Version 1.1.0 gibt es die Konstante `IMPRESSUM_PLUS_SKIP_REWRITE_RULES`, die gesetzt werden kann (beispielsweise in der Datei `wp-config.php`), damit Impressum Plus keine Umschreibungsregeln mehr in der `.htaccess` einträgt.

```php
define( 'IMPRESSUM_PLUS_SKIP_REWRITE_RULES', true );
```

## `impressum_admin_default_tab`

Über den Filter `impressum_admin_default_tab` kann der standardmäßig aktive Tab geändert werden, der beim Aufruf der Impressumseinstellungen im Backend angezeigt wird.

Parameter:
string $default\_tab Der Standard-Tab (Standardwert: `imprint`)

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_admin_default_tab( $default_tab ) {
	return 'my-tab';
}

add_filter( 'impressum_admin_default_tab', 'my_impressum_admin_default_tab' );
```

## `impressum_admin_tab`

Über den Filter `impressum_admin_tab` können die Tabs im Backend verändert werden.

Parameter:
array $tabs Die Tabs im Backend  
string $form\_action Die Action des Formulars innerhalb des Tabs  
string $current\_tab Der aktuell aktive Tab

Erwartet ein Array.

### Beispiel

```php
function my_impressum_admin_tab( $tabs, $form_action, $current_tab ) {
	$slug = 'my-tab';
	
	// get content
	ob_start();
	echo '<div class="nav-tab-content' . ( $current_tab === $slug ? ' nav-tab-content-active' : '' ) . '" id="nav-tab-content-' . esc_attr( $slug ) . '">';
	echo '<form action="' . esc_html( $form_action ) . '" method="post">';
	// output security fields for the registered setting "impressum"
	settings_fields( 'impressum_' . $slug );
	// output setting sections and their fields
	// (sections are registered for "impressum", each field is registered to a specific section)
	do_settings_sections( 'impressum_' . $slug );
	// output save settings button
	submit_button( __( 'Save Settings', 'impressum-plus' ) );
	echo '</form>';
	echo '</div>';
	
	$tabs[] = [
		'content' => ob_get_clean(),
		'slug' => $slug,
		'title' => __( 'My Tab', 'impressum-plus' ),
	];
	
	return $tabs;
}

add_filter( 'impressum_admin_tab', 'my_impressum_admin_tab', 10, 3 );
```

## `impressum_api_tab_content`

Über den Filter `impressum_api_tab_content` kann der Inhalt des Tabs „API“ im Backend verändert werden.

Parameter:
string $content Der Inhalt des Tabs „API“

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_api_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_api_tab_content', 'my_impressum_api_tab_content' );
```

## `impressum_disabled_backend`

Über den Filter `impressum_disabled_backend` kann gesteuert werden, ob das Backend nicht angezeigt werden soll (gegebenenfalls sinnvoll, wenn per API gesteuert).

Parameter:
bool $disabled\_backend `true`, wenn das Backend nicht angezeigt werden soll, sonst `false` (Standard: `false`)

Erwartet einen bool’schen Wert.

### Beispiel

```php
add_filter( 'impressum_disabled_backend', '__return_true' );
```

## `impressum_disabled_notice`

Über den Filter `impressum_disabled_notice` kann gesteuert werden, ob der Hinweis im Backend, wenn ein Impressum noch nicht vollständig ausgefüllt wurde, nicht angezeigt werden soll.

Parameter:
bool $disabled\_notice `true`, wenn der Hinweis nicht angezeigt werden soll, sonst `false` (Standard: `false`)

Erwartet einen bool’schen Wert.

### Beispiel

```php
add_filter( 'impressum_disabled_notice', '__return_true' );
```

## `impressum_imprint_tab_content`

Über den Filter `impressum_imprint_tab_content` kann der Inhalt des Tabs „Impressum“ im Backend verändert werden.

Parameter:
string $content Der Inhalt des Tabs „Impressum“

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_imprint_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_imprint_tab_content', 'my_impressum_imprint_tab_content' );
```

## `impressum_privacy_tab_content`

Über den Filter `impressum_privacy_tab_content` kann der Inhalt des Tabs „Datenschutz“ im Backend verändert werden.

Parameter:
string $content Der Inhalt des Tabs „Datenschutz“

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_privacy_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_tab_content', 'my_impressum_privacy_tab_content' );
```
