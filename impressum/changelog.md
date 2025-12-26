# Changelog

## Version 2.14.3

December 13, 2025

* Added: Translations for some fields in Czech, Dutch, French and Hungarian
* Improved: Reliability of updates (download should now be possible even if the last license check was longer ago than the update check)
* Improved: Complete code base review after nearly 500 added tests
* Fixed: Response messages in WP-CLI for license data now states that it's about the Impressum license
* Fixed: Validation for allowed incompatibilities inside the Accessibility Information API
* Fixed: Unclosed paragraph HTML tag inside the imprint field output
* Fixed: Adding missing paragraph closing HTML tag inside the "responsible person" privacy policy section
* Fixed: Output of the data protection officer email address in the privacy policy

## Version 2.14.2

October 14, 2025

* Fixed: Certain settings could not be saved

## Version 2.14.1

October 13, 2025

* Fixed: Some assets in the backend could not be loaded and thus prevented JavaScript functionality
* Fixed: License verification could fail in certain environments

## Version 2.14.0

October 6, 2025

* Added: All market surveillance authorities and law titles for all European countries for the accessibility information
* Added: Support for the legal entity GesbR
* Added: Support for new social media networks:
  * LinkedIn
  * TikTok
  * XING
  * YouTube
* Added: Support to open social media links in a new tab
* Improved: The control for the enabled fields in the imprint blocks are now separate checkboxes
* Removed: “In process of being established“ for the German Gemeinsame Marktüberwachung der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)

## Version 2.13.3

June 18, 2025

