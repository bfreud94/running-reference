export const getRoutes = (month: string, year: string) => ([
    '/',
    `/:${year}`,
    `/:${year}/:${month}`
])