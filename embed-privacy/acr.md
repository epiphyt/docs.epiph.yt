# Accessibility Conformance Report for Embed Privacy

**Name of Product/Version:** Embed Privacy, version 1.14.0

**Report Date:** August 12, 2026

**Product Description:** Embed Privacy is a free WordPress plugin that prevents external embeds
(videos, posts, maps and similar third-party content) from loading until the visitor explicitly
agrees. Each blocked embed is replaced by a consent overlay naming the embed provider and linking to
its privacy policy. The plugin provides an admin settings screen under **Settings → Embed Privacy**,
an "Embed Provider" custom post type for managing providers, and the `[embed_privacy_opt_out]`
shortcode, which lets visitors enable or disable providers globally.

**Contact Information:** Matthias Kittsteiner, https://epiph.yt/en/contact/

**Notes:** This report covers the Embed Privacy plugin's own user interface only — its consent
overlay, its opt-out shortcode, its settings screen and the embed provider admin screens. It does
**not** cover the surrounding WordPress admin, the active theme, other plugins, or the third-party
content that is loaded once a visitor consents. Accessibility of the final page also depends on the
theme and site configuration (see [Dependencies](#dependencies)).

**Evaluation Methods Used:** Manual keyboard-only testing; screen reader testing with VoiceOver +
Safari on macOS 26. Manual color-contrast checks. Tested with WordPress 7.0 and the theme Twenty
Twenty-Five. Ratings were additionally cross-checked against the plugin source code (version 1.13.1).

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
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Supports | The provider logo and the thumbnail of the blocked content are CSS background images on empty elements marked `aria-hidden="true"`, so they are correctly exposed as decorative; the provider name is always present as text in the overlay. The only icon-only control, the button that removes a provider's background image in the admin, carries a `screen-reader-text` name. |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) | Not Applicable | The plugin produces no audio-only or video-only content of its own. Media alternatives for embedded third-party content are the responsibility of the respective provider (see [Dependencies](#dependencies)). |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) | Not Applicable | The plugin produces no prerecorded media of its own. |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) | Not Applicable | The plugin produces no prerecorded media of its own. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Supports | The overlay is a paragraph of explanatory text, a checkbox with an associated `<label for>`, an optional link to the content, and a `<button>` that loads the embed. The opt-out shortcode wraps its checkboxes in `role="group"` with `aria-labelledby` pointing at its heading, whose level is configurable via the `headline_level` attribute. The settings screen groups its options into `<h2>` sections, and every field is tied to its label via `for`/`id` and to its description via `aria-describedby`. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | Supports | Content is emitted in a logical DOM order, and the overlay reads correctly without CSS. The footer link is last both in the DOM and visually. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | Supports | No instruction relies solely on shape, size, visual location, or sound. Where the admin describes the direct link by its position ("on the lower right corner"), its function is given as well. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | Supports | The plugin conveys no information by color alone. Links inside the overlay inherit the same color as the surrounding text and are distinguished by the theme's link underline (see [Dependencies](#dependencies)); the clipboard confirmation on the settings screen always states its outcome in words. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | Not Applicable | The plugin plays no audio. By design, embedded content is loaded only after an explicit user action, so nothing plays automatically on page load. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Supports | Every embed can be loaded from the keyboard through a real `<button>` ("Display content from *provider*") that responds to both Enter and Space. The checkbox, the privacy-policy link, the direct link and all opt-out checkboxes are native controls. In the admin, the scrollable support-data block is focusable (`tabindex="0"`) so it can be scrolled with the keyboard. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | Supports | No focus-trapping logic is present; focus can move away from every control with standard keys. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | Not Applicable | The plugin implements no single-character key shortcuts. |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | Not Applicable | The plugin sets no time limit for completing any task. The only timed behavior is the clipboard confirmation on the settings screen, which clears itself after ten seconds; it is a confirmation, not a step in a process, and the support data it refers to remains on the page. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Not Applicable | The plugin produces no moving, blinking, scrolling, or auto-updating content. Its only animations are short color and opacity transitions on the overlay, which are disabled under `prefers-reduced-motion: reduce`. |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | Not Applicable | The plugin produces no flashing content. |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | Supports | The plugin introduces no repeated blocks of content that would require a bypass mechanism; page-level skip links and landmarks are provided by WordPress and the theme. Each overlay contributes a single control to the tab sequence, and that control is removed once the embed has been loaded. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | Supports | The settings screen renders its title in an `<h1>`; front-end page titles are supplied by WordPress and the theme. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Supports | Focus order follows the logical DOM order. After an embed is loaded, focus moves into the loaded content and the now-obsolete button is removed, so no stale control remains in the tab sequence. In the admin image field, focus moves to the remove button after an image has been chosen and back to the upload button after it has been removed, so it is never dropped to the document body. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | Supports | Links are self-describing: "Learn more in *provider*'s privacy policy (opens in a new tab)", "Open *title* directly" and, in feeds, "Open embedded content from *provider*". |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | Not Applicable | No functionality relies on path-based or multipoint gestures. |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Supports | Controls act on the standard `click`/up event; no functionality is triggered on the down-event. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | Supports | Each control's accessible name is its visible label: the "Always display content from *provider*" checkbox, the opt-out checkboxes, and the admin buttons all take their name from the visible text. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | Not Applicable | No functionality is operated by device or user motion. |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Supports | The plugin sets no `lang` attribute and does not interfere with the page language declared by WordPress/the theme; its own strings, including the default provider descriptions, are localized to the site language. |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | Supports | No change of context occurs when any control receives focus. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | Supports | Ticking "Always display content from *provider*" loads that provider's embeds immediately and moves focus into the loaded content. The label states this behavior before the control is used, which is the condition this criterion requires. The settings screen and the provider editor change no context on input. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | Not Applicable | The plugin validates no user input and reports no input errors; its settings are checkboxes and the provider fields accept free text. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Supports | Every field has an associated label, plus a visible `<p class="description">` instruction where relevant, which is linked to its control via `aria-describedby`. The background-image field, which is operated by buttons rather than a labelable control, is exposed as a `role="group"` labeled by the field title. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | Not Applicable | The plugin has no multi-step process that asks for the same information more than once. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | Supports | The UI is built from native HTML controls. Where native semantics are not sufficient, correct ARIA is used: `role="status"` for the load confirmation and the admin status messages, `role="group"` with `aria-labelledby` for the opt-out list and the background-image field, `aria-describedby` for field descriptions, and `aria-hidden="true"` for the decorative provider logo. Iframes generated for Elementor video widgets are given a `title`. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) | Not Applicable | The plugin produces no live media of its own. |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) | Not Applicable | The plugin produces no prerecorded video of its own. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | Supports | The plugin locks neither content nor UI to a single display orientation. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | Not Applicable | The plugin has no input fields that collect information about the user; its fields configure the site, not a person. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | Supports | The overlay renders `#eee` text on a `rgba(0, 0, 0, .7)` layer above the provider thumbnail. The worst case is a fully white thumbnail, which composites to `#4D4D4D` and yields a ratio of approximately 7.3:1 — above the 4.5:1 minimum even for the smaller footer text. On hover and focus the text lightens to `#fff`, increasing the ratio further. The admin UI inherits the WordPress admin palette. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | Supports | The plugin sets no fixed pixel font sizes; the only font-size declaration is relative (`.85em` for the footer). The overlay uses `min-height`, so it grows with its content instead of clipping it. Confirmed at 200 % zoom. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | Supports | All text is real text. The provider logos are logotypes, which this criterion exempts, and the provider name is additionally present as text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | Supports | The overlay is fluid (`width: 100%`, `max-width: 100%`) with no fixed-width container. The one width-constrained element, the support-data block in the admin, uses `max-width` and scrolls within itself. Confirmed at 320 px / 400 % zoom. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Supports | The plugin overrides no control borders. The focus indicators it does define — on the admin image-removal button and the support-data block — use `#2271b1` from the WordPress admin palette against white (≈ 4.6:1), well above the 3:1 minimum, with a white inner ring so they stay visible over arbitrary images. Under `forced-colors: active` the overlay gains a border in the system text color so its boundary remains perceivable once its background color is overridden. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | Supports | No inline styles constrain line-height, letter- or word-spacing in a way that would clip text; the overlay grows with its content. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Not Applicable | Hovering or focusing the overlay changes only its colors; no additional content is revealed. The plugin uses no custom tooltips or `title`-based popovers. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | Not Applicable | This is a site-level requirement about locating pages within a set of web pages; it is outside the scope of a single plugin's output. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Supports | Labels name their control and the provider they apply to. The settings screen is divided into descriptive `<h2>` sections ("Embeds", "Data handling", "Support data"), and the opt-out shortcode's heading level can be set with the `headline_level` attribute so it fits the surrounding document outline. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Supports | The plugin suppresses no focus indicator — its stylesheets contain no `outline: none` — and inherits the indicator provided by the theme on the front end and by WordPress in the admin. Where it removes a default affordance itself, it replaces it: the round image-removal button, which carries no `.button` class, defines its own `:focus-visible` ring. In addition, focusing any control inside the overlay applies the same visual state as hovering it. Front-end focus indicators are ultimately supplied by the theme (see [Dependencies](#dependencies)). |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Supports | The plugin adds no sticky headers, overlays, or floating elements above focusable controls. The consent overlay replaces the embed in the document flow rather than covering other content. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | Not Applicable | The plugin has no drag-based interactions. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | Supports | The overlay itself is at least 200 px high. The checkboxes are native controls whose size the plugin does not modify, which this criterion's user-agent exception covers; each is additionally paired with a full-width clickable `<label>`. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | Supports | The plugin marks up no passages in a language different from the page; the provider descriptions it ships are localized to the site language. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | Supports | The settings screen presents its sections in a consistent order on every load, and every overlay places its controls in the same order. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | Supports | Every overlay is built from the same template, so the same function is labeled the same way for every provider throughout the site. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | Supports | Help is offered consistently: per-field descriptions on the settings screen and in the provider editor, and a "Documentation" link in the plugin's row on the Plugins screen. |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) | Not Applicable | The plugin detects no input errors (see 3.3.1). |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) | Not Applicable | The plugin performs no legal, financial, or data-commitment transactions; settings and providers are editable and can be re-saved at any time. |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) | Not Applicable | The plugin provides no authentication of its own; sign-in is handled by WordPress. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | Supports | Changes that do not move focus are announced through live regions: loading an embed writes "Content from *provider* has been loaded." into a `role="status"` region; the settings screen announces the outcome of copying the support data; and the background-image field announces when an image has been selected or removed. Embeds that load automatically because the visitor has previously opted in are not announced, so a page does not produce a burst of redundant messages. |

## EN 301 549 Report

The following tables document conformance with EN 301 549 v3.2.1. Chapters are marked Not Applicable
where the associated technology is not present in the product.

### 4.2 Functional Performance Statements (informative)

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 4.2.1 Usage without vision | Supports | Every overlay exposes a named button, a labeled checkbox and descriptive links through native semantics, and loading an embed is announced through a live region (see 4.1.3). |
| 4.2.2 Usage with limited vision | Supports | Text-based, zoomable output with no fixed sizes; the plugin's own colors exceed the contrast minimum (see 1.4.3), and the overlay keeps a visible boundary in forced-colors mode. |
| 4.2.3 Usage without perception of color | Supports | Information is never conveyed by color alone (see 1.4.1). |
| 4.2.4 Usage without hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.5 Usage with limited hearing | Not Applicable | The plugin conveys no information through sound. |
| 4.2.6 Usage without vocal capability | Not Applicable | No operation requires the user to produce speech. |
| 4.2.7 Usage with limited manipulation or strength | Supports | All functionality is keyboard-operable with native controls, and the primary target — the overlay — is large (see 2.1.1 and 2.5.8). |
| 4.2.8 Usage with limited reach | Not Applicable | Software only; no physical reach requirements. |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | The plugin produces no flashing content (see 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | Every overlay is identical in structure, names the provider it refers to, links to that provider's privacy policy, and offers per-field help in the admin. Motion is reduced when the user prefers it. |
| 4.2.11 Privacy | Supports | The plugin adds no accessibility feature that would expose the user's data differently from the standard controls. Its purpose is the opposite: no data reaches an embed provider until the user consents. |

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
| 7 (all clauses) | Not Applicable | Although the plugin gates video embeds, it provides no video capability of its own: it neither plays, records, transmits nor processes video. Once a visitor consents, playback is handled entirely by the third-party provider's player (see [Dependencies](#dependencies)). |

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
| 9.5 Non-interference | Supports | The plugin uses no color-only cues, flashing, audio, or timing that would interfere across the page. It also prevents third-party embeds from running until the visitor consents, so their scripts cannot interfere with the page beforehand. |
| 9.6 WCAG conformance requirements | Supports | The output meets the WCAG 2.2 Level A and AA conformance requirements. |

### Chapter 10: Non-web Documents

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 10 (all clauses) | Not Applicable | The plugin produces no non-web documents (e.g. PDF or Office files). |

### Chapter 11: Software

The plugin's user interface (settings screen and embed provider screens) is web-based software
rendered in the WordPress admin. Requirements that correspond to WCAG map to the
[WCAG 2.2 Report](#wcag-2-2-report).

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 11.1 – 11.4, 11.5.2, 11.6 (WCAG-based) | See WCAG 2.2 Report | The UI is web-based; refer to Tables 1 and 2 above. |
| 11.5.1 Closed functionality | Not Applicable | Not closed functionality. |
| 11.7 User preferences | Supports | The plugin sets no fixed fonts and honours the user's platform preferences: it disables its transitions under `prefers-reduced-motion: reduce` and adapts the overlay under `forced-colors: active`. The admin UI inherits the WordPress admin environment. |
| 11.8 Authoring tools | Supports | The plugin adds no block to the block editor; the "Embed Provider" post type is edited with the classic editor. What an author edits there — title, description, privacy policy URL, background image — is inserted into the plugin's own fixed overlay template, so the resulting markup is accessible by construction and authors cannot alter its structure. Descriptions entered by the site owner remain the site owner's responsibility (see [Dependencies](#dependencies)). |

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

Embed Privacy follows the established WordPress conventions for accessible themes and expects the
active theme to provide:

- a **`.screen-reader-text` utility** that visually hides content and reveals it again on `:focus`.
  The overlay's "Display content from *provider*" button uses this class: it stays out of the way
  visually while remaining in the tab order, and it becomes visible when a keyboard user reaches it.
  A theme that does not define the class at all will show the button as plain text; a theme that
  defines it without a `:focus` reset will keep it invisible while focused;
- **visible focus indicators** for links and form controls. The plugin suppresses none — there is no
  `outline: none` anywhere in its stylesheets — but it does not override the theme's either;
- **underlined links**, or another non-color distinction between link text and body text. Links
  inside the overlay deliberately inherit the surrounding text color.

Beyond the theme, the following also affect the result:

- the **embedded third-party content itself**. Once a visitor consents, the accessibility of the
  video, post or map is entirely the provider's — the plugin neither modifies nor can improve it;
- **content entered by the site owner** in a provider's description or privacy policy URL;
- **other plugins** on the site, in particular the page builders and plugins Embed Privacy
  integrates with (Elementor, Divi, Enfold, Kadence Blocks, wpForo and others), which supply their
  own markup around the overlay.

This report describes the plugin's own markup and UI. Site owners remain responsible for the overall
accessibility of their website.

## Known Issues

No outstanding accessibility issues are known at the time of this report.

## Legal Disclaimer

This Accessibility Conformance Report is a self-reported statement of the product's conformance with
the standards listed above, as of the report date and for the version stated. It is not a warranty or
a guarantee of legal compliance. Accessibility is assessed on a best-effort basis and may change
between releases.
