import React from 'react';
import Carrito from '../components/molecules/Carrito';

import { useLocation, useNavigate } from 'react-router-dom';
function CarritoPage(props) {
  // Recibe props globales desde App.jsx
  const { carrito = [], setCarrito } = props;
  const navigate = useNavigate();
  const handleRemove = (idx) => {
    setCarrito(carrito.filter((_, i) => i !== idx));
  };
  const handleClear = () => {
    setCarrito([]);
  };
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div style={{paddingTop:40}}>
      <h2 style={{textAlign:'center'}}>Carrito de compras</h2>
      <Carrito items={carrito} onRemove={handleRemove} onClear={handleClear} onClose={handleClose} />
    </div>
  );
}

export default CarritoPage;
