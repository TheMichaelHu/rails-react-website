Rails.application.routes.draw do
  get 'home/index'
  get 'project/:id', to: 'home#index'

  resources :projects, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
