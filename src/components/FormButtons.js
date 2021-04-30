import React from 'react'
import { FaSave, FaTimesCircle } from 'react-icons/fa'

const FormButtons = () => {
    return (
        <div className="FormButtons">
        <button >Save and Review</button>
        <button >Save and New</button>
        <button >Save and Close</button>
        <button > <FaSave/>Save</button>
        <button className="bgGray" ><FaTimesCircle/> Close</button>
        </div>
    )
}

export default FormButtons
