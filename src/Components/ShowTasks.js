import React, { Component } from 'react';
import axios from 'axios';

class ShowTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        //     let myToken = localStorage.getItem('jwtToken');
        //     var self = this;
        //     axios.get("https://tokas-rsvpapp.herokuapp.com/users/me", {
        //         headers: {
        //             Authorization: myToken
        //         }
        //     }).then(function (response) {
        //         if (response.status == 200) {
        //             console.log("Login successfull");
        //         }
        //         else {
        //             console.log("You must Login or Register First");
        //             alert("You must Login or Register First");
        //             self.props.history.goBack();
        //         }
        //     })
        //         .catch(function (error) {
        //             alert("You must Login or Register First!!!! ")
        //             console.log(error);
        //             self.props.history.goBack();
        //         });

        this.getTasks();

    }

    getTasks() {
        let myToken = localStorage.getItem('jwtToken');
        var self = this;
        axios.get("https://tokas-rsvpapp.herokuapp.com/tasks", {
            headers: {
                Authorization: myToken
            }
        }).then(function (response) {
            if (response.status == 200) {
                console.log("success", response.data);
                self.setState({ data: response.data })
            }
            else {
                alert("error getting tasks");
            }
        })
    }


    handleClickBack(event) {
        this.props.history.goBack()
    }

    handleDeleteClick(event) {
        let myToken = localStorage.getItem('jwtToken');
        var self = this;
        var address = event
        axios.delete("https://tokas-rsvpapp.herokuapp.com/tasks/" + address, {
            headers: {
                Authorization: myToken
            }
        }).then(function (response) {
            if (response.status == 200) {
                console.log("success", response.data);
                window.location.reload(true);

            }
            else {
                alert("error deleting task");
            }
        })
    }


    render() {
        return (
            <div>
                <br />
                <h2 className="Header">Your Tasks</h2>
                <hr />
                {this.state.data.map((data) => {
                    return (
                        <div key={data._id}>
                            <p className='paragraph'>Your Task : {data.description}</p>
                            <p className='paragraph'>completed : {data.completed ? "true" : "false"}</p>
                            <p className='paragraph'>was created on : {data.createdAt}</p>
                            <p className='delete' onClick={(event) => this.handleDeleteClick(data._id)}>delete</p>
                            <hr />
                        </div>
                    );
                })}
                <br />
                <button className="BackBtn" onClick={(event) => this.handleClickBack(event)}>Back</button>
            </div>
        );
    }
}

export default ShowTasks;

