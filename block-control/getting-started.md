# Getting started

After installing the plugin you can find the entry Block Control in the plugin overview – in **Plugins** menu entry of the WordPress backend. You can activate the plugin through this entry.

After activating Block Control, you can find a new panel on every block in the block sidebar, called “Visibility”, where you can hide this block under certain conditions. Block Control does not hide blocks via CSS, it disabled the output of the block altogether. That’s why it’s not compatible with caching systems that cannot distinguish between those settings (e.g. different caches for different device types or user roles).

Also, you can find a formatting setting in rich text areas where you can format text to mark the text as “Screen Reader Text”, which hides it visually and only reads it for screen readers.

## Device types

You can hide the block for desktop as well as mobile users, or only for screen readers. The latter does not hide the block visually, but only for assistive technology.

The detection for mobile users takes place solely via the browser’s user agent.

## Login status

You can hide the block for all logged in or logged out users.

## Date

You can hide the block based on dates. If you just define the “hide date”, the block will be starting being hidden from this date on. If you also define the “start date”, the block will not be hidden after this date anymore.

If you only define a “start date”, the block will be hidden until this date.

## User roles

You can hide the block for any user role registered in your WordPress instance. You can also select multiple roles at once.

## Specific page types

You can hide the block for specific page types, which are technically unique in WordPress, such as the blog page, the front page, categories, etc.

As a separate option, you can also hide content within feeds. <Badge type="info" text="Since 1.6.0" />

## Numbered pages

You can hide the block for numbered pages, e.g. certain pages in an archive list. There are some pre-defined values, but you can also specifically define the page numbers on where to hide the block.

## Post type

You can hide the block on certain items of the current post type. If you edit a page, you can define pages here. If you edit a blog post, you can define blog posts here. If you use the visibility settings in the site editor or the widget area, all registered post types will be shown (except for certain system post types, e.g. navigation menu items, block patterns, etc.).
