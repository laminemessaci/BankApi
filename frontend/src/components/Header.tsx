import React, { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { setToken, setUserAccount, setUserInfos, setUserName } from '../features/auth.slice'
import { useAppDispatch, useTypedSelector } from '../features/hooksType'
import { getLocalToken } from '../utils/localDatas'

const Header: React.FC = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    cookie = new Cookies(),
    { userName } = useTypedSelector((state) => state.auth),
    token = getLocalToken()

  // Logout function
  const logout = () => {
    dispatch(setToken({ token: null }))
    dispatch(setUserName({ userName: { firstName: '', lastName: '' } }))
    dispatch(setUserInfos({ userInfos: null }))
    dispatch(setUserAccount({ accounts: null }))
    cookie.remove('token', { path: '/' })
    navigate('/')
  }
  useEffect(() => {
    console.log('UserName: ', userName)
  }, [token, dispatch])

  return (
    <div className='w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute'>
      <div className='w-2/3 h-full flex justify-start items-center md:justify-start'>
        <Link to={'/'}>
          {' '}
          <img src='/assets/argentBankLogo.png' alt='' className='w-44 object-cover' />
        </Link>
      </div>
      <ul>
        {token ? (
          <>
            <div className='flex items-center sm:gap-5 gap-3 mr-2'>
              <Link to='/profile' className='cursor-pointer flex items-center gap-2 hover:underline'>
                <FaUserCircle className='mx-auto' />
                <span>{userName?.firstName}</span>
              </Link>
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
