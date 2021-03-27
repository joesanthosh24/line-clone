import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/home.page";

import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
