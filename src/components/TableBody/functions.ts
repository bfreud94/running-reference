import { Activity } from '../../api/types'
import { CurrentDataType, MonthDataType, Page } from '../../components/types'

export const getSortedData = (currentData: MonthDataType) => currentData.sort((a: Activity, b: Activity) => {
	const aDate = new Date(a.start_date)
	const bDate = new Date(b.start_date)
	return aDate.getTime() - bDate.getTime()
})

export const getTableData = (currentData: CurrentDataType, page: Page) =>
	page === Page.MONTH ? getSortedData(currentData as MonthDataType) : currentData