import React, { useState, useEffect } from 'react';
import '../styles/usuariosDashboard.css';

const mockUsers = [
  { id: 1, name: 'Tarea completo', role: 'Admin', username: 'admin', email: 'admin@gmail.com' },
  { id: 2, name: 'joel perez', role: 'Usuario', username: 'joel', email: 'joel@gmail.com' },
  { id: 3, name: 'javier', role: 'Usuario', username: 'javier', email: 'javier@gmail.com' },
];

function UsuariosDashboard() {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.body.classList.add('home-admin-bg');
    return () => document.body.classList.remove('home-admin-bg');
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-dashboard-container">
      <h2>Usuarios</h2>
      <button className="nuevo-btn">+ Nuevo</button>
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
              <th>Nombres</th>
              <th>Tipo de usuario</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Showing 1 to {filteredUsers.length} of {users.length} entries</span>
          {/* Pagination controls can be added here */}
        </div>
      </div>
      <footer className="usuarios-footer">
        Copyright © 2025 <a href="#">Tarea completa</a>. Todos los derechos reservados
      </footer>
    </div>
  );
}

export default UsuariosDashboard;
