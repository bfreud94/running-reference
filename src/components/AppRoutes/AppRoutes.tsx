import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import DistributionTable from '../../components/DistributionTable/DistributionTable'
import GitHubTable from '../../components/GitHubTable/GitHubTable'
import Table from '../../components/Table/Table'
import { AppRoutesProps } from './AppRoutes.types'

const AppRoutes = ({
    columns,
    data,
    routes
}: AppRoutesProps) => (
    <Routes>
        {routes.map((path: string) => (
            <Route
                key={path}
                element={Object.keys(data).length ? (
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
        <Route
            element={<GitHubTable />}
            path={`/githubTable`}
        />
    </Routes>
)

AppRoutes.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object,
    routes: PropTypes.array.isRequired
}

export default AppRoutes