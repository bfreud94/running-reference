import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableHeader = (props) => (
    <TableHead>
        <TableRow>
            <TableCell>First</TableCell>
            <TableCell>Second</TableCell>
            <TableCell>Third</TableCell>
        </TableRow>
    </TableHead>
)

export default TableHeader