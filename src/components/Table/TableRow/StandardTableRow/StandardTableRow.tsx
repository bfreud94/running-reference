import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'
import { setMonth, setPage, setYear } from '../../../../redux/actions/pageActions'
import { setMonthlyData, setYearlyData } from '../../../../redux/actions/dataActions'
import { yearColumnClick } from '../../../../functions'
import styles from './StandardTableRow.styles'
import { StandardTableRowPropTypes } from './StandardTableRow.types'
import { RootState } from '../../../../redux/types'

const StandardTableRow = ({
    data,
    homeData,
    page,
    setMonth,
    setMonthlyData,
    setPage,
    setYear,
    setYearlyData,
    time,
    year
}: StandardTableRowPropTypes) => {
    const navigate = useNavigate()
    if (!data || !data[time]) {
        return null
    }
    return (
        <TableRow key={time}>
            <TableCell
                component='th'
                style={styles.yearColumn}
                scope='row'
                onClick={(e) => yearColumnClick(e, homeData, navigate, page, setMonth, setMonthlyData, setPage, setYear, setYearlyData, time, year)}>
                {time}
            </TableCell>
            <TableCell>{data[time].totals.activities}</TableCell>
            <TableCell>{data[time].totals.distance.toFixed(2)} miles</TableCell>
        </TableRow>
    )
}

StandardTableRow.propTypes = {
    data: PropTypes.any.isRequired,
    homeData: PropTypes.any.isRequired,
    page: PropTypes.string.isRequired,
    setMonth: PropTypes.func.isRequired,
    setMonthlyData: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    setYear: PropTypes.func.isRequired,
    setYearlyData: PropTypes.func.isRequired,
    time: PropTypes.any,
    year: PropTypes.string
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    homeData: state.data.homeData,
    page: state.page.page,
    year: state.page.year
})

export default connect(mapStateToProps, { setMonth, setMonthlyData, setPage, setYear, setYearlyData })(StandardTableRow)