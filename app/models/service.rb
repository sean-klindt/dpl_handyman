class Service < ApplicationRecord
  has_many :comments
  belongs_to :worker
end
