import React from 'react'
import { FaCheck } from 'react-icons/fa'

const DeleteSuccessfully = () => {
    return (
        
            <div className="SuccessMsg">
            <FaCheck className="CheckMark"/>
            <p>Data Deleted!</p>
        </div>
    )
}

export default DeleteSuccessfully
