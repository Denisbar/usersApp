/**
 * Created by denis-barabash on 23.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-buttons">
                    <Link to="login">
                        <Button bsStyle="primary" className="btn btn-default" type="button">Login</Button>
                    </Link>
                    <Link to="registration">
                        <Button bsStyle="info" className="btn btn-default" type="button">Registration</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
