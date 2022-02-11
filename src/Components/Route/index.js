import React from "react";
import { Route as ReactRouterRoute } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./Route.css";

const Route = ({ component: Component, ...anotherProps }) => {
  return (
    <ReactRouterRoute {...anotherProps}>
      {({ match }) => (
        <CSSTransition unmountOnExit classNames="slide" in={match != null} timeout={1000}>
          <div className="inner">
            <Component />
          </div>
        </CSSTransition>
      )}
    </ReactRouterRoute>
  );
};

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default Route;
