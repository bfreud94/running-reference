import React from 'react'
import {
	QueryClient,
	QueryClientProvider
  } from '@tanstack/react-query'
import Table from './components/Table/Table'
import TableProvider from './components/context'
import { useRoutes } from 'react-router-dom'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TableProvider>
			{useRoutes([
				{ path: '/', element: <Table /> },
				{ path: '/:year', element: <Table /> },
				{ path: '/:year/:month', element: <Table /> },
			])}
		</TableProvider>
	</QueryClientProvider>
)

export default App