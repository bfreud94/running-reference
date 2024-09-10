export const getDistance = (distance: number) => parseFloat(distance.toFixed(2))

export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)


