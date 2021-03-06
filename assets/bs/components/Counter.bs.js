// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function Counter(Props) {
  var initialCount = Props.initialCount;
  var match = React.useState(function () {
        return initialCount;
      });
  var setCount = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Count: " + String(match[0])), React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (param) {
                                        return initialCount;
                                      }));
                        })
                    }, "Reset"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (prevCount) {
                                        return prevCount - 1 | 0;
                                      }));
                        })
                    }, "-"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (prevCount) {
                                        return prevCount + 1 | 0;
                                      }));
                        })
                    }, "+")));
}

var make = Counter;

export {
  make ,
  
}
/* react Not a pure module */
