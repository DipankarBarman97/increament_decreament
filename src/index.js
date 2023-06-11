import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={"Dipankar"}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

export { Context };