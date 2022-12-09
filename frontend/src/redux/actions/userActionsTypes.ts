import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'
import { UserData, UserLoginState } from '../userReducerTypes'

/* Actions */
export interface UserLoggingRequestAction {
  type: typeof USER_LOGIN_REQUEST
}
export interface UserLoggingSuccessAction {
  type: typeof USER_LOGIN_SUCCESS
  payload: UserData
}
export interface UserLoggingFailAction {
  type: typeof USER_LOGIN_FAIL
  payload: string | null
}
export interface UserLogOutAction {
  type: typeof USER_LOGOUT
}

export interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST
}

export interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS
  payload: UserData
}

export interface UserRegisterFailAction {
  type: typeof USER_REGISTER_FAIL
  payload: string | null
}

export type LoginActions =
  | UserLoggingRequestAction
  | UserLoggingSuccessAction
  | UserLoggingFailAction
  | UserLogOutAction
  | UserRegisterFailAction
  | UserRegisterSuccessAction
  | UserRegisterRequestAction

export enum UserActionType {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_DETAILS_RESET = 'USER_DETAILS_RESET',
  USER_REGISTER_SUCCESS = ' USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',
  USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
}
