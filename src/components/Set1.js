import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Pagination from '../components/Pagination';
import Modal from 'react-modal'
import {FaTrashAlt, FaCheck,FaTimes, FaPencilAlt} from 'react-icons/fa'

import SETModal from '../../src/pages.js/SummeryOfIncodedTickets/SETModal';
import ProofPagination from './ProofPagination';

class SET extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          PolicyNo: "02-03",
          Series:'2020-001',
          Section:'Placeholder',
          incident:'Disobedience to traffic signal',
        }, 
        {
            PolicyNo: "45",
            Series:'2020-001',
            Section:'Placeholder',
            incident:'Obstructing road by motor vehicle', 
          }, 
          {
            PolicyNo: "1234567890",
            Series:'2020-001',
            Section:'Placeholder',
            incident:'Driving without a license', 
          }, 
          {
            PolicyNo: "1234567890",
            Series:'2020-001',
            Section:'Placeholder',
            incident:'Driving without a face mask', 
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
          <td className="text">{item.PolicyNo}</td>
          <td className="text">{item.Series}</td>
          <td className="text">{item.Section}</td>
          <td className="text">{item.incident}</td>       
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div >
       <div className="Table-bg">
       <Table  size="sm" className="ThirdTable">

        <thead className="headings">
        <tr>
        <th >Policy No.</th>
        <th >Series</th>
        <th >Section</th>
        <th styl={{width:'200px'}}>Incident</th>
        </tr>
        </thead>

        <tbody>         
        {brochure}       
        </tbody>

        </Table>

        <ProofPagination button={    <button style={{width:'131px', padding:'6px 10px', fontSize:'16px', marginLeft:'15px'}}>Add</button>}/>
 {/* <Pagination/> */}
       
       </div>
<SETModal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}

        />
         {/* <Pagination/> */}
      
        
      </div>
    );
  }
}

export default SET;
