export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)

export const formatPace = (average_speed: number) => {
    const pace = 1609.34 / (60 * average_speed)
    let minutes = Math.floor(pace)
    let seconds = Math.round((pace - minutes) * 60)
    if (seconds === 60) {
        minutes += 1
        seconds = 0
    }
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export const formatTime = (time: string) => {
    if (time.substring(0, 2) === '00') {
        time = time.substring(3)
    } else if (time.substring(0, 1) === '0') {
        time = time.substring(1)
    }
    return time
}