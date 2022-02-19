import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import LayoutBackoffice from "../../Containers/Backoffice/LayoutBackoffice";
import { selectAuth } from "../../features/auth/authSlice";

import routes from "./routes";

import SuperRoute from "./index";

const PrivateRoute = () => {
  const { auth, user } = useSelector(selectAuth);

  return (
    <>
      {auth ? (
        user.role_id === 1 ? (
          <LayoutBackoffice>
            <div className="container-app">
              {routes.map(({ component, path, exact }) => {
                return <SuperRoute key={path} component={component} exact={exact} path={path} />;
              })}
            </div>
          </LayoutBackoffice>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
