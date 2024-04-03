// IMPORT
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from './app/store'
import { Provider } from 'react-redux'

// STYLE
import "./index.css";

// PAGES
import App from "./app/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)