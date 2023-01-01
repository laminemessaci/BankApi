/* eslint-disable react/prop-types */

import { TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'

import EditIcon from '@mui/icons-material/Edit'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Collapse from '@mui/material/Collapse'
import { Box } from '@mui/system'
import moment from 'moment'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../features/hooksType'


interface IRow {
  type: string
  note: string
  category: string
  date: string
  description: string
  amount: number
  balance: number
}
const Row: React.FC<IRow[]> = (props: IRow[]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { row } = props
  const { id } = useParams()

   const dispatch = useAppDispatch()

  // const userLogin = useTypedSelector((state) => state.userLogin)
  // const {
  //   userInfo: {
  //     user: { accounts },
  //   },
  // } = userLogin
  // const updatedAccount = accounts.filter((ac) => ac._id === id)
  // const { transactions } = updatedAccount[0]
  // const transaction = transactions.filter((trans) => trans._id === row._id)

  const [open, setOpen] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)
    // const oneTrans = {
    //   _id: e.nativeEvent.target[0].id === undefined ? e.nativeEvent.target.id : e.nativeEvent.target[0].id,
    //   amount: row.amount,
    //   balance: row.balance,
    //   category: e.target.category.value.trim() === '' ? row.category : e.target.category.value.trim(),
    //   currency: row.currency,
    //   date: row.date,
    //   description: row.description,
    //   note: e.target.note.value.trim() === '' ? row.note : e.target.note.value.trim(),
    //   type: row.type,
    //   updatedAt: new Date(),
    //   createdAt: row.createdAt,
    // }

  //   const updtedAccounts = accounts.filter((ac) => ac._id !== id)

  //   const transId = e.nativeEvent.target[0].id
  //   const updatedTrans = transactions.filter((trans) => trans._id !== transId)

  //   const transactionUpdts = [...updatedTrans, { ...oneTrans }]
  //   const oneAccount = {
  //     _id: id,
  //     name: updatedAccount[0].name,
  //     accountName: updatedAccount[0].accountNumber,
  //     description: updatedAccount[0].description,
  //     balance: updatedAccount[0].balance,
  //     currency: updatedAccount[0].currency,
  //     transactions: transactionUpdts,
  //     updatedAt: new Date(),
  //   }

  //   const updatedAccounts = [...updtedAccounts, { ...oneAccount }]
  //   console.log('updatedAccounts :', updatedAccounts)
  //   dispatch(updateUserTransaction(updatedAccounts))
   }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row' align='center'>
          {moment(row.date).format('MMMM Do, YYYY')}
        </TableCell>
        <TableCell align='center'>
          <span className='font-normal'>{row.description}</span>
        </TableCell>
        <TableCell align='center'>
          <span className='font-semibold'>
            {row.currency} {row.amount}
          </span>
        </TableCell>
        <TableCell align='center'>
          <span className='font-semibold'>
            {row.currency} {row.balance}
          </span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <form onSubmit={submitHandler}>
                <div>
                  <span className='font-semibold'>Transaction type:</span> {row.type}
                </div>
                <div>
                  <span className='font-semibold'>Category</span> :
                  <input
                    type='text'
                    id={row._id}
                    name='category'
                    placeholder={row.category}
                    className='border-0 p-1  md:placeholder-gray-900'
                  />
                  <button type='submit'>
                    {' '}
                    <EditIcon id={row._id} style={{ cursor: 'pointer' }} onClick={submitHandler} />
                  </button>
                </div>
                <div>
                  <span className='font-semibold'>Notes</span> :
                  <input
                    type='text'
                    id={row._id}
                    name='note'
                    placeholder={row.note}
                    className='border-0 p-1  md:placeholder-gray-900'
                  />
                  <button type='submit'>
                    {' '}
                    <EditIcon id={row._id} style={{ cursor: 'pointer' }} onClick={submitHandler} />
                  </button>
                </div>
              </form>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Row
