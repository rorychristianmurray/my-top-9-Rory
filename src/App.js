// Dependencies
import React, { useState } from "react";

// Objects
import DataList from "./components/DataList.js";
import EditForm from "./components/EditForm.js";
// Stylings
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([0]);

  function passedSetName(value) {
    setName(value);
  }

  return (
    <div className="App">
      <h1>My Top Nine</h1>
      <DataList user={user} passedSetName={passedSetName} />
    </div>
  );
}

export default App;
