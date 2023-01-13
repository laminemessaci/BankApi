import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TransTable from '../components/Table'
import TransactTop from '../components/TransactTop'
import { useTypedSelector } from './../redux/redux-hook/useTypedStore'

/**
 * * User Transactions Page
 * @returns {JSX.Element}
 */
const Transaction: React.FC = (): JSX.Element => {
  const userLogin = useTypedSelector((state) => state.userLogin)
  const navigate = useNavigate()
  const {
    userInfo: { user },
  } = userLogin
  const accounts = user.accounts
  const { id } = useParams()
  const currentAccount = accounts.find((account: { _id: string }) => account._id === id)

  useEffect(() => {
    if (!currentAccount) {
      navigate('/ErrorPage')
    }
  }, [navigate, currentAccount])

  return (
    <main className='min-w-1/3 bg-[#9995a2] w-full h-auto flex flex-col text-center justify-center'>
      {currentAccount && (
        <TransactTop
          _id={currentAccount._id}
          accountNumber={currentAccount.accountNumber}
          name={currentAccount.name}
          balance={currentAccount.balance}
          currency={currentAccount.currency}
          description={currentAccount.description}
          transactions={currentAccount.transactions}
        />
      )}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        currentAccount && <TransTable transactions={currentAccount?.transactions} />
      }
    </main>
  )
}

export default Transaction
