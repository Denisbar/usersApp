/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { 
    Form,
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    Button,
    Modal } from 'react-bootstrap';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.registration = this.registration.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            register: false,
            showModal: false,
            whichModal: ''
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

    //Email validation regexp test
    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    registration(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let inStorageEmailValue = localStorage.getItem('email');
        if(email === inStorageEmailValue) {
            this.setState({register:false});
            this.setState({whichModal:'0'});
            this.open();
            return;
        }
        if(email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword) {
            if(this.validateEmail(email)) {
                this.setState({email: email});
                this.setState({password: password});
                this.setState({confirmPassword: confirmPassword});
                this.setState({register: true});
            }else{
                this.setState({register:false});
                this.setState({whichModal:'1'});
                this.open();
            }
        }else{
            this.setState({register:false});
            this.setState({whichModal:'2'});
            this.open();
            return;
        }
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('confirmPassword', confirmPassword);
    }

    render() {
        if(this.state.register === true) {
            return <Redirect push to="/login"/>
        }
        return(
            <div className="App">
                <div className="title">Registration</div>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={2}>
                            <FormControl
                                type="email"
                                placeholder="Email"
                                id="email"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={2}>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                id="password"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Confirm Password
                        </Col>
                        <Col sm={2}>
                            <FormControl
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={1}>
                            <Button type="submit" onClick={this.registration}>
                                Registration
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.whichModal === '0'
                                ? 'This data already in storage, please provide different email and password.'
                                : this.state.whichModal === '1'
                                ? 'Enter valid email'
                                : 'Enter valid data'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RegistrationPage;