import React from 'react'
import { connect } from 'react-redux'
import MuiTable from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import Back from '../Back/Back'
import Loading from '../Loading/Loading'
import { TablePropTypes } from './Table.types'
import styles from './Table.styles'

const Table = ({
    columns,
    data,
    year
}: TablePropTypes) => (
    data ? (
        <div style={styles.wrapper}>
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

const mapStateToProps = (state: any) => ({
    data: state.data.currentData,
    year: state.page.year
})

export default connect(mapStateToProps)(Table)