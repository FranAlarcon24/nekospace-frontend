import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthC';

// Usage: <AdminRoute><YourAdminComponent/></AdminRoute>
export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null; // or a spinner

  // determine role robustly
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

  const role = getRole(user);

  if (!user) {
    // not authenticated
    return <Navigate to="/login" replace />;
  }

  if (role && role.includes('admin')) {
    return children;
  }

  // authenticated but not admin
  return <Navigate to="/" replace />;
}
