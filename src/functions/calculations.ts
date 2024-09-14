import { Activity } from '../api/types'
import { CurrentDataType, HomeDataType, MonthDataType, YearDataType } from '../components/types'

export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)

export const getTotalAverageHeartRate = (currentData: CurrentDataType): string => {
	let totalHeartRate = 0
	let totalActivities = 0
	const data = currentData as HomeDataType
	const activities = Object.keys(data).reduce((acc: Activity[], year: string) => {
		const key = year as unknown as keyof HomeDataType
		acc.push(...data[key].activities)
		return acc
	}, [])
	activities.forEach((activity: Activity) => {
		if (activity.average_heartrate) {
			totalHeartRate += activity.average_heartrate
			totalActivities++
		}
	})
	const averageHeartRate = totalActivities === 0 ? '0' : (totalHeartRate / totalActivities).toFixed(2)
	return isNaN(parseFloat(averageHeartRate)) ? '0' : averageHeartRate
}

export const getAverageHeartRateForHome = (data: HomeDataType, timeframe: string): string => {
	const key = timeframe as unknown as keyof HomeDataType
	let totalHeartRate = 0
	let totalActivities = 0
	data[key].activities.forEach((activity: Activity) => {
		if (activity.average_heartrate) {
			totalHeartRate += activity.average_heartrate
			totalActivities++
		}
	})
	const averageHeartRate = totalActivities === 0 ? '0' : (totalHeartRate / totalActivities).toFixed(2)
	return isNaN(parseFloat(averageHeartRate)) ? '0' : averageHeartRate
}

export const getAverageHeartRateForYear = (currentData: CurrentDataType, timeframe: string = ''): string => {
	if (timeframe === '') {
		let totalHeartRate = 0
		let totalActivities = 0
		Object.keys(currentData).forEach((month: string) => {
			const data = currentData as YearDataType
			const key = month as unknown as keyof YearDataType
			if (data[key].activities.length > 0) {
				totalHeartRate += data[key].activities.reduce((acc: number, activity: Activity) => {
					acc += activity.average_heartrate
					totalActivities++
					return acc
				}, 0)
			}
		})
		const averageHeartRate = totalHeartRate / totalActivities
		return isNaN(averageHeartRate) ? '0.00' : roundNumber(averageHeartRate)
	} else {
		const data = currentData as YearDataType
		const key = timeframe as unknown as keyof YearDataType
		return getAverageHeartRateForMonth(data[key].activities)
	}
}

export const getAverageHeartRateForMonth = (currentData: MonthDataType): string => {
	const totalHeartRate = currentData.reduce((acc: number, activity: Activity) => {
		acc += activity.average_heartrate
		return acc
	}, 0)
	const averageHeartRate = roundNumber(totalHeartRate / currentData.length, 2)
	return isNaN(parseFloat(averageHeartRate)) ? '0' : averageHeartRate
}

export const getHeartRateForRun = (activity: Activity): string => {
	if (!activity.average_heartrate) {
		 return '0.00'
	}
	return roundNumber(activity.average_heartrate, 2) || '0.00'
}

export const roundNumber = (num: number, digitsToRound: number = 2): string => num.toFixed(digitsToRound)

export const secondsToTime = (totalSeconds: number): string => {
	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0')
	const seconds = (totalSeconds % 60).toString().padStart(2, '0')

	if (hours > 0) {
		return `${hours}:${minutes}:${seconds}`
	} else {
		return `${minutes}:${seconds}`
	}
}
  

export const secondsToHoursMinutesSeconds = (currentData: MonthDataType): string => {
	const totalMovingTime = currentData.reduce((acc: number, activity: Activity) => {
		acc += activity.moving_time || 0
		return acc
	}, 0)

	const hours = Math.floor(totalMovingTime / 3600)
	const minutes = Math.floor((totalMovingTime % 3600) / 60).toString().padStart(2, '0')
	const seconds = (totalMovingTime % 60).toString().padStart(2, '0')

	if (hours > 0) {
		return `${hours}:${minutes}:${seconds}`
	} else {
		return `${minutes}:${seconds}`
	}
}

export const getTotalTimeForYear = (currentData: CurrentDataType) => {
	const totalMovingTime = Object.keys(currentData).reduce((acc: number, month: string) => {
		const data = currentData as YearDataType
		const key = month as unknown as keyof YearDataType
		acc += data[key].activities.reduce((acc: number, activity: Activity) => {
			acc += activity.moving_time || 0
			return acc
		}, 0)
		return acc
	}, 0)

	const hours = Math.floor(totalMovingTime / 3600)
	const minutes = Math.floor((totalMovingTime % 3600) / 60)
	const seconds = (totalMovingTime % 60).toString().padStart(2, '0')

	if (hours > 0) {
		return `${hours}:${minutes}:${seconds}`
	} else {
		return `${minutes}:${seconds}`
	}
}