export interface ITransaction {
  _id: string
  amount: number
  currency: string
  description: string
  type: string
  note: string
  date: Date
  updatedAt: Date
  createdAt: Date
  category: string
}
export interface IAccount {
  _id: string
  accountNumber: string
  name: string
  balance: number
  currency: string
  description: string
  transactions: ITransaction[]
}
export interface IUser {
  [x: string]: any
  accounts: IAccount[]
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
  userRegister: IUserData
  loading: boolean
  error: string | null
  user: IUserData | null
}

export interface UserLoginState {
  loading: boolean
  error: string | null
  userInfo: UserData
}
export interface UserRegisterState {
  loading: boolean
  error: string | null
  userInfo: UserData
}

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserData {
  token: string | null
  user: IUser
}
