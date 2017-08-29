class Project < ApplicationRecord
  has_and_belongs_to_many :tools
  belongs_to :type
end
