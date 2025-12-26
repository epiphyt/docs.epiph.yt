# Output

## Imprint

After entering all relevant information, Impressum Plus can generate and output your imprint. For this we use either the corresponding block in the Gutenberg editor (since version 2.0.0) or a so-called shortcode. Shortcodes are recognized by WordPress and replaced by other content, in our case a complete imprint, when visitors request the page.

### Gutenberg Block

since 2.0.0

Create a new block and select “Imprint” from the block inserter.

If you don’t want to output the whole imprint and instead only a part of it you can configure this in the block sidebar.

### Shortcode

Copy the shortcode `[impressum]` to the desired place(s) on your page and save it. Usually, you should use a separate page for that, e.g. “Imprint”.

If you don’t want to output the whole imprint and instead only a part of it, you can extend your shortcode with the `sections=` attribute. Every value from your imprint can be entered separately or you can enter multiply values comma-separated.

`[​impressum sections="email"​]` just outputs the email address, `[​impressum sections="email,phone"​]`email address and phone number. The following values are available for `sections`:

|     |     |
| --- | --- |
| `address` | Address |
| `address_alternative` | Alternative adress |
| `coverage` | Coverage of the imprint |
| `country` | Country |
| `email` | Email address |
| `fax` | Fax number |
| `free_text` | Free text field |
| `legal_entity` | Legal Entity |
| `name` | Name |
| `phone` | Phone number |
| `press_law_person` | Responsible person for the content |
| `vat_id` | VAT ID |
| `inspecting_authority` | Inspecting authority |
| `register` | Register |
| `business_id` | Register number |
| `representative` | Representative(s) |
| `capital_stock` | Capital stock |
| `professional_association` | Professional association |
| `legal_job_title` | Legal job title |
| `professional_regulations` | Professional regulations |

If you want to output your imprint without any HTML, which are provided by Impressum Plus by default, you can extend the shortcode with a `markup="false"`. The shortcode looks then like this: `[​impressum markup="false​"]` and only outputs an unformatted text block.

**Since version 2.0.0:** If you want to output imprint data without their according field title, extend the shortcode with a `titles="false"`.

## Privacy Policy

If you also added all information to create a privacy policy, Impressum Plus can output it through an own block or shortcode.

### Gutenberg Block

since 2.0.0

Create a new block and select “Privacy Policy” from the block inserter.

### Shortcode

Copy the shortcode `[impressum_privacy]` to the desired place on your page. If you add it directly below your imprint, make sure to link to the page, e.g. in your footer, clearly as “Imprint and Privacy Policy” so that your visitors know that they can be found the privacy policy on this page as well.

## Accessibility Information

since 2.13.0

If you also added all information to create an accessibility information, Impressum Plus can output it through an own block or shortcode.

### Block

Create a new block and select “Accessibility Information” from the block inserter.

### Shortcode

Copy the shortcode `[impressum_accessibility_information]` to the desired place on your page.
