class Contact < ApplicationRecord
  belongs_to :customer
  has_many :interactions, dependent: :destroy

  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, length: 10..15, allow_blank: true
  validates :position, presence: true
  validates :address, length: 5..500, allow_blank: true
  validates :customer, presence: true
end
