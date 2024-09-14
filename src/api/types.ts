export type Activity = {
    average_cadence?: number
    average_heartrate: number
    average_speed?: number
    distance: number
    id: string
    moving_time?: number
    name: string
    start_date: string
    suffer_score?: string
}
export type Totals = {
    activities: number
    distance: number
}

export interface ActivitiesApiDocument {
    2010: YearActivities
    2011: YearActivities
    2012: YearActivities
    2013: YearActivities
    2014: YearActivities
    2015: YearActivities
    2016: YearActivities
    2017: YearActivities
    2018: YearActivities
    2019: YearActivities
    2020: YearActivities
    2021: YearActivities
    2022: YearActivities
    2023: YearActivities
    2024: YearActivities
    totals: Totals
}

export interface YearActivities {
    activities: Array<Activity>
    totals: Totals
}