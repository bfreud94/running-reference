import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import { formatDate, meterToMile } from '../../../util'
import { MonthTableRowProps } from './MonthTableRow.types'

const MonthTableRow = ({
    data
}: MonthTableRowProps) => (
    data.activities.map((activity: any) => (
        <TableRow key={activity.id}>
            <TableCell>{formatDate(activity.start_date)}</TableCell>
            <TableCell>{activity.name}</TableCell>
            <TableCell>{meterToMile(activity.distance)} miles</TableCell>
        </TableRow>
    ))
)

export default MonthTableRow