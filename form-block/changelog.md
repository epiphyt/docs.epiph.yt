# Changelog

## Version 1.4.0

September 20, 2025

* Added: Form submissions stored locally can now be responded to directly from within WordPress
* Added: Support for [installation/updating via Composer](/form-block/installation.md#installation-via-composer)
* Added: The error message displayed for invalid fields is now customizable
* Improved: Assets for functions (dependencies, drop-zone) are only loaded if necessary
* Improved: Registering blocks is now faster
* Fixed: Multiple email addresses can now also be separated by comma

## Version 1.3.0

March 29, 2025

* Added: Repeater block for repeater fields
* Added: Allow defining field value via URL parameter
* Added: Get changelog dynamically
* Fixed: `size` attribute will only be displayed if applicable
* Fixed: Various non-critical React-related issues
* Notice: This version requires at least WordPress 6.5

## Version 1.2.3

December 30, 2024

* Fixed: Potential error after retrieving license information

## Version 1.2.2

December 16, 2024

* Added: Support for Form Block 1.5.0

## Version 1.2.1

November 4, 2024

* Added: Support for WordPress 6.7
* Fixed: Downloading local files did not always actually download the file but instead try to display it as text
* Fixed: Pressing enter while having a drop-zone will now submit the form instead of opening the file selection dialog
* Fixed: Validation issues for the drop-zone

## Version 1.2.0

September 2, 2024

* Added: Option to upload files onto the server instead of attaching them to the email, which usually allows for larger uploads.
* Fixed: Drop-zone is now correctly registered for file input fields and can now be selected in the backend.

## Version 1.1.4

June 17, 2024

* Removed: Specific input types that are now also available in the free version

## Version 1.1.3

May 9, 2024

* Fixed: Potential PHP error while saving the settings
* Removed: Duplicated controls in the sidebar for some fields

## Version 1.1.2

February 4, 2024

* Fixed: Potential fatal error after update
* Fixed: PHP warning caused by missing dependency data on old forms

## Version 1.1.1

January 29, 2024

* Fixed: Required fields were no more checked in the frontend upon submit
* Fixed: Missing German translations

## Version 1.1.0

January 29, 2024

* Added: Support for field dependencies
* Added: Support for setting an aria description for each field
* Fixed: Missing controls in input fields from the Pro version
* Notice: This version requires at least WordPress 6.3

## Version 1.0.1

October 16, 2023

* We fixed an issue regarding the automatic update mechanism.

## Version 1.0.0

July 2, 2023

* First release
