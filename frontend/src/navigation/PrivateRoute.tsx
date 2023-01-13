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

/**
 * * Private Route
 * @returns {JSX.Element}
 */
const PrivateRoute: React.FC<RouteObject> = (): JSX.Element => {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (!userInfo) {
    return <Navigate to='/login' />
  }
  return <Outlet /> // Gets the children's routes
}

export default PrivateRoute
