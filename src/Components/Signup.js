import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import './css/General.css'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'email': '',
            'password': '',
        }
    }
    handleSignUpClick(event) {
        var apiBaseUrl = "https://tokas-rsvpapp.herokuapp.com/users";
        var self = this;
        var payload = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password
        }
        if (payload.name == "" || payload.password == "" || payload.email == "") {
            alert("fill out a username, password and an email")
        }
        else {
            axios.post(apiBaseUrl, payload)
                .then(function (response) {
                    if (response.status == 201) {
                        console.log("Register successfull");
                        localStorage.setItem('jwtToken', response.data.token);
                        self.props.stateHandler(true);
                        // self.props.history.push("/home");
                        // //change with router
                        // var uploadScreen = [];
                        // uploadScreen.push(<MainMenu appContext={self.props.appContext} />)
                        // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
                    }
                    else if (response.status == 204) {
                        console.log("Username password do not match");
                        alert("username password do not match")
                    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exist");
                    }
                })
                .catch(function (error) {
                    alert("Something went wrong ")
                    console.log(error);
                });
        }
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangeMail(event) {
        this.setState({ email: event.target.value })
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div className="d-flex flex-row">
                <input style={{ width: '38%', marginRight: '1%' }}
                    className="inputBar"
                    type="NickName"
                    placeholder="NickName"
                    value={this.state.name}
                    onChange={this.handleChangeName.bind(this)}
                />
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
                <Button type="submit" style={{ fontSize: '0.7em', marginRight: '1%' }}
                    onClick={() => {this.handleSignUpClick() }}>SignUp</Button>
                <FontAwesomeIcon style={{marginLeft: '3%', marginTop: '1.5%'}} icon={faUndo} 
                 onClick={() => this.props.modeHandler()}/>
            </div>
        )
    }
}
// const style = {
//     top: 10,
// };

export default Signup;














// if (this.state.mode) {
//     return (
//         <div>
//             <button className="BackBtn" 
//             onClick={() => { this.setState({ mode: false }) }}>Close </button>
//             <h3 className="Header" >Register a new User</h3>
//             <br />
//             <input
//                 className="inputBar"
//                 type="text"
//                 placeholder="Enter your Username"
//                 value={this.state.name}
//                 onChange={this.handleChangeName.bind(this)}
//             />
//             <br /> <br />
//             <input
//                 className="inputBar"
//                 type="email"
//                 value={this.state.email}
//                 placeholder="Enter your Email"
//                 onChange={this.handleChangeMail.bind(this)}
//             />
//             <br /> <br />
//             <input
//                 className="inputBar"
//                 type="password"
//                 value={this.state.password}
//                 placeholder="8+ Digit Password"
//                 onChange={this.handleChangePassword.bind(this)}
//             />
//             <br />
//             <button className="SubmitBtn" onClick={(event) => this.handleClick(event)} >Submit</button>
//             <h3 className="Header bottomleft"> POWERED by </h3>
//             <h3 className="bottomleftContinue"> Electricity</h3>
//         </div>
//     )
// }
// else {
//     return (
//         <div >
//             <button className="Btn"
//                 onClick={() => { this.setState({ mode: true }) }}>Register</button>
//             <h3 className="Header bottomleft"> POWERED by </h3>
//             <h3 className="bottomleftContinue"> Electricity</h3>
//         </div>
//     )