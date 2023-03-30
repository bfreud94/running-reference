import React, { useEffect } from 'react'
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
import { getData } from '../../redux/actions/dataActions'
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

const DistributionTable = ({
    data,
    getData
}: DistributionTableProps) => {
    let chartData: any = {}
    useEffect(() => {
        if (!data) {
            getData()
        }
    }, [data])
    if (data) {
        chartData = getChartData(data)
    }
    return Object.keys(chartData).length > 0 && (
        <div style={styles.wrapper}>
            <DistributionTableHeader />
            <div style={styles.canvas}>
                <Bar data={chartData} options={{ maintainAspectRatio: false }}  />
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    data: state.data.currentData,
    sortedKeys: state.data.sortedKeys,
    month: state.page.month,
    year: state.page.year
})

export default connect(mapStateToProps, { getData })(DistributionTable)