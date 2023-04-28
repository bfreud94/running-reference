export type Activity = {
    average_cadence?: number
    average_heartrate?: number
    average_speed?: number
    distance?: number
    id?: string
    moving_time?: number
    name?: string
    start_date?: string
}

export type Totals = {
    activities: number
    distance: string
}

export type Month = {
    activities: Activity[]
    totals: Totals
}