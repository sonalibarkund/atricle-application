json.extract! contact, :id, :name, :email, :phoneno, :comments, :created_at, :updated_at
json.url contact_url(contact, format: :json)
