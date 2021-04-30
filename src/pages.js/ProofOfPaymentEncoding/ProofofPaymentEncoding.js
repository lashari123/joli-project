import React, { Component } from 'react'
import Header from '../../components/Header';
import Table from 'react-bootstrap/Table'
import Pagination from '../../components/Pagination';
import {FaSearch, FaCalendarAlt,FaArrowDown ,  FaTimes,FaSave} from "react-icons/fa";
import SET from '../SummeryOfIncodedTickets/SET';
import List from '../../components/list';
import ProofTable from '../../components/ProofTable';
import ProofPagination from '../../components/ProofPagination';
import PersonalDetails from '../../components/PersonalDetails';
 class  ProofofPaymentEncoding extends Component {




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


      render(){
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
        <div className="">
         
                         <Header title="Incident Ticket Proof of Payment Encoding"/>
                         <div className="grid-container ">
                             <div>

 <div  className="top-proof"> 
<div style={{display:'flex',flexDirection:'column',marginLeft:'3rem'}}>
      
       <label className="proof-lable">Incident No.:</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
      
       </div>
       <button className="proof-btn" >
                    <FaSearch className=""/>
                  <span style={{padding:'2px'}}></span>  Search</button>
        </div>
        <div className="proof-inner">
        <div className="TableContainer" style={{  marginLeft: "2rem"}}>
           <PersonalDetails/> 
        
                  {/* <Set1/> */}
                 </div> 
      
          {/* <PersonalDetails/> */}
           {/* <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}> 
           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
<div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Fine for Payment:</p>
           <p className=" proof-lable" style={{marginLeft:'16px'}}>    Php 1,000.00</p>
           </div>

           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Name of Person:</p>
           <p style={{marginLeft:'22px'}}>    Dela Cruz, Juan Jr. Santos</p>
           </div>

           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Contact No.:</p>
           <p style={{marginLeft:'3.3rem'}}>    (1234)567-89-01</p>
           </div>


           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Email Address:</p>
           <p style={{marginLeft:'1.8rem'}}>    sample@gmail.com</p>
           </div>

           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Address:</p>
           <p style={{marginLeft:'4.8rem',maxWidth:'25rem'}}>    123 Lot 8 Blk 1 Road 321, Sample Subdivision, Barangay Q, Quezon City, Metro Manila</p>
           </div>
        
           </div>

           <div style={{display:'flex', flexDirection:'column',marginRight:'5rem'}}>
           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Gender:</p>
           <p style={{marginLeft:'4rem'}}>    Male</p>
           </div>
           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">Birthdate:</p>
           <p style={{marginLeft:'3rem'}}>    01/02/1995</p>
           </div>
           <div style={{display:'flex',flexDirection:'row'}}>
           <p className=" proof-lable">ID Type/No.:</p>
           <p style={{marginLeft:'2rem'}}>    Voter's ID - 123456789</p>
           </div>
      
        
           </div>
           

           
           </div> */}
           {/* <div className="Proof-tbl-label"> Incident Details</div> */}
           
           <div style={{marginLeft:'3rem ',marginRight:'3rem'}}>
           <ProofTable/>
           <div style={{marginTop:'-1rem'}}>
           <ProofPagination/>
           </div>

           </div>
           <div style={{marginTop:'2rem'}}>
           <div style={{display:'flex', flexDirection:'row',justifyContent:''}}> 
           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lable">Place of Incident:</p>
           <p className=" proof-lable">Confiscated Item:</p>
         
           </div>
           <div style={{display:'flex', flexDirection:'column',marginLeft:'6rem'}}>
           <p className=" ">Quezon City</p>
           <p className=" ">Driver's License</p>
         
           </div>

           <div style={{display:'flex', flexDirection:'column',marginLeft:'13rem'}}>
           <p className=" proof-lable">Barangay:</p>
           </div>

           <div style={{display:'flex', flexDirection:'column',marginLeft:'5rem'}}>
           <p className=" ">Barangay A</p>
           </div>
           

           
           </div>

           </div>
         
      
           

        </div>

    
</div>

{/*  ------------right side layout------------  */}

        <div style={{
            marginTop:'1rem',
marginRight:'2rem',
width: '260px',
height: 'auto',
padding: '8px 8px 8px 8px',
background: '#ffffff',
borderColor: '#115272',
borderWidth: '1px',
borderStyle: 'solid',
borderRadius: '10px 10px 10px 10px'
        }}>
          <div style={{display:'inline-block', justifyContent:'center',textAlign:'center'}} >
   
 <div style={{marginTop:'1rem'}}>  <label className="proof-lable">Order of Payment No.</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
        </div>

           
 <div style={{marginTop:'1.5rem',marginBottom:'1.5rem'}}>  <label className="proof-lable">Official Receipt No.</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
        </div>

        <button className=" side-blue">Save and New</button>

        <button className=" side-blue">Save and Close</button>

        <button className=" side-blue"> <FaSave /> <span style={{padding:'4px'}}></span> Save</button>

        <button className=" side-grey"> <span > <i class="fas fa-times-circle"></i>   </span> <span style={{padding:'4px'}}></span> Close </button>

        
        </div>
        </div>
      
        </div>

        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around',marginTop:'2rem',marginBottom:'1rem'}}> 
           <div style={{display:'flex', flexDirection:'column',}}>
           <p className=" proof-lower">Apprehending Member:
</p>
           <p className="proof-lower2 ">
Name of Member</p>
         
           </div>
           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lower">Deputation No.:

</p>
           <p className=" proof-lower2">01-A-20</p>
         
           </div>

           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lower">Encoded by:

</p>
           <p className=" proof-lower2">Name of Encoder</p>
         
           </div>

           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lower">Encoded on:

</p>
           <p className=" proof-lower2">03/16/2021 10:30AM</p>
         
           </div>

           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lower">Assessed by:

</p>
           <p className=" proof-lower2">Name of Assessor</p>
         
           </div>
           <div style={{display:'flex', flexDirection:'column',marginLeft:'3rem'}}>
           <p className=" proof-lower">Assessed on:

</p>
           <p className=" proof-lower2">03/16/2021 10:30AM</p>
         
           </div>

           

           
           </div>

        </div>
    )
}
}


export default ProofofPaymentEncoding;
