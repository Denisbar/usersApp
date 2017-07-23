import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';

class App extends Component {
  login(){
          return <RegistrationPage/>
  }
    render() {
    return (
      <div className="App">
          <div className="App-buttons">
              <Button className="btn btn-default" type="button">
                  <Link to="login">Log in</Link>
              </Button>
              <Button className="btn btn-default" type="button" onClick={this.login}>
                  <Link to="registration">Registration</Link>
              </Button>
          </div>
      </div>
    );
  }
}

export default App;
