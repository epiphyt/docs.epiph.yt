# Accessibility

Form Block Pro and Form Block give you a wide range of tools to improve the form’s accessibility. By default, it uses best practices for things like error handling, etc. to enable the best possible accessibility. However, since the form fields are usually created manually, you should make sure that you use these available tools.

## Form label

The form label is used to name a form properly. Depending on the used screen reader, it can also be used to directly jump to the form from a special menu. It is much more convenient of a “newsletter form” is also labeled as such (similar to “contact form”, “survey for XYZ”, etc.), so that users using a screen reader can directly detect what type of form it is.

The form label is also used as identifier for the form inside the [form submissions table](/form-block/getting-started/form-submissions).

## Autocomplete

Autocompletion is a nice way to let the browser do the work. Defined correctly, the browser can suggest and fill out values for form fields automatically (e.g. for name, address, city, etc.). Form Block Pro and Form Block already come with a generic list of known matches for form element labels and their autocomplete values and try set a proper value. However, if it doesn’t work properly or uses the wrong value, you can (and should) define the correct autocomplete value from the list of available ones – if there is a matching value.

## Aria description <Badge type="tip" text="Only in Form Block Pro" />

Since Form Block Pro doesn’t know the exact meaning of a form element, it cannot provide a builtin description for a field. To overcome this, you can add an aria description for each form element to specify on how to fill out the field before the user even tried once.

## Error message <Badge type="tip" text="Only in Form Block Pro" />

Since Form Block Pro doesn’t know the exact meaning of a form element, the error messages regarding filling out a form element properly are rather generic. To overcome this, you can add a custom error message for each form element in the block sidebar to populate a more specific message on how to fill out a form element properly.
