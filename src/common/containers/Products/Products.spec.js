// mirage
import { makeServer } from '../../../services/miragejs/server';

describe('Containers/Products', () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render', () => {
    expect(true).toBe(true);
  });
});
