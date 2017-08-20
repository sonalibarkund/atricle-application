Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :articles
  resources :contacts
  resources :blogs
  get 'site/index'
  root 'site#index'


  get "/signup", :to => "users#new"


  get '/overview', :to => "site#overview"
  get '/floorplan', :to => "site#floorplan"
  get '/testimonial', :to => "site#testimonial"
  get '/blog', :to => "site#blog"
  get '/blog/:id', :to => "site#blogdetail"
  get '/contact-us', :to => "site#contact_us"
  post '/create_contacts', :to => "site#create_contacts"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

