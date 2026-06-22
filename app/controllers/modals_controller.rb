class ModalsController < ApplicationController
  def new
    render inertia: "modals/new"
  end

  def show
    render inertia: "modals/show"
  end

  def replace
    render inertia: "modals/replace"
  end
end
