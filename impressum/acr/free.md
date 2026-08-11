# Accessibility Conformance Report for Impressum

**Name of Product/Version:** Impressum, version 3.0.2

**Report Date:** August 12, 2026

**Product Description:** Impressum is a free WordPress plugin that generates a legally compliant
imprint (Impressum) for a website. It provides an admin settings screen under **Settings → Impressum**
for entering imprint data, and outputs the imprint on the front end via an "Imprint" block in the
WordPress block editor or the `[impressum]` shortcode.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Impressum plugin's own user interface only — its admin settings
screen, its block-editor controls, and the HTML markup it emits on the front end. It does **not**
cover the surrounding WordPress admin, the active theme, other plugins, or content authored by the
site owner. Accessibility of the final page also depends on the theme and site configuration
(see [Dependencies](#dependencies)).

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested with WordPress 7.0.2 and the theme
Twenty Twenty-Three 1.6. Ratings were additionally cross-checked against the plugin source code
(version 3.0.2).

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
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The plugin emits no informative images, icons, or other non-text content; all data is conveyed as text. The only icon (the block-editor `Placeholder` in an empty block) is decorative and accompanied by the visible label "Imprint". |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content. |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | Front-end output is a description list (`<dl>` / `<dt>` field title / `<dd>` value). The settings screen uses a `form-table` marked `role="presentation"`, with each field label in `<th scope="row"><label for="…">` programmatically tied to the control's `id`, and section titles as `<h2>`. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | Content is emitted in a logical DOM order; the `<dl>` pairs and form rows read correctly without CSS. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No instructions rely on shape, size, visual location, or sound. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | Color is never the sole means of conveying information: required fields are flagged with the text "This is a required field.", and the green/red status cells on the "Get Plus" tab always contain the words "Yes"/"No". |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | All settings use native form controls. The settings tabs implement a full keyboard model (Arrow Left/Right, Home, End with roving `tabindex`). Block-editor controls use standard `@wordpress/components`. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | No focus-trapping logic is present; focus can move away from every control with standard keys. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no single-character key shortcuts. (The tab widget uses only Arrow/Home/End, which are outside the scope of this criterion.) |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Not Applicable | The plugin imposes no time limits; dismissible notices persist via a stored option, not a timer. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Not Applicable | The plugin produces no moving, blinking, scrolling, or auto-updating content. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism; page-level skip links and landmarks are provided by WordPress and the theme. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Supports | The settings screen renders the admin page title in an `<h1>` (via `get_admin_page_title()`); front-end page titles are supplied by WordPress and the theme. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order; the tab script moves focus to the newly selected tab and keeps inactive tab panels out of the tab sequence. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | Front-end links are self-describing: the email renders as a `mailto:` link whose text is the address, and the contact-form link reads "To the contact form". Admin links ("Configure now!", "Documentation", the Plus buttons) have descriptive text. |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | Controls act on the standard `click`/up event; no functionality is triggered on the down-event. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | Each control's accessible name comes from its visible `<label>` or visible button text, so the visible label is contained in the accessible name. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress/the theme; its own strings are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Changing the country or legal-entity `<select>` reveals or hides related fields on the same page but does not submit the form or change context. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Supports | Validation errors are described in text (e.g. "You need to enter an email address.") and, since 3.0.2, are programmatically associated with their field: the input is marked `aria-invalid` and linked to the message via `aria-describedby`. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | Every field has an associated `<label for>` plus a visible `<p class="description">` instruction where relevant. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Not Applicable | The plugin has no multi-step process that asks for the same information more than once. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The UI is built from native form controls plus the block editor's standard components. The custom tab widget exposes correct roles and states (`role="tablist/tab/tabpanel"`, `aria-selected`, `aria-labelledby`, `hidden`), kept in sync by its script. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Supports | The e-mail and phone fields use `type="email"`/`type="tel"`, and since 3.0.2 the name, address, e-mail and phone fields carry `autocomplete` tokens (`name`, `street-address`, `email`, `tel`), so their input purpose is programmatically determinable. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The plugin defines almost no colors of its own, inheriting the WordPress admin palette (front-end text inherits the theme). Its only custom colors are the "Get Plus" comparison badges: red (`#fff` on `#c5443f`, ≈ 4.9:1) and, since 3.0.2, green (`#000` on `#48a03e`, ≈ 6.4:1) — both meeting the 4.5:1 minimum. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The plugin sets no fixed pixel font sizes and uses standard, text-based markup, so text scales with the browser/zoom. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text is real text; the plugin uses no images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | Output uses fluid, semantic markup with no fixed-width layout containers (the one JS notice uses `max-width`, not a fixed width). Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The plugin does not override control borders or focus indicators, inheriting the WordPress admin styles. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | No inline styles constrain line-height, letter- or word-spacing in a way that would clip text. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Not Applicable | The plugin shows no additional content on hover or focus (no custom tooltips or `title`-based popovers). |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | Headings ("Disclaimer", "Usage", section titles) and field labels are descriptive; heading levels were reviewed and corrected in a recent release. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin stylesheet contains no `outline: none` or other focus suppression, so the default WordPress/browser focus indicator remains visible on all controls. |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky headers, overlays, or floating elements that could hide a focused control. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Not Applicable | The free plugin has no drag-based interactions; field selection uses checkboxes. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | Interactive elements are native controls and standard block-editor/WordPress components at their default sizing (≥ 24 × 24 px). |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the page; its own strings are localized to the site language. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | The settings screen presents its tabs in a consistent order on every load. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | Components with the same function are labeled consistently throughout the settings UI. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | Help is offered consistently: per-field descriptions on the settings screen and a "Documentation" link in the plugin's row on the Plugins screen. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Supports | Where an error is detected the message suggests a correction (e.g. required-field prompts and specific format guidance for VAT ID and business ID), announced and associated with the field (see 3.3.1 / 4.1.3). |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal, financial, or data-commitment transactions; settings are editable and can be re-saved at any time. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Not Applicable | The free plugin provides no authentication of its own; sign-in is handled by WordPress. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | The "Settings saved" confirmation uses the standard WordPress mechanism, and since 3.0.2 the plugin's client-side validation messages are injected as a live region (`role="alert"`), so they are announced by assistive technology when they appear. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Content is exposed through native semantics (description list, associated labels, ARIA tabs), and dynamic validation messages are announced to screen readers (see 4.1.3). |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed sizes; plugin-defined colors meet contrast (see 1.4.3). |
| 4.2.3 Usage without perception of color | Supports | Information is never conveyed by color alone (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | All functionality is keyboard-operable with native controls (see 2.1.1). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | Consistent layout, descriptive labels, per-field help, and plain error suggestions. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls. |

### Chapter 5: Generic Requirements

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 5.1 Closed functionality | Not Applicable | The plugin runs in a general-purpose web browser and provides no closed functionality. |
| 5.2 Activation of accessibility features | Not Applicable | No platform accessibility features to activate. |
| 5.3 Biometrics | Not Applicable | The plugin uses no biometrics. |
| 5.4 Preservation of accessibility information during conversion | Not Applicable | The plugin performs no format conversion of user content. |
| 5.5 Operable parts | Supports | Operable parts are native controls and standard components; see WCAG 2.1.1 and 2.5.x. |
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

The plugin's user interface (settings screen and block-editor controls) is web-based software rendered
in the WordPress admin. Requirements that correspond to WCAG map to the [WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fixed fonts or colors that would override the user's platform/browser preferences; it inherits the WordPress admin environment. |
| 11.8 Authoring tools | Supports | The Imprint block runs inside the WordPress block editor (an authoring tool). Its `block.json` sets `supports.html = false`, so authors cannot inject arbitrary markup, and the block always emits the plugin's semantic `<dl>` output — the authoring tool produces accessible content by default. |

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

The accessibility of the imprint as it finally appears to a visitor depends on factors outside the
plugin's control, including:

- the active **WordPress theme** (colors, contrast, focus styles, heading structure, responsive
  behavior of the page around the imprint);
- other **plugins** on the site;
- **content entered by the site owner** in the imprint fields (e.g. links, formatting).

This report describes the plugin's own markup and UI. Site owners remain responsible for the overall
accessibility of their website.

## Known Issues

No outstanding accessibility issues are known at the time of this report.

## Legal Disclaimer

This Accessibility Conformance Report is a self-reported statement of the product's conformance with
the standards listed above, as of the report date and for the version stated. It is not a warranty or
a guarantee of legal compliance. Accessibility is assessed on a best-effort basis and may change
between releases.
