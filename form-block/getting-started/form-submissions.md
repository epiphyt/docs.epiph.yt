# Form submissions

By default, Form Block Pro and Form Block store submitted form data for each form in **Tools > Form Submissions**. This sub menu item is available as soon as at least one form submission is available. Here, you can find all the details of the submitted form data in a table.

## Data

Here, you can find the form label, if a custom one has been added, where you can differentiate between the forms. By clicking on the button “View submitted data”, you get a list of all fields and files that have been submitted with this request.

## Source

Here, the page/content where the form has been added and submitted is displayed and linked, so that you can directly jump to it.

## Date

The date the form data was submitted.

## Actions

### Respond <Badge type="tip" text="Only in Form Block Pro" />

You can directly respond to a form submission right within the backend. Click on the button “Respond” and a modal will appear where you can use a rich text editor to respond directly to the submission. This is only possible if there is an email available in the submitted data.

You can also show all submitted data right within the modal by clicking on the button “View submitted data”, identical to the view in the table itself.

### Delete

By default, form submissions are deleted after 30 days. This is configurable in the [settings](/form-block/settings#local-submission-storage). If you want to manually delete a particular form submission, you can just click on the button “Delete”. This action is immediate and cannot be undone.

## Search/Filter

On top of the table, you can also search for form data and filter it by a specific form. For the latter, the form label is used, if set. Since multiple forms can have identical names, the ID of the particular forms are also part of the filter. These are only noticeable in the source code of each form as hidden input field, which can look like this:

```html
<input type="hidden" name="_form_id" value="a532ccd4-d671-4aac-9e80-d4bce1e89d5d" />
```

Here, you can find the ID as `a532ccd4-d671-4aac-9e80-d4bce1e89d5d` inside the `value` attribute.
