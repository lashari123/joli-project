import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { FaTrashAlt,FaPencilAlt } from "react-icons/fa";
import Pagination from '../../components/Pagination';

import '../../App.css'
import '../../index.scss'
import DeleteModel from '../DeleteModel';
import SETModal from './SETModal.js';
import ProofPagination from '../../components/ProofPagination';

class SET extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        }, 
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        },
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"
        },
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        },
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        },
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        },
        {
          incidentNo: "1234567891234567",
          date:'01/31/2021',
          person:'Name of Person',
          incident:'incident',
          encoder: "Name of Encoder"

        }
      
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
    // <DeleteModel/>
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        
        <tr key={index} className="outerTable">
          <td className="text">{item.incidentNo}</td>
          <td className="text">{item.date}</td>
          {/* <td className="text">{item.incedent}</td> */}
          <td className="text">{item.person}</td>
          <td className="text">{item.incident}</td>
          <td className="text">{item.encoder}
          </td>
          <td>
            <button className="btn " data-toggle="modal" 
            
            data-target="#exampleModal" 
            
            onClick={() => this.replaceModalItem(index)} id="pencil-color" >
               
                <FaPencilAlt />
                </button> {" "}
            <button className="btn "id="trash-color" onClick={() => this.deleteItem(index)}  >
            <FaTrashAlt />
            </button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div className="tableT">
       
  <Table responsive size="sm" className="innerTable">

     <thead className="headings">
      <tr>
        <th >Incident No.</th>
        <th >TDate Encoded</th>
        <th >Person</th>
        <th style={{width:'312px'}} >Incident</th>
        <th >Encoder</th>
        <th >Action</th>
      </tr>
    </thead>
 
        <tbody>         
        {brochure}       
        </tbody>
      
   </Table>
        <SETModal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
         
        />
        <div style={{marginTop:'-1rem'}}>  <Pagination/></div>
        
        {/* <div> <ProofPagination /></div> */}
        
      </div>
    );
  }
}

export default SET;
