import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserData } from '../screens/Profile'
import { INames, IProfileCredentials, IProfileNames } from './auth.service'

// Initiate all state values
const initialValues: IAuth = {
  token: null,
  userName: { firstName: '', lastName: '' },
  userInfos: null,
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
      // console.log('action====', action.payload.userName)
      state.userName = action.payload.userName
    },
    setUserInfos: (state, action: PayloadAction<{ userInfos: IUserData }>) => {
      console.log('action====', action.payload.userInfos)
      state.userInfos = action.payload.userInfos
    },
    // setNamesForm: (state, action: PayloadAction<{ namesForm: IProfileNames }>) => {
    //   state.namesForm = action.payload.namesForm
    // },
    // setCredentialsForm: (state, action: PayloadAction<{ credentialsForm: IProfileCredentials }>) => {
    //   state.credentialsForm = action.payload.credentialsForm
    // },
    // setActiveAccount: (state, action: PayloadAction<{ id: number }>) => {
    //   state.accountId = action.payload.id
    // },
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
}

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken, setUserName, setUserInfos } = authSlice.actions
export default authSlice.reducer
