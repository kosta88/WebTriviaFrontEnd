import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerMode: false,
      loggedIn: true,
      token: [],
      loading: true
    }
    this.modeHandler = this.modeHandler.bind(this)
    this.loggedInStateHandler = this.loggedInStateHandler.bind(this)
  }

  loggedInStateHandler(infoVar) {
    this.setState({ loggedIn: infoVar })
  }

  modeHandler(event) {
    this.setState({ registerMode: !this.state.registerMode })
  }


  componentDidMount() {
    let myToken = localStorage.getItem('jwtToken');
    if (myToken != '') {
      var self = this;
      axios.get("https://tokas-rsvpapp.herokuapp.com/users/me", {
        headers: {
          Authorization: myToken  }  }).then(function (response) {
        if (response.status == 200) {
          console.log("Login successfull");
          self.setState({ loggedIn: true })
          self.setState({ loading: false })
        }else {
          self.setState({ loggedIn: false })
          self.setState({ loading: false })
        }  })
        .catch(function (error) {
          console.log(error);
          self.setState({ loggedIn: false })
          self.setState({ loading: false })
        });
    }  else {
      this.setState({ loading: false })
    }
  }
  /******************************************************** */
  render() {
    if (this.state.loading) {
      return (
        <div >
          <div className='Top-Header-Div'>
            <h1 className='Top-Header'>Social Trivia</h1>
          </div >
          <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-custom' variant="light" >
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faHome} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav >
                <Nav.Link href="/Play">Play a game</Nav.Link>
                <Nav.Link href="/Top">Top Scorers</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className='main-background'>
            <h1 style={{ padding: '10%' }}>Loading....</h1>
          </div>
        </div>
      );
    }
    if (!this.state.registerMode && !this.state.loggedIn) {   //in login mode
      return (
        <div style={{ textAlign: 'center' }}>
          <div className='Top-Header-Div'>
            <h1 className='Top-Header'>Social Trivia</h1>
          </div>
          <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-custom' variant="light" >
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faHome} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav >
                <Nav.Link href="/Play">Play a game</Nav.Link>
                <Nav.Link href="/Top">Top Scorers</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Login modeHandler={this.modeHandler} stateHandler={this.loggedInStateHandler} />
          </Navbar>
          <div className='main-background'>
            <Main loggedIn={this.state.loggedIn} />
          </div>
        </div>
      );
    }
    else if (this.state.registerMode && !this.state.loggedIn) {
      return (
        <div style={{ textAlign: 'center' }}>
          <div className='Top-Header-Div'>
            <h1 className='Top-Header'>Social Trivia</h1>
          </div>
          <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-custom' variant="light" >
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faHome} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Nav.Link href="/Play">Play a game</Nav.Link>
                <Nav.Link href="/Top">Top Scorers</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Signup modeHandler={this.modeHandler} stateHandler={this.loggedInStateHandler} />
          </Navbar>
          <div className='main-background'>
            <Main loggedIn={this.state.loggedIn} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div style={{ textAlign: 'center' }}>
          <div className='Top-Header-Div' >
            <h1 className='Top-Header'>Social Trivia</h1>
          </div>
          <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-custom' variant="light" >
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faHome} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <Nav className="mr-auto" >          </Nav> */}
              <Nav >
                <Nav.Link href="/Play">Play a game</Nav.Link>
                <Nav.Link href="/Top">Top Scorers</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button style={{ fontSize: '0.7em', marginRight: '1%' }}
              onClick={() => {
                this.setState({ loggedIn: false })
                localStorage.setItem('jwtToken', '');
              }}
            >Logout</Button>
          </Navbar>
          <div className='main-background'>
            <Main loggedIn={this.state.loggedIn} />
          </div>
        </div>
      );
    }
  }
}
export default App;



