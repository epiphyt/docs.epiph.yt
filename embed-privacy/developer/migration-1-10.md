# Migration to version 1.10.0

Version 1.10.0 updated nearly the complete structure of Embed Privacy while maintaining fully backwards-compatibility. That means, that many implementations since version 1.9.x are now deprecated and will be removed in the near future (in version 2.0.0). The code might already guide you on what to use instead of the old functionality, but to make it more clear, the following instructions will give you a complete overview of what’s changed.

## Structure

The main purpose of the changes was to create a better structure of the plugin code. It has been grown over time and most of the code was inside a single `Embed_Privacy` class, which made it hard to maintain and extend or even understand it. To change this, most of the code of this class has been moved to new classes with a dedicated purpose. That means, that most of the public code is still available the same way, but just in a different location.

## Embed providers

One major change is handling of registered embed providers. Every provider Embed Privacy is working with is now a dedicated object of type `epiphyt\Embed_Privacy\embed\Provider`, which has all necessary fields of a provider instead of a `WP_Post` object, that has been worked with before. So if you update your code, make sure you don’t rely on things like `get_post_meta` to get data of the embed provider but use the dedicated getters of the new object instead.

## Working with embed overlays

Initializing an overlay works now differently. You can just create a new instance of the `epiphyt\Embed_Privacy\embed\Replacement` class, pass your content and the overlay handling will be automatically processed for you. That also means that the provider of the first occurring embed will be detected automatically.

If you have multiple embeds of different providers in the same content, use a loop to replace the overlays for all embed providers one after another:

```php
$new_content = $content;
$replacement = new Replacement( $new_content );
$new_content = $replacement->get();

while ( $new_content !== $content ) {
	$content = $new_content;
	$replacement = new Replacement( $new_content );
	$new_content = $replacement->get();
}
```

This is already handled within `epiphyt\Embed_Privacy\data\Replacer::replace_embeds()` for you, so make sure you use this as preferred way.

## Replaced functionality

### Drop-in replacements

The following changes are necessary for using the new plugin structure only. It keeps its functionality as before.

#### Class `epiphyt\Embed_Privacy\Admin`

This class and all of its functionality has been deprecated in favor of new classes in namespace `epiphyt\Embed_Privacy\admin`:

* `Admin::add_meta_link()` → `epiphyt\Embed_Privacy\admin\User_Interface::add_meta_link()`
* `Admin::disallow_deleting_system_embeds()` → `epiphyt\Embed_Privacy\admin\Fields::disallow_deleting_system_embeds()`
* `Admin::get_field()` → `epiphyt\Embed_Privacy\admin\Field::get()`
* `Admin::init_settings()` → `epiphyt\Embed_Privacy\admin\Settings::register()`
* `Admin::options_html()` → `epiphyt\Embed_Privacy\admin\Settings::get_page()`
* `Admin::register_menu()` → `epiphyt\Embed_Privacy\admin\Settings::register_menu()`

#### Class `epiphyt\Embed_Privacy\Embed_Privacy_Widget_Output_Filter`

This class and all of its functionality has been deprecated in favor of new classes in `epiphyt\Embed_Privacy\handler\Widget`:

* `Embed_Privacy_Widget_Output_Filter::filter_dynamic_sidebar_params()` → `epiphyt\Embed_Privacy\handler\Widget::filter_dynamic_sidebar_params()`
* `Embed_Privacy_Widget_Output_Filter::display_widget()` → `epiphyt\Embed_Privacy\handler\Widget::display_widget()`

#### Class `epiphyt\Embed_Privacy\Embed_Privacy`

The following functionality of this class have drop-in replacements in different namespaces:

