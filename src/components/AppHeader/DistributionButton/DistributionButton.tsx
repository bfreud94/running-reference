import React from 'react'
import { DistributionButtonProps } from './DistributionButton.types'

const DistributionButton = ({
    navigate,
    page,
    setPage
}: DistributionButtonProps) => (
    <button onClick={() => {
        if (page !== 'distribution') {
            setPage('distribution')
            navigate('/distribution')
        }
    }}>Distribution</button>
)

export default DistributionButton