import React from 'react'
import { InputLabelProps } from './InputLabelProps.types'

const InputLabel = ({
    inputValue,
    setGraphValue,
    setInputValue,
    title
}: InputLabelProps) => (
    <form onSubmit={(e: any) => {
        e.preventDefault()
        if (!isNaN(parseInt(inputValue))) {
            setGraphValue(parseInt(inputValue))
        }
    }}>
        <label>{title}
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}></input>
        </label>
        <input type='submit' value='Submit'></input>
    </form>
)

export default InputLabel