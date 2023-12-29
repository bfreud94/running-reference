import { CSSProperties } from 'react'

export interface DistributionTableHeaderProps {
    setXMin: (min: number) => void
    setXMax: (max: number) => void
    xMin: number
    xMax: number
}

export interface DistributionTableHeaderStyles {
    wrapper: CSSProperties
}