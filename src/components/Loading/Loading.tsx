import React, { FC } from 'react'
import ReactLoading from 'react-loading'
import styles from './Loading.styles'

const Loading: FC = () => (
    <div style={styles.wrapper}>
        <ReactLoading type={'balls'} color={'blue'} height={'5%'} width={'5%'} />
    </div>
)

export default Loading