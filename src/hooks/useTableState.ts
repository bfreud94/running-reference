import { useContext } from 'react'
import { TableContext } from '../components/context'
import { TableContextType } from '../components/types'

export const useTableState = (): TableContextType => {
	const state = useContext(TableContext)
	return state
}