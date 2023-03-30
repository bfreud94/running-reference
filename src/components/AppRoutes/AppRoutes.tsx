import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import DistributionTable from '../../components/DistributionTable/DistributionTable'
import Table from '../../components/Table/Table'

interface AppRoutesProps {
    columns: any
    data: any
    routes: any
}

const AppRoutes = ({
    columns,
    data,
    routes
}: AppRoutesProps) => (
    <Routes>
        {routes.map((path: string) => (
            <Route
                key={path}
                element={data ? (
                    <Table columns={columns} />
                ) : (
                    <Navigate to='/' />
                )}
                path={path}
            />
        ))}
        <Route
            element={<DistributionTable />}
            path={`/distribution`}
        />
    </Routes>
)

AppRoutes.propTypes = {
    columns: PropTypes.any.isRequired,
    data: PropTypes.any,
    routes: PropTypes.any.isRequired
}

export default AppRoutes