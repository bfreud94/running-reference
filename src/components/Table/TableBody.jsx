import React from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { meterToMile } from '../../util'

const MyTableBody = ({
    data = []
}) => (
    <TableBody>
        {Object.keys(data).map((year) => (
            <TableRow
                key={year}
            >
                <TableCell component='th' scope='row'>{year}</TableCell>
                <TableCell>{data[year].totals.activities}</TableCell>
                <TableCell>{meterToMile(data[year].totals.distance)} miles</TableCell>
            </TableRow>
        ))}
    </TableBody>
)

export default MyTableBody