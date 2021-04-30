import React from 'react'
import { Form, Button, Col, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap'
import {FaSistrix} from 'react-icons/fa'
import PersonalDetails from './PersonalDetails'
import TicketEncoding from './TicketEncoding'
import Set1 from '../components/Set1'
const IncidentNo = () => {
    return (
        <div>
            <form action="" class="">
                <div className="userDetails">
                    <Form.Row>
                    <Form.Group as={Col} controlId="" >
                    <label htmlFor="">Incident No: </label> 
                    <div style={{display:'flex'}}>
                    <Form.Control type="text" placeholder="Enter Incident No" value="" style={{ width:'35%'}}/> 
                    <button style={{marginLeft:'15px', padding:'', width:'120px', borderRadius:'5px'}}> 
                     <FaSistrix style={{marginRight:'8px', fontSize:'20px'}} />Search</button>     
                    </div>                
                    </Form.Group>
                    </Form.Row>
                </div>                 
            </form>
           
          
        </div>
    )
}

export default IncidentNo