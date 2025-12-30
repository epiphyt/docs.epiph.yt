# Settings

By default, Form Block uses the overall best settings. You can customize them in **Settings > Form Block**.

## Maximum form upload size

You can define a maximum global upload size for each form. If not defined (default), the server-side limit is used. This limit can also be found below the field in its description. Using a higher value is technically impossible.

## Data handling

### Local submission storage

Submitted form data is stored for 30 days by default in the database and on the server. You can customize the value here. If set to 0, form submissions are never deleted automatically, but can be deleted manually on **Tools > Form Submissions**.

### Preserve data on uninstall

Enable this checkbox to preserve all data of Form Block on uninstallation, e.g. when you’re testing something or you plan to use Form Block again in the future. Otherwise, all data of Form Block will be deleted on uninstallation. Please keep in mind that added forms in the block editor still need to be cleaned up manually, since the content of pages/posts will not be altered by Form Block.

## Consent message <Badge type="tip" text="Only in Form Block Pro" />

The idea of the consent message is that you have a single global field to allow defining a text for an explicit consent the user has to give in order to allow the necessary data processing after submitting the form. However, current legal status is that this is not needed, since by filling the form and submitting it, this consent is implicit. Otherwise, you could not work with it.

This setting is still available in case you use it to allow managing this global consent message.
