import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { selectAuth } from "../../features/auth/authSlice";

const PrivateRoute = ({ comp: Component, isAuthenticated, ...rest }) => {
  const { auth } = useSelector(selectAuth);

  console.log(auth);

  return (
    <Route {...rest} comp={() => (isAuthenticated ? <Component /> : <Redirect to="/login" />)} />
  );
};

PrivateRoute.propTypes = {
  comp: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
