import React, { useState } from 'react'
import Modal from 'react-modal'
import {FaTrashAlt, FaCheck,FaTimes} from 'react-icons/fa'
import { Overlay } from 'react-bootstrap'

export const DeleteModel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (

        <div className="DModal"  >
            <Modal isOpen={modalIsOpen} className="innerModel " style={ { overlay:{
                background:'rgba(0,0, 0, .40)'
            }}} >
                <div className="warningMsg">
                <div><FaTrashAlt className="deleteBtn"/></div>
                <p>Are you sure you want to delete this data? <br/>
                You can't undo this action.
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
export default DeleteModel;