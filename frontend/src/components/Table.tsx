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

/**
 ** Transaction Table Component
 * @param {ITransaction[]}
 * @returns {JSX.Element}
 */
const TransTable: React.FC<ITransaction[]> = (props: ITransaction[]): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { transactions }: ITransaction = props
  transactions?.sort((a: ITransaction, b: ITransaction) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className='  place-content-center mt-auto p-16 mx-36 rounded-md '>
      <TableContainer component={Paper} className=' '>
        <Table aria-label='collapsible table'>
          <TableHead className='h-auto'>
            <TableRow>
              <TableCell align='center' style={{ backgroundColor: '#12002B' }}></TableCell>
              {tableHeaders.map((title, key) => {
                return (
                  <TableCell
                    key={key}
                    align='center'
                    style={{ fontWeight: 'bold', backgroundColor: '#12002B', color: 'white' }}
                  >
                    {title.name.toUpperCase()}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((row: ITransaction, key: string) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <Row key={key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TransTable
