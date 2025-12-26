# Datenschutzerklärung-Befehle

## Datenschutzerklärung-Daten erhalten

```shell
wp privacy-policy get
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
$ wp privacy-policy get logfile_days
7
```

## Datenschutzerklärung-Daten aktualisieren

```shell
wp privacy-policy update <field>
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
$ wp privacy-policy update logfile_days 10
Success: Updated 'logfile_days' field.

# Update a field by reading from a file.
$ wp privacy-policy update logfile_days < value.txt
Success: Updated 'logfile_days' option.
```

## Datenschutzerklärung-Daten löschen

```shell
wp privacy-policy delete
```

### Optionen

```
[<field>]
: Field name of the data.
```

### Beispiele

```shell
# Delete field.
$ wp privacy-policy delete logfile_days
Deleted 'logfile_days' field.

# Delete all fields
$ wp privacy-policy delete
Success: Deleted all Privacy Policy data.
```
