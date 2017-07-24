/**
 * Created by denis-barabash on 21.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

class UsersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        return $.getJSON(url).then((response) => {
            this.setState({list: response});
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
                            <tr key={item.id}>
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