# Migration auf Version 1.10.0

Version 1.10.0 hat fast die gesamte Struktur von Embed Privacy verändert, während die Abwärtskompatibilität gewährleistet wurde. Das heißt, dass viele Implementierungen der Version 1.9.x nun veraltet sind und in naher Zukunft entfernt werden (in Version 2.0.0). Der Code gibt bereits Aufschlüsse darüber, was man an Funktionalität wie ersetzen muss, aber um es klar aufzulisten, gibt es die folgenden Anweisungen.

## Struktur

Der Hauptgrund dieser Änderungen war eine bessere Struktur des Plugin-Codes zu bekommen. Er ist über die Zeit gewachsen und der Großteil war Teil einer einzelnen `Embed_Privacy`\-Klasse, was die Wartung und Erweiterung schwieriger machte, und teils auch das Verstehen des Codes selbst. Um das zu ändern, wurde ein Großteil des Codes nun in neue Klassen mit jeweils einer dedizierten Funktionalität ausgelagert. Das heißt, dass ein Großteil des Codes noch identisch vorhanden ist, nur an anderer Stelle.

## Embed-Anbieter

Eine große Änderung ist die Handhabung registrierter Embed-Anbieter. Jeder Anbieter, it dem Embed Privacy arbeitet, ist jetzt ein dediziertes Objekt vom Typ `epiphyt\Embed_Privacy\embed\data\Providers` mit all seinen Attributen, statt eines `WP_Post`\-Objekts, mit dem davor gearbeitet wurde. Wenn du deinen Code aktualisierst, stelle sicher, dass du nicht mehr auf Funktionen wie `get_post_meta` angewiesen bist, um Daten eines Embed-Anbieters zu bekommen, und verwende stattdessen das neue Objekt.

## Mit Embed-Overlays arbeiten

Die Initialisierung eines Overlays funktioniert nun anders. Du kannst dafür eine neue Instanz der Klasse `epiphyt\Embed_Privacy\embed\Replacement` erstellen, deinen Inhalt übergeben und die Handhabung der Overlays wird automatisch vonstatten gehen. Das heißt auch, dass der Anbieter des ersten vorkommenden Embeds automatisch erkannt wird.

Wenn du mehrere Embeds unterschiedlicher Anbieter im selben Inhalt hast, kannst du eine Schleife verwenden, um die Overlays aller Embed-Anbieter nacheinander zu ersetzen:

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

Das wird bereits innerhalb von `epiphyt\Embed_Privacy\data\Replacer::replace_embeds()` für dich gehandhabt. Stelle also sicher, dass du das vorzugsweise verwendest.

## Ersetzte Funktionalität

### Direkte Ersetzungen

Die folgenden Änderungen sind nur notwendig, um die neue Struktur des Plugins zu verwenden. Die Funktionalität bleibt jeweils gleich wie davor.

#### Klasse `epiphyt\Embed_Privacy\Admin`

Diese Klasse und all ihre Funktionalität ist veraltet und wird durch die neuen Klassen im Namespace `epiphyt\Embed_Privacy\admin` ersetzt:

* `Admin::add_meta_link()` → `epiphyt\Embed_Privacy\admin\User_Interface::add_meta_link()`
* `Admin::disallow_deleting_system_embeds()` → `epiphyt\Embed_Privacy\admin\Fields::disallow_deleting_system_embeds()`
* `Admin::get_field()` → `epiphyt\Embed_Privacy\admin\Field::get()`
* `Admin::init_settings()` → `epiphyt\Embed_Privacy\admin\Settings::register()`
* `Admin::options_html()` → `epiphyt\Embed_Privacy\admin\Settings::get_page()`
* `Admin::register_menu()` → `epiphyt\Embed_Privacy\admin\Settings::register_menu()`

#### Klasse `epiphyt\Embed_Privacy\Embed_Privacy_Widget_Output_Filter`

Diese Klasse und all ihre Funktionalität ist veraltet und wird durch die neue Klasse `epiphyt\Embed_Privacy\handler\Widget` ersetzt:

* `Embed_Privacy_Widget_Output_Filter::filter_dynamic_sidebar_params()` → `epiphyt\Embed_Privacy\handler\Widget::filter_dynamic_sidebar_params()`
* `Embed_Privacy_Widget_Output_Filter::display_widget()` → `epiphyt\Embed_Privacy\handler\Widget::display_widget()`

#### Klasse `epiphyt\Embed_Privacy\Embed_Privacy`

Die folgende Funktionalität dieser Klasse hat direkte Ersetzungen in unterschiedlichen Namespaces:

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

#### Klasse `epiphyt\Embed_Privacy\Fields`

Die folgende Funktionalität dieser Klasse hat direkte Ersetzungen in unterschiedlichen Namespaces:

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

### Anderes Vorgehen

Die folgenden Änderungen sind notwendig, da ein verändertes Verhalten bzw. eine veränderte Funktionalität vorhanden ist und Anpassungen in deiner Codebasis/-logik erforderlich sind.

#### Klasse `epiphyt\Embed_Privacy\Embed_Privacy`

The following methods of this class need changes in their functionality and/or logic:

* `Embed_Privacy::deregister_assets()` → keine direkte Alternative
* `Embed_Privacy::get_embed_by_name()` → `epiphyt\Embed_Privacy\data\Providers::get_by_name()`  
    Die neue Klasse gibt ein Objekt von `epiphyt\Embed_Privacy\embed\Provider` zurück, wie oben angemerkt, statt eines `WP_Post`\-Objekts.
* `Embed_Privacy::get_embed_overlay()` → `epiphyt\Embed_Privacy\embed\Replacement::get()`<br> `epiphyt\Embed_Privacy\embed\Replacement` muss zuerst initialisiert sein.
* `Embed_Privacy::get_embeds()` → `epiphyt\Embed_Privacy\data\Providers::get_list()`<br> Die neue Klasse gibt ein eine Liste an Objekten von `epiphyt\Embed_Privacy\embed\Provider` zurück, wie oben angemerkt, statt einer liste von `WP_Post`\-Objekten.
* `Embed_Privacy::get_single_overlay()` → `epiphyt\Embed_Privacy\embed\Replacement::get()`<br> `epiphyt\Embed_Privacy\embed\Replacement` muss zuerst initialisiert sein.
* `Embed_Privacy::get_style()` → keine direkte Alternative
* `Embed_Privacy::output_buffer_callback()` → keine direkte Alternative
* `Embed_Privacy::replace_embeds_divi()` → keine direkte Alternative
* `Embed_Privacy::start_output_buffer()` → keine direkte Alternative

## Filter

Die folgenden Filter wurden als veraltet markiert:

* `embed_privacy_content` → `embed_privacy_template_content`
* `embed_privacy_dynamic_style` → no alternative
* `embed_privacy_dynamic_style_properties` → no alternative
* `embed_privacy_markup` → `embed_privacy_template_markup`
* `embed_privacy_matcher_elements` → `embed_privacy_replacer_matcher_elements`
* `embed_privacy_overlay_args` → `embed_privacy_template_arguments`
* `embed_privacy_pre_thumbnail_delete_orphaned_delete` → `embed_privacy_thumbnail_delete_orphaned`
