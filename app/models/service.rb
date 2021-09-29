class Service < ApplicationRecord
  has_many :comments
  belongs_to :worker
  validates :title, :rate, presence: true
  validates :rate, numericality: true
end
