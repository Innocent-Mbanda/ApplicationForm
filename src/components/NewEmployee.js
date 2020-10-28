import React, {Component} from 'react';
import Form from "react-bootstrap/Form"


class NewEmployeeForm extends Component{
  render(){
      return (
<div>
 <h1>Prospective Employee Form</h1>

 <Form className="form-style">
 <Form.Group controlId ="StudentFirstName">
 <Form.Label>First Name</Form.Label>
 <Form.Control type="text"></Form.Control>
 </Form.Group>

 <Form.Group controlId="StudentLastName">
 <Form.Label>Last Name</Form.Label>
 <Form.Control type="text"></Form.Control>
 </Form.Group>

 <Form.Group controlId ="studentEmail">
 <Form.Label>Email</Form.Label>
 <Form.Control type="text"
 placeholder="firstname@gmail.com"/> 
 </Form.Group>

 <Form.Group controlId="job">
  <Form.Label>Reason why you should be considered for this position??</Form.Label>
  <Form.Control as="textarea" rows={5}/>
  </Form.Group>

  <Form.Group controlId="resume">
  <Form.Label>Upload your resume here</Form.Label>
  <Form.File/>
  </Form.Group>
 </Form>
</div>
      );
  }  
}

export default NewEmployeeForm ;