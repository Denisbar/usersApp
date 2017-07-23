/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import { Form, FormGroup, Table } from 'react-bootstrap';

class UsersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            // name: [],
            // email: [],
            // phone: [],
            list: [],
            namesList: [],
        }
    }

    componentWillMount(){
        this.getUsers();
    }

    getUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        return $.getJSON(url).then((response) => {
            console.log(response);
            this.setState({list: response});
            console.log(this.state.list[0].name);
            for (let i = 0; i <= this.state.list.length; i++){
                console.log(this.state.list[i].name);
            }
        });
    }

    render(){
        return(
            <div className="App">
                <div className="pageTitle">Users info</div>
                <Table responsive>
                    <thead>
                        <tr className="thead">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item,i) => (
                            <tr>
                                <td>{this.state.list[i].id}</td>
                                <td>{this.state.list[i].name}</td>
                                <td>{this.state.list[i].email}</td>
                                <td>{this.state.list[i].phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            
        );
    }
}

export default UsersPage;