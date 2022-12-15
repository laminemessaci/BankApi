import { useParams } from 'react-router-dom'
import TransTable from '../components/Table'
import TransactTop from '../components/TransactTop'
import { useTypedSelector } from './../redux/redux-hook/useTypedStore'



const Transaction: React.FC = () => {
    const userLogin = useTypedSelector((state) => state.userLogin)
    const { userInfo: { user } } = userLogin
    const accounts = user.accounts
    const { id } = useParams()
    const currentAccount = accounts.find((account: {
        _id: string, accountNumber: string
    }) => account._id === id)

    console.log(currentAccount)



    return (
        <div className='min-w-1/2 bg-[#12002B] w-full h-auto flex flex-col text-center justify-center'>
            <TransactTop currentAccount={currentAccount} />
            <TransTable transactions={currentAccount?.transactions} />
        </div>
    )

}

export default Transaction

