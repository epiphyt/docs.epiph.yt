# Accessibility information commands

## Get accessibility information data

```shell
wp accessibility-information get
```

### Options

```
[<field>]
: Field name of the data.
```

### Examples

```shell
# Get field.
$ wp accessibility-information get service_description
This is the example description for my service.
```

## Update accessibility information data

```shell
wp accessibility-information update <field>
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
# Update incompatibilities field.
$ wp accessibility-information update incompatibilities My exceptions
Success: Updated 'incompatibilities' field.

# Update a field by reading from a file.
$ wp accessibility-information update incompatibilities < value.txt
Success: Updated 'incompatibilities' option.
```

## Delete accessibility information data

```shell
wp accessibility-information delete
```

### Options

```
[<field>]
: Field name of the data.
```

### Examples

```shell
# Delete field.
$ wp accessibility-information delete service_description
Deleted 'service_description' field.

# Delete all fields
$ wp accessibility-information delete
Success: Deleted all Accessibility Information data.
```
