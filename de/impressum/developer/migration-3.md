# Migration zu Version 3.0.0

Impressum 3.0.0 und damit auch Impressum Plus 3.0.0 beinhalten eine umfassende Überarbeitung und die Entfernung aller zuvor als veraltet markierten Funktionen. Zudem verwendenden bestimmte Teile nun Dependency Injection für Abhängigkeiten innerhalb dieser Klassen. Daher handelt es sich bei dieser Version um ein Major-Release mit kompatibilitätsbrechenden Änderungen.

Wenn du die Plugins lediglich in ihrer Standardkonfiguration verwendest, ohne sie per Code zu erweitern, oder nur Hooks und Filter verwendest, die zuvor nicht als veraltet markiert wurden, kannst du die Plugins ohne Weiteres weiterverwenden und musst nichts ändern.

Im Folgenden findest du Informationen zu den Änderungen in Impressum 3.0.0 und Impressum Plus 3.0.0. Ich kann jedoch nicht garantieren, dass diese Liste der Änderungen vollständig ist.

## Systemanforderungen

Die Systemanforderungen wurden aktualisiert von vorher PHP 5.6 und WordPress 5.0 zu PHP 8.1 bzw. WordPress 6.8.

## Gelöschter Code

Die Klasse `epiphyt\Impressum\Impressum` wurde durch `epiphyt\Impressum\Plugin` ersetzt.

## Dependency Injection Container (DIC)

Für Impressum 3.0.0 kannst du einen Dependency Injection Container verwenden, um die Instanzen einiger Klassen zu verwenden. Aktuell unterstützt (das kann sich mit der Zeit noch ändern):

* `admin`
* `block-registry`
* `frontend`
* `helper`
* `plugin`
* `settings-data`
* `settings-registry`

Du kannst darauf folgendermaßen zugreifen:

```php
$plugin = \epiphyt\Impressum\get_container()->get( 'plugin' );
```

Wenn ein Dienst nicht gefunden wird, gibt der Container ein `WP_Error`-Objekt zurück.

## Plugin-Initialisierung

Die Plugins initialisieren sich nun erst innerhalb des Hooks `plugins_loaded`, wobei Impressum Plus zusätzlich eine individuelle Priorität von `15` dafür besitzt.

## Strikte Typisierung

Ab sofort verwendet jeder neue Code strikte Typisierung via `strict_types = 1`. Für Impressum Plus wurde zudem bereits die gesamte bestehende Codebases entsprechend angepasst. Das heißt, dass du sicherstellen solltest, dass übergebene Daten an Impressum und Impressum Plus dem erwarteten Typen entsprechen.

## Einstellungen

Alle verfügbaren Einstellungen werden nun sauber über eine „Settings Registry“ registriert. Das heißt ebenfalls, dass individuelle Einstellungen registriert werden müssen, da sie andernfalls nicht gespeichert werden.

Jede Einstellung ist nun eine `\epiphyt\Impressum\settings\Setting` und hat somit einen standardisierten Weg zur Ausgabe ihrer Daten und Informationen.

Um deine Einstellung zu registrierte, kannst du dasselbe Array-Design verwenden wie bevor (sofern du bereits ein ähnliches zu Impressum und Impressum Plus verwendet hast). Du kannst es dann an `epiphyt\Impressum\settings\Registry::register()` oder `epiphyt\Impressum\settings\Registry::register_multiple()` übergeben. Beispiel:

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

Der Array-Schlüssel `option` ist nun erforderlich, wenn du möchtest, dass die Einstellung nicht als Impressums-Einstellung verwendet wird.

Du kannst sie dann via `epiphyt\Impressum\settings\Registry::get_setting()` abrufen. Beispiel:

```php
$settings_registry = \epiphyt\Impressum\get_container()->get( 'settings-registry' );
$my_setting = $settings_registry->get_setting( 'my_setting' );
```

## Label der Datenschutz-Einstellung <Badge type="tip" text="Only in Impressum Plus" />

Zuvor wurde der Array-Schlüssel `description` innerhalb der `args` der Einstellung verwendet, um es als Label für ein Feld in den Datenschutz-Einstellungen anzuzeigen. Das wurde aktualisiert, um dafür den Schlüssel `label` zu verwenden, sodass der Schlüssel `description` nun frei ist, um ihn für die tatsächliche Beschreibung des Felds zu verwenden.

## Block-Editor-Daten `impressum_fields`

Das Objekt mit den Felddaten für den Impressum-Block wurde von `impressum_fields` zu `impressumImprintBlock` umbenannt. Der Schlüssel `no_output` eines einzelnen Feldes innerhalb von `impressumImprintBlock.values` wurde zu `hide_output` umbenannt.
