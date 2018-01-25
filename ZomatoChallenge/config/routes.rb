Rails.application.routes.draw do
  root 'food#index'
  get '/', to: 'food#index'

  get '/show', to: 'food#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
