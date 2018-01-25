class Review < ApplicationRecord
	belongs_to :restaurant
	validates :review_text, presence: true
end
