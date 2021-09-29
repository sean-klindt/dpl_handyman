class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
  validates :name, :phone, presence: true
end
