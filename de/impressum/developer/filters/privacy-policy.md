# Filter Datenschutzerklärung

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

## `impressum_privacy_has_content` <Badge type="warning" text="Veraltet seit 2.11.0" />

Über den Filter `impressum_privacy_has_content` kannst du die Prüfung, ob ein Abschnitt einen Inhalt enthält, überschreiben.

Veraltet seit 2.11.0, verwende stattdessen `[impressum_privacy_is_active_policy](#impressum_privacy_is_active_policy)`.

Parameter:
string $option\_name Der Optionsname, der getestet wird

Erwartet einen bool’schen Wert.

## `impressum_privacy_is_active_policy` <Badge type="info" text="Seit 2.11.0" />

Über den Filter `impressum_privacy_is_active_policy` kannst du die Prüfung, ob ein Abschnitt einen Inhalt enthält, überschreiben.

Parameter:
string $option\_name Der Optionsname, der getestet wird  
mixed\[\] $options Liste an verfügbaren Optionen und deren Inhalt

Erwartet einen bool’schen Wert.

## `impressum_privacy_policy_content_{$category}` <Badge type="info" text="Seit 2.11.0" />

Über den Filter `impressum_privacy_policy_content_{$category}` kannst du den Inhalt der Datenschutzerklärung einer bestimmten Kategorie filtern.

Parameter:
string $policies Der Text der aktuellen Kategorie  
int $headline\_number Die Nummer der aktuellen Überschrift

Erwartet eine Zeichenfolge.

## `impressum_privacy_${this}_content`

ber den Filter `impressum_privacy_${this}_content` kann der Inhalt des aktuellen Bereichs in der Datenschutzerklärung verändert werden.

Seit 2.11.0 ist das Übergeben eines Arrays mit den Schlüsseln `content` und `headline_number` veraltet.

Parameter:
string $policy\_general Der allgemeine Inhalt der Datenschutzerklärung  
int $headline\_number Die aktuelle Überschriften-Nummer der Datenschutzerklärung

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_privacy_general_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_general_content', 'my_impressum_privacy_general_content' );
```

## `impressum_privacy_general_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_required_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_ssl_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_responsible_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_definition_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_legal_basis_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_dpf_content` <Badge type="info" text="Seit 2.7.0" />

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_logfile_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_cookie_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_consent_manager_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_tracking_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_gtm_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_ads_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_google_maps_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_google_fonts_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_youtube_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_vimeo_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_facebook_pixel_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_additional_tracking_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_contact_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_comment_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_cleantalk_content` <Badge type="info" text="Seit 2.7.0" />

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_social_sharing_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_register_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_newsletter_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_embed_privacy_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_spotify_content` <Badge type="info" text="Seit 2.7.0" />

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_storage_time_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_rights_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_paypal_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_stripe_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_mollie_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_dhl_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_jobs_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_amazon_partner_content`

Siehe [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_policy_content`

Über den Filter `impressum_privacy_policy_content` kann der Inhalt der gesamten Datenschutzerklärung verändert werden.

Parameter:
string $policy\_content Die Datenschutzerklärung

Erwartet eine Zeichenfolge.

### Beispiel

```php
function my_impressum_privacy_policy_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_policy_content', 'my_impressum_privacy_policy_content' );
```
