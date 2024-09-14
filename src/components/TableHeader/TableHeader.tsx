import React, { FC } from 'react'
import { 
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material'
import BackArrow from '../BackArrow/BackArrow'
import { useTableState } from '../../hooks'

const TableHeader: FC = () => {
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