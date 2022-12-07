import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Card from '../components/Card'
import EditField from '../components/EditField'
import { ARGENT_BANK } from '../constants'
import { useTypedSelector } from '../store'
import { IUserLogin } from './Login'


export default function Profil() {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const { loading, error, userInfo: { user } }: IUserLogin = userLogin

  const { firstName, lastName } = user

  const navigate = useNavigate()
  useEffect(() => {
    // TDO get token from store
    // navigate('/profile')
  }, [])



  // TODO get id from store
  const id = '6362708457c28472fbcb0b94'

  const argent = ARGENT_BANK.filter((elt) => elt.id === id)
  // console.log(toObject(argent))

  const [editUser, setEditUser] = useState(false)

  const edit = () => {
    setEditUser(!editUser)
  }

  return (
    <div className='flex flex-col w-full h-auto bg-[#12002B]'>
      <main className='mt-24 mb-24 w-full h-auto  flex justify-start items-center flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-3xl text-center text-white font-bold'>
            Welcome back <br></br> {firstName} {lastName}
          </h1>

          <button onClick={edit} className='bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 '>
            {editUser ? ('Close') : ('Edit Profile')}
          </button>

          {editUser ? <EditField save={edit} /> : ''}
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
