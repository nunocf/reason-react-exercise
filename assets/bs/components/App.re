type model = {
  page: int,
  pageCount: int,
  pageSize: int,
};

[@react.component]
let make = (~jsonString: string) =>
  <> <Greeting message="Nuno" /> <Counter initialCount=0 /> </>;
