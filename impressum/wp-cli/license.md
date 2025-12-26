# License commands

## Activate license

```shell
wp impressum license activate
```

### Options

```
[<license_email>]
: Email address of the license

[<license_key>]
: Key of the license

[--network]
: Activate the license for the whole network.
```

### Examples

```shell
# Activate license with already stored data.
$ wp impressum license activate
Success: Impressum Plus activated.

# Activate license with given data.
$ wp impressum license activate admin@example.com 8916de71-cf6e-4145-bd6c-a15d1cb8e821
Success: Impressum Plus activated.

# Activate license for the whole network.
$ wp impressum license activate --network
Success: Impressum Plus activated.
```

## Deactivate license

```shell
wp impressum license deactivate
```

### Examples

```shell
# Deactivate the license.
$ wp impressum license deactivate
Success: Impressum Plus deactivated.
```

## Get license data

```shell
wp impressum license get
```

### Options

```
[<field>]
* : Field name of the data.
```

### Examples

```shell
# Get field.
$ wp impressum license get license_email
admin@example.com
```

## Update license data

```shell
wp impressum license update <field>
```

### Options

```
<field>
: Field name of the data.

[<value>]
: The new value. If omitted, the value is read from STDIN.
```

### Examples

```shell
# Update country field.
$ wp impressum license update license_email admin@example.com
Success: Updated 'license_email' field.

# Update a field by reading from a file.
$ wp impressum license update license_email < value.txt
Success: Updated 'license_email' option.
```

## Delete license data

```shell
wp impressum license delete
```

### Options

```
<field>
: Field name of the data.
```

### Examples

```shell
# Delete field.
$ wp impressum license delete license_email
Deleted 'license_email' field.

# Delete all fields
$ wp impressum license delete
Success: Deleted all Impressum License data.
```
