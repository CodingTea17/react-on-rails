class EventsController < ApplicationController
  def index
    @events = Event.all
    render component: 'Events', props: { events: @events }
  end

  def create
    @event = Event.new(event_params)
    respond_to do |format|
      format.json do
        if @event.save
          render :json => @event
        else
          render :json => { :errors => @event.errors.messages }, :status => 422
        end
      end
    end
  end

private

  def event_params
    params.require(:event).permit(:name, :description, :owner, :when)
  end
end
