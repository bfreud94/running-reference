import { CSSProperties } from 'react'
import { CurrentDataType } from '../../types'

export interface LeftMostRowProps {
	timeframe: string
	tableData: CurrentDataType
}

export interface LeftMostRowStyles {
	leftMostCell: CSSProperties
}