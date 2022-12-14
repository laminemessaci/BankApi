import { ActionFunction, LoaderFunction, Route, Routes, ShouldRevalidateFunction } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import SingUp from '../screens/SingUp'
import Transaction from '../screens/Transaction'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './../screens/ErrorPage'

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

const Navigation: React.FC<RouteObject> = () => {
  return (
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
  )
}

export default Navigation
