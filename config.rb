# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"
output_style = :expanded
line_comments = false
relative_assets = true

# 本番用css（debug code無し・圧縮）を生成する際は下記をコメントアウト
# environment = :production

output_style = (environment == :production)? :compressed: :nested
line_comments = (environment == :production)? false: true
sass_options = (environment == :production) ? { :debug_info => false } : { :debug_info => true }

asset_cache_buster do |http_path, real_path|
  nil
end