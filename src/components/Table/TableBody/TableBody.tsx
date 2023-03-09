import React from 'react'
import { connect } from 'react-redux'
import { TableBody as MuiTableBody } from '@mui/material'
import StandardTableRow from '../StandardTableRow/StandardTableRow'
import MonthTableRow from '../MonthTableRow/MonthTableRow'
import TotalsRow from '../TotalsRow/TotalsRow'
import { TableBodyPropTypes } from './TableBody.types'

const TableBody = ({
    page,
    sortedKeys
}: TableBodyPropTypes) => (
    <MuiTableBody>
        {page !== 'month' ? (
            sortedKeys.map((time: any) => (
                <StandardTableRow
                    key={time}
                    time={time}
                />
            ))
        ) : (
            <MonthTableRow />
        )}
        <TotalsRow />
    </MuiTableBody>
)

const mapStateToProps = (state: any) => ({
    page: state.page.page,
    sortedKeys: state.data.sortedKeys
})

export default connect(mapStateToProps)(TableBody)