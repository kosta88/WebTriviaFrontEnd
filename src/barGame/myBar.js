// import React, { Component } from 'react';
// import axios from 'axios';
// import construction from '../img/construction.jpg'

// class myBar extends Component {
//     constructor(props) {
//         super(props);
//     }

//     getBarData(event) {
//         let myToken = localStorage.getItem('jwtToken');
//         var self = this;
//         //****************to do */
//         axios.get("https://tokas-rsvpapp.herokuapp.com/users/me", {
//             headers: {
//                 Authorization: myToken
//             }
//         }).then(function (response) {
//             if (response.status == 200) {
//                 console.log("got data successfull");
//             }
//             else {
//                 console.log("get Data error");
//                 alert("get Data error");
//                 self.props.history.goBack();
//             }
//         })
//             .catch(function (error) {
//                 alert("get Data error!!!! ")
//                 console.log(error);
//                 self.props.history.goBack();
//             });
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
//                 if (response.data.hasclub == "false") {
//                     this.props.history.push("/setupBar")
//                 }
//                 // this.getBarData();
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

//     render() {
//         return (
//             <div>
//                 <React.Fragment>
//                 <img src={construction} />
//                 <br/>
//                 </React.Fragment>
//                 <button className="BackBtn" onClick={(event) => this.handleClickBack(event)}>BACK</button>
//             </div>
//         );
//     }
// }

// export default myBar;

