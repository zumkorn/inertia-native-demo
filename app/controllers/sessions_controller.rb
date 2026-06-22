class SessionsController < ApplicationController
  def new
    render inertia: "sessions/new"
  end

  def create
    cookies.encrypted.permanent[:authenticated] = true
    redirect_to protected_path
  end

  def destroy
    cookies.delete(:authenticated)
    redirect_to root_path
  end

  def protected
    if cookies.encrypted[:authenticated]
      render inertia: "sessions/protected"
    else
      redirect_to new_session_path
    end
  end
end
