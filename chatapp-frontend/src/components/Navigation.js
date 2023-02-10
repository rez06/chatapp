import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/chat-logo.svg';

export default function Navigation() {
  return (
     <Navbar bg="white" expand="lg">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src={logo} style={{ width: 100, height: 100 }} alt='Chat logo' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/chat'>
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}





