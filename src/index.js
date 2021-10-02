import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.module.css";
import Auth from "./service/auth/auth";
// import reportWebVitals from "./reportWebVitals";

const auth = new Auth();
ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
