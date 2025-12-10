import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ProductoService from '../Services/Productos/ProductoService.jsx';
import ProyectCard from '../components/organism/ProyectCard.jsx';
import Carrito from '../components/molecules/Carrito';
import '../styles/card.css';
import '../styles/homeUser.css';
import brillos from '../assets/images/brillos.webp';

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await ProductoService.getAllProductos();
        if (!mounted) return;
        const raw = Array.isArray(res?.data) ? res.data : (res?.data?.productos ?? res?.data?.content ?? res?.data ?? []);

        const placeholder = 'https://placehold.co/300x200?text=No+Image';
        const getImage = (img) => {
          if (!img) return placeholder;
          if (typeof img === 'string') return img;
          if (Array.isArray(img) && img.length) return img[0].url ?? img[0].ruta ?? img[0];
          if (typeof img === 'object') return img.url ?? img.ruta ?? img.path ?? placeholder;
          return placeholder;
        };

        const normalize = (item) => {
          const categoriaName = item.categoria?.nombreCategoria ?? item.categoria?.nombre ?? (typeof item.categoria === 'string' ? item.categoria : undefined);
          return {
            id: item.id ?? item._id,
            name: item.nombreProducto ?? item.name ?? item.titulo ?? '',
            descripcion: item.descripcionProducto ?? item.descripcion ?? '',
            image: getImage(item.imagen ?? item.image),
            repoUrl: item.repoUrl ?? '#',
            precio: item.precio ?? null,
            categoriaName,
            raw: item,
          };
        };

        const normalized = raw.map(normalize);
        setProductos(normalized);
      } catch (e) {
        setError('No se pudo cargar el catálogo.');
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <Container className="py-4" style={{color:'#fff'}}>
        <Spinner animation="border" variant="light" />
      </Container>
    );
  }

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
      }}
    >
      <Container style={{ color: '#fff' }}>
        {showCarrito && (
          <Carrito
            items={carrito}
            onRemove={(idx) => setCarrito(carrito.filter((_, i) => i !== idx))}
            onClose={() => setShowCarrito(false)}
            onClear={() => setCarrito([])}
          />
        )}
        <h2 className="mb-4">Catálogo</h2>
        {error && (
          <div style={{background:'rgba(10,3,23,0.7)', padding:16, borderRadius:8, marginBottom:16}}>
            {error}
          </div>
        )}
        <div className='spice'>
          {Array.isArray(productos) && productos.length ? productos.map(item => (
            <ProyectCard key={item.id} proyect={item} onAddToCarrito={(prod)=>{ setCarrito([...carrito, prod]); setShowCarrito(true); }} />
          )) : <p>No hay productos</p>}
        </div>
      </Container>
    </div>
  );
}

export default Catalogo;
