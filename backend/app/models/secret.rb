class Secret < ApplicationRecord
  has_many :comments, dependent: :destroy

  def comments_size
    comments.size
  end

end
