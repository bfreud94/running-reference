import React from 'react'
import { buttonClick } from './functions'
import { GitHubTableButtonProps } from './GitHubTableButton.types'

const GitHubTableButton = ({
    navigate,
    page,
    setPage
}: GitHubTableButtonProps) => (
    <button onClick={() => buttonClick(navigate, page, setPage)}>GitHub Table</button>
)

export default GitHubTableButton