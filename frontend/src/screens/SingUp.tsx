import * as React from 'react'
import { useForm } from 'react-hook-form'

import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'

import { FormValues } from '../constants'


const SingUp: React.FC = () => {
    const navigate = useNavigate()
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<FormValues>({})
    // const [email, setEmail] = React.useState('')
    // const [firstName, setFirstName] = React.useState('')
    // const [lastName, setLastName] = React.useState('')
    // const [password, setPassword] = React.useState('')
    // const [confirmPassword, setConfirmPassword] = React.useState('')
    const [message, setMessage] = React.useState(null)

    const onSubmit = (data: FormValues) => {

        console.log(data)
        if (data.password !== data.confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            setMessage(null)
            reset()

        }
    }


    React.useEffect(() => {
        console.log('object')
    }, [])

    return (
        <div className='flex flex-col '>

            <main className='mt-16 bg-[#12002B] w-full h-screen flex justify-center'>
                <section className='my-28  p-8 w-auto h-auto bg-white  flex flex-col justify-center p-16'>
                    <FaUserCircle className='w-12 h-12 mx-auto' />
                    <h1 className='text-center my-5 text-lg'>Sign In</h1>
                    {message && <Message variant="danger">{message}</Message>}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-wrapper mb-4 flex flex-col'>
                            <label htmlFor='email font-bold  flex w-full'>Email</label>
                            <input
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

                        <button className=' bg-[#00BC77] p-2 text-white text-xl  '>Register</button>
                    </form>
                </section>
            </main>

        </div>


    )
}

export default SingUp
