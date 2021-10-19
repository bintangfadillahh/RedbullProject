import React, { Fragment } from "react";
// import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Divider />
      <Footer />
    </Fragment>
  );
}

export default App;
