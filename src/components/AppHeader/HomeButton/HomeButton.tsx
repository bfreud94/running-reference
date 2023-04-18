import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { HomeButtonProps } from './HomeButton.types'
import { SetPageAction, UpdateDataAction } from '../../../redux/types'

const buttonClick = (
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

const HomeButton = ({
    navigate,
    page,
    setPage,
    updateData
}: HomeButtonProps) => (
    <button onClick={() => buttonClick(navigate, page, setPage, updateData)}>Home</button>
)

export default HomeButton