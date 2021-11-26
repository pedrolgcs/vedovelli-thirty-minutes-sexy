import { useQuery } from 'react-query';

// services
import { api } from '../services/api';

async function getUsers() {
  const { data } = await api.get('/users');

  return data.users;
}

async function getUser(id) {
  const { data } = await api.get(`/users/${id}`);

  return data.user;
}

function useUsers() {
  return useQuery('users', () => getUsers(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export { useUsers, getUser, getUsers };
