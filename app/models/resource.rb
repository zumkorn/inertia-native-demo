class Resource
  include ActiveModel::Model

  attr_accessor :first_name, :last_name

  validates :first_name, :last_name, presence: true
end
