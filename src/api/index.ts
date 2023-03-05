export const getRuns = async () => {
    const response = await (await fetch('http://localhost:8000/api/yearlyRuns')).json()
    return response
}

export const getData = async (setData: any) => {
    const response = await getRuns()
    setData(response)
}