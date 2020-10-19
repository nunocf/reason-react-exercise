import "../css/app.scss";
import "phoenix_html";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { make as App } from "../bs/components/App.bs";

window.addEventListener("load", () => {
  let root = document.getElementById("app");
  if (root != null) {
    ReactDOM.render(<App jsonString="{}"></App>, root);
  }
});
