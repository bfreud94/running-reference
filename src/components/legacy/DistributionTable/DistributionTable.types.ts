import { CSSProperties } from 'react'
import { Activity } from '../../api/types'

export interface DistributionTableProps extends DistributionTableConnectedProps {
    data: any
}

interface DistributionTableConnectedProps {
    allActivities: Activity[]
}

export interface DistributionTableStyleProps {
    canvas: CSSProperties
    wrapper: CSSProperties
}