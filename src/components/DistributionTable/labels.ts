export const getLabels = () => {
    const labels = []
    for (let i = 3; i <= 6; i += 0.01) {
        labels.push(i.toFixed(2))
    }
    return labels
}