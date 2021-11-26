import { ReactLocation, Outlet, Router, Link, useMatch } from 'react-location';

// inicialize
const location = new ReactLocation();

const routes = [
  {
    path: '/',
    element: () =>
      import('../pages/Dashboard').then((module) => <module.Dashboard />),
  },
  {
    path: '/users',
    element: () => import('../pages/Users').then((module) => <module.Users />),
  },
  {
    path: '/products',
    element: () =>
      import('../pages/Products').then((module) => <module.Products />),
  },
];

export { routes, location, useMatch, Outlet, Router, Link };
