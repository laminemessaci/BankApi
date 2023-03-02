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

// User login Reducer
export const userLoginReducer = (state: UserLoginState = initialState, action: LoginActions): UserLoginState => {
  switch (action.type) {
    case UserLoginActionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null }

    case UserLoginActionType.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload }
    case UserLoginActionType.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

// User Register Reducer
export const userRegisterReducer = (state = initialState, action: RegisterActions): UserRegisterState => {
  switch (action.type) {
    case UserRegisterActionType.USER_REGISTER_REQUEST:
      return { ...state, loading: true, error: null }

    case UserRegisterActionType.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, error: null, userInfo: action.payload }
    case UserRegisterActionType.USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

// User details Reducer
export const userDetailsReducer = (state = { user: {} }, action: { type: any; payload: any }) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return { ...state, user: {} }
    default:
      return state
  }
}
// Update User Details Reducer
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserUpdateActionType.USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true }
    case UserUpdateActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true, userInfo: action.payload }
    case UserUpdateActionType.USER_UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

// Update User Transaction Reducer

export const userUpdateTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_REQUEST:
      return { ...state, loading: true }
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_SUCCESS:
      return { ...state, loading: false, success: true, userInfo: action.payload }
    case UserTransactionActionType.USER_UPDATE_TRANSACTION_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
