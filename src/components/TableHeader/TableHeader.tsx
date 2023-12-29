import React from 'react'
import { 
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material'
import { useTableState } from '../hooks'
import BackArrow from '../BackArrow/BackArrow'

const TableHeader = () => {
    const { currentPage, headers } = useTableState()
    return (
        <TableHead>
            <TableRow>
                {headers.map((header: string, index: number) => (
					<TableCell key={header}>
						{index === 0 && currentPage !== 'home' && <BackArrow />}
						{header}
					</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}


export default TableHeader