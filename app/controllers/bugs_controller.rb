class BugsController < ApplicationController
  def index
    render inertia: "bugs/index"
  end
end
