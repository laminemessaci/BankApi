import _ from 'lodash'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUpdateProfileMutation } from '../features/auth.service'
import { useAppDispatch } from '../features/hooksType'
import Loader from './Loader'
import Message from './Message'
import { useTypedSelector } from './../features/hooksType'
import { setUserName } from '../features/auth.slice'

interface IProps {
  save: () => void
}

const EditField: React.FC<IProps> = ({ save }: IProps) => {
  // Update User info
  const [updateProfile, { status, error, isSuccess, isError, isLoading }] = useUpdateProfileMutation()
  const { userName } = useTypedSelector((state) => state.auth),
    navigate = useNavigate(),
    dispatch = useAppDispatch()

  console.log('userName', userName)

  const firstName = userName.firstName
  const lastName = userName.lastName
  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // If success navigate to profile page
    if (isSuccess) navigate('/profile')
    // Else show error message in console
    else if (isError) {
      console.log(status)
      if ((error as any).data.message === 'User not Verified') {
        console.log('User not Verified')
      }
      console.log(error)
    }
  }, [isSuccess, isError, dispatch, status, error, message, navigate])

  const onSave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setMessage('')
    const previewsUser = {
      firstName: firstName,
      lastName: lastName,
    }
    const userUpdateData = {
      firstName: updateFirstName ? updateFirstName : firstName,
      lastName: updateLastName ? updateLastName : lastName,
    }
    const hasNotUpdated = _.isEqual(previewsUser, userUpdateData)
    if (hasNotUpdated) {
      setMessage('You have not updated anything!')
      return
    }
    // dispatch(updateUserProfile(userUpdateData.firstName, userUpdateData.lastName))
    dispatch(setUserName({ userName: { firstName: userUpdateData.firstName, lastName: userUpdateData.lastName } }))
    updateProfile(userUpdateData)
    save()
  }

  return (
    <>
      <div className='w-auto mt-1 flex justify-center'>{message && <Message variant='danger'>{message}</Message>}</div>
      <div className='w-full mt-4 flex justify-center'>
        <form className='w-11/12 flex gap-5 sm:gap-10 '>
          {error && <Message variant='danger'>{error as string}</Message>}

          <div className='w-1/2 flex flex-col gap-5 justify-center items-center sm:items-end'>
            <input
              className='w-11/12 p-2 placeholder:text-center'
              placeholder={firstName}
              onChange={(e) => setUpdateFirstName(e.target.value)}
            />
            {isLoading ? (
              <div className=' mx-auto flex justify-center mb-4'>
                {' '}
                <Loader type='spin' color='#00BC77' width={40} height={40} />{' '}
              </div>
            ) : (
              <button onClick={onSave} className='w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold '>
                {' '}
                Save{' '}
              </button>
            )}
          </div>
          <div className='w-1/2 flex flex-col gap-5 justify-center items-center sm:items-start'>
            <input
              className='w-11/12 p-2 placeholder:text-center'
              placeholder={lastName}
              onChange={(e) => setUpdateLastName(e.target.value)}
            />
            <button onClick={save} className='w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditField
