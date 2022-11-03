import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
