import React, { useEffect } from 'react'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userActions'
import { useTypedSelector } from '../store'

const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const signOut = () => { dispatch(logout()) }


  return (
    <div className='w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute'>
      <div className='w-2/3 h-full flex justify-start items-center md:justify-start'>
        <Link to={'/'}> <img src='/assets/argentBankLogo.png' alt='' className='w-44 object-cover' /></Link>
      </div>
      <ul>
        {userInfo ? (
          <>
            <div className='flex items-center sm:gap-5 gap-3 mr-4'>
              <FaUserCircle />
              <span>{userInfo.body?.user?.firstName}</span>
              <Link
                to='/'
                onClick={signOut}
                className="cursor-pointer flex items-center gap-2 hover:underline">
                <FaSignOutAlt />
                <span className='hidden sm:block'>Sign Out</span>
              </Link>
            </div>
          </>
        ) : (
          <div className='flex items-center gap-5'>
            <FaUserCircle />
            <Link to='/login' className='cursor-pointer	hover:underline'>
              Sign In
            </Link>
          </div>
        )}
      </ul>
    </div>
  )
}


export default Header