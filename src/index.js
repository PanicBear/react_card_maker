import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.module.css";
import Auth from "./service/auth/auth";
import DB from "./service/db/db";
import Cloudinary from "./service/cloudinary/cloudinary";
// import reportWebVitals from "./reportWebVitals";

const httpClient = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
});
const auth = new Auth();
const db = new DB();
const cloudinary = new Cloudinary(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} db={db} cloudinary={cloudinary} />
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
