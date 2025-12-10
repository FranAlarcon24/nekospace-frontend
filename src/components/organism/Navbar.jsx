import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ onCarritoClick, carritoCount }) {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="tirita-neg">
        <Navbar.Brand href="/">NekoSpace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me" style={{alignItems:'center', width:'100%', justifyContent:'flex-end'}}>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar Session</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre nosotros</Nav.Link>
            <Nav.Link
              style={{
                marginLeft: 'auto',
                background: '#624f85',
                color: '#fff',
                borderRadius: '20px',
                padding: '8px 24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                height: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onClick={() => navigate('/carrito')}
            >
              <span style={{marginRight:8}}>🛒</span> Carrito{carritoCount > 0 ? ` (${carritoCount})` : ''}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;