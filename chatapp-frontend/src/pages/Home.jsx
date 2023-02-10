import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Home.css';




export default function Home() {
  return (
    <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1 className='title'>Share the world with your buddies</h1>
          <p className='description'><span>Go chat</span> lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="outline-primary">Get Started <i className="fa-solid fa-comments home-message-icon"></i></Button>
            
          </LinkContainer>
        </div>

      </Col>
      <Col md={6} className="home_bg">

      </Col>
    </Row>




  )
}
