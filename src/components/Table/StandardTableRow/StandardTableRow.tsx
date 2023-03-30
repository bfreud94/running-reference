import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'
import { setMonth, setPage, setYear } from '../../../redux/actions/pageActions'
import { setMonthlyData, setYearlyData } from '../../../redux/actions/dataActions'
import { yearColumnClick } from '../../../functions'
import styles from './StandardTableRow.styles'
import { StandardTableRowPropTypes } from './StandardTableRow.types'
import { RootState } from '../../../redux/types'

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
            <TableCell>{data[time].totals.distance} miles</TableCell>
        </TableRow>
    )
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    homeData: state.data.homeData,
    page: state.page.page,
    year: state.page.year
})

export default connect(mapStateToProps, { setMonth, setMonthlyData, setPage, setYear, setYearlyData })(StandardTableRow)