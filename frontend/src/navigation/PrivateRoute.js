import React from 'react';

import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
  if (!false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />; //Gets the children of the PrivateRoute component
};

export default PrivateRoute;
