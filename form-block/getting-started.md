# Getting started

After installing the plugin you can find the entry Form Block Pro and Form Block in the plugin overview – in **Plugins** menu entry of the WordPress backend. You can activate the plugins through this entry. Please make sure to activate Form Block first (or use the bulk processing to activate both simultaneously).

## Add your first form

Form Block is completely block-based and thus only compatible with the block editor (Gutenberg editor). It cannot be used within other editors. Go to the page or post where you want to add a form and search for “form” in the block inserter and select the “Form” block to insert a form.

<img src="/images/form-block/form-block-inserter.png" alt="Block editor inserter with Form block highlighted">

The form block will be inserted and presents a selection for different form types. You can still change/extend the given form types and all form fields after selecting one of them.

### Form Wizard

The form wizard is an interactive method to create a completely custom form. Enter the form fields you want to use as comma separated list and Form Block will generate the best matching form fields for you.

### Empty Form

The empty form contains a single empty input element as well as a submit button. It’s meant to be used for completely custom forms.

### Contact Form

The contact form is optimized to get in touch with you and provides fields for a name, email address, phone number as well as a message.

### Newsletter Form

The newsletter form is optimized to be used to get the necessary data for using in a newsletter form. That means, it contains an email address field and a submit button.

## Edit/extend forms

Each form contains nested blocks for each form element. This could look like this as structure:

```
Form
├── Input
├── Select
├── Textarea
├── Columns
│   └── Column
│       └── Input
│   └── Column
│       └── Input
└── Fieldset
    ├── Input
    └── Input
```

You can either click on any inner block directly to select it, use the document overview on the upper left corner of the editor or select the next parent block from the first icon on the left of the block toolbar.

To add new form fields, either select the form block and use the “Add block” plus icon on the lower right corner of the block, or select the three dots on the block toolbar of an existing block inside the form and select “Add before” or “Add after”, depending on whether you want to add a block before or after the current selected block.

For the form elements like input, select and textarea, you can define the label and their required state directly within the content area of the editor. Any additional setting can be defined using the block sidebar.

For the select block, you can also define each option that is selectable directly from the content area by clicking on the “Manage option” block. Here, you can add a list of options, with both the value and/or the label of the field. If no label is defined, the value will also be displayed as label. If no value is defined, no data will be passed when submitting the field (this is helpful for a default option like “Please select” – this is why such an option already exists when adding this block).
