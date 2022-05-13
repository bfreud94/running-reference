import { meterToMile } from './util.js'

export const getRuns = async () => {
    const response = await (await fetch('http://localhost:8000/api/yearlyData')).json()
    return response
    /*
    return response.runs.filter(run => meterToMile(run.distance) > 7).map(({
        start_date,
        name,
        distance
    }) => ({
        date: new Date(start_date),
        name,
        distance: (distance / 1609.34).toFixed(2),
    }))
    */
}