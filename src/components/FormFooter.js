import React from 'react'
import FormButtons from './FormButtons'

const FormFooter = () => {
   
    return (
        <div >
        <div className="form-footer">
        <div className="extra-information">
        <div className="positionClass">
        <h2>Apprehending Member:
            <br/>
            <span>Name of Member</span>
        </h2>
        <h2>Deputation No.:
            <br/>
            <span>01-A-20</span>
        </h2>
        </div>

        <div className="positionClass">
        <h2>Encoded by:
            <br/>
            <span>Name of Encoder</span>
        </h2>

        <h2>Encoded on:
            <br/>
            <span>03/16/2021 10:30AM</span>
        </h2>

        </div>
        </div>
        </div>
        <FormButtons />
        </div>
    )
}

export default FormFooter
