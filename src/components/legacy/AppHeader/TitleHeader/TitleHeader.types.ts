import { CSSProperties } from 'react'

export interface TitleHeaderProps extends TitleHeaderConnectedProps {}

interface TitleHeaderConnectedProps {
    month: string
    year: string
}

export interface TitleHeaderStyles {
    titleHeader: CSSProperties
    titleHeaderWrapper: CSSProperties
}