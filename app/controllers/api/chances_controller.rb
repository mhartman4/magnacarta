module Api
  class ChancesController < ApplicationController

    def index
      @data = File.read("#{Rails.root}/public/chances.json")
      render json: @data
    end

    def show
      chances = JSON.parse(File.read("#{Rails.root}/public/chances.json"))
      @chance = chances.select{ |c| c["id"] == params["id"].to_i }[0]

      render json: @chance
    end
  end
end
