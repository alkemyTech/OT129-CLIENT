import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Route from "./Components/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import { publicRoute } from "./Components/Route/publicRoutes";
import PrivateRoute from "./Components/Route/PrivateRoute";
import ProtectedRoutes from "./Components/Route/ProtectedRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="container-app">
          <Switch>
          <Suspense fallback={<Spinner />}>
              {publicRoute.map(({ path, component, exact }, i) => {
                return (
                  <>
                    <Route key={i} component={component} exact={exact} path={path} />
                  </>
                );
              })}
            </Suspense>
            <PrivateRoute>
              <ProtectedRoutes />
            </PrivateRoute>
            <Route component={Error404} path="*" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
