# Filters

## `block_control_ignored_post_types` <Badge type="info" text="Since 1.1.0" />

Through the filter `block_control_ignored_post_types` the post types to ignore in the block sidebar can be changed.

Parameters:
string[] $ignored_post_types List of ignored post types

Expects an array.

## `block_control_hide_post_object` <Badge type="info" text="Since 1.6.0" />

Through the filter `block_control_hide_post_object` the post object that is used to determine whether it's hidden can be changed.

Parameters:
\WP_Post|null $post Post object  
array $value The attribute value  

Expects a `WP_Post` object.
