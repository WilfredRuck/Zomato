class FoodController < ApplicationController
  def index
  end

  def new
  	@restaurant = Restaurant.new
  end

  def create
  	@restaurant = Restaurant.new(restaurant_params)
  	if @restaurant.save
  		redirect_to "/"
  	end 
  end

  def show
  end

  private

  def restaurant_params
  	params.require(:restaurant).permit(:name, :res_id)
    # REQUIRE & ALLOW SUBMISSION OF RESTAUARANT NAME AND ID
  end
end
