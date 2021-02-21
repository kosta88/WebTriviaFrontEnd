import React, { Component } from 'react';
import axios from 'axios';
import drink from '../img/drink.png'
import beer from '../img/beer.png'

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'redirectMode': ''
        }

    }



    componentDidMount() {

        console.log('mountinggggggg');

        
        let myToken = localStorage.getItem('jwtToken');
        var self = this;
        axios.get("https://tokas-rsvpapp.herokuapp.com/users/me", {
            headers: {
                Authorization: myToken
            }
        }).then(function (response) {
            if (response.status == 200) {
                console.log("Login successfull");

                self.setState({ redirectMode: response.data.hasclub })
            }
            else {
                console.log("You must Login or Register First");
                alert("You must Login or Register First");


                self.props.history.push('/');
            }
        })
            .catch(function (error) {
                alert("You must Login or Register First!!!! ")
                console.log(error);
                self.props.history.push('/');
            });
    }



    handleClickReadMyTasks(event) {
        this.props.history.push("/getTasks");
    }

    handleClickAddTask(event) {
        this.props.history.push("/addTask");
    }

    handleClickLogOut(event) {
        localStorage.setItem('jwtToken', "");
        this.props.history.goBack()
    }

    handleClickOpenBar(event) {
        this.props.history.push("/setupBar");
    }

    handleClickMyBar(event) {
        this.props.history.push("/myBar");
    }

    render() {
        if (this.state.redirectMode == "") {
            return (
                <div>
                    <center>
                    <br /><br /><br /><br />
                    <h1 className="Header" >Loading...</h1>
                    </center>
                </div>
            )
        }
        else if (this.state.redirectMode == "false") {
            return (
                <div>
                    <img className="leftImg" src={beer} />
                    <img className="rightImg" src={drink} />
                    <br />
                    <h1 className="Header" >Welcome!!!</h1>
                    <button className="Btn" onClick={(event) => this.handleClickOpenBar(event)}>Open a Bar</button><br />
                    <button className="Btn" onClick={(event) => this.handleClickAddTask(event)}>Add a Task</button><br />
                    <button className="Btn" onClick={(event) => this.handleClickReadMyTasks(event)}>Read my Tasks</button><br /><br />
                    <button className="BackBtn" onClick={(event) => this.handleClickLogOut(event)}>LogOut</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <img className="leftImg" src={beer} />
                    <img className="rightImg" src={drink} />
                    <br />
                    <h1 className="Header" >Welcome!!!</h1>
                    <button className="Btn" onClick={(event) => this.handleClickMyBar(event)}>My Bar</button><br />
                    <button className="Btn" onClick={(event) => this.handleClickAddTask(event)}>Add a Task</button><br />
                    <button className="Btn" onClick={(event) => this.handleClickReadMyTasks(event)}>Read my Tasks</button><br /><br />
                    <button className="BackBtn" onClick={(event) => this.handleClickLogOut(event)}>LogOut</button>
                </div>
            );
        }
    }

}

const style = {
    width: 150,
    height: 35
};

export default MainMenu;

