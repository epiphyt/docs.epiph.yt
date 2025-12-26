# Struktur

Die WordPress-REST-API liefert immer eine JSON-formatierte Zeichenkette zurück.

## Fehlerbehandlung

Impressum Plus verwendet die in WordPress integrierte Fehlerbehandlung für REST-API-Aufrufe. Diese besteht immer aus einem Fehlercode und einer Fehlernachricht. Optional sind weitere Daten, wie beispielsweise ein Statuscode.

Beispiel `rest_not_found`:

```json
{
    "code": "rest_not_found",
    "message": "Option \"test\" does not exist.",
    "data": {
        "status": 404
    }
}
```
