#json.partial! "secrets/secret", secret: @secret
json.(@secret, :content, :category, :likes, :dislikes, :created_at, :updated_at)
json.comments @secret.comments, :content, :created_at
