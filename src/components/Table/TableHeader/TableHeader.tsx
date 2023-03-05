import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableHeader = ({
    columns
}) => (
    <TableHead>
        <TableRow>
            {columns.map((column: any) => (
                <TableCell key={column}>{column}</TableCell>
            ))}
        </TableRow>
    </TableHead>
)

export default TableHeader