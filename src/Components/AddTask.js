// import React, { Component } from 'react';
// import axios from 'axios';

// class AddTask extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             description: '',
//             mode: false,
//         }
//     }

//     componentDidMount() {
//         let myToken = localStorage.getItem('jwtToken');
//         var self = this;
//         axios.get("https://tokas-rsvpapp.herokuapp.com/users/me", {
//             headers: {
//                 Authorization: myToken
//             }
//         }).then(function (response) {
//             if (response.status == 200) {
//                 console.log("Login successfull");
//             }
//             else {
//                 console.log("You must Login or Register First");
//                 alert("You must Login or Register First");
//                 self.props.history.goBack();
//             }
//         })
//             .catch(function (error) {
//                 alert("You must Login or Register First!!!! ")
//                 console.log(error);
//                 self.props.history.goBack();
//             });
//     }

//     getTasksEvent(event) {
//         let myToken = localStorage.getItem('jwtToken');
//         var apiBaseUrl = "https://tokas-rsvpapp.herokuapp.com/tasks";
//         var self = this;
//         var payload = {
//             "description": this.state.description
//         }
//         if (payload.description == "") {
//             alert("fill out a description")
//         }
//         else {
//             axios.post(apiBaseUrl, payload, {
//                 headers: {
//                     Authorization: myToken
//                 }
//             })
//                 .then(function (response) {
//                     if (response.status == 201) {
//                         console.log(" successfully added");
//                         self.setState({ mode: true })
//                         // var uploadScreen = [];
//                         // uploadScreen.push(<MainMenu appContext={self.props.appContext} />)
//                         // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
//                     }
//                     else {
//                         alert("something went wrong with task adding");
//                     }
//                 })
//                 .catch(function (error) {
//                     alert("Something went wrong with task adding!!!! ")
//                     console.log(error);
//                 });
//         }
//     }
//     handleChangedescription(event) {
//         this.setState({ description: event.target.value })
//     }

//     handleGoBackClick(event) {
//         this.props.history.goBack()
//     }

//     render() {
//         if (!this.state.mode) {
//             return (
//                 <div>
//                     <br />          
//                     <h2 className="Header">Enter a New Task</h2>
//       <br />
//                     <input
//                         className="inputBar"
//                         type="text"
//                         value={this.state.description}
//                         placeholder="Enter a task"
//                         onChange={this.handleChangedescription.bind(this)}
//                     />
//                     <br />                <br />

//                     <button className="AddBtn" onClick={(event) => this.getTasksEvent(event)} >Add</button>
//                     <br />                <br />
//                     <button className="SubmitBtn" onClick={(event) => this.handleGoBackClick(event)} >Back</button>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div>
//                     <br />                <br />
//                     <h1 className="Header"> Task Successfully added </h1>
//                     <br />                <br />
//                     <button className="SubmitBtn" onClick={(event) => this.handleGoBackClick(event)} >Back</button>
//                 </div>
//             );
//         }
//     }
// }

// export default AddTask;

