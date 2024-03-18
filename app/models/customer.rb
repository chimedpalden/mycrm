class Customer < ApplicationRecord
  has_many :contacts, dependent: :destroy
  default_scope { where(status: true) }

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  URL_REGEXP = /\A(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?\z/ix
  validates :website, format: { with: URL_REGEXP, message: 'You provided invalid URL' }
  
end
