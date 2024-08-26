import logo from "./logo.svg";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

import About from "./components/About.js";
import Alert from "./components/Alert.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  let data = {
    name: "TextUtil",
    ul1: "Home",
    ul2: "About",
  };
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled.", "success");
    }
  };
  function showAlert(message, type) {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <Router>
      <>
        <Navbar
          title={data}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm title={data} showAlert={showAlert} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
