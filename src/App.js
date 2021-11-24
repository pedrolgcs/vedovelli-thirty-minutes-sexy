import { useState, useEffect } from 'react';

// services
import { api } from './services/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/users');

        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadUsers();
  }, []);

  console.log(users);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
