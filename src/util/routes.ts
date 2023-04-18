export const getRoutes = (month: string, year: string): string[] => ([
    '/',
    `/:${year}`,
    `/:${year}/:${month}`
])