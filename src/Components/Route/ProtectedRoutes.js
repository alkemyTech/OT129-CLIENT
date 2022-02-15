import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

const ProtectedRoutes = () => (
  <Switch>
    {routes.map(({ component: Component, path, exact }) => (
      <Route key={path} exact={exact} path={`/${path}`}>
        <Component />
      </Route>
    ))}
  </Switch>
);

export default ProtectedRoutes;
