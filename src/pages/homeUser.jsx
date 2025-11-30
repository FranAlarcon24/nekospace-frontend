import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProyectCard from '../components/organism/ProyectCard.jsx';
import ProductosService from '../Services/Productos/ProductoService.jsx';
import '../styles/card.css'
import '../styles/homeUser.css'
import gatoSpace from '../assets/images/gatoSpace.webp'
import mapa from '../assets/images/mapa.webp'

function HomeUser() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    ProductosService.getAllProductos()
      .then((res) => {
        const raw = Array.isArray(res.data) ? res.data : (res.data.productos ?? res.data);

        const normalize = (item) => {
          const placeholder = 'https://via.placeholder.com/300x200?text=No+Image';
          const getImage = (img) => {
            if (!img) return placeholder;
            if (typeof img === 'string') return img;
            if (Array.isArray(img) && img.length) return img[0].url ?? img[0].ruta ?? img[0];
            if (typeof img === 'object') return img.url ?? img.ruta ?? img.path ?? placeholder;
            return placeholder;
          };

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
      })
      .catch((err) => {
        console.error('Error cargando productos:', err);
        setError('No se pudieron cargar los productos');
      })
      .finally(() => setLoading(false));
  }, []);

  const posters = productos.filter(p => (p.categoriaName || p.name || '').toString().toLowerCase().includes('poster') || (p.name || '').toLowerCase().includes('poster'));
  const figuritas = productos.filter(p => (p.categoriaName || p.name || '').toString().toLowerCase().includes('figu') || (p.name || '').toLowerCase().includes('figu'));

  return (
    <>
      <div className='fondo'>
        <Container className="welcome">
          <h1 className='titulo'>NekoSpace</h1>
          <img className='image' src={gatoSpace} alt="nekoSpace" />
          <p className='sub'>¡¡un espacio creado para ti¡¡</p>
          <p className='sub'>donde encontraras todo lo que nececitas o no creias nececitar</p>
          <p className='sub'>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔ </p>
        </Container>
      </div>

      <div className='fon'>
        <h2 className='titulo2'>Productos</h2>
        <Container className='pro'>
          <div>
            <h2 className='subt'>posters</h2>
            <div className='spice'>
              {loading ? <p>Cargando...</p> :
                error ? <p>{error}</p> :
                (Array.isArray(posters) && posters.length ? posters.map(item => (
                  <ProyectCard key={item.id} proyect={item} />
                )) : <p>No hay posters</p>)
              }
            </div>
          </div>
        </Container>
      </div>

      <div className='fon'>
        <Container className='pro'>
          <div>
            <h2 className='subt'>Figuritas</h2>
            <div className='spice'>
              {loading ? <p>Cargando...</p> :
                error ? <p>{error}</p> :
                (Array.isArray(figuritas) && figuritas.length ? figuritas.map(item => (
                  <ProyectCard key={item.id} proyect={item} />
                )) : <p>No hay figuritas</p>)
              }
            </div>
          </div>
        </Container>
      </div>

      <div className='fondo'>
        <Container className="welcome">
          <h2 className='titulo'>NekoSpace</h2>
          <Container className='redes'>
            <img className='imagen' src={gatoSpace} alt="instagram"/><p className='sub2'>@Neko_Space</p>
            <img className='imagen' src={gatoSpace} alt="x"/><p className='sub2'>@Nek0_Space_</p>
            <img className='imagen' src={gatoSpace} alt="tiktok"/><p className='sub2'>@Neko_SpaceOwO</p>
          </Container>

          <img className='imagenM2' src={mapa} alt="mapa"/>

        </Container>
      </div>
    </>
  );
}

export default HomeUser;