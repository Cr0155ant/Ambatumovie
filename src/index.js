import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Your main App component
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import './index.css';

// Wrap your app with Router here
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
