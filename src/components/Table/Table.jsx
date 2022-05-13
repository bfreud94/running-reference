import React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import Loading from '../Loading/Loading'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const MyTable = ({
    data
}) => (
    data && Object.keys(data).length > 0 ? (
        <TableContainer>
            <Table>
                <TableHeader />
                <TableBody data={data} />
            </Table>
        </TableContainer>
    ) : (
        <Loading />
    )
)

export default MyTable