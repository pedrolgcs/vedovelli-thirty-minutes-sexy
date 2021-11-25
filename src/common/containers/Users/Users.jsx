// routes
import { useMatch } from '../../../routes';

// components
import { Card } from './Card';

function Users() {
  const {
    data: { users },
  } = useMatch();

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
