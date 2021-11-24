import { useState, useEffect } from 'react';

// services
import { api } from '../../../services/api';

// components
import { Card } from './Card';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

export { Users };
