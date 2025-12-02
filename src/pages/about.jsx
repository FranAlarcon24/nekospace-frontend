import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Contacto.css';
import simpsonsGroup from '../assets/images/download (1).webp';
import brillos from '../assets/images/brillos.webp';

function About() {
  return (
    <div
      className="fon"
      style={{
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        paddingTop: 40,
        backgroundImage: `url(${brillos})`,
        backgroundColor: 'rgb(98, 79, 133)',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Container
        style={{
          textAlign: 'center',
          color: '#fff',
          background: 'rgba(10,3,23,0.7)',
          borderRadius: '16px',
          padding: '32px',
          marginTop: '32px',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ color: '#fff' }}>Sobre nosotros</h2>
        <p>
          En NekoSpace somos fanáticos del anime, la cultura pop y la creatividad. Nuestra tienda está dedicada a ofrecerte productos exclusivos, figuras, accesorios, ropa y artículos coleccionables inspirados en tus series y personajes favoritos.
        </p>
        <p>
          Buscamos que cada fan encuentre algo especial, único y de calidad. ¡Explora nuestro catálogo y vive tu pasión por el anime y la cultura geek con nosotros!
        </p>
        <p>¡Gracias por ser parte de la comunidad NekoSpace!</p>
        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
          <img
            src={simpsonsGroup}
            alt="Simpsons grupo"
            style={{
              marginTop: 32,
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              display: 'block',
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default About;
