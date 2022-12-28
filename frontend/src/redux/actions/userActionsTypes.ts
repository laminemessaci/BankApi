import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_TRANSACTION_FAIL,
  USER_UPDATE_TRANSACTION_REQUEST,
  USER_UPDATE_TRANSACTION_SUCCESS,
} from '../constants/userConstants'
import { IAccount, UserData } from '../userReducerTypes'

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

export interface UserTransactionRequestAction {
  type: typeof USER_UPDATE_TRANSACTION_REQUEST
}

export interface UserTransactionSuccessAction {
  type: typeof USER_UPDATE_TRANSACTION_SUCCESS
  payload: IAccount
}

export interface UserTransactionFailAction {
  type: typeof USER_UPDATE_TRANSACTION_FAIL
  payload: string | null
}

export type LoginActions = UserLoggingRequestAction | UserLoggingSuccessAction | UserLoggingFailAction | UserLogOutAction

export type RegisterActions = UserRegisterRequestAction | UserRegisterSuccessAction | UserRegisterFailAction

export type TransactionActions = UserTransactionRequestAction | UserTransactionSuccessAction | UserTransactionFailAction

export enum UserLoginActionType {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_DETAILS_RESET = 'USER_DETAILS_RESET',
  USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',
  USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
}

export enum UserRegisterActionType {
  USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',
  USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
}

export enum UserUpdateActionType {
  USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS',
  USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL',
  USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST',
}

export enum UserTransactionActionType {
  USER_UPDATE_TRANSACTION_REQUEST = 'USER_UPDATE_TRANSACTION_REQUEST',
  USER_UPDATE_TRANSACTION_SUCCESS = 'USER_UPDATE_TRANSACTION_SUCCESS',
  USER_UPDATE_TRANSACTION_FAIL = 'USER_UPDATE_TRANSACTION_FAIL',
}

interface ILogoutUserSuccess {
  type: typeof USER_LOGOUT
}

export type TDispatchLogoutUser = ILogoutUserSuccess
