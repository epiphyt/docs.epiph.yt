# Structure

WordPress REST API always returns a JSON formatted string.

## Error Handling

Impressum Plus uses the integrated error handling of REST API requests of WordPress. It always contains an error code and error message. Optionally, there are more data, e.g. the status code.

Example `rest_not_found`:

```json
{
    "code": "rest_not_found",
    "message": "Option \"test\" does not exist.",
    "data": {
        "status": 404
    }
}
```
