import { ReactLocation, Outlet, Router, Link, useMatch } from 'react-location';

// services
import { api } from '../services/api';

// pages
import { Dashboard } from '../pages/Dashboard';
import { Users } from '../pages/Users';
import { Products } from '../pages/Products';

const location = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: async () => {
      const { data } = await api.get('/users');
      return { users: data.users };
    },
    pendingElement: async () => <div>Loading...</div>,
    pendingMs: 300,
  },
  {
    path: '/products',
    element: <Products />,
  },
];

export { routes, location, useMatch, Outlet, Router, Link };
