import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './constants/userConstants'

export interface IUser {
  id?: string
  email: string
  firstName: string
  lastName: string
}
export interface IUserData {
  token?: string | null
  userInfo: IUser
}

export interface IUserState {
  userLogin: IUserData
  loading: boolean
  error: string | null
  user: IUserData | null
}

export interface UserLoginState {
  loading: boolean
  error: string | null
  userInfo: UserData
}
// export interface UserRegisterState {
//   loading: boolean
//   error: string | null
//   userInfo: UserData
// }

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserData {
  token: string | null
  user: IUser
}
