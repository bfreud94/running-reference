import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import { useTableState } from '../hooks'
import { getPreviousPage } from '../../functions'
import { getTimeframe } from './functions'
import { useLocation } from 'react-router-dom'

const BackArrow = () => {
	const { changePage, currentPage } = useTableState()
	const location = useLocation()
	const destinationPage = getPreviousPage(currentPage)

	return (
		<ArrowBack style={{ cursor: 'pointer' }} onClick={() => changePage(destinationPage, getTimeframe(currentPage, location))} />
	)
}

export default BackArrow