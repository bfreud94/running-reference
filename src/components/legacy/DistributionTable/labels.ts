export const getLabels = (xMin: number, xMax: number) => {
    const labels = []
    for (let i = xMin; i <= xMax; i += 0.01) {
        labels.push(i.toFixed(2))
    }
    return labels
}