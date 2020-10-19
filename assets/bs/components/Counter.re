type action =
  | Tick;

type state = {count: int};

[@react.component]
let make = (~initialCount) => {
  let (count, setCount) = React.useState(_ => initialCount);

  <>
    <div> {React.string("Count: " ++ string_of_int(count))} </div>
    <div>
      <button onClick={_ => setCount(_ => initialCount)}>
        {React.string("Reset")}
      </button>
      <button onClick={_ => setCount(prevCount => prevCount - 1)}>
        {React.string("-")}
      </button>
      <button onClick={_ => setCount(prevCount => prevCount + 1)}>
        {React.string("+")}
      </button>
    </div>
  </>;
};
