import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Row from './../components/Row'
import { Paper } from '@mui/material'
import { IAccount, ITransaction } from '../redux/userReducerTypes'

export function createData(date: string, description: string, amount: number, balance: number) {
  return {
    date,
    description,
    amount,
    balance,
  }
}

export const rows = [
  createData('June 20th, 2020', 'Golden Sun Backery', 5.0, 2082.79),
  createData('June 20th, 2020', 'Golden Sun Backery', 10.0, 2087.79),
  createData('June 20th, 2020', 'Golden Sun Backery', 20.0, 2097.79),
  createData('June 20th, 2020', 'Golden Sun Backery', 30.0, 2117.79),
  createData('June 20th, 2020', 'Golden Sun Backery', 40.0, 2147.79),
  createData('June 20th, 2020', 'Golden Sun Backery', 50.0, 2187.79),
]
export const tableHeaders = [{ name: 'date' }, { name: 'description' }, { name: 'amount' }, { name: 'balance' }]

const TransTable: React.FC<ITransaction[]> = (props: ITransaction[]) => {

  const { transactions } = props
  console.log('transa',transactions)

  return (
    <div className='  place-content-center mt-auto p-16 mx-36 rounded-md '>
      <TableContainer component={Paper} className=' '>
        <Table aria-label='collapsible table'>
          <TableHead className='h-auto'>
            <TableRow>
              <TableCell align='center' style={{ backgroundColor: '#12002B' }} ></TableCell>
              {tableHeaders.map((title, key) => {
                return (
                  <TableCell key={key} align='center' style={{ fontWeight: 'bold', backgroundColor: '#12002B', color: 'white' }}>
                    {title.name.toUpperCase()}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((row , key) => (
              <Row key={key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TransTable
