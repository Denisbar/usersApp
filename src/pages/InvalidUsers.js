/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class InvalidUsers extends Component {
    render(){
        return(
            <div className="invalidMessage">User info available only through <Link to="login">Login</Link> page</div>
        );
    }
}

export default InvalidUsers;
    
