# frozen_string_literal: true

InertiaRails.configure do |config|
  config.version = ViteRuby.digest
  # History encryption needs Web Crypto (crypto.subtle), which is only available
  # in a secure context (HTTPS). Hotwire Native loads the dev server over plain
  # http://<lan-ip>, so encryption would throw "Unable to encrypt history".
  config.encrypt_history = false
  config.always_include_errors_hash = true
  config.use_script_element_for_initial_page = true
  config.use_data_inertia_head_attribute = true
end
