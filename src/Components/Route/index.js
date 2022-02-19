import React from "react";
import { Route as ReactRouterRoute, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./Route.css";

const SuperRoute = ({ component: Component, isAuthenticated, ...anotherProps }) => {
  return (
    <ReactRouterRoute {...anotherProps}>
      {({ match }) =>
        !isAuthenticated ? (
          <CSSTransition unmountOnExit classNames="slide" in={match != null} timeout={1000}>
            <div className="inner">
              <Component />
            </div>
          </CSSTransition>
        ) : (
          <Redirect to={{ pathname: "/home", state: { from: match } }} />
        )
      }
    </ReactRouterRoute>
  );
};

SuperRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isAuthenticated: PropTypes.bool,
};

export default SuperRoute;
