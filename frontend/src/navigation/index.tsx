import { ActionFunction, LoaderFunction, Route, Routes, ShouldRevalidateFunction } from 'react-router-dom'
import ErrorPage from './../screens/ErrorPage'
import Loader from '../components/Loader'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('../screens/Home'))
const Login = lazy(() => import('../screens/Login'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const Profile = lazy(() => import('../screens/Profile'))
const SingUp = lazy(() => import('../screens/SingUp'))
const Transaction = lazy(() => import('../screens/Transaction'))

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
 * * Router
 * @returns {JSX.Element}
 */

const Navigation: React.FC<RouteObject> = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader type='bubbles' color='green' height={200} width={200} />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SingUp />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/transactions/:id' element={<Transaction />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}

export default Navigation
