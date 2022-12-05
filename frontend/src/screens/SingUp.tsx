import * as React from 'react'
import { useForm } from 'react-hook-form'

import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'

import { FormValues } from '../constants'
import { AppDispatch } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { register as create } from './../redux/actions/userActions'
import Loader from './../components/Loader'


const SingUp: React.FC = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const {
        register,
        reset,
        formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful, isValid },
        handleSubmit,
        clearErrors,
        setError
    } = useForm<FormValues>({ mode: 'onChange' })


    const [email, setEmail] = React.useState('')
    // const [firstName, setFirstName] = React.useState('')
    // const [lastName, setLastName] = React.useState('')
    // const [password, setPassword] = React.useState('')
    // const [confirmPassword, setConfirmPassword] = React.useState('')
    const [message, setMessage] = React.useState(null)

    console.log(isSubmitted + '------' + isSubmitSuccessful)

    const onSubmit = (data: FormValues) => {


        // console.log(data.confirmPassword)
        if (data.password !== data.confirmPassword) {
            // setError('Passwords do not match')
            setMessage('Passwords do not match')
            setError('password', { type: 'custom', message: 'do not match***' })
          
          
        }
        if (error) {
            setMessage(error)
            navigate('/sign-up')
             setMessage(null)
        }
        if (isSubmitSuccessful && !error) {
            dispatch(create(data.email, data.firstName, data.lastName, data.password))
           
          
        }

    }


    React.useEffect(() => {

        if (userInfo && !error) {
            navigate('/profile')
        }

    }, [navigate, message])

    return (
        <div className='flex flex-col '>

            <main className='mt-16 bg-[#12002B] w-full h-screen flex justify-center'>
                <section className='my-auto  p-8 w-auto h-auto bg-white  flex flex-col justify-center p-16'>
                    <FaUserCircle className='w-8 h-8 mx-auto' />
                    <h1 className='text-center my-5 text-xl'>Register</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        {error && <Message variant="danger">{error}</Message>}
                        <div className='input-wrapper mb-4 flex flex-col'>
                            <label htmlFor='email font-bold  flex w-full'>Email</label>
                            <input
                                ref={register}
                                id='email'
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
                                className='border-2 p-1 border-black'
                            />
                            <p className='text-red-600 leading-3 text-xs'>{errors.email?.message}</p>
                        </div>

                        <div className='input-wrapper mb-4 flex flex-col '>
                            <label htmlFor='firstname'>First Name</label>
                            <input
                                id='firstname'
                                placeholder='Firstname'
                                name='firstname'
                                type='firstName'
                                className='border-2 p-1 border-black'
                                {...register('firstName', {
                                    required: 'First name is required',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Your first-name is invalid! ',
                                    },


                                })}
                            />
                            <p className='text-red-600 leading-3 text-xs'>{errors.firstName?.message}</p>
                        </div>
                        <div className='input-wrapper mb-4 flex flex-col '>
                            <label htmlFor='firstname'>Last Name</label>
                            <input
                                id='lastname'
                                placeholder='Last-name'
                                name='lastname'
                                type='lastName'
                                className='border-2 p-1 border-black'
                                {...register('lastName', {
                                    required: 'Last name is required',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Your first-name is invalid! ',
                                    },

                                })}
                            />
                            <p className='text-red-600 leading-3 text-xs'>{errors.lastName?.message}</p>
                        </div>
                        <div className='input-wrapper mb-4 flex flex-col'>
                            <label htmlFor='password'>Password</label>
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
                        <div className='w-full input-wrapper mb-4 flex flex-col '>
                            <label htmlFor='confirmpassword'>Password</label>
                            <input
                                id='confirmpassword'
                                placeholder='Confirm Password'
                                name='confirmpassword'
                                type='password'
                                className='border-2 p-1 border-black'
                                {...register('confirmPassword', {
                                    required: 'Confirm your Password please!',
                                })}
                            />
                            <p className='text-red-600 leading-3 text-xs'>{errors.confirmPassword?.message}</p>
                        </div>

                        {loading ? <div className=' mx-auto flex justify-center mb-4'> <Loader type="spin" color='#00BC77' width={40} height={40} /> </div> : <button className='w-full bg-[#00BC77] p-2 text-white text-xl mb-4'>Login</button>}
                    </form>
                </section>
            </main>

        </div>


    )
}

export default SingUp


