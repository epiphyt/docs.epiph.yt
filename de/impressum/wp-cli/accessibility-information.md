# Befehle zur Information zur Barrierefreiheit

## Daten zur Information zur Barrierefreiheit erhalten

```shell
wp accessibility-information get
```

### Optionen

```
[<field>]
: Field name of the data.
```

### Beispiele

```shell
# Get field.
$ wp accessibility-information get service_description
This is the example description for my service.
```

## Daten zur Information zur Barrierefreiheit aktualisieren

```shell
wp accessibility-information update <field>
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
# Update incompatibilities field.
$ wp accessibility-information update incompatibilities My exceptions
Success: Updated 'incompatibilities' field.

# Update a field by reading from a file.
$ wp accessibility-information update incompatibilities < value.txt
Success: Updated 'incompatibilities' option.
```

## Daten zur Information zur Barrierefreiheit löschen

```shell
wp accessibility-information delete
```

### Optionen

```
[<field>]
: Field name of the data.
```

### Beispiele

```shell
# Delete field.
$ wp accessibility-information delete service_description
Deleted 'service_description' field.

# Delete all fields
$ wp accessibility-information delete
Success: Deleted all Accessibility Information data.
```
