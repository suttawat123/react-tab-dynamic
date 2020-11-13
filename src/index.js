import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// REDUX
import { Provider } from "react-redux";
import configurationStore from "./redux/configurationStore";

const { store } = configurationStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
reportWebVitals();
