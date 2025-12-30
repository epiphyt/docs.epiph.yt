# Form elements

Forms are relatively complex. Thus, there are a bunch of form elements available for you to use in Form Block Pro and Form Block. If you know how forms are technically structured, it’s possible that you won’t learn something new here.

## Form

The first and most outer element is the form itself. It defines the general behavior of the form and what happens with the data upon submit.

### Save submissions locally

You can disable storing the submissions of this particular form locally if the [global option for storing form submissions locally](/form-block/settings#local-submission-storage) for it is enabled.

### Custom subject

You can define a custom subject that is used when sending the email with the submitted form fields to the recipient(s) of the form.

### Label

You can define a label that tells users what type of form it is. It is used for screen readers to correctly announce the type of the form to them for better understanding. It will also be displayed in the list of [form submissions](/form-block/getting-started/form-submissions).

### Custom recipients <Badge type="tip" text="Only in Form Block Pro" />

You can define a list with one or multiple email addresses the submitted form fields will be sent to. By default, they will be sent to the site administrator as defined in **Settings > General > Administration Email Address**.

### Custom form action <Badge type="tip" text="Only in Form Block Pro" />

You can define a custom target that is used to send the form fields to. If used, you need to make sure that any server-sided validation is handled there, since the builtin validation of Form Block Pro is not enabled in this case. The data will be directly passed to the URL entered there.

### Custom redirect page <Badge type="tip" text="Only in Form Block Pro" />

By default, Form Block Pro shows the status of the form submission below the form itself after hitting the submit button. If you want to redirect the users to a different page, you can define it here.

### Maximum upload size <Badge type="tip" text="Only in Form Block Pro" />

Aside of the [global option regarding the maximum upload size](/form-block/settings#maximum-form-upload-size), you can define a custom maximum upload size for the whole form here. The same limits apply as for the global option.<br>
Supported units: B, KB/KiB, MB/MiB, GB/GiB

### Maximum upload size per file <Badge type="tip" text="Only in Form Block Pro" />

You can define a custom maximum upload size for each file.<br>
Supported units: B, KB/KiB, MB/MiB, GB/GiB

## Input

An input is a form element to enter a single line of content. Depending on its defined type, which is handled as variation as of Form Block 1.7.0 and later, it provides different input modes. You can find a description of the variations by opening the “Transform to variation” select in its block sidebar. You can also find a more technical explanation on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input).

While Form Block contains the most important input variations, Form Block Pro contains all of the available in the HTML standard.

## Select

A select is a drop-down field that allows to select a option from a list of pre-defined options. If enabled, it can also be used to select multiple options at once. But then, it is no more rendered as drop-down field, but as a list inside a container, where you can highlight each selected item. The options have to be defined inside the editor by clicking on the “Manage options” button aside of the select itself.

Here, you can add a list of options, with both the value and/or the label of the field. If no label is defined, the value will also be displayed as label. If no value is defined, no data will be passed when submitting the field (this is helpful for a default option like “Please select” – this is why such an option already exists when adding this block).

## Textarea

A textarea is a multi-column input field that can be used for larger text.

## Fieldset

A fieldset can be used to group certain fields with an identical context. It consists of a legend (which represents the title) and several related fields. These fields can be of any input type, selects and/or textareas. An example implementation would be a multiple choice question with a list of radio input elements or a credit card input when splitting each quadruplet of the credit card number. It is also used automatically for the custom input types for date/time inputs with separate input fields for day, month, year, hour and minute.

If used with a screen reader, the legend of the fieldset will be announced with every input field inside of it. So make sure to only use it when such context is necessary to properly fill out the field(s).

## Repeater <Badge type="tip" text="Only in Form Block Pro" />

A repeater element can be used to allow adding multiple identical fields. E.g. if you want to get a list of items in a structured way, you can add a repeater element and the user can add multiple items when needed by clicking a button. All fields inside the repeater will be repeated upon clicking this button.

In the block sidebar, you can also define a repeater label that is displayed above all fields in form submissions or the email that is sent to the recipient. It is just for improved data handling after submitting the form. It is not displayed on the frontend for the user.

## Consent message <Badge type="tip" text="Only in Form Block Pro" />

This field automatically adds a checkbox in the frontend with the global defined consent message (see the [consent message setting](/form-block/settings#consent-message) for more information). You can also add a custom message here if the default global one doesn’t fit.

## Name attribute

The name attribute of a form element has a special meaning, which is why it is explicitly described below. It is used to match a submitted value of the form with the actual defined form element in the editor. Thus, it have to be unique. If multiple fields have identical names and are on the same level (e.g. repeater fields create a new level), they will overwrite each other. The value of the second field will overwrite the value of the first field and so on.

Having identical names for different fields can also be necessary, though. E.g. for inputs of type radio, the name should be identical if you should only be able to select a single radio value. This way, these fields are connected and each time you select one value, the other radio fields will be deselected automatically by the browser.

By default, the name is automatically generated from the label of the field. You can also overwrite it in the block sidebar. If the label does not match the generated value, a warn icon is displayed alongside the label, since it should somewhat match. If this was intentional, you can ignore this warning.
