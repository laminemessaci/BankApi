import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateTransactionReducer,
} from './redux/reducers/userReducers'

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdateTransaction: userUpdateTransactionReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState: any = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware: any = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof reducers>

export default store

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
