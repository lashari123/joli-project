
import React from 'react'
import Modal from 'react-modal'
import {FaTrashAlt, FaCheck,FaTimes, FaSave, FaTimesCircle} from 'react-icons/fa'

const AdjudicatedModal = () => {
    return (
        <div>
            <Modal isOpen={true} style={ { overlay:{
                background:'rgba(0,0, 0, .40)'
            }  ,
            content:{
                width:'709px',
                margin:'auto',
                height:'441px'
            }}
            }>
                <h1>Adjudicated Fine</h1>
                <div className="AdjudicatedTable">
                    <div>
                    <label htmlFor="">Old fine</label>
                    <input type="text"/>

                    </div>
                   <div>
                   <label htmlFor="">New fine</label>
                    <input type="text"/></div>                 
                    <div>
                    <label htmlFor="">Proof of Adjudication:</label>
                        <input type="text" placeholder="Placeholder"/>
                        <button style={{marginLeft:'10px'}}>Upload</button>    
                    </div> 
                    <div className="color">
                    <button> <FaSave/> Save</button>
                    <button className="bgGray"><FaTimesCircle/>Close</button>
                </div>                  
                </div>
               
            </Modal>
        </div>
    )
}

export default AdjudicatedModal
