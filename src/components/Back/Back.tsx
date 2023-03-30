import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { setMonth, setPage, setYear } from '../../redux/actions/pageActions'
import { updateData } from '../../redux/actions/dataActions'
import { onBackClick } from './functions'
import styles from './Back.styles'
import { BackPropTypes } from './Back.types'
import { RootState } from '../../redux/types'

const Back = ({
    page,
    setMonth,
    setPage,
    setYear,
    updateData,
    year
}: BackPropTypes) => {
    const navigate = useNavigate()
    return (
        <ArrowBack
            style={styles.backArrow}
            onClick={() => onBackClick(navigate, page, setMonth, setPage, setYear, updateData, year)}
        />
    )
}

Back.propTypes = {
    page: PropTypes.string.isRequired,
    setMonth: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    setYear: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    year: PropTypes.string.isRequired
}

const mapStateToProps = (state: RootState) => ({
    page: state.page.page,
    year: state.page.year
});

export default connect(mapStateToProps, { setMonth, setPage, updateData, setYear })(Back)