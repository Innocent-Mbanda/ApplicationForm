import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewStudentForm from './components/NewStudentForm'
import Home from './components/Home'
import NewEmployeeForm from './components/NewEmployee';
import PostGraduateForm from './components/PostGraduateForm';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
    
    <Router>
      <div className="App-header">
        <h1>Fill this form to apply</h1>
      </div>
      <div className="component">
        <Route path='/' exact component={Home}/>
        <Route path='/prospective-student-form' component={NewStudentForm}/>
        <Route path='/prospective-employee-form' component={NewEmployeeForm}/>

        <Route path='/prospective-postGraduate-form' component={PostGraduateForm}/>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
