class Comment < ApplicationRecord
  belongs_to :service
  validates :title, :description, presence:true
end
