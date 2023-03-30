import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MonthTableRow from '../../TableRow/MonthTableRow/MonthTableRow'
import { Activity } from '../../../../api/types'
import { RootState } from '../../../../redux/types'
import { MonthTableBodyProps } from './MonthTableBody.types'

const MonthTableBody = ({
    data,
    sortedKeys
}: MonthTableBodyProps) => (
    <>
        {sortedKeys
            .map((id: string) => data.activities.find((currentActivity: Activity) => currentActivity.id === id))
            .map((activity: Activity) => <MonthTableRow activity={activity} key={activity.id} />)
        }
    </>
)

MonthTableBody.propTypes = {
    data: PropTypes.any.isRequired,
    sortedKeys: PropTypes.any.isRequired
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    page: state.page.page,
    sortedKeys: state.data.sortedKeys
})

export default connect(mapStateToProps)(MonthTableBody)