class User < ApplicationRecord
	has_secure_password

	has_many :articles, :dependent => :delete_all

	before_save {self.email = email.downcase}

	validates :username, presence: true, length: {minimum: 3, maximum: 20}, uniqueness:{case_sensitive: false}

	VALID_EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

	validates :email, presence: true, length: {maximum: 20},uniqueness:{case_sensitive: false}, 
			   format: {with: VALID_EMAIL_REGEX}
end
