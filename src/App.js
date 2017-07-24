import React, { Component } from 'react';
import './App.css';
import InvalidUsers from './pages/InvalidUsers';
import { Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
const loggedIn = false;

class App extends Component {
    render() {
    return (
        <HashRouter>
            <div>
                <Route exact path="/users" render={() =>(
                    loggedIn ? ( <Route  component={UsersPage} />)
                    : (<Route component={InvalidUsers} />)
                )} />
                <Route path="/" component={HomePage}></Route>
                <Route path="/registration" component={RegistrationPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
            </div>
        </HashRouter>
    );
  }
}

export default App;
