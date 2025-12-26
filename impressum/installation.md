# Installation

After buying Impressum Plus you will receive a download link to the plugin file and a license key. For the free Impressum plugin, such credentials are neither available, nor required.

## Installation through the backend

You can uploaded the downloaded `.zip` file directly in your WordPress backend. You will need a user account with administrator permissions (or super administrator permissions in multisite installations). As soon as you’re logged in, you can find the entry **Plugins > Install** in the menu. You can upload the `.zip` file on this page by clicking on the button “Upload plugin” alongside the headline.

## Installation through FTP

To install the downloaded `.zip` file through (S)FTP, you first need to extract it and upload the files and folders with an FTP program of your choice onto your website.  
After the upload, they should be found in `wp-content/plugins/impressum-plus` or `wp-content/plugins/impressum`.

## Installation via Composer

since 2.11.0

Composer is a package manager for PHP projects, which can be used in your own PHP projects to add Impressum Plus as a required package.

### Add `auth.json`

The `auth.json` file is used in Composer to manage credentials. Since our Composer repository requires authentication via email address and license key, add the following to your `auth.json` in your project’s root directory:

```json
{
	"http-basic": {
		"packages.epiph.yt": {
			"username": "your-email@domain.tld",
			"password": "146e217a-1520-437a-858a-29922787fa7d"
		}
	}
}
```

Replace the value of `username` with the email address your license is connected with and the value of `password` with your license key. You can found both of them in [your account](https://epiph.yt/en/customer-account/licenses/).

### Add repository

Next, you need to add the repository `packages.epiph.yt` to your `composer.json`. This can look like this:

```json
"repositories": [
	{
		"type": "composer",
		"url": "https://packages.epiph.yt"
	}
]
```

### Install the plugin

Now you can install the plugin via Composer with one command:

```shell
composer require epiphyt/impressum-plus
```
