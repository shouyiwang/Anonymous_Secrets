class Comment < ApplicationRecord
  belongs_to :secret #, :counter_cache => true
end
