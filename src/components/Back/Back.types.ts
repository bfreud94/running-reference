export interface BackPropTypes extends BackConnectedPropTypes {
    month: any
    year: any
}

interface BackConnectedPropTypes {
    page: {
        page: string
        year: string
    }
    setMonth: (month: string | null) => void
    setPage: (page: string) => void
    setYear: (year: string | null) => void
    updateData: any
}