* Improved: Added bug fixes from [Impressum 2.1.3](https://wordpress.org/plugins/impressum/#developers)

## Version 2.13.2

June 13, 2025

* Improved: Added bug fixes from [Impressum 2.1.2](https://wordpress.org/plugins/impressum/#developers)

## Version 2.13.1

June 12, 2025

* Fixed: Custom field titles are displayed again

## Version 2.13.0

June 9, 2025

* Added: Accessibility Information generator
* Fixed: Functionality of the Plus version in the imprint block is restored
* Fixed: Wrongly displayed fields to enable in the imprint block

## Version 2.12.1

May 22, 2025

* Fixed: An issue with parts of the translations not being loaded

## Version 2.12.0

May 22, 2025

* Improved: Validation check for VAT ID and Business ID
* Improved: Code base
* Removed: Link to add privacy replacements directly from within the admin bar
* Removed: Link to the online dispute resolution platform of the European Commission starting on July 20th, 2025
* Fixed: Accessibility issues while editing field titles on the settings page
* Fixed: Handling of system data in the API

## Version 2.11.2

April 24, 2025

* An error has been fixed, which prevented an update if license credentials were managed via PHP constants.

## Version 2.11.1

April 23, 2025

* An error has been fixed, which was created due to loading translated text too early.

## Version 2.11.0

April 19, 2025

* Processing the content of the privacy policy has been modernized by rewriting its logic.
* Support for privacy policy text when using ActivityPub/Webmentions has been added.
* Support for [installing Impressum Plus via Composer](/impressum/installation.html#installation-via-composer) has been added.

## Version 2.10.3

December 31, 2024

* We fixed an issue that could prevent automatic updates of other plugins.

## Version 2.10.2

November 28, 2024

* We fixed an issue that could make updating Impressum Plus nearly impossible.

## Version 2.10.1

November 21, 2024

* We improved support with WordPress 6.7 by loading the translation files in the `init` hook instead of the `plugins_loaded` hook.

## Version 2.10.0

October 21, 2024

* We introduced a [WP-CLI integration](/impressum/wp-cli/imprint.md).
* You can now define the license via [configuration constants](/impressum/license.html) `IMPRESSUM_PLUS_LICENSE_EMAIL` and `IMPRESSUM_PLUS_LICENSE_KEY`.
* We added support for Polylang for the contact form page.
* We made it more clear that you can use various blocks instead of shortcodes to output the imprint and privacy policy.
* The namespace `\epiphyt\Impressum` is now considered deprecated and has been replaced by `\epiphyt\Impressum_Plus`.
* We fixed various issues regarding activating/deactivating a license and made the process more reliable.

## Version 2.9.0

July 26, 2024

* We added the Omnisend newsletter provider.
* We added the Mollie payment provider.

## Version 2.8.1

May 3, 2024

* We fixed the check for a valid imprint in the admin notice.
* We fixed a potential PHP warning if the country has not yet been set.

## Version 2.8.0

April 22, 2024

* We added an alternative select for a contact form page instead of entering a phone number.
* We added the “Company purpose” field for Austrians.
* We introduced JavaScript functionality for the tabs to improve navigation speed in the settings.
* We made the changelog in the plugin list dynamically.
* We added a check for the official [VG WORT METIS plugin](https://wordpress.org/plugins/vgw-metis/).
* We removed an information regarding to the EU-US Data Privacy Framework (DPF) from the privacy policy due to potentially misleading interpretations.

You can found more information regarding the biggest new features in [the blog post for this release](https://epiph.yt/en/blog/2024/impressum-plus-2-8-0-released/).

## Version 2.7.1

October 16, 2023

* We fixed an issue regarding the automatic update mechanism.

## Version 2.7.0

October 15, 2023

* We added an information regarding to the EU-US Data Privacy Framework (DPF) to the privacy policy.
* We added support for Spotify.
* We added support for CleanTalk.
* We have added buttons to the customer account and the “Lost License” page below the form for the license credentials.
* We renamed Facebook Pixel to Meta Pixel.
* We fixed a potential PHP warning in the system check.

## Version 2.6.1

July 15, 2023

* We added the missing parts to replace the privacy policy content of Embed Privacy and Google reCAPTCHA.
* We renamed the newsletter provider Newsletter2Go to Brevo/Sendinblue/Newsletter2Go.
* We fixed the appearance of the default option “Please select” for the privacy policy replacement part to be the first option, not the last.
* We fixed an error appearing while adding the block without having set any imprint settings yet.
* We fixed an check in the editor to display an information if there is no imprint field available yet.
* We fixed displaying the field “Inspecting Authority” in the backend for legal entity GbR.

## Version 2.6.0

June 25, 2023

* You can now manually override parts of the privacy policy (or the whole privacy policy) under **Settings > Privacy Replacements**.
* We added the legal entity “eG”.

## Version 2.5.2

June 6, 2023

* We updated parts of Sendinblue (formerly Newsletter2Go) since they have been renamed to Brevo.

## Version 2.5.1

May 8, 2023

* We fixed an issue while outputting the imprint.

## Version 2.5.0

May 8, 2023

* We added the possibility for manual sorting the fields in the block editor.
* We replaced the the multi select for active fields with a form token field to improve its usability.
* We updated parts of MailPoet since they have been aquired by Automattic.
* We fixed a potential error while retrieving the last (faulty) API response.

## Version 2.4.0

March 12, 2023

* We added an input for a Mastodon profile page.
* We fixed a deprecation notice in PHP 8.0.
* We fixed a deprecation notice in PHP 8.2.
* We fixed a scrolling issue in Chrome in the active fields select of the imprint block.
* We improved the code under the hood.

## Version 2.3.0

September 26, 2022

* We added an option to link to an online dispute resolution as well as giving you the possibility to select whether you participate in an online dispute resolution process.
* Custom titles can now be retrieved via REST API. Visit the [API documentation](/impressum/api/authentication.html) for more information.
* Custom titles can now be send from your WordPress installation via API settings. You can select the data type “Field Titles” to do so.
* We improved handling of medical freelancers by giving them a separate option on the legal entity field.
* We fixed a potential PHP warning for resetting custom titles.
* We fixed sending imprint data via API to another WordPress installation.

## Version 2.2.0

March 28, 2022

* We fully translated the privacy policy to English and added proper difference between German formal and informal version.
* You can now change the field titles to your liking.
* We added the field “professional liability insurance”.
* We added a privacy policy system check for the WooCommerce PayPal Payments plugin.
* The register field is now a textarea.
* We improved the imprint container name to prevent adblocker from blocking the content.
* We fixed an issue where the fields selection in the imprint block may disappear.
* We fixed an issue that result in using the settings of the primary site in the network options.

## Version 2.1.2

February 7, 2022

* We changed the name of Facebook Inc. to Meta Platforms Ireland Ltd. according to their company renaming.
* We fixed an issue that prevents the plugin from work in PHP versions < 7.3.

## Version 2.1.1

August 28, 2021

* We fixed the system check for Embed Privacy, which would result in an error if you disable Embed Privacy.

## Version 2.1.0

June 25, 2021

* We added support for additional services in the privacy policy:
  * [Avatar Privacy](https://wordpress.org/plugins/avatar-privacy/)
  * [Embed Privacy](https://wordpress.org/plugins/embed-privacy/)
  * [Shariff Wrapper](https://wordpress.org/plugins/shariff/)
  * [Matomo](https://wordpress.org/plugins/matomo/)
  * Amazon CloudFront CDN
  * DigitalOcean CDN
  * KeyCDN
  * Podtrac
  * Verwertungsgesellschaft WORT
* We added a placeholder to the imprint block if there is no imprint data set yet.
* We added support for basic HTML in free text field (a, strong, b, em, i, h1–h6, p).
* We added support for automatic updates.
* We unified some parts of the privacy policy.
* We improved displaying outstanding plugin updates more reliable.
* We fixed checking for an active license on the plugins page in multisites.

## Version 2.0.3

May 16, 2021

* We improved formatting of responsible person and data protection officer in privacy policy to be identical.
* We fixed displaying field “Responsible for content” in the backend of German users.

## Version 2.0.2

March 20, 2021

* Impressum Plus is now officially tested in WordPress 5.7.
* Shoutout to Florian Brinkmann for fixing a problem in combination with application passwords.
* We added prefixes to email and phone of the data protection officer and display them now the same way on both the imprint and privacy policy page.
* We fixed the filter name for DHL privacy text.

## Version 2.0.1

December 17, 2020

* We fixed an error while trying to deactivate a license.
* We fixed an problem where MailPoet won’t be displayed as newsletter provider in the privacy policy.

## Version 2.0.0

December 7, 2020

* We added Gutenberg Blocks for the imprint and privacy policy.
* The code structure has been changed and modernized completely. It’s now easier than ever to extend or filter the functionality of Impressum Plus. [Visit the migration guide for more information](https://impressum.plus/en/migration-2-0-0/).
* We improved the imprint generator for an even better experience.
* Impressum Plus now detects the country according to the used browser language.
* For non-Germans, the field Business ID is now hidden as they have no such information.
* We added the legal entity “Partnership”.
* We added a proper changelog to the information modal.
* You can now output the imprint without titles by using `titles="false"`.
* It is now allowed to add + and \* in the VAT ID field to allow VAT IDs of the Netherlands.
* We added privacy policy content for Google reCAPTCHA, Cloudflare and StackPath (MaxCDN/BootstrapCDN).
* We added privacy policy content for PayPal, Stripe and DHL.
* We added Mailpoet as a newsletter provider.
* License checks are now handled differently to not cause hundreds of requests on large multisites.
* The update notice now displays if your WordPress version is supported.
* We added the headline number to the filters in the privacy policy.
* We added a filter to the output of the imprint.
* We added a filter to `Privacy::has_content()`.
* We removed the “according to § 55 paragraph 2 RStV” since it doesn’t apply anymore.
* We fixed the email field output of the data protection officer. It no longer starts with http://.

## Version 1.1.2

June 12, 2020

* We improved and fixed the sorting of some privacy policy parts.
* A typo has been fixed in the privacy policy text.
* A potential error in the privacy policy system check has been fixed.

## Version 1.1.1

May 23, 2020

* An notice will be displayed on different pages if your license is expired and thus an update is impossible.
* A typo has been fixed in the privacy policy text.
* Impressum Plus now also sends PHP information and the used language to the update server.
* We improved the German translation so that its style fit the WordPress style.

## Version 1.1.0

May 13, 2020

* Impressum Plus can now also generate a privacy policy.
* All data from Impressum Plus can now be accessed and written via [REST API](https://impressum.plus/en/documentation/api/). This way you can synchronize your imprint data between multiple websites or use a CRM to create imprints.
* More than [40 new filters](https://impressum.plus/en/documentation/developer/) have been added to modify the interface and output.
* A field to add the chamber has been added.
* Additional fields for social media fields have been added.
* Checks for the legal entity has been improved.
* Handling optional fields has been improved.
* A problem with a wrong prefix has been fixed for email addresses.
* Managing of license data has been improved.

## Version 1.0.2

March 9, 2019

* We removed the check for a VAT ID. This information is based on revenue, not on a legal entity.
* On uninstalling Impressum Plus the license information will now also be removed.
* Handling the legal entity GbR has been improved.
* A missing translation has been added.
* After adding a new site to a multisite a check was missing if there are already imprint data for this new site.
* An error has been fixed on opening the update information of the plugin.
* The update server will now be requested only once instead of multiple times while searching for updates.
* The fields “Coverage” and “Free Text” are now also displayed for individuals and self-employed persons.
* While checking for all required fields network-wide imprint settings had been ignored. This is fixed now.
* The Impressum Plus icon will now be displayed on the update screen.

## Version 1.0.1

November 1, 2018

* A PHP error has been fixed if Impressum and Impressum Plus have been enabled simultaneously. Now, Impressum will be disabled automatically.
* If only defined in the network options, single information could not be displayed via the `sections` parameter.
* Line breaks will now automatically be transformed to commata on output without markup.

## Version 1.0.0

October 31, 2018

* First release
