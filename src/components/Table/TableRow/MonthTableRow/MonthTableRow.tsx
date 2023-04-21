import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material'
import { getTime, openStravaActivity } from './functions'
import { formatDate } from '../../../../util/formatter'
import { getPace } from '../../../../functions'
import { MonthTableRowProps } from './MonthTableRow.types'

const styles = {
    dateCell: {
        cursor: 'pointer'
    }
}

const MonthTableRow = ({
    activity
}: MonthTableRowProps) => (
    <TableRow key={activity.id}>
        <TableCell style={styles.dateCell} onClick={() => openStravaActivity(activity.id)}>{formatDate(activity.start_date)}</TableCell>
        <TableCell>{activity.name}</TableCell>
        <TableCell>{getPace(activity.average_speed)}</TableCell>
        <TableCell>{getTime(activity.moving_time)}</TableCell>
        <TableCell>{activity.distance.toFixed(2)} miles</TableCell>
    </TableRow>
)

MonthTableRow.propTypes = {
    activity: PropTypes.object.isRequired
}

export default MonthTableRow