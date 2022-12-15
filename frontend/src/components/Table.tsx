import { Paper } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { ITransaction } from '../redux/userReducerTypes'
import Row from './../components/Row'


export const tableHeaders = [{ name: 'date' }, { name: 'description' }, { name: 'amount' }, { name: 'balance' }]

const TransTable: React.FC<ITransaction[]> = (props: ITransaction[]) => {

  const { transactions } = props
  console.log('transa',transactions)

  // TODO ADD Generique balance in table 

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
