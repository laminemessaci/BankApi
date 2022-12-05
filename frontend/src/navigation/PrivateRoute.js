
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  if (!userInfo) {
    return <Navigate to='/login' />
  }
  return <Outlet /> // Gets the children's routes
}

export default PrivateRoute
