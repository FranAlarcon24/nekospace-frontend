import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/Navbar.jsx';
import { appRoutes } from './rutas/rutes';

function App() {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('carrito');
    return saved ? JSON.parse(saved) : [];
  });
  const [showCarrito, setShowCarrito] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <>
      <NavBar onCarritoClick={() => setShowCarrito(true)} carritoCount={carrito.length} />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {appRoutes.map((r, i) => (
            React.cloneElement(r.element, {
              carrito,
              setCarrito,
              showCarrito,
              setShowCarrito,
            })
            ? <Route key={i} path={r.path} element={React.cloneElement(r.element, {
              carrito,
              setCarrito,
              showCarrito,
              setShowCarrito,
            })} />
            : <Route key={i} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
