import React, { useState } from 'react'
import Modal from 'react-modal'
import {FaTrashAlt, FaCheck,FaTimes, FaQuestion} from 'react-icons/fa'


export const CloseMsgConfirmation = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    return (

        <div className="DModal"  >
            <Modal isOpen={modalIsOpen} className="innerModel " style={ { overlay:{
                background:'rgba(0,0, 0, .40)'
            }}} >
                <div className="warningMsg">
                <div><FaQuestion className="SaveBtn" style={{color:'#FFC107'}} /></div>
                <p>Are you sure you want to close without saving? 
                </p>
                
                </div>
               <div className="confirmation-btns">
               <button id="yesBtn"><FaCheck className="check"  /> Yes</button>
                <button id="noBtn"><FaTimes className="check" />No</button>
               </div>
            </Modal>
        </div>
    )
}
export default CloseMsgConfirmation;