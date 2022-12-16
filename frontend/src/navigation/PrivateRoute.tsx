import { Navigate, Outlet } from 'react-router'
import { ActionFunction, LoaderFunction, ShouldRevalidateFunction } from 'react-router-dom'
import { useTypedSelector } from '../redux/redux-hook/useTypedStore'

interface RouteObject {
  path?: string
  index?: boolean
  children?: React.ReactNode
  caseSensitive?: boolean
  id?: string
  loader?: LoaderFunction
  action?: ActionFunction
  element?: React.ReactNode | null
  errorElement?: React.ReactNode | null

  shouldRevalidate?: ShouldRevalidateFunction
}

const PrivateRoute: React.FC<RouteObject> = () => {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (!userInfo) {
    return <Navigate to='/login' />
  }
  return <Outlet /> // Gets the children's routes
}

export default PrivateRoute
