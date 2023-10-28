import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITransactions } from '../components/Table'
import { getLocalToken } from '../utils/localDatas'

// Auth User API
export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bank-api-1lbd.onrender.com/api/v1/user',
    prepareHeaders: (headers) => {
      // (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getLocalToken() // (getState() as RootState).auth.token
      if (token) headers.set('Authorization', `Bearer ${token}`)

      return headers
    },
  }),
  // Login --> Return the auth token
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Profile --> Return the user profile
    profile: builder.mutation<IProfileDatas, void>({
      query: () => {
        return {
          url: 'profile',
          method: 'POST',
        }
      },
    }),
    // SignUp --> Register a new user
    signup: builder.mutation<ISignupResponse, ISignupRequest>({
      query: (accountInfos) => {
        return {
          url: 'signup',
          method: 'POST',
          body: accountInfos,
        }
      },
    }),
    // updateProfile --> Update userName
    updateProfile: builder.mutation<void, IProfileNames>({
      query: (userName) => {
        return {
          url: 'profile',
          method: 'PUT',
          body: userName,
        }
      },
    }),
    // updateAccount--> Update transaction
    updateTransaction: builder.mutation<void, ITransactions>({
      query: (updatedAccount) => {
        return {
          url: 'profile/accounts',
          method: 'PUT',
          body: updatedAccount,
        }
      },
    }),
  }),
})

// Token Interface
export interface IToken {
  token: string
}
// User Credentials Interface
export interface ICredentials {
  email: string | null
  password: string | null
}
export interface IProfileCredentials extends ICredentials {
  isEmailValid?: boolean
  isPasswordValid?: boolean
}
// User Profile Data Interface
export interface IProfileDatas extends ICredentials, INames {
  createdAt: string
  updatedAt: string
  id: string
}
// User Names Interface
export interface INames {
  firstName: string | null
  lastName: string | null
}
export interface IProfileNames extends INames {
  isFirstNameValid?: boolean
  isLastNameValid?: boolean
}
// Data to SignUp Interface
export interface ISignupRequest extends IProfileCredentials, IProfileNames {}

// SignUp Response Interface
export interface ISignupResponse {
  email: string
  id: string
}

// console.log('authApi', authApi)

export const {
  useLoginMutation,
  useProfileMutation,
  useUpdateProfileMutation,
  useSignupMutation,
  useUpdateTransactionMutation,
} = authApi
