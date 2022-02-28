import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SuperRoute from "./Components/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import Spinner from "./Components/Spinner/Spinner";
import { publicRoute } from "./Components/Route/publicRoutes";
import PrivateRoute from "./Components/Route/PrivateRoute";
import LayoutPublic from "./Components/Layout/LayoutPublic";
import Error404Page from "./Pages/Error404Page";

function App() {
  const publicRoutes = [
    "/",
    "/contacto",
    "/donar",
    "/gracias",
    "/nosotros",
    "/actividades",
    "/actividades/:id",
    "/novedades",
    "/novedades/:id",
    "/registro",
    "/testimonios",
    "/testimonials/create",
    "/projects/create",
    "/login",
    "/newsletter",
  ];
  const privatesRoutes = ["/backoffice", "/backoffice/*"];

  return (
    <>
      <Router>
        <Suspense fallback={Spinner}>
          <Switch>
            <Route exact path={publicRoutes}>
              <LayoutPublic>
                <div className="container-app">
                  {publicRoute.map(({ path, component, exact }) => {
                    return (
                      <SuperRoute key={path} component={component} exact={exact} path={path} />
                    );
                  })}
                </div>
              </LayoutPublic>
            </Route>

            <Route path={privatesRoutes}>
              <PrivateRoute />
            </Route>
            <Route path="*">
              <LayoutPublic>
                <Switch>
                  <Route component={Error404Page} />
                </Switch>
              </LayoutPublic>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
