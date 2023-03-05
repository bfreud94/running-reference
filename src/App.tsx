import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Table from './components/Table/Table'
import { getData } from './redux/actions/dataActions'
import { tableModeMap } from './state'

const getColumns = (month: any, year: any) => {
    if (month && year) {
        return ['Date', 'Name', 'Distance']
    }
    const columns = ['Total Activities', 'Total Distance']
    const firstColumn = year ? tableModeMap.months.firstColumnn : tableModeMap.years.firstColumn
    columns.unshift(firstColumn)
    return columns
}

const App = ({
    data: {
        currentData
    },
    getData,
    month,
    year
}) => {
    useEffect(() => {
        if (!currentData) {
            getData()
        }
    }, [currentData])
    const columns = getColumns(month, year)
    return (
        <>
            <Routes>
                <Route
                    element={<Table columns={columns} />}
                    path='/'
                />
                <Route
                    element={currentData ? (
                        <Table columns={columns} />
                    ) : (
                        <Navigate to='/' />
                    )}
                    path={`/:${year}`}
                />
                <Route
                    element={currentData ? (
                        <Table columns={columns} />
                    ) : (
                        <Navigate to='/' />
                    )}
                    path={`/:${year}/:${month}`}
                />
            </Routes>
        </>
    )
}

App.propTypes = {
    data: PropTypes.any.isRequired,
    getData: PropTypes.any.isRequired,
    month: PropTypes.any,
    year: PropTypes.any
}

const mapStateToProps = (state: any) => ({
    data: state.data,
    month: state.page.month,
    year: state.page.year
})

export default connect(mapStateToProps, { getData })(App)