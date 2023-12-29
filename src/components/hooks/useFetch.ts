import { useQuery } from '@tanstack/react-query'

export const useFetch = (url: string): any => {
    const fetchData = async () => {
        const data = await fetch(url)
        return data.json()
    }

    const { isLoading, data, status } = useQuery({
		queryKey: [url],
		queryFn: fetchData
	})

    return {
		apiResponse: data,
        isLoading,
		status
    }
}

/*
import { useEffect } from 'react'
import { useTableState } from './useTableState'

export const useFetch = () => {
	const { homeData, setHomeData, setHomeTotals, setCurrentData, setCurrentTotals, setIsLoading } = useTableState()
	useEffect(() => {
		if (!Object.keys(homeData).length) {
			const fetchData = async () => {
				const response = await fetch('http://localhost:8000/api/yearlyRuns')
				const data = await response.json()
				const { totals, ...yearlyData } = data
				setHomeData(yearlyData)
				setHomeTotals(totals)
				setCurrentData(yearlyData)
				setCurrentTotals(totals)
				setIsLoading(false)
			}
			fetchData()
		}
	}, [homeData])
	return 
}
*/

// try useQuery again
/*
useEffect(() => {
	if (!Object.keys(data.data.homeData).length) {
		initialDataLoad(
			'http://localhost:8000/api/yearlyRuns',
			setData,
			setIsLoading
		)
	}
}, [])
*/