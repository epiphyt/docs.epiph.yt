# Migration zu Version 2.0.0

Mit Impressum Plus 2.0.0 hat sich die grundlegende Struktur des Plugins stark verändert, um noch robuster zu sein, aber auch die Erweiterbarkeit für zukünftige Versionen zu vereinfachen.

So viel sei aber direkt gesagt: Wenn du das Plugin bisher nur im Standardumfang eingesetzt oder nur vorhandene Filter/Hooks verwendet hast, musst du nichts weiter tun. Das Plugin funktioniert dann weiterhin so reibungslos wie bisher auch.

Nachfolgend werden Änderungen beschrieben, die man beachten muss, wenn man Impressum Plus anderweitig erweitert hat.

## Klassen- und Namespace-Änderungen

In einigen Fällen haben sich Klassen und Namensräume (Namespaces) geändert:

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

Neue APIs können das `IApi_Interface` verwenden, um so schnell und einfach ihren eigenen API-Endpunkt zu Impressum Plus hinzuzufügen.

### Erweiterung und Subklassen

Mit Ausnahme der Klasse `Epiphyt_License` gibt es keine Erweiterung (`extends`) mehr zwischen einzelnen Klassen. So muss beispielsweise immer die Helper-Klasse instanziiert werden, wenn sie benötigt wird (siehe [Klassen instanziieren](#klassen-instanziieren)).

Die beiden Klassen `Impressum` und `Privacy` beinhalten jeweils auch ihre Subklassen `Admin` und `Frontend` als aufrufbare Klassenvariable (beispielsweise per `Impressum::get_instance()->admin` oder `Impressum::get_instance()->frontend`).

### Methoden

Wichtige Methoden, deren Aufruf sich geändert hat (kein Anspruch auf Vollzähligkeit):

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

Alle Präfixe von `impressum_` wurden bei Methoden-Namen entfernt.

## Klassen instanziieren

(Fast) Alle Klassen können nun über ihre jeweilige statische Methode `get_instance()` instanziiert werden. Ausnahmen davon sind Klassen, die die Klasse `Api` erweitern.

### Beispiel

```php
$impressum = epiphyt\Impressum\Impressum::get_instance();
```
