import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { setMonth, setYear } from '../../../redux/actions/pageActions'
import { setMonthlyData, setYearlyData } from '../../../redux/actions/dataActions'
import { onArrowClick } from './functions'
import styles from './Arrow.styles'
import { ArrowProps } from './Arrow.types'
import { RootState } from '../../../redux/types'

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