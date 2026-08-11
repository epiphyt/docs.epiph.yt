# Accessibility Conformance Report for Multisite Auto Language Switcher

**Name of Product/Version:** Multisite Auto Language Switcher, version 1.1.3

**Report Date:** August 12, 2026

**Product Description:** Multisite Auto Language Switcher is a free WordPress plugin for multisite
installations that extends the Multisite Language Switcher plugin. It automatically redirects a
visitor to the variant of the current content that matches the preferred language their browser
transmits with every request. The plugin has no settings screen of its own; logged-in users can turn
the redirect off for their account in their WordPress profile under **Auto-redirect**.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Multisite Auto Language Switcher plugin's own user interface only —
the *Auto-redirect* option it adds to the user profile, the *Documentation* link it adds to its row on
the Plugins screen, and the link markup it contributes to the language switcher rendered by Multisite
Language Switcher. It does **not** cover Multisite Language Switcher itself, the surrounding WordPress
admin, the active theme, other plugins, or the content of the pages a visitor is redirected to. The
redirect takes effect during page load, before any user interaction. Accessibility of the final page
also depends on the theme and site configuration (see [Dependencies](#dependencies)).

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested on a WordPress 7.0 multisite with Multisite
Language Switcher 2.9.6 and the theme Twenty Twenty-Five. Ratings were additionally cross-checked
against the plugin source code (version 1.1.3).

## Applicable Standards / Guidelines

This report documents conformance with the following:

| Standard / Guideline | Included in report |
| --- | --- |
| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Level A (Yes) · Level AA (Yes) · Level AAA (No) |
| [EN 301 549 v3.2.1 (2021-03)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) | Yes |

## Terms

The terms used in the Conformance Level column are defined as follows:

- **Supports:** The functionality of the product has at least one method that meets the criterion
  without known defects, or meets it with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.
- **Not Evaluated:** The product has not been evaluated against the criterion. (May only be used for
  WCAG 2.x Level AAA criteria.)

## WCAG 2.2 Report

Tables 1 and 2 document conformance with WCAG 2.2. Note: WCAG 2.2 removed Success Criterion 4.1.1
Parsing; it is therefore not listed below.

### Table 1: Success Criteria, Level A

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The plugin emits no images, icons, or other non-text content of its own; everything it outputs is text or link markup. The flag images that may appear in the language switcher are produced by Multisite Language Switcher and carry that plugin's `alt` attribute (see [Dependencies](#dependencies)). |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content. |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | The profile option is a native checkbox in a `form-table` row whose `<th scope="row">` holds the row heading "Auto-redirect", with a `<label for="…">` programmatically tied to the input's `id`. In the language switcher, the entry for the current language is identified programmatically with `aria-current="page"` rather than by styling alone. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | The plugin appends a single row to the profile form and does not reorder the language switcher; the DOM order matches the visual order and reads correctly without CSS. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No instructions rely on shape, size, visual location, or sound. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | The plugin defines no colors. The current language in the switcher is conveyed by `aria-current="page"` in addition to any theme styling, so the information is not carried by color alone. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | The plugin's only control is a native checkbox, and the language switcher entries are native links. The plugin registers no key or click handlers; its only script rewrites the current URL and adds no interactive behavior. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | No focus-trapping logic is present; focus can move away from every control with standard keys. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no keyboard shortcuts. |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Not Applicable | The plugin imposes no time limits. The language redirect is performed once while the page is being requested, not on a timer or after a delay. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Not Applicable | The plugin produces no moving, blinking, scrolling, or auto-updating content. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism; page-level skip links and landmarks are provided by WordPress and the theme. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Supports | The plugin adds no screens of its own. Page titles — including those of a page a visitor was redirected to — are supplied by WordPress and the theme of the respective site. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order. The plugin moves focus nowhere: its profile row is appended in place, and its script only rewrites the URL. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | Language switcher links are labeled with the language name supplied by Multisite Language Switcher. The "Documentation" link in the plugin's row on the Plugins screen has descriptive text and states that it opens in a new tab. |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | The native checkbox and native links act on the standard activation event; no functionality is triggered on the down-event. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | The checkbox's accessible name is its visible label. Since 1.1.3 the switcher links no longer carry a `title` attribute that could deviate from their visible text, and the accessible name of the "Documentation" link begins with its visible text. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress and the theme. By redirecting a visitor to the site holding the matching language variant, it delivers the content on a site whose declared page language matches that content. Its own strings are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. The language redirect happens while the page is being requested, before any user interaction, and is therefore not triggered by focus. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Toggling the *Auto-redirect* checkbox changes no context; the setting is applied when the profile form is submitted. The language redirect is not triggered by entering data into or changing any control. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Not Applicable | The plugin performs no input validation; its single checkbox cannot be completed incorrectly. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | The profile option has a visible, associated `<label>` ("Disable auto-redirect to preferred language") and sits in a row headed "Auto-redirect", which together state what the option does. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Not Applicable | The plugin has no multi-step process that asks for the same information more than once. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The user interface consists of a native checkbox and native links, so name, role and value are exposed by the browser. The current language in the switcher additionally exposes its state through `aria-current="page"`, restored in 1.1.3 together with the removal of a redundant `title` attribute. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Not Applicable | The plugin's only control is a preference checkbox; it collects no information about the user for which WCAG defines an input purpose. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The plugin ships no stylesheet and defines no colors of its own. Admin text inherits the WordPress admin palette; front-end text inherits the theme. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The plugin sets no font sizes and uses standard, text-based markup, so text scales with the browser/zoom. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text the plugin outputs is real text; it uses no images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | The plugin's output is one row in the WordPress profile form plus inline link markup, with no fixed-width containers of its own. Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The plugin overrides neither control borders nor focus indicators, inheriting the WordPress admin and theme styles. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | The plugin applies no inline styles and no CSS at all, so nothing constrains line height, letter or word spacing. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Not Applicable | The plugin shows no additional content on hover or focus. The `title` attribute previously emitted on language switcher links was removed in 1.1.3. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | The plugin adds no headings. Its row heading ("Auto-redirect") and its checkbox label describe the option's purpose. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin ships no CSS and therefore no `outline: none` or other focus suppression; the default WordPress, theme and browser focus indicators remain visible on all controls. |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky headers, overlays, or floating elements that could hide a focused control. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Not Applicable | The plugin has no drag-based interactions. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | The interactive elements are a native checkbox and native links at their default sizing. The plugin applies no CSS that would reduce a target; the rendered size of the language switcher is determined by the theme (see [Dependencies](#dependencies)). |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the page; its own strings are localized to the site language. The language names shown in the switcher are output by Multisite Language Switcher (see [Dependencies](#dependencies)). |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | The plugin adds its "Documentation" link in the same place on every load and does not change the order of the language switcher, which is determined by Multisite Language Switcher. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | The plugin's option and its link are labeled consistently wherever they appear. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | Help is offered consistently through the "Documentation" link in the plugin's row on the Plugins screen, in the same location on every visit. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Not Applicable | The plugin detects no input errors, so no corrections need to be suggested. |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal, financial, or data-commitment transactions; the profile option can be changed and saved again at any time. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Not Applicable | The plugin provides no authentication of its own; sign-in is handled by WordPress. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | The plugin emits no status messages of its own; saving the *Auto-redirect* option is confirmed by WordPress's standard "Profile updated" notice. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Content is exposed through native semantics: an associated label for the profile option, and native links whose current entry is marked with `aria-current="page"`. |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed sizes and no plugin-defined colors (see 1.4.3, 1.4.4). |
| 4.2.3 Usage without perception of color | Supports | Information is never conveyed by color alone (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | All functionality is keyboard-operable with native controls (see 2.1.1). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | A single, plainly worded option, and an automatic redirect that spares visitors from locating the right language variant themselves; logged-in users can switch it off in their profile. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls. |

### Chapter 5: Generic Requirements

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 5.1 Closed functionality | Not Applicable | The plugin runs in a general-purpose web browser and provides no closed functionality. |
| 5.2 Activation of accessibility features | Not Applicable | No platform accessibility features to activate. |
| 5.3 Biometrics | Not Applicable | The plugin uses no biometrics. |
| 5.4 Preservation of accessibility information during conversion | Not Applicable | The plugin performs no format conversion of user content. |
| 5.5 Operable parts | Supports | Operable parts are native controls and native links; see WCAG 2.1.1 and 2.5.x. |
| 5.6 Locking or toggle controls | Not Applicable | The plugin exposes no locking/toggle status keys (e.g. caps lock) to report. |
| 5.7 Key repeat | Not Applicable | Key-repeat behavior is a platform/hardware function. |
| 5.8 Double-strike key acceptance | Not Applicable | Platform/hardware function. |
| 5.9 Simultaneous user actions | Supports | No operation requires simultaneous user actions. |

### Chapter 6: ICT with Two-Way Voice Communication

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 6 (all clauses) | Not Applicable | The plugin provides no two-way voice communication. |

### Chapter 7: ICT with Video Capabilities

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 7 (all clauses) | Not Applicable | The plugin provides no video capabilities. |

### Chapter 8: Hardware

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 8 (all clauses) | Not Applicable | The plugin is software only; it includes no hardware. |

### Chapter 9: Web

The plugin's front-end output and its browser-based admin UI are web content. Conformance is
documented in the [WCAG 2.2 Report](#wcag-2-2-report) above; EN 301 549 clauses 9.1–9.4 map directly
to the corresponding WCAG 2.2 Success Criteria.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 9.1 – 9.4 (WCAG 2.2 A & AA) | See WCAG 2.2 Report | Refer to Tables 1 and 2 above; all Level A and AA criteria are rated Supports or Not Applicable. |
| 9.5 Non-interference | Supports | The plugin uses no color-only cues, flashing, audio, or timing that would interfere across the page. |
| 9.6 WCAG conformance requirements | Supports | The output meets the WCAG 2.2 Level A and AA conformance requirements. |

### Chapter 10: Non-web Documents

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 10 (all clauses) | Not Applicable | The plugin produces no non-web documents (e.g. PDF or Office files). |

### Chapter 11: Software

The plugin's user interface (the profile option and the links it adds) is web-based software rendered
in the WordPress admin and on the front end. Requirements that correspond to WCAG map to the
[WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fonts or colors that would override the user's platform/browser preferences; it inherits the WordPress admin environment and the theme. |
| 11.8 Authoring tools | Not Applicable | The plugin provides no authoring tool: it adds no blocks, no editor integration, and no interface for creating content. |

### Chapter 12: Documentation and Support Services

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 12.1.1 Accessibility and compatibility features | Supports | This documentation describes the plugin's features, including this Accessibility Conformance Report. |
| 12.1.2 Accessible documentation | Supports | Documentation is published as HTML at docs.epiph.yt. |
| 12.2.2 Information on accessibility and compatibility features | Supports | Accessibility-relevant behavior is documented here and in the plugin readme. |
| 12.2.3 Effective communication | Supports | Support is offered through the WordPress.org support forum and the vendor's channels at epiph.yt. |
| 12.2.4 Accessible documentation (support) | Supports | Support documentation is provided in accessible HTML. |

### Chapter 13: ICT Providing Relay or Emergency Service Access

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 13 (all clauses) | Not Applicable | The plugin provides no relay or emergency-service functionality. |

## Dependencies

The accessibility of the language switcher and of the page a visitor finally sees depends on factors
outside this plugin's control, including:

- the **Multisite Language Switcher** plugin, which renders the language switcher itself — the flag
  images and their alternative text, the list markup surrounding the entries, the language names, and
  the order of the languages. Multisite Auto Language Switcher only adjusts the markup of the
  individual links through the `msls_output_get` filter;
- the active **WordPress theme** (colors, contrast, focus styles, and the size and styling of the
  language switcher, including the `current_language` class);
- other **plugins** on the site;
- the **site a visitor is redirected to** — the accessibility of the target page is determined by that
  site's theme, content, and plugins.

This report describes the plugin's own markup and UI. Site owners remain responsible for the overall
accessibility of their website.

## Known Issues

No outstanding accessibility issues are known at the time of this report.

## Legal Disclaimer

This Accessibility Conformance Report is a self-reported statement of the product's conformance with
the standards listed above, as of the report date and for the version stated. It is not a warranty or
a guarantee of legal compliance. Accessibility is assessed on a best-effort basis and may change
between releases.
