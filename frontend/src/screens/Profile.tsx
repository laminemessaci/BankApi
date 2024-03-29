import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import EditField from '../components/EditField'
import { useTypedSelector } from '../redux/redux-hook/useTypedStore'

/**
 * * Profile Page
 * @returns {JSX.Element}
 */
const Profile: React.FC = (): JSX.Element => {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const {
    userInfo: { user },
  } = userLogin

  const { firstName, lastName } = user

  const [editUser, setEditUser] = useState(false)

  return (
    <div className='flex flex-col w-full h-auto bg-[#12002b]'>
      <main className='mt-24 mb-24 w-full h-auto  flex justify-start items-center flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-3xl text-center text-white font-bold'>
            Welcome back <br></br> {firstName} {lastName}
          </h1>

          <button onClick={() => setEditUser(!editUser)} className='bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 '>
            {editUser ? 'Close' : 'Edit Profile'}
          </button>

          {editUser ? <EditField save={() => setEditUser(!editUser)} /> : ''}
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-4 '>
          {user?.accounts?.map((elt) => (
            <Card
              key={uuidv4()}
              check={elt.name}
              currency={elt.currency}
              credit={elt.balance}
              balance={elt.description}
              linkedId={elt._id}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Profile
