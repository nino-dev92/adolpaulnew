import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import "./index.css"; // Optional: for global styles
import App from "./App"; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById("root")); // Get the root DOM element
root.render(
  <React.StrictMode>
    <App /> {/* Render your App component */}
  </React.StrictMode>
);
