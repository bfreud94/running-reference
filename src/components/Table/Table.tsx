import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MuiTable from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import Back from '../Back/Back'
import Loading from '../Loading/Loading'
import styles from './Table.styles'
import { TablePropTypes } from './Table.types'
import { RootState } from '../../redux/types'

const Table = ({
    columns,
    data,
    year
}: TablePropTypes) => (
    data ? (
        <div style={styles.wrapper(year)}>
            {year && <Back />}
            <TableContainer>
                <MuiTable>
                    <TableHeader columns={columns} />
                    <TableBody />
                </MuiTable>
            </TableContainer>
        </div>
    ) : <Loading />
)

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object,
    year: PropTypes.string
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    year: state.page.year
})

export default connect(mapStateToProps)(Table)