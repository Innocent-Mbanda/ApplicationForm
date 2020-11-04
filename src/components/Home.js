import React, { Component } from "react";
import StudentForm from "./StudentForm";
import "../App.css";
import TextBox from "./textBox";
import RadioBox from "./radioBox";
import Select from "./select";
import { district, socialmedia, educationlevel } from "../constants/districts";
import ButtonBox from './button'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      openModel: false,
    };
  }
  userclick = () => {
    return this.setState({ openModel: true });
  };
  closeModel = () => {
    return this.setState({ openModel: false });
  };
  render() {
    return (
      <div className="page-container">
        <div>Hello world</div>
        <div onClick={this.userclick} className="apply_link">
          Apply
        </div>
        {this.state.openModel && (
          <div className="model-container">
            <div className="model-content">
              <div className="picture">
              </div>
              <div className="user-form">
                {
                  // part-1
                }

                <div className="form-part1">
                  <div className="form-element">
                    <TextBox Title="First Name" type="text" />
                  </div>
                  <div className="form-element">
                    <TextBox Title="Email" type="email" />
                  </div>
                  <div className="form-element">
                    <h4 className="radion-title ">Gender</h4>
                    <div className="radios">
                      <RadioBox radioname="Male" />
                      <RadioBox radioname="Female" />
                      <RadioBox radioname="Prefer not to say" />
                    </div>
                  </div>
                  {
                    // select-part
                  }
                  <div className="select-items form-element">
                    <Select
                      optionTitle="Where are you from?"
                      options={district}
                    />
                  </div>
                  <div className="radio-class form-element">
                    <h4 className="radion-program">
                      Do you understand you will have to pay 100000rwf program
                      fee before attending full-time?
                    </h4>
                    <div className="radio-box-group">
                      <RadioBox radioname="Yes" />
                      <RadioBox radioname="No" />
                    </div>
                  </div>
                  <div className="select-items form-element">
                    <Select
                      optionTitle="What is your highest education level?"
                      options={educationlevel}
                    />
                  </div>

                  <div className="radio-class form-element">
                    <h4 className="radion-program">Do you own/ have laptop?</h4>
                    <div className="radio-box-group">
                      <RadioBox name="ownlaptop" radioname="Yes" />
                      <RadioBox name="ownlaptop" radioname="No" />
                    </div>
                  </div>
                  <div className="career-goals form-element">
                    <TextBox Title="What are your career goals?" type="text" />
                  </div>
                </div>

                {
                  // part-2
                }
                <div className="form-part2">
                  <div onClick={this.closeModel} className="clossing-tag">
                    &#10006;
                  </div>
                  <div className="form-element">
                    <TextBox Title=" Last Name" type="text" />
                  </div>
                  <div className="form-element">
                    <TextBox Title="Phone Number" type="phone" />
                  </div>
                  <div className="form-element">
                    <h4 className="radion-title">Are you interested in?</h4>
                    <div className="radio-class">
                      <RadioBox radioname="In-Person Class" />
                      <RadioBox radioname="Online Class" />
                    </div>
                  </div>
                  <div className="select-items form-element">
                    <Select
                      optionTitle="How did you hear about us?"
                      options={socialmedia}
                    />
                  </div>
                  <div className="radio-class form-element">
                    <h4 className="radion-registration">
                      Do you understand you will have to pay 10000 rwf
                      registration fee?
                    </h4>
                    <div className="radio-box-group form-element">
                      <RadioBox radioname="Yes" />
                      <RadioBox radioname="No" />
                    </div>
                  </div>

                  <div className="radio-class form-element">
                    <h4 className="radion-program">
                      Do you have access to internet at home/ public places?
                    </h4>
                    <div className="radio-box-group">
                      <RadioBox radioname="Yes" />
                      <RadioBox radioname="No" />
                    </div>
                  </div>
                  <div className="career-goals form-element">
                    <TextBox
                      Title="SheCanCode is working with partners to provide partial scholarship. Please explain how this scholarship would help you to achieve your career gaols"
                      type="text"
                    />
                  </div>
                  <ButtonBox value="Submit"/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
