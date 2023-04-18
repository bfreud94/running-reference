import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { DistributionButtonProps } from './DistributionButton.types'
import { SetPageAction } from '../../../redux/types'

const buttonClick = (
    navigate: NavigateFunction,
    page: string,
    setPage: SetPageAction
) => {
    if (page !== 'distribution') {
        setPage('distribution')
        navigate('/distribution')
    }
}

const DistributionButton = ({
    navigate,
    page,
    setPage
}: DistributionButtonProps) => (
    <button onClick={() => buttonClick(navigate, page, setPage)}>Distribution</button>
)

export default DistributionButton