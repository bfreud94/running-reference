import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableHeader = (props) => (
    <TableHead>
        <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Total Activities</TableCell>
            <TableCell>Total Distance</TableCell>
        </TableRow>
    </TableHead>
)

export default TableHeader