import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home.js'
import Login from '../screens/Login.js'
import Profile from '../screens/Profile.js'
import PrivateRoute from './PrivateRoute.js'

function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default Navigation
