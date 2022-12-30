import Cookies from 'universal-cookie'
import { expiresDate } from './formatter'

export const getLocalToken = () => {
  const cookie = new Cookies()
  return cookie.get('token')
}

// Put the new token in cookies
export const setLocalToken = (token: string, rememberMe: boolean) => {
  const cookie = new Cookies(),
    options = { path: '/', expires: expiresDate(rememberMe ? 395 * 24 : 0.5) }
  cookie.set('token', token, options)
}
