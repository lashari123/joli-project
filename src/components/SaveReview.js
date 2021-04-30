import React,{useState} from 'react'
import Modal from 'react-modal'
import {FaTrashAlt, FaCheck,FaTimes,FaSave} from 'react-icons/fa'
import Set1 from '../components/Set1'
import Header from '../components/Header'
import PersonalDetails from './PersonalDetails'
const SaveReview = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const TableData = [
        {
            PolicyNo: '02-03',
            Series: '2020-001',
            Section: 'Placeholder',
            Incident:' Disobedience to traffic signal'
        },
        {
            PolicyNo: '03-03',
            Series: '2020-001',
            Section: 'Placeholder',
            Incident:' Disobedience to traffic signal'
        },
        {
            PolicyNo: '04-03',
            Series: '2020-001',
            Section: 'Placeholder',
            Incident:' Disobedience to traffic signal'
        }
    ] 
    return (
        <div>
            <Modal isOpen={modalIsOpen}  style={
                 { overlay:{
                background:'rgba(0,0, 0, .40)', 
            },
             content:{
                width:'1200px',
                margin:'auto',
                padding:'0',
                border:'none'
            }
            }
                } >
                <h1 className="headings" style={{textAlign:'left', color:'white', padding:'15px 20px'}}>Review the ticket</h1>
               <div className="TableContainer">
                <PersonalDetails/>
                
                {/* -------------Third Table---------------- */}
                {/* <table className="ThirdTable">
                    <tr>
                        <th>Policy No.</th>
                        <th>Series</th>
                        <th>Section</th>
                        <th>Incident</th>
                      </tr>
                      
                </table> */}
                <Set1/>
                <div className="SaveCloseBtns">
                    <button id="SaveBtn">  <FaSave /> <span style={{padding:'4px'}}></span> Save</button>
                    <button id="CloseBtn"><i class="fas fa-times-circle"></i> <span style={{padding:'4px'}}></span>Close</button>
                </div>
               </div>
            </Modal>
        </div>
    )
}

export default SaveReview
