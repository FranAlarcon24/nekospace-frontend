import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavBar() {
 return (
   <Navbar bg="dark" variant="dark" expand="lg">
     <Container className="tirita-neg">
       <Navbar.Brand href="/">NekoSpace</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar Session</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
}


export default NavBar;