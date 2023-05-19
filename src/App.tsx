import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setInitialData, setYearlyData } from './redux/actions/dataActions'
import { setPage } from './redux/actions/pageActions'
import { getData } from './api/index'
import { RootState } from './redux/types/index'
import AppHeader from './components/AppHeader/AppHeader'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { getRoutes } from './util/routes'
import { getColumns } from './util/columns'

const getPathName = (pathname: string) => pathname === '/distribution' || '/githubTable' ? pathname.substring(1) : 'home'

const App = ({
    data,
    month,
    setInitialData,
    setPage,
    setYearlyData,
    year
}) => {
    const location = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setInitialData(data)
            setYearlyData(data)
            setPage(getPathName(location.pathname))
        }
        if(!data) {
            fetchData()
        }
    }, [data])
    return (
        <>
            <AppHeader />
            <AppRoutes
                columns={getColumns(month, year)}
                data={data || {}}
                routes={getRoutes(month, year)}
            />
        </>
    )
}

App.propTypes = {
    data: PropTypes.object,
    month: PropTypes.string,
    sortedKeys: PropTypes.array.isRequired,
    setInitialData: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    setYearlyData: PropTypes.func.isRequired,
    year: PropTypes.string
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    sortedKeys: state.data.sortedKeys,
    month: state.page.month,
    year: state.page.year
})

export default connect(mapStateToProps, { setInitialData, setPage, setYearlyData })(App)