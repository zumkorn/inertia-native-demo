class NumbersController < ApplicationController
  def index
    render inertia: "numbers/index"
  end

  def show
    render inertia: "numbers/show", props: { number: params[:id] }
  end
end
