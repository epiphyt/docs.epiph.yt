# Impressum-Daten

## GET `impressum-plus/v1/<option>`

Um Impressum-Daten per API zu beziehen, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/<option>
```

`<option>` kann eine der folgenden Zeichenketten sein:

* `all` – Gibt alle vorhandenen Werte des Impressums zurück
* `address_alternative` – Gibt die alternative Adresse zurück
* `address` – Gibt die Adresse zurück
* `associate` – Returns the associates of the legal entity
* `business_id` – Gibt die Wirtschafts-Identifikationsnummer zurück
* `capital_stock` – Gibt das Grundkapital zurück
* `chamber` – Gibt die Kammer zurück
* `country` – Gibt das Land zurück
* `coverage` – Gibt den Geltungsbereich zurück
* `data_protection_officer_address` – Gibt die Adresse des Datenschutzbeauftragten zurück
* `data_protection_officer_email` – Gibt die E-Mail-Adresse des Datenschutzbeauftragten zurück
* `data_protection_officer_name` – Gibt den Namen des Datenschutzbeauftragten zurück
* `data_protection_officer_phone` – Gibt die Telefonnummer des Datenschutzbeauftragten zurück
* `email` – Gibt die E-Mail-Adresse zurück
* `fax` – Gibt die Faxnummer zurück
* `free_text` – Gibt den Freitext zurück
* `inspecting_authority` – Gibt die Aufsichtsbehörde zurück
* `legal_entity` – Gibt die Rechtsform zurück
* `legal_job_title` – Gibt die Gesetzliche Berufsbezeichnung zurück
* `name` – Gibt den Namen zurück
* `online_dispute_resolution` – Gibt den Status der Online-Streitbeilegung zurück
* `pending_deposits` – Gibt die Ausstehenden Anlagen zurück
* `phone` – Gibt die Telefonnummer zurück
* `press_law_checkbox` – Gibt 1 zurück, wenn journalistischer/redaktioneller Inhalt vorhanden ist
* `press_law_person` – Gibt die verantwortliche Person für den Inhalt nach § 55 Abs. 2 RStV zurück
* `professional_association` – Gibt die Berufsgenossenschaft zurück
* `professional_liability_insurance` – Gibt die Berufshaftpflichtversicherung zurück
* `professional_regulations` – Gibt die berufsrechtlichen Regelungen zurück
* `register` – Gibt das Register zurück
* `representative` – Gibt den/die Vertretungsberechtigte/n zurück
* `social_media_facebook` – Gibt das Facebook-Profil zurück
* `social_media_instagram` – Gibt das Instagram-Profil zurück
* `social_media_linkedin` – Gibt das LinkedIn-Profil zurück
* `social_media_mastodon` – Gibt das Mastodon-Profil zurück
* `social_media_open_in_new_tab` – Gibt 1 zurück, wenn Links zu sozialen Medien in einem neuen Tab geöffnet werden
* `social_media_pinterest` – Gibt das Pinterest-Profil zurück
* `social_media_tiktok` – Gibt das TikTok-Profil zurück
* `social_media_twitter` – Gibt das Twitter-Profil zurück
* `social_media_xing` – Gibt das XING-Profil zurück
* `social_media_youtube` – Gibt das YouTube-Profil zurück
* `vat_id` – Gibt die Umsatzsteuer-ID zurück

### Beispielhafte Rückgabewerte

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

Um Impressum-Daten per API zu ändern, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/options
```

Beispiel:

```shell
curl -d "country=deu&legal_entity=self" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://www.example.com/wp-json/impressum-plus/v1/options
```

Als Rückgabewert erhält man einen JSON-String mit allen gespeicherten Impressum-Daten.

## POST `impressum-plus/v1/titles` <Badge type="info" text="Seit 2.3.0" />

Um Feldtitel der Impressum-Daten per API zu ändern, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/titles
```

Beispiel:

```shell
curl -d "name=Individual+Name&address=My+Address" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://www.example.com/wp-json/impressum-plus/v1/options
```

Als Rückgabewert erhält man einen JSON-String mit allen gespeicherten Impressum-Metadaten.

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
