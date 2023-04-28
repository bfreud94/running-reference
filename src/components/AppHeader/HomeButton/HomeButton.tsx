import React from 'react'
import { HomeButtonProps } from './HomeButton.types'
import { buttonClick } from './functions'

const HomeButton = ({
    navigate,
    page,
    setPage,
    updateData
}: HomeButtonProps) => (
    <button onClick={() => buttonClick(navigate, page, setPage, updateData)}>Home</button>
)

export default HomeButton