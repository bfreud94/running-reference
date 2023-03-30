import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TableBody as MuiTableBody } from '@mui/material'
import MonthTableBody from './MonthTableBody/MonthTableBody'
import StandardTableBody from './StandardTableBody/StandardTableBody'
import TotalsRow from '../TotalsRow/TotalsRow'
import { RootState } from '../../../redux/types'
import { TableBodyPropTypes } from './TableBody.types'

const TableBody = ({
    page
}: TableBodyPropTypes) => (
    <MuiTableBody>
        {page !== 'month' ? (
            <StandardTableBody />
        ) : (
            <MonthTableBody />
        )}
        <TotalsRow />
    </MuiTableBody>
)

TableBody.propTypes = {
    page: PropTypes.string.isRequired
}

const mapStateToProps = (state: RootState) => ({
    page: state.page.page
})

export default connect(mapStateToProps)(TableBody)