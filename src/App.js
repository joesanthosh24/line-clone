import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import HomePage from "./pages/home/home.page";
import MessengerAppPage from "./pages/messenger-app/messenger-app.page";
import ServicesPage from "./pages/services/services.page";

import Navbar from "./components/navbar/navbar.component";

import { selectCurrentLanguage } from "./features/language/languageSlice";

function App() {
  const { pathname } = useLocation();

  const language = useSelector(selectCurrentLanguage);

  const [selected, setSelected] = useState(pathname);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  return (
    <div className="App">
      <Navbar selected={selected} lang={selectedLanguage} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/messages" component={MessengerAppPage} />
        <Route path="/services" component={ServicesPage} />
      </Switch>
    </div>
  );
}

export default App;
