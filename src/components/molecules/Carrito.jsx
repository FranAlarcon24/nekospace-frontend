import React from 'react';
import '../../styles/carrito.css';

function Carrito({ items, onRemove, onClose, onClear }) {
  const total = items.reduce((acc, item) => acc + (item.precio ? Number(item.precio) : 0), 0);
  return (
    <div className="carrito-modal-bg">
      <div className="carrito-modal">
        <h3>Carrito de compras</h3>
        <button className="carrito-close" onClick={onClose}>✖</button>
        {items.length === 0 ? (
          <p style={{textAlign:'center',margin:'24px 0'}}>No hay productos todavía</p>
        ) : (
          <ul className="carrito-list">
            {items.map((item, idx) => (
              <li key={idx} className="carrito-item">
                <span>{item.modelo || item.name} ({item.producto || item.categoriaName || ''})</span>
                {item.precio && <span>${item.precio}</span>}
                <button className="carrito-remove" onClick={() => onRemove(idx)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <div className="carrito-total">
          <strong>Total:</strong> ${total}
        </div>
        <div style={{display:'flex',gap:'12px',marginTop:'16px'}}>
          <button className="carrito-comprar" disabled={items.length === 0} onClick={async () => {
            if (items.length === 0) return;
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/carrito/checkout`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productos: items }),
              });
              if (response.ok) {
                alert('¡Compra realizada con éxito!');
                if (typeof onClear === 'function') onClear();
              } else {
                alert('Error al procesar la compra');
              }
            } catch (err) {
              alert('Error de conexión con el servidor');
            }
          }}>Comprar</button>
          <button className="carrito-comprar" style={{background:'#e74c3c'}} disabled={items.length === 0} onClick={() => {
            if (typeof onClear === 'function') onClear();
          }}>Limpiar carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
