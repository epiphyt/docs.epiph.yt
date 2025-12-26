# Filter Privacy Policy

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

## `impressum_privacy_has_content`

Through the filter `impressum_privacy_has_content` you can override the check if a policy has content.

Deprecated since 2.11.0, use `[impressum_privacy_is_active_policy](#impressum_privacy_is_active_policy)` instead.

Parameters:
string $option\_name The option name to test

Expects a boolean.

## `impressum_privacy_is_active_policy`

since 2.11.0

Through the filter `impressum_privacy_is_active_policy` you can override the check if a policy has content.

Parameters:
string $option\_name The option name to test
mixed\[\] $options Current privacy options

Expects a boolean.

## `impressum_privacy_policy_content_{$category}`

since 2.11.0

Through the filter `impressum_privacy_policy_content_{$category}` you can filter the policy content of a single category.

Parameters:
string $policies Current category’s policies
int $headline\_number Current headline number

Expects a string.

## `impressum_privacy_${this}_content`

Through the filter `impressum_privacy_${this}_content` the content of the current area in the privacy policy can be changed.

Since 2.11.0, passing an array containing the `content` and `headline_number` is deprecated.

Parameters:
string $policy\_general The current content of the privacy policy
int $headline\_number Current headline number in the whole privacy policy

Expects a string.

### Example

```php
function my_impressum_privacy_general_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_general_content', 'my_impressum_privacy_general_content' );
```

## `impressum_privacy_general_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_required_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_ssl_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_responsible_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_definition_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_legal_basis_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_dpf_content`

since 2.7.0

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_logfile_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_cookie_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_consent_manager_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_tracking_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_gtm_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_ads_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_google_maps_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_google_fonts_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_youtube_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_vimeo_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_facebook_pixel_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_additional_tracking_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_contact_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_comment_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_cleantalk_content`

since 2.7.0

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_social_sharing_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_register_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_newsletter_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_embed_privacy_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_spotify_content`

since 2.7.0

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_storage_time_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_rights_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_paypal_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_stripe_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_mollie_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_dhl_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_jobs_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_amazon_partner_content`

See [`impressum_privacy_${this}_content`](#impressum_privacy_this_content).

## `impressum_privacy_policy_content`

Through the filter `impressum_privacy_policy_content` the content of the complete privacy policy can be changed.

Parameters:
string $policy\_content The privacy policy

Expects a string.

### Example

```php
function my_impressum_privacy_policy_content( $content ) {
	// do stuff with content
	
	// then
	return $content;
}

add_filter( 'impressum_privacy_policy_content', 'my_impressum_privacy_policy_content' );
```
