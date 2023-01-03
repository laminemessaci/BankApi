import { Paper } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Row from './../components/Row'

export const tableHeaders = [{ name: 'date' }, { name: 'description' }, { name: 'amount' }, { name: 'balance' }]

export interface ITransactions {
  _id: string
  amount: number
  currency: string
  description: string
  date: Date
  type: string
  category: string
  note: string
  balance: number
  createdAt: Date
  updatedAt: Date
  __v: number
  
}

const TransTable: React.FC<ITransactions[]> = (props: ITransactions[]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { transactions }: ITransactions[] = props
  const ordredTrans = [...transactions].sort((a, b) => {
    return new Date(b.date)?.getTime() - new Date(a.date)?.getTime()
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
            {ordredTrans?.map((row, key) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              return <Row key={key} row={row} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TransTable
