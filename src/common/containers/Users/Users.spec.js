import { render, screen, waitFor } from '@testing-library/react';

// component
import { Users } from './Users';

// mirage
import { makeServer } from '../../../services/miragejs/server';

describe('Containers/Users', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render and display 10 users', async () => {
    server.createList('user', 10);

    render(<Users />);

    await waitFor(() => {
      expect(screen.getAllByTestId('user')).toHaveLength(10);
    });
  });
});
