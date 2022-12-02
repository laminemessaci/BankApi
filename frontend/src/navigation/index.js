import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import SingUp from '../screens/SingUp'
import PrivateRoute from './PrivateRoute'

function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SingUp />} />
      <Route path='/login' element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default Navigation
