module Api
  class EventsController < ApplicationController

    def index
      render json: Event.all
    end

    def show
      @event = Event.find(params[:id])
      render json: @event
    end

    def create
      event = Event.new(event_params)
      if event.save
        render json: event
      else
        render nothing: true, status: :bad_request
      end
    end

    private

    def event_params
      params.require(:event).permit(:name, :description, :event_date, :place)
    end

  end
end
