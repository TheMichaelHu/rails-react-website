Rails.application.routes.draw do
  get 'home/index'
  get 'project/:id', to: 'home#index'

  resources :projects, only: [:index, :show]

  namespace :survey do
    constraints subdomain: 'survey' do
        resources :surveys, only: [:index]
        resources :annotations, only: [:create, :destroy]
      root 'surveys#index'
    end
  end

  # dev only routes to get arund localhost issues
  if Rails.env.development?
    resources :surveys, only: [:index]
    resources :annotations, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
