import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state: RootState) => ({
    page: state.page.page,
    year: state.page.year
});

export default connect(mapStateToProps, { setMonth, setPage, updateData, setYear })(Back)