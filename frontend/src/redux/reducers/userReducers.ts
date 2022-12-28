import {
  LoginActions,
  RegisterActions,
  UserLoginActionType,
  UserRegisterActionType,
  UserTransactionActionType,
  UserUpdateActionType,
} from '../../redux/actions/userActionsTypes'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
} from '../constants/userConstants'
import { UserLoginState, UserRegisterState } from '../userReducerTypes'

const initialState: UserLoginState = {
  loading: false,
  error: '',
  userInfo: undefined,
}

export const userLoginReducer = (state: UserLoginState = initialState, action: LoginActions): UserLoginState => {
  switch (action.type) {
    case UserLoginActionType.USER_LOGIN_REQUEST:
      return { ...initialState, loading: true, error: null }

    case UserLoginActionType.USER_LOGIN_SUCCESS:
      return { ...initialState, loading: false, userInfo: action.payload }
    case UserLoginActionType.USER_LOGIN_FAIL:
      return { ...initialState, loading: false, error: action.payload }

    default:
      return state
  }
}

export const userRegisterReducer = (state = initialState, action: RegisterActions): UserRegisterState => {
  switch (action.type) {
    case UserRegisterActionType.USER_REGISTER_REQUEST:
      return { ...initialState, loading: true, error: null }

    case UserRegisterActionType.USER_REGISTER_SUCCESS:
      return { ...initialState, loading: false, error: null, userInfo: action.payload }
    case UserRegisterActionType.USER_REGISTER_FAIL:
      return { ...initialState, loading: false, error: action.payload }

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
    case UserUpdateActionType.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case UserUpdateActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case UserUpdateActionType.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userUpdateTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_REQUEST:
      return { loading: true }
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
