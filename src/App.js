import React, { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Dashboard } from "./components/Dashboard";

function App() {
  let [sortItem, setSortItem] = useState("score");
  return (
    <div className="App">
      <Header setSortItem={setSortItem} />
      <Dashboard sortItem={sortItem} />
    </div>
  );
}

export default App;
