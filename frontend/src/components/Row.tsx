/* eslint-disable react/prop-types */

import { TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'

import { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import { Box } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


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
    const { row } = props

    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}

                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.date}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.balance}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <div>Transaction type: {row.type}</div>
                            <div>
                                Category : {row.category} <EditIcon style={{ cursor: 'pointer' }} />
                            </div>
                            <div>
                                Notes : {row.note} <EditIcon style={{ cursor: 'pointer' }} />
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}


export default Row