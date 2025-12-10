import React, { useState, useEffect } from 'react';
import '../styles/usuariosDashboard.css';
import { uploadToImgBB } from '../utils/uploadImage';
import Carrito from '../components/molecules/Carrito';

const VITE_IMGBB_API_KEY = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;
const API_URL = import.meta.env.VITE_API_URL;



function Homeauth() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ modelo: '', categoria: '', producto: '', numeroId: '', id: '', descripcion: '', imagen: null });
  const [carrito, setCarrito] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No se encontró token de autenticación');
          return;
        }
        const response = await fetch(`${API_URL}/productos`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProducts(data.productos || []);
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };
    cargarProductos();

  }, []);

  const filteredProducts = products.filter(product =>
    product.modelo.toLowerCase().includes(search.toLowerCase()) ||
    product.categoria.toLowerCase().includes(search.toLowerCase()) ||
    product.producto.toLowerCase().includes(search.toLowerCase()) ||
    product.numeroId.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ modelo: '', categoria: '', producto: '', numeroId: '', id: '', descripcion: '', imagen: null });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!form.id || !form.modelo || !form.categoria || !form.producto || !form.numeroId || !form.descripcion || !form.imagen) {
      alert('Completa todos los campos');
      return;
    }
    let imageUrl = '';
    try {
      if (form.imagen.type === 'image/webp') {
        const reader = new FileReader();
        reader.onload = async (ev) => {
          const base64 = ev.target.result.split(',')[1];
          const formData = new FormData();
          formData.append('image', base64);
          const response = await fetch(IMG_BB_API_KEY, {
            method: 'POST',
            body: formData
          });
          const result = await response.json();
          if (result.success) {
            imageUrl = result.data.url;
            setProducts([
              ...products,
              {
                id: form.id,
                modelo: form.modelo,
                categoria: form.categoria,
                producto: form.producto,
                numeroId: form.numeroId,
                descripcion: form.descripcion,
                imagen: imageUrl
              }
            ]);
            handleCloseModal();
          } else {
            alert('Error al subir la imagen');
          }
        };
        reader.readAsDataURL(form.imagen);
        return;
      } else {
        const result = await uploadToImgBB(form.imagen);
        imageUrl = result.url;
        setProducts([
          ...products,
          {
            id: form.id,
            modelo: form.modelo,
            categoria: form.categoria,
            producto: form.producto,
            numeroId: form.numeroId,
            descripcion: form.descripcion,
            imagen: imageUrl
          }
        ]);
        handleCloseModal();
        return;
      }
    } catch (err) {
      alert('Error al subir la imagen');
      return;
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleAddToCarrito = (product) => {
    setCarrito([...carrito, product]);
    setShowCarrito(true);
  };

  const handleRemoveFromCarrito = (idx) => {
    setCarrito(carrito.filter((_, i) => i !== idx));
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Productos</h2>
      <button className="nuevo-btn" onClick={handleOpenModal}>+ Nuevo</button>
      <button className="nuevo-btn" style={{float:'right',background:'#624f85'}} onClick={()=>setShowCarrito(true)}>🛒 Ver carrito ({carrito.length})</button>
      {showCarrito && (
        <Carrito items={carrito} onRemove={handleRemoveFromCarrito} onClose={()=>setShowCarrito(false)} />
      )}
      {showModal && (
        <div className="modal-bg">
          <div className="modal-content">
            <h3>Agregar producto</h3>
            <form onSubmit={handleAddProduct} className="modal-form">
              <input name="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo" />
              <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoria producto" />
              <input name="producto" value={form.producto} onChange={handleChange} placeholder="Producto" />
              <input name="numeroId" value={form.numeroId} onChange={handleChange} placeholder="N° ID" />
              <input name="id" value={form.id || ''} onChange={handleChange} placeholder="ID del producto" />
              <input name="descripcion" value={form.descripcion || ''} onChange={handleChange} placeholder="Descripción del producto" />
              <input type="file" accept="image/*" onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  setForm({ ...form, imagen: file, preview: URL.createObjectURL(file) });
                } else {
                  setForm({ ...form, imagen: null, preview: null });
                }
              }} />
              {form.preview && (
                <img src={form.preview} alt="Vista previa" style={{width:60,height:60,borderRadius:8,marginTop:8}} />
              )}
              <div className="modal-actions">
                <button type="submit" className="nuevo-btn">Agregar</button>
                <button type="button" className="nuevo-btn" onClick={handleCloseModal} style={{background:'#e74c3c'}}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="table-responsive">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <table className="usuarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Modelo</th>
              <th>Categoria producto</th>
              <th>Producto</th>
              <th>N° ID</th>
              <th>Descripción</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.modelo}</td>
                <td>{product.categoria}</td>
                <td>{product.producto}</td>
                <td>{product.numeroId}</td>
                <td>{product.descripcion}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)} title="Eliminar producto">🗑️</button>
                  <button className="nuevo-btn" style={{background:'#2d9cdb',marginLeft:4}} onClick={()=>handleAddToCarrito(product)}>Agregar al carrito</button>
                </td>
                {product.imagen && (
                  <td><img src={product.imagen} alt="Producto" style={{width:40,height:40,borderRadius:6}} /></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Showing 1 to {filteredProducts.length} of {products.length} entries</span>
          {/* Pagination controls can be added here */}
        </div>
      </div>
      <footer className="usuarios-footer">
        Copyright © 2025 <a href="#">Tarea completa</a>. Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Homeauth;
