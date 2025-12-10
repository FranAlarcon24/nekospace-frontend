import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthC';

function NavBar({ onCarritoClick, carritoCount }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const getRole = (u) => {
    if (!u) return null;
    if (u.role) return String(u.role).toLowerCase();
    if (u.Rol) return String(u.Rol).toLowerCase();
    if (u.rol) {
      if (typeof u.rol === 'string') return u.rol.toLowerCase();
      if (u.rol.nombre) return String(u.rol.nombre).toLowerCase();
      if (u.rol.name) return String(u.rol.name).toLowerCase();
    }
    return null;
  };

  const isAdmin = () => {
    const role = getRole(user);
    return role && role.includes('admin');
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="tirita-neg">
        <Navbar.Brand href="/">NekoSpace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me" style={{alignItems:'center', width:'100%', justifyContent:'flex-end'}}>
            <Nav.Link href="/">Inicio</Nav.Link>
            {user ? (
              <Nav.Link
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                style={{ cursor: 'pointer' }}
              >
                Cerrar sesión
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">Iniciar Session</Nav.Link>
            )}
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            {isAdmin() && <Nav.Link as={Link} to="/Homeauth">Admin</Nav.Link>}
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