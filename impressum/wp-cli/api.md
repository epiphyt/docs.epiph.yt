# API commands

## Get API data

```shell
wp impressum api get
```

### Options

```
<field>
: Field name of the data.
```

### Examples

```shell
# Get field.
$ wp impressum api get api_active
1
```

## Update API data

```shell
wp impressum api update
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
$ wp impressum api update api_active usa
Success: Updated 'api_active' field.

# Update a field by reading from a file.
$ wp impressum api update api_active < value.txt
Success: Updated 'api_active' option.
```

## Delete API data

```shell
wp impressum api delete
```

### Options

```
<field>
: Field name of the data.
```

### Examples

```shell
# Delete field.
$ wp impressum api delete api_active
Deleted 'api_active' field.

# Delete all fields
$ wp impressum api delete
Success: Deleted all API data.
```
