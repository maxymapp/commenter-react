import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "index.css";
import store from "store";
import reportWebVitals from "reportWebVitals";
import { fetchComments } from "./store/slices/commentsSlice";

//fetch comment for initial state
store.dispatch(fetchComments());

const rootEl = document.getElementById("root");

// allow for hot module replacement
const render = () => {
  const App = require("app").default;

  const wrappedApp = (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  ReactDOM.hydrate(wrappedApp, rootEl);
};

render();
if (module.hot) {
  module.hot.accept("app", render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
