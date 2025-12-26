# Filters

## `embed_privacy_integrations`

Since 1.10.0

Through the filter `embed_privacy_integrations` the available integrations can be changed before their initialization.

Parameters:
array $integrations List of integrations

Expects an array.

## `embed_privacy_content`

Through the filter `embed_privacy_content` the embed overlay content can be changed.

Deprecated since 1.10.0, use `[embed_privacy_template_content](#embed_privacy_template_content)` instead.

Parameters:
string $content The content  
string $embed\_provider The embed provider of this embed

Expects a string.

## `embed_privacy_overlay_footer`

Through the filter `embed_privacy_overlay_footer` the footer of the embed overlay container can be changed.

Parameters:
string $footer\_content The footer content

Expects a string.

## `embed_privacy_markup`

Through the filter `embed_privacy_markup` the whole embed overlay container can be changed.

Deprecated since 1.10.0, use [embed\_privacy\_template\_markup](#embed_privacy_template_markup) instead.

Parameters:
string $markup The markup  
string $embed\_provider The embed provider of this embed

Expects a string.

## `embed_privacy_has_embed`

Since 1.3.0

Through the filter `embed_privacy_has_embed` the return value of `Embed_Privacy::has_embed()` can be overridden.

Parameters:
null $has\_embed The default value

Expects anything other than `null`.

## `embed_privacy_provider_list`

Since 1.10.0

Through the filter `embed_privacy_provider_list` the list of providers for a specific identifier can be filtered.

Parameters:
array $provider\_list Current provider list  
string $identifier Current identifier  
array $global\_list List with all providers of all identifiers

Expects an array.

## `embed_privacy_provider_name`

Since 1.10.0

Through the filter `embed_privacy_provider_name` the name of an embed provider can be filtered.

Parameters:
string $name Embed provider name  
string $provider Embed provider

Expects a string.

## `embed_privacy_overlay_provider`

Since 1.10.0

Through the filter `embed_privacy_overlay_provider` the current embed provider can be filtered.

Parameters:
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider Current provider  
string $content Content to get the provider from  
string $url URL to the embedded content

Expects an object of type `\epiphyt\Embed_Privacy\embed\Provider`.

## `embed_privacy_print_assets`

Since 1.10.0

The action `embed_privacy_print_assets` fires after the assets have been printed.

## `embed_privacy_register_assets`

Since 1.10.0

The action `embed_privacy_register_assets` fires after the assets have been registered.

Parameters:
bool $is\_debug Whether debug mode is enabled  
string $suffix A filename suffix

## `embed_privacy_assets_$embed_provider_lowercase`

Since 1.4.5

Through the filter `embed_privacy_assets_$embed_provider_lowercase` additional assets that are necessary to get an embed working can be printed.

Each asset must be an array with at least a `type` parameter, which is either set to `script` for script elements or `inline` for an inline script.

If the `type` is set to `script`, the parameters `handle` and `src` are required, which are similar to identical parameters in `wp_enqueue_script`. Additionally, a parameter `version` can be added.

If the type is set to `inline`, the parameters `data` and `object_name` are required, which are similar to identical parameters in `wp_add_inline_script`.

Parameters:
array $assets List of embed assets  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects an array with arrays.

## `embed_privacy_overlay_args`

Through the filter `embed_privacy_overlay_args` the arguments before creating an overlay can be changed.

Deprecated since 1.10.0, use [embed\_privacy\_template\_attributes](#embed_privacy_template_attributes) instead.

Parameters:
array $args Template arguments  
string $embed\_provider The embed provider  
string $embed\_provider\_lowercase The embed provider without spaces and in lowercase  
string $output The output before replacing it

Expects an array.

## `embed_privacy_overlay_replaced_content`

Since 1.10.0

Through the filter `embed_privacy_overlay_replaced_content` the replaced embed content can be changed.

Parameters:
string $content Replaced content

Expects a string.

## `embed_privacy_overlay_character_replacements`

Since 1.10.0

Through the filter `embed_privacy_overlay_character_replacements` special character replacements for `DOMDocument` can be changed.

Parameters:
array $replacements Current replacements

Expects an associative array.

## `embed_privacy_template_attributes`

Since 1.10.0

Through the filter `embed_privacy_template_attributes` the attributes for the embed template can be changed.

Parameters:
array $attributes Template attributes  
string $provider The embed provider  
string $output The output before replacing it

Expects an array.

## `embed_privacy_before_template_output`

Since 1.10.0

The action `embed_privacy_before_template_output` fires before the template output is generated.

Parameters:
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider The embed provider  
\\epiphyt\\Embed\_Privacy\\embed\\Style $style The overlay style object  
array $attributes Additional attributes

## `embed_privacy_template_content`

Since 1.10.0

Through the filter `embed_privacy_template_content` the content of an overlay template can be changed.

Parameters:
string $content The content  
string $provider The embed provider of this embed

Expects a string.

## `embed_privacy_template_markup`

Since 1.10.0

Through the filter `embed_privacy_template_markup` the markup of an overlay template can be changed.

Parameters:
string $markup The markup  
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider The embed provider of this embed

Expects a string.

## `embed_privacy_theme_content_width`

Since 1.10.0

Through the filter `embed_privacy_theme_content_width` the content with to determine the correct embed aspect ratio can be filtered.

Parameters:
int $content\_width Current content width

Expects an integer.

## `embed_privacy_background_path_$embed_provider_lowercase`

Since 1.1.0

Through the filter `embed_privacy_background_path_$embed_provider_lowercase` the path to the background image of the overlay can be changed.

Parameters:
string $background\_path The default background path  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid path to a background image.

## `embed_privacy_background_url_$embed_provider_lowercase`

Since 1.1.0

Through the filter `embed_privacy_background_url_$embed_provider_lowercase` the URL to the background image of the overlay can be changed.

Parameters:
string $background\_url The default background URL  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid URL to a background image.

## `embed_privacy_logo_path_$embed_provider_lowercase`

Through the filter `embed_privacy_logo_path_$embed_provider_lowercase` the path to the logo of the overlay can be changed.

Parameters:
string $`logo`\_path The default logo path  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid path to a logo.

## ``embed_privacy_`logo`_url_$embed_provider_lowercase``

Through the filter ``embed_privacy_`logo`_url_$embed_provider_lowercasethe URL to the logo of the overlay can be changed.

Parameters:
string $`logo`\_url The default logo URL  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid URL to a logo.

## `embed_privacy_thumbnail_checked_orphaned`

Since 1.7.0

The action `embed_privacy_thumbnail_checked_orphaned` fires after orphaned data for a provider have been checked and deleted, if applicable.

Parameters:
string $provider Provider name  
string $id The ID of the embedded content  
string $url The embed URL  
bool $missin\_id Whether the ID is missing  
bool $missing\_url Whether the URL is missing  
string $meta\_value The thumbnail filename  
string $meta\_key The thumbnail meta key  
WP\_Post $post The post object  
int $post\_id The post ID

## `embed_privacy_thumbnail_data_filename`

Since 1.7.0

Through the filter `embed_privacy_thumbnail_data_filename` the thumbnail filename while getting thumbnail data can be changed.

Parameters:
string $thumbnail The thumbnail filename  
WP\_Post $post The post object  
string $url The embed URL

Expects a string with a thumbnail filename.

## `embed_privacy_thumbnail_data_id`

Since 1.7.0

Through the filter `embed_privacy_thumbnail_data_id` the thumbnail ID while getting thumbnail data can be changed.

Parameters:
string $id The thumbnail ID  
WP\_Post $post The post object  
string $url The embed URL

Expects a string with a thumbnail ID.

## `embed_privacy_thumbnail_data_path`

Since 1.7.0

Through the filter `embed_privacy_thumbnail_data_path` the thumbnail path while getting thumbnail data can be changed.

Parameters:
string $thumbnail The thumbnail path  
WP\_Post $post The post object  
string $url The embed URL

Expects a string with a thumbnail path.

## `embed_privacy_thumbnail_data_url`

Since 1.7.0

Through the filter `embed_privacy_thumbnail_data_url` the thumbnail URL while getting thumbnail data can be changed.

Parameters:
string $url The thumbnail URL  
WP\_Post $post The post object  
string $url The embed URL

Expects a string with a thumbnail URL.

## `embed_privacy_thumbnail_get_from_provider`

Since 1.7.0

The action `embed_privacy_thumbnail_get_from_provider` fires after thumbnail data have been processed.

Parameters:
string $return The returned oEmbed HTML  
object $data A data object result from an oEmbed provider  
string $url The URL of the content to be embedded

## `embed_privacy_thumbnail_path_$embed_provider_lowercase`

Since 1.1.0

Through the filter `embed_privacy_thumbnail_path_$embed_provider_lowercase` the path to the thumbnail of the overlay can be changed.

Parameters:
string $thumbnail\_path The default thumbnail path  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid path to a thumbnail.

## `embed_privacy_thumbnail_supported_provider_names`

Since 1.7.0

Through the filter `embed_privacy_thumbnail_supported_provider_names` the internal names of supported thumbnail providers can be changed.

Parameters:
array supported\_providers Current supported provider names

Expects an array with thumbnail provider names.

## `embed_privacy_thumbnail_providers`

Since 1.9.0

Through the filter `embed_privacy_thumbnail_providers` the registered thumbnail providers can be changed.

Parameters:
Thumbnail\_Provider\[\] $supported\_providers Current supported providers

Expects an array with thumbnail provider classes.

## `embed_privacy_pre_thumbnail_delete_orphaned_delete`

Through the action `embed_privacy_pre_thumbnail_delete_orphaned_delete` the deletion of orphaned thumbnails can be disabled.

Deprecated since 1.10.0, use [embed\_privacy\_thumbnail\_delete\_orphaned](#embed_privacy_thumbnail_delete_orphaned) instead.

Parameters:
string $id The thumbnail ID  
string $url The thumbnail URL  
int $post\_id The post ID  
string $provider The provider name

## `embed_privacy_thumbnail_delete_orphaned`

Since 1.10.0

Through the filter `embed_privacy_thumbnail_delete_orphaned` the deletion of orphaned thumbnails can be disabled.

Parameters:
bool $should\_delete Whether the thumbnail should be deleted  
string $id The thumbnail ID  
string $url The thumbnail URL  
int $post\_id The post ID  
string $provider The provider name

Expects a boolean.

## `embed_privacy_thumbnail_url_$embed_provider_lowercase`

Since 1.1.0

Through the filter `embed_privacy_thumbnail_url_$embed_provider_lowercase` the URL to the thumbnail of the overlay can be changed.

Parameters:
string $thumbnail\_url The default thumbnail URL  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects a string to a valid URL to a thumbnail.

## `embed_privacy_ignore_embed`

Since 1.9.0

Through the filter `embed_privacy_ignore_embed` the processing of particular embeds can be disabled.

Parameters:
bool $ignore\_embed Whether to ignore this embed  
string $content The original content  
string $embed\_provider The embed provider  
string $embed\_provider\_lowercase The embed provider without spaces and in lowercase  
array $args Additional arguments

Expects a boolean.

## `embed_privacy_is_ignored_request`

Since 1.10.0

Through the filter `embed_privacy_is_ignored_request` a complete request can be set to be ignored.

Parameters:
bool $is\_ignored\_embed Whether the request is currently ignored

Expects a boolean.

## `embed_privacy_ignore_unknown_providers`

Since 1.5.0

Through the filter `embed_privacy_ignore_unknown_providers` the processing of embeds of unknown embed providers can be disabled.

Parameters:
bool $ignore\_unknown Whether unknown providers should be ignored  
string $content The original content

Expects a boolean.

## `embed_privacy_ignored_shortcodes`

Since 1.6.0

Through the filter `embed_privacy_ignored_shortcodes` shortcodes can be ignored from being replaced by an overlay.

Parameters:
string\[\] $ignored\_shortcodes Current list of ignored shortcodes

Expects an array.

## `embed_privacy_should_replace_match`

Since 1.10.9

Through the filter `embed_privacy_should_replace_match` you can define whether a match should actually be replaced.

Parameters:
string $matched\_content Actual matched content  
\\epiphyt\\Embed\_privacy\\embed\\Provider $provider Provider object  
string $content Current content  
mixed\[\] $attributes Current attributes

Expects a boolean.

## `embed_privacy_dynamic_style_properties`

Through the filter `embed_privacy_dynamic_style_properties` properties for the dynamic embed style of a page can be changed.

Deprecated since 1.10.0.

Parameters:
array $style\_properties Style properties array

Expects an array.

## `embed_privacy_dynamic_style`

Through the filter `embed_privacy_dynamic_style` the dynamic embed style of a page can be changed.

Deprecated since 1.10.0.

Parameters:
string $style Generated style  
array $style\_properties Style properties array

Expects a string.

## `embed_privacy_matcher_elements`

Through the filter `embed_privacy_matcher_elements` the HTML elements, which will extend the regular expression for custom embed providers, can be changed.

Deprecated since 1.10.0, use `[embed_privacy_replacer_matcher_elements](#embed_privacy_replacer_matcher_elements)` instead.

Parameters:
array $allowed\_tags The allowed tags  
string $embed\_provider\_lowercase The current embed provider in lowercase

Expects an array.

## `embed_privacy_replacer_matcher_elements`

Since 1.10.0

Through the filter `embed_privacy_replacer_matcher_elements` the HTML elements, which will extend the regular expression for custom embed providers, can be changed.

Parameters:
string\[\] $allowed\_tags List of allowed tags  
\\epiphyt\\Embed\_privacy\\embed\\Provider|null $provider Embed provider

Expects an array.

## `embed_privacy_custom_embed_replacement`

Since 1.11.0

Through the filter `embed_privacy_custom_embed_replacement` a custom replacement for embeds can be returned, short-circuiting the default replacement strategy of Embed Privacy.

Parameters:
string $custom\_replacement Current custom replacement  
string $content The original content  
string $tag The shortcode tag if called via do\_shortcode

Expects a string.

## `embed_privacy_custom_oembed_replacement`

Since 1.11.0

Through the filter `embed_privacy_custom_oembed_replacement` a custom replacement for oEmbeds can be returned, short-circuiting the default replacement strategy of Embed Privacy.

Parameters:
string $custom\_replacement Current custom replacement  
string $output The original output  
\\epiphyt\\Embed\_privacy\\embed\\Provider $provider Current provider  
string $url The URL to the embed  
array $attributes Additional attributes of the embed

Expects a string.

## `embed_privacy_widget_output`

Since 1.1.0

Through the filter `embed_privacy_widget_output` the output of a widget can be changed.

Parameters:
string $widget\_output The widget’s output  
string $widget\_id The widget’s full ID  
string $sidebar\_id The current sidebar ID

Expects a string.

## `embed_privacy_opt_out_headline`

Since 1.2.0

Through the filter `embed_privacy_opt_out_headline` the headline of the opt-out shortcode can be changed.

Parameters:
string $headline Current headline HTML  
array $attributes Shortcode attributes

Expects a string.

## `embed_privacy_opt_out_subline`

Since 1.2.0

Through the filter `embed_privacy_opt_out_subline` the sublime of the opt-out shortcode can be changed.

Parameters:
string $headline Current subline HTML  
array $attributes Shortcode attributes

Expects a string.

## `embed_privacy_editor_fields`

Through the filter `embed_privacy_editor_fields` additional fields can be rendered in the embed provider editor screen.

Parameters:
int $post\_id The current post ID

Expects a string.

## `embed_privacy_register_fields`

Since 1.2.0

Through the filter `embed_privacy_register_fields` additional fields can be registered.

Parameters:
int $post\_id The current post ID

Expects an array.

## `embed_privacy_fields`

Through the filter `embed_privacy_fields` all registered fields can be changed.

Parameters:
array $fields Registered fields

Expects an array.

## `embed_privacy_valid_files`

Through the filter `embed_privacy_valid_files` the name of valid files in POST requests of the editor can be changed.

Parameters:
array The default name list

Expects an array.

## `jetpack_sharing_facebook_app_id`

Since 1.4.5

Through the filter `jetpack_sharing_facebook_app_id` the Facebook app ID of Jetpack sharing can be changed.

Parameters:
string $app\_id The current app ID

Expects a string.
