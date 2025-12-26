# Migration to version 2.0.0

With Impressum Plus 2.0.0 the complete structure of the plugin changed quite heavily to be more robust but also makes it easier to be extended in the future.

One note though: If you only have used the plugin without any development effort or just used given filters/hooks, you don’t need to do anything. The plugin will further work seamlessly as before.

Following you will find changes if you extended Impressum Plus in other ways, e.g. by calling classes directly.

## Class and Namespace Changes

In some cases, classes and namespaces changed:

```php
epiphyt\Impressum\Impressum_API => epiphyt\Impressum\api\Api
epiphyt\Impressum\privacy\Impressum_Privacy_API => epiphyt\Impressum\api\Privacy_Api
epiphyt\Impressum\Impressum_Backend => epiphyt\Impressum\Admin
epiphyt\Impressum\Impressum_Frontend => epiphyt\Impressum\Frontend
epiphyt\Impressum\Impressum_Helper => epiphyt\Impressum\Helper
epiphyt\Impressum\privacy\Impressum_Privacy => epiphyt\Impressum\privacy\Privacy
epiphyt\Impressum\privacy\Impressum_Privacy_Admin => epiphyt\Impressum\privacy\Admin
epiphyt\Impressum\privacy\Impressum_Privacy_System_Check => epiphyt\Impressum\privacy\System_Check
New: epiphyt\Impressum\api\IApi_Interface
New: epiphyt\Impressum\api\Imprint_Api
New: epiphyt\Impressum\privacy\Admin_Fields
New: epiphyt\Impressum\privacy\Frontend
New: epiphyt\Impressum\Admin_Fields
New: epiphyt\Impressum\Plugin_Information
```

### Interfaces

New APIs can use the `IApi_Interface` to fast and easily add their own custom API endpoint to Impressum Plus.

### Extension and Subclasses

Except the class `Epiphyt_License`, there is no extension via `extends` anymore between classes. So you e.g. need to instantiate the helper class if you use it (see [Instantiate Classes](#instantiate-classes)).

The two classes `Impressum` and `Privacy` contain their sub classes `Admin` and `Frontend` as callable class variables (for instance via `Impressum::get_instance()->admin` or `Impressum::get_instance()->frontend`) respectively.

### Methods

Important methods, whose call changed (no claim to completeness):

```php
Impressum_Backend::api_input_{$field}_callback() => Admin_Fields::{$field}()
Impressum_Frontend::imprint_shortcode() => Frontend::render()
Impressum_Frontend::is_valid() => Admin::is_valid_imprint()
Impressum_Frontend::ajax_notice_handler() => Admin::ajax_notice_handler()
Impressum_Frontend::get_invalid_fields() => Admin::get_invalid_fields()
Impressum_Frontend::reset_invalid_notice() => Admin::reset_invalid_notice()
Impressum_Helper::impressum_get_option() => Helper::get_option()
Impressum_Privacy::has_content() => System_Check::has_content()
Impressum_Privacy_Admin::{$field}_callback() => Admin_Fields::{$field}()
```

All prefixes of `impressum_` in method names have been removed.

## Instantiate Classes

(Nearly) All classes can be instantiated through their static method `get_instance()`. Excluded from this are classes, who extend the class `Api`.

### Example

```php
$impressum = epiphyt\Impressum\Impressum::get_instance();
```
