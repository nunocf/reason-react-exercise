# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :reason_react_exercise,
  ecto_repos: [ReasonReactExercise.Repo]

# Configures the endpoint
config :reason_react_exercise, ReasonReactExerciseWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SdmbH4QIRvjLf7r8O3bbo/wkRJf/ooIxlPj4hdkzOyxG7gdXnoyo3IHWRcIJlKbu",
  render_errors: [view: ReasonReactExerciseWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReasonReactExercise.PubSub,
  live_view: [signing_salt: "PGKdVY7G"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
