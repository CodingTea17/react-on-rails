class EventsController < ApplicationController
  def index
    @events = Event.all
    render component: 'Events', props: { events: @events }
  end
end
