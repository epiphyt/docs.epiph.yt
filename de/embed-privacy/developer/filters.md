# Filter

## `embed_privacy_integrations` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_integrations` können die verfügbaren Integrationen geändert werden, bevor sie initialisiert werden.

Parameter:  
array $integrations Liste der Integrationen

Erwartet ein Array.

## `embed_privacy_content` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `embed_privacy_content` kann der Inhalt des Embed-Overlays geändert werden.

Veraltet seit 1.10.0, verwende stattdessen [`embed_privacy_template_content`](#embed_privacy_template_content).

Parameter:  
string $content Der Inhalt  
string $embed\_provider Der Embed-Anbieter dieses Embeds

Erwartet eine Zeichenfolge.

## `embed_privacy_overlay_footer`

Durch den Filter `embed_privacy_overlay_footer` kann der Footer des Embed-Overlay-Containers geändert werden.

Parameter:  
string $footer\_content Der Footer-Inhalt

Erwartet eine Zeichenfolge.

## `embed_privacy_markup` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `embed_privacy_markup` kann der gesamte Embed-Overlay-Container geändert werden.

Veraltet seit 1.10.0, verwende stattdessen [embed\_privacy\_template\_markup](#embed_privacy_template_markup).

Parameter:  
string $markup Das Markup  
string $embed\_provider Der Embed-Anbieter dieses Embeds

Erwartet eine Zeichenfolge.

## `embed_privacy_has_embed` <Badge type="info" text="Seit 1.3.0" />

Durch den Filter `embed_privacy_has_embed` kann der Rückgabewert von `Embed_Privacy::has_embed()` überschrieben werden.

Parameter:  
null $has\_embed Der Standardwert

Erwartet etwas anderes als `null`.

## `embed_privacy_provider_list` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_provider_list` kann die Liste an Anbietern eines spezifischen Typs überschrieben werden.

Parameters:  
array $provider\_list Aktuelle Anbieterliste  
string $identifier Aktueller Typ  
array $global\_list Liste aller Anbieter aller Typen

Erwartet ein Array.

## `embed_privacy_provider_name` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_provider_name` kann der Name des Embed-Anbieters überschrieben werden.

Parameters:  
string $name Name des Embed-Anbieters  
string $provider Embed-Anbieter

Erwartet eine Zeichenfolge.

## `embed_privacy_overlay_provider` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_overlay_provider` kann der aktuelle Embed-Anbieter überschrieben werden.

Parameters:  
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider Aktueller Anbieter  
string $content Inhalt, in dem der aktuelle Anbieter erkannt wurde  
string $url URL des eingebetteten Inhalts

Erwartet ein Objekt vom Typ `\epiphyt\Embed_Privacy\embed\Provider`.

## `embed_privacy_print_assets` <Badge type="info" text="Seit 1.10.0" />

Die Action `embed_privacy_print_assets` feuert, nachdem die Assets ausgegeben wurden.

## `embed_privacy_register_assets` <Badge type="info" text="Seit 1.10.0" />

Die Action `embed_privacy_register_assets` feuert, nachdem die Assets registriert wurden.

Parameter:  
bool $is\_debug Ob der Debug-Modus aktiv ist  
string $suffix Ein Dateinamen-Suffix

## `embed_privacy_assets_$embed_provider_lowercase` <Badge type="info" text="Seit 1.4.5" />

Durch den Filter `` `embed_privacy_assets_$embed_provider_lowercase` `` können zusätzliche Assets ausgegeben werden, die benötigt werden, damit das Embed funktioniert.

Jedes Asset muss aus einem Array bestehen, das mindestens den `type`\-Parameter enthält, der entweder auf `script` für ein Script-Element oder `inline` für ein Inline-Skript gesetzt wird.

Wenn der `type` auf `script` gesetzt ist, die Parameter `handle` und `src` sind erforderlich, welche identisch aufgebaut sind wie dieselben Parameter in `wp_enqueue_script`. Zusätzlich kann ein Parameter `version` hinzugefügt werden.

Wenn der `type` auf `inline` gesetzt ist, die Parameter `data` und `object_name` sind erforderlich, welche identisch aufgebaut sind wie dieselben Parameter in `` `wp_add_inline_script` ``.

Parameter:  
array $assets Liste der Embed-Assets  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet ein Array mit Arrays.

## `embed_privacy_overlay_args` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `embed_privacy_overlay_args` können die Argumente vor dem Erstellen eines Overlays geändert werden.

Veraltet seit 1.10.0, verwende stattdessen [embed\_privacy\_template\_attributes](#embed_privacy_template_attributes).

Parameter:  
array $args Template-Argumente  
string $embed\_provider Der Embed-Anbieter  
string $embed\_provider\_lowercase Der Embed-Anbieter ohne Leerzeichen und in Kleinbuchstaben  
string $output Die Ausgabe vor der Ersetzung

Erwartet ein Array.

## `embed_privacy_overlay_replaced_content` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_overlay_replaced_content` kann der ersetzte Inhalt geändert werden.

Parameter:  
string $content Ersetzter Inhalt

Erwartet eine Zeichenfolge.

## `embed_privacy_overlay_character_replacements` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_overlay_character_replacements` können spezielle zu ersetzende Zeichen für `DOMDocument` geändert werden.

Parameter:  
array $replacements Aktuelle Ersetzungen

Erwartet ein assoziatives Array.

## `embed_privacy_template_attributes` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_template_attributes` können die Attribute für das Embed-Template geändert werden.

Parameter:  
array $attributes Template-Attribute  
string $provider Der Embed-Anbieter  
string $output Die Ausgabe vor der Ersetzung

Erwartet ein Array.

## `embed_privacy_before_template_output` <Badge type="info" text="Seit 1.10.0" />

Die Action `embed_privacy_before_template_output` feuert, bevor das Template ausgegeben wird.

Parameter:  
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider Der Embed-Anbieter  
\\epiphyt\\Embed\_Privacy\\embed\\Style $style Das Overlay-Style-Objekt  
array $attributes Zusätzliche Attribute

## `embed_privacy_template_content` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_template_content` kann der Inhalt eines Overlay-Templates geändert werden.

Parameter:  
string $content Der Inhalt  
string $provider Der Embed-Anbieter dieses Embeds

Erwartet eine Zeichenfolge.

## `embed_privacy_template_markup` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_template_content` kann das Markup eines Overlay-Templates geändert werden.

Parameter:  
string $markup Das Markup  
\\epiphyt\\Embed\_Privacy\\embed\\Provider $provider Der Embed-Anbieter dieses Embeds

Erwartet eine Zeichenfolge.

## `embed_privacy_theme_content_width` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_theme_content_width` kann die Inhaltsbereite des Themes, die für die Berechnung des korrekten Seitenverhältnisses verwendet wird, geändert werden.

Parameter:  
int $content\_width Aktuelle Inhaltsbreite

Erwartet eine ganze Zahl.

## `embed_privacy_background_path_$embed_provider_lowercase` <Badge type="info" text="Seit 1.1.0" />

Durch den Filter `embed_privacy_background_path_$embed_provider_lowercase` kann der Pfad des Hintergrundbilds des Overlays geändert werden.

Parameter:  
string $background\_path Der Standard-Pfad des Hintergrundbilds  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einem gültigen Pfad eines Hintergrundbilds.

## `embed_privacy_background_url_$embed_provider_lowercase` <Badge type="info" text="Seit 1.1.0" />

Durch den Filter `embed_privacy_background_url_$embed_provider_lowercase` kann die URL des Hintergrundbilds des Overlays geändert werden.

Parameter:  
string $background\_url Die Standard-URL des Hintergrundbilds  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einer gültigen URL eines Hintergrundbilds.

## `embed_privacy_logo_path_$embed_provider_lowercase`

Durch den Filter `embed_privacy_logo_path_$embed_provider_lowercase` kann der Pfad des Logos des Overlays geändert werden.

Parameter:  
string $`logo`\_path Der Standard-Pfad des Logos  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einem gültigen Pfad eines Logos.

## ``embed_privacy_`logo`_url_$embed_provider_lowercase``

Durch den Filter ``embed_privacy_`logo`_url_$embed_provider_lowercase`` kann die URL des Logos des Overlays geändert werden.

Parameter:  
string $`logo`\_url Die Standard-URL des Logos  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einer gültigen URL eines Logos.

## `embed_privacy_thumbnail_checked_orphaned` <Badge type="info" text="Seit 1.7.0" />

Die Action `embed_privacy_thumbnail_checked_orphaned` feuert, nachdem verweiste Daten für einen Anbieter überprüft und gegebenenfalls gelöscht wurden.

Parameter:  
string $provider Anbietername  
string $id Die ID des eingebetteten Inhalts  
string $url Die Embed-URL  
bool $missin\_id Ob die ID fehlt  
bool $missing\_url Ob die URL fehlt  
string $meta\_value Der Vorschaubild-Dateiname  
string $meta\_key Der Vorschaubild-Metadatenschlüssel  
WP\_Post $post Das Beitragsobjekt  
int $post\_id Die Beitrags-ID

## `embed_privacy_thumbnail_data_filename` <Badge type="info" text="Seit 1.7.0" />

Durch den Filter `embed_privacy_thumbnail_data_filename` kann der Vorschaubild-Dateiname geändert werden.

Parameter:  
string $thumbnail Der Vorschaubild-Dateiname  
WP\_Post $post Das Beitragsobjekt  
string $url Die Embed-URL

Erwartet eine Zeichenfolge mit einem Vorschaubild-Dateinamen.

## `embed_privacy_thumbnail_data_id` <Badge type="info" text="Seit 1.7.0" />

Durch den Filter `embed_privacy_thumbnail_data_id` kann die Vorschaubild-ID geändert werden.

Parameter:  
string $id Die Vorschaubild-ID  
WP\_Post $post Das Beitragsobjekt  
string $url Die Embed-URL

Erwartet eine Zeichenfolge mit einer Vorschaubild-ID.

## `embed_privacy_thumbnail_data_path` <Badge type="info" text="Seit 1.7.0" />

Durch den Filter `embed_privacy_thumbnail_data_path` kann der Vorschaubild-Pfad geändert werden.

Parameter:  
string $thumbnail Der Vorschaubild-Pfad  
WP\_Post $post Das Beitragsobjekt  
string $url Die Embed-URL

Erwartet eine Zeichenfolge mit einem Vorschaubild-Pfad.

## `embed_privacy_thumbnail_data_url` <Badge type="info" text="Seit 1.7.0" />

Durch den Filter `embed_privacy_thumbnail_data_url` kann die Vorschaubild-URL geändert werden.

Parameter:  
string $url Die Vorschaubild-URL  
WP\_Post $post Das Beitragsobjekt  
string $url Die Embed-URL

Erwartet eine Zeichenfolge mit einer Vorschaubild-URL.

## `embed_privacy_thumbnail_get_from_provider` <Badge type="info" text="Seit 1.7.0" />

Die Action `embed_privacy_thumbnail_get_from_provider` feuert, nachdem Vorschaubild-Daten verarbeitet wurden.

Parameter:  
string $return Das zurückgegebene oEmbed-HTML  
object $data Ein Datenobjektergebnis von einem oEmbed-Anbieter  
string $url Die URL des eingebetteten Inhalts

## `embed_privacy_thumbnail_path_$embed_provider_lowercase` <Badge type="info" text="Seit 1.1.0" />

Durch den Filter `embed_privacy_thumbnail_path_$embed_provider_lowercase` kann der Pfad des Vorschaubilds des Overlays geändert werden.

Parameter:  
string $thumbnail\_path Der Standard-Pfad des Vorschaubilds  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einem gültigen Pfad eines Vorschaubild.

## `embed_privacy_thumbnail_supported_provider_names` <Badge type="info" text="Seit 1.7.0" />

Durch den Filter `embed_privacy_thumbnail_supported_provider_names` kann der interne Name unterstützter Vorschaubild-Embed-Anbieter geändert werden.

Parameter:  
array $supported\_providers Aktuell unterstützte Anbieternamen

Erwartet ein Array mit Vorschaubild-Anbieternamen.

## `embed_privacy_thumbnail_providers` <Badge type="info" text="Seit 1.9.0" />

Durch den Filter `embed_privacy_thumbnail_providers` können die registrierten Vorschaubild-Anbieter geändert werden.

Parameter:  
Thumbnail\_Provider\[\] $supported\_providers Aktuell unterstützte Anbieter

Erwartet ein Array mit Vorschaubild-Anbieterklassen.

## `embed_privacy_pre_thumbnail_delete_orphaned_delete` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch die Action `embed_privacy_pre_thumbnail_check_orphaned_delete` kann die Entfernung verwaister Vorschaubilder deaktiviert werden.

Veraltet seit 1.10.0, verwende stattdessen [embed\_privacy\_thumbnail\_delete\_orphaned](#embed_privacy_thumbnail_delete_orphaned).

Parameter:  
string $id Die Vorschaubild-ID  
string $url Die Vorschaubild-URL  
int $post\_id Die Beitrags-ID  
string $provider Der Embed-Anbieter-Name

## `embed_privacy_thumbnail_delete_orphaned` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_thumbnail_delete_orphaned` geändert werden, ob ein Vorschaubild entfernt werden soll.

Parameter:  
bool $should\_delete Ob das Vorschaubild entfernt werden soll  
string $id Die Vorschaubild-ID  
string $url Die Vorschaubild-URL  
int $post\_id Die Beitrags-ID  
string $provider Der Embed-Anbieter

Erwartet einen booleschen Wert.

## `embed_privacy_thumbnail_url_$embed_provider_lowercase` <Badge type="info" text="Seit 1.1.0" />

Durch den Filter `embed_privacy_thumbnail_url_$embed_provider_lowercase` kann die URL des Vorschaubilds des Overlays geändert werden.

Parameter:  
string $thumbnail\_url Die Standard-URL des Vorschaubilds  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet eine Zeichenfolge zu einer gültigen URL eines Thumbnails.

## `embed_privacy_ignore_embed` <Badge type="info" text="Seit 1.9.0" />

Durch den Filter `embed_privacy_ignore_embed` kann die Verarbeitung einzelner Embeds deaktiviert werden.

Parameter:  
bool $ignore\_embed Ob dieser Embed ignoriert werden soll  
string $content Der originale Inhalt  
string $embed\_provider Der Embed-Anbieter  
string $embed\_provider\_lowercase Der Embed-Anbieter ohne Leerzeichen und in Kleinbuchstaben  
array $args Zusätzliche Argumente

Erwartet einen booleschen Wert.

## `embed_privacy_is_ignored_request` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_is_ignored_request` eine komplette Anfrage ignoriert werden.

Parameter:  
bool $is\_ignored\_request Ob die Anfrage aktuell ignoriert wird

Erwartet einen booleschen Wert.

## `embed_privacy_ignore_unknown_providers` <Badge type="info" text="Seit 1.5.0" />

Durch den Filter `embed_privacy_ignore_unknown_providers` kann die Verarbeitung von Embeds unbekannter Anbieter deaktiviert werden.

Parameter:  
bool $ignore\_unknown Ob unbekannte Anbieter ignoriert werden sollen  
string $content Der Original-Inhalt

Erwartet einen booleschen Wert.

## `embed_privacy_ignored_shortcodes` <Badge type="info" text="Seit 1.6.0" />

Durch den Filter `embed_privacy_ignored_shortcodes` können Shortcodes von der Ersetzung ausgenommen werden.

Parameter:  
string\[\] $ignored\_shortcodes Aktuelle Liste ignorierter Shortcodes

Erwartet ein Array.

## `embed_privacy_should_replace_match` <Badge type="info" text="Seit 1.10.9" />

Durch den Filter `embed_privacy_should_replace_match` kann gesteuert werden, ob die aktuelle Übereinstimmung tatsächlich ersetzt werden soll.

Parameter:  
string $matched\_content Übereinstimmender Inhalt  
\\epiphyt\\Embed\_privacy\\embed\\Provider $provider Anbieter-Objekt  
string $content Aktueller Inhalt  
mixed\[\] $attributes Embed-Attribute

Erwartet einen booleschen Wert.

## `embed_privacy_dynamic_style_properties` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `` `embed_privacy_dynamic_style_properties` `` können die Eigenschaften des dynamischen Embed-Stils einer Seite geändert werden.

Parameters:  
array $style\_properties Stileigenschaften-Array

Erwartet ein Array.

## `embed_privacy_dynamic_style` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `embed_privacy_dynamic_style` kann der dynamische Embed-Stil einer Seite geändert werden.

Parameter:  
string $style Generierter Stil  
array $style\_properties Stil-Eigenschaften-Array

Erwartet eine Zeichenfolge.

## `embed_privacy_matcher_elements` <Badge type="warning" text="Veraltet seit 1.10.0" />

Durch den Filter `embed_privacy_matcher_elements` können die HTML-Elemente, die den regulären Ausdruck für individuelle Embed-Anbieter erweitern, geändert werden.

Veraltet seit 1.10.0, verwende stattdessen `[embed_privacy_replacer_matcher_elements](#embed_privacy_replacer_matcher_elements)`.

Parameter:  
array $allowed\_tags Die erlaubten Tags  
string $embed\_provider\_lowercase Der aktuelle Embed-Anbieter in Kleinbuchstaben

Erwartet ein Array.

## `embed_privacy_replacer_matcher_elements` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_replacer_matcher_elements` können die HTML-Elemente, die den regulären Ausdruck für individuelle Embed-Anbieter erweitern, geändert werden.

Parameters:  
string\[\] $allowed\_tags Die erlaubten Tags  
\\epiphyt\\Embed\_privacy\\embed\\Provider|null $provider Der aktuelle Embed-Anbieter

Erwartet ein Array.

## `embed_privacy_replacer_matcher_elements` <Badge type="info" text="Seit 1.10.0" />

Durch den Filter `embed_privacy_replacer_matcher_elements` können die HTML-Elemente, die den regulären Ausdruck für individuelle Embed-Anbieter erweitern, geändert werden.

Parameters:  
string\[\] $allowed\_tags Die erlaubten Tags  
\\epiphyt\\Embed\_privacy\\embed\\Provider|null $provider Der aktuelle Embed-Anbieter

Erwartet ein Array.

## `embed_privacy_custom_embed_replacement` <Badge type="info" text="Seit 1.11.0" />

Durch den Filter `embed_privacy_custom_embed_replacement` kann eine individuelle Ersetzung für Embeds zurückgegeben werden, bevor die Ersetzung durch Embed Privacy stattfindet.

Parameter:  
string $custom\_replacement Aktuelle individuelle Ersetzung  
string $content Der originale Inhalt  
string $tag Der Shortcode-Tag, wenn über do\_shortcode aufgerufen

Erwartet eine Zeichenfolge.

## `embed_privacy_custom_oembed_replacement` <Badge type="info" text="Seit 1.11.0" />

Durch den Filter `embed_privacy_custom_oembed_replacement` kann eine individuelle Ersetzung für oEmbeds zurückgegeben werden, bevor die Ersetzung durch Embed Privacy stattfindet.

Parameter:  
string $custom\_replacement Aktuelle individuelle Ersetzung  
string $output Die originale Ausgabe  
\\epiphyt\\Embed\_privacy\\embed\\Provider $provider Aktueller Embed-Anbieter  
string $url Die URL zum Embed  
array $attributes Zusätzliche Attribute des Embeds

Erwartet eine Zeichenfolge.

## `embed_privacy_widget_output` <Badge type="info" text="Seit 1.1.0" />

Durch den Filter `embed_privacy_widget_output` kann die Ausgabe eines Widgets geändert werden.

Parameter:  
string $widget\_output Die Ausgabe des Widgets  
string $widget\_id Die ID des Widgets  
string $sidebar\_id Die aktuelle Seitenleisten-ID

Erwartet eine Zeichenfolge.

## `embed_privacy_opt_out_headline` <Badge type="info" text="Seit 1.2.0" />

Durch den Filter `embed_privacy_opt_out_headline` kann die Überschrift des Opt-out-Shortcodes geändert werden.

Parameter:  
string $headline Aktuelles Überschriften-HTML  
array $attributes Shortcode-Attribute

Erwartet eine Zeichenfolge.

## `embed_privacy_opt_out_subline` <Badge type="info" text="Seit 1.2.0" />

Durch den Filter `embed_privacy_opt_out_subline` kann die Unterüberschrift des Opt-out-Shortcodes geändert werden.

Parameter:  
string $headline Aktuelles Unterüberschriften-HTML  
array $attributes Shortcode-Attribute

Erwartet eine Zeichenfolge.

## `embed_privacy_editor_fields`

Durch den Filter `embed_privacy_editor_fields` können zusätzliche Felder beim Bearbeiten eines Embed-Anbieters gerendert werden.

Parameter:  
int $post\_id Die aktuelle Beitrags-ID

Erwartet eine Zeichenfolge.

## `embed_privacy_register_fields` <Badge type="info" text="Seit 1.2.0" />

Durch den Filter `embed_privacy_register_fields` können zusätzliche Felder registriert werden.

Parameter:  
int $post\_id Die aktuelle Beitrags-ID

Erwartet ein Array.

## `embed_privacy_fields`

Durch den Filter `embed_privacy_fields` können alle registrierten Felder geändert werden.

Parameter:  
array $fields Die registrierten Felder

Erwartet ein Array.

## `embed_privacy_valid_files`

Durch den Filter `embed_privacy_valid_files` können die Namen gültiger Dateien in POST-Anfragen beim Editor geändert werden.

Parameter:  
array Die Standard-Namenliste

Erwartet ein Array.

## `jetpack_sharing_facebook_app_id` <Badge type="info" text="Seit 1.4.5" />

Durch den Filter `jetpack_sharing_facebook_app_id` kann die Facebook-App-ID des Jetpack-Teilens geändert werden.

Parameter:  
string $app\_id Die aktuelle App-ID

Erwartet eine Zeichenfolge.
