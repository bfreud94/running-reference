import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StandardTableRow from '../../TableRow/StandardTableRow/StandardTableRow'
import { StandardTableBodyProps } from './StandardTableBody.types'
import { RootState } from '../../../../redux/types'

const StandardTableBody = ({
    sortedKeys
}: StandardTableBodyProps) => (
    <>
        {sortedKeys.map((time: string) => (
            <StandardTableRow
                key={time}
                time={time}
            />
        ))}
    </>
)

StandardTableBody.propTypes = {
    sortedKeys: PropTypes.any.isRequired
}

const mapStateToProps = (state: RootState) => ({
    sortedKeys: state.data.sortedKeys
})

export default connect(mapStateToProps)(StandardTableBody)