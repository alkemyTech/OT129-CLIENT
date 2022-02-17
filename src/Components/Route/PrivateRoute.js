import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { selectAuth, getToken } from "../../features/auth/authSlice";
import { selectorUsers } from "../../features/user/users-slice";

const PrivateRoute = ({ children }) => {
  const {
    user: { role_id },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  return <Route> {role_id === 1 ? children : <Redirect to="/" />} </Route>;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PrivateRoute;
