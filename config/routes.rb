Rails.application.routes.draw do
  resources :tasks
  resources :lists
  root to: 'application#angular'
end
