# Migration to version 3.0.0

Impressum 3.0.0, and therefore also Impressum Plus 3.0.0, includes a big rework and removing any previously deprecated functions. Additionally, certain parts are now using dependency injection for dependencies within these classes. Thus, this version is a major release with breaking changes.

If you just use the plugin(s) in their default setup without extending it via code or just use hooks and filters that were not previously marked as deprecated, you’re good to go and don’t have to do anything.

Following, you will find information about changes within Impressum 3.0.0 and Impressum Plus 3.0.0. I cannot guarantee that this list of changes is complete, though.

## System requirements

The system requirements have been updated from previously requiring PHP 5.6 and WordPress 5.0, respectively, to PHP 8.1 and WordPress 6.8.

## Deleted code

The class `epiphyt\Impressum\Impressum` has been deleted in favor of `epiphyt\Impressum\Plugin`.

## Dependency Injection Container (DIC)

For Impressum 3.0.0, you can use a dependency injection container to get certain class instances. Currently supported (this may change over time):

* `admin`
* `block-registry`
* `frontend`
* `helper`
* `plugin`
* `settings-data`
* `settings-registry`

You can access them like this:

```php
$plugin = \epiphyt\Impressum\get_container()->get( 'plugin' );
```

If a service is not found, the container returns a `WP_Error` object.

## Plugin initialization

The plugins are now only initialized within the `plugins_loaded` hook, where Impressum Plus has the custom priority of `15`.

## Strict types

From now on, any new code is set to use `strict_types = 1`. For Impressum Plus, also the current code has been updated accordingly. That means that you should make sure that the passed data to Impressum and Impressum Plus are actually the expected type.

## Settings

All available settings are now properly registered within a settings registry. That also means that custom settings are required to be registered, too, since otherwise they won’t save.

Each setting is now an `\epiphyt\Impressum\settings\Setting` to get a standardized way of getting its data and information.

To register your setting, you can use the same array shape as before (if it already has been similar to the ones used in Impressum and Impressum Plus). You can then pass it to `epiphyt\Impressum\settings\Registry::register()` or `epiphyt\Impressum\settings\Registry::register_multiple()`. For example:

```php
$settings_registry = \epiphyt\Impressum\get_container()->get( 'settings-registry' );
$settings_registry->register(
	'my_setting',
	[
		'api' => [
			'description' => \esc_html__( 'API field description.', 'my-textdomain' ),
			'type' => 'string',
		],
		'args' => [
			'class' => 'impressum_row impressum_my_field',
			'description' => \__( 'Field description.', 'my-textdomain' ),
			'label_for' => 'my_setting',
			'required' => false,
			'setting' => 'impressum_imprint_options',
		],
		'callback' => 'text',
		'option' => 'impressum_imprint_options',
		'page' => 'impressum_imprint',
		'section' => 'impressum_section_imprint',
		'title' => \__( 'Field Title', 'my-textdomain' ),
	]
);
```

The array key `option` is now mandatory if you don’t want to use the setting as imprint setting.

You can then access it via `epiphyt\Impressum\settings\Registry::get_setting()`. For example:

```php
$settings_registry = \epiphyt\Impressum\get_container()->get( 'settings-registry' );
$my_setting = $settings_registry->get_setting( 'my_setting' );
```

## Privacy setting label <Badge type="tip" text="Only in Impressum Plus" />

Before, the array key `description` has been used within the setting’s `args` to display them as label for a field in the privacy settings. This has been updated to actually use the `label` key, leaving the `description` key free to be used as actual field description.

## Block editor data `impressum_fields`

The object with the fields data for the imprint block has been renamed from `impressum_fields` to `impressumImprintBlock`. The key `no_output` of a single field within `impressumImprintBlock.values` has been renamed to `hide_output`.
