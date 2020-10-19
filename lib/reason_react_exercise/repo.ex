defmodule ReasonReactExercise.Repo do
  use Ecto.Repo,
    otp_app: :reason_react_exercise,
    adapter: Ecto.Adapters.Postgres
end
