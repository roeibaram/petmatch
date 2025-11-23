import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/petmatch">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
