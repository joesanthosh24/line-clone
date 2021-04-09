import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/home.page";
import MessengerAppPage from "./pages/messenger-app/messenger-app.page";
import ServicesPage from "./pages/services/services.page";

import Navbar from "./components/navbar/navbar.component";

function App() {
  const { pathname } = useLocation();

  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar selected={selected} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/messages" component={MessengerAppPage} />
        <Route path="/services" component={ServicesPage} />
      </Switch>
    </div>
  );
}

export default App;
