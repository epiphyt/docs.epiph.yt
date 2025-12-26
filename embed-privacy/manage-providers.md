# Manage embed providers

Embed Privacy already supports a wide range of embed providers out of the box. If you need more, you can also add more by yourself. You can manage them in **Settings > Embed Privacy > Manage embeds**. Each provider has the following fields:

* Title
* Description
* Privacy policy URL
* Background image
* Content name
* Regex pattern
* Post thumbnail

## Title

The title of the embed provider, which is used within the overlay.

## Description

A description that is displayed within the overlay.

## Privacy policy URL

A URL to the privacy policy of the embed provider, which is usually required in order to be able to check as user whether you want to load the embed or not.

## Background image

A custom background image for the overlay.

## Content name

The content name is the single name for an embed of this provider. E.g. for YouTube it’s “video”, while for Meetup it’s “event”. This will be used in the overlay as part of the direct link to the content. If empty, “content” is used as default.

## Regex pattern

A regular expression matching the content the provider should block. If you want to match a provider from `sub.example.com` in an iframe, you can use this pattern:

```regexp
/<iframe src="(.*)sub\.example\.com([^"]*)"><\/iframe>/
```

If your regular expression does not contain any `<` or `>`, it will be automatically extended with a list of surrounding elements. So given your regular expression is just `/sub\.example\.com/`, the final regular expression is:

```regexp
/<(blockquote|div|embed|iframe|object)([^"]*)"([^<]*)sub\.example\.com([^"]*)"([^>]*)(>(.*)<\/(blockquote|div|embed|iframe|object))?>/
```

The list of elements added can be filtered with the filter [`embed_privacy_replacer_matcher_elements`](/embed-privacy/developer/filters#embed-privacy-replacer-matcher-elements).

The beginning end ending `/` in the regex pattern are optional and automatically added in the code if not available.

## Post thumbnail

The post thumbnail will be used as logo. The best results can be achieved with an image height of 96 pixels.
