import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organism/Navbar.jsx';
import { appRoutes } from './rutas/rutes';

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {appRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
