import React, { useState } from 'react'
import { DistributionTableHeaderProps } from './DistributionTableHeader.types'
import InputLabel from './InputLabel/InputLabel'
import styles from './DistributionTableHeader.styles'

const DistributionTableHeader = ({
    setXMin,
    setXMax,
    xMin,
    xMax
}: DistributionTableHeaderProps) => {
    const [currXMin, setCurrXMin] = useState(xMin + '')
    const [currXMax, setCurrXMax] = useState(xMax + '')
    return (
        <div style={styles.wrapper}>
            <InputLabel inputValue={currXMin} setGraphValue={setXMin} setInputValue={setCurrXMin} title='Change Min' />
            <InputLabel inputValue={currXMax} setGraphValue={setXMax} setInputValue={setCurrXMax} title='Change Max' />
        </div>
    )
}

export default DistributionTableHeader