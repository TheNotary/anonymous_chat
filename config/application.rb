require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AnonymousChat
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true

    config.middleware.delete Rack::Lock
    config.middleware.use FayeRails::Middleware, mount: '/faye', :timeout => 25
  end
end
