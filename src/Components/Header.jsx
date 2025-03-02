import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  sticky="top">
    <Container>
      <Navbar.Brand href="#home">CINETRENDS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Service" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Spoken Hindi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Spoken English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">PSC Class</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">School Tuitions</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">College Tuitions</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Job Search</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Thozhil Vaartha</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Real Estate</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default Header;
