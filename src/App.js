import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home.jsx";
import Notfound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" exact component={About} />
          <Route path="/logement" exact component={Accomodation} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
