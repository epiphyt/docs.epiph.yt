# Migration to version 1.11.0

Version 1.11.0 of Embed Privacy comes with two similar deprecations, which have been created at the beginning of the release cycle of version 1.10.0 and never got updated. This is now done in this release.

Starting with this version, using just the provider name in both `epiphyt\Embed_Privacy\embed\Assets` as well as `epiphyt\Embed_Privacy\embed\Style` is deprecated. You should always use a proper `epiphyt\Embed_Privacy\embed\Provider` object from now on. To allow an easy migration, the current version still allows using a string as parameter for the class constructor of these two classes, but adds a deprecation notice about that.

Additionally, since the `epiphyt\Embed_Privacy\embed\Provider` object already contains the post object of the embed provider, you should no more pass this post object to these two class constructors. This second parameter is considered deprecated as well.
