import React from 'react'
import { HomeButtonProps } from './HomeButton.types'

const buttonClick = (
    navigate: any,
    page: any,
    setPage: any,
    updateData: any
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