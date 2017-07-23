/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { Row, Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            isLogin: false,
        }
    }

    login(){
        let email = document.getElementById("formHorizontalEmail").value;
        let password = document.getElementById("formHorizontalPassword").value;
        let inStorageEmailValue = localStorage.getItem('email');
        let inStoragePasswordValue = localStorage.getItem('password');
        if(email == inStorageEmailValue && password == inStoragePasswordValue){
            console.log("ok");
            this.setState({isLogin:true});
        }else{
            console.log("break");
            this.setState({isLogin:false});
        }
    }
    render(){
        if(this.state.isLogin === true){
            return <Redirect push to="/users"/>
        }
        return(
            <div>
                <div className="login">Login</div>
        <Row className="show-grid">
            <Col xs={4} md={10}>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={1}>
                            <Button onClick={this.login}>
                                Login
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
            </div>
        );
    }
}

export default LoginPage;