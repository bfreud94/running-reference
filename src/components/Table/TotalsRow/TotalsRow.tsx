import React from 'react'
import { connect } from 'react-redux'
import { TableCell, TableRow } from '@mui/material'
import { TotalsRowPropTypes } from './TotalsRow.types'

const getTotal = (data: any, page: string, key: string) => {
    if (page === 'home') {
        return data && data.totals ? data.totals[key] : 0
    } else if (page === 'year') {
        return Object.keys(data).reduce(((accumulator: number, currentValue: any) =>
            accumulator += parseFloat(data[currentValue].totals[key])
        ), 0).toFixed(2)
    } else if (page === 'month') {
        return data.totals[key]
    }
    return 0
}

const TotalsRow = ({
    data,
    page
}: TotalsRowPropTypes) => (
    <TableRow>
        <TableCell>Totals</TableCell>
        <TableCell>{getTotal(data, page, 'activities')}</TableCell>
        <TableCell>{getTotal(data, page, 'distance')} miles</TableCell>
    </TableRow>
)

const mapStateToProps = (state: any) => ({
    page: state.page.page
})

export default connect(mapStateToProps)(TotalsRow)