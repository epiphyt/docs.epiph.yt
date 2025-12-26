# Authentication

Impressum Plus adds an integrates Basic Authentication System. This works with the format `Username:Password` or with a token that is the Base64 checksum of such a string, while `Username` is the username of an administrator account and `Password` the password of such an account.

Example:

```shell
curl -i  -H "Authorization: Basic QmVudXR6ZXJuYW1lOlBhc3N3b3J0" https://www.domain.tld/wp-json/impressum-plus/v1/all
```
