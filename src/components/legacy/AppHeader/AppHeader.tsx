import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPage } from '../../redux/actions/pageActions'
import { updateData } from '../../redux/actions/dataActions'
import { AppHeaderProps } from './AppHeader.types'
import { RootState } from '../../redux/types'
import HomeButton from './HomeButton/HomeButton'
import DistributionButton from './DistributionButton/DistributionButton'
import TitleHeader from './TitleHeader/TitleHeader'
import GitHubTableButton from './GitHubTableButton/GitHubTableButton'

const AppHeader = ({
    page,
    setPage,
    updateData
}: AppHeaderProps) => {
    const navigate = useNavigate()
    return (
        <div>
           <HomeButton navigate={navigate} page={page} setPage={setPage} updateData={updateData} />
           <DistributionButton navigate={navigate} page={page} setPage={setPage} />
           <GitHubTableButton navigate={navigate} page={page} setPage={setPage} />
           {page !== 'distribution' && <TitleHeader />}
        </div>
    )
}

AppHeader.propTypes = {
    page: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired
}

const mapStateToProps = (state: RootState) => ({
    page: state.page.page
})

export default connect(mapStateToProps, { setPage, updateData })(AppHeader)