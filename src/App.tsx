import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from './redux/actions/dataActions'
import { RootState } from './redux/types/index'
import AppHeader from './components/AppHeader/AppHeader'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { getRoutes } from './util/routes'
import { getColumns } from './util/columns'

const App = ({
    data,
    getData,
    month,
    year
}) => {
    useEffect(() => {
        if (!data) {
            getData()
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
    data: PropTypes.any,
    getData: PropTypes.any.isRequired,
    sortedKeys: PropTypes.any.isRequired,
    month: PropTypes.any,
    year: PropTypes.any
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    sortedKeys: state.data.sortedKeys,
    month: state.page.month,
    year: state.page.year
})

export default connect(mapStateToProps, { getData })(App)