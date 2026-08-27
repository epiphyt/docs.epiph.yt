# Changelog

## Version 2.0.0 <Badge type="info" text="August 27, 2026" />

* Added: Hide blocks at certain viewports/CSS breakpoints, either by the breakpoints of your theme or by your own media queries
* Added: Blocks with visibility settings are now marked in the document overview and the block itself
* Improved: The visibility panel now explains via tooltip that settings apply to a block
* Improved: Unified the look and feel of the settings
* Updated: PHP requirement changed from minimum version 5.6 to 8.0
* Updated: Library to detect mobile devices

## Version 1.6.1 <Badge type="info" text="August 12, 2026" />

* Improved: Group labels of the visibility controls are now announced by screen readers
* Improved: The hide by date controls now have unique, descriptive labels for screen readers
* Improved: The visibility panel now indicates to screen readers that settings apply to a block
* Improved: Blocks hidden by date are now marked with an outline instead of reduced contrast
* Improved: The option to hide content for screen readers now explains when not to use it
* Improved: The documentation link in the plugin list now announces that it opens in a new tab
* Improved: The page numbers field now explains its format and that only numbers are allowed
* Fixed: The visibility panel no longer closes while changing the hide by date settings
* Fixed: Focus is no longer lost after removing a hide or display date
* Fixed: Screen readers are now informed if no visibility setting applies to a block anymore
* Fixed: Posts without a title now have a readable label in the visibility settings
* Fixed: Hiding a block for screen readers no longer produces invalid HTML in nested blocks
* Fixed: The screen reader text class is now added reliably regardless of quotes and other classes

## Version 1.6.0 <Badge type="info" text="May 24, 2026" />

* Added: Allow hiding content in feeds
* Added: Allow filtering the post object before checking for post type
* Added: Link to documentation in plugin row
* Fixed: Potential wrong return type in `Block_Control::toggle_blocks()`

## Version 1.5.1 <Badge type="info" text="December 14, 2025" />

* Fixed: A block with a start date to hide in the future and with an end date will now correctly be hidden between those two dates

## Version 1.5.0 <Badge type="info" text="May 13, 2025" />

* Added: Option to hide based on a numbered page (e.g. in archives)

## Version 1.4.1 <Badge type="info" text="December 7, 2024" />

* We added an indeterminate visual display of the "All" checkbox, e.g. while selecting posts.
* We fixed displaying post type visibility settings inside the site editor.

## Version 1.4.0 <Badge type="info" text="November 5, 2024" />

* We added the possibility to hide inline text for everyone but screen readers.

## Version 1.3.0 <Badge type="info" text="August 30, 2024" />

* We added the possibility to patterns to hide them by any post type available.
* We extended the list of ignored post types with font families and font faces.

## Version 1.2.0 <Badge type="info" text="August 6, 2024" />

* We added the option to disable blocks for screen readers. That means that the block is still visible, but will be ignored by screen readers entirely.

## Version 1.1.12 <Badge type="info" text="December 11, 2023" />

* We fixed all variants of hide by date setting to be properly checked.

## Version 1.1.11 <Badge type="info" text="November 10, 2023" />

* We fixed the hide by date setting if only one of the dates is used.

## Version 1.1.10 <Badge type="info" text="October 31, 2023" />

* We fixed the hide by date setting if both settings are in the future or both are in the past.
* We improved the settings for hide by date for better accessibility and functionality.

## Version 1.1.9 <Badge type="info" text="August 26, 2023" />

* We fixed a problem with some blocks no more saving the visibility settings.

## Version 1.1.8 <Badge type="info" text="August 8, 2023" />

* We fixed a problem with broken blocks after updating to version 1.1.7. The editor now doesn't contain any classes from Block Control anymore.

## Version 1.1.7 <Badge type="info" text="August 1, 2023" />

* We fixed compatibility with dynamic blocks.

## Version 1.1.6 <Badge type="info" text="June 1, 2023" />

* We improved the ability to use the filter `blockControl.unsupportedBlocks` without needing to load the own JavaScript early.

## Version 1.1.5 <Badge type="info" text="April 25, 2023" />

* We added a filter `blockControl.unsupportedBlocks` to filter the list of unsupported blocks.
* We disabled Block Control for the SimpleTOC block in order to display it properly in the backend.

## Version 1.1.4 <Badge type="info" text="April 5, 2023" />

* We disabled Block Control for the Polylang language switcher in order to display it properly in the backend.

## Version 1.1.3 <Badge type="info" text="November 5, 2022" />

* We added full support for WordPress 6.1 (replaced a deprecated function).

## Version 1.1.2 <Badge type="info" text="October 3, 2022" />

* We fixed a potential error in blocks in the widget area.

## Version 1.1.1 <Badge type="info" text="July 7, 2022" />

* We fixed a dependency problem, which may result in preventing the settings panel to appear.

## Version 1.1.0 <Badge type="info" text="May 28, 2022" />

* Since the originally planned Pro version will never be completed, we decided to merge its code into the free version of Block Control.
* Hide blocks based on roles
* Hide blocks based on dates
* Hide blocks based on page types (`is_home`, `is_page`, etc.)
* Hide blocks based on posts of the current post type (useful especially for reusable blocks)

## Version 1.0.4 <Badge type="info" text="December 14, 2021" />

* We fixed a problem with assets loading in the backend

## Version 1.0.3 <Badge type="info" text="June 15, 2021" />

* We fixed a problem while checking for block attributes

## Version 1.0.2 <Badge type="info" text="December 31, 2020" />

* We fixed a problem that may load multiple editor scripts in the frontend even if they are not needed there
* We fixed a problem where Block Control options won’t be available for certain blocks

## Version 1.0.1 <Badge type="info" text="August 28, 2019" />

* We fixed the internationalization for all strings

## Version 1.0.0 <Badge type="info" text="August 27, 2019" />

* Initial release
