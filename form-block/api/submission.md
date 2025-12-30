# Submission

## DELETE `form-block/v1/submission/delete/(?P<id>([0-9a-f]{8}\-[0-9a-f]{4}\-4[0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12}\/\d+))`

Deletes a submission with a given form ID and submission ID.

Example:

```shell
curl -X DELETE https://www.example.com/wp-json/form-block/v1/submission/delete/a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0
```

### Example return value

```json
{
	"data": {
		"id": "a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0"
	},
	"message": "Submission deleted successfully.",
	"success": true
}
```

## POST `form-block-pro/v1/response/(?P<id>([0-9a-f]{8}\-[0-9a-f]{4}\-4[0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12}\/\d+))` <Badge type="tip" text="Only in Form Block Pro" />

Respond to a submission with a given form ID and submission ID.

Example:

```shell
curl -d "response=My+individual+response" -H "Content-Type: application/x-www-form-urlencoded" -X POST https://www.example.com/wp-json/form-block-pro/v1/response/a532ccd4-d671-4aac-9e80-d4bce1e89d5d/0
```
