import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_UPDATE_PROFILE_REQUEST,
} from './constants/userConstants'

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

/* Actions */

export type UserLoggingAction = {
  type: typeof USER_LOGIN_REQUEST
}

export type UserUpdatingAction = {
  type: typeof USER_UPDATE_PROFILE_REQUEST
}

export type UserRegisterAction = {
  type: typeof USER_REGISTER_REQUEST
}

export type UserLogoutAction = {
  type: typeof USER_LOGOUT
}

export type UserStoreAction = UserLoggingAction | UserUpdatingAction | UserRegisterAction | UserLogoutAction
