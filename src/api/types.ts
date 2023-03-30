export type Activity = {
    distance: number
    name: string
    start_date: string
    id: string
}

export type Totals = {
    activities: number
    distance: string
}

export type Month = {
    activities: Activity[]
    totals: Totals
}