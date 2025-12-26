# Server Requirements

## Apache2

For Apache2, Impressum Plus already provides a functional `.htaccess` content:

```
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

If you want to, you can also [disable it](/impressum/developer/general#impressum-plus-skip-rewrite-rules).

## nginx

You need to pass the following content in the global `$_SERVER` variable (for instance via PHP-FPM):

`$_SERVER['HTTP_AUTHORIZATION']`<br>
`$_SERVER['REDIRECT_HTTP_AUTHORIZATION']`<br>
`$_SERVER['PHP_AUTH_USER']` and `$_SERVER['PHP_AUTH_PW']`

Example configration of the FastCGI parameters:

```nginx
location ~ (?U)\.php(/.*$|$) {
	fastcgi_split_path_info ^((?U).+\.php)(/.+)?$;

	fastcgi_param   QUERY_STRING            $query_string;
	fastcgi_param   REQUEST_METHOD          $request_method;
	fastcgi_param   CONTENT_TYPE            $content_type;
	fastcgi_param   CONTENT_LENGTH          $content_length;

	fastcgi_param   SCRIPT_FILENAME         $request_filename;
	fastcgi_param   SCRIPT_NAME             $fastcgi_script_name;
	fastcgi_param   REQUEST_URI             $request_uri;
	fastcgi_param   DOCUMENT_URI            $document_uri;
	fastcgi_param   DOCUMENT_ROOT           $document_root;
	fastcgi_param   SERVER_PROTOCOL         $server_protocol;

	fastcgi_param   GATEWAY_INTERFACE       CGI/1.1;
	fastcgi_param   SERVER_SOFTWARE         nginx/$nginx_version;

	fastcgi_param   REMOTE_ADDR             $remote_addr;
	fastcgi_param   REMOTE_PORT             $remote_port;
	fastcgi_param   SERVER_ADDR             $server_addr;
	fastcgi_param   SERVER_PORT             $server_port;
	fastcgi_param   SERVER_NAME             $server_name;

	fastcgi_param   PHP_AUTH_USER           $remote_user if_not_empty;
	fastcgi_param   PHP_AUTH_PW             $http_authorization if_not_empty;

	fastcgi_param   HTTPS                   $https if_not_empty;

	# PHP only, required if PHP was built with --enable-force-cgi-redirect
	fastcgi_param   REDIRECT_STATUS         200;

	fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
	fastcgi_param PATH_INFO $fastcgi_path_info;
	if (!-e $document_root$fastcgi_script_name) {
		return 404;
	}

	fastcgi_read_timeout 300;
	fastcgi_pass 127.0.0.1:9000;
	fastcgi_index index.php;
}
```
