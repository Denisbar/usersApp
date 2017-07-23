import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" component={App}></Route>
            <Route path="/registration" component={RegistrationPage}></Route>
            <Route path="/users" component={UsersPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
        </div>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
