import React from 'react'
import { Form, Button, Col, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap'
import IncidentDetails from './IncidentDetails'


const UserDetails = () => {
    return (
        <div>
            <form>
                <div className="userDetails">
                <Form.Row >
                    
                    <Form.Group as={Col} controlId="" style={{display:'flex', alignItems:'center'}}>
                      <label htmlFor="" style={{marginRight:'10px'}}>Incident No: </label> 
                      <Form.Control type="text" placeholder="Enter Ref No" value="" style={{width:'300px'}} />
                      
                      </Form.Group>
                                     
                       </Form.Row>
                      <Form.Row>
                          
                  <Form.Group as={Col} controlId="">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"  value="" />
                  
                  </Form.Group>
                  <Form.Group as={Col} controlId="">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"  value="" />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Middle Name"  value="" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="">
                    <Form.Label>Suffix</Form.Label>
                    <Form.Control type="text" placeholder="Suffix"  value="" />
                  </Form.Group>
                  
                  </Form.Row>
                </div>
                                 
           </form>   
        </div>
          
    )
}

export default UserDetails
