# Daten zur Information zur Barrierefreiheit

## GET `/wp-json/impressum-plus/v1/accessibility-information`

Um alle Daten zur Information zur Barrierefreiheit per API zu beziehen, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/accessibility-information
```

### Beispielhafte Rückgabewerte

```json
{
    "service_description": "<string>",
    "incompatibilities": "<string>",
    "incompatibilities_description": "<string>",
    "update_date": "<string>"
}
```

## GET `/wp-json/impressum-plus/v1/accessibility-information<option>`

Um einzelne Daten zur Information zur Barrierefreiheit per API zu beziehen, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/accessibility-information/<option>
```

`<option>` kann eine der folgenden Zeichenketten sein:

* `service_description` – Gibt die Beschreibung der Dienstleistung zurück
* `incompatibilities` – Gibt den Typ der Inkompatibilitäten/Ausnahmen zurück (`no`, `incompatibilities` oder `exceptions`)
* `incompatibilities_description` – Gibt die Beschreibung der Inkompatibilitäten/Ausnahmen zurück
* `update_date` – Gibt das Datum der letzten Aktualisierung im Format ISO 8601 zurück

### Beispielhafte Rückgabewerte

Anfrage: `/wp-json/impressum-plus/v1/accessibility-information/service_description`

```json
{
    "service_description": "<string>",
}
```

## POST `/wp-json/impressum-plus/v1/accessibility-information`

Um Daten zur Information zur Barrierefreiheit per API zu ändern, lautet die URL-Struktur:

```
/wp-json/impressum-plus/v1/accessibility-information
```

Beispiel:

```shell
curl -d "incompatibilities=no" -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" -X POST https://domain.tld/wp-json/impressum-plus/v1/accessibility-information
```

Als Rückgabewert erhält man einen JSON-String mit allen gespeicherten Daten zur Information zur Barrierefreiheit.
