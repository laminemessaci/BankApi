/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaChevronCircleRight, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import Loader from '../components/Loader'
import { FormValues } from '../constants'
import { useLoginMutation } from '../features/auth.service'
import { useAppDispatch } from '../features/hooksType'

import { setToken, setUserAccount, setUserInfos, setUserName } from '../features/auth.slice'
import { getLocalToken, setLocalToken } from '../utils/localDatas'
import Message from '../components/Message'

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const checkbox = useRef(null)
  const navigate = useNavigate()
  const token = getLocalToken()

  const [login, { data, status, error, isSuccess, isError, isLoading }] = useLoginMutation()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({})

  const onSubmit = ({ email, password }: FormValues) => {
    login({ email, password })
  }

  useEffect(() => {
    // If connected, navigate to the profile page
    if (token) navigate('/profile')
    if (isSuccess) {
      const tokenResponse = data['body']['token']
      const userInfosResponse = data['body']['user']
      dispatch(setToken({ token: tokenResponse }))
      setLocalToken(tokenResponse, checkbox.current.checked)
      dispatch(setUserName({ userName: { firstName: userInfosResponse.firstName, lastName: userInfosResponse.lastName } }))
      dispatch(setUserInfos({ userInfos: userInfosResponse }))
      dispatch(setUserAccount({ accounts: userInfosResponse.accounts }))

      navigate('/profile')
    } else if (isError) {
      console.log(status)
      console.log(error['data'].message)
    }
  }, [navigate, isSuccess, isError, dispatch, token, data, status, error])

  return (
    <div className='flex flex-col'>
      <main className='mt-16 bg-[#9995a2] w-full h-screen flex justify-center'>
        <section className='my-auto m-12 p-12 h-auto bg-white  flex flex-col justify-center'>
          {/* @ts-expect-error */}
          <FaUserCircle className='w-8 h-8 mx-auto' />
          <h1 className='text-center my-5'>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* @ts-expect-error */}
            {isError && <Message variant='danger'>{error['data'].message}</Message>}
            {/* {isLoading && <Loader type='spin' color='blue' width={20} height={20} />} */}
            <div className='input-wrapper mb-4 flex flex-col'>
              <label htmlFor='username font-bold'>Username</label>
              <input
                name='email'
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Your email is invalid! ',
                  },
                })}
                id='username'
                className='border-2 p-1 border-black'
              />
              <p className='text-red-600 leading-3 text-xs'>{errors.email?.message}</p>
            </div>

            <div className='input-wrapper mb-4 mx-auto flex flex-col'>
              <label htmlFor='username'>Password</label>
              <input
                id='password'
                placeholder='Password'
                name='password'
                type='password'
                className='border-2 p-1 border-black'
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <p className='text-red-600 leading-3 text-xs'>{errors.password?.message}</p>
            </div>
            <div className='input-wrapper mb-4'>
              <input ref={checkbox} type='checkbox' id='remember-me' className='mr-2 ' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>

            {isLoading ? (
              <div className=' mx-auto flex justify-center mb-4'>
                {/* @ts-expect-error */}
                <Loader type='spin' color='#00BC77' width={40} height={40} />{' '}
              </div>
            ) : (
              <button className='transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-full bg-[#00BC77] p-2 text-white text-xl mb-4  rounded-sm'>
                Sign In
              </button>
            )}
            {/* @ts-expect-error */}
            <Link className='text-xs mb-2 flex justify-center' to={'/sign-up'}>
              {/* @ts-expect-error */}
              New account ?<FaChevronCircleRight color='#00BC77' className='mx-1' />
            </Link>
          </form>
          <p className='mt-4 text-xs font-light text-center text-gray-700'>
            User test :
            <a href='#' className='font-medium text-teal-600 hover:underline'>
              <span> Email: tony@stark.com --- password: password123</span>
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Login
