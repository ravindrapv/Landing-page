import React from "react";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import Interview from "./Interview";

export default function Home() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/Interview">
          <Interview />
        </Route>
      </Switch>
    </>
  );
}
