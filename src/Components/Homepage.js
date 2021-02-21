import React, { Component } from "react";
import { Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

class Homepage extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Container fluid>
        <Row>
          <Col>
            <br />
            <h2>**********************</h2>

            {/* <img style={{ height: "85pt" }}
              src="images/kosta.jpg" alt="avatar" /> */}
          </Col>
          <Col>
            <h3>**************************</h3>
            <h1 >
              Sucessssss
            </h1>
          </Col>
        </Row>
        </Container>
        <div className='banner-text'>
          <h3 style={{padding:'0.5em'}}>**************************</h3>
          <h3>**************************</h3>
          <h3>**************************</h3>
          <h3>**************************</h3>
          <h3>**************************</h3>
          <h3>**************************</h3>
        </div>
      </div>

    );
  }
}

export default Homepage;
