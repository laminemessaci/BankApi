import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import EditField from '../components/EditField'
import { useProfileMutation } from '../features/auth.service'
import { setUserName } from '../features/auth.slice'
import { useAppDispatch, useTypedSelector } from '../features/hooksType'

export interface IUserData {
  firstName: string
  lastName: string
  accounts: {
    accountNumber: number
    transactions: {
      _id: string
      amount: number
      currency: string
      description: string
      date: Date
      type: string
      category: string
    }[]
    updatedAt: Date
    _id: string
    name: string
    balance: number
    currency: string
    description: string
  }[]
  updatedAt: Date
}

const Profile: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [editUser, setEditUser] = useState(false)
  const [user, setUser] = useState<IUserData>()
  // Get User Names
  const { userName } = useTypedSelector((state) => state.auth)
  const { userInfos } = useTypedSelector((state) => state.auth)
  // Get Profile Info
  const [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  useEffect(() => {
    if (isSuccess) {
      // If success, set user name in redux store
      const { firstName, lastName } = data['body']
      dispatch(setUserName({ userName: { firstName: firstName, lastName: lastName } }))
      // dispatch(setUserInfos({ userInfos: data['body'] }))
    } else if (isError) {
      // Else show error message in console
      console.log(status)
      if ((error as any)?.data?.message === 'User not Verified') {
        console.log('User not Verified')
      }
      console.log(error)
    }
  }, [])

  return (
    <div className='flex flex-col w-full h-auto bg-[#9995a2]'>
      <main className='mt-24 mb-24 w-full h-auto  flex justify-start items-center flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-3xl text-center text-white font-bold'>
            Welcome back <br></br> {userName.firstName + ' ' + userName.lastName + ' !'}
          </h1>

          <button onClick={() => setEditUser(!editUser)} className='bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 '>
            {editUser ? 'Close' : 'Edit Profile'}
          </button>

          {editUser ? <EditField save={() => setEditUser(!editUser)} /> : ''}
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-4 '>
          {userInfos
            ? userInfos?.accounts?.map((elt) => (
                <Card
                  key={uuidv4()}
                  check={elt.name}
                  currency={elt.currency}
                  credit={elt.balance}
                  balance={elt.description}
                  linkedId={elt._id}
                />
              ))
            : null}
        </div>
      </main>
    </div>
  )
}

export default Profile
