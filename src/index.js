import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter basename="/reactjs-bookstore">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
