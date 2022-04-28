import React from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'

const MyTableBody = ({
    data = []
}) => (
    <TableBody>
        {data.map(run => ({
            date: run.date,
            name: run.name,
            distance: run.distance
        })).map((row) => (
            <TableRow
                key={row.date}
            >
                <TableCell component='th' scope='row'>{row.date.toLocaleDateString()}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.distance}</TableCell>
            </TableRow>
        ))}
    </TableBody>
)

export default MyTableBody