import React from 'react';

import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
  if (!false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />; //restitue les routes enfants
};

export default PrivateRoute;
