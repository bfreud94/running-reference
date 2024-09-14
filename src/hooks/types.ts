export type UseFetchHook = {
	apiResponse: any
	isLoading: boolean
	status: 'error' | 'loading' | 'success'
}