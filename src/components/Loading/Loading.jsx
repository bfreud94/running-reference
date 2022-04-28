import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

const Loading = () => (
    <div className='wrapper'>
        <ReactLoading type={'balls'} color={'blue'} height={'5%'} width={'5%'} />
    </div>
)

export default Loading