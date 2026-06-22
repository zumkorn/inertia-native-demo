class NavigationsController < ApplicationController
  def show
    render inertia: "navigations/show"
  end

  def redirect
    redirect_to redirected_navigation_path
  end

  def redirected
    render inertia: "navigations/redirected"
  end

  def replace
    render inertia: "navigations/replace"
  end

  def slow
    sleep 1.5
    render inertia: "navigations/slow"
  end

  def second
    render inertia: "navigations/second"
  end
end
