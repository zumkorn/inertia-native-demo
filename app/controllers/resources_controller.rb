class ResourcesController < ApplicationController
  def index
    render inertia: "resources/index"
  end

  def new
    render inertia: "resources/new"
  end

  def create
    resource = Resource.new(resource_params)
    if resource.valid?
      redirect_to resource_path(
        first_name: resource.first_name,
        last_name: resource.last_name
      ), notice: "Form submitted successfully."
    else
      redirect_to new_resource_path, inertia: { errors: resource.errors }
    end
  end

  def show
    render inertia: "resources/show", props: {
      first_name: params[:first_name],
      last_name: params[:last_name]
    }
  end

  def long
    render inertia: "resources/long"
  end

  def scroll
    render inertia: "resources/scroll"
  end

  def upload
    render inertia: "resources/upload"
  end

  private

  def resource_params
    params.permit(:first_name, :last_name)
  end
end
