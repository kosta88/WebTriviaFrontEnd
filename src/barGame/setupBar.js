// import React, { Component } from 'react';
// import axios from 'axios';
// import construction from '../img/construction.jpg'

// class setupBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             'nickName': '',
//             'themeColor': ''
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

//     handleClickBack(event) {
//         this.props.history.goBack()
//     }
//     handleChangeName(event) {
//         this.setState({ nickName: event.target.value })
//     }




//     handleClick(event) {
//         let myToken = localStorage.getItem('jwtToken');
//         var apiBaseUrl = "https://tokas-rsvpapp.herokuapp.com/users/gotTeam";
//         var self = this;
//         var payload = {
//             "name": this.state.nickName
//         }
//         if (payload.name == "" ) {
//             alert("you must choose a Name")
//         }
//         else {
//             axios.patch(apiBaseUrl, payload, {
//                 headers: {
//                     Authorization: myToken
//                 }
//             }).then(function (response) {
//                     if (response.status == 200) {
//                         console.log("bar creation successfull");
//                         self.props.history.push("/myBar");
//                     }
//                     else {
//                         console.log("Cannot open a Bar");
//                         alert("Cannot open a Bar");
//                     }
//                 })
//                 .catch(function (error) {
//                     alert("Something went wrong Cannot open a Bar ")
//                     console.log(error);
//                 });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <br />
//                 <h1 className="Header">Choose A Name for your Bar</h1><br />
//                 <input
//                     className="inputBar"
//                     type="text"
//                     placeholder="Enter a Name for your Bar"
//                     value={this.state.nickName}
//                     onChange={this.handleChangeName.bind(this)}
//                 />
//                 <br /><br />
//                 <p className="Notice">Pay attention , you cannot change that name, so choose with wisdom</p>
//                 <button className="SubmitBtn" onClick={(event) => this.handleClick(event)}>confirm</button>
//                 <br /><br /> <br />
//                 <button className="BackBtn" onClick={(event) => this.handleClickBack(event)}>Back</button>
//                 <br />
//             </div>
//         );
//     }
// }

// export default setupBar;

