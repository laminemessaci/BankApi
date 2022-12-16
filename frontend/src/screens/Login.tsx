import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaChevronCircleRight, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import Loader from '../components/Loader'
import Message from '../components/Message'
import { FormValues } from '../constants'
import { login } from '../redux/actions/userActions'
import { IUserData } from '../redux/userReducerTypes'
import { useAppDispatch, useTypedSelector } from './../redux/redux-hook/useTypedStore'

export interface IUserLogin {
  loading: boolean
  error: string | null
  userInfo: IUserData
}

export default function Login() {
  const dispatch = useAppDispatch()
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  console.log('userLogin', userLogin)

  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({})

  const onSubmit = ({ email, password }: FormValues) => {
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      navigate('/profile')
    }
  }, [userInfo, navigate])

  return (
    <div className='flex flex-col'>
      <main className='mt-16 bg-[#12002B] w-full h-screen flex justify-center'>
        <section className='my-auto m-12 p-12 h-auto bg-white  flex flex-col justify-center'>
          <FaUserCircle className='w-8 h-8 mx-auto' />
          <h1 className='text-center my-5'>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader type="spin" color='blue' width={20} height={20} />} */}
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
              <input type='checkbox' id='remember-me' className='mr-2 ' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>

            {loading ? (
              <div className=' mx-auto flex justify-center mb-4'>
                {' '}
                <Loader type='spin' color='#00BC77' width={40} height={40} />{' '}
              </div>
            ) : (
              <button className='transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-full bg-[#00BC77] p-2 text-white text-xl mb-4  rounded-sm'>
                Sign In
              </button>
            )}
            <Link className='text-xs mb-2 flex justify-center' to={'/sign-up'}>
              New account ?<FaChevronCircleRight color='#00BC77' className='mx-1' />
            </Link>
          </form>
        </section>
      </main>
    </div>
  )
}
