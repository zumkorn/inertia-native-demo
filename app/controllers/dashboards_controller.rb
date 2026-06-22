class DashboardsController < ApplicationController
  def show
    render inertia: "dashboards/show"
  end
end
