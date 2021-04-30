import React from 'react'
import { FaCheck } from 'react-icons/fa'

const SavedSuccessfully = () => {
    return (
        <div className="MsgOverlay">
            <div className="SuccessMsg">
            <FaCheck className="CheckMark"/>
            <p>Successfully Saved!</p>
        </div>
        </div>
        
    )
}

export default SavedSuccessfully
