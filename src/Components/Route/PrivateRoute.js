import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isLogin } from "../../utils/isLogin";

const PrivateRoute = ({ component: Component, ...anotherProps }) => {
  return (
    <Route
      {...anotherProps}
      render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PrivateRoute;
