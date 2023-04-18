import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { setSortedKeys } from '../../../redux/actions/dataActions'
import styles from './TableHeader.styles'
import { sortData } from './util'
import { TableHeaderPropTypes } from './TableHeader.types'
import { RootState } from '../../../redux/types'

const TableHeader = ({
    columns,
    data,
    page,
    prevSortColumn,
    setSortedKeys,
    sortOrder
}: TableHeaderPropTypes) => (
    <TableHead>
        <TableRow>
            {columns.map((column: string) => (
                <TableCell style={styles.tableHeaderCell} key={column} onClick={() => sortData(column, data, page, prevSortColumn, setSortedKeys, sortOrder)}>{column}</TableCell>
            ))}
        </TableRow>
    </TableHead>
)

TableHeader.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
    setSortedKeys: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    page: state.page.page,
    prevSortColumn: state.data.sortKey,
    sortOrder: state.data.sortOrder
})

export default connect(mapStateToProps, { setSortedKeys })(TableHeader)