/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, Modal } from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            isLogin: false,
            showModal: false,
        }
    }
    //Close modal window
    close() {
        this.setState({ showModal: false });
    }
    //Open modal window
    open() {
        this.setState({ showModal: true });
    }
    //Clear input value
    clearInput(){
        document.getElementById("formHorizontalEmail").value = "";
        document.getElementById("formHorizontalPassword").value = "";
    }

    login(){
        let email = document.getElementById("formHorizontalEmail").value;
        let password = document.getElementById("formHorizontalPassword").value;
        let inStorageEmailValue = localStorage.getItem('email');
        let inStoragePasswordValue = localStorage.getItem('password');
        if(email === inStorageEmailValue && password === inStoragePasswordValue){
            console.log("ok");
            this.setState({isLogin:true});
        }else{
            console.log("break");
            this.setState({isLogin:false});
            this.clearInput();
            this.open();

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
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please enter your login and password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Enter the information you provided during registration</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default LoginPage;