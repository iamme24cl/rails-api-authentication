Rails.application.routes.draw do
  # post '/login', to: 'api_keys#create'
  # delete 'logout', to: 'api_keys#destroy'
  # get '/logged_in', to: 'api_keys#index'
  resources :api_keys, path: 'api-keys', only: %i[index create destroy] 
end
