import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'
import { LoginActions, UserActionType } from '../../redux/actions/userActionsTypes'
import { UserLoginState } from '../userReducerTypes'

const initialState: UserLoginState = {
  loading: false,
  error: '',
  userInfo: undefined,
}

export const userLoginReducer = (state: UserLoginState = initialState, action: LoginActions): UserLoginState => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
      return { ...initialState, loading: true, error: null }

    case UserActionType.USER_LOGIN_SUCCESS:
      return { ...initialState, loading: false, userInfo: action.payload }
    case UserActionType.USER_LOGIN_FAIL:
      return { ...initialState, loading: false, error: action.payload }

    default:
      return state
  }
}

export const userRegisterReducer = (state: UserLoginState = initialState, action: LoginActions): UserLoginState => {
  switch (action.type) {
    case UserActionType.USER_REGISTER_REQUEST:
      return {...initialState, loading: true, error: null }

    case UserActionType.USER_REGISTER_SUCCESS:
      return {...initialState, loading: false, error: null, userInfo: action.payload }
    case UserActionType.USER_REGISTER_FAIL:
      return {...initialState, loading: false, error: action.payload }

    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state
  }
}
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
