import { NavigateFunction } from 'react-router-dom'
import { SetPageAction } from '../../../redux/types'

export const buttonClick = (
    navigate: NavigateFunction,
    page: string,
    setPage: SetPageAction
) => {
    if (page !== 'distribution') {
        setPage('distribution')
        navigate('/distribution')
    }
}