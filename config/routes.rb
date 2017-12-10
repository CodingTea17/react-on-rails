Rails.application.routes.draw do
  root :to => "events#index"
  post '/events.json', to: 'events#create' 
end
