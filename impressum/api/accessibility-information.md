# Accessibility Information Data

## GET `/wp-json/impressum-plus/v1/accessibility-information`

To get all accessibility information data via API, the URL structure is:

```
/wp-json/impressum-plus/v1/accessibility-information
```

### Example return value

```json
{
    "service_description": "<string>",
    "incompatibilities": "<string>",
    "incompatibilities_description": "<string>",
    "update_date": "<string>"
}
```

## GET `/wp-json/impressum-plus/v1/accessibility-information<option>`

To get a single accessibility information data item via API, the URL structure is:

```
/wp-json/impressum-plus/v1/accessibility-information/<option>
```

`<option>` can be one of the following strings:

* `service_description` – Returns the description of the service
* `incompatibilities` – Returns the type of incompatibilities (`no`, `incompatibilities` or `exceptions`)
* `incompatibilities_description` – Returns the description of the incompatibilities/exceptions
* `update_date` – Returns the update date in ISO 8601 format

### Example return value

Request: `/wp-json/impressum-plus/v1/accessibility-information/service_description`

```json
{
    "service_description": "<string>",
}
```

## POST `/wp-json/impressum-plus/v1/accessibility-information`

To change accessibility information data via API, the URL structure is the following:

```
/wp-json/impressum-plus/v1/accessibility-information
```

Example:

```shell
curl -d "incompatibilities=no" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://domain.tld/wp-json/impressum-plus/v1/accessibility-information
```

As response you’ll receive a JSON string with the stored accessibility information data.
