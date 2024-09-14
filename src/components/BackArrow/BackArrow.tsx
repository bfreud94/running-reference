import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { getPreviousPage } from '../../functions'
import { useTableState } from '../../hooks'
import { getTimeframe } from './functions'
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