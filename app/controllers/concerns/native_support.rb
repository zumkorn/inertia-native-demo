# Detects whether the request comes from a Hotwire Native web view and exposes
# that to both ERB (via the `native_app?` helper) and Inertia/React (via shared
# props `nativeApp` / `nativeForm`).
module NativeSupport
  extend ActiveSupport::Concern

  included do
    helper_method :native_app?

    inertia_share do
      { nativeApp: native_app?, nativeForm: @native_form || false }
    end
  end

  private

  def native_app?
    request.user_agent.to_s.match?(/Hotwire Native|Turbo Native/)
  end
end
