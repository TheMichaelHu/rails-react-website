Rails.application.routes.draw do
  get 'home/index'
  get 'project/:id', to: 'home#index'
  get 'hobbies', to: 'home#index'

  resources :projects, only: [:index, :show]

  namespace :survey do
    constraints subdomain: 'survey' do
        resources :surveys, only: [:index]
        resources :annotations, only: [:create, :destroy]
      root 'surveys#index'
    end
  end

  resources :surveys, only: [:index]
  resources :annotations, only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
