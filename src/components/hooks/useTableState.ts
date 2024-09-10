import { useContext } from 'react'
import { TableContext } from '../context'
import { TableContextType } from '../types'

export const useTableState = (): TableContextType => {
	const state = useContext(TableContext)
	return state
}