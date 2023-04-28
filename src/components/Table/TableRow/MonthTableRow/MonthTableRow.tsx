import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material'
import { getAnyActivityProperty, getTime, openStravaActivity } from './functions'
import { formatDate, formatPace } from '../../../../util/formatter'
import styles from './MonthTableRow.styles'
import { MonthTableRowProps } from './MonthTableRow.types'

const MonthTableRow = ({
    activity
}: MonthTableRowProps) => (
    <TableRow key={activity.id}>
        <TableCell style={styles.dateCell} onClick={() => openStravaActivity(activity.id)}>{formatDate(activity.start_date)}</TableCell>
        <TableCell>{activity.name}</TableCell>
        <TableCell>{formatPace(activity.average_speed)}</TableCell>
        <TableCell>{getTime(activity.moving_time)}</TableCell>
        <TableCell>{getAnyActivityProperty(activity, 'average_heartrate', 0)}</TableCell>
        <TableCell>{getAnyActivityProperty(activity, 'average_cadence', 0) * 2}</TableCell>
        <TableCell>{getAnyActivityProperty(activity, 'distance', 0).toFixed(2)} miles</TableCell>
    </TableRow>
)

MonthTableRow.propTypes = {
    activity: PropTypes.object.isRequired
}

export default MonthTableRow