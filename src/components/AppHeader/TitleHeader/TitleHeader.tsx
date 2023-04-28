import React from 'react'
import PropTypes from 'prop-types'
import { RootState } from '../../../redux/types'
import styles from './TitleHeader.styles'
import { getTitleHeader } from './functions'
import { TitleHeaderProps } from './TitleHeader.types'
import { connect } from 'react-redux'

const TitleHeader = ({
    month,
    year
}: TitleHeaderProps) => (
    <div style={styles.titleHeaderWrapper}>
        <h2 style={styles.titleHeader}>{getTitleHeader(month, year)}</h2>
    </div>
)

TitleHeader.propTypes = {
    month: PropTypes.string,
    year: PropTypes.string
}

const mapStateToProps = (state: RootState) => ({
    month: state.page.month,
    year: state.page.year
})

export default connect(mapStateToProps)(TitleHeader)