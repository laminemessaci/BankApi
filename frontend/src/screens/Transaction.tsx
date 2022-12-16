
import { useParams } from 'react-router-dom'
import TransTable from '../components/Table'
import TransactTop from '../components/TransactTop'
import { useTypedSelector } from './../redux/redux-hook/useTypedStore'

const Transaction: React.FC = () => {
    const userLogin = useTypedSelector((state) => state.userLogin)
    const {
        userInfo: { user },
    } = userLogin
    const accounts = user.accounts
    const { id } = useParams()
    const currentAccount = accounts.find((account: { _id: string }) => account._id === id)


    return (

        <div className='min-w-1/2 bg-[#12002B] w-full h-auto flex flex-col text-center justify-center'>
            {
                currentAccount && <TransactTop
                    _id={currentAccount._id}
                    accountNumber={currentAccount.accountNumber}
                    name={currentAccount.name}
                    balance={currentAccount.balance}
                    currency={currentAccount.currency}
                    description={currentAccount.description}
                    transactions={currentAccount.transactions}
                />
            }

            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                currentAccount && <TransTable transactions={currentAccount?.transactions} />
            }

        </div>
    )
}

export default Transaction
