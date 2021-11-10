import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/logement/:id" exact component={Accomodation} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
