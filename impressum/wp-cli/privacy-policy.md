# Privacy policy commands

## Get privacy policy data

```shell
wp privacy-policy get
```

### Options

```
[<field>]
: Field name of the data.

[--human-readable]
: Get a human-readable format instead of the raw format, if supported by the field.
```

### Examples

```shell
# Get field.
$ wp privacy-policy get logfile_days
7
```

## Update privacy policy data

```shell
wp privacy-policy update <field>
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
$ wp privacy-policy update logfile_days 10
Success: Updated 'logfile_days' field.

# Update a field by reading from a file.
$ wp privacy-policy update logfile_days < value.txt
Success: Updated 'logfile_days' option.
```

## Delete privacy policy data

```shell
wp privacy-policy delete
```

### Options

```
[<field>]
: Field name of the data.
```

### Examples

```shell
# Delete field.
$ wp privacy-policy delete logfile_days
Deleted 'logfile_days' field.

# Delete all fields
$ wp privacy-policy delete
Success: Deleted all Privacy Policy data.
```
