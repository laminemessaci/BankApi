import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TransTable from '../components/Table'
import TransactTop from '../components/TransactTop'
import { useProfileMutation } from '../features/auth.service'
import { useTypedSelector } from '../features/hooksType'
import { IUserData } from './Profile'

export interface IAccounts {
  _id: string
  accountNumber: number
  name: string
  balance: number
  currency: string
  description: string
  updatedAt: Date
  transactions: {
    _id: string
    amount: number
    currency: string
    description: string
    date: Date
    type: string
    category: string
  }[]
}

const Transaction: React.FC = () => {
  const navigate = useNavigate()

  const { userInfos } = useTypedSelector((state) => state.auth)


  const { id } = useParams()
  const currentAccount = userInfos?.accounts.find((account) => {
   
    return account._id === id
  })

  useEffect(() => {
    if (!currentAccount) {
      navigate('/ErrorPage')
    }
  }, [navigate])

  return (
    <main className='min-w-1/3 bg-[#9995a2] w-full h-auto flex flex-col text-center justify-center'>
      {currentAccount && (
        <TransactTop
          _id={currentAccount._id}
          accountNumber={currentAccount?.accountNumber}
          name={currentAccount.name}
          balance={currentAccount.balance}
          currency={currentAccount.currency}
          description={currentAccount.description}
          transactions={currentAccount.transactions}
          updatedAt={currentAccount.updatedAt}
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
