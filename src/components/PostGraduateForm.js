import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class PostGraduateForm extends Component{
  defaulState ={
    male_type: false,
    female_type: false
  };
  constructor(){
    super();
    this.state =this.defaulState;
  }
  onRadioChange=(e)=>{
    this.setState({[e.target.id]:true});
  };
  render(){
      return (
<div>
 <h1>Post-Graduate Form</h1>
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

 <Form.Group>
        <Form.Label>Select your Gender</Form.Label>
        <div key={"gendertype"} className="mb-3">
          <Form.Check
            inline
            onChange={this.onRadioChange}
            name="gendertype"
            type="radio"
            id="femaletype"
            label={`Female`}
            checked={this.state.femaletype}
          />
          <Form.Check
            inline
            onChange={this.onRadioChange}
            name="male_type"
            type="radio"
            id="male"
            label={`No`}
            checked={this.state.male}
          />
        </div>
      </Form.Group>
   <Form.Group controlId="PhoneNumber">
   <Form.Label>Phone Number</Form.Label>
   <Form.Control type="phone" placeholder="7877373737"/>
   </Form.Group>

 
  <Form.Group controlId="job">
  <Form.Label>If you got job after the program, what type of job is this?</Form.Label>
  <Form.Control type="text"/>
  </Form.Group>

  <Form.Group>
  <Form.Label>What were you doing before SheCanCode?</Form.Label>
  <Form.Control as="select">
    <option>Schooling</option>
    <option>Working</option>
    <option>Unemployeed</option>
    <option>Looking for opportunity</option>
  </Form.Control>
</Form.Group>


 </Form>
</div>
      );
  }  
}

export default PostGraduateForm;