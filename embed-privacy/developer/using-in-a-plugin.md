# Using Embed Privacy in a plugin

If you want to use Embed Privacy in a plugin for your custom code, the best way is to use the method `epiphyt\Embed_Privacy\data\Replacer::replace_embeds()` directly.

You can pass the content to search for replacements and as a result, you will get the content with all embeds replaced.

If you need more control over the replacement, e.g. the used embed provider, you can use the filter [`embed_privacy_overlay_provider`](/embed-privacy/developer/filters#embed_privacy_overlay_provider) to filter the actual provider for this content.

## Alternate method

If an embedded content must be replaced, the following method also works:

```php
\add_filter( 'embed_privacy_has_embed', '__return_true' );
\epiphyt\Embed_Privacy\Embed_Privacy::get_instance()->frontend->print_assets();
echo \epiphyt\Embed_Privacy\embed\Template::get( $provider, $embed ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
```

Here, `$provider` is an instance of a `epiphyt\Embed_Privacy\embed\Provider` object and `$embed` is the actual content to block.
