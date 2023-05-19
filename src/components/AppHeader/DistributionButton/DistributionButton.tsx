import React from 'react'
import { DistributionButtonProps } from './DistributionButton.types'
import { buttonClick } from './functions'

const DistributionButton = ({
    navigate,
    page,
    setPage
}: DistributionButtonProps) => (
    <button onClick={() => buttonClick(navigate, page, setPage)}>Distribution</button>
)

export default DistributionButton