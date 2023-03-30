import React from 'react'
import { connect } from 'react-redux'
import { TableBody as MuiTableBody } from '@mui/material'
import StandardTableRow from '../StandardTableRow/StandardTableRow'
import MonthTableRow from '../MonthTableRow/MonthTableRow'
import TotalsRow from '../TotalsRow/TotalsRow'
import { RootState } from '../../../redux/types'
import { Activity } from '../../../api/types'
import { TableBodyPropTypes } from './TableBody.types'

const TableBody = ({
    data,
    page,
    sortedKeys
}: TableBodyPropTypes) => (
    <MuiTableBody>
        {page !== 'month' ? (
            sortedKeys.map((time: string) => (
                <StandardTableRow
                    key={time}
                    time={time}
                />
            ))
        ) : (
            sortedKeys.map((id: string) => data.activities.find((currentActivity: Activity) => currentActivity.id === id))
                .map((activity: Activity) => <MonthTableRow activity={activity} key={activity.id} />)
        )}
        <TotalsRow />
    </MuiTableBody>
)

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    page: state.page.page,
    sortedKeys: state.data.sortedKeys
})

export default connect(mapStateToProps)(TableBody)