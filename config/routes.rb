Rails.application.routes.draw do

  root 'welcome#index'
  get 'magnacarta', to: 'magnacarta#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users, controllers: {
        sessions: 'users/sessions'
  }

  namespace :api do
    resources :events
  end

end
