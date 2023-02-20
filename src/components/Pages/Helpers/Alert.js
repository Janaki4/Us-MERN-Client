import React from 'react'
import { useSelector } from 'react-redux'

const Alert = ({ className }) => {
    const {alertType , alertText } = useSelector(state => {
        return state.global
    })
    let alertMessage
    if (alertType === "danger" || "error") {
        alertMessage = "bg-red-300"
    }
    else {
        alertMessage = "bg-green-300"
    }

    return (
        <div className={`${alertMessage} w-full items-center justify-center 
        flex flex-row rounded p-1 my-1 font-medium text-lg ${className}`}>{alertText}</div>
    )
}

export default Alert
