import { NavigateFunction } from 'react-router-dom'
import { SetPageAction } from '../../../redux/types'

export interface DistributionButtonProps {
    navigate: NavigateFunction
    page: string
    setPage: SetPageAction
}