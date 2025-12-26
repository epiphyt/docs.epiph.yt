# Authentifizierung

Impressum Plus bringt eine integrierte Basic-Authentifizierung mit. Diese funktioniert entweder über das Format `Benutzername:Passwort` oder über einen Token, der aus der Base64-Checksumme des Strings Benutzername:Passwort besteht. Dabei ist `Benutzername` immer der Benutzername eines Administrator-Benutzerkontos und `Passwort` dessen Passwort.

Beispiel:

```shell
curl -i  -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" https://www.domain.tld/wp-json/impressum-plus/v1/all
```
