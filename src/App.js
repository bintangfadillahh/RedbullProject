import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Profil} path="/profil" />
      </Switch>
    </Fragment>
  );
}

export default App;
