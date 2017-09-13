Rails.application.routes.draw do

  #root 'welcome#index', layout: "application"
  root 'magnacarta#index'

  get '/charting/:chance_id' => 'magnacarta#chart'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users, controllers: {
      sessions: 'users/sessions'
  }

  namespace :api do
    resources :events
    resources :chances
  end

end
