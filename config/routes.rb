Rails.application.routes.draw do
  root to: 'artists#index'

  resources :songs, only: [:index, :show]
  resources :artists do
    resources :songs
    resources :genres
  end
end
