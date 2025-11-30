import { lazy } from 'react';

const Home = lazy(() => import('../pages/homeUser'));
const Login = lazy(() => import('../pages/Login'));
const CreateUser = lazy(() => import('../pages/create-user'));
const HomeAdmin = lazy(() => import('../pages/homeAdmin'));
const Homeauth = lazy(() => import('../pages/Homeauth'));
const Contacto = lazy(() => import('../pages/contacto'));

const userRoutes = [
  { path: '/', element: <Home />, showNavbar: true },
  { path: '/login', element: <Login />, showNavbar: false },
  { path: '/create-user', element: <CreateUser />, showNavbar: false },
  { path: '/contacto', element: <Contacto />, showNavbar: true },
];

const adminRoutes = [
  { path: '/admin/dashboard', element: <HomeAdmin />, isAdmin: true, showNavbar: true },
];

const notFoundRoute = {
  path: '*',
  element: <div style={{ padding: 24 }}>404 — Página no encontrada</div>,
  showNavbar: false,
};

export const appRoutes = [...userRoutes, ...adminRoutes, notFoundRoute];