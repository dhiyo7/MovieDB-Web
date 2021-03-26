import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";
import Searching from "./Searching";


export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route exact path="/search" component={Searching} />
      <Route
        path="/external"
        component={() => {
          window.location = "https://reactjs.org/";
          return null;
        }}
      />
    </BrowserRouter>
  );
}
