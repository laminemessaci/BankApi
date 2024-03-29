import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'
import { useAppDispatch, useTypedSelector } from '../redux/redux-hook/useTypedStore'

/**
 **Header Component
 * @returns {JSX.Element}
 */
const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const signOut = () => {
    dispatch(logout())
  }

  return (
    <div className='w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute'>
      <div className='w-2/3 h-full flex justify-start items-center md:justify-start'>
        <Link to={'/'}>
          {' '}
          <img src='/assets/argentBankLogo.png' alt='' className='w-44 object-cover' />
        </Link>
      </div>
      <ul>
        {userInfo ? (
          <>
            <div className='flex items-center sm:gap-5 gap-3 mr-2'>
              <Link to='/profile' className='cursor-pointer flex items-center gap-2 hover:underline'>
                <FaUserCircle className='mx-auto' />
                <span>{userInfo?.user?.firstName}</span>
              </Link>
              <Link to='/' onClick={signOut} className='cursor-pointer flex items-center gap-2 hover:underline'>
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
