import { useQuery } from '@tanstack/react-query'
import { UseFetchHook } from './types'

export const useFetch = (url: string): UseFetchHook => {
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