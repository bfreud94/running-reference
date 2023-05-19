import { NavigateFunction } from 'react-router-dom'
import { SetPageAction } from '../../../redux/types'

export interface GitHubTableButtonProps {
    navigate: NavigateFunction
    page: string
    setPage: SetPageAction
}