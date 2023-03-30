export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)

export const meterToMile = (meter: number) => (meter / 1609.34).toFixed(2)