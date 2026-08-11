# Accessibility Conformance Report for Block Control

**Name of Product/Version:** Block Control, version 1.6.1

**Report Date:** August 12, 2026

**Product Description:** Block Control is a free WordPress plugin that lets authors decide under
which circumstances a block is displayed. It adds a **Visibility** panel to the inspector sidebar of
every block in the block editor, where a block can be hidden by device type, login status, date
range, user role, page type, feed, post of a post type, or page number within numbered pages. It
also registers a **Screen Reader Text** inline format that marks selected text as available to
screen readers only. Blocks that match a condition are removed from the output on the server; the
plugin has no settings screen and renders no user interface of its own on the front end.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Block Control plugin's own user interface only — its Visibility
panel, its Screen Reader Text format button, the markers it draws in the editor canvas, and the two
attributes it adds to block markup on the front end. It does **not** cover the surrounding WordPress
block editor, the active theme, other plugins, or the content an author chooses to hide. Because the
plugin is an extension of an authoring tool, the accessibility of the published page also depends on
how its options are used (see [Dependencies](#dependencies)).

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested with WordPress 7.0 and the theme Twenty
Twenty-Five. Ratings were additionally cross-checked against the plugin source code (version 1.6.1).

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
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The plugin renders two graphics, both with a text alternative. The eye icon that marks a block as having visibility settings is accompanied by visually hidden text ("Visibility settings apply to this block.") inside the panel's toggle button, so the state is part of that button's accessible name rather than being conveyed by the icon alone. The icon-only Screen Reader Text button in the block toolbar takes its accessible name from its `title` ("Screen Reader Text"), which the editor renders as both the button label and its tooltip. |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content of its own. |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media of its own. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media of its own. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | Every set of related controls is a `<fieldset>` with a `<legend>`: the device toggles, the user roles, the page types, the numbered pages, and one group per post type. The login status options are a radio group, for which the editor's `RadioControl` supplies its own fieldset and legend. Each of the two date rows associates its button with its row label through `aria-labelledby` and with its explanatory sentence through `aria-describedby`, and the page numbers field is described by its help text. Consequently no control is announced without the group it belongs to — which matters in particular for the "All" checkbox, of which there is one per post type. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | The panel is emitted in a logical DOM order that matches its visual order, and the groups appear in a fixed sequence. Controls that are revealed by another control — the two date fields, the page numbers field — are inserted directly after the control that reveals them. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No label or instruction refers to shape, size, visual location, or sound. The marker drawn around a block that is currently hidden by date is a supplementary cue; the authoritative state is the Visibility panel, which exposes it as text. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | The plugin conveys no information by color alone. A block hidden by date is marked with a dashed outline and screen-reader-only text with a dotted underline — both are differences in line style rather than in color, and both duplicate information that is available as text in the panel. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | All functionality is available from the keyboard. The panel is built exclusively from the editor's own components — toggles, radio buttons, checkboxes, buttons, a date picker in a dropdown, and a token field — which render native form controls. The checkbox lists for roles, page types, posts and numbered pages are height-limited and scroll, but every checkbox in them is in the tab sequence and is scrolled into view when it receives focus, so no content is reachable by pointer only. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | The plugin implements no focus-trapping logic. The only component that contains focus is the editor's date picker popover, which is dismissed with Escape and returns focus to the button that opened it. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no single-character key shortcuts. |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Not Applicable | The plugin sets no time limit for completing any task. The hide-by-date option schedules when content is published or withdrawn; it does not limit the time available to the person using the interface. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Not Applicable | The plugin produces no moving, blinking, scrolling, or auto-updating content, and its stylesheet declares no animation or transition at all. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism. It contributes a single collapsible panel to the inspector sidebar, which is collapsed by default, so its controls do not enter the tab sequence until they are needed. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Not Applicable | The plugin adds no screen of its own. Titles of the editor and of the admin screens it extends are provided by WordPress. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order. Focus is preserved across state changes: removing a date moves focus to the corresponding date button instead of dropping it to the document body, and marking a block as hidden by date changes a class on the existing block element rather than wrapping it, so the panel is never re-created and neither collapses nor loses focus while settings are edited. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | The plugin renders a single link, "Documentation" in its row on the Plugins screen. Its accessible name identifies both its destination and its behavior: "Documentation (opens in a new tab)". |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | Controls act on the standard `click`/up event; no functionality is triggered on the down-event. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | Wherever an accessible name extends the visible label, the visible text is contained in it and comes first: "Hide date: Set date", "Remove hide date", "Remove display date", "Documentation (opens in a new tab)", and the panel toggle "Visibility Visibility settings apply to this block." Speech input users can therefore address every control by its visible text. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress or the theme; all of its own strings are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Changing a setting updates the block attribute and, where applicable, the marker in the canvas; no change of context occurs. Enabling "Hide by date" or selecting "Specific page(s)" reveals further controls immediately after the control that was operated, which adds content rather than changing context. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Supports | The only input that can be rejected is the page numbers field, which accepts numbers only. A rejected entry is announced in text through the editor's assertive live region, and the field's help text states the constraint before an error can occur. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | Every control has a visible label, and instructions are provided wherever a constraint or a non-obvious consequence exists: each date field is accompanied by a sentence describing what it does, the page numbers field states its separator and that only numbers are allowed, and the option to hide content from screen readers explains that it does not hide the content visually and should not be used for content containing links or buttons. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Not Applicable | The plugin has no multi-step process that asks for the same information more than once. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The interface is built from the editor's components, which render native controls with their states exposed. Where the plugin adds semantics itself it uses native markup where possible — `<fieldset>` and `<legend>` for the groups — and ARIA only where markup cannot express the relationship: `aria-labelledby` and `aria-describedby` on the date buttons, `aria-expanded` and `aria-haspopup="dialog"` on the dropdown toggles, and `aria-label` to distinguish the two otherwise identically named remove buttons. Every checkbox has a non-empty accessible name; posts without a title fall back to "(no title)". |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media of its own. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video of its own. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Not Applicable | The plugin has no input fields that collect information about the user; its fields configure a block, not a person. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The plugin defines a text color for one element only, the help text below the date fields, at `#757575` on the white sidebar (≈ 4.6:1, above the 4.5:1 minimum); every other label inherits the WordPress admin palette. It reduces the opacity of no element, so the contrast of content shown in the editor canvas is never lowered by the plugin — a block hidden by date and text marked as screen-reader-only both keep their full contrast and are marked by an outline and an underline instead. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The panel inherits the editor's type scale; the plugin declares a single font size, `12px` for the help text, matching the editor's own help styling, and no container prevents text from growing. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text is real text; the plugin ships no images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | The panel is laid out by the editor's sidebar and uses no fixed-width container. The checkbox lists are constrained in height only and scroll within themselves, so no content is lost. Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The plugin overrides no control borders and suppresses no focus indicator; its stylesheet contains no `outline: none` and no `box-shadow: none`. The one boundary it draws itself, the dashed outline marking a block hidden by date, uses the admin theme color (`#007cba` by default, ≈ 4.6:1 against white), above the 3:1 minimum. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | The plugin constrains neither line height nor letter or word spacing. The only height-limited containers are the scrollable checkbox lists, which scroll rather than clip when text grows. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Not Applicable | The plugin defines no hover- or focus-triggered content of its own. The tooltip on the Screen Reader Text toolbar button is rendered by the editor's own button component. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | Group legends describe what the group does ("Hide device types", "Hide for user roles", "Hide for specific page types", "Hide on numbered pages", and "Hide for post type …" naming the post type). The two date rows, which are visually identical, are distinguished by their labels "Hide date:" and "Display date:", and their buttons and remove buttons carry those labels in their accessible names. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin suppresses no focus indicator and inherits the indicators of the WordPress admin and the editor's components throughout. |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky, floating, or overlaying elements. Its controls are laid out in the flow of the inspector sidebar; the date picker opens in a popover positioned by the editor, which does not cover the control that opened it. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Not Applicable | The plugin has no drag-based interactions. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | The checkboxes, toggles and radio buttons are the editor's own controls, whose size the plugin does not modify, and each is paired with a clickable label. The two link-styled date buttons are the only targets the plugin styles itself; they are given a minimum height of 24 px so they meet the 24 × 24 px minimum, and the remove buttons next to them are standard compact buttons of 32 px. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the surrounding page; all of its strings are localized to the site language. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | The Visibility panel appears in the same place in the inspector sidebar for every block, and presents its groups in the same order every time. Groups that do not apply to the current context — the post type groups outside their post type — are omitted rather than reordered. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | The same function is labeled the same way throughout: every block uses the identical panel, the same wording for the same option, and the same eye icon with the same hidden text to indicate that settings apply. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | Help is offered consistently: instructions sit directly below the control they describe in every group that needs one, and a "Documentation" link is available in the plugin's row on the Plugins screen. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Supports | The only input that can be rejected is the page numbers field. Its help text names the expected format and the accepted values, so the correction is described before and after the error occurs (see 3.3.1). |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal, financial, or data-commitment transactions; every setting is reversible and can be changed again at any time before or after saving. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Not Applicable | The plugin provides no authentication of its own; sign-in is handled by WordPress. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | A change of state that does not move focus is announced through a live region: when the last remaining setting of a block is removed, the plugin announces "No visibility settings apply to this block anymore." This complements the panel's toggle button, whose accessible name states the opposite condition while settings are active. Rejected entries in the page numbers field are announced by the editor's own live region. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Every control is a native control with a programmatic name, role, state and group; state changes that do not move focus are announced through a live region (see 4.1.3). |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed-width containers; the plugin reduces the opacity of nothing and defines only one text color, which exceeds the contrast minimum (see 1.4.3 and 1.4.11). |
| 4.2.3 Usage without perception of color | Supports | Information is never conveyed by color alone (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | All functionality is keyboard-operable with native controls, targets meet the minimum size, and no operation requires dragging or a gesture (see 2.1.1, 2.5.7 and 2.5.8). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | The panel is identical for every block, groups its options under descriptive legends, and explains the options whose effect is not self-evident — in particular the option to hide content from screen readers. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls, and stores no personal data. |

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

The plugin's editor interface and the markup it adds to the front end are web content. Conformance is
documented in the [WCAG 2.2 Report](#wcag-2-2-report) above; EN 301 549 clauses 9.1–9.4 map directly
to the corresponding WCAG 2.2 Success Criteria.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 9.1 – 9.4 (WCAG 2.2 A & AA) | See WCAG 2.2 Report | Refer to Tables 1 and 2 above; all Level A and AA criteria are rated Supports or Not Applicable. |
| 9.5 Non-interference | Supports | The plugin uses no color-only cues, flashing, audio, or timing that would interfere across the page. On the front end it removes blocks entirely instead of hiding them visually, so no content is left behind that assistive technology could still reach. |
| 9.6 WCAG conformance requirements | Supports | The output meets the WCAG 2.2 Level A and AA conformance requirements. |

### Chapter 10: Non-web Documents

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 10 (all clauses) | Not Applicable | The plugin produces no non-web documents (e.g. PDF or Office files). |

### Chapter 11: Software

The plugin's user interface is web-based software rendered inside the WordPress block editor.
Requirements that correspond to WCAG map to the [WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fixed fonts, colors or sizes beyond the single help-text style, and inherits the user's WordPress admin color scheme, including the admin theme color used for its own marker. It defines no animation that would need to be reduced. |
| 11.8 Authoring tools | Supports | Block Control is an extension of an authoring tool, and this clause is the one most relevant to it. The plugin does not alter the markup an author writes: content that stays visible is passed through untouched, and content that matches a condition is removed from the output entirely rather than hidden with CSS, so nothing is left in the page that assistive technology could still announce. Accessibility information in the retained markup is therefore preserved. Two options do affect the accessibility of the result and are treated accordingly. "Hide for screen readers" adds `aria-hidden="true"` to the outer element of a block — applied once, to that element only, so the surrounding markup stays valid — and the option explains in the editor that it does not hide content visually and must not be used on content containing links or buttons, which would otherwise remain focusable while removed from the accessibility tree. The Screen Reader Text format marks text as available to assistive technology only, using the class convention established by WordPress themes (see [Dependencies](#dependencies)). Both are deliberate authoring decisions whose correct use remains the author's responsibility. |

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

The accessibility of a page as it finally appears to a visitor depends on factors outside the
plugin's control.

Block Control follows the established WordPress conventions for accessible themes and expects the
active theme to provide:

- a **`.screen-reader-text` utility** that visually hides content and reveals it again on `:focus`.
  Text marked with the Screen Reader Text format carries this class in addition to the plugin's own,
  so it is hidden by the same rule the theme already uses for its skip links. A theme that does not
  define the class will display the text to everyone;
- **visible focus indicators** for links and form controls. The plugin suppresses none — there is no
  `outline: none` and no `box-shadow: none` anywhere in its stylesheet — but it does not override
  the theme's either.

Because the plugin extends an authoring tool, the following also affect the result:

- **how the visibility options are used**. Hiding a block for one group of visitors and not another
  changes what the page contains; the plugin makes the removal complete and valid, but whether the
  remaining page is still coherent is an editorial decision;
- **the use of "Hide for screen readers"** on content that contains links, buttons or form fields.
  Such content stays visible and focusable while being removed from the accessibility tree, which is
  a conflict the plugin warns about but cannot detect on the author's behalf;
- **the use of the Screen Reader Text format**, whose text should add information that is otherwise
  conveyed visually, rather than duplicate or contradict it;
- **the theme and other plugins**, which supply the markup surrounding the blocks Block Control
  keeps or removes.

This report describes the plugin's own markup and UI. Site owners remain responsible for the overall
accessibility of their website.

## Known Issues

No outstanding accessibility issues are known at the time of this report.

## Legal Disclaimer

This Accessibility Conformance Report is a self-reported statement of the product's conformance with
the standards listed above, as of the report date and for the version stated. It is not a warranty or
a guarantee of legal compliance. Accessibility is assessed on a best-effort basis and may change
between releases.
