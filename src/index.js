// This is the main file that the App component, which is global component
// Only make changes in the file to import stylesheets

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //gloabl stylesheet aka main stylesheet
import "./mobile.css"; // stylesheet for mobile design
import "./laptops.css"; // stylesheet for specific laptop design
import "./desktops.css";
import App from "./App"; // this is the main component that contains all the other components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
