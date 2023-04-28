import { NavigateFunction } from 'react-router-dom'
import { SetPageAction, UpdateDataAction } from '../../../redux/types'

export const buttonClick = (
    navigate: NavigateFunction,
    page: string,
    setPage: SetPageAction,
    updateData: UpdateDataAction
) => {
    if (page !== 'home') {
        setPage('home')
        updateData('home')
        navigate('/')
    }
}