* `Embed_Privacy::$plugin_file` → `\EPI_EMBED_PRIVACY_FILE`
* `Embed_Privacy::clear_embed_cache()` → `epiphyt\Embed_Privacy\handler\Post::clear_embed_cache()`
* `Embed_Privacy::get_ignored_shortcodes()` → `epiphyt\Embed_Privacy\Shortcode::get_ignored()`
* `Embed_Privacy::get_output_template()` → `epiphyt\Embed_Privacy\embed\Template::get()`
* `Embed_Privacy::has_embed()` → `epiphyt\Embed_Privacy\handler\Post::has_embed()`
* `Embed_Privacy::is_always_active_provider()` → `epiphyt\Embed_Privacy\data\Providers::is_always_active()`
* `Embed_Privacy::is_elementor()` → `epiphyt\Embed_Privacy\integration\Elementor::is_used()`
* `Embed_Privacy::is_theme()` → `epiphyt\Embed_Privacy\handler\Theme::is()`
* `Embed_Privacy::print_assets()` → `epiphyt\Embed_Privacy\Frontend::print_assets()`
* `Embed_Privacy::register_assets()` → `epiphyt\Embed_Privacy\Frontend::register_assets()`
* `Embed_Privacy::register_polylang_post_type()` → `epiphyt\Embed_Privacy\integration\Polylang::register_post_type()`
* `Embed_Privacy::replace_embeds()` → `epiphyt\Embed_Privacy\data\Replacer::replace_embeds()`
* `Embed_Privacy::replace_embeds_oembed()` → `epiphyt\Embed_Privacy\data\Replacer::replace_oembed()`
* `Embed_Privacy::replace_maps_marker()` → `epiphyt\Embed_Privacy\integration\Maps_Marker::replace()`
* `Embed_Privacy::replace_video_shortcode()` → `epiphyt\Embed_Privacy\data\Replacer::replace_video_shortcode()`
* `Embed_Privacy::set_post_type()` → `epiphyt\Embed_Privacy:\Embed_Privacy:register_post_type()`
* `Embed_Privacy::shortcode_opt_out()` → `epiphyt\Embed_Privacy\handler\Shortcode::opt_out()`

#### Class `epiphyt\Embed_Privacy\Fields`

The following functionality of this class have drop-in replacements in different namespaces:

* `Fields::add_meta_boxes()` → `epiphyt\Embed_Privacy\admin\Fields::add_meta_boxes()`
* `Fields::enqueue_admin_assets()` → `epiphyt\Embed_Privacy\admin\User_Interface::enqueue_assets()`
* `Fields::get_the_fields_html()` → `epiphyt\Embed_Privacy\admin\Fields::get()`
* `Fields::get_the_image_field_html()` → `epiphyt\Embed_Privacy\admin\Fields::get_image()`
* `Fields::get_the_input_field_html()` → `epiphyt\Embed_Privacy\admin\Fields::get()`
* `Fields::register()` → `epiphyt\Embed_Privacy\admin\Fields::register()`
* `Fields::register_default_fields()` → `epiphyt\Embed_Privacy\admin\Fields::register_default()`
* `Fields::remove_default_fields()` → `epiphyt\Embed_Privacy\admin\Fields::remove_default()`
* `Fields::save_fields()` → `epiphyt\Embed_Privacy\admin\Fields::save()`
* `Fields::upload_file()` → `epiphyt\Embed_Privacy\admin\Fields::upload_file()`

### Different approaches

The following changes are necessary because of changed behavior/functionality and require changes in your code base and logic.

#### Class `epiphyt\Embed_Privacy\Embed_Privacy`

The following methods of this class need changes in their functionality and/or logic:

* `Embed_Privacy::deregister_assets()` → no direct alternative
* `Embed_Privacy::get_embed_by_name()` → `epiphyt\Embed_Privacy\data\Providers::get_by_name()`<br> The new class returns an object of `epiphyt\Embed_Privacy\embed\Provider` as noted above, instead of a `WP_Post` object.
* `Embed_Privacy::get_embed_overlay()` → `epiphyt\Embed_Privacy\embed\Replacement::get()`<br> The `epiphyt\Embed_Privacy\embed\Replacement` needs to be initialized first.
* `Embed_Privacy::get_embeds()` → `epiphyt\Embed_Privacy\data\Providers::get_list()`<br> The new class returns a list of objects of `epiphyt\Embed_Privacy\embed\Provider` as noted above, instead of a list of `WP_Post` objects.
* `Embed_Privacy::get_single_overlay()` → `epiphyt\Embed_Privacy\embed\Replacement::get()`<br> The `epiphyt\Embed_Privacy\embed\Replacement` needs to be initialized first.
* `Embed_Privacy::get_style()` → no direct alternative
* `Embed_Privacy::output_buffer_callback()` → no direct alternative
* `Embed_Privacy::replace_embeds_divi()` → no direct alternative
* `Embed_Privacy::start_output_buffer()` → no direct alternative

## Filters

The following filters have been deprecated:

* `embed_privacy_content` → `embed_privacy_template_content`
* `embed_privacy_dynamic_style` → no alternative
* `embed_privacy_dynamic_style_properties` → no alternative
* `embed_privacy_markup` → `embed_privacy_template_markup`
* `embed_privacy_matcher_elements` → `embed_privacy_replacer_matcher_elements`
* `embed_privacy_overlay_args` → `embed_privacy_template_arguments`
* `embed_privacy_pre_thumbnail_delete_orphaned_delete` → `embed_privacy_thumbnail_delete_orphaned`
