import React from "react";
import App from "./components/App";
import { Route, Switch } from "react-router-dom";
import InterviwePanel from "./Pages/InterviwePanel";

export default function Home() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/Interview">
          <InterviwePanel />
        </Route>
      </Switch>
    </>
  );
}
