import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  const linkStyle = { color: 'white', fontWeight: '500' }; // Reusable link style

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: 'black',
        boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
        
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white', fontWeight: '600' }}>
          CINETRENDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={linkStyle}>Home</Nav.Link>
            <Nav.Link href="#about" style={linkStyle}>About</Nav.Link>
            <NavDropdown
              title={<span style={linkStyle}>Service</span>}
              id="basic-nav-dropdown"
              menuVariant="dark" // Dark dropdown to match the theme
            >
              <NavDropdown.Item href="#action/3.1">Spoken Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Spoken English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PSC Class</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">School Tuitions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">College Tuitions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Job Search</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Thozhil Vaartha</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Real Estate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" style={linkStyle}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
