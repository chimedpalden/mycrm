class User < ApplicationRecord
  has_secure_password
  has_secure_token :authentication_token
  has_many :bookings

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
