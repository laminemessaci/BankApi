import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserData } from '../screens/Profile'
import { INames, IProfileCredentials, IProfileNames } from './auth.service'
import { IAccounts } from './../screens/Transaction'

// Initiate all state values
const initialValues: IAuth = {
  token: null,
  userName: { firstName: '', lastName: '' },
  userInfos: null,
  accounts: null,
}

// User Slices
const authSlice = createSlice({
  name: 'auth',
  initialState: initialValues,

  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
    },
    setUserName: (state, action: PayloadAction<{ userName: INames }>) => {
      state.userName = action.payload.userName
    },
    setUserInfos: (state, action: PayloadAction<{ userInfos: IUserData }>) => {
      state.userInfos = action.payload.userInfos
    },

    setUserAccount: (state, action: PayloadAction<{ accounts: IAccounts }>) => {
      state.accounts = action.payload.accounts
    },

    defaultState: (state) => {
      state = initialValues
    },
  },
})

// Initiate types
interface IAuth {
  token: string | null
  userName: INames | null
  userInfos: IUserData | null
  accounts: IAccounts | null
}

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken, setUserName, setUserInfos, setUserAccount } = authSlice.actions
export default authSlice.reducer
