# Filter Datenschutzerklärung-Systemprüfung

Bei der Systemprüfung versucht Impressum Plus, automatisch zu erkennen, ob bestimmte Inhalte auf der Website verbaut sind und zeigt dementsprechend Inhalte in der Datenschutzerklärung automatisch ein oder blendet sie aus.

Nach der Änderung über einen der unten stehenden Filter kann man die Prüfung forcieren, indem man im Backend die Datenschutz-Einstellungen erneut speichert.

## `impressum_privacy_{$option}_slugs`

Über den Filter `impressum_privacy_{$option}_slugs` kann der Inhalt der zu überprüfenden Plugins in der Systemprüfung für die jeweilige Option verändert werden.

Parameter:
string\[\] $slugs Die aktuellen Plugin-Titelformen  
string $option Der Name der Option, die geprüft wird

Erwartet ein Array.

### Example

```php
function my_impressum_privacy_contact_form_slugs( $slugs ) {
	// add slug
	$slugs[] = 'my-plugin/my-plugin.php';
	
	// then
	return $slugs;
}

add_filter( 'impressum_privacy_contact_form_slugs', 'my_impressum_privacy_contact_form_slugs' );
```

## `impressum_privacy_contact_form_slugs`

Siehe [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_google_ads_slugs`

Siehe [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_shop_slugs`

Siehe [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_comment_subscription_slugs`

Siehe [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).
