import React, { FC } from 'react'
import {
	TableBody as MuiTableBody
} from '@mui/material'
import TotalsRow from '../TableRows/TotalsRow/TotalsRow'
import TableRow from '../TableRows/TableRow/TableRow'
import { getTableData } from './functions'
import { useTableState } from '../../hooks'
import { CurrentDataType, Page, YearDataType } from '../types'
import { getYearlyData } from '../../functions'

const TableBody: FC = () => {
	const { currentPage, data } = useTableState()
	let correctData = data.currentData
	if (Object.keys(data.currentData).includes('2010') && currentPage === Page.MONTH && data.currentData) {
		const [year, month] = window.location.pathname.split('/').filter(Boolean)
		const yearData = getYearlyData(data.currentData[year as keyof CurrentDataType])
		const monthData = yearData[month as keyof YearDataType]
		correctData = monthData.activities
	} else if (Object.keys(data.currentData).includes('2010') && currentPage === Page.YEAR && data.currentData) {
		const [year] = window.location.pathname.split('/').filter(Boolean)
		correctData = getYearlyData(data.currentData[year as keyof CurrentDataType])
	}
	const tableData = getTableData(correctData, currentPage)
	return (
		<MuiTableBody>
			{Object.keys(tableData).map((timeframe: string) => (
				<TableRow key={timeframe} tableData={tableData} timeframe={timeframe} />
			))}
			<TotalsRow tableData={tableData} />
		</MuiTableBody>
	)
}

export default TableBody