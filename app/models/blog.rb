class Blog < ApplicationRecord
	extend FriendlyId
    friendly_id :title, :use => :slugged


   	has_attached_file :image
    # attr_accessible :image
    validates_attachment :image, content_type: { content_type: /\Aimage\/.*\Z/ }
end
