# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"
output_style = :compressed
line_comments = false
relative_assets = true
sourcemap = true

asset_cache_buster do |http_path, real_path|
  nil
end