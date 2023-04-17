import { SetPageAction, UpdateDataAction } from '../../redux/types'

export interface AppHeaderProps extends AppHeaderConnectedProps {}

interface AppHeaderConnectedProps {
    page: string
    setPage: SetPageAction
    updateData: UpdateDataAction
}