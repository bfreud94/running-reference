import { useEffect, useState } from 'react'
import Table from './components/Table/Table'

import { getRuns } from './api'

const styles = {
    wrapper: {
        padding: '50px'
    }
}

const App = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await getRuns()
            setData(response)
        }
        getData()
    }, [])
    console.log(data)
    return (
        <div style={styles.wrapper}>
            <Table data={data || []} />
        </div>
    )
}

export default App
