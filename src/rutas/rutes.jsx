import { lazy } from 'react';

const Home = lazy(() => import('../pages/homeUser'));
const Login = lazy(() => import('../pages/Login'));
const CreateUser = lazy(() => import('../pages/create-user'));
const UsuariosDashboard = lazy(() => import('../pages/usuariosDashboard'));
const Homeauth = lazy(() => import('../pages/Homeauth'));
const Contacto = lazy(() => import('../pages/contacto'));
const CarritoPage = lazy(() => import('../pages/carrito'));
const About = lazy(() => import('../pages/about'));

const userRoutes = [
  { path: '/', element: <Home />, showNavbar: true },
  { path: '/login', element: <Login />, showNavbar: false },
  { path: '/create-user', element: <CreateUser />, showNavbar: false },
  { path: '/contacto', element: <Contacto />, showNavbar: true },
  { path: '/carrito', element: <CarritoPage />, showNavbar: true },
  { path: '/about', element: <About />, showNavbar: true },
];

const adminRoutes = [
  { path: '/Homeauth', element: <Homeauth />, isAdmin: true, showNavbar: true },
  { path: '/admin/usuarios', element: <UsuariosDashboard />, isAdmin: true, showNavbar: true },
];

const notFoundRoute = {
  path: '*',
  element: <div style={{ padding: 24 }}>404 — Página no encontrada</div>,
  showNavbar: false,
};

export const appRoutes = [...userRoutes, ...adminRoutes, notFoundRoute];