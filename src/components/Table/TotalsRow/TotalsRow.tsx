import React from 'react'
import { connect } from 'react-redux'
import { TableCell, TableRow } from '@mui/material'
import { TotalsRowPropTypes } from './TotalsRow.types'
import { RootState } from '../../../redux/types'

const getTotal = (data: any, homeDataTotals: any, key: string, page: string) => {
    if (page === 'home') {
        return homeDataTotals[key]
    } else if (page === 'year') {
        const total = Object.keys(data).reduce(((accumulator: number, currentValue: any) =>
            accumulator += parseFloat(data[currentValue].totals[key])
        ), 0)
        return key === 'activities' ? total : total.toFixed(2)
    } else if (page === 'month') {
        return data.totals[key]
    }
    return 0
}

const TotalsRow = ({
    data,
    homeDataTotals,
    page,
}: TotalsRowPropTypes) => (
    <TableRow>
        <TableCell>Totals</TableCell>
        <TableCell>{getTotal(data, homeDataTotals, 'activities', page)}</TableCell>
        <TableCell>{getTotal(data, homeDataTotals, 'distance', page)} miles</TableCell>
    </TableRow>
)

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    page: state.page.page,
    homeDataTotals: state.data.homeDataTotals
})

export default connect(mapStateToProps)(TotalsRow)