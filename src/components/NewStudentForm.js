import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { FormCheck, FormGroup } from "react-bootstrap";
import shecancode from './shecancode.jpg'

class NewStudentForm extends Component {
  defaultState = {
    male: false,
    female: false,
    neutral: false,
    online: false,
    inperson: false,
    yes: false,
    no: false,
    yes_tution: false,
    no_tution: false,
    yes_laptop: false,
    no_laptop: false,
    yes_internet: false,
    no_internet: false,
  };
  constructor() {
    super();
    this.state = this.defaultState;
  }
  onRadioChange = (e) => {
    this.setState({ [e.target.id]: true });
  };

  render() {
    return (
      <div className="flex-row">
       { /*<div className="picture">
          <img src={shecancode} alt="" height="100%" width="100%" />
    </div>*/}
        <div className="form">
          <h1>Prospective Student Form</h1>
          {/*
          <Form className="grid-page">
            <Form.Group controlId="StudentFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="StudentLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="StudentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="StudentLocation">
              <Form.Label>Which district do you live in?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>What is your gender?</Form.Label>
              <div key={"gender"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="gender"
                  type="radio"
                  id="male"
                  label={`Male`}
                  checked={this.state.male}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="gender"
                  type="radio"
                  id="female"
                  label={`Female`}
                  checked={this.state.female}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="gender"
                  type="radio"
                  id="neutral"
                  label={`Prefer not to say`}
                  checked={this.state.neutral}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Which class type are you interested in?</Form.Label>
              <div key={"classtype"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="classtype"
                  type="radio"
                  id="online"
                  label={`Online-Class`}
                  checked={this.state.online}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="classtype"
                  type="radio"
                  id="inperson"
                  label={`In Person Class`}
                  checked={this.state.inperson}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="StudentPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="0786998898" />
            </Form.Group>

            <Form.Group>
              <Form.Label>How did you hear about Us?</Form.Label>
              <Form.Control as="select">
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Twitter</option>
                <option>Friend</option>
                <option>Alumni</option>
                <option>Website</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Do you understand you have to pay non-refundable 10000rwf
                registration fee before attending full-time program?
            </Form.Label>
              <div key={"feetype"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="feetype"
                  type="radio"
                  id="yes"
                  label={`Yes`}
                  checked={this.state.yes}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="feetype"
                  type="radio"
                  id="no"
                  label={`No`}
                  checked={this.state.no}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Do you understand you have to pay non-refundable 100000rwf tution
                fee before attending full-time program?
            </Form.Label>
              <div key={"tutiontype"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="tutiontype"
                  type="radio"
                  id="yes_tution"
                  label={`Yes`}
                  checked={this.state.yes_tution}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="tutiontype"
                  type="radio"
                  id="no_tution"
                  label={`No`}
                  checked={this.state.no_tution}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>What is your highest Education Level?</Form.Label>
              <Form.Control as="select">
                <option>Attending High School</option>
                <option>Graduated High School</option>
                <option>Attending University</option>
                <option>Graduated University</option>
                <option>Attending Post-Graduate</option>
                <option>Graduated Post-Graduate</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Do you have/own Laptop?</Form.Label>
              <div key={"laptoptype"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="laptoptype"
                  type="radio"
                  id="yes_laptop"
                  label={`Yes`}
                  checked={this.state.yes_laptop}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="laptoptype"
                  type="radio"
                  id="no_laptop"
                  label={`No`}
                  checked={this.state.no_laptop}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Do you access to internet at home/ public places?
          </Form.Label>
              <div key={"internettype"} className="mb-3">
                <Form.Check
                  inline
                  onChange={this.onRadioChange}
                  name="internettype"
                  type="radio"
                  id="yes_internet"
                  label={`Yes`}
                  checked={this.state.yes_internet}
                />
                <FormCheck
                  inline
                  onChange={this.onRadioChange}
                  name="internettype"
                  type="radio"
                  id="no_internet"
                  label={`No`}
                  checked={this.state.no_internet}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="StudentLocation">
              <Form.Label>
                SheCanCode is partnering with partners to provide partial
                scholarship. Please explain why you should be considered for the
                scholarship??
          </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="StudentLocation">
              <Form.Label>What are your career goals?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Studentinterest">
              <Form.Label>
                Why are you interested in attending SheCanCode Bootcamp?
          </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Studentinterest">
              <Form.Label>
                This program is intense and requires full time and investing extra
                time.Describe your availability?
          </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <button type="submit" class="btn btn-primary">
              Submit
        </button>
          </Form>
  
          */      }
          </div>
      </div>
    );
  }
}

export default NewStudentForm;