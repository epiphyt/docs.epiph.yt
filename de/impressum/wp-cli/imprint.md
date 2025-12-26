# Impressum-Befehle

## Impressum-Daten erhalten

```
wp impressum get
```

### Optionen

```
[<field>]
: Field name of the data.

[--human-readable]
: Get a human-readable format instead of the raw format, if supported by the field.
```

### Beispiele

```shell
# Get field.
$ wp impressum get country
deu

# Get field in human-readable format
$ wp impressum get country --human-readable
Germany
```

## Impressum-Daten aktualisieren

```shell
wp impressum update <field>
```

### Optionen

```
<field>
: Field name of the data.

[<value>]
: The new value. If omitted, the value is read from STDIN.
```

### Beispiele

```shell
# Update country field.
$ wp impressum update country usa
Success: Updated 'country' field.

# Update a field by reading from a file.
$ wp impressum update country < value.txt
Success: Updated 'country' option.
```

## Impressum-Daten löschen

```shell
wp impressum delete
```

### Optionen

```
[<field>]
: Field name of the data.
```

### Beispiele

```shell
# Delete field.
$ wp impressum delete country
Deleted 'country' field.

# Delete all fields
$ wp impressum delete
Success: Deleted all Impressum data.
```
