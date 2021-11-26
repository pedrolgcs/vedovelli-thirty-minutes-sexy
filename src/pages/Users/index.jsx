// components
import { Card } from '../../common/containers/Users/Card';

// hooks
import { useUsers } from '../../hooks/useUsers';

function Users() {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

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
