import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

const ProtectedRoutes = () => (
  <Switch>
    {routes.map(({ component, path, exact }, i) => {
      return <Route key={i} exact={exact} path={`/${path}`} component={component} />;
    })}
  </Switch>
);

export default ProtectedRoutes;
