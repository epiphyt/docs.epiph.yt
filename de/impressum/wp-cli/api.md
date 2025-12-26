# API-Befehle

## API-Daten erhalten

```shell
wp impressum api get
```

### Optionen

```
<field>
: Field name of the data.
```

### Beispiele

```shell
# Get field.
$ wp impressum api get api_active
1
```

## API-Daten aktualisieren

```shell
wp impressum api update
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
$ wp impressum api update api_active usa
Success: Updated 'api_active' field.

# Update a field by reading from a file.
$ wp impressum api update api_active < value.txt
Success: Updated 'api_active' option.
```

## API-Daten löschen

```shell
wp impressum api delete
```

### Optionen

```
<field>
: Field name of the data.
```

### Beispiele

```shell
# Delete field.
$ wp impressum api delete api_active
Deleted 'api_active' field.

# Delete all fields
$ wp impressum api delete
Success: Deleted all API data.
```
