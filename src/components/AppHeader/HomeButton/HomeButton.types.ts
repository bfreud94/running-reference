import { NavigateFunction } from 'react-router-dom'
import { SetPageAction, UpdateDataAction } from '../../../redux/types'

export interface HomeButtonProps {
    navigate: NavigateFunction
    page: string
    setPage: SetPageAction
    updateData: UpdateDataAction
}