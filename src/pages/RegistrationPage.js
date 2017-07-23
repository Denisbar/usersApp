/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import { Redirect, Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

class RegistrationPage extends Component {
    constructor(props){
        super(props);
        this.registration = this.registration.bind(this);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            register: false,
        }
    }

    // componentWillMount(){
    //     this.registration();
    // }

    registration(){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        if(email !== '' && password !== '' && confirmPassword !== '' && password == confirmPassword){
            this.setState({email:email});
            this.setState({password:password});
            this.setState({confirmPassword:confirmPassword});
            this.setState({register:true});
        }else{
            this.setState({register:false});
            alert("try agane");
        }

        // let recipe = JSON.stringify(this.state);
        // console.log(recipe);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('confirmPassword', confirmPassword);
    }



    render(){
        if(this.state.register === true){
            return <Redirect push to="/login"/>
        }
        return(
            <div className="App">
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
                            <Button onClick={this.registration}>
                                Registration
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default RegistrationPage;