import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.module.css";
import Auth from "./service/auth/auth";
import DB from "./service/db/db";
// import reportWebVitals from "./reportWebVitals";

const auth = new Auth();
const db = new DB();
ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} db={db} />
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
