import React, { Component } from 'react';
import Modal from './modal.js';
import Table from 'react-bootstrap/Table'
import '../App.css'

class ProofTable extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "02-03",
          msg: "45",
          incedent:'1234567890',
          ticket:'1234567890',
          fine:'99,999.99'
        }, {
          title: "2020-001",
          msg: "2020-001",
          incedent:'2020-001',
          ticket:'2020-001',
          fine:'99,999.99'
        }, {
          title: "Placeholder",
          msg: "RinPlaceholderg",
          incedent:'Placeholder',
          ticket:'Placeholder',
          fine:'99,999.99',
        },
        {
            title: "Diamond",
            msg: "Ring",
            incedent:'lashari',
            ticket:'danyal',
            fine:'99,999.99'
          },
      
       
     
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
  }

  render() {    
    const {title,msg,incedent,ticket,fine}=this.state;
    const brochure = this.state.brochure.map((item, index) => {
      return (
        
        <tr key={index}>
          <td className="text" style={{  width: '100px',
    height: '38px'}}>{item.title}</td>
          <td className="text" style={{  width: '70px',
    height: '38px'}}>{item.msg}</td>
          <td className="text" style={{  width: '70px',
    height: '38px'}}>{item.incedent}</td>
          <td className="text" style={{  width: '220px',
    height: '38px'}}>{item.ticket}</td>
          <td className="text" style={{  width: '100px',
    height: '38px'}}>{item.fine}</td>
        
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
       
        <Table  size="sm">

        <thead className="headings">
    <tr>
    <th style={{textAlign:'center'}}>Policy No.</th>
    <th style={{textAlign:'center'}}>Series</th>
    <th style={{textAlign:'center'}}>Section</th>
    <th style={{textAlign:'center'}}>Incident</th>
    <th style={{textAlign:'center'}}>Fine</th>
 
      
    
    </tr>
  </thead>
 
  <tbody>
    
  {brochure}
   
  </tbody>
</Table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default ProofTable;
