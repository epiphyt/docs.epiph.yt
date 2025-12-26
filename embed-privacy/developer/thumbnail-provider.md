# Thumbnail provider

Embed Privacy implemented an easy usable method to create custom thumbnail providers starting with version 1.9.0. To implement a custom thumbnail provider, extend the abstract class `epiphyt\Embed_Privacy\thumbnail\provider\Thumbnail_Provider` and implement the interface `epiphyt\Embed_Privacy\thumbnail\provider\Thumbnail_Provider_Interface`. (See also the [blog post about Embed Privacy’s thumbnail generation](https://epiph.yt/en/blog/2024/updates-to-embed-privacys-thumbnail-generation/) for more information regarding the abstract class and interface.)

In it, you just need to define how to get the thumbnail and the associated embed ID. You can find [a basic implementation for Vimeo](https://github.com/epiphyt/embed-privacy/blob/v1.9.0/inc/thumbnail/provider/class-vimeo.php) on GitHub.

Then, use the filter [`embed_privacy_thumbnail_providers`](/embed-privacy/developer/filters#embed_privacy_thumbnail_providers) to register your custom thumbnail provider.
