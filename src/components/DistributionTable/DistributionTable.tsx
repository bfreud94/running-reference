import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RootState } from '../../redux/types'
import { Activity } from '../../api/types'
import { formatDate } from '../../util/formatter'
import { setInitialData, setYearlyData, updateData } from '../../redux/actions/dataActions'
import { getData } from '../../api/index'
import { setPage } from '../../redux/actions/pageActions'
import { getChartData } from './data'
import styles from './DistributionTableHeader.styles'
import { DistributionTableProps } from './DistributionTable.types'
import DistributionTableHeader from './DistributionTableHeader/DistributionTableHeader'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const chartOptions = {}

const getLabel = (activity: Activity) => activity.name + ',\t' + formatDate(activity.start_date)

const DistributionTable = ({
    allActivities,
    data,
    page,
    setInitialData,
    setPage,
    setYearlyData,
    updateData
}: DistributionTableProps) => {
    const [xMin, setXMin] = useState(3)
    const [xMax, setXMax] = useState(7)
    let chartData: any = {}
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setInitialData(data)
            setPage('distribution')
            setYearlyData(data)
        }
        if(!data) {
            fetchData()
        }
    }, [data])
    if (data) {
        const [transformedData, chartDataWithNames] = getChartData(data, xMin, xMax)
        chartData = transformedData
    }
    return Object.keys(chartData).length > 0 && (
        <div style={styles.wrapper}>
            <DistributionTableHeader setXMin={setXMin} setXMax={setXMax} xMin={xMin} xMax={xMax} />
            <div style={styles.canvas}>
                <Bar data={chartData} options={{
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                title: (xDataPoint: any) => {
                                    return structuredClone(allActivities)
                                        .filter((activity: Activity) => activity.distance === parseFloat(xDataPoint[0].label))
                                        .reduce((acc: any, activity: Activity) => [...acc, getLabel(activity)], [])
                                },
                                label: (yDataPoint: any) => {
                                    return yDataPoint.label + ' miles'
                                }
                            }
                        }
                    }
                }}  />
            </div>
        </div>
    )
}

DistributionTable.propTypes = {
    data: PropTypes.any,
    page: PropTypes.string.isRequired,
    setInitialData: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    setYearlyData: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired
}

const mapStateToProps = (state: RootState) => ({
    allActivities: state.data.allActivities,
    data: state.data.homeData,
    sortedKeys: state.data.sortedKeys,
    month: state.page.month,
    year: state.page.year,
    page: state.page.page
})

export default connect(mapStateToProps, { setInitialData, setPage, setYearlyData, updateData })(DistributionTable)