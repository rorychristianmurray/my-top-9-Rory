// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import DataList from "./components/DataList.js";
import { Provider } from "react-redux";
import EditForm from "./components/EditForm.js";
//import "semantic-ui-css/semantic.css";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const AppWithProvider = (
  <Provider store={store}>
    {/*<App />*/}
    <h1>My Top Nine</h1>
    <DataList />
    <EditForm />
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
