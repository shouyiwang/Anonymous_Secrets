class Secret < ApplicationRecord
  has_many :comments

  def comments_size
    comments.size
  end

end
