import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material'
import { getTotal } from './functions'
import { getTotalTime } from '../../../util/calculator'
import { TotalsRowPropTypes } from './TotalsRow.types'
import { RootState } from '../../../redux/types'
import { getAnyAverage, getAveragePace } from '../../../util/calculator'
import { formatTime } from '../../../util/formatter'

const TotalsRow = ({
    data,
    homeDataTotals,
    page,
}: TotalsRowPropTypes) => (
    <TableRow>
        <TableCell>Totals</TableCell>
        <TableCell>{getTotal(data, homeDataTotals, 'activities', page)}</TableCell>
        {page === 'month' && <TableCell>{getAveragePace([...data.activities])}</TableCell>}
        {page === 'month' && <TableCell>{formatTime(getTotalTime([...data.activities]))}</TableCell>}
        {page === 'month' && <TableCell>{getAnyAverage([...data.activities], 'average_heartrate')}</TableCell>}
        {page === 'month' && <TableCell>{getAnyAverage([...data.activities], 'average_cadence')}</TableCell>}
        <TableCell>{getTotal(data, homeDataTotals, 'distance', page)} miles</TableCell>
    </TableRow>
)

TotalsRow.propTypes = {
    data: PropTypes.object.isRequired,
    homeDataTotals: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    page: state.page.page,
    homeDataTotals: state.data.homeDataTotals
})

export default connect(mapStateToProps)(TotalsRow)