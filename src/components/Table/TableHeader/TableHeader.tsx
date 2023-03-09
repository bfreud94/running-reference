import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { setSortedKeys } from '../../../redux/actions/dataActions'
import styles from './TableHeader.styles'
import { TableHeaderPropTypes } from './TableHeader.types'

const columnNameMap = {
    'Total Activities': 'activities',
    'Total Distance': 'distance'
}

const sortData = (column: any, data: any, page: any, setSortedKeys: any, sortOrder: any) => {
    if (page === 'month') {
        
    } else {
        const sortedKeys = Object.keys(data).sort((a: any, b: any) => {
            const ascending = data[b].totals[columnNameMap[column]] - data[a].totals[columnNameMap[column]]
            const descending = data[a].totals[columnNameMap[column]] - data[b].totals[columnNameMap[column]]
            const noOrder = a - b
            return sortOrder === 'NONE' ? ascending : sortOrder === 'ASC' ? descending : noOrder
        })
        setSortedKeys(sortedKeys)
    }
}

const TableHeader = ({
    columns,
    data,
    page,
    setSortedKeys,
    sortOrder
}: TableHeaderPropTypes) => (
    <TableHead>
        <TableRow>
            {columns.map((column: any) => (
                <TableCell style={styles.tableHeaderCell} key={column} onClick={() => sortData(column, data, page, setSortedKeys, sortOrder)}>{column}</TableCell>
            ))}
        </TableRow>
    </TableHead>
)

TableHeader.propTypes = {
    columns: PropTypes.any.isRequired,
    data: PropTypes.any.isRequired,
    page: PropTypes.any.isRequired,
    setSortedKeys: PropTypes.any.isRequired,
    sortOrder: PropTypes.any.isRequired
}

const mapStateToProps = (state: any) => ({
    data: state.data.currentData,
    page: state.page.page,
    sortOrder: state.data.sortOrder
})

export default connect(mapStateToProps, { setSortedKeys })(TableHeader)