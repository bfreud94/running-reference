import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/distribution')}>Distribution</button>
        </div>
    )
}

export default AppHeader