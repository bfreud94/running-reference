import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material'
import { formatDate, meterToMile } from '../../../../util/formatter'
import { MonthTableRowProps } from './MonthTableRow.types'

const MonthTableRow = ({
    activity
}: MonthTableRowProps) => (
    <TableRow key={activity.id}>
        <TableCell>{formatDate(activity.start_date)}</TableCell>
        <TableCell>{activity.name}</TableCell>
        <TableCell>{meterToMile(activity.distance)} miles</TableCell>
    </TableRow>
)

MonthTableRow.propTypes = {
    activity: PropTypes.any.isRequired
}

export default MonthTableRow