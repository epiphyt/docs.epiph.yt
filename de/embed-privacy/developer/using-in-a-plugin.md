# Embed Privacy in einem Plugin verwenden

Wenn du Embed Privacy für deinen individuellen Code in einem Plugin verwenden möchtest, ist der beste weg, die Methode `epiphyt\Embed_Privacy\data\Replacer::replace_embeds()` zu verwenden.

Du kannst den Inhalt, der nach Ersetzungen durchsucht werden soll, übergeben, und erhältst den Inhalt mit allen ersetzten Einbettungen zurück.

Wenn du mehr Kontrolle über die Ersetzung benötigst, beispielsweise für den verwendeten Embed-Anbieter, kannst du den Filter [`embed_privacy_overlay_provider`](/de/embed-privacy/developer/filters#embed_privacy_overlay_provider) verwenden.

## Alternative Methode

Wenn ein eingebetteter Inhalt unbedingt ersetzt werden soll, funktioniert auch folgende Methode:

```php
\add_filter( 'embed_privacy_has_embed', '__return_true' );
\epiphyt\Embed_Privacy\Embed_Privacy::get_instance()->frontend->print_assets();
echo \epiphyt\Embed_Privacy\embed\Template::get( $provider, $embed ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
```

Hierbei ist `$provider` eine Instanz eines `epiphyt\Embed_Privacy\embed\Provider`-Objekts und `$embed` der eigentliche Inhalt, der blockiert werden soll.
