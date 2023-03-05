import React from 'react'
import { connect } from 'react-redux'
import { TableBody as MuiTableBody } from '@mui/material'
import StandardTableRow from '../StandardTableRow/StandardTableRow'
import MonthTableRow from '../MonthTableRow/MonthTableRow'
import TotalsRow from '../TotalsRow/TotalsRow'
import { TableBodyPropTypes } from './TableBody.types'

const TableBody = ({
    data,
    page
}: TableBodyPropTypes) => (
    <MuiTableBody>
        {page !== 'month' ? (
            Object.keys(data).map((time: any) => (
                time !== 'totals' && (
                    <StandardTableRow
                        key={time}
                        time={time}
                    />
                )
            ))
        ) : (
            <MonthTableRow data={data} />
        )}
        <TotalsRow data={data} />
    </MuiTableBody>
)

const mapStateToProps = (state: any) => ({
    data: state.data.currentData,
    page: state.page.page
})

export default connect(mapStateToProps)(TableBody)