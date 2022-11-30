import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Login() {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    //TODO get token from store
    if (true) {
      navigate('/profile')
    }
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <main className='mt-16 bg-[#12002B] w-full h-screen flex justify-center'>
        <section className='mt-28 m-12 p-8 w-[300px] h-[360px] bg-white  flex flex-col justify-center'>
          <FaUserCircle className='w-5 h-5 mx-auto' />
          <h1 className='text-center my-5'>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-wrapper mb-4'>
              <label htmlFor='username font-bold'>Username</label>
              <input
                name='email'
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "I think I said _valid_, didn't I?",
                  },
                })}
                id='username'
                className='border-2 p-1 border-black'
              />
              <p className='text-red-600 leading-3 text-xs'>{errors.email?.message}</p>
            </div>

            <div className='input-wrapper mb-4'>
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
              <input type='checkbox' id='remember-me' className='mr-2' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>

            <button className='w-full bg-[#00BC77] p-2 text-white text-xl '>Login</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
