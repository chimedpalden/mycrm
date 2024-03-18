class Interaction < ApplicationRecord
  belongs_to :contact
  enum interaction_type: [:video, :text, :audio, :in_person]

  validates :interaction_type, presence: true
  validates :description, presence: true, length: 5..500, allow_blank: false
  validates :contact, presence: true
end
