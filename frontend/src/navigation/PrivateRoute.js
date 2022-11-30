import React from 'react'

import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {
  if (!true) {
    return <Navigate to='/login' />
  }
  return <Outlet /> //Gets the children's routes
}

export default PrivateRoute
