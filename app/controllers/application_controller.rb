class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  include NativeSupport

  inertia_share flash: -> { { notice: flash.notice } }
  inertia_share sprite_path: -> { ActionController::Base.helpers.image_path("sprite-sheet.svg") }
end
