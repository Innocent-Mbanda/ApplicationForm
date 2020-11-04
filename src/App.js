import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm'
import Home from './components/Home'




function App() {
  return (
    <div className="App">
    
    <Router>
  
      <div>
        <Route path='/' exact component={Home}/>
        <Route path='/prospective-student-form' component={StudentForm}/>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
