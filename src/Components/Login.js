import React, { Component } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
        }
    }
    handleChangeMail(event) {
        this.setState({ email: event.target.value })    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value })    }

    handleLoginClick(event) {
        var apiBaseUrl = "https://tokas-rsvpapp.herokuapp.com/users/";
        var self = this;
        var payload = {
            "email": this.state.email,
            "password": this.state.password    }
        if (payload.email == "" || payload.password == "") {
            alert("fill out a username and password")    }
        else {
            axios.post(apiBaseUrl + 'login', payload)
                .then(function (response) {
                    //>login success
                    if (response.status == 200) {
                        console.log("Login successfull");
                        localStorage.setItem('jwtToken', response.data.token); 
                        self.props.stateHandler(true);
                      }
                    else if (response.status == 204) {
                        console.log("Username password do not match");
                        alert("username password do not match")    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exist");    }
                })
                .catch(function (error) {
                    alert("bad Username or password ")
                    console.log(error);
                });
        }
    }
    
    render() {
            return (
                <div className="d-flex flex-row">
                    <input style={{ width: '38%', marginRight: '1%' }}
                        className="inputBar"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChangeMail.bind(this)}
                    />
                    <input style={{ width: '38%', marginRight: '1%' }}
                        className="inputBar"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleChangePassword.bind(this)}
                    />
                    <Button  style={{ fontSize: '0.7em', marginRight: '1%' }}
                        onClick={(event) => this.handleLoginClick(event)} >Login</Button>

                    <Button style={{ fontSize: '0.7em', marginRight: '1%' }}
                        onClick={() => this.props.modeHandler()}>SignUp</Button>
                </div>
            )
    }
}

export default Login;
