export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)

export const formatTime = (time: string) => {
    if (time.substring(0, 2) === '00') {
        time = time.substring(3)
    } else if (time.substring(0, 1) === '0') {
        time = time.substring(1)
    }
    return time
}