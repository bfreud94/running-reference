import React from 'react'
import { connect } from 'react-redux'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setMonth, setYear } from '../../../redux/actions/pageActions'
import { setMonthlyData, setYearlyData } from '../../../redux/actions/dataActions'
import styles from './Arrow.styles'
import { ArrowProps } from './Arrow.types'
import { RootState, SetMonthAction, SetMonthlyDataAction, SetYearAction, SetYearlyDataAction } from '../../../redux/types'
import { getRunsInAMonth, getRunsInAYear } from '../../../util/runs'
import { getFirstAndLastYears } from '../../../functions'
import { getNextMonthAndYear } from '../../../util/calendar'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const getYear = (isLeft: boolean, year: string) => (isLeft ? parseInt(year) - 1 : parseInt(year) + 1).toString()

const onArrowClick = (homeData: any, isLeft: boolean, month: string, navigate: NavigateFunction, setMonth: SetMonthAction, setMonthlyData: SetMonthlyDataAction, setYear: SetYearAction, setYearlyData: SetYearlyDataAction, year: string) => {
    const [firstYear, lastYear] = getFirstAndLastYears(homeData)
    if (month) {
        const now = new Date()
        const escape = (isLeft && year === firstYear && month === 'January') || (!isLeft && year === now.getFullYear().toString() && month === 'December')
        if (!escape) {
            const [newMonth, newYear] = getNextMonthAndYear(isLeft, month, year)
            const monthlyRuns = getRunsInAMonth(homeData, newYear, newMonth)
            setMonth(newMonth)
            if (newYear !== year) {
                setYear(newYear)
            }
            setMonthlyData(monthlyRuns)
            navigate(`/${newYear}/${newMonth}`)
        }
    } else {
        const escape = (isLeft && year === firstYear) || (!isLeft && year === lastYear)
        if (!escape) {
            const newYear = getYear(isLeft, year)
            const yearlyRuns = getRunsInAYear(homeData[newYear])
            setYear(newYear)
            setYearlyData(yearlyRuns)
            navigate(newYear)
        }
    }
}

const Arrow = ({
    homeData,
    isLeft,
    month,
    setMonth,
    setMonthlyData,
    setYear,
    setYearlyData,
    year
}: ArrowProps) => {
    const navigate = useNavigate()
    return (
        isLeft ? (
            <ArrowBack style={styles.arrow} onClick={() => onArrowClick(homeData, isLeft, month, navigate, setMonth, setMonthlyData, setYear, setYearlyData, year)} />
        ) : (
            <ArrowForward style={styles.arrow} onClick={() => onArrowClick(homeData, isLeft, month, navigate, setMonth, setMonthlyData, setYear, setYearlyData, year)} />
        )
    )
}

Arrow.propTypes = {
    homeData: PropTypes.any.isRequired,
    isLeft: PropTypes.bool.isRequired,
    setMonth: PropTypes.func.isRequired,
    setMonthlyData: PropTypes.func.isRequired,
    setYear: PropTypes.func.isRequired,
    setYearlyData: PropTypes.func.isRequired
}

const mapStateToProps = ({ data: { homeData }, page: { month, year } }: RootState) => ({
    homeData,
    month,
    year
})

export default connect(mapStateToProps, { setMonth, setMonthlyData, setYear, setYearlyData })(Arrow)