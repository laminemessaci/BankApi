import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import EditField from '../components/EditField'
import { ARGENT_BANK } from '../constants'
import { useTypedSelector } from '../store'


const Profile: React.FC = () => {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { loading, error, userInfo: { user } } = userLogin

  const { firstName, lastName } = user

  const id = '6362708457c28472fbcb0b94'

  const argent = ARGENT_BANK.filter((elt) => elt.id === id)
  // console.log(toObject(argent))

  const [editUser, setEditUser] = useState(false)


  return (
    <div className='flex flex-col w-full h-auto bg-[#12002B]'>
      <main className='mt-24 mb-24 w-full h-auto  flex justify-start items-center flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-3xl text-center text-white font-bold'>
            Welcome back <br></br> {firstName} {lastName}
          </h1>

          <button onClick={() => setEditUser(!editUser)} className='bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 '>
            {editUser ? ('Close') : ('Edit Profile')}
          </button>

          {editUser ? <EditField save={() => setEditUser(!editUser)} /> : ''}
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-4 '>
          {argent[0]?.accounts.map((elt, i) => (
            <Card key={uuidv4()} check={elt.check} credit={elt.credit} balance={elt.balance} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Profile