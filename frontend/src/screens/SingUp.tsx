import { useEffect, useState } from 'react'

import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'

import { useDispatch } from 'react-redux'
import { AppDispatch, useTypedSelector } from '../store'
import Loader from './../components/Loader'
import {  register } from './../redux/actions/userActions'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


const SingUp = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const userRegister = useTypedSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
    // const {
    //     register,
    //     reset,
    //     formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful, isValid },
    //     handleSubmit,
    //     clearErrors,
    //     setError
    // } = useForm<FormValues>({ mode: 'onChange' })


    //  const [email, setEmail] = React.useState('')
    // const [firstName, setFirstName] = React.useState('')
    // const [lastName, setLastName] = React.useState('')
    // const [password, setPassword] = React.useState('')
    // const [confirmPassword, setConfirmPassword] = React.useState('')
    const [message, setMessage] = useState(null)



    // const onSubmit = (data: FormValues) => {


    //     // console.log(data.confirmPassword)
    //     if (data.password !== data.confirmPassword) {
    //         // setError('Passwords do not match')
    //         setMessage('Passwords do not match')
    //         setError('password', { type: 'custom', message: 'do not match***' })


    //     }
    //     if (error) {
    //         setMessage(error)
    //         navigate('/sign-up')
    //          setMessage(null)
    //     }
    //     if (isSubmitSuccessful && !error) {
    //         dispatch(create(data.email, data.firstName, data.lastName, data.password))


    //     }

    // }


    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'too small!')
            .max(50, 'too long!')
            .required('This field is required.'),
        lastName: Yup.string()
            .min(2, 'too small!')
            .max(10, 'trop long!')
            .required('This field is required.'),
        email: Yup.string()
            .email('email invalide.')
            .required('l\'email est obligatoire.'),
        password: Yup.string()
            .required('Mot de passe est obligatoire.')
            .min(1, 'Must be greater than 5 characters.')
            .max(10, 'Must be smaller than 10 characters.'),
        confirmPassword: Yup.string()
            .required('Password confirmation required.')
            .oneOf(
                [Yup.ref('password'), null],
                'password does not match.'
            ),
        acceptTerms: Yup.bool().oneOf(
            [true],
            '\n required.'
        )
    })

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    }

    const handleSubmit = (values) => {
        const { email, firstName, lastName, password } = values
        console.log(values)
        dispatch(register(email, firstName, lastName, password))

    }

    useEffect(() => {

    }, [userInfo, navigate])

    return (
        <div className='flex flex-col '>

            <main className='mt-16 bg-[#12002B] w-full h-screen flex justify-center'>
                <section className='my-auto  p-8 w-auto h-auto bg-white  flex flex-col justify-center p-16'>
                    <FaUserCircle className='w-8 h-8 mx-auto' />
                    <h1 className='text-center my-5 text-xl'>Register</h1>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                {error && <Message variant="danger">{error}</Message>}
                                <div className='input-wrapper mb-4 flex flex-col'>
                                    <label htmlFor='email font-bold  flex w-full'>Email</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'

                                        className='border-2 p-1 '
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-red-700"
                                    />

                                </div>

                                <div className='input-wrapper mb-4 flex flex-col '>
                                    <label htmlFor='firstName'>First Name</label>
                                    <Field
                                        placeholder='Firstname'
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className='border-2 p-1 '
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="small"
                                        className="text-red-700"
                                    />

                                </div>
                                <div className='input-wrapper mb-4 flex flex-col '>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <Field
                                        placeholder='Last-name'
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className='border-2 p-1'
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="small"
                                        className="text-red-700"
                                    />

                                </div>
                                <div className='input-wrapper mb-4 flex flex-col'>
                                    <label htmlFor='password'>Password</label>
                                    <Field
                                        id='password'
                                        placeholder='Password'
                                        name='password'
                                        type='password'
                                        className='border-2 p-1 '

                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-red-700"
                                    />

                                </div>
                                <div className='w-full input-wrapper mb-4 flex flex-col '>
                                    <label htmlFor='confirmpassword'>Password</label>
                                    <Field
                                        id="confirmPassword"
                                        placeholder='Confirm Password'
                                        name="confirmPassword"
                                        type='password'
                                        className='border-2 p-1 '
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="text-red-700"
                                    />

                                </div>

                                <div className="mb-4 checkbox">
                                    <Field
                                        name="acceptTerms"
                                        type="checkbox"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="acceptTerms" className="form-check-label">
                                        Agree to the terms
                                    </label>
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="small"
                                        className="text-red-700"
                                    />
                                </div>

                                {loading ?
                                    <div className=' mx-auto flex justify-center mb-4'> <Loader type="spin" color='#00BC77' width={40} height={40} /> </div> :
                                    <div className=' mx-auto flex justify-center mb-2'>
                                        <button
                                            type="submit" className='transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 w-full bg-[#00BC77] p-2 text-white text-xl mb-4 mx-2 rounded-sm'>
                                            Register
                                        </button>
                                        <button
                                            className='transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300   w-full bg-[#12002B] p-2 text-white text-xl mb-4 mx-2 rounded-sm' type="reset"
                                            onClick={resetForm} >
                                            Cancel
                                        </button>
                                    </div>}


                            </Form>)}
                    </Formik>
                </section>
            </main>

        </div>


    )
}

export default SingUp


