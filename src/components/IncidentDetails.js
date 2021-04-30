import React from 'react'
import { Form, Button, Col, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'


const IncidentDetails = () => {
    return (
        <div>
           

          <Form>
          <div className="userDetails">
          <Form.Row >  <h1>Incident Details</h1></Form.Row>
          <Form.Row  className="fControl">
          
          <Form.Group >
              <Form.Label>Place of Incident:</Form.Label>
              <Form.Control type="text" placeholder="Enter the place where citizen was apprehended" />
          </Form.Group>

          <div className="InputField" >
          <label htmlFor="" style={{width:'380px'}}>Barangay:</label> 
            <InputGroup className="" >
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


         <Form.Row className="setInputs" >
          
          <Form.Group as={Col}>
              <Form.Label>Date:</Form.Label>
              <div className="calender-in">
              <Form.Control type="Date" />
              {/* <FaCalendarAlt id="svg"/> */}
              </div>
             
          </Form.Group>
          <Form.Group as={Col} style={{marginLeft:'10px'}}>
              <Form.Label>Time:</Form.Label>
             
              <Form.Control type="time"  />
             
          </Form.Group>
             <div>
             <Form.Label style={{marginLeft:'12px'}}>Involved in Accident:</Form.Label>
                <div className="options">
                {/* <Form.Control type="radio"  /> */}
                <input type="radio" name="same "/>
                <span>Yes</span>
                 {/* <Form.Control type="radio"  /> */}
                 <input type="radio" name="same "/>
                <span>No</span>

                </div>
             </div>
          {/* <Form.Group  style={{width:'auto', margin:'0px'}}>
              <Form.Label>Involved in acident:</Form.Label>
                <div className="options">
                <Form.Control type="radio"  />
                <span>Yes</span>
                 <Form.Control type="radio"  />
                <span>No</span>

                </div>
          </Form.Group> */}
          <div className="InputField" >
          <label htmlFor="" >Confiscated Item:</label> 
            <InputGroup className="" >
            <FormControl
            style={{width:'250px'}}
            placeholder="Select Confiscated Item"
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
        <div className="policy">
        <Form.Group as={Col}>
              <Form.Label>Policy No:</Form.Label>
              <Form.Control type="text" placeholder="Enter policy no" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Enter policy no" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Enter policy no" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Enter policy no" />
          </Form.Group>
        </div>
        <div className="series">
        <Form.Group as={Col}>
              <Form.Label>Series:</Form.Label>
              <Form.Control type="text" placeholder="2020-001" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="2020-001" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="2020-001" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="2020-001" />
          </Form.Group>
        </div>

        <div className="section">
        <Form.Group as={Col}>
              <Form.Label >Section:</Form.Label>
              <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
        </div>

        <div className="incident">
        <Form.Group as={Col} style={{width:'100%'}}>
              <Form.Label >Incident:</Form.Label>
              <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Placeholder" />
          </Form.Group>
        </div>
        </Form.Row>
            </div>  
       
        </Form>  
        </div>
    )
}

export default IncidentDetails
