// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import Category from "./components/Category.js";
import CategoryList from "./components/CategoryList.js";
import { Provider } from "react-redux";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const AppWithProvider = (
  <Provider store={store}>
    <App />
    <CategoryList />
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
