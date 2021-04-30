import React from 'react'
import Header from '../../src/components/Header'
// import {useForm} from 'react-hook-form'
import { Form, Button, Col, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap'
import IncidentDetails from '../../src/components/IncidentDetails'
import FormFooter from './FormFooter'


const TicketEncoding = () => {
    return (
        <div>
        <Header title="Incident Ticket Encoding Form

"/>
<Form>                    
       <div className="userDetails">
            <Form.Row >
                    
          <Form.Group as={Col} controlId="" className="heading">
            <label htmlFor="" > Incident No: </label> 
            <Form.Control type="text" placeholder="Enter Incident No" value="" />
            
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
        
        
        <Form.Row>  
        <Form.Group as={Col} controlId="">
          <Form.Label> <span className="staric">*</span> Street Address Line 1:</Form.Label>
          <Form.Control type="text" placeholder="Enter Address Line 1:"  value="" />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label><span className="staric">*</span> Street Address Line 2:</Form.Label>
          <Form.Control type="text" placeholder="Enter Address Line 1:"  value="" />
        </Form.Group>
        </Form.Row>
        
        <Form.Row>  

 <div className="InputField" >
       <label htmlFor="">Province:</label> 
    <InputGroup className="selectInput"  value="" >
    <FormControl
      placeholder="Select province"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      id="input-group-dropdown-2"
      
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
    </div>
  

<div className="InputField" >
       <label htmlFor="">City:</label> 
    <InputGroup className="selectInput"  value="" >
    <FormControl
      placeholder="Select City"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      id="input-group-dropdown-2"
      
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
    </div>

    <div className="InputField" >
       <label htmlFor="">Barangay:</label> 
    <InputGroup className="selectInput"  value="" >
    <FormControl
      placeholder="Select Barangay"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      id="input-group-dropdown-2"
      
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
    </div>


        </Form.Row>
        
        <Form.Row>  
        <Form.Group as={Col} controlId="">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date"  value=""  />
        </Form.Group>

        <div className="InputField" >
       <label htmlFor="">Gender:</label> 
    <InputGroup className="selectInput"  style={{width:'220px', marginBottom:'18px'}}  value="" >
    <FormControl
      placeholder="Gender"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      id="input-group-dropdown-2"
      
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
    </div>



        <Form.Group as={Col} controlId=""  value="" >
          <Form.Label>Contact No:</Form.Label>
          <Form.Control type="text" placeholder="Enter Contact No" />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email:" />
        </Form.Group>
        </Form.Row>      
        
        <Form.Row className="extra">
{/* 
            <Form.Group as={Col}>
                <Form.Label>ID Type:</Form.Label>
                <Form.Control type="text"  />
            </Form.Group> */}
 <div className="InputField" >
       <label htmlFor="">ID Type:</label> 
    <InputGroup className="selectInput"  value="" >
    <FormControl
      placeholder="Select ID Type"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      id="input-group-dropdown-2"
      
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
    </div>
            <Form.Group as={Col}>
                <Form.Label>ID No:</Form.Label>
                <Form.Control type="text" placeholder="Select ID no"  value="" />
            </Form.Group>
        </Form.Row>
            </div>
            
        </Form>
        
        <IncidentDetails/>
        <FormFooter/>
        </div>

    )
}

export default TicketEncoding
