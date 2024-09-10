import { Page } from '../types'

export const getTimeframe = (currentPage: any, location: any) => {
	const index = currentPage === Page.YEAR ? 0 : 1
	return location.pathname.split('/')[index]
}