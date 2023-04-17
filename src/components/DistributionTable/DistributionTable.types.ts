import { CSSProperties } from 'react'

export interface DistributionTableProps extends DistributionTableConnectedProps {
    data: any
}

interface DistributionTableConnectedProps {
    allActivities: any
    page: any
    setPage: any
    setInitialData: any
    setYearlyData: any
    updateData: any
}

export interface DistributionTableStyleProps {
    canvas: CSSProperties
    wrapper: CSSProperties
}