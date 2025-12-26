# Privacy Policy Data

## GET `impressum-plus/v1/privacy/<option>`

To get privacy policy data via API, the URL structure is:

```
/wp-json/impressum-plus/v1/privacy/<option>
```

`<option>` can be one of the following strings:

* `all` – Returns all available values of the privacy policy
* `cookie_usage` – Returns 1 if cookies are used
* `logfile_days` – Returns the amount of days the server logs are stored
* `logfile_ip_shortening` – Returns 1 if IP addresses in the server logs are shortened
* `contact_form_usage` – Returns 1 if contact forms are used
* `comment_usage` – Returns 1 if comments are used
* `comment_subscription_usage` – Returns 1 if you can subscribe to comments
* `shop_usage` – Returns 1 if a shop system is used
* `contract_usage` – Returns 1 if contracts are closed via the website
* `google_analytics_usage` – Returns 1 if Google Analytics is used
* `google_analytics_id` – Returns the Google Analytics ID
* `google_analytics_anonymize_ip` – Returns 1 if IP addresses are anonymized before sending them to Google Analytics
* `google_analytics_remarketing_usage` – Returns 1 if Google Analytics Remarketing is used
* `google_ads_usage` – Returns 1 if Google Ads is used
* `google_adsense_usage` – Returns 1 if Google AdSense is used
* `google_maps_usage` – Returns 1 if Google Maps is used
* `google_fonts_usage` – Returns 1 if Google Fonts is used
* `matomo_usage` – Returns 1 if Matomo is used
* `matomo_url` – Returns the URL to the Matomo instance
* `matomo_eu_server` – Returns 1 if Matomo is hosted inside the EU
* `matomo_anonymize_ip` – Returns 1 if IP addresses are anonymized within Matomo
* `facebook_pixel_usage` – Returns 1 if the Facebook Pixel is used
* `ad_tracking_usage` – Returns 1 if ads with tracking are used
* `ad_tracking_text` – Returns the text for tracking ads
* `applicant_form_usage` – Returns 1 if forms for job applications are used
* `profiling_usage` – Returns 1 if profiling is used
* `health_data_usage` – Returns 1 if health data are being collected
* `facebook_social_sharing_usage` – Returns 1 if a Facebook social integration is used
* `pinterest_social_sharing_usage` – Returns 1 if a Pinterest social integration is used
* `twitter_social_sharing_usage` – Returns 1 if a Twitter social integration is used
* `tumblr_social_sharing_usage` – Returns 1 if a Tumblr social integration is used
* `newsletter_usage` – Returns 1 if a newsletter system is used
* `newsletter_external_usage` – Returns the external newsletter provider, if any, or `none`
* `newsletter_tracking_usage` – Returns 1 if the newsletter system uses tracking
* `amazon_partner_usage` – Returns 1 if Amazon partner links are used

### Example return value

```json
{
    "cookie_usage": "<string>",
    "logfile_days": "<string>",
    "logfile_ip_shortening": "<string>",
    "contact_form_usage": "<string>",
    "comment_usage": "<string>",
    "comment_subscription_usage": "<string>",
    "shop_usage": "<string>",
    "contract_usage": "<string>",
    "google_analytics_usage": "<string>",
    "google_analytics_id": "<string>",
    "google_analytics_anonymize_ip": "<string>",
    "google_analytics_remarketing_usage": "<string>",
    "google_ads_usage": "<string>",
    "google_adsense_usage": "<string>",
    "google_maps_usage": "<string>",
    "google_fonts_usage": "<string>",
    "matomo_usage": "<string>",
    "matomo_url": "<string>",
    "matomo_eu_server": "<string>",
    "matomo_anonymize_ip": "<string>",
    "facebook_pixel_usage": "<string>",
    "ad_tracking_usage": "<string>",
    "ad_tracking_text": "<string>",
    "applicant_form_usage": "<string>",
    "profiling_usage": "<string>",
    "health_data_usage": "<string>",
    "facebook_social_sharing_usage": "<string>",
    "pinterest_social_sharing_usage": "<string>",
    "twitter_social_sharing_usage": "<string>",
    "tumblr_social_sharing_usage": "<string>",
    "newsletter_usage": "<string>",
    "newsletter_external_usage": "<string>",
    "newsletter_tracking_usage": "<string>",
    "amazon_partner_usage": "<string>"
}
```

## POST `impressum-plus/v1/privacy`

To change privacy policy data via API, the URL structure is the following:

```
/wp-json/impressum-plus/v1/privacy
```

Example:

```shell
curl -d "cookie_usage=1" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://domain.tld/wp-json/impressum-plus/v1/privacy
```

As response you’ll receive a JSON string with the stored privacy policy data.
