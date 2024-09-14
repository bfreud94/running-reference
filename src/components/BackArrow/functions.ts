import { Page } from '../types'
import { Location } from 'react-router-dom'

export const getTimeframe = (currentPage: Page, location: Location<any>) => {
	const index = currentPage === Page.YEAR ? 0 : 1
	return location.pathname.split('/')[index]
}