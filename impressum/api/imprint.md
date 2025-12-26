# Imprint Data

## GET `impressum-plus/v1/<option>`

To get imprint data via API, the URL structure is:

```
/wp-json/impressum-plus/v1/<option>
```

`<option>` can be one of the following strings:

* `all` – Returns all available values of the imprint
* `country` – Returns the country
* `legal_entity` – Returns the legal entity
* `name` – Returns the name
* `address` – Returns the address
* `address_alternative` – Returns the alternative address
* `email` – Returns the email address
* `phone` – Returns the phone number
* `fax` – Returns the fax number
* `press_law_person` – Returns the responsible person for the content
* `vat_id` – Returns the VAT ID
* `coverage` – Returns the coverage
* `free_text` – Returns the free text field
* `online_dispute_resolution` – Returns the online dispute resolution state
* `inspecting_authority` – Returns the inspecting authority
* `register` – Returns the register
* `business_id` – Returns the business ID
* `representative` – Returns the representative(s)
* `capital_stock` – Returns the capital stock
* `associate` – Returns the associates of the legal entity
* `pending_deposits` – Returns the pending deposits
* `chamber` – Returns the chamber
* `professional_association` – Returns the professional association
* `professional_liability_insurance` – Returns the professional liability insurance
* `legal_job_title` – Returns the legal job title
* `professional_regulations` – Returns the professional regulations
* `press_law_checkbox` – Returns 1 if journalistic/editorial content is available
* `data_protection_officer_name` – Returns the name of the data protection officer
* `data_protection_officer_address` – Returns the address of the data protection officer
* `data_protection_officer_email` – Returns the email address of the data protection officer
* `data_protection_officer_phone` – Returns the phone number of the data protection officer
* `social_media_facebook` – Returns the Facebook profile URL
* `social_media_instagram` – Returns the Instagram profile URL
* `social_media_linkedin` – Returns the LinkedIn profile URL
* `social_media_mastodon` – Returns the Mastodon profile URL
* `social_media_pinterest` – Returns the Pinterest profile URL
* `social_media_tiktok` – Returns the TikTok profile URL
* `social_media_twitter` – Returns the Twitter profile URL
* `social_media_xing` – Returns the XING profile URL
* `social_media_youtube` – Returns the YouTube profile URL
* `social_media_open_in_new_tab` – Returns 1 if social media links open in a new tab

### Example return value

```json
{
    "country": "<string>",
    "legal_entity": "<string>",
    "name": "<string>",
    "address": "<string>",
    "address_alternative": "<string>",
    "email": "<string>",
    "phone": "<string>",
    "fax": "<string>",
    "press_law_person": "<string>",
    "vat_id": "<string>",
    "coverage": "<string>",
    "free_text": "<string>",
    "online_dispute_resolution": "<string>",
    "inspecting_authority": "<string>",
    "register": "<string>",
    "business_id": "<string>",
    "representative": "<string>",
    "associate": "<string>",
    "capital_stock": "<string>",
    "pending_deposits": "<string>",
    "chamber": "<string>",
    "professional_association": "<string>",
    "professional_liability_insurance": "<string>",
    "legal_job_title": "<string>",
    "professional_regulations": "<string>",
    "press_law_checkbox": "<string>",
    "data_protection_officer_name": "<string>",
    "data_protection_officer_address": "<string>",
    "data_protection_officer_email": "<string>",
    "data_protection_officer_phone": "<string>",
    "social_media_facebook": "<string>",
    "social_media_instagram": "<string>",
    "social_media_linkedin": "<string>",
    "social_media_mastodon": "<string>",
    "social_media_pinterest": "<string>",
    "social_media_tiktok": "<string>",
    "social_media_twitter": "<string>",
    "social_media_xing": "<string>",
    "social_media_youtube": "<string>",
    "social_media_open_in_new_tab": "<string>"
}
```

## POST `impressum-plus/v1/options`

To change imprint data via API, the URL structure is the following:

```
/wp-json/impressum-plus/v1/options
```

Example:

```shell
curl -d "country=deu&legal_entity=self" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://www.example.com/wp-json/impressum-plus/v1/options
```

As response you’ll receive a JSON string with the stored imprint data.

## POST `impressum-plus/v1/titles`

since 2.3.0

To change imprint titles via API, the URL structure is the following:

```
/wp-json/impressum-plus/v1/titles
```

Example:

```shell
curl -d "name=Individual+Name&address=My+Address" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://www.example.com/wp-json/impressum-plus/v1/options
```

As response you’ll receive a JSON string with the stored imprint metadata.

```json
{
    "name": {
        "name": "Individual Name"
    },
    "address": {
        "name": "My Address"
    }
}
```
