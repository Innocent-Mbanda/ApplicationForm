import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import StudentForm from './NewStudentForm';
class Home extends Component{
  render(){
      return (
        <div className="page-container">
<div className="nav-menu">
<Button href='/prospective-student-form'>
Prospective Students 
</Button>
<Button href='/prospective-employee-form'>
Prospective Employee
</Button>
<Button href='/prospective-postGraduate-form'>
Post-Graduates
</Button>
</div>
<div className="form-modal">
<StudentForm/>
</div>
</div>
      );
  }  
}

export default Home;