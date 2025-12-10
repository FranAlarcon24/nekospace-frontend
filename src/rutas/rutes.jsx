import { lazy } from 'react';
import AdminRoute from './AdminRoute';

const Home = lazy(() => import('../pages/homeUser'));
const Login = lazy(() => import('../pages/Login'));
const CreateUser = lazy(() => import('../pages/create-user'));
const UsuariosDashboard = lazy(() => import('../pages/usuariosDashboard'));
const Homeauth = lazy(() => import('../pages/Homeauth'));
const Contacto = lazy(() => import('../pages/contacto'));
const CarritoPage = lazy(() => import('../pages/carrito'));
const About = lazy(() => import('../pages/about'));
const Catalogo = lazy(() => import('../pages/Catalogo'));



const userRoutes = [
  { path: '/', element: <Home />, showNavbar: true },
  { path: '/login', element: <Login />, showNavbar: false },
  { path: '/catalogo', element: <Catalogo />, showNavbar: true },
  { path: '/create-user', element: <CreateUser />, showNavbar: false },
  { path: '/contacto', element: <Contacto />, showNavbar: true },
  { path: '/carrito', element: <CarritoPage />, showNavbar: true },
  { path: '/about', element: <About />, showNavbar: true },
];

const adminRoutes = [
  { path: '/Homeauth', element: <AdminRoute><Homeauth/></AdminRoute>, isAdmin: true, showNavbar: true },
  { path: '/admin/usuarios', element: <AdminRoute><UsuariosDashboard/></AdminRoute>, isAdmin: true, showNavbar: true },
];

const notFoundRoute = {
  path: '*',
  element: <div style={{ padding: 24 }}>404 — Página no encontrada</div>,
  showNavbar: false,
};

export const appRoutes = [...userRoutes, ...adminRoutes, notFoundRoute];