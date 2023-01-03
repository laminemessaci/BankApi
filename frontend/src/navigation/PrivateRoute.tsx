import { useEffect, useRef } from 'react'
import { Cookies } from 'react-cookie'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router'
import { ActionFunction, LoaderFunction, ShouldRevalidateFunction } from 'react-router-dom'
import { setToken, setUserInfos } from '../features/auth.slice'
import { useAppDispatch } from '../features/hooksType'
import { getLocalToken } from '../utils/localDatas'

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
  const location = useLocation(),
    dispatch = useAppDispatch(),
    navigate = useNavigate()
  const token = getLocalToken()
  const timerId = useRef(null)
  const cookie = new Cookies()

  // console.log('PrivateRoute: ', token)
  useEffect(() => {
    // AutoLogout when user is inactive more than the session token timeout.
    const autoLogout = () => {
      // If the windows is not active
      if (document.visibilityState !== 'hidden') {
        const token = getLocalToken()
        // If no token then logout
        if (!token) {
          dispatch(setToken({ token: null }))
          dispatch(setUserInfos({ userInfos: null }))
          cookie.remove('token', { path: '/' })
          navigate('/login')
        }

        // Clear existing timer
        window.clearTimeout(timerId.current)
      }
    }
    // EventListener on the window visibility change
    document.addEventListener('visibilitychange', autoLogout)

    return () => document.removeEventListener('visibilitychange', autoLogout)
  }, [])

  return token ? (
    // If the token is good Then display the page
    <Outlet />
  ) : (
    // If the token is not good Then navigate to signIn page
    <Navigate
      to='/login'
      replace
      state={{ from: location }} // pass current location to redirect back
    />
  )
}

export default PrivateRoute
