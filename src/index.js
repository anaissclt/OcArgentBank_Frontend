// IMPORT
import React from "react";
import ReactDOM from "react-dom/client";

// STYLE
import "./index.css";

// PAGES
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
