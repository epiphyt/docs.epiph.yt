# Formularübermittlungen

## DELETE `form-block/v1/submission/delete/(?P<id>([0-9a-f]{8}\-[0-9a-f]{4}\-4[0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12}\/\d+))`

Löscht eine Formularübermittlung mit einer gegebenen Formular-ID und Formularübermittlungs-ID.

Beispiel:

```shell
curl -X DELETE https://www.example.com/wp-json/form-block/v1/submission/delete/a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0
```

### Beispielhafte Rückgabewerte

```json
{
	"data": {
		"id": "a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0"
	},
	"message": "Formularübermittlung erfolgreich gelöscht.",
	"success": true
}
```

## POST `form-block-pro/v1/response/(?P<id>([0-9a-f]{8}\-[0-9a-f]{4}\-4[0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12}\/\d+))` <Badge type="tip" text="Nur in Form Block Pro" />

Antworte auf eine Formularübermittlung mit einer gegebenen Formular-ID und Formularübermittlungs-ID.

Beispiel:

```shell
curl -d "response=My+individual+response" -H "Content-Type: application/x-www-form-urlencoded" -X POST https://www.example.com/wp-json/form-block-pro/v1/response/a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0
```
