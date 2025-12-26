# General

## `IMPRESSUM_PLUS_SKIP_REWRITE_RULES`

Since version 1.1.0 there is a constant `IMPRESSUM_PLUS_SKIP_REWRITE_RULES`, which can be set (for instance in the file `wp-config.php`), so that Impressum Plus doesn’t add rewrite rules inside the `.htaccess`.

```php
define( 'IMPRESSUM_PLUS_SKIP_REWRITE_RULES', true );
```

## `impressum_admin_default_tab`

Through the filter `impressum_admin_default_tab` the default active tab in the imprint settings in the backend can be set.

Parameters:
string $default_tab The default tab (default: `imprint`)

Expects a string.

### Example

```php
function my_impressum_admin_default_tab( $default_tab ) {
	return 'my-tab';
}

add_filter( 'impressum_admin_default_tab', 'my_impressum_admin_default_tab' );
```

## `impressum_admin_tab`

Through the filter `impressum_admin_tab` you can change the tabs in the backend.

Parameters:
array $tabs The tabs in the backend
string $form\_action The action of the form inside the tab
string $current\_tab The current active tab

Expects an array.

### Example

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

Through the filter `impressum_api_tab_content` you can change the content of the tab “API” in the backend.

Parameters:
string $content The “API”’s tab content

Expects a string.

### Example

```php
function my_impressum_api_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_api_tab_content', 'my_impressum_api_tab_content' );
```

## `impressum_disabled_backend`

Through the filter `impressum_disabled_backend` you can define whether the backend should be displayed or not (can be useful if controlled via API).

Parameters:
bool $disabled\_backend `true`, if the backend should not be displayed, `false` otherwise (default: `false`)

Expects a boolean.

### Example

```php
add_filter( 'impressum_disabled_backend', '__return_true' );
```

## `impressum_disabled_notice`

Through the filter `impressum_disabled_notice` you can define whether the notice in the backend should be displayed, that informs you about an incomplete imprint.

Parameters:
bool $disabled\_notice `true`, if the notice should be disabled `false` otherwise (default: `false`)

Expects a boolean.

### Example

```php
add_filter( 'impressum_disabled_notice', '__return_true' );
```

## `impressum_imprint_tab_content`

Through the filter `impressum_imprint_tab_content` you can change the content of the tab “imprint” in the backend.

Parameters:
string $content The “imprint”’s tab content

Expects a string.

### Example

```php
function my_impressum_imprint_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_imprint_tab_content', 'my_impressum_imprint_tab_content' );
```

## `impressum_privacy_tab_content`

Through the filter `impressum_privacy_tab_content` you can change the content of the tab “Privacy” in the backend.

Parameters:
string $content string $content The “Privacy”’s tab content

Expects a string.

### Example

```php
function my_impressum_privacy_tab_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_tab_content', 'my_impressum_privacy_tab_content' );
```
