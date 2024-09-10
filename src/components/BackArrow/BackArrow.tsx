import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import { useTableState } from '../hooks'
import { getPreviousPage } from '../../functions'
import { getTimeframe } from './functions'
import { useLocation } from 'react-router-dom'
import styles from './BackArrow.styles'

const BackArrow = () => {
	const { changePage, currentPage } = useTableState()
	const location = useLocation()
	const destinationPage = getPreviousPage(currentPage)

	return (
		<ArrowBack style={styles.backArrow} onClick={() => changePage(destinationPage, getTimeframe(currentPage, location))} />
	)
}

export default BackArrow