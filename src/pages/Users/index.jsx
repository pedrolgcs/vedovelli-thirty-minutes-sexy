// containers
import { Card } from '../../common/containers/Users/Card';

// components
import { Spinner } from '../../common/components';

// hooks
import { useUsers } from '../../hooks/useUsers';

function Users() {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading)
    return (
      <div className="w-ful h-56 flex flex-wrap content-center justify-center">
        <Spinner />
      </div>
    );

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
