import React from 'react'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const logout = () => {console.log('clicked')}
  // console.log('Public :: ', window.location.origin);
  return (
    <div className='w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute'>
      <div className='w-2/3 h-full flex justify-start items-center md:justify-start'>
        <img src='/assets/argentBankLogo.png' alt='' className='w-44 object-cover' />
      </div>
      <ul>
        {true ? (
          <>
            <div className='flex items-center sm:gap-5 gap-3 mr-3'>
              <FaUserCircle />
              <span>{'lamine'}</span>
              <Link to='/' onClick={logout} className='cursor-pointer flex items-center gap-2 hover:underline'>
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
