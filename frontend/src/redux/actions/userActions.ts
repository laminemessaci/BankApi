import axios from 'axios'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_TRANSACTION_FAIL,
  USER_UPDATE_TRANSACTION_REQUEST,
} from '../constants/userConstants'
import { IUserState } from '../userReducerTypes'
import { USER_UPDATE_TRANSACTION_SUCCESS } from './../constants/userConstants'
import { UserLoginActionType, UserRegisterActionType } from './userActionsTypes'

// Login Action
export const login =
  (email: string, password: string): ThunkAction<void, IUserState, unknown, Action<string>> =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: UserLoginActionType.USER_LOGIN_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const {
        data: {
          body: { user, token },
        },
      } = await axios.post('/api/v1/user/login', { email, password }, config)

      dispatch({
        type: UserLoginActionType.USER_LOGIN_SUCCESS,
        payload: { user, token },
      })

      localStorage.setItem('userInfo', JSON.stringify({ user, token }))
    } catch (error: string | any) {
      dispatch({
        type: UserLoginActionType.USER_LOGIN_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
    }
  }

// logout Action

export const logout = () => async (dispatch: Dispatch<Action>) => {
  try {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })

    dispatch({ type: UserLoginActionType.USER_DETAILS_RESET })

    document.location.href = '/'
  } catch {
    console.log('Error logging out ')
  }
}

// Register Action
export const register =
  (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
  ): ThunkAction<void, IUserState, unknown, Action<string>> =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: UserRegisterActionType.USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const {
        data: {
          body: { user, token },
        },
      } = await axios.post('/api/v1/user/signup', { email, firstName, lastName, password }, config)

      dispatch({
        type: UserRegisterActionType.USER_REGISTER_SUCCESS,
        payload: { user, token },
      })

      dispatch({
        type: UserLoginActionType.USER_LOGIN_SUCCESS,
        payload: { user, token },
      })

      localStorage.setItem('userInfo', JSON.stringify({ user, token }))
      document.location.href = '/profile'
    } catch (error: string | any) {
      dispatch({
        type: UserRegisterActionType.USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
    }
  }

// Update User Details Action
export const updateUserProfile =
  (firstName: string, lastName: string): ThunkAction<void, IUserState, unknown, Action<string>> =>
  async (dispatch: Dispatch<Action>, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const token = await userInfo.token

      const {
        data: {
          body: { user },
        },
      } = await axios.put('/api/v1/user/profile', { firstName, lastName }, config)

      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: { user, token },
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token },
      })
      await localStorage.setItem('userInfo', JSON.stringify({ user, token }))
      document.location.href = '/profile'
    } catch (error: string | any) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(logout())
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      })
    }
  }

// Get User Details Action
export const getUserDetails =
  (id: string): ThunkAction<void, IUserState, unknown, Action<string>> =>
  async (dispatch: Dispatch<Action>, getState) => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })

      const {
        userLogin: { userInfo, token },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const { data } = await axios.get(`/api/v1/user/${id}`, config)

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error: string | null | any) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(logout())
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      })
    }
  }

// Update User Transaction Action
export const updateUserTransaction =
  (accounts): ThunkAction<void, IUserState, unknown, Action<string>> =>
  async (dispatch: Dispatch<Action>, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_TRANSACTION_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const token = await userInfo.token

      const {
        data: {
          body: { user },
        },
      } = await axios.put('/api/v1/user/profile/accounts', { accounts }, config)

      dispatch({
        type: USER_UPDATE_TRANSACTION_SUCCESS,
        payload: { user, token },
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token },
      })
      await localStorage.setItem('userInfo', JSON.stringify({ user, token }))
      // document.location.href = '/profile'
    } catch (error: string | any) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message
      if (message === 'Not authorized, token failed') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(logout())
      }
      dispatch({
        type: USER_UPDATE_TRANSACTION_FAIL,
        payload: message,
      })
    }
  }
