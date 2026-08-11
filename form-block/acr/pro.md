# Accessibility Conformance Report for Form Block Pro

**Name of Product/Version:** Form Block Pro, version 1.6.0

**Report Date:** August 12, 2026

**Product Description:** Form Block Pro is a commercial extension of the free Form Block plugin for
WordPress. It adds multi-step forms (a Section block with a progress bar), repeatable field groups (a
Repeater block), a consent-message block, conditional fields that appear and disappear depending on
other answers, drag-and-drop file uploads, prefilling fields from URL parameters, and additional field
attributes such as a custom error message and a description exposed to assistive technology. In the
admin it adds a "Respond" action to **Tools → Form Submissions** and a consent-message and license
section to **Settings → Form Block**.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Form Block Pro plugin's own user interface only — the markup its
blocks and filters add on the front end, the behavior of its scripts, its block-editor controls, and
the admin screens it extends. It does **not** cover the surrounding WordPress admin, the active theme,
other plugins, or the labels, legends and messages an author enters. Form Block Pro requires the free
Form Block plugin, which supplies the `<form>` element, the fields, their labels and the validation
pipeline; requirements met by that plugin are documented in the
[Form Block Accessibility Conformance Report](/form-block/acr/free) and are not repeated here. Because
a form is composed field by field and step by step by the author, the result also depends on the
choices they make (see [Dependencies](#dependencies)).

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested with WordPress 7.0 and the theme Twenty
Twenty-Five. Ratings were additionally cross-checked against the plugin source code (version 1.6.0).

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
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The plugin's front-end output is text and native form controls. Its two decorative graphics carry no information of their own and are hidden from assistive technology: the `<progress>` bar duplicates the step count already stated in text and is marked `aria-hidden="true"`, and the check mark and exclamation mark on a progress-bar step accompany visually hidden text naming the same state. The upload and delete icons of the drag-and-drop area are `aria-hidden` SVGs beside a real button and a named remove button. In the admin, the close icon of the respond dialog is `aria-hidden` next to the screen-reader text "Close". |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content. |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | Every step of a multi-step form is a `role="group"` region named by its section title, so a screen reader announces which part of the form it is in. The progress bar is an ordered list whose entries are real buttons; the current step carries `aria-current="step"`, and completed, erroneous and not-yet-reachable steps each carry their state as text in addition to a glyph. Each repeater item is a `role="group"` named "Item *n*", and its remove button is named "Remove item *n*", so several identical rows are distinguishable. When an item is added or removed, the plugin rewrites the whole reference graph of that item — every `id`, `for`, `aria-describedby` and `aria-errormessage` token — so no two items share an identifier and every description and error message resolves to the field it belongs to. A field description added in the editor is inserted exactly once per field and is attached to the `<fieldset>` when the field is a group of inputs. The consent-message block emits a real checkbox with a generated `for`/`id` pair, and its required marker is `aria-hidden` because the state is carried by the native `required` attribute. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | Sections, repeater items and fields are emitted in the order the author placed them, and the plugin adds no visual reordering of its own. A step that is not currently shown is hidden from the accessibility tree as well as visually, so the reading order always matches what is on screen. The drag-and-drop area is inserted into its field's container ahead of the file input it proxies, and its button names itself after that field, so it is understandable at the point it is encountered. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No instruction relies solely on shape, size, visual location, or sound. Progress-bar steps are identified by their number and title, not by their position in the row, and the drag-and-drop area names its alternative in words ("Drag and drop files here or browse files"). |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | The states of a progress-bar step are never carried by color alone. A completed step shows a check mark and the visually hidden word "completed", a step with validation errors shows an exclamation mark and the text "contains errors", and a step that cannot be reached yet is marked `aria-disabled` and carries the text "not yet available". Conditional fields in the block editor are marked with a "Conditional" text badge in addition to their outline. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | Every control the plugin adds is a native `<button>`: the previous/next navigation of a multi-step form, each step of the progress bar, the "Add item" and "Remove item" controls of a repeater, and the "browse files" control of the drag-and-drop area. Files can therefore be selected entirely from the keyboard; the file input the drop area proxies is taken out of the tab sequence so it cannot become an invisible tab stop. In the admin, the respond dialog is fully operable from the keyboard, including its rich-text editor. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | On the front end the plugin adds no focus-trapping logic; focus can move away from every control with standard keys. The admin respond dialog deliberately cycles Tab within itself, as a modal dialog should, and can always be left with Escape or its close, cancel and submit controls — each of which closes the dialog, restores focus to the control that opened it, and clears the `inert` state of the page behind it. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no single-character key shortcuts. Enter and Escape are used only in their conventional roles and only while the relevant component has focus. |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Not Applicable | The plugin imposes no time limit: a multi-step form can be completed at any pace, steps do not expire, and values entered in earlier steps remain in the document. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Supports | The plugin produces no blinking, scrolling, or auto-updating content. Its only motion is the fade between two steps and the growth of the progress bar, both of which run once per user action and are disabled entirely when `prefers-reduced-motion: reduce` is set. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism. A multi-step form shows one step at a time, which shortens rather than lengthens what has to be traversed, and the progress bar sits once at the top of the form. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Supports | Page titles are supplied by WordPress and the theme. Where a multi-step form updates the document title to reflect the current step, it combines the step name with the page's own title rather than replacing it, restores the original title when the form is reset, and does so only for the form the visitor is interacting with. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order, and focus is never dropped to the document body. On every step transition — moving forward, moving back, jumping from the progress bar, resetting the form after a successful submission, and a dependency hiding the step currently shown — focus moves to the container of the step that becomes visible, so the step is announced by name before its first field is reached. After a repeater item is removed, focus moves to a neighboring item's remove button or to the add button; after a file is removed from the upload list, focus moves to a neighboring control. When the maximum number of repeater items is reached the add button stays in place and becomes `aria-disabled` rather than being hidden, so focus is not lost from under the user. In the admin, opening the respond dialog moves focus into it and closing it returns focus to the "Respond" link that opened it. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | The plugin emits no links of its own on the front end; a link inside a consent message is written by the site owner. In the admin, the "Respond" action is named by the submission row it belongs to. |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | Controls act on the standard `click`/up event; no functionality is triggered on the down-event. Dropping a file completes on release and can be abandoned by dragging away from the drop area. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | Each control's accessible name starts with its visible text. The upload button reads "browse files" and is named "browse files for *field*"; a progress-bar step is named by its number and title followed by its state; a repeater's remove button is named "Remove item *n*" beside its visible icon. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress/the theme; all of its own strings, including every announcement, are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. Moving into a step or onto a progress-bar step changes nothing by itself. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Changing a value never submits the form or moves the visitor to another step. Confirming a choice in a `<select>` with Enter is explicitly excluded from the shortcut that advances a step, so committing a selection stays a selection. A conditional field appearing or disappearing changes the content of the current step but neither moves focus nor submits anything, and the change is announced (see 4.1.3). Prefilling fields from URL parameters happens once, before the visitor interacts with the form. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Supports | When a step is validated, every invalid field is marked `aria-invalid` and linked to its message with `aria-describedby` before focus moves anywhere, so the message is read out with the field. If exactly one field is at fault, focus moves to it; if several are, the plugin leaves the summary the free plugin renders to speak instead of stealing focus, so the visitor learns how many fields need attention. A step that contains errors is marked in the progress bar with text and a glyph, so the problem can be located after moving on. When a repeater item is removed or a step is left, error messages and the `aria-describedby` tokens pointing at them are removed together, so no reference is left dangling. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | Labels come from the free plugin; Form Block Pro adds instructions on top of them and never removes one. A field can be given a description that is attached with `aria-describedby`, a custom error message replacing the generic one, and a required state that is preserved through the drag-and-drop upload and restored when a conditional field becomes visible again. The dropzone states in words what it accepts and how to use it without dragging. In the admin, each setting has a label and a description tied to it with `aria-describedby`, including a note that a stored license key is displayed masked. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Supports | A multi-step form asks for nothing twice. All steps belong to a single form and every value stays in the document while the visitor moves between steps, so going back and forth never loses an answer and nothing has to be retyped. A field hidden by a dependency is cleared, but only because it no longer applies. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The plugin adds native controls wherever possible and exposes state for the rest. A step region is a named `role="group"`; a step button exposes `aria-current="step"` when it is the current one and `aria-disabled` while it cannot be reached, and the click handler honors that state so the announced state matches the behavior. A section without a title falls back to a generated name so `role="group"` is never nameless and a step button is never announced as a bare number. The repeater's add button exposes `aria-disabled` at the maximum. The `<progress>` element, whose value is a purely visual scale, is hidden from assistive technology rather than reporting a number that contradicts the visible "Step 1 of 3". In the admin, the respond dialog is a `role="dialog"` with `aria-modal="true"` labeled by its heading, with everything outside it made `inert`, and the rich-text editors of both the dialog and the consent-message setting are given accessible names so the iframe an author types into is not anonymous. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. The progress bar switches from a horizontal to a vertical arrangement below 600 px, which follows the available width rather than the device orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Supports | Autocomplete values are handled by the free plugin and are preserved by everything Form Block Pro adds: a field keeps its `autocomplete` value when it is cloned into a new repeater item, when it is hidden and shown again by a dependency, and when it is prefilled from a URL parameter. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The plugin defines no text colors for its front-end output except on the progress bar, where the marker's foreground and background are custom properties that fall back to the theme's own contrast/base presets and then to literal values (`#1e1e1e` on `#fff`) when a theme defines neither, so the pairing can never collapse to unstyled text. The error state uses white on `#d63638` (approximately 4.7:1) and exposes its foreground as a custom property so a site changing the background can keep the pairing. The block-editor badge marking a conditional block uses white on the editor's alert red (approximately 5.7:1). The admin UI inherits the WordPress admin palette. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The plugin sets no fixed pixel font size for its visible front-end output; the progress bar, its step titles and the drag-and-drop area are laid out with flexible boxes that grow with their content. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text is real text; the plugin uses no images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | Front-end output is fluid: the progress bar rearranges itself into a vertical list on narrow viewports, repeater items and the drop area wrap rather than scroll, and no container has a fixed width. In the admin, the respond dialog scrolls within itself instead of pushing content out of the viewport. Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The graphical parts of the progress bar are the only user-interface graphics the plugin draws. Their fill inherits the theme's contrast color and falls back to `#1e1e1e`, and the unreached track is a translucent black over the page background; the error marker's `#d63638` reaches approximately 4.7:1 against white. The plugin overrides no control borders or focus indicators (see 2.4.7). |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | The plugin sets no line-height, letter-spacing or word-spacing on its front-end output, and no container has a fixed height that would clip text when spacing is increased. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Supports | The plugin reveals no additional content on hover or focus. Conditional fields appear in response to a value, not to a pointer, and stay until the value changes back. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | Each step of a form is named, and that name is used consistently for the step region, its entry in the progress bar and its announcement on arrival. Repeater items and their remove buttons are numbered so they can be told apart. The plugin introduces no headings of its own on the front end, because the correct heading level depends on the page around the form and cannot be known by the plugin; the admin dialog uses an `<h2>` that also names the dialog. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin suppresses no focus indicator — there is no `outline: none` anywhere in its stylesheets — so every control shows the indicator provided by the theme on the front end and by WordPress in the admin. Elements that are focused programmatically rather than by the user, such as a step container, are given `tabindex="-1"` so they receive focus without entering the tab sequence. The file input behind the drag-and-drop area is removed from the tab sequence so it cannot be focused without a visible indicator. Front-end focus indicators are ultimately supplied by the theme (see [Dependencies](#dependencies)). |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky headers, overlays or floating elements above focusable controls on the front end. The admin respond dialog has a sticky header of its own; the controls in its scrollable area reserve space above themselves so a focused control is never scrolled underneath it. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Supports | The drag-and-drop upload is the plugin's only drag interaction, and it is not the only way to do anything: the same area contains a "browse files" button that opens the file dialog, and a file added either way is removed with the same button. No functionality requires dragging. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | The controls the plugin adds are laid out at or above 24 × 24 px. The circular marker of a progress-bar step, the smallest of them, is sized `max(1.5rem, 24px)` so it keeps the minimum even on a theme that scales the root font size down; the remaining controls are theme-styled buttons at their normal size. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the page; its own strings are localized to the site language. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | A multi-step form presents its steps in the same order on every visit, the progress bar always sits at the top of the form, and the previous/next controls always occupy the same place at the end of a step. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | Components with the same function are identified the same way everywhere: every step of every form is announced with the same wording, every repeater uses the same names for its add and remove controls, and every upload area uses the same button text and the same announcements. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | The help mechanisms of the free plugin are unchanged and extended in the same style: a description under every field on the settings screen, a help button beside each attribute in the block editor, and a "Documentation" link in the plugin's row on the Plugins screen. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Supports | Messages name what is wrong and what to do about it. The validation messages of the free plugin are reused unchanged when a step is validated, and authors can replace the generic message of any field with a more specific one. The repeater states its own limits in words — "Please add at least *n* items", "Please do not add more than *n* items", "The maximum number of items has been reached" and, when the last item cannot be removed, why. |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal or financial transactions and stores no data the visitor is responsible for maintaining. What a form is used for is the author's decision. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Supports | The plugin requires no cognitive function test: it adds no CAPTCHA and no puzzle to a form. The license key field in the admin supports paste and password managers. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | Everything that changes without moving focus is announced through a polite live region that is part of the page from the start, so it is reported reliably when it appears. A multi-step form announces the step it moved to and its title; a repeater announces reaching its maximum and why the last item cannot be removed; the upload area announces each file that is added or removed together with the resulting number of files; and a conditional field announces by name when it appears or is no longer needed. Where a change moves focus instead — arriving at a new step, or a single invalid field — the announcement rides on the focus change rather than competing with it. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Steps, repeater items and upload lists are exposed as named regions and controls, state is carried in ARIA rather than in styling, and every change that does not move focus is announced through a live region (see 4.1.3). |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed font sizes; the few colors the plugin defines have literal fallbacks and meet the contrast minimum (see 1.4.3). |
| 4.2.3 Usage without perception of color | Supports | Step states carry text and a glyph in addition to color (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | Every control is a native button operable from the keyboard, no functionality requires dragging, and target sizes stay at or above the minimum (see 2.1.1, 2.5.7 and 2.5.8). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | A long form is divided into short steps with a visible progress indicator, values are preserved when moving between steps, no time limit applies, limits and errors are stated in plain language, and motion is disabled when the user prefers it. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls. |

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
| 5.9 Simultaneous user actions | Supports | No operation requires simultaneous user actions; dragging a file is always paired with a button that does the same thing. |

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
| 9.5 Non-interference | Supports | The plugin uses no color-only cues, flashing, audio, or timing that would interfere across the page. Its live regions and its document-title updates are scoped to the form they belong to, so two multi-step forms on one page do not announce each other's steps. |
| 9.6 WCAG conformance requirements | Supports | The output meets the WCAG 2.2 Level A and AA conformance requirements. |

### Chapter 10: Non-web Documents

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 10 (all clauses) | Not Applicable | The plugin produces no non-web documents. Files uploaded through the drag-and-drop area are passed on unchanged; their accessibility is the responsibility of whoever created them. |

### Chapter 11: Software

The plugin's user interface (its block-editor controls and the admin screens it extends) is web-based
software rendered in the WordPress admin. Requirements that correspond to WCAG map to the
[WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fixed fonts and honors the user's platform preferences: both the transition between steps and the animation of the progress bar are disabled under `prefers-reduced-motion: reduce`. The admin UI otherwise inherits the WordPress admin environment. |
| 11.8 Authoring tools | Supports | The plugin's blocks run inside the WordPress block editor, an authoring tool, and are built so that an accessible result is the default. Section, repeater and consent-message blocks and their editor controls are named, a section without a title produces a warning in the editor and still receives a generated accessible name on the front end, blocks carrying a condition are marked with a text badge so the author can see which parts of a form are conditional, and the identifiers that tie labels, descriptions and error messages to their fields are generated at render time and cannot be broken by hand. What remains the author's responsibility is the wording of section titles, field descriptions, custom error messages and the consent text (see [Dependencies](#dependencies)). |

### Chapter 12: Documentation and Support Services

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 12.1.1 Accessibility and compatibility features | Supports | This documentation describes the plugin's features, including this Accessibility Conformance Report and a separate page on the accessibility tools a form author should use. |
| 12.1.2 Accessible documentation | Supports | Documentation is published as HTML at docs.epiph.yt. |
| 12.2.2 Information on accessibility and compatibility features | Supports | Accessibility-relevant behavior is documented here, in the [Accessibility](/form-block/accessibility) chapter and in the plugin readme. |
| 12.2.3 Effective communication | Supports | Support is offered through the vendor's channels at epiph.yt. |
| 12.2.4 Accessible documentation (support) | Supports | Support documentation is provided in accessible HTML. |

### Chapter 13: ICT Providing Relay or Emergency Service Access

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 13 (all clauses) | Not Applicable | The plugin provides no relay or emergency-service functionality. |

## Dependencies

The accessibility of a form as it finally appears to a visitor depends on factors outside the
plugin's control.

Form Block Pro requires the free **Form Block** plugin and builds on it. That plugin supplies the
`<form>` element, the fields, their labels, the required markers and the validation pipeline; its
conformance is documented separately in the
[Form Block Accessibility Conformance Report](/form-block/acr/free).

Form Block Pro follows the established WordPress conventions for accessible themes and expects a
**`.screen-reader-text` utility** that visually hides content to be defined. The plugin uses this class
for its live regions, for the state of a progress-bar step, for the title of a step whose section has
no title of its own, and for the screen-reader text of icon-only admin controls. It relies on the
definition WordPress ships in `wp-block-library`, which is enqueued on the front end, or on the
theme's own. A site that dequeues that stylesheet and uses a theme which does not define the class
will render these strings as visible text — degraded, but nothing is lost.

It further expects the theme to provide:

- **visible focus indicators** for form controls and buttons. The plugin suppresses none — there is no
  `outline: none` anywhere in its stylesheets — but it does not override the theme's either;
- **sufficient contrast** for text and control borders. Apart from the progress bar the plugin defines
  no colors, and even there its custom properties give the theme the first say and fall back to
  literal values only when the theme offers none.

Beyond the theme, the accessibility of a form depends on how the author builds it:

- the **titles of the sections** of a multi-step form. They name the step region, its entry in the
  progress bar and its announcement on arrival. The plugin warns in the editor when a section has no
  title and generates one so nothing is nameless, but a generated "Section 2" says less than a real
  title;
- the **consent message**, both the global one and the per-block override. It is rich text authored by
  the site owner and it becomes the label of the consent checkbox, so its wording is what a screen
  reader announces for that checkbox. A link placed inside it — for example to the privacy policy —
  remains a working link and does not toggle the checkbox, but it becomes part of the checkbox's
  accessible name and makes it longer;
- the **wording of field descriptions and custom error messages**, which the plugin exposes to
  assistive technology but cannot write;
- which **fields are made conditional**, and whether a form still makes sense when they are hidden;
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
