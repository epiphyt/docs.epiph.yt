# Accessibility Conformance Report for Form Block

**Name of Product/Version:** Form Block, version 1.9.0

**Report Date:** August 12, 2026

**Product Description:** Form Block is a free WordPress plugin for building forms directly in the
block editor. It provides five blocks — Form, Fieldset, Input, Select and Textarea — from which an
author composes a form, and it validates submissions both in the browser and on the server.
Submitted data can be sent by email and stored in WordPress, where it is managed under
**Tools → Form Submissions**. A settings screen is available under **Settings → Form Block**.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Form Block plugin's own user interface only — the markup its
blocks emit on the front end, its client- and server-side validation messages, its block-editor
controls, the **Settings → Form Block** screen and the **Tools → Form Submissions** screen. It
does **not** cover the surrounding WordPress admin, the active theme, other plugins, or the labels,
legends and messages an author enters. Because a form is composed field by field by the author,
the result also depends on the choices they make (see [Dependencies](#dependencies)). Form Block
Pro is a separate product and is not covered by this report.

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested with WordPress 7.0 and the theme Twenty
Twenty-Five. Ratings were additionally cross-checked against the plugin source code (version 1.9.0).

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
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The plugin's front-end output is text and native form controls; it contains no images. Purely decorative characters are hidden from assistive technology: the asterisk marking a required field and the separators between the parts of a split date field both carry `aria-hidden="true"`. In the admin, the icons in the feature comparison table are marked `aria-hidden="true"` next to their "Yes"/"No" text, and the block-editor icons are `aria-hidden` SVGs. |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content. |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | Every field is a native `<input>`, `<select>` or `<textarea>` tied to its `<label>`: the plugin generates a unique `id` on the control and the matching `for` on the label when the block is rendered, so the association cannot be broken by the author. The Fieldset block emits a real `<fieldset>` with a `<legend>`, and a date split into separate fields is wrapped in a generated `<fieldset>` whose `<legend>` names the whole group while each part keeps its own label. Required fields use the native `required` attribute rather than a visual convention alone. Error messages are linked to their field with `aria-describedby`, and invalid fields carry `aria-invalid`. In the admin, the settings screen groups options in a tab widget with `role="tablist"`/`tab`/`tabpanel`, the comparison table uses `<thead>` with `scope="col"` headers, and submitted values are rendered as a `<dl>` labeled by the heading above it. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | Fields are emitted in the order the author placed them. Each label follows its control in the DOM and is moved above it visually with CSS `order`, which changes the visual position but not the reading order — the label and its control remain adjacent and correctly associated, and the form reads correctly with CSS disabled. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No instruction relies solely on shape, size, visual location, or sound. The one positional convention — the asterisk marking required fields — is not the only carrier of that information: the `required` attribute conveys it programmatically, which is why the explanatory sentence and the asterisk itself are hidden from assistive technology instead of being announced as a meaningless symbol. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | Validation state is never conveyed by color alone. An invalid field always gets a text message below it, and the plugin's own stylesheet applies no color to that message at all. In the admin, the green/grey/red status cells of the comparison table always contain the words "Yes", "No" or an equivalent. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | All functionality is available from the keyboard because the form is built from native controls throughout; the plugin adds no custom widget on the front end. Although the `<form>` is rendered with `novalidate` so that the plugin can present its own messages, validation is driven by `blur`, `change`, `input` and `submit` events, all of which a keyboard produces. The settings tabs in the admin implement a full keyboard model (Left/Right arrows, Home and End with a roving `tabindex`), and the submitted data of each row is disclosed with a native `<details>`/`<summary>`. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | No focus-trapping logic is present; focus can move away from every control with standard keys. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no single-character key shortcuts. The arrow, Home and End keys in the admin tab widget are the standard keys for that pattern and apply only while a tab has focus. |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Supports | The plugin sets no time limit for filling in a form: a form can be completed at any pace and nothing expires while the visitor works. The two timing-related spam measures do not limit the time available for the task. Flood control, which optionally blocks a repeated submission of the same form within a configurable interval (30 seconds by default, and disabled by setting it to 0), restricts how often a form may be sent, not how long the visitor may take. The time-based spam protection rejects implausibly fast submissions; when it does, it reports an error the visitor can act on and re-submitting immediately succeeds, so no work is lost and no deadline is imposed. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Supports | The plugin produces no moving, blinking, scrolling, or auto-updating content. Its only animations are the spinner shown while a submission is in flight and the fade of the admin confirmation message; both are disabled under `prefers-reduced-motion: reduce`, and the spinner is accompanied by the text "Loading …" so its meaning does not depend on the motion. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism; page-level skip links and landmarks are provided by WordPress and the theme. A form is a single region in the page, and its hidden fields — including the spam-protection fields — are outside the tab sequence. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Supports | The settings screen renders its title in an `<h1>` and the submissions screen in a heading of its own; front-end page titles are supplied by WordPress and the theme. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order, and the visual reordering of labels does not affect it because a label is not focusable. Focus is never dropped to the document body: when a submission fails validation and exactly one field is at fault, focus moves to that field; after a submission is deleted in the admin, focus moves to the delete button of the neighboring row, or to the page heading when the last entry is gone. The settings tabs move focus to the tab that becomes active and keep inactive panels out of the tab sequence. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | The plugin emits no links on the front end. In the admin, "Purchase" and "More information" sit directly below the heading and introductory text of the section they belong to, and the "Documentation" link in the plugin's row on the Plugins screen is named by its context there. |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | Controls act on the standard `click`/up event; no functionality is triggered on the down-event. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | Each control's accessible name is its visible label, since the name comes from the `<label>` the author sees in the editor. The admin buttons take their name from their visible text. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress/the theme; all of its own strings, including every validation message, are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. Validation runs when a field is left or changed, and it only adds a message next to that field. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Entering data changes no context. Validating a field adds or removes its error message without moving focus or submitting anything. A successful submission may redirect the visitor if the author configured a redirect, but that follows the explicit activation of the submit button, not input. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Supports | Errors are identified in text next to the field they concern, tied to it with `aria-describedby`, and the field is marked `aria-invalid`. A field validated on its own announces its message through a live region, so leaving a field empty is reported without having to submit first. On submit, an invalid form is never sent: with a single faulty field focus moves to it so its message is read, and with several the plugin announces a summary that states how many fields are invalid and names them. Errors that only the server can detect — an unsupported file type, a file that is too big, an incompletely filled split date, a rejected spam check — are returned as text, prefixed with the title of the field they belong to, and announced in an alert region. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | Every field has a label, and the plugin generates the `for`/`id` pair that binds them. Required state is conveyed by the native `required` attribute. Where a field's format is not obvious, the sub-fields of a split date carry placeholders such as "DD" and "MM" in addition to their labels, which remain available to assistive technology even when hidden visually. Every field on the settings screen has a label and a description linked with `aria-describedby`. The plugin also assigns `autocomplete` values automatically from a field's label and lets the author correct them, which is an instruction to the browser rather than the visitor but removes the need to type known data at all. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Supports | A form is a single step and asks for nothing twice. Entered values are preserved when validation fails, so nothing has to be typed again, and `autocomplete` support lets the browser supply information the visitor has already provided elsewhere. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The front end is built entirely from native HTML controls, whose name, role and value are exposed by the browser; the plugin adds `aria-describedby` and `aria-invalid` to communicate validation state and keeps `aria-invalid` in sync when a field becomes valid again. The admin tab widget exposes `role="tablist"`, `role="tab"` with `aria-selected`, and `role="tabpanel"` with `aria-labelledby` and `hidden`, kept in sync by its script. The busy state of the delete button is announced with `aria-disabled` and the button genuinely stops responding while its request runs, so the announced state matches the behavior. These attributes are also preserved when WordPress sanitizes the stored markup, so they are present regardless of the capabilities of the author who saved the form. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Supports | Fields that collect information about the user can carry the appropriate `autocomplete` value, and the plugin actively helps get this right: it matches a field's label against a list of known labels and assigns a fitting token automatically, offers the full set of HTML autocomplete tokens for the author to choose from, and supports a section name so a form can ask for two different addresses. The autocomplete value survives sanitization of the saved markup. Because the author composes the fields, the final result depends on them accepting or correcting the suggestion (see [Dependencies](#dependencies)). |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The plugin defines no text colors for its front-end output; labels, values and error messages inherit the theme's body color, and the bundled stylesheets for Twenty Twenty-Two through Twenty Twenty-Five change only borders and spacing. In the admin, the status cells of the comparison table reach approximately 5.7:1 and 5.8:1 for dark text on green and grey and 4.9:1 for white text on red, and the delete button reaches approximately 4.55:1 — all above the 4.5:1 minimum. The remaining admin UI inherits the WordPress admin palette. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The plugin sets no fixed pixel font size for its front-end output; the only font-size declarations are relative values in the bundled theme stylesheets. Field containers are flexbox columns that grow with their content, so a label or an error message that becomes taller is not clipped. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text is real text; the plugin uses no images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | Front-end fields are fluid and wrap rather than scroll, and the only fixed widths are the narrow numeric sub-fields of a split date, which fit well below 320 px. In the admin, the one wide element — the feature comparison table — scrolls inside its own container so the page itself never scrolls horizontally. Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The plugin's own stylesheet draws no control borders and leaves them to the theme. Where a bundled theme stylesheet does set one, it uses `#949494`, which reaches approximately 3.03:1 against white and therefore meets the 3:1 minimum. Focus indicators are not overridden anywhere (see 2.4.7). In the admin, the border of the delete button reaches approximately 4.7:1 against the row behind it. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | The plugin sets no line-height, letter-spacing or word-spacing, and no container has a fixed height that would clip text when spacing is increased. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Supports | The front end reveals no additional content on hover or focus. The plugin adds no hover or focus content of its own; the help buttons beside the field attributes in the block editor rely on the tooltips of the standard WordPress components, whose behavior is provided by WordPress. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | The plugin emits no headings of its own on the front end; labels describe their field, and a form can be given a name that is exposed to assistive technology so a screen reader can tell one form on a page from another. The settings screen is divided into descriptive headings and its tabs are named, and the columns of the comparison table are named by real table headers. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin suppresses no focus indicator — there is no `outline: none` anywhere in its stylesheets, including the bundled theme stylesheets — so every control shows the indicator provided by the theme on the front end and by WordPress in the admin. Front-end focus indicators are ultimately supplied by the theme (see [Dependencies](#dependencies)). |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky headers, overlays, or floating elements above focusable controls. Messages are inserted into the document flow next to the field or at the end of the form, not on top of it. The admin confirmation message appears in the lower corner, where it covers no form control. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Supports | The front end has no drag-based interaction. In the block editor, the order of select options can be changed with buttons rather than by dragging, and blocks themselves can be reordered with the standard block-editor buttons and keyboard shortcuts. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | The plugin does not modify the size of the native controls it emits, which this criterion's user-agent exception covers, and each checkbox and radio button is additionally paired with a clickable `<label>` that extends the target. The admin buttons use the standard WordPress button sizes. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the page; its own strings are localized to the site language. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | The settings screen presents its tabs and sections in the same order on every load, and every form places its fields in the order the author defined, consistently on each visit. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | All fields of the same type are generated from the same template, so the same function is presented the same way throughout a site: error messages use one wording per validation rule, and the required marker and its handling are identical on every field. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | Help is offered consistently: a description under every field on the settings screen, a help button beside each attribute in the block editor, and a "Documentation" link in the plugin's row on the Plugins screen. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Supports | Messages say what is wrong rather than merely that something is: they distinguish an empty required field, a value that is too short or too long, one that is too low or too high, an invalid email address, URL, date or time, an unselected option, an unchecked checkbox, an unsupported file type and a file that is too big. A split date that is only partly filled is answered with "Please fill in all date fields." Authors can replace the generic message of a field with a more specific one in Form Block Pro. |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal or financial transactions and stores no data the visitor is responsible for maintaining. It submits a message to the site owner; what a form is used for is the author's decision. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Supports | The plugin requires no cognitive function test to submit a form: it uses no CAPTCHA and no puzzle. Its spam protection works from hidden fields and timing, which requires nothing of the visitor, and `autocomplete` support means information can be filled in by the browser rather than recalled and typed. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | Changes that do not move focus are announced through live regions that are present in the page from the start, so a message is reliably reported when it appears: a `role="status"` region for the loading and success messages and a `role="alert"` region for errors returned by the server. A field validated on its own announces its own error message, while a submission with several invalid fields announces one summary instead, so the messages do not talk over each other. In the admin, the outcome of deleting a submission is announced through a polite live region. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Every field exposes its label, required state and validation state through native semantics and ARIA, and validation results are announced through live regions (see 4.1.3). A form can be given a name so it is distinguishable from other forms on the page. |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed font sizes; the plugin defines no text colors of its own on the front end and its admin colors exceed the contrast minimum (see 1.4.3). |
| 4.2.3 Usage without perception of color | Supports | Validation state is always carried by text, never by color alone (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | All functionality is keyboard-operable with native controls, checkboxes and radio buttons have label-sized targets, and `autocomplete` support reduces the amount of typing required (see 2.1.1 and 2.5.8). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | Error messages name the problem in plain language and identify the field they belong to, values are preserved when a submission fails, no time limit applies to filling in a form, there is no CAPTCHA to solve, and motion is reduced when the user prefers it. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls. Its spam protection needs no personal input from the visitor, and submitted data is only sent and stored where the site owner configured it. |

### Chapter 5: Generic Requirements

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 5.1 Closed functionality | Not Applicable | The plugin runs in a general-purpose web browser and provides no closed functionality. |
| 5.2 Activation of accessibility features | Not Applicable | No platform accessibility features to activate. |
| 5.3 Biometrics | Not Applicable | The plugin uses no biometrics. |
| 5.4 Preservation of accessibility information during conversion | Not Applicable | The plugin performs no format conversion of user content. |
| 5.5 Operable parts | Supports | Operable parts are native controls; see WCAG 2.1.1 and 2.5.x. |
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
| 7 (all clauses) | Not Applicable | The plugin provides no video capability: it neither plays, records, transmits nor processes video. |

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
| 9.5 Non-interference | Supports | The plugin uses no color-only cues, flashing, audio, or timing that would interfere across the page. Its live regions are scoped to the form they belong to, so several forms on one page do not announce each other's messages. |
| 9.6 WCAG conformance requirements | Supports | The output meets the WCAG 2.2 Level A and AA conformance requirements. |

### Chapter 10: Non-web Documents

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 10 (all clauses) | Not Applicable | The plugin produces no non-web documents (e.g. PDF or Office files). The notification email it sends is plain text or simple HTML with the submitted values as a definition list. |

### Chapter 11: Software

The plugin's user interface (settings screen, submissions screen and block-editor controls) is
web-based software rendered in the WordPress admin. Requirements that correspond to WCAG map to the
[WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fixed fonts and honors the user's platform preferences: it disables the submit spinner's animation and the admin message transitions under `prefers-reduced-motion: reduce`. The admin UI otherwise inherits the WordPress admin environment. |
| 11.8 Authoring tools | Supports | The plugin's blocks run inside the WordPress block editor, an authoring tool, and are built so that an accessible result is the default. The author supplies a label and the plugin generates the `for`/`id` pair that binds it to the control when the block is rendered, so the association cannot be broken by hand; required state becomes the native `required` attribute; a fitting `autocomplete` value is proposed automatically from the label; and the editor warns when a field's label no longer matches its name. The Fieldset block is offered for grouping related fields such as a set of radio buttons. What remains the author's responsibility is the wording of labels and legends, and whether they group related fields at all (see [Dependencies](#dependencies)). |

### Chapter 12: Documentation and Support Services

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 12.1.1 Accessibility and compatibility features | Supports | This documentation describes the plugin's features, including this Accessibility Conformance Report and a separate page on the accessibility tools a form author should use. |
| 12.1.2 Accessible documentation | Supports | Documentation is published as HTML at docs.epiph.yt. |
| 12.2.2 Information on accessibility and compatibility features | Supports | Accessibility-relevant behavior is documented here, in the [Accessibility](/form-block/accessibility) chapter and in the plugin readme. |
| 12.2.3 Effective communication | Supports | Support is offered through the WordPress.org support forum and the vendor's channels at epiph.yt. |
| 12.2.4 Accessible documentation (support) | Supports | Support documentation is provided in accessible HTML. |

### Chapter 13: ICT Providing Relay or Emergency Service Access

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 13 (all clauses) | Not Applicable | The plugin provides no relay or emergency-service functionality. |

## Dependencies

The accessibility of a form as it finally appears to a visitor depends on factors outside the
plugin's control.

Form Block follows the established WordPress conventions for accessible themes and expects the active
theme to provide:

- a **`.screen-reader-text` utility** that visually hides content. The plugin uses this class for the
  name of a form, for the labels of a split date field when the author hides them, and for the
  summary that reports how many fields are invalid. A theme that does not define the class will show
  this text as ordinary content — degraded, but nothing is lost;
- **visible focus indicators** for form controls. The plugin suppresses none — there is no
  `outline: none` anywhere in its stylesheets — but it does not override the theme's either;
- **sufficient contrast** for text and control borders. The plugin defines no text colors for its
  front-end output, so labels, values and error messages inherit the theme's colors. It ships tuned
  stylesheets for Twenty Twenty-Two through Twenty Twenty-Five.

Beyond the theme, the accessibility of a form depends on how the author builds it:

- the **wording of labels, legends and custom error messages**, which the plugin cannot supply. A
  label that does not describe its field cannot be corrected automatically;
- whether **related fields are grouped**. The plugin generates a `<fieldset>` with a `<legend>` for a
  split date field, but a set of radio buttons or checkboxes that belongs together is only grouped if
  the author wraps it in a Fieldset block;
- the **`autocomplete` value** of each field. The plugin proposes one based on the label and the
  author can adjust it, but only they know what a field really asks for;
- whether a field is marked **required**, and whether the form asks for more than it needs;
- **other plugins** on the site, which may add markup around or inside the form.

This report describes the plugin's own markup and UI. Site owners remain responsible for the overall
accessibility of their website.

## Known Issues

No outstanding accessibility issues are known at the time of this report.

## Legal Disclaimer

This Accessibility Conformance Report is a self-reported statement of the product's conformance with
the standards listed above, as of the report date and for the version stated. It is not a warranty or
a guarantee of legal compliance. Accessibility is assessed on a best-effort basis and may change
between releases.
