# Filters

## `block_control_ignored_post_types` <Badge type="info" text="Seit 1.1.0" />

Über den Filter `block_control_ignored_post_types` können die zu ignorierenden Inhaltstypen in der Block-Seitenleiste geändert werden.

Parameter:
string[] $ignored_post_types Liste der ignorierten Inhaltstypen

Erwartet ein Array.

## `block_control_hide_post_object` <Badge type="info" text="Seit 1.6.0" />

Über den Filter `block_control_hide_post_object` kann das Inhaltsobjekt geändert werden, anhand dessen die Sichtbarkeit geprüft wird.

Parameter:
\WP_Post|null $post Inhaltsobjekt  
array $value Der Attribut-Wert  

Erwartet ein `WP_Post`-Objekt.
