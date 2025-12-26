# Privacy Policy System Check Filters

Impressum Plus tries to detect certain content on the website within the System Check automatically and shows or hides according content in the privacy policy automatically.

After changing one or multiple of the filters below, you can force a re-check by saving the privacy settings in the backend.

## `impressum_privacy_{$option}_slugs`

Through the filter `impressum_privacy_{$option}_slugs` you can change the content of the plugins to be checked in the system check for the current option.

Parameters:  
string\[\] $slugs The default given slugs  
string $option The option name of the check

Expects an array.

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

See [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_google_ads_slugs`

See [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_shop_slugs`

See [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).

## `impressum_privacy_comment_subscription_slugs`

See [`impressum_privacy_${option}_slugs`](#impressum_privacy_this_content).
