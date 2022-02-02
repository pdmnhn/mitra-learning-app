import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./utils/AppContext";
import App from "./App";
import "./firebase/app";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
