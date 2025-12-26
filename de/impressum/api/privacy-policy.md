# Datenschutzerklärung-Daten

## GET `impressum-plus/v1/privacy/<option>`

Um Datenschutz-Daten per API zu beziehen, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/privacy/<option>
```

`<option>` kann eine der folgenden Zeichenketten sein:

* `all` – Gibt alle vorhandenen Werte der Datenschutzerklärung zurück
* `ad_tracking_text` – Gibt den Datenschutz-Text von Werbeanbietern mit Tracking zurück
* `ad_tracking_usage` – Gibt 1 zurück, wenn Werbung mit Tracking genutzt wird
* `amazon_partner_usage` – Gibt 1 zurück, wenn Amazon-Partner-Links genutzt werden
* `applicant_form_usage` – Gibt 1 zurück, wenn Formulare für Stellenangebote genutzt werden
* `comment_subscription_usage` – Gibt 1 zurück, wenn Kommentare abonniert werden können
* `comment_usage` – Gibt 1 zurück, wenn die Kommentarfunktion genutzt wird
* `contact_form_usage` – Gibt 1 zurück, wenn Kontaktformulare genutzt werden
* `contract_usage` – Gibt 1 zurück, wenn über die Website Verträge geschlossen werden
* `cookie_usage` – Gibt 1 zurück, wenn Cookies genutzt werden
* `facebook_pixel_usage` – Gibt 1 zurück, wenn der Facebook Pixel genutzt wird
* `facebook_social_sharing_usage` – Gibt 1 zurück, wenn eine Facebook-Social-Integration genutzt wird
* `google_ads_usage` – Gibt 1 zurück, wenn Google Ads genutzt wird
* `google_adsense_usage` – Gibt 1 zurück, wenn Google AdSense genutzt wird
* `google_analytics_anonymize_ip` – Gibt 1 zurück, wenn die IP-Adressen in Google Analytics gekürzt werden
* `google_analytics_id` – Gibt die Google Analytics ID zurück
* `google_analytics_remarketing_usage` – Gibt 1 zurück, wenn Google Analytics Remarketing genutzt wird
* `google_analytics_usage` – Gibt 1 zurück, wenn Google Analytics genutzt wird
* `google_fonts_usage` – Gibt 1 zurück, wenn Google Fonts genutzt werden
* `google_maps_usage` – Gibt 1 zurück, wenn Google Maps genutzt wird
* `health_data_usage` – Gibt 1 zurück, wenn Gesundheitsdaten gesammelt werden
* `logfile_days` – Gibt die Anzahl in Tagen zurück, für deren Dauer Serverlogs gespeichert werden
* `logfile_ip_shortening` – Gibt 1 zurück, wenn die IP-Adressen in den Serverlogs gekürzt werden
* `matomo_anonymize_ip` – Gibt 1 zurück, wenn die IP-Adressen in Matomo gekürzt werden
* `matomo_eu_server` – Gibt 1 zurück, wenn Matomo auf Servern innerhalb der EU gehostet ist
* `matomo_url` – Gibt die URL zur genutzten Matomo-Instanz zurück
* `matomo_usage` – Gibt 1 zurück, wenn Matomo genutzt wird
* `newsletter_external_usage` – Gibt den extern genutzten Newsletter-Anbieter zurück, oder `none`
* `newsletter_tracking_usage` – Gibt 1 zurück, wenn das Newsletter-System Tracking nutzt
* `newsletter_usage` – Gibt 1 zurück, wenn ein Newsletter-System benutzt wird
* `pinterest_social_sharing_usage` – Gibt 1 zurück, wenn eine Pinterest-Social-Integration genutzt wird
* `profiling_usage` – Gibt 1 zurück, wenn Profiling genutzt wird
* `shop_usage` – Gibt 1 zurück, wenn ein Shop-System genutzt wird
* `tumblr_social_sharing_usage` – Gibt 1 zurück, wenn eine Tumblr-Social-Integration genutzt wird
* `twitter_social_sharing_usage` – Gibt 1 zurück, wenn eine Twitter-Social-Integration genutzt wird

### Beispielhafte Rückgabewerte

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

Um Datenschutz-Daten per API zu ändern, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/privacy
```

Beispiel:

```shell
curl -d "cookie_usage=1" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://domain.tld/wp-json/impressum-plus/v1/privacy
```

Als Rückgabewert erhält man einen JSON-String mit allen gespeicherten Datenschutz-Daten.
