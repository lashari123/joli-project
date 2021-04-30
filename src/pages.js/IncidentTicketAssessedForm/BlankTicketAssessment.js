import React from 'react'
import { Form, Button, Col, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap'
import {FaSistrix,FaSave,FaSearch} from 'react-icons/fa'
import PersonalDetails from '../../components/PersonalDetails'
// import TicketEncoding from './TicketEncoding'
import Set1 from '../../components/Set1'
// import TicketEncoding from '../../components/TicketEncoding'
import IncidentNo from '../../components/IncidentNo'
import ProofTable from '../../components/ProofTable'
import ProofPagination from '../../components/ProofPagination'
import Header from '../../components/Header'
const BlankTicketAssessment = () => {
    return (
        <div>
               <Header title="Incident Ticket Assessment"/>
               <div className="grid-container ">
                   <div style={{widh:''}}>
         


                   <div  className="top-proof" style={{marginLeft:'1rem',width:'930px'}}> 
<div style={{display:'flex',flexDirection:'column',marginLeft:'3rem'}}>
      
       <label className="proof-lable">Incident No.:</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
      
       </div>
       <button className="proof-btn" >
                    <FaSearch className=""/>
                  <span style={{padding:'2px'}}></span>  Search</button>
        </div>



           <form className="form-container" style={{width:'930px',marginLeft:'1rem'}}>
           <div className="TableContainer">
           <PersonalDetails style={{widh:'400px' }}/> 
        
                  {/* <Set1/> */}
                 </div> 

                 
                 <div style={{margin:'3rem ',marginTop:''}}>
           <ProofTable/>
           <div style={{marginTop:'-1rem'}}>
           <ProofPagination/>
           </div>

           </div>

           <div style={{marginTop:'0rem'}}>
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

           </form>
           </div>
           
           {/*--------Right-Side--------  */}

           <div style={{
            marginTop:'1rem',

backgtound:'red',
width: '370px',
height: '980px',

background: '#ffffff',
borderColor: '#115272',
borderWidth: '1px',
borderStyle: 'solid',
borderRadius: '10px 10px 10px 10px'
        }}>
         
   
 <div style={{marginTop:'1rem',marginLeft:'1rem'}}>  <label className="proof-lable">Order of Payment No.</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
        </div>
        <div style={{paddingLeft:' 1rem',marginRight:'1rem'}}>
        <div style={{border:'1px solid  #ced4da',marginTop:'1.5rem'}}> </div>
        </div>
        <div className=" grid-ass" >
        {/* <div style={{marginTop:'1rem',display:'flex',flexDirection:'row',justifyContent:'center'}}>  */}
         
         <div style={{marginLeft:'1rem'}}>
         <label className="ticket-ass-label">Date of Incident:</label>
         <label className="ticket-ass-label">Date of Assessment:</label>
         <label className="ticket-ass-label">Amount Due:</label>
         <label className="ticket-ass-label">No. of Days (Penalty):</label>
         <label className="ticket-ass-label">Total Penalty Amount:</label>
       

         </div>

<div>
        <input type="date" name="" placeholder="Enter incident no." className="ticket-ass-inpute"/>
        {/* </div> */}

        {/* <div style={{marginTop:'1rem',display:'flex',flexDirection:'row',justifyContent:'center'}}>  */}
       
        <input type="date" name="" placeholder="Enter incident no." className="ticket-ass-inpute"/>
        {/* </div> */}

        {/* <div style={{marginTop:'1rem',display:'flex',flexDirection:'row',justifyContent:'center'}}>  */}
      
        <input type="text" name="" placeholder="0.00" className="ticket-ass-inpute" 
        style={{textAlign:'right'}}/>
        {/* </div> */}

{/* 
        <div style={{marginTop:'1rem',display:'flex',flexDirection:'row',justifyContent:'center'}}>  */}
       
        <input type="text" name="" placeholder=" placeholder" className="ticket-ass-inpute" />
        {/* </div> */}
{/* 
        <div style={{marginTop:'1rem',display:'flex',flexDirection:'row',justifyContent:'center'}}>  */}
   
        <input type="text" name="" placeholder="0.00" className="ticket-ass-inpute" 
        style={{textAlign:'right'}}/>


         {/* </div> */}</div></div>

         <div style={{ display:'flex' ,flexDirection:'row',color:'white',background:'  #105272',marginTop:'2rem'}}>
             
         <label className="ticket-ass-label-white" >Total Penalty Amount Due:</label>
         <input type="text" name="" placeholder="0.00" className="ticket-ass-inpute" 
        style={{textAlign:'right',marginRight:'0.7rem'}}/></div>
           
 {/* <div style={{marginTop:'1.5rem',marginBottom:'1.5rem'}}>  <label className="proof-lable">Official Receipt No.</label>
        <input type="text" name="" placeholder="Enter incident no." className="proof-input"/>
        </div> */}

  <div className=" grid-ass"  style={{marginTop:'3rem'}}>
      <div style={{justifyContent:'center', marginLeft:'1rem'}}>
        <button className=" side-blue">Print</button>

        <button className=" side-blue">Save and New</button>


        <button className=" side-grey"> <span > <i class="fas fa-times-circle"></i>   </span> <span style={{padding:'4px'}}></span> Close </button>
        </div>

<div style={{justifyContent:'center',marginLeft:'1rem',marginLeft:'1rem'}}>
        
        <button className=" side-blue">Adjudicate</button>

        <button className=" side-blue">Save and Close</button>

        <button className=" side-blue"> <FaSave /> <span style={{padding:'4px'}}></span> Save</button>

        </div>
        </div>
        </div>


        </div>
        {/* -------lower area---------- */}
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

export default BlankTicketAssessment
