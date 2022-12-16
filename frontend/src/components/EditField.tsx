import { useState } from 'react'
import { updateUserProfile } from '../redux/actions/userActions'
import { useAppDispatch, useTypedSelector } from '../redux/redux-hook/useTypedStore'
import Loader from './Loader'
import Message from './Message'

interface IProps {
  save: () => void
}

const EditField: React.FC<IProps> = ({ save }: IProps) => {
  const dispatch = useAppDispatch()
  const userLogin = useTypedSelector((state) => state.userLogin)
  const {
    loading,
    error,
    userInfo: { user },
  } = userLogin

  const { firstName, lastName } = user
  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')

  const onSave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const userUpdateData = {
      firstName: updateFirstName ? updateFirstName : firstName,
      lastName: updateLastName ? updateLastName : lastName,
    }
    dispatch(updateUserProfile(userUpdateData.firstName, userUpdateData.lastName))
  }

  return (
    <div className='w-full mt-10 flex justify-center'>
      <form className='w-11/12 flex gap-5 sm:gap-10 '>
        {error && <Message variant='danger'>{error}</Message>}
        <div className='w-1/2 flex flex-col gap-5 justify-center items-center sm:items-end'>
          <input
            className='w-11/12 p-2 placeholder:text-center'
            placeholder={user?.firstName}
            onChange={(e) => setUpdateFirstName(e.target.value)}
          />
          {loading ? (
            <div className=' mx-auto flex justify-center mb-4'>
              {' '}
              <Loader type='spin' color='#00BC77' width={'40'} height={'40'} />{' '}
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
            placeholder={user?.lastName}
            onChange={(e) => setUpdateLastName(e.target.value)}
          />
          <button onClick={save} className='w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditField
