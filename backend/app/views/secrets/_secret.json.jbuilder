json.extract! secret, :id, :content, :category, :likes, :dislikes, :created_at, :comments_size
json.url secret_url(secret, format: :json)
