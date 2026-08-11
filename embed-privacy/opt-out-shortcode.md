# Opt-out shortcode

Visitors can allow an embed provider permanently by ticking “Always display content from …” in an overlay. Their choice is stored in the `embed-privacy` cookie for one year, and from then on that provider’s embeds load directly on every page without asking again.

The shortcode `[embed_privacy_opt_out]` gives them a way back: it renders a list of checkboxes, one per embed provider, that they can untick to withdraw their consent. The recommended place for it is your privacy policy.

```
[embed_privacy_opt_out]
```

::: tip
With the default attributes, the list only contains the providers the visitor has already opted in to – and the whole block is removed from the page if there are none. On a fresh visit it will therefore look like nothing was output at all. Use `show_all="1"` if you want the list to be visible at all times.
:::

The shortcode has the following attributes:

* `headline`
* `headline_level`
* `show_all`
* `subline`

## headline

The text of the heading above the list. Default: “Embed providers”.

```
[embed_privacy_opt_out headline="My custom headline"]
```

The heading also labels the list of providers for assistive technology, so it should describe what the list is about.

## headline_level <Badge type="info" text="Since 1.13.1" />

The heading level of the headline, from `1` to `6`. Default: `3`. Values outside that range are clamped to the nearest valid level.

```
[embed_privacy_opt_out headline_level="2"]
```

Use this to fit the block into the heading structure of the page it is placed on. If your privacy policy uses `<h2>` for its sections, a `<h3>` (the default) is right when the shortcode sits inside such a section, while `headline_level="2"` is right when it forms a section of its own.

## show_all

Whether to list all known embed providers instead of only the ones the visitor has opted in to. Default: `0`.

```
[embed_privacy_opt_out show_all="1"]
```

With `show_all="1"`, every provider is listed and the ones the visitor has enabled are shown as checked. This lets visitors opt **in** to a provider up front, without having to encounter one of its embeds first.

## subline

An explanatory paragraph below the heading. Default: “Enable or disable embed providers globally. By enabling a provider, its embedded content will be displayed directly on every page without asking you anymore.”

```
[embed_privacy_opt_out subline="My custom subline"]
```

## Combining attributes

All attributes can be combined:

```
[embed_privacy_opt_out headline="My custom headline" headline_level="2" subline="My custom subline" show_all="1"]
```

## Customizing the output

The heading and the subline can also be changed programmatically through the filters [`embed_privacy_opt_out_headline`](/embed-privacy/developer/filters#embed-privacy-opt-out-headline) and [`embed_privacy_opt_out_subline`](/embed-privacy/developer/filters#embed-privacy-opt-out-subline